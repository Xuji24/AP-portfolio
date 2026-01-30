"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { Linkedin, Github, Mail, CheckCircle } from "lucide-react";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <section className="py-20 animate-fade-in">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/50 border border-teal-200 dark:border-teal-700/50">
            <Mail size={16} className="text-teal-600 dark:text-teal-400" />
            <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-black dark:text-white mb-4">
            Let&apos;s create{" "}
            <span className="bg-linear-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
              something amazing
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message and let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
              Connect with me
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Feel free to reach out through any of these channels. I usually
                respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:principio.ap@gmail.com"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 hover:shadow-lg"
              >
                <div className="p-3 rounded-xl bg-linear-to-br from-teal-500/20 to-blue-500/20 group-hover:from-teal-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                  <Mail
                    size={24}
                    className="text-teal-600 dark:text-teal-400"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-black dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                    principio.ap@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/angelo-principio-6b8380296/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 hover:shadow-lg"
              >
                <div className="p-3 rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
                  <Linkedin
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    LinkedIn
                  </p>
                  <p className="text-lg font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Angelo Principio
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Xuji24"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 hover:shadow-lg"
              >
                <div className="p-3 rounded-xl bg-linear-to-br from-gray-600/20 to-gray-800/20 group-hover:from-gray-600/40 group-hover:to-gray-800/40 transition-all duration-300">
                  <Github
                    size={24}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    GitHub
                  </p>
                  <p className="text-lg font-semibold text-black dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    Xuji24
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-slide-in-right"
          >
            <div
              className="animate-slide-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-6 py-4 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-400/50 dark:focus:border-teal-500/50 focus:ring-2 focus:ring-teal-600/20 dark:focus:ring-teal-400/20 transition-all duration-200 hover:border-white/20 dark:hover:border-white/20"
              />
            </div>

            <div
              className="animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry..."
                required
                className="w-full px-6 py-4 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-400/50 dark:focus:border-teal-500/50 focus:ring-2 focus:ring-teal-600/20 dark:focus:ring-teal-400/20 transition-all duration-200 hover:border-white/20 dark:hover:border-white/20"
              />
            </div>

            <div
              className="animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project ideas..."
                required
                rows={6}
                className="w-full px-6 py-4 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-teal-400/50 dark:focus:border-teal-500/50 focus:ring-2 focus:ring-teal-600/20 dark:focus:ring-teal-400/20 transition-all duration-200 resize-none hover:border-white/20 dark:hover:border-white/20"
              />
            </div>

            <div
              className="animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full transition-all duration-300 hover:shadow-xl"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Mail size={20} />
              </Button>
            </div>

            {submitStatus === "success" && (
              <div className="p-4 rounded-xl bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50 animate-slide-in-up">
                <p className="text-green-700 dark:text-green-300 font-semibold flex items-center gap-2">
                  <CheckCircle size={18} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700/50 animate-slide-in-up">
                <p className="text-red-700 dark:text-red-300 font-semibold">
                  Failed to send message. Please try again or email me directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
