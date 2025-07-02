import React, { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import { motion } from "framer-motion";
import {
  Shield,
  Code,
  Database,
  Lock,
  Search,
  Bug,
  GraduationCap,
  Award,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import routes from "tempo-routes";

// Services Section Component
function Services() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vulnerability Assessment",
      description: "Systematic process of identifying, analyzing, and prioritizing security weaknesses in applications, networks, and systems to reduce the risk of exploitation.",
      features: [
        "Reporting & Visualization",
        "Automated Scanning",
        "Vulnerability Classification",
        "Risk Scoring",
      ],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Penetration Testing",
      description: "Ethical hacking services to identify vulnerabilities before malicious actors do.",
      features: [
        "Web Application Testing",
        "Network Penetration",
        "Social Engineering",
        "Wireless Security",
      ],
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Bug Bounty Hunting",
      description: "Professional vulnerability research and responsible disclosure services.",
      features: [
        "OWASP Top 10",
        "API Security",
        "Mobile App Testing",
        "Cloud Security",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Secure Development",
      description: "Building secure applications with security-first development practices.",
      features: [
        "Secure Code Review",
        "DevSecOps",
        "Security Training",
        "SAST/DAST",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="px-6 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-red-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect and secure your
            digital infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="text-red-500 mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-red-500/30 text-red-400"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Skills Section Component
const Skills = () => {
  const skillCategories = [
    {
      title: "Security Tools",
      skills: [
        "Burp Suite",
        "Nmap",
        "Metasploit",
        "Wireshark",
        "OWASP ZAP",
        "Nessus",
        "Kali Linux",
        "John the Ripper",
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "JavaScript",
        "Bash",
        "PowerShell",
        "C++",
        "Java",
        "Go",
        "SQL",
      ],
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        "React",
        "Node.js",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "GCP",
        "Terraform",
      ],
    },
    {
      title: "Security Domains",
      skills: [
        "Web App Security",
        "Network Security",
        "Cloud Security",
        "Mobile Security",
        "IoT Security",
        "Cryptography",
      ],
    },
  ];

  const certifications = [
    { name: "VAPT", issuer: "Craw-Security", status: "Certified" },
    { name: "CEH", issuer: "Craw-Security", status: "Certified" },
    {
      name: "cybersecurity analyst job simulation",
      issuer: "TATA",
      status: "Certified",
    },
    {
      name: "SQL-injection-Attacks",
      issuer: "EC-Council",
      status: "Certified",
    },
    {
      name: "Mobile Application Penetration Testing",
      issuer: "Craw-Security",
      status: "Certified",
    },
    {
      name: "Digital forensics",
      issuer: "Craw-Security",
      status: "Certified",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="px-6 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="text-red-500">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for modern cybersecurity challenges
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          className="bg-red-500/20 text-red-400 hover:bg-red-500/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Award className="w-6 h-6 text-red-500" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 border border-gray-700 rounded-lg"
                    >
                      <h3 className="font-bold text-white">{cert.name}</h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                      <Badge
                        className={
                          cert.status === "Certified"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Education Section Component
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications",
      school: "Maharshi Dayanand University",
      year: "2022-2024",
      description:
        "Focused on core concepts of computer science, software development, networking, and database management. Gained hands-on experience through academic projects, scripting automation. Developed a strong foundation in programming languages like Python, Java, and JavaScript.",
      gpa: "2.5/4.0",
    },
    {
      degree: "one-year diploma in cyber security",
      school: "Craw Security",
      year: "2025-2026",
      description:
        "Covered ethical hacking, penetration testing, network security, and digital forensics with hands-on labs and real-world attack simulations.",
      gpa: "3.9/4.0",
    },
  ];

  const courses = [
    "penetration testing",
    "Vulnerability Assessment and Penetration Testing",
    "Network Security",
    "Digital Forensics",
    "Ethical Hacking",
    "Mobile Application Penetration Testing",
    "Security Risk Management",
    "Cloud Security Architecture",
    "Incident Response",
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="px-6 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-red-500">Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation and continuous learning in cybersecurity
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-xl mb-2">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-red-400 text-lg">
                          {edu.school}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-red-500/20 text-red-400">
                          {edu.year}
                        </Badge>
                        <p className="text-gray-400 mt-2">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-red-500" />
                  Relevant Coursework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {courses.map((course, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-red-500/30 text-red-400 justify-center py-2"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Projects Section Component
const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Replace 'yourusername' with your actual GitHub username
        const response = await fetch(
          "https://api.github.com/users/D1lie/repos?sort=updated&per_page=6",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
        // Fallback to sample projects if API fails
        setProjects([
          {
            id: 1,
            name: "12SNAKE - Advanced Web Vulnerability Scanner",
            description:
              "12SNEKA is a comprehensive web vulnerability scanner that integrates multiple security tools into a unified interface for efficient penetration testing and security assessments.",
            html_url: "https://github.com/D1lie/12SNAKE.git",
            language: "Bash",
            stargazers_count: 45,
            topics: [
              "security",
              "bugbounty",
              "scanner",
              "Nmap",
              "penetration-testing",
            ],
            screenshot: "/12snake-screenshot.png",
          },
          {
            id: 2,
            name: "BugBounty-Framework",
            description:
              "This framework is for beginners to automation bug bounty and can make reports.",
            html_url: "https://github.com/D1lie/BugBounty-Framework.git",
            language: "Javascript",
            stargazers_count: 32,
            topics: ["bug-bounty", "automation", "security", "framework"],
            screenshot: "/bugbounty-framework-screenshot.png",
          },
          {
            id: 3,
            name: "Secure Chat App",
            description:
              "End-to-end encrypted chat application with React frontend and Node.js backend. Implements Signal protocol for security.",
            html_url: "#",
            language: "JavaScript",
            stargazers_count: 28,
            topics: ["react", "nodejs", "encryption", "chat"],
          },
          {
            id: 4,
            name: "Password Manager",
            description:
              "Secure password manager with AES-256 encryption, biometric authentication, and cross-platform synchronization.",
            html_url: "#",
            language: "TypeScript",
            stargazers_count: 89,
            topics: ["security", "encryption", "passwords", "typescript"],
          },
          {
            id: 5,
            name: "Penetration Testing Framework",
            description:
              "Modular penetration testing framework with automated exploit modules and comprehensive reporting system.",
            html_url: "#",
            language: "Python",
            stargazers_count: 156,
            topics: ["pentesting", "security", "framework", "automation"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      Python: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      TypeScript: "bg-blue-600",
      Go: "bg-cyan-500",
      Java: "bg-orange-500",
      C: "bg-gray-500",
      "C++": "bg-pink-500",
      Rust: "bg-orange-600",
      Shell: "bg-green-500",
    };
    return colors[language] || "bg-gray-500";
  };

  if (loading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div className="px-6 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-red-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of cybersecurity tools and applications I've built
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full flex flex-col">
                  {project.screenshot && (
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={project.screenshot}
                        alt={`${project.name} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-white text-lg">
                        {project.name}
                      </CardTitle>
                      {project.stargazers_count !== undefined && (
                        <div className="flex items-center text-gray-400 text-sm">
                          <span className="mr-1">⭐</span>
                          {project.stargazers_count}
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-gray-300 text-sm line-clamp-3">
                      {project.description || "No description available"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {project.language && (
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}
                          ></div>
                          <span className="text-gray-400 text-sm">
                            {project.language}
                          </span>
                        </div>
                      )}

                      {project.topics && project.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.topics.slice(0, 4).map((topic, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="border-red-500/30 text-red-400 text-xs"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <Button
                        asChild
                        className="w-full bg-red-500 hover:bg-red-600 text-white"
                      >
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Code className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Section Component
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>(
    {},
  );

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const subject = (formData.get("subject") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!firstName) errors.firstName = "First name is required";
    if (!lastName) errors.lastName = "Last name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!subject) errors.subject = "Subject is required";
    if (!message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    setFormErrors({});

    const formData = new FormData(e.target as HTMLFormElement);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Backend API:", import.meta.env.VITE_API_URL); // ✅ Add this line
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Network error. Please make sure the server is running on port 3001 and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white">
      <div className="px-6 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to secure your digital assets? Let's discuss your
            cybersecurity needs.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-6">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">samael.islies@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+91 (000) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">India, New Delhi</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-white font-semibold mb-4">
                    Response Time
                  </h3>
                  <p className="text-gray-300">
                    I typically respond to all inquiries within 24 hours. For
                    urgent security matters, please call directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 border border-green-500/30 text-green-400"
                        : "bg-red-500/20 border border-red-500/30 text-red-400"
                    }`}
                  >
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        className={`bg-gray-800 border-gray-700 text-white ${
                          formErrors.firstName ? "border-red-500" : ""
                        }`}
                        placeholder="John"
                        disabled={isSubmitting}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-400 text-xs mt-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        className={`bg-gray-800 border-gray-700 text-white ${
                          formErrors.lastName ? "border-red-500" : ""
                        }`}
                        placeholder="Doe"
                        disabled={isSubmitting}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-400 text-xs mt-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      className={`bg-gray-800 border-gray-700 text-white ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      className={`bg-gray-800 border-gray-700 text-white ${
                        formErrors.subject ? "border-red-500" : ""
                      }`}
                      placeholder="Security Consultation Request"
                      disabled={isSubmitting}
                    />
                    {formErrors.subject && (
                      <p className="text-red-400 text-xs mt-1">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      className={`bg-gray-800 border-gray-700 text-white min-h-[120px] ${
                        formErrors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Tell me about your cybersecurity needs..."
                      disabled={isSubmitting}
                    />
                    {formErrors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Main Home Component with all sections
const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Global Cybersecurity Background */}
      <div className="fixed inset-0 z-0">
        {/* Advanced Cybersecurity Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-950/30 via-transparent to-green-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-950/20 via-transparent to-purple-950/15"></div>

        {/* Enhanced Matrix Grid with Animation */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 0, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 0, 0.15) 1px, transparent 1px),
                linear-gradient(45deg, rgba(255, 0, 0, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px, 40px 40px, 80px 80px",
              animationDuration: "4s",
            }}
          ></div>
        </div>

        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        {/* Advanced Floating Code Elements */}
        <div className="absolute top-16 left-8 text-green-400/25 font-mono text-xs transform rotate-12 select-none animate-pulse">
          #!/bin/bash
          <br /># Vulnerability Scanner
        </div>
        <div className="absolute top-32 right-16 text-red-400/25 font-mono text-xs transform -rotate-6 select-none">
          nmap -sS -sV -O --script vuln target.com
        </div>
        <div className="absolute top-1/2 left-12 text-cyan-400/20 font-mono text-xs transform rotate-3 select-none">
          sqlmap -u &quot;http://target.com/page?id=1&quot; --dbs
        </div>
        <div className="absolute bottom-40 right-24 text-yellow-400/25 font-mono text-xs transform -rotate-8 select-none">
          ./exploit.py --payload reverse_shell --lhost 10.0.0.1
        </div>
        <div className="absolute bottom-24 left-16 text-purple-400/20 font-mono text-xs transform rotate-6 select-none">
          CVE-2024-1337: Remote Code Execution
        </div>
        <div className="absolute top-1/3 right-1/3 text-orange-400/20 font-mono text-xs transform -rotate-3 select-none">
          hydra -l admin -P wordlist.txt ssh://target
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-pink-400/20 font-mono text-xs transform rotate-9 select-none">
          msfconsole -q -x &quot;use exploit/multi/handler&quot;
        </div>

        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-400/40 rounded-full animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/6 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/6 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>

        {/* Scanning Lines Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"
            style={{
              top: "20%",
              animation: "scan-vertical 8s linear infinite",
            }}
          ></div>
          <div
            className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-red-400/30 to-transparent"
            style={{
              left: "30%",
              animation: "scan-horizontal 10s linear infinite",
            }}
          ></div>
        </div>

        {/* Terminal Window Effect */}
        <div className="absolute top-8 right-8 w-64 h-32 bg-black/40 border border-green-400/30 rounded-lg backdrop-blur-sm">
          <div className="flex items-center justify-between p-2 border-b border-green-400/20">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 text-xs font-mono">
              root@kali:~#
            </span>
          </div>
          <div className="p-2 font-mono text-xs text-green-400/70">
            <div className="animate-pulse">$ nmap -sS target.com</div>
            <div className="text-green-300/50">Starting Nmap scan...</div>
            <div className="text-red-400/50">22/tcp open ssh</div>
            <div className="text-yellow-400/50">80/tcp open http</div>
          </div>
        </div>
      </div>

      <NavigationBar />
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-24">
          <Services />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-24">
          <Skills />
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen py-24">
          <Education />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-24">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-24">
          <Contact />
        </section>
      </main>
    </div>
  );
};

function App() {
  const tempoRoutes =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {tempoRoutes}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
