import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faPalette, faRocket, 
  faShieldHalved, faServer, faCogs, faChartLine,
  faSearch, faShoppingCart, faEnvelope ,
  faLaptopCode, faUsers, faLightbulb, faCheckCircle,
  faArrowRight, faTerminal, faBolt
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: faCode },
    { id: 'frontend', name: 'Frontend Development', icon: faLaptopCode },
    { id: 'backend', name: 'Backend Solutions', icon: faServer },
    { id: 'fullstack', name: 'Full-Stack Apps', icon: faCogs },
    { id: 'consulting', name: 'Consulting', icon: faUsers },
  ];

  const allServices = [
    {
      id: 1,
      title: 'React.js Development',
      category: 'frontend',
      icon: faCode,
      description: 'Custom React applications built with modern practices, hooks, and best-in-class state management.',
      features: [
        'Component-based architecture',
        'React Hooks & Custom Hooks',
        'Context API & Redux',
        'Performance optimization',
        'Code splitting & lazy loading',
        'Testing with Jest & RTL'
      ],
      price: 'From $2,500',
      timeline: '2-4 weeks',
      technologies: ['React 18+', 'TypeScript', 'Redux', 'Vite'],
      highlighted: true
    },
    {
      id: 2,
      title: 'Next.js Solutions',
      category: 'frontend',
      icon: faRocket,
      description: 'Server-side rendering, static generation, and full-stack capabilities with Next.js 14.',
      features: [
        'App Router architecture',
        'Server Components',
        'API Routes',
        'ISR & SSG',
        'Middleware',
        'Image optimization'
      ],
      price: 'From $3,500',
      timeline: '3-6 weeks',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind', 'Prisma'],
      highlighted: true
    },
    {
      id: 3,
      title: 'UI/UX Design Systems',
      category: 'frontend',
      icon: faPalette,
      description: 'Beautiful, responsive interfaces with design systems and component libraries.',
      features: [
        'Custom design systems',
        'Tailwind CSS configuration',
        'Component libraries',
        'Responsive design',
        'Accessibility (WCAG 2.1)',
        'Design tokens'
      ],
      price: 'From $1,800',
      timeline: '1-3 weeks',
      technologies: ['Figma', 'Tailwind', 'Storybook', 'Framer'],
      highlighted: false
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      category: 'backend',
      icon: faServer,
      description: 'Scalable server-side applications with Node.js, Express, and modern backend patterns.',
      features: [
        'RESTful API development',
        'GraphQL APIs',
        'Authentication & Authorization',
        'Database integration',
        'File upload & processing',
        'WebSocket integration'
      ],
      price: 'From $3,000',
      timeline: '3-5 weeks',
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      highlighted: true
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      category: 'fullstack',
      icon: faShoppingCart,
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: [
        'Shopping cart functionality',
        'Payment gateway integration',
        'Product management',
        'Order processing',
        'User accounts',
        'Admin dashboard'
      ],
      price: 'From $5,000',
      timeline: '4-8 weeks',
      technologies: ['Next.js', 'Stripe', 'Sanity', 'MongoDB'],
      highlighted: false
    },
    {
      id: 6,
      title: 'Performance Optimization',
      category: 'consulting',
      icon: faChartLine,
      description: 'Audit and optimize your web application for maximum speed and efficiency.',
      features: [
        'Lighthouse audit',
        'Bundle size optimization',
        'Caching strategies',
        'CDN implementation',
        'Database optimization',
        'Load testing'
      ],
      price: 'From $1,500',
      timeline: '1-2 weeks',
      technologies: ['Webpack', 'Vite', 'Redis', 'Cloudflare'],
      highlighted: false
    },
    {
      id: 7,
      title: 'Security Implementation',
      category: 'consulting',
      icon: faShieldHalved,
      description: 'Comprehensive security solutions to protect your web applications.',
      features: [
        'Authentication systems',
        'Authorization logic',
        'Data encryption',
        'XSS protection',
        'CSRF protection',
        'Security headers'
      ],
      price: 'From $2,000',
      timeline: '2-3 weeks',
      technologies: ['JWT', 'OAuth', 'bcrypt', 'Helmet'],
      highlighted: true
    },
    {
      id: 8,
      title: 'SEO Optimization',
      category: 'consulting',
      icon: faSearch,
      description: 'Improve search engine visibility with technical SEO implementation.',
      features: [
        'Technical SEO audit',
        'Meta tags optimization',
        'Structured data',
        'Sitemap generation',
        'SEO-friendly URLs',
        'Page speed optimization'
      ],
      price: 'From $1,200',
      timeline: '1-2 weeks',
      technologies: ['Next.js SEO', 'Schema.org', 'Google Analytics'],
      highlighted: false
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(72, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(72, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#48ff00] font-mono text-sm tracking-wider">$ services --list</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">MY </span>
            <span className="text-[#48ff00] relative inline-block">
              <span className="" data-text="SERVICES">SERVICES</span>
              {/* <span className="absolute top-0 left-0 text-[#ff00ff] opacity-70 animate-pulse">SERVICES</span>
              <span className="absolute top-0 left-0 text-[#00ffff] opacity-70 animate-pulse delay-75">SERVICES</span> */}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-[#48ff00]">&gt;</span> Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center px-6 py-3 rounded-lg border font-mono transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#48ff00] text-black border-[#48ff00]'
                  : 'bg-black/50 text-gray-300 border-[#48ff00]/30 hover:border-[#48ff00] hover:text-[#48ff00]'
              }`}
            >
              <FontAwesomeIcon icon={category.icon} className="mr-3" />
              {category.name}
              {activeCategory === category.id && (
                <span className="ml-3 animate-pulse">●</span>
              )}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '50+', label: 'Projects Delivered', color: 'text-[#48ff00]' },
            { value: '100%', label: 'Client Satisfaction', color: 'text-[#00ff41]' },
            { value: '30+', label: 'Technologies Used', color: 'text-[#ff00ff]' },
            { value: '24/7', label: 'Support Available', color: 'text-[#00ffff]' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-[#48ff00]/20 rounded-xl p-6 text-center hover:border-[#48ff00] transition-all duration-300"
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} font-mono mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className={`group bg-black/50 border rounded-xl p-6 hover:scale-105 transition-all duration-500 ${
                service.highlighted 
                  ? 'border-[#48ff00] shadow-2xl shadow-[#48ff00]/10' 
                  : 'border-[#48ff00]/30 hover:border-[#48ff00]'
              }`}
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 rounded-lg bg-[#48ff00]/10 flex items-center justify-center mb-4 group-hover:bg-[#48ff00]/20 transition-colors">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl text-[#48ff00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-[#48ff00]/10 text-[#48ff00] text-xs font-mono rounded-full">
                      {service.category}
                    </span>
                    {service.highlighted && (
                      <span className="ml-3 px-3 py-1 bg-[#ff00ff]/10 text-[#ff00ff] text-xs font-mono rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                </div>
                {service.highlighted && (
                  <div className="text-[#48ff00] animate-pulse">
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">{service.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-[#48ff00] font-mono mb-3">FEATURES</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff41] mr-3 text-sm" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-[#48ff00] font-mono mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-black/30 text-gray-300 text-sm font-mono rounded border border-[#48ff00]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-[#48ff00]/20 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-white font-bold text-xl">{service.price}</div>
                    <div className="text-gray-400 text-sm">Timeline: {service.timeline}</div>
                  </div>
                  <button className="group relative px-6 py-3 bg-[#48ff00] text-black font-mono font-bold rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
                    <span className="relative z-10">GET QUOTE</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-black/50 border border-[#48ff00]/30 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            <span className="text-[#48ff00]">DEVELOPMENT</span> PROCESS
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono">
            <span className="text-[#48ff00]">&gt;</span> A structured approach to ensure quality and timely delivery
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Discovery', 
                desc: 'Requirements gathering & planning',
                icon: faLightbulb,
                color: 'from-[#48ff00] to-[#00ff41]'
              },
              { 
                step: '02', 
                title: 'Design', 
                desc: 'UI/UX design & architecture',
                icon: faPalette,
                color: 'from-[#00ff41] to-[#00ffff]'
              },
              { 
                step: '03', 
                title: 'Development', 
                desc: 'Coding & implementation',
                icon: faCode,
                color: 'from-[#00ffff] to-[#ff00ff]'
              },
              { 
                step: '04', 
                title: 'Deployment', 
                desc: 'Testing & launch',
                icon: faRocket,
                color: 'from-[#ff00ff] to-[#48ff00]'
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className={`bg-gradient-to-br ${process.color} p-0.5 rounded-xl`}>
                  <div className="bg-black rounded-xl p-6">
                    <div className="text-5xl font-bold text-transparent bg-gradient-to-br bg-clip-text mb-4">
                      {process.step}
                    </div>
                    <FontAwesomeIcon 
                      icon={process.icon} 
                      className={`text-3xl mb-4 bg-gradient-to-br ${process.color} bg-clip-text text-transparent`}
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-gray-400">{process.desc}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#48ff00] to-[#00ffff]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-black/50 to-[#48ff00]/5 border border-[#48ff00]/30 rounded-2xl p-12 mb-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              READY TO <span className="text-[#48ff00]">START</span> YOUR PROJECT?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-mono">
              <span className="text-[#48ff00]">&gt;</span> Let's discuss your requirements and build something amazing together
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold rounded-lg text-lg hover:shadow-[0_0_30px_rgba(72,255,0,0.5)] transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  GET IN TOUCH
                  <FontAwesomeIcon icon={faArrowRight} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </Link>
              
              <a
                href="mailto:hello@rafi.dev"
                className="group px-10 py-4 border-2 border-[#48ff00] text-[#48ff00] font-mono font-bold rounded-lg text-lg hover:bg-[#48ff00] hover:text-black transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  SEND EMAIL
                </span>
              </a>
            </div>
            
            <div className="mt-10 text-gray-500 font-mono text-sm">
              <FontAwesomeIcon icon={faTerminal} className="mr-2 text-[#48ff00]" />
              Response time: &lt; 24 hours • Available for new projects
            </div>
          </div>

          {/* Back to Home */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-[#48ff00] font-mono transition-colors"
          >
            <FontAwesomeIcon icon={faArrowRight} className="mr-2 rotate-180" />
            BACK TO HOME
          </Link>
        </div>
      </div>

      {/* Add to index.css */}
      <style jsx>{`
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

export default Services;