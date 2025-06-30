import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  roles?: string[];
  description?: string;
  email?: string;
  profileImage?: string;
}

// Simple TypewriterText component implementation
const TypewriterText = ({ texts = ["Developer"] }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && displayText === currentText) {
      // Pause at the end of typing
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === "") {
      // Move to next text
      setIsDeleting(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        currentText.substring(
          0,
          isDeleting ? displayText.length - 1 : displayText.length + 1,
        ),
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return <span>{displayText}</span>;
};

export default function HeroSection({
  name = "Raja",
  roles = [
    "Vulnerability Assessment",
    "Cybersecurity Analyst",
    "Penetration Tester",
    "Bug Bounty Hunter",
  ],
  description = "Cybersecurity professional skilled in vulnerability assessment, penetration testing, and bug bounty hunting. Passionate about identifying and exploiting security flaws to strengthen systems and automate security through scripting. I've built custom tools like '12snake' and a 'Bug Bounty Framework' available on GitHub. Known for fast learning, adaptability, and strong communication skills, I thrive in dynamic security environments and enjoy turning complex challenges into actionable solutions.",
  email = "samael.islies@gmail.com",
  profileImage = "/main.jpg",
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center relative text-white px-6 lg:px-16 xl:px-25 pt-16">
      {/* Left Section - Profile Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center mb-12 lg:mb-0 lg:pl-12 lg:pr-6 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative ml-0 lg:-ml-8">
          {/* Cybersecurity-themed oval background with glow effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full transform scale-105 -z-10 shadow-2xl"
            style={{
              borderRadius: "50%",
              boxShadow:
                "0 0 60px rgba(239, 68, 68, 0.4), 0 0 120px rgba(239, 68, 68, 0.2)",
            }}
          ></div>
          {/* Additional glow rings */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-full transform scale-110 -z-20 animate-pulse"
            style={{ borderRadius: "50%" }}
          ></div>
          <div
            className="w-80 h-96 lg:w-96 lg:h-[480px] xl:w-[420px] xl:h-[520px] overflow-hidden border-4 border-red-500/30 shadow-2xl"
            style={{
              borderRadius: "50%",
              boxShadow: "inset 0 0 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover object-center filter brightness-110 contrast-110"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Section - Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-5 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center lg:text-left">
          Hi, It's{" "}
          <span
            className="text-red-500 drop-shadow-lg"
            style={{ textShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}
          >
            {name}
          </span>
        </h1>

        {/* Animated Job Title */}
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-8 text-center lg:text-left">
          I'm a{" "}
          <span
            className="text-red-500 font-mono"
            style={{ textShadow: "0 0 15px rgba(239, 68, 68, 0.4)" }}
          >
            <TypewriterText texts={roles} />
          </span>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-center lg:text-left mb-10 max-w-2xl text-gray-300 leading-relaxed backdrop-blur-sm">
          {description}
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-10">
          <a
            href="https://www.linkedin.com/in/raja-d-b64b281a5"
            className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/D1lie"
            className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href=" https://x.com/Alastor_lie?s=35"
            className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://medium.com/@dr.lies/advent-of-cyber-2024-day-17-writeup-with-answers-tryhackme-walkthrough-7d0015803d72"
            className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* CTA Button */}
        <button
          className={`
            border-2 border-red-500 text-red-500 
            px-8 py-3 rounded-full text-lg font-medium 
            transition-all duration-300 ease-in-out
            backdrop-blur-sm
            ${
              isHovered
                ? "bg-red-500 text-white scale-105 backdrop-blur-md"
                : "bg-transparent hover:bg-red-500 hover:text-white hover:scale-105"
            }
          `}
          style={{
            boxShadow: isHovered
              ? "0 0 30px rgba(239, 68, 68, 0.8), 0 0 60px rgba(239, 68, 68, 0.4)"
              : "0 0 20px rgba(239, 68, 68, 0.3)",
            transition:
              "all 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            const subject = encodeURIComponent("Hiring Inquiry");
            const body = encodeURIComponent(
              "Hi, I'm interested in your cybersecurity skills. Let's connect!",
            );
            window.location.href = `mailto:samael.islies@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          Hire me
        </button>
      </motion.div>
    </div>
  );
}
