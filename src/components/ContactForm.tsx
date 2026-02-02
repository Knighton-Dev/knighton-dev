"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // For now, this creates a mailto link as a fallback
    // You can integrate with a form service like Formspree, Netlify Forms, or your own API
    const mailtoLink = `mailto:ian@knighton.dev?subject=Project%20Inquiry%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus("success");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#262626] text-white placeholder-gray-500 focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#262626] text-white placeholder-gray-500 focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22] transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#262626] text-white placeholder-gray-500 focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22] transition-colors"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#262626] text-white focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22] transition-colors"
          >
            <option value="">Select a type</option>
            <option value="platform-engineering">Platform Engineering</option>
            <option value="cloud-migration">Cloud Migration</option>
            <option value="cicd-devops">CI/CD & DevOps</option>
            <option value="sre-observability">SRE & Observability</option>
            <option value="consulting">Technical Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-[#262626] text-white placeholder-gray-500 focus:border-[#228B22] focus:ring-1 focus:ring-[#228B22] transition-colors resize-none"
          placeholder="Tell me about your infrastructure challenges..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#228B22] hover:bg-[#1a6b1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#228B22] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-[#228B22] text-center">
          Your email client should open with your message. If not, please email ian@knighton.dev directly.
        </p>
      )}
    </form>
  );
}
