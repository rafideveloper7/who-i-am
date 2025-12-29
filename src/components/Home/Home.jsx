import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen, faReact, faJs, faHtml5,  } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCode,  faServer, faShieldHalved, faRocket, faPalette, faMobileAlt, faBoltLightning, faUser, faEnvelope, faCalendar, faMapMarkerAlt, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const terminalRef = useRef(null);
  
  const terminalLines = [
    "> Welcome to Rafi's Developer Terminal",
    "> Initializing Frontend Development Environment...",
    "> Loading Tech Stack...",
    "> ✓ React.js v18+",
    "> ✓ Next.js v14+", 
    "> ✓ TypeScript v5+",
    "> ✓ Tailwind CSS v3+",
    "> ✓ Node.js v20+",
    "> Environment Ready!",
    "> Type 'skills' for detailed capabilities"
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
    { name: 'Next.js', level: 90, icon: faCode, color: '#000000' },
    { name: 'TypeScript', level: 88, icon: faCode, color: '#3178C6' },
    { name: 'JavaScript', level: 92, icon: faJs, color: '#F7DF1E' },
    { name: 'Tailwind CSS', level: 94, icon: faPalette, color: '#06B6D4' },
    { name: 'HTML5/CSS3', level: 96, icon: faHtml5, color: '#E34F26' },
  ];

  const tools = [
    { name: 'Git', icon: faCode, desc: 'Version Control' },
    { name: 'Vite', icon: faBoltLightning, desc: 'Build Tool' },
    { name: 'Figma', icon: faPalette, desc: 'UI/UX Design' },
    { name: 'VS Code', icon: faCode, desc: 'Code Editor' },
    { name: 'Postman', icon: faServer, desc: 'API Testing' },
    { name: 'Webpack', icon: faCode, desc: 'Bundler' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#48ff00] animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              {['</>', '{ }', '=>', '()', '[]', '||', '&&', '===', '...'][Math.floor(Math.random() * 9)]}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* ==================== HERO SECTION ==================== */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content - Hero */}
              <div className="space-y-8">
                {/* Greeting with tech badges */}
                <div className="relative">
                  
                  
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    <span className="text-white">HI, I'M </span>
                    <span className="text-[#48ff00] relative inline-block">
                      <span className="" data-text="RAFI ULLAH">RAFI ULLAH</span>
                      {/* <span className="absolute top-0 left-0 text-[#ff00ff] opacity-70 animate-pulse">RAFI ULLAH</span>
                      <span className="absolute top-0 left-0 text-[#00ffff] opacity-70 animate-pulse delay-75">RAFI ULLAH</span> */}
                    </span>
                  </h1>
                  
                  <p className="text-2xl text-gray-300 mb-8 font-mono max-w-2xl leading-relaxed">
                    <span className="text-[#48ff00]">&gt;</span> Crafting exceptional digital experiences with modern web technologies and cutting-edge frontend solutions.
                  </p>
                </div>

                {/* Terminal Section */}
                <div className="bg-black/70 border border-[#48ff00]/30 p-6 rounded-xl shadow-2xl shadow-[#48ff00]/10">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                    <div className="ml-4 text-[#48ff00] font-mono flex items-center">
                      <FontAwesomeIcon icon={faTerminal} className="mr-2" />
                      developer_terminal.sh
                    </div>
                  </div>
                  
                  <div 
                    ref={terminalRef}
                    className="font-mono text-sm h-48 overflow-y-auto bg-black/50 p-4 rounded border border-[#48ff00]/20 scrollbar-thin"
                  >
                    <pre className="text-gray-300 whitespace-pre-wrap">
                      <span className="text-[#48ff00]">rafi@portfolio:~$</span> whoami
                      {"\n"}
                      <span className="text-cyan-400 ml-4">Frontend Developer | React Specialist | Modern Web Expert</span>
                      {"\n\n"}
                      <span className="text-[#48ff00]">rafi@portfolio:~$</span> techstack --current
                      {"\n"}
                      <div className="ml-4 space-y-1">
                        <div className="flex items-center text-green-400">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Primary: React 18+, Next.js 14, TypeScript
                        </div>
                        <div className="flex items-center text-blue-400">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Styling: Tailwind CSS, Framer Motion, Sass
                        </div>
                        <div className="flex items-center text-purple-400">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          State Management: Redux Toolkit, Zustand
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                          Testing: Jest, React Testing Library
                        </div>
                      </div>
                      {"\n\n"}
                      {typedText}
                      {currentLine >= terminalLines.length && (
                        <span className="text-[#48ff00] animate-blink">▊</span>
                      )}
                    </pre>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <span className="text-[#48ff00] font-mono mr-2">$</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#48ff00] to-transparent"></div>
                    <span className="ml-4 text-gray-500 text-sm font-mono">
                      System ready for commands...
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center">
                      <FontAwesomeIcon icon={faRocket} className="mr-2" />
                      VIEW MY WORK
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="group px-8 py-4 border-2 border-[#48ff00] text-[#48ff00] font-mono font-bold rounded-lg hover:bg-[#48ff00] hover:text-black transition-all duration-300 hover:scale-105">
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                      GET IN TOUCH
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Content - Tech Stack */}
              <div className="space-y-8">
                {/* Tech Stack Grid */}
                <div className="bg-black/50 border border-[#48ff00]/20 rounded-xl p-6">
                  <h3 className="text-2xl text-[#48ff00] font-mono mb-6 flex items-center">
                    <FontAwesomeIcon icon={faCode} className="mr-3" />
                    TECH STACK EXPERTISE
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {frontendSkills.map((skill, index) => (
                      <div 
                        key={index}
                        className="bg-black/30 border border-[#48ff00]/10 rounded-lg p-4 hover:border-[#48ff00] transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="flex items-center mb-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl mr-3"
                            style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                          >
                            <FontAwesomeIcon icon={skill.icon} />
                          </div>
                          <div>
                            <div className="font-mono font-bold">{skill.name}</div>
                            <div className="text-gray-400 text-sm">{skill.level}%</div>
                          </div>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
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
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: faMobileAlt, value: '50+', label: 'Projects', desc: 'Completed' },
                    { icon: faBoltLightning, value: '100%', label: 'Satisfaction', desc: 'Client Rate' },
                    { icon: faCalendar, value: '3+', label: 'Years', desc: 'Experience' },
                    { icon: faShieldHalved, value: '∞', label: 'Bugs', desc: 'Fixed' },
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-black/30 border border-[#48ff00]/10 rounded-lg p-4 text-center hover:border-[#48ff00] transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={stat.icon} className="text-2xl text-[#48ff00] mb-2" />
                      <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-gray-300 font-mono text-sm">{stat.label}</div>
                      <div className="text-gray-500 text-xs">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section className="py-20 border-t border-[#48ff00]/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left - About Content */}
              <div className="space-y-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-1 bg-[#48ff00] mr-4"></div>
                  <h2 className="text-4xl font-bold text-white">
                    <span className="text-[#48ff00]">ABOUT</span> ME
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Passionate Frontend Developer with expertise in building modern, responsive, and performant web applications. 
                    I specialize in the React ecosystem and love creating seamless user experiences.
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    With a strong foundation in JavaScript/TypeScript and modern web technologies, 
                    I transform complex problems into elegant solutions. I'm constantly learning and 
                    adapting to new technologies to stay at the forefront of web development.
                  </p>
                </div>
                
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {[
                    { icon: faUser, label: 'Name', value: 'Rafi Ullah' },
                    { icon: faMapMarkerAlt, label: 'Location', value: 'Available Worldwide' },
                    { icon: faEnvelope, label: 'Email', value: 'hello@rafi.dev' },
                    { icon: faBriefcase, label: 'Freelance', value: 'Available' },
                  ].map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-[#48ff00]/10 flex items-center justify-center">
                        <FontAwesomeIcon icon={info.icon} className="text-[#48ff00] text-xl" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.label}</div>
                        <div className="text-white font-mono">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Experience & Education */}
              <div className="space-y-8">
                {/* Experience Timeline */}
                <div className="bg-black/30 border border-[#48ff00]/20 rounded-xl p-6">
                  <h3 className="text-2xl text-[#48ff00] font-mono mb-6 flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-3" />
                    EXPERIENCE
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { year: '2022-Present', role: 'Senior Frontend Developer', company: 'Tech Solutions Inc.' },
                      { year: '2020-2022', role: 'React Developer', company: 'Digital Agency' },
                      { year: '2019-2020', role: 'Junior Web Developer', company: 'Startup Studio' },
                    ].map((exp, index) => (
                      <div key={index} className="relative pl-8 pb-6 border-l border-[#48ff00]/30 last:pb-0">
                        <div className="absolute left-[-6px] top-0 w-3 h-3 bg-[#48ff00] rounded-full"></div>
                        <div className="text-[#48ff00] font-mono text-sm mb-1">{exp.year}</div>
                        <div className="text-white text-lg font-bold">{exp.role}</div>
                        <div className="text-gray-400">{exp.company}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-black/30 border border-[#48ff00]/20 rounded-xl p-6">
                  <h3 className="text-2xl text-[#48ff00] font-mono mb-6 flex items-center">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-3" />
                    EDUCATION
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { degree: 'BSc Computer Science', school: 'University of Technology', year: '2016-2020' },
                      { degree: 'Frontend Development', school: 'Advanced Coding Bootcamp', year: '2020' },
                      { degree: 'React Specialization', school: 'Meta Professional Certificate', year: '2022' },
                    ].map((edu, index) => (
                      <div key={index} className="pb-4 border-b border-[#48ff00]/10 last:border-0 last:pb-0">
                        <div className="text-white font-bold">{edu.degree}</div>
                        <div className="text-gray-400">{edu.school}</div>
                        <div className="text-[#48ff00] text-sm font-mono mt-1">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section className="py-20 border-t border-[#48ff00]/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center mb-4">
                <div className="w-12 h-1 bg-[#48ff00] mr-4"></div>
                <h2 className="text-4xl font-bold text-white">
                  MY <span className="text-[#48ff00]">SERVICES</span>
                </h2>
                <div className="w-12 h-1 bg-[#48ff00] ml-4"></div>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprehensive web development services tailored to your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: faReact,
                  title: 'React Development',
                  description: 'Building dynamic, scalable React applications with modern best practices and performance optimization.',
                  features: ['Custom Components', 'State Management', 'Performance Tuning']
                },
                {
                  icon: faCode,
                  title: 'Next.js Solutions',
                  description: 'Full-stack applications with Next.js 14 App Router, Server Components, and API routes.',
                  features: ['App Router', 'Server Actions', 'SEO Optimization']
                },
                {
                  icon: faPalette,
                  title: 'UI/UX Design',
                  description: 'Creating beautiful, responsive interfaces with Tailwind CSS and modern design systems.',
                  features: ['Responsive Design', 'Design Systems', 'Animation']
                },
                {
                  icon: faMobileAlt,
                  title: 'Mobile-First Development',
                  description: 'Building responsive web applications that work perfectly on all devices and screen sizes.',
                  features: ['Responsive Layouts', 'Touch Optimization', 'PWA Support']
                },
                {
                  icon: faBoltLightning,
                  title: 'Performance Optimization',
                  description: 'Optimizing web applications for speed, SEO, and better user experience.',
                  features: ['Lighthouse 100', 'Code Splitting', 'Bundle Optimization']
                },
                {
                  icon: faServer,
                  title: 'API Integration',
                  description: 'Connecting your application with REST/GraphQL APIs and third-party services.',
                  features: ['REST APIs', 'GraphQL', 'WebSocket']
                },
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group bg-black/30 border border-[#48ff00]/10 rounded-xl p-6 hover:border-[#48ff00] hover:scale-105 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-lg bg-[#48ff00]/10 flex items-center justify-center mb-6 group-hover:bg-[#48ff00]/20 transition-colors">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-[#48ff00]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="text-[#48ff00] mr-2">▸</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-20 border-t border-[#48ff00]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                READY TO <span className="text-[#48ff00]">BUILD</span> SOMETHING AMAZING?
              </h2>
              
              <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                Let's discuss your project and bring your ideas to life with cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold rounded-lg text-lg hover:shadow-[0_0_30px_rgba(72,255,0,0.5)] transition-all duration-300 hover:scale-105">
                  START A PROJECT
                </button>
                
                <button className="px-10 py-4 border-2 border-[#48ff00] text-[#48ff00] font-mono font-bold rounded-lg text-lg hover:bg-[#48ff00] hover:text-black transition-all duration-300 hover:scale-105">
                  VIEW MY WORK
                </button>
              </div>
              
              <div className="mt-12 flex justify-center space-x-8">
                {[
                  { icon: faGithub, label: 'GitHub', link: '#' },
                  { icon: faLinkedin, label: 'LinkedIn', link: '#' },
                  { icon: faCodepen, label: 'CodePen', link: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="group flex flex-col items-center text-gray-400 hover:text-[#48ff00] transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-3xl mb-2" />
                    <span className="font-mono text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add these animations to index.css */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #48ff00 #000;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #000;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #48ff00;
          border-radius: 3px;
        }
        
        .glitch-effect {
          position: relative;
        }
        
        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        .glitch-effect::before {
          left: 2px;
          text-shadow: -1px 0 #ff00ff;
          animation: glitch-1 0.3s infinite;
        }
        
        .glitch-effect::after {
          left: -2px;
          text-shadow: 1px 0 #00ffff;
          animation: glitch-2 0.3s infinite;
        }
        
        @keyframes glitch-1 {
          0% { clip-path: inset(20% 0 30% 0); }
          100% { clip-path: inset(10% 0 40% 0); }
        }
        
        @keyframes glitch-2 {
          0% { clip-path: inset(40% 0 20% 0); }
          100% { clip-path: inset(30% 0 30% 0); }
        }
      `}</style>
    </div>
  );
}

export default Home;