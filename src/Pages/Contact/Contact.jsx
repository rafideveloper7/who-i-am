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

        <div className="bg-inherit] m-auto">
          {/* Contact Form */}
          <div className=" m-auto p-5 w-full flex flex-wrap">
            <div className="bg-black/40 border border-[#48ff00]/20  rounded-2xl p-6 sm:p-8 m-5 order-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="">
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
            <div className="space-y-8 p-5 lg:w-[48%] w-full">
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
                        rafideveloper7@mail.com
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
                        +92 336-5091321
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
                        Kohat, KPK
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Pakistan
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
            <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl sm:p-8 p-5 w-full lg:w-[30vw] inline-block">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Office Hours
              </h3>

              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed" },
                  { day: "WhatsApp (+92-3365091321)", time: "available" }
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
              <div className="p-5  ">
                <h1 className="text-white-500 text-xl border-l-4 p-2 border-[#48ff00]">Book a Free Meeting!</h1>
                <h3 className="p-5">Available 🟢 WhatsApp (+92-3365091321)</h3>
                <p className="text-[#48ff00]">Disscuss Your Project - let me understand your target ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
