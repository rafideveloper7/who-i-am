import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen, faReact, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCode, faServer, faShieldHalved, faRocket, faPalette, faMobileAlt, faBoltLightning, faUser, faEnvelope, faCalendar, faMapMarkerAlt, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';

function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const terminalRef = useRef(null);
  
  const terminalLines = [
    "> Welcome to Developer Terminal",
    "> Initializing Environment...",
    "> Loading Tech Stack...",
    "> ✓ React.js v18+",
    "> ✓ Next.js v14+", 
    "> ✓ TypeScript v5+",
    "> ✓ Tailwind CSS v3+",
    "> ✓ Node.js v20+",
    "> Environment Ready!",
  ];

  // Terminal typing effect
  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + (prev ? '\n' : '') + terminalLines[currentLine]);
        setCurrentLine(prev => prev + 1);
      }, 400);
      
      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [typedText]);

  const frontendSkills = [
    { name: 'React.js', level: 95, icon: faReact, color: '#61DAFB' },
    { name: 'JavaScript', level: 92, icon: faJs, color: '#F7DF1E' },
    { name: 'HTML5/CSS3', level: 96, icon: faHtml5, color: '#E34F26' },
    { name: 'Tailwind CSS', level: 94, icon: faPalette, color: '#06B6D4' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden ">
      

      <div className="relative z-10">
        {/* ==================== HERO SECTION ==================== */}
        <section className="min-h-screen flex items-center pt-16">
          <div className="w-full px-3 sm:px-4 md:px-6 py-8 md:py-12">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              
              {/* Left Content - Hero */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                {/* Greeting */}
                <div className="relative">
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    <span className="text-white block mb-2">HI, I'M</span>
                    <span className="text-[#48ff00] block text-4xl xs:text-5xl sm:text-6xl md:text-7xl">
                      RAFI ULLAH
                    </span>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 md:mt-6 font-mono leading-relaxed">
                    <span className="text-[#48ff00]">&gt;</span> Crafting digital experiences with modern web technologies.
                  </p>
                </div>

                {/* Terminal Section */}
                <div className="bg-black/70 border border-[#48ff00]/30 p-4 sm:p-6 rounded-xl">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                    <div className="ml-2 sm:ml-4 text-[#48ff00] font-mono text-sm sm:text-base flex items-center">
                      <FontAwesomeIcon icon={faTerminal} className="mr-1 sm:mr-2" />
                      <span className="hidden xs:inline">developer_terminal.sh</span>
                      <span className="xs:hidden">terminal</span>
                    </div>
                  </div>
                  
                  <div 
                    ref={terminalRef}
                    className="font-mono text-xs sm:text-sm h-32 sm:h-40 md:h-48 overflow-y-auto bg-black/50 p-3 sm:p-4 rounded border border-[#48ff00]/20"
                  >
                    <pre className="text-gray-300 whitespace-pre-wrap break-words">
                      <span className="text-[#48ff00]">$</span> whoami
                      {"\n"}
                      <span className="text-cyan-400 ml-2 sm:ml-4 block sm:inline">Frontend Developer | React Specialist</span>
                      {"\n\n"}
                      <span className="text-[#48ff00]">$</span> techstack
                      {"\n"}
                      <div className="ml-2 sm:ml-4 space-y-1">
                        <div className="flex items-center text-green-400">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2"></span>
                          <span className="text-xs sm:text-sm">React 18+, Next.js 14, TypeScript</span>
                        </div>
                        <div className="flex items-center text-blue-400">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-1 sm:mr-2"></span>
                          <span className="text-xs sm:text-sm">Tailwind CSS, Framer Motion</span>
                        </div>
                      </div>
                      {"\n\n"}
                      {typedText}
                      {currentLine >= terminalLines.length && (
                        <span className="text-[#48ff00] animate-blink">▊</span>
                      )}
                    </pre>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 flex items-center">
                    <span className="text-[#48ff00] font-mono text-sm mr-1 sm:mr-2">$</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#48ff00] to-transparent"></div>
                    <span className="ml-2 sm:ml-4 text-gray-500 text-xs sm:text-sm font-mono hidden xs:block">
                      System ready...
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <button className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                    <span className="relative z-10 flex items-center justify-center">
                      <FontAwesomeIcon icon={faRocket} className="mr-2" />
                      VIEW MY WORK
                    </span>
                  </button>
                  
                  <button className="group px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-[#48ff00] text-[#48ff00] font-mono font-bold rounded-lg hover:bg-[#48ff00] hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                    <span className="flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                      GET IN TOUCH
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Content - Tech Stack */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                {/* Tech Stack Grid */}
                <div className="bg-black/50 border border-[#48ff00]/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-[#48ff00] font-mono mb-4 sm:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faCode} className="mr-2 sm:mr-3" />
                    TECH STACK
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {frontendSkills.map((skill, index) => (
                      <div 
                        key={index}
                        className="bg-black/30 border border-[#48ff00]/10 rounded-lg p-3 sm:p-4 hover:border-[#48ff00] transition-all duration-300"
                      >
                        <div className="flex items-center mb-2 sm:mb-3">
                          <div 
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-lg sm:text-xl mr-2 sm:mr-3"
                            style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                          >
                            <FontAwesomeIcon icon={skill.icon} />
                          </div>
                          <div>
                            <div className="font-mono font-bold text-sm sm:text-base">{skill.name}</div>
                            <div className="text-gray-400 text-xs sm:text-sm">{skill.level}%</div>
                          </div>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: faMobileAlt, value: '50+', label: 'Projects', desc: 'Completed' },
                    { icon: faBoltLightning, value: '100%', label: 'Client Rate', desc: 'Satisfaction' },
                    { icon: faCalendar, value: '3+', label: 'Years', desc: 'Experience' },
                    { icon: faShieldHalved, value: '∞', label: 'Bugs', desc: 'Fixed' },
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-black/30 border border-[#48ff00]/10 rounded-lg p-3 sm:p-4 text-center hover:border-[#48ff00] transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={stat.icon} className="text-xl sm:text-2xl text-[#48ff00] mb-1 sm:mb-2" />
                      <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-gray-300 font-mono text-xs sm:text-sm">{stat.label}</div>
                      <div className="text-gray-500 text-xs">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section className="py-12 md:py-20 border-t border-[#48ff00]/10">
          <div className="w-full px-3 sm:px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
              
              {/* Left - About Content */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-8 sm:w-12 h-1 bg-[#48ff00] mr-3 sm:mr-4"></div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    <span className="text-[#48ff00]">ABOUT</span> ME
                  </h2>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    Passionate Frontend Developer with expertise in building modern, responsive, 
                    and performant web applications. I specialize in the React ecosystem.
                  </p>
                  
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    With a strong foundation in JavaScript/TypeScript and modern web technologies, 
                    I transform complex problems into elegant solutions.
                  </p>
                </div>
                
                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 md:pt-6">
                  {[
                    { icon: faUser, label: 'Name', value: 'Rafi Ullah' },
                    { icon: faMapMarkerAlt, label: 'Location', value: 'Worldwide' },
                    { icon: faEnvelope, label: 'Email', value: 'hello@rafi.dev' },
                    { icon: faBriefcase, label: 'Freelance', value: 'Available' },
                  ].map((info, index) => (
                    <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#48ff00]/10 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={info.icon} className="text-[#48ff00] text-lg sm:text-xl" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-gray-400 text-xs sm:text-sm truncate">{info.label}</div>
                        <div className="text-white font-mono text-sm sm:text-base truncate">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Experience & Education */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                {/* Experience Timeline */}
                <div className="bg-black/30 border border-[#48ff00]/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-[#48ff00] font-mono mb-4 md:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2 sm:mr-3" />
                    EXPERIENCE
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { year: '2022-Present', role: 'Senior Frontend Dev', company: 'Tech Solutions' },
                      { year: '2020-2022', role: 'React Developer', company: 'Digital Agency' },
                      { year: '2019-2020', role: 'Web Developer', company: 'Startup Studio' },
                    ].map((exp, index) => (
                      <div key={index} className="relative pl-6 sm:pl-8 pb-4 sm:pb-6 border-l border-[#48ff00]/30 last:pb-0">
                        <div className="absolute left-[-5px] sm:left-[-6px] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#48ff00] rounded-full"></div>
                        <div className="text-[#48ff00] font-mono text-xs sm:text-sm mb-1">{exp.year}</div>
                        <div className="text-white text-base sm:text-lg font-bold truncate">{exp.role}</div>
                        <div className="text-gray-400 text-sm truncate">{exp.company}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-black/30 border border-[#48ff00]/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-[#48ff00] font-mono mb-4 md:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2 sm:mr-3" />
                    EDUCATION
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { degree: 'BSc Computer Science', school: 'University of Tech', year: '2016-2020' },
                      { degree: 'Frontend Dev', school: 'Coding Bootcamp', year: '2020' },
                      { degree: 'React Specialization', school: 'Meta Certificate', year: '2022' },
                    ].map((edu, index) => (
                      <div key={index} className="pb-3 sm:pb-4 border-b border-[#48ff00]/10 last:border-0 last:pb-0">
                        <div className="text-white font-bold text-sm sm:text-base truncate">{edu.degree}</div>
                        <div className="text-gray-400 text-xs sm:text-sm truncate">{edu.school}</div>
                        <div className="text-[#48ff00] text-xs sm:text-sm font-mono mt-1">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section className="py-12 md:py-20 border-t border-[#48ff00]/10">
          <div className="w-full px-3 sm:px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center mb-3 sm:mb-4">
                <div className="w-8 sm:w-12 h-1 bg-[#48ff00] mr-3 sm:mr-4"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  MY <span className="text-[#48ff00]">SERVICES</span>
                </h2>
                <div className="w-8 sm:w-12 h-1 bg-[#48ff00] ml-3 sm:ml-4"></div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
                Comprehensive web development services tailored to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: faReact,
                  title: 'React Development',
                  description: 'Building dynamic, scalable React applications with modern best practices.',
                  features: ['Custom Components', 'State Management', 'Performance']
                },
                {
                  icon: faCode,
                  title: 'Next.js Solutions',
                  description: 'Full-stack applications with Next.js 14 App Router.',
                  features: ['App Router', 'Server Actions', 'SEO']
                },
                {
                  icon: faPalette,
                  title: 'UI/UX Design',
                  description: 'Creating beautiful, responsive interfaces.',
                  features: ['Responsive', 'Design Systems', 'Animation']
                },
                {
                  icon: faMobileAlt,
                  title: 'Mobile-First',
                  description: 'Applications that work on all devices.',
                  features: ['Responsive', 'Touch UX', 'PWA']
                },
                {
                  icon: faBoltLightning,
                  title: 'Performance',
                  description: 'Optimizing for speed and better UX.',
                  features: ['Lighthouse', 'Code Splitting', 'Optimization']
                },
                {
                  icon: faServer,
                  title: 'API Integration',
                  description: 'Connecting with REST/GraphQL APIs.',
                  features: ['REST APIs', 'GraphQL', 'WebSocket']
                },
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group bg-black/30 border border-[#48ff00]/10 rounded-xl p-4 sm:p-6 hover:border-[#48ff00] transition-all duration-500 min-w-0"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-[#48ff00]/10 flex items-center justify-center mb-4 group-hover:bg-[#48ff00]/20 transition-colors flex-shrink-0">
                    <FontAwesomeIcon icon={service.icon} className="text-xl sm:text-2xl text-[#48ff00]" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 truncate">{service.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm">
                        <span className="text-[#48ff00] mr-1 sm:mr-2">▸</span>
                        <span className="text-gray-300 truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* ==================== CTA SECTION ==================== */}
<section className="py-12 md:py-20 border-t border-[#48ff00]/10">
  <div className="w-full px-3 sm:px-4 md:px-6">
    <div className="max-w-4xl m-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
        READY TO <span className="text-[#48ff00]">BUILD</span>?
      </h2>
      
      <p className="text-gray-400 text-sm sm:text-base md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
        Let's discuss your project and bring your ideas to life.
      </p>
      <Link to="/contact" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 border-2 rounded-lg p-3">Contact Me</Link>
    </div>
  </div>
  
</section>
      </div>

      {/* Add these to your index.css */}
     
       
    </div>
  );
}

export default Home;