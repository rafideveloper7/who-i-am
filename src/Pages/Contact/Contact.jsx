import React from "react";

function Contact() {
  const [formData, setFormData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
  });

  return (
    <div className=" m-auto ">
      <div className="p-5 m-auto  ">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Get In <span className="text-[#48ff00]">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate! Send me a message and
            I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-inherit]  ">
          {/* Contact Form */}
          <div className=" m-auto p-5 w-[100%] flex flex-wrap">
            <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl p-6 sm:p-8 m-5 lg:w-[48%]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#48ff00] to-[#00ff88] text-black font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8 p-5 lg:w-[48%]">
              {/* Contact Information */}
              <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#48ff00]/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-[#48ff00]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        hello@example.com
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        work@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#48ff00]/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-[#48ff00]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        +1 (555) 987-6543
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#48ff00]/10 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6 text-[#48ff00]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
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
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        San Francisco, California
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-[#48ff00]/20">
                  <h4 className="font-semibold text-white mb-4">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        name: "LinkedIn",
                        icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                      },
                      {
                        name: "GitHub",
                        icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                      },
                      {
                        name: "Twitter",
                        icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                      },
                      {
                        name: "Instagram",
                        icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                      },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="bg-black/50 border border-[#48ff00]/20 rounded-lg p-3 hover:bg-[#48ff00]/10 hover:border-[#48ff00]/40 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <svg
                          className="w-5 h-5 text-[#48ff00]"
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
            </div>
            {/* Office Hours */}
            <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl sm:p-8 p-5 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Office Hours
              </h3>

              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-3 border-b border-[#48ff00]/10 last:border-0"
                  >
                    <span className="text-gray-300 font-medium">
                      {schedule.day}
                    </span>
                    <span
                      className={`font-semibold ${
                        schedule.day === "Sunday"
                          ? "text-red-400"
                          : "text-[#48ff00]"
                      }`}
                    >
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#48ff00]/10 border border-[#48ff00]/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-[#48ff00] font-semibold">Note:</span>{" "}
                  Response time is typically within 24 hours during business
                  days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
