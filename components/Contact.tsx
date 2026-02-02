"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Thanks for your interest! Please reach out directly at ian@knighton.dev");
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400">
            Ready to modernize your infrastructure? Let&apos;s discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-forest-400">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <p className="text-white">Idaho Falls, ID</p>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a 
                  href="mailto:ian@knighton.dev" 
                  className="text-forest-400 hover:text-forest-300 transition-colors"
                >
                  ian@knighton.dev
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <a 
                  href="tel:+12084199489" 
                  className="text-forest-400 hover:text-forest-300 transition-colors"
                >
                  +1 (208) 419-9489
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 mb-1">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/probablynotian" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-400 hover:text-forest-300 transition-colors"
                >
                  linkedin.com/in/probablynotian
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-forest-800/30 rounded-lg focus:outline-none focus:border-forest-600 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-forest-800/30 rounded-lg focus:outline-none focus:border-forest-600 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-forest-800/30 rounded-lg focus:outline-none focus:border-forest-600 text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-forest-600 hover:bg-forest-500 text-white rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>

              {status && (
                <p className="text-forest-400 text-center">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
