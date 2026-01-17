import React, { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Your EmailJS Configuration - CORRECT KEYS
  const EMAILJS_PUBLIC_KEY = 'Ycd6NamkeQ3Csi8L9';
  const EMAILJS_SERVICE_ID = 'service_6qt36r8';
  const EMAILJS_TEMPLATE_ID = 'template_mm5ryxe';

  // Initialize EmailJS
  useEffect(() => {
    // Load EmailJS from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('✅ EmailJS initialized successfully');
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      console.log('📧 Attempting to send email...');
      
      // Prepare template parameters
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        from_email: formData.email,
        from_name: `${formData.firstName} ${formData.lastName}`,
        subject: formData.subject || 'New Project Inquiry',
        message: formData.message,
        reply_to: formData.email,
        to_email: 'rafideveloper7@gmail.com',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };

      console.log('📋 Template params:', templateParams);

      // Check if emailjs is loaded
      if (!window.emailjs) {
        throw new Error('EmailJS library not loaded. Please refresh the page.');
      }

      // Send email using EmailJS
      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Email sent successfully:', response);

      if (response.status === 200) {
        setSuccess(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('❌ EmailJS Error:', err);
      console.error('Error status:', err.status);
      console.error('Error text:', err.text);
      
      // Show user-friendly error message
      let errorMessage = 'Failed to send message. ';
      
      if (err.text) {
        try {
          const errorData = JSON.parse(err.text);
          errorMessage += errorData.error || err.text;
        } catch {
          errorMessage += err.text;
        }
      } else if (err.message) {
        errorMessage += err.message;
      }
      
      // Add helpful hints
      if (errorMessage.includes('service') || errorMessage.includes('Service ID')) {
        errorMessage += ' Please check your EmailJS Service configuration.';
      } else if (errorMessage.includes('template') || errorMessage.includes('Template ID')) {
        errorMessage += ' Please check your EmailJS Template configuration.';
      } else {
        errorMessage += ' Please try again or contact me directly at rafideveloper7@gmail.com';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-auto">
      <div className="p-5 m-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Get In <span className="text-[#48ff00]">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate! Send me a message and
            I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="max-w-4xl mx-auto mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg animate-fadeIn">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-green-500 font-medium">✅ Message sent successfully! I'll get back to you soon.</span>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-4xl mx-auto mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg animate-fadeIn">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-red-500 font-medium">{error}</span>
            </div>
          </div>
        )}

        <div className="bg-inherit m-auto">
          {/* Contact Form */}
          <div className="m-auto p-5 w-full flex flex-wrap">
            <div className="bg-black/40 border border-[#48ff00]/20 rounded-2xl p-6 sm:p-8 m-5 order-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
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
                      className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
                      placeholder="Doe"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                    disabled={loading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full sm:w-auto bg-gradient-to-r from-[#48ff00] to-[#00ff88] text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]'}`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Rest of your existing code remains the same... */}
            {/* Contact Information, Social Links, Office Hours, etc. */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;