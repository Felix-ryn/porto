"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { config } from "@/data/config";
import { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconGithub,
  IconLinkedin,
  IconCheckCircle,
  IconZap,
  IconBriefcase,
  IconTarget,
} from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send to your backend or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      Icon: IconMail,
      title: "Email",
      content: (
        <a
          href={`mailto:${config.email}`}
          className="text-blue-600 hover:text-blue-700 font-semibold break-all"
        >
          {config.email}
        </a>
      ),
      note: "I typically respond within 24 hours",
    },
    {
      Icon: IconPhone,
      title: "Phone",
      content: <p className="text-slate-700 font-semibold">{config.phone}</p>,
      note: "Available for calls during business hours",
    },
    {
      Icon: IconMapPin,
      title: "Location",
      content: <p className="text-slate-700 font-semibold">{config.location}</p>,
      note: "Open to remote and on-site opportunities",
    },
  ];

  const responseFeatures = [
    { Icon: IconZap, title: "Quick Response", desc: "I aim to respond to all inquiries within 24 hours" },
    { Icon: IconBriefcase, title: "Professional", desc: "Dedicated to delivering quality work and communication" },
    { Icon: IconTarget, title: "Flexible", desc: "Open to various project types and arrangements" },
  ];

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            I&apos;d love to hear from you. Whether you have a question or a project proposal,
            feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Contact Information
              </h2>

              {contactInfo.map((item) => (
                <div key={item.title} className="card p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    {item.content}
                    <p className="text-slate-500 text-sm mt-1">{item.note}</p>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 mb-4">Connect On Social</h3>
                <div className="flex gap-3">
                  <a
                    href={config.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors"
                    title="GitHub"
                  >
                    <IconGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={config.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors"
                    title="LinkedIn"
                  >
                    <IconLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send Me a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-base font-semibold"
                >
                  Send Message
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-center justify-center gap-2 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg font-semibold">
                    <IconCheckCircle className="w-5 h-5" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {responseFeatures.map((item) => (
              <div key={item.title} className="card p-6">
                <item.Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
