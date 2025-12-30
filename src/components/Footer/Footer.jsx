import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCode,
  faRocket,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Quick links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/#contact" },
  ];

  // Services links
  const services = [
    { name: "React Development" },
    { name: "Next.js Solutions" },
    { name: "UI/UX Design" },
    { name: "Web Performance" },
    { name: "Mobile-First Apps" },
    { name: "API Integration" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/rafideveloper7",
      color: "hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/rafideveloper7",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com",
      color: "hover:text-sky-400",
    },
    {
      name: "CodePen",
      icon: faCodepen,
      url: "https://codepen.io",
      color: "hover:text-black",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://youtube.com",
      color: "hover:text-red-500",
    },
  ];

  // Contact info
  const contactInfo = [
    { icon: faEnvelope, text: "hello@rafi.dev", url: "mailto:hello@rafi.dev" },
    { icon: faPhone, text: "+1 (555) 123-4567", url: "tel:+15551234567" },
    {
      icon: faMapMarkerAlt,
      text: "San Francisco, CA",
      url: "https://maps.google.com",
    },
  ];

  return (
    <footer className="bg-black border-t border-[#48ff00]/20 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="text-[#48ff00] font-bold text-2xl tracking-wider font-mono">
                  Rafi Ullah
                </div>
                <div className="w-2 h-2 bg-[#48ff00] rounded-full animate-pulse group-hover:animate-ping transition-all duration-300"></div>
              </Link>
              <p className="text-gray-400 text-sm mt-3">
                Crafting digital experiences with modern web technologies
              </p>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <FontAwesomeIcon
                  icon={faRocket}
                  className="mr-2 text-[#48ff00]"
                />
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-black/50 border border-[#48ff00]/20 flex items-center justify-center text-gray-400 hover:border-[#48ff00] hover:bg-[#48ff00]/10 ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Stay Updated
              </h3>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">
                  Subscribe to my newsletter for tech insights and updates.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-black/50 border border-[#48ff00]/30 rounded-l-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-bold px-4 py-2 rounded-r-lg hover:opacity-90 transition-all duration-300 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#48ff00] rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#48ff00] transition-colors duration-300 flex items-center group"
                  >
                    <span className="text-[#48ff00] opacity-0 group-hover:opacity-100 mr-2 transition-opacity">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#48ff00] rounded-full mr-2"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-[#48ff00] transition-colors duration-300 flex items-center group cursor-pointer">
                    <span className="text-[#48ff00] opacity-0 group-hover:opacity-100 mr-2 transition-opacity">
                      ▸
                    </span>
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-sm font-bold text-gray-300 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Node.js",
                  "GraphQL",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#48ff00]/10 border border-[#48ff00]/20 rounded-full text-xs text-gray-300 hover:bg-[#48ff00]/20 hover:text-[#48ff00] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#48ff00] rounded-full mr-2"></span>
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.url}
                    className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#48ff00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#48ff00]/20 transition-colors">
                      <FontAwesomeIcon
                        icon={info.icon}
                        className="text-[#48ff00] text-sm"
                      />
                    </div>
                    <span className="text-sm pt-1">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Office Hours */}
            <div className="mt-8 p-4 bg-black/50 border border-[#48ff00]/20 rounded-lg">
              <h4 className="text-sm font-bold text-white mb-2">
                Office Hours
              </h4>
              <p className="text-xs text-gray-400 mb-1">
                Mon-Fri: 9:00 AM - 6:00 PM
              </p>
              <p className="text-xs text-gray-400">Sat: 10:00 AM - 4:00 PM</p>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#48ff00]/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm font-mono">
              <span className="text-[#48ff00] mr-1">©</span>
              {currentYear} Rafi Ullah. All rights reserved.
            </div>

            {/* Made with love */}
            <div className="text-gray-400 text-sm font-mono flex items-center">
              <FontAwesomeIcon icon={faCode} className="text-[#48ff00] mr-2" />
              Crafted with
              <FontAwesomeIcon
                icon={faHeart}
                className="text-red-500 mx-2 animate-pulse"
              />
              by Rafi Ullah
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#48ff00] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#48ff00] text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#48ff00] text-sm transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 pt-6 border-t border-[#48ff00]/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Uptime", value: "99.9%", color: "text-green-400" },
                {
                  label: "Response Time",
                  value: "< 24h",
                  color: "text-blue-400",
                },
                { label: "Projects", value: "50+", color: "text-purple-400" },
                {
                  label: "Happy Clients",
                  value: "100%",
                  color: "text-yellow-400",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-xl font-bold font-mono ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/50 border border-[#48ff00]/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">
                Secured with HTTPS • SSL Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923365091321"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 z-40 group"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
        />
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(72,255,0,0.5)] transition-all duration-300 transform hover:scale-110 active:scale-95 z-40"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;
