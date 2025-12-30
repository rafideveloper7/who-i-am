import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import myImg from '../../../public/assets/images/rafi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faEnvelope, faMapMarkerAlt, faPhone, faCalendar,
  faGraduationCap, faBriefcase, faCode, faRocket, faHeart,
  faLightbulb, faUsers, faMedal, faGlobe, faDownload,
  faArrowRight, faQuoteLeft, faQuoteRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, faLinkedin, faTwitter, faCodepen, 
  faReact, faJs, faHtml5, faCss3, faNodeJs, faPython
} from '@fortawesome/free-brands-svg-icons';

function About() {
  const [activeTab, setActiveTab] = useState('personal');

  const personalInfo = [
    { icon: faUser, label: 'Full Name', value: 'Rafi Ullah' },
    { icon: faCalendar, label: 'Age', value: '25 Years' },
    { icon: faMapMarkerAlt, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: faEnvelope, label: 'Email', value: 'rafi@developer.com' },
    { icon: faPhone, label: 'Phone', value: '+92 300 1234567' },
    { icon: faGlobe, label: 'Languages', value: 'English, Urdu, Hindi' },
  ];

  const education = [
    { 
      year: '2018-2022', 
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      description: 'Specialized in Software Engineering & Web Technologies'
    },
    { 
      year: '2016-2018', 
      degree: 'Intermediate (Pre-Engineering)',
      institution: 'Govt. Science College',
      description: 'Mathematics, Physics, Chemistry'
    },
    { 
      year: '2020', 
      degree: 'Frontend Development Certification',
      institution: 'Meta (Coursera)',
      description: 'React.js, JavaScript, Modern Web Development'
    },
  ];

  const experience = [
    {
      year: '2022-Present',
      role: 'Senior Frontend Developer',
      company: 'TechVision Solutions',
      responsibilities: [
        'Lead React.js development team',
        'Architect scalable web applications',
        'Mentor junior developers',
        'Implement CI/CD pipelines'
      ]
    },
    {
      year: '2020-2022',
      role: 'React Developer',
      company: 'Digital Innovations Inc.',
      responsibilities: [
        'Developed 15+ client projects',
        'Optimized application performance',
        'Integrated RESTful APIs',
        'Implemented responsive designs'
      ]
    },
    {
      year: '2019-2020',
      role: 'Junior Web Developer',
      company: 'WebStudio Pakistan',
      responsibilities: [
        'Built custom WordPress themes',
        'Created interactive UI components',
        'Fixed cross-browser compatibility issues',
        'Collaborated with design team'
      ]
    },
  ];

  const skills = [
    { name: 'React.js', level: 95, icon: faReact, color: '#61DAFB' },
    { name: 'JavaScript', level: 92, icon: faJs, color: '#F7DF1E' },
    { name: 'HTML5', level: 98, icon: faHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 96, icon: faCss3, color: '#1572B6' },
    { name: 'Node.js', level: 85, icon: faNodeJs, color: '#339933' },
    { name: 'TypeScript', level: 88, icon: faCode, color: '#3178C6' },
    { name: 'Next.js', level: 90, icon: faRocket, color: '#000000' },
    { name: 'Python', level: 80, icon: faPython, color: '#3776AB' },
  ];

  const interests = [
    { icon: faCode, name: 'Open Source', description: 'Contributing to GitHub projects' },
    { icon: faLightbulb, name: 'Tech Blogs', description: 'Writing about web development' },
    { icon: faUsers, name: 'Mentoring', description: 'Helping aspiring developers' },
    { icon: faMedal, name: 'Coding Challenges', description: 'Solving problems on LeetCode' },
    { icon: faHeart, name: 'UI/UX Design', description: 'Creating beautiful interfaces' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-3 sm:px-4 md:px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-[#48ff00] font-mono text-sm sm:text-base tracking-wider">
              $ about --rafi --full
            </span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">ABOUT </span>
            <span className="text-[#48ff00] relative inline-block">
              <span className="glitch-effect" data-text="ME">ME</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2 font-mono">
            <span className="text-[#48ff00]">&gt;</span> Passionate developer crafting digital experiences with code
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-black/50 border border-[#48ff00]/30 rounded-xl p-4 sm:p-6 md:p-8">
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full border-4 border-[#48ff00]/50 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#48ff00]/10 to-black flex items-center justify-center">
                    <div className="text-5xl sm:text-6xl md:text-7xl"><img src={myImg} alt="Rafi Ullah" /></div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-1/4 sm:right-1/3 w-4 h-4 bg-[#48ff00] rounded-full animate-pulse"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">Rafi Ullah</h2>
              <p className="text-[#48ff00] text-center font-mono text-sm sm:text-base mb-4">Senior Frontend Developer</p>
              
              <div className="text-center mb-6">
                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  Transforming ideas into interactive digital experiences with modern web technologies.
                </p>
                <div className="inline-flex items-center text-[#48ff00] text-sm font-mono">
                  <span className="animate-pulse">●</span>
                  <span className="ml-2">Available for opportunities</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="text-center p-3 bg-black/30 rounded-lg border border-[#48ff00]/20">
                  <div className="text-xl sm:text-2xl font-bold text-white">4+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Years Exp</div>
                </div>
                <div className="text-center p-3 bg-black/30 rounded-lg border border-[#48ff00]/20">
                  <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Projects</div>
                </div>
                <div className="text-center p-3 bg-black/30 rounded-lg border border-[#48ff00]/20">
                  <div className="text-xl sm:text-2xl font-bold text-white">30+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Clients</div>
                </div>
              </div>

              {/* Download CV Button */}
              <button className="w-full py-3 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold rounded-lg hover:shadow-[0_0_20px_rgba(72,255,0,0.5)] transition-all duration-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                DOWNLOAD CV
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {[
                { id: 'personal', label: 'Personal', icon: faUser },
                { id: 'education', label: 'Education', icon: faGraduationCap },
                { id: 'experience', label: 'Experience', icon: faBriefcase },
                { id: 'skills', label: 'Skills', icon: faCode },
                { id: 'interests', label: 'Interests', icon: faHeart },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg border font-mono text-sm sm:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#48ff00] text-black border-[#48ff00]'
                      : 'bg-black/50 text-gray-300 border-[#48ff00]/30 hover:border-[#48ff00] hover:text-[#48ff00]'
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-black/50 border border-[#48ff00]/30 rounded-xl p-4 sm:p-6 md:p-8 min-h-[400px]">
              {/* Personal Info */}
              {activeTab === 'personal' && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faUser} className="text-[#48ff00] mr-3" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex items-center p-3 sm:p-4 bg-black/30 rounded-lg border border-[#48ff00]/20">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#48ff00]/10 flex items-center justify-center mr-3 sm:mr-4">
                          <FontAwesomeIcon icon={info.icon} className="text-[#48ff00] text-lg sm:text-xl" />
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs sm:text-sm">{info.label}</div>
                          <div className="text-white font-mono text-sm sm:text-base">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-black/50 to-[#48ff00]/5 border border-[#48ff00]/20 rounded-lg">
                    <div className="flex items-start">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-[#48ff00] text-xl mr-3 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm sm:text-base italic mb-3">
                          "I believe in writing clean, efficient code that not only works but also tells a story. 
                          Every project is an opportunity to learn, innovate, and push the boundaries of what's possible on the web."
                        </p>
                        <div className="flex justify-end">
                          <FontAwesomeIcon icon={faQuoteRight} className="text-[#48ff00] text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Education */}
              {activeTab === 'education' && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faGraduationCap} className="text-[#48ff00] mr-3" />
                    Education & Certifications
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="relative pl-8 sm:pl-12 pb-4 sm:pb-6 border-l border-[#48ff00]/30 last:pb-0 group">
                        <div className="absolute left-[-6px] top-0 w-3 h-3 bg-[#48ff00] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <div className="text-[#48ff00] font-mono text-sm sm:text-base mb-1">{edu.year}</div>
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{edu.degree}</h4>
                        <div className="text-gray-300 text-sm sm:text-base mb-2">{edu.institution}</div>
                        <p className="text-gray-400 text-xs sm:text-sm">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {activeTab === 'experience' && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="text-[#48ff00] mr-3" />
                    Professional Experience
                  </h3>
                  <div className="space-y-6 sm:space-y-8">
                    {experience.map((exp, index) => (
                      <div key={index} className="bg-black/30 border border-[#48ff00]/20 rounded-lg p-4 sm:p-6 hover:border-[#48ff00] transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                          <div>
                            <div className="text-[#48ff00] font-mono text-sm sm:text-base mb-1">{exp.year}</div>
                            <h4 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h4>
                            <div className="text-gray-300 text-sm sm:text-base">{exp.company}</div>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="inline-block px-3 py-1 bg-[#48ff00]/10 text-[#48ff00] text-xs sm:text-sm font-mono rounded-full">
                              Full-time
                            </span>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm sm:text-base">
                              <span className="text-[#48ff00] mr-2 mt-1">▸</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {activeTab === 'skills' && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faCode} className="text-[#48ff00] mr-3" />
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-black/30 border border-[#48ff00]/20 rounded-lg p-4 hover:border-[#48ff00] transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mr-3"
                              style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                            >
                              <FontAwesomeIcon icon={skill.icon} />
                            </div>
                            <div>
                              <div className="font-bold text-white">{skill.name}</div>
                              <div className="text-gray-400 text-sm">{skill.level}%</div>
                            </div>
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
              )}

              {/* Interests */}
              {activeTab === 'interests' && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                    <FontAwesomeIcon icon={faHeart} className="text-[#48ff00] mr-3" />
                    Interests & Hobbies
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {interests.map((interest, index) => (
                      <div 
                        key={index}
                        className="bg-black/30 border border-[#48ff00]/20 rounded-lg p-4 text-center hover:border-[#48ff00] hover:scale-105 transition-all duration-300"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-lg bg-[#48ff00]/10 flex items-center justify-center mb-3">
                          <FontAwesomeIcon icon={interest.icon} className="text-[#48ff00] text-xl sm:text-2xl" />
                        </div>
                        <h4 className="font-bold text-white text-sm sm:text-base mb-1">{interest.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{interest.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

       {/* Timeline Section */}
<div className="mb-10 sm:mb-16">
  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
    My <span className="text-[#48ff00]">Journey</span>
  </h2>
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#48ff00] to-transparent hidden lg:block"></div>
    
    <div className="space-y-8 lg:space-y-12">
      {[
        { year: '2018', title: 'Started CS Degree', desc: 'Began formal education in Computer Science' },
        { year: '2019', title: 'First Web Project', desc: 'Built first responsive website for local business' },
        { year: '2020', title: 'React Certification', desc: 'Completed Meta Frontend Developer Certification' },
        { year: '2021', title: 'Senior Developer', desc: 'Promoted to lead development team' },
        { year: '2022', title: '50+ Projects', desc: 'Reached milestone of 50 completed projects' },
        { year: '2023', title: 'Open Source', desc: 'Started contributing to open source projects' },
      ].map((item, index) => (
        <div 
          key={index} 
          className={`relative ${index % 2 === 0 ? 'lg:pr-[calc(50%+2rem)] lg:pl-4' : 'lg:pl-[calc(50%+2rem)] lg:pr-4'}`}
        >
          <div 
            className={`bg-black/50 border border-[#48ff00]/30 rounded-xl p-4 sm:p-6 max-w-lg mx-auto lg:mx-0 ${
              index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
            }`}
          >
            <div className="text-[#48ff00] font-mono text-sm sm:text-base mb-2">{item.year}</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
          </div>
          {/* Timeline dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#48ff00] rounded-full border-4 border-black hidden lg:block"></div>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Social Links */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Connect <span className="text-[#48ff00]">With Me</span>
          </h2>
          <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
            {[
              { icon: faGithub, label: 'GitHub', color: 'hover:text-white', url: 'https://github.com' },
              { icon: faLinkedin, label: 'LinkedIn', color: 'hover:text-blue-400', url: 'https://linkedin.com' },
              { icon: faTwitter, label: 'Twitter', color: 'hover:text-cyan-400', url: 'https://twitter.com' },
              { icon: faCodepen, label: 'CodePen', color: 'hover:text-green-400', url: 'https://codepen.io' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-black/30 border border-[#48ff00]/20 flex items-center justify-center mb-2 group-hover:border-[#48ff00] transition-colors">
                  <FontAwesomeIcon icon={social.icon} className="text-2xl sm:text-3xl" />
                </div>
                <span className="font-mono text-xs sm:text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-black/50 to-[#48ff00]/5 border border-[#48ff00]/30 rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              LET'S <span className="text-[#48ff00]">WORK TOGETHER</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold rounded-lg hover:shadow-[0_0_20px_rgba(72,255,0,0.5)] transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Link to="/contact">CONTACT ME</Link> 
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/projects"
                className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-[#48ff00] text-[#48ff00] font-mono font-bold rounded-lg hover:bg-[#48ff00] hover:text-black transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  VIEW PROJECTS
                  <FontAwesomeIcon icon={faRocket} className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-[#48ff00] font-mono transition-colors text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faArrowRight} className="mr-2 rotate-180" />
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;