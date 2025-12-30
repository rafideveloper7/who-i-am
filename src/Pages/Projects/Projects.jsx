import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Correct imports - faGithub is from free-brands-svg-icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// These are from free-solid-svg-icons
import { faExternalLinkAlt, faSearch, faFilter, faStar, faEye, faCodeBranch, faCalendar, faArrowRight, faLayerGroup, faRocket, faDesktop, faMobileAlt, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with React, Node.js, and MongoDB. Includes user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 245,
      forks: 89,
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design. Built with Next.js and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tags: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 156,
      forks: 42,
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates using Socket.io.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&auto=format&fit=crop',
      tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 189,
      forks: 67
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with 7-day forecast, location search, and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
      tags: ['Vue.js', 'Chart.js', 'Weather API', 'PWA'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 98,
      forks: 31
    },
    {
      id: 5,
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool using OpenAI API with user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'Prisma'],
      category: 'ai',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 312,
      forks: 124,
      featured: true
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness tracking app with workout plans, progress charts, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Recharts', 'PWA'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 178,
      forks: 56
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced filters, virtual tours, and agent management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      tags: ['React', 'Mapbox', 'Node.js', 'MySQL', 'AWS'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 267,
      forks: 94
    },
    {
      id: 8,
      title: 'Crypto Dashboard',
      description: 'Cryptocurrency portfolio tracker with real-time price updates and trading signals.',
      image: 'https://images.unsplash.com/photo-1620336655055-bd87c9dae2b0?w=800&auto=format&fit=crop',
      tags: ['React', 'WebSocket', 'Chart.js', 'Crypto API'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://demo.com',
      stars: 201,
      forks: 78
    },
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length, icon: faLayerGroup },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length, icon: faDesktop },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length, icon: faServer },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length, icon: faMobileAlt },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length, icon: faDatabase },
  ];

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="w-8 sm:w-12 h-1 bg-[#48ff00] mr-3 sm:mr-4"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              MY <span className="text-[#48ff00]">PROJECTS</span>
            </h1>
            <div className="w-8 sm:w-12 h-1 bg-[#48ff00] ml-3 sm:ml-4"></div>
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Explore my collection of projects, from full-stack applications to innovative frontend solutions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {[
              { value: projects.length, label: 'Projects', icon: faLayerGroup },
              { value: projects.reduce((acc, p) => acc + p.stars, 0), label: 'GitHub Stars', icon: faStar },
              { value: projects.reduce((acc, p) => acc + p.forks, 0), label: 'Forks', icon: faCodeBranch },
              { value: '100%', label: 'Success Rate', icon: faRocket },
            ].map((stat, index) => (
              <div key={index} className="bg-black/50 border border-[#48ff00]/20 rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#48ff00] mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-3" />
                <span className="text-white">Featured</span> <span className="text-[#48ff00] ml-2">Projects</span>
              </h2>
              <div className="text-gray-400 text-sm">
                <span className="text-[#48ff00] font-bold">{featuredProjects.length}</span> Featured
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-black/40 border border-[#48ff00]/20 rounded-2xl overflow-hidden hover:border-[#48ff00] transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-[#48ff00] text-black px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs border border-[#48ff00]/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#48ff00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-sm">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-2" />
                        <span className="text-gray-300">{project.stars}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FontAwesomeIcon icon={faCodeBranch} className="text-blue-500 mr-2" />
                        <span className="text-gray-300">{project.forks}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FontAwesomeIcon icon={faEye} className="text-green-500 mr-2" />
                        <span className="text-gray-300">{project.stars + project.forks * 10}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-black/50 border border-[#48ff00]/30 hover:bg-[#48ff00] hover:text-black transition-all duration-300 py-3 px-4 rounded-lg text-center font-bold flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black py-3 px-4 rounded-lg text-center font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter and Search */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/50 border border-[#48ff00]/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48ff00]/50 focus:border-transparent"
                />
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#48ff00]"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center ${
                      selectedCategory === category.id
                        ? 'bg-[#48ff00] text-black border-[#48ff00]'
                        : 'bg-black/50 border-[#48ff00]/20 text-gray-300 hover:border-[#48ff00] hover:text-white'
                    }`}
                  >
                    <FontAwesomeIcon icon={category.icon} className="mr-2" />
                    {category.name}
                    <span className="ml-2 text-xs bg-black/30 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold">
              <span className="text-white">All</span> <span className="text-[#48ff00]">Projects</span>
              <span className="ml-2 text-gray-500 text-sm font-normal">
                ({filteredProjects.length} projects)
              </span>
            </h3>
            
            <div className="text-gray-400 text-sm flex items-center">
              <FontAwesomeIcon icon={faFilter} className="mr-2" />
              Sorted by: <span className="text-[#48ff00] ml-1">Most Popular</span>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 border border-[#48ff00]/20 rounded-2xl">
              <FontAwesomeIcon icon={faSearch} className="text-4xl text-gray-500 mb-4" />
              <h4 className="text-xl font-bold text-gray-300 mb-2">No projects found</h4>
              <p className="text-gray-500">Try a different search or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-black/40 border border-[#48ff00]/20 rounded-xl overflow-hidden hover:border-[#48ff00] transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Tags */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs border border-[#48ff00]/30"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs border border-[#48ff00]/30">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold group-hover:text-[#48ff00] transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-xs text-gray-400 font-mono uppercase px-2 py-1 border border-[#48ff00]/20 rounded">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-between text-sm mb-6">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                        <span className="text-gray-300">{project.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faCodeBranch} className="text-blue-500 mr-1" />
                        <span className="text-gray-300">{project.forks}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faCalendar} className="text-green-500 mr-1" />
                        <span className="text-gray-300">2024</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-black/50 border border-[#48ff00]/20 hover:border-[#48ff00] transition-colors py-2 px-3 rounded text-center text-sm font-bold flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black py-2 px-3 rounded text-center text-sm font-bold hover:opacity-90 transition-all duration-300 flex items-center justify-center"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-black/80 via-black/50 to-black/80 border border-[#48ff00]/30 rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a <span className="text-[#48ff00]">Project</span> in Mind?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together. I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <FontAwesomeIcon icon={faRocket} className="mr-2" />
              Start a Project
            </Link>
            <a 
              href="https://github.com/rafideveloper7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#48ff00] text-[#48ff00] font-bold rounded-lg hover:bg-[#48ff00] hover:text-black transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              View GitHub
            </a>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
            <span className="text-white">Technologies</span> <span className="text-[#48ff00]">I Use</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: 'React', color: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
              { name: 'Next.js', color: 'bg-black/50', border: 'border-white/30', text: 'text-white' },
              { name: 'TypeScript', color: 'bg-blue-600/20', border: 'border-blue-600/30', text: 'text-blue-500' },
              { name: 'Tailwind', color: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' },
              { name: 'Node.js', color: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400' },
              { name: 'MongoDB', color: 'bg-green-600/20', border: 'border-green-600/30', text: 'text-green-500' },
              { name: 'Firebase', color: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-400' },
              { name: 'GraphQL', color: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400' },
              { name: 'AWS', color: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
              { name: 'Docker', color: 'bg-blue-400/20', border: 'border-blue-400/30', text: 'text-blue-300' },
              { name: 'PostgreSQL', color: 'bg-blue-700/20', border: 'border-blue-700/30', text: 'text-blue-600' },
              { name: 'Redis', color: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400' },
            ].map((tech, index) => (
              <div 
                key={index}
                className={`${tech.color} ${tech.border} border rounded-xl p-4 text-center group hover:scale-105 transition-all duration-300`}
              >
                <div className={`${tech.text} font-bold text-sm md:text-base group-hover:text-[#48ff00] transition-colors`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;