import React, { useState } from "react";
import supabase from "../../lib/supabase.js";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  // Show popup notification
  const showNotification = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);

    const hideTime = type === "success" ? 5000 : 7000;
    setTimeout(() => {
      setShowPopup(false);
    }, hideTime);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowPopup(false);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      showNotification("Please fill in all required fields", "error");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showNotification("Please enter a valid email address", "error");
      setLoading(false);
      return;
    }

    try {
      const submissionData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: formData.subject || "New Project Inquiry",
        message: formData.message,
        status: "unread",
      };

      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([submissionData])
        .select();

      if (error) throw error;

      showNotification(
        "✅ Message sent successfully! I will get back to you soon.",
        "success"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      let errorMessage = "Failed to send message. ";

      if (err.message?.includes("network") || err.message?.includes("fetch")) {
        errorMessage =
          "Network error. Please check your internet connection and try again.";
      } else if (err.code === "PGRST301") {
        errorMessage = "Database connection issue. Please try again later.";
      } else if (err.code === "42501") {
        errorMessage =
          "Permission denied. Please contact me directly at rafideveloper7@gmail.com";
      } else if (err.message) {
        errorMessage += err.message;
      } else {
        errorMessage +=
          "Please try again or contact me directly at rafideveloper7@gmail.com";
      }

      showNotification(`❌ ${errorMessage}`, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Popup Notification */}
      {showPopup && (
        <div
          className={`fixed top-4 right-4 left-4 z-50 mx-auto animate-fadeIn ${popupType === "success" ? "animate-slideInRight" : "animate-shake"} md:left-auto md:right-4 md:w-auto md:max-w-sm`}
        >
          <div
            className={`rounded-lg p-4 shadow-lg border backdrop-blur-sm ${
              popupType === "success"
                ? "bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/30"
                : "bg-gradient-to-r from-red-500/10 to-red-600/10 border-red-500/30"
            }`}
          >
            <div className="flex items-start">
              <div
                className={`flex-shrink-0 mr-3 mt-0.5 ${popupType === "success" ? "text-green-500" : "text-red-500"}`}
              >
                {popupType === "success" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm font-medium ${popupType === "success" ? "text-green-400" : "text-red-400"}`}
                >
                  {popupMessage}
                </p>
                {popupType === "error" && popupMessage.includes("contact") && (
                  <div className="mt-2 pt-2 border-t border-red-500/20">
                    <p className="text-xs text-gray-300">
                      📧{" "}
                      <a
                        href="mailto:rafideveloper7@gmail.com"
                        className="text-[#48ff00] hover:underline"
                      >
                        rafideveloper7@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-gray-300 mt-1">
                      📱{" "}
                      <a
                        href="https://wa.me/923365091321"
                        className="text-[#48ff00] hover:underline"
                      >
                        +92 336-5091321
                      </a>
                    </p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4">
            Get In <span className="text-[#48ff00]">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-3xl mx-auto px-4">
            Have a project in mind? Let's collaborate! Send me a message and
            I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Contact Form - Takes 7 columns on large screens */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl p-5 sm:p-6 lg:p-8 h-full">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                {/* Name Fields - Stack on mobile, side by side on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="John"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Doe"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                    required
                    disabled={loading}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Project Inquiry"
                    disabled={loading}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                    required
                    disabled={loading}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-[#48ff00] to-[#00ff88] text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform text-sm sm:text-base ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"}`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Hours - Takes 5 columns on large screens */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="space-y-6 lg:space-y-8 h-full flex flex-col">
              {/* Contact Information */}
              <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl p-5 sm:p-6 lg:p-8 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5 sm:space-y-6">
                  {[
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      ),
                      title: "Email",
                      content: "rafideveloper7@gmail.com",
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      ),
                      title: "Phone",
                      content: "+92 336-5091321",
                    },
                    {
                      icon: (
                        <>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </>
                      ),
                      title: "Location",
                      content: "Kohat, KPK, Pakistan",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-[#48ff00]/10 p-3 rounded-lg flex-shrink-0">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[#48ff00]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {item.icon}
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1 break-words">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-[#48ff00]/20">
                  <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">
                    Connect with me
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      {
                        name: "LinkedIn",
                        path: "https://www.linkedin.com/rafideveloper7",
                        icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                      },
                      {
                        name: "GitHub",
                        path: "https://github.com/rafideveloper7",
                        icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                      },
                      {
                        name: "Twitter",
                        path: "https://x.com/rafideveloper7",
                        icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                      },
                      {
                        name: "Tiktok",
                        path: "https://www.tiktok.com/@rafideveloper7",
                        icon: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.302-.002.603.022.9.07v-3.26a6.11 6.11 0 0 0-1.21-.12 6.07 6.07 0 0 0-6.07 6.07 6.07 6.07 0 0 0 6.07 6.07 6.07 6.07 0 0 0 5.31-8.96V9.4c1.17 1.1 2.66 1.77 4.25 1.78v-3.5c-.23.03-.46.04-.69.01z",
                      },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black/50 border border-[#48ff00]/20 rounded-lg p-2.5 sm:p-3 hover:bg-[#48ff00]/10 hover:border-[#48ff00]/40 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-[#48ff00]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl p-5 sm:p-6 lg:p-8 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Office Hours
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", time: "Closed" },
                    { day: "WhatsApp (+92-3365091321)", time: "Available" },
                  ].map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 border-b border-[#48ff00]/10 last:border-0"
                    >
                      <span className="text-gray-300 font-medium text-sm sm:text-base mb-1 sm:mb-0">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-semibold text-xs sm:text-sm ${
                          schedule.day === "Sunday"
                            ? "text-red-400"
                            : schedule.time === "Available"
                            ? "text-green-400"
                            : "text-[#48ff00]"
                        }`}
                      >
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 sm:p-4 bg-[#48ff00]/10 border border-[#48ff00]/20 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-300">
                    <span className="text-[#48ff00] font-semibold">Note:</span>{" "}
                    Response time is typically within 24 hours during business
                    days.
                  </p>
                </div>

                <div className="mt-6 p-3 sm:p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <h1 className="text-white text-lg sm:text-xl font-semibold border-l-4 pl-3 border-[#48ff00]">
                      Book a Free Meeting!
                    </h1>
                  </div>
                  <h3 className="text-gray-300 text-sm sm:text-base mb-2 p-2">
                    Available 🟢 WhatsApp (+92-3365091321)
                  </h3>
                  <p className="text-[#48ff00] text-sm sm:text-base">
                    Discuss Your Project - let me understand your target ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;