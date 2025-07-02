import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import https from "https";
import querystring from "querystring";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://iamalastor.netlify.app"]
        : [
            "https://iamalastor.netlify.app",
            "http://localhost:5173",
            "http://localhost:3000",
            "https://iamalastor.netlify.app",
          ],
    credentials: true,
  }),
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use("/send-message", limiter);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Input validation middleware
const validateContactForm = [
  body("firstName")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("First name is required and must be less than 50 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name can only contain letters and spaces"),
  body("lastName")
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage("Last name is required and must be less than 50 characters")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Last name can only contain letters and spaces"),
  body("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),
  body("subject")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage("Subject is required and must be less than 100 characters"),
  body("message")
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage("Message is required and must be less than 1000 characters"),
];

// Function to send message to Telegram
function sendToTelegram(botToken, chatId, message) {
  return new Promise((resolve, reject) => {
    const data = querystring.stringify({
      chat_id: chatId,
      text: message,
    });

    const options = {
      hostname: "api.telegram.org",
      port: 443,
      path: `/bot${botToken}/sendMessage`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(data),
      },
    };

    const req = https.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        try {
          const parsedData = JSON.parse(responseData);
          if (parsedData.ok) {
            resolve(parsedData);
          } else {
            reject(new Error(`Telegram API error: ${parsedData.description}`));
          }
        } catch (error) {
          reject(new Error("Failed to parse Telegram response"));
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Contact form endpoint
app.post("/send-message", validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, subject, message } = req.body;

    // Environment variables for Telegram bot
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log("Environment check:", {
      BOT_TOKEN: BOT_TOKEN ? "Set" : "Missing",
      CHAT_ID: CHAT_ID ? "Set" : "Missing",
      NODE_ENV: process.env.NODE_ENV,
    });

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Missing Telegram configuration");
      return res.status(500).json({
        success: false,
        message:
          "Telegram bot configuration is missing. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables.",
      });
    }

    // Format message for Telegram
    const telegramMessage = `📩 New Contact Message\n👤 First Name: ${firstName}\n👤 Last Name: ${lastName}\n📧 Email: ${email}\n📌 Subject: ${subject}\n📝 Message: ${message}`;

    console.log("Sending message to Telegram:", {
      botToken: BOT_TOKEN.substring(0, 10) + "...",
      chatId: CHAT_ID,
      messageLength: telegramMessage.length,
    });

    // Send to Telegram
    await sendToTelegram(BOT_TOKEN, CHAT_ID, telegramMessage);

    console.log("Message sent successfully to Telegram");

    res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error sending message:", error.message);
    console.error("Full error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

export default app;
