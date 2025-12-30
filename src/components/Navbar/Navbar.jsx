import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items with their routes
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Skills', path: '/skills' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
  ];

  // External links
  const externalLinks = [
    { name: 'Github', url: 'https://github.com/rafideveloper7', icon: '⟨/⟩' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rafideveloper7', icon: '⧉' },
    { name: 'Resume', url: 'https://drive.google.com/file/d/1resChrUA7Sb7G8GGc7l2-e0rXb71_1pY/view?usp=drive_link', icon: '📃' },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-[#48ff00]/30 sticky top-0 z-50 font-['Courier_New']">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo with glitch effect */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="text-[#48ff00] font-bold text-xl tracking-wider " data-text="Rafi Ullah">
                Rafi Ullah
              </div>
              {/* <div className="absolute top-0 left-0 text-[#ff00ff] opacity-70 animate-pulse">Rafi Ullah</div>
              <div className="absolute top-0 left-0 text-[#00ffff] opacity-70 animate-pulse delay-100">Rafi Ullah</div> */}
            </div>
            <div className="w-3 h-3 bg-[#48ff00] rounded-full animate-pulse group-hover:animate-ping transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Navigation Links */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-sm transition-all duration-300 group ${
                      isActive 
                        ? 'text-[#48ff00] drop-shadow-[0_0_8px_#48ff00]' 
                        : 'text-gray-300 hover:text-[#48ff00] hover:drop-shadow-[0_0_8px_#48ff00]'
                    }`
                  }
                  end={item.path === '/'}
                >
                  <span className="text-[#48ff00] mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
                  {item.name}
                </NavLink>
              ))}
            </div>
            
            {/* Separator */}
            <div className="h-6 w-px bg-[#48ff00]/40"></div>
            
            {/* External Links */}
            <div className="flex space-x-6">
              {externalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#48ff00] text-sm transition-all duration-300 hover:drop-shadow-[0_0_8px_#48ff00] flex items-center"
                >
                  <span className="inline-block mr-2">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#48ff00] hover:text-[#48ff00]/80 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#48ff00]/20 animate-slideDown">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `py-2 px-4 rounded transition-all duration-300 group ${
                      isActive 
                        ? 'text-[#48ff00] bg-[#48ff00]/10' 
                        : 'text-gray-300 hover:text-[#48ff00] hover:bg-[#48ff00]/10'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end={item.path === '/'}
                >
                  <span className="inline-block w-2 h-2 bg-[#48ff00] rounded-full mr-3 animate-pulse"></span>
                  <span className="text-[#48ff00] opacity-0 group-hover:opacity-100 transition-opacity mr-2">{">"}</span>
                  {item.name}
                </NavLink>
              ))}
              
              {/* Mobile External Links */}
              <div className="pt-4 border-t border-[#48ff00]/20">
                <div className="flex flex-wrap gap-4 px-4">
                  {externalLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#48ff00] transition-all duration-300 hover:drop-shadow-[0_0_8px_#48ff00]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.icon} {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4 px-4">
                <Link
                  to="/contact"
                  className="block w-full py-3 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold text-center rounded-lg hover:shadow-[0_0_15px_rgba(72,255,0,0.5)] transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;