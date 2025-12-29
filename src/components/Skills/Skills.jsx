import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
  faPython,
  faJava,
  faFigma,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faServer,
  faBolt,
  faPalette,
  faMobileAlt,
  faRocket,
  faChartLine,
  faCheckCircle,
  faArrowRight,
  faLayerGroup,
  faCogs,
  faCloud,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Pre-calculate random values with useMemo to keep them stable
  const matrixSymbols = useMemo(() => {
    const symbols = ["{ }", "=>", "()", "[]", "===", "...", "</>"];
    return Array(30)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
        fontSize: Math.random() * 20 + 10,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      }));
  }, []);

  const categories = [
    { id: "all", name: "All Skills", icon: faCode, count: 20 },
    { id: "frontend", name: "Frontend", icon: faPalette, count: 8 },
    { id: "backend", name: "Backend", icon: faServer, count: 6 },
    { id: "database", name: "Database", icon: faDatabase, count: 4 },
    { id: "tools", name: "Tools", icon: faCogs, count: 7 },
  ];

  const skillLevels = {
    expert: { color: "from-[#48ff00] to-[#00ff41]", label: "Expert" },
    advanced: { color: "from-[#00ff41] to-[#00ffff]", label: "Advanced" },
    intermediate: {
      color: "from-[#00ffff] to-[#ff00ff]",
      label: "Intermediate",
    },
    beginner: { color: "from-[#ff00ff] to-[#ff8800]", label: "Beginner" },
  };

  const allSkills = [
    // ========== FRONTEND ==========
    {
      id: 1,
      name: "HTML5",
      category: "frontend",
      icon: faHtml5,
      level: "expert",
      percentage: 98,
      description: "Semantic HTML, Accessibility, Modern APIs",
      color: "#E34F26",
      experience: "5+ years",
      projects: "50+",
      technologies: ["HTML5", "Semantic", "Web Components", "PWA"],
    },
    {
      id: 2,
      name: "CSS3",
      category: "frontend",
      icon: faCss3Alt,
      level: "expert",
      percentage: 96,
      description: "Advanced CSS, Animations, Grid/Flexbox",
      color: "#1572B6",
      experience: "5+ years",
      projects: "50+",
      technologies: ["CSS3", "Grid", "Flexbox", "Animations", "Sass"],
    },
    {
      id: 3,
      name: "JavaScript",
      category: "frontend",
      icon: faJs,
      level: "expert",
      percentage: 95,
      description: "ES6+, Async Programming, Design Patterns",
      color: "#F7DF1E",
      experience: "4+ years",
      projects: "40+",
      technologies: ["ES6+", "Async/Await", "Promises", "Modules"],
    },
    {
      id: 4,
      name: "React.js",
      category: "frontend",
      icon: faReact,
      level: "expert",
      percentage: 94,
      description: "Hooks, Context, Performance Optimization",
      color: "#61DAFB",
      experience: "3+ years",
      projects: "30+",
      technologies: ["React 18", "Hooks", "Context", "Redux"],
    },
    {
      id: 5,
      name: "TypeScript",
      category: "frontend",
      icon: faCode,
      level: "advanced",
      percentage: 88,
      description: "Type Safety, Interfaces, Generics",
      color: "#3178C6",
      experience: "2+ years",
      projects: "20+",
      technologies: ["TS", "Interfaces", "Generics", "Utility Types"],
    },
    {
      id: 6,
      name: "Next.js",
      category: "frontend",
      icon: faRocket,
      level: "advanced",
      percentage: 90,
      description: "App Router, Server Components, SSR",
      color: "#000000",
      experience: "2+ years",
      projects: "15+",
      technologies: ["Next 14", "App Router", "SSR", "ISG"],
    },
    {
      id: 7,
      name: "Tailwind CSS",
      category: "frontend",
      icon: faPalette,
      level: "expert",
      percentage: 93,
      description: "Utility-First, Custom Configurations",
      color: "#06B6D4",
      experience: "3+ years",
      projects: "25+",
      technologies: ["Tailwind", "JIT", "Plugins", "Themes"],
    },
    {
      id: 8,
      name: "Responsive Design",
      category: "frontend",
      icon: faMobileAlt,
      level: "expert",
      percentage: 97,
      description: "Mobile-First, Cross-Browser Compatibility",
      color: "#48ff00",
      experience: "5+ years",
      projects: "50+",
      technologies: ["Media Queries", "Fluid Layouts", "Touch UX"],
    },

    // ========== BACKEND ==========
    {
      id: 9,
      name: "Node.js",
      category: "backend",
      icon: faNodeJs,
      level: "advanced",
      percentage: 85,
      description: "Express, REST APIs, Middleware",
      color: "#339933",
      experience: "2+ years",
      projects: "15+",
      technologies: ["Express", "REST", "Middleware", "WebSocket"],
    },
    {
      id: 10,
      name: "Python",
      category: "backend",
      icon: faPython,
      level: "intermediate",
      percentage: 75,
      description: "Django, Flask, Data Processing",
      color: "#3776AB",
      experience: "1+ years",
      projects: "8+",
      technologies: ["Django", "Flask", "Pandas", "Automation"],
    },
    {
      id: 11,
      name: "Java",
      category: "backend",
      icon: faJava,
      level: "intermediate",
      percentage: 70,
      description: "Spring Boot, Microservices",
      color: "#007396",
      experience: "1+ years",
      projects: "5+",
      technologies: ["Spring", "JPA", "REST APIs", "OOP"],
    },
    {
      id: 12,
      name: "API Development",
      category: "backend",
      icon: faServer,
      level: "advanced",
      percentage: 88,
      description: "REST, GraphQL, Authentication",
      color: "#ff00ff",
      experience: "2+ years",
      projects: "20+",
      technologies: ["REST", "GraphQL", "JWT", "Swagger"],
    },

    // ========== DATABASE ==========
    {
      id: 13,
      name: "MongoDB",
      category: "database",
      icon: faDatabase,
      level: "advanced",
      percentage: 82,
      description: "NoSQL, Aggregation, Indexing",
      color: "#47A248",
      experience: "2+ years",
      projects: "12+",
      technologies: ["MongoDB", "Mongoose", "Aggregation"],
    },
    {
      id: 14,
      name: "PostgreSQL",
      category: "database",
      icon: faDatabase,
      level: "intermediate",
      percentage: 78,
      description: "SQL, Relations, Performance",
      color: "#336791",
      experience: "1+ years",
      projects: "8+",
      technologies: ["SQL", "Joins", "Indexes", "Transactions"],
    },
    {
      id: 15,
      name: "Firebase",
      category: "database",
      icon: faCloud,
      level: "intermediate",
      percentage: 80,
      description: "Realtime Database, Firestore, Auth",
      color: "#FFCA28",
      experience: "1+ years",
      projects: "10+",
      technologies: ["Firestore", "Auth", "Storage", "Hosting"],
    },

    // ========== TOOLS ==========
    {
      id: 16,
      name: "Git & GitHub",
      category: "tools",
      icon: faGithub,
      level: "expert",
      percentage: 92,
      description: "Version Control, CI/CD, Collaboration",
      color: "#181717",
      experience: "4+ years",
      projects: "40+",
      technologies: ["Git", "GitHub", "Actions", "PRs"],
    },
    {
      id: 17,
      name: "Docker",
      category: "tools",
      icon: faDocker,
      level: "intermediate",
      percentage: 72,
      description: "Containerization, Docker Compose",
      color: "#2496ED",
      experience: "1+ years",
      projects: "6+",
      technologies: ["Docker", "Compose", "Images", "Volumes"],
    },
    {
      id: 18,
      name: "Figma",
      category: "tools",
      icon: faFigma,
      level: "advanced",
      percentage: 85,
      description: "UI Design, Prototyping, Systems",
      color: "#F24E1E",
      experience: "2+ years",
      projects: "20+",
      technologies: ["UI Design", "Prototyping", "Components"],
    },
    {
      id: 19,
      name: "VS Code",
      category: "tools",
      icon: faCode,
      level: "expert",
      percentage: 95,
      description: "Extensions, Debugging, Productivity",
      color: "#007ACC",
      experience: "4+ years",
      projects: "50+",
      technologies: ["Extensions", "Debugger", "Terminal"],
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  const experienceStats = [
    { label: "Total Projects", value: "50+", icon: faLayerGroup },
    { label: "Years Experience", value: "5+", icon: faChartLine },
    { label: "Technologies", value: "20+", icon: faCogs },
    { label: "Happy Clients", value: "30+", icon: faWifi },
  ];

  const learningGoals = [
    { technology: "Go Lang", progress: 40, color: "#00ADD8" },
    { technology: "Kubernetes", progress: 35, color: "#326CE5" },
    { technology: "AWS", progress: 50, color: "#FF9900" },
    { technology: "GraphQL", progress: 65, color: "#E10098" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Animated Matrix Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {matrixSymbols.map((item, i) => (
            <div
              key={i}
              className="absolute text-[#48ff00] animate-float"
              style={{
                left: `${item.left}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
                fontSize: `${item.fontSize}px`,
              }}
            >
              {item.symbol}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#48ff00] font-mono text-sm tracking-wider">
              $ skills --all --level
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">TECH </span>
            <span className="text-[#48ff00] relative inline-block">
              <span className="" data-text="SKILLS">
                SKILLS
              </span>
              {/* <span className="absolute top-0 left-0 text-[#ff00ff] opacity-70 animate-pulse">
                SKILLS
              </span>
              <span className="absolute top-0 left-0 text-[#00ffff] opacity-70 animate-pulse delay-75">
                SKILLS
              </span> */}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-[#48ff00]">&gt;</span> Mastery in modern web
            technologies and development tools
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {experienceStats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/50 border border-[#48ff00]/20 rounded-xl p-6 text-center hover:border-[#48ff00] transition-all duration-300 hover:scale-105"
            >
              <FontAwesomeIcon
                icon={stat.icon}
                className="text-3xl text-[#48ff00] mb-4"
              />
              <div className="text-3xl md:text-4xl font-bold text-white font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center px-6 py-3 rounded-lg border font-mono transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#48ff00] text-black border-[#48ff00] shadow-[0_0_20px_rgba(72,255,0,0.3)]"
                  : "bg-black/50 text-gray-300 border-[#48ff00]/30 hover:border-[#48ff00] hover:text-[#48ff00] hover:bg-black/70"
              }`}
            >
              <FontAwesomeIcon icon={category.icon} className="mr-3" />
              {category.name}
              <span className="ml-3 px-2 py-1 bg-black/30 text-xs rounded">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-black/50 border border-[#48ff00]/20 rounded-xl p-6 hover:border-[#48ff00] hover:scale-105 transition-all duration-500"
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mr-4"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                      border: `2px solid ${skill.color}40`,
                    }}
                  >
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {skill.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span
                        className={`px-3 py-1 text-xs font-mono rounded-full bg-gradient-to-r ${
                          skillLevels[skill.level].color
                        } text-black`}
                      >
                        {skillLevels[skill.level].label}
                      </span>
                      <span className="ml-3 text-gray-400 text-sm font-mono">
                        {skill.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white">
                  {skill.percentage}%
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">{skill.description}</p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Proficiency</span>
                  <span className="font-mono">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${
                      skillLevels[skill.level].color
                    } transition-all duration-1000`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-[#48ff00] font-mono mb-3 text-sm">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-black/30 text-gray-300 text-xs font-mono rounded border border-[#48ff00]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Projects Count */}
              <div className="flex justify-between items-center pt-4 border-t border-[#48ff00]/20">
                <div className="text-gray-400 text-sm">
                  <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
                  {skill.projects} projects
                </div>
                <div className="text-[#48ff00] font-mono text-sm">
                  {skill.category.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="bg-black/50 border border-[#48ff00]/30 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            <span className="text-[#48ff00]">CURRENTLY</span> LEARNING
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto font-mono">
            <span className="text-[#48ff00]">&gt;</span> Continuously expanding
            my skill set with emerging technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningGoals.map((goal, index) => (
              <div
                key={index}
                className="bg-black/30 border border-[#48ff00]/20 rounded-xl p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {goal.technology}
                  </h3>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: goal.color }}
                  >
                    {goal.progress}%
                  </div>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${goal.progress}%`,
                      backgroundColor: goal.color,
                    }}
                  ></div>
                </div>
                <div className="text-gray-400 text-sm">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="mr-2 text-[#48ff00]"
                  />
                  In Progress
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MERN Stack Specialization */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-[#48ff00]">MERN STACK</span> SPECIALIZATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                letter: "M",
                name: "MongoDB",
                description: "NoSQL database with flexible schema",
                icon: faDatabase,
                color: "#47A248",
                features: [
                  "CRUD Operations",
                  "Aggregation",
                  "Indexing",
                  "Replication",
                ],
              },
              {
                letter: "E",
                name: "Express.js",
                description: "Backend web application framework",
                icon: faServer,
                color: "#000000",
                features: [
                  "Middleware",
                  "Routing",
                  "REST APIs",
                  "Error Handling",
                ],
              },
              {
                letter: "R",
                name: "React",
                description: "Frontend library for building UIs",
                icon: faReact,
                color: "#61DAFB",
                features: [
                  "Components",
                  "Hooks",
                  "State Management",
                  "Virtual DOM",
                ],
              },
              {
                letter: "N",
                name: "Node.js",
                description: "JavaScript runtime environment",
                icon: faNodeJs,
                color: "#339933",
                features: ["Event Loop", "NPM", "Modules", "Async I/O"],
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-black/50 to-transparent border border-[#48ff00]/20 rounded-xl p-6 hover:scale-105 transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div
                    className="inline-block w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-4"
                    style={{
                      backgroundColor: `${tech.color}20`,
                      color: tech.color,
                      border: `3px solid ${tech.color}`,
                    }}
                  >
                    {tech.letter}
                  </div>
                  <FontAwesomeIcon
                    icon={tech.icon}
                    className="text-3xl mb-4"
                    style={{ color: tech.color }}
                  />
                  <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-400 text-center mb-6">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-[#00ff41] mr-3"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certification & Achievements */}
        <div className="bg-black/50 border border-[#48ff00]/30 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-[#48ff00]">CERTIFICATIONS</span> &
            ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "React Professional",
                issuer: "Meta",
                year: "2023",
                icon: faReact,
              },
              {
                title: "JavaScript Expert",
                issuer: "MDN",
                year: "2022",
                icon: faJs,
              },
              {
                title: "Frontend Developer",
                issuer: "FreeCodeCamp",
                year: "2021",
                icon: faCode,
              },
              {
                title: "TypeScript Mastery",
                issuer: "Frontend Masters",
                year: "2023",
                icon: faCode,
              },
              {
                title: "Node.js Certified",
                issuer: "OpenJS",
                year: "2022",
                icon: faNodeJs,
              },
              {
                title: "Web Performance",
                issuer: "Google",
                year: "2023",
                icon: faBolt,
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-black/30 border border-[#48ff00]/20 rounded-xl p-6 hover:border-[#48ff00] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#48ff00]/10 flex items-center justify-center mr-4">
                    <FontAwesomeIcon
                      icon={cert.icon}
                      className="text-xl text-[#48ff00]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cert.title}
                    </h3>
                    <div className="text-gray-400 text-sm">
                      {cert.issuer} • {cert.year}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#48ff00] text-sm font-mono">
                    VERIFIED ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-black/50 to-[#48ff00]/5 border border-[#48ff00]/30 rounded-2xl p-12 mb-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              NEED <span className="text-[#48ff00]">TECH</span> EXPERTISE?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-mono">
              <span className="text-[#48ff00]">&gt;</span> Let's build something
              amazing with the right technology stack
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#48ff00] to-[#00ff41] text-black font-mono font-bold rounded-lg text-lg hover:shadow-[0_0_30px_rgba(72,255,0,0.5)] transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  HIRE ME
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-3 group-hover:translate-x-2 transition-transform"
                  />
                </span>
              </Link>

              <Link
                to="/projects"
                className="group px-10 py-4 border-2 border-[#48ff00] text-[#48ff00] font-mono font-bold rounded-lg text-lg hover:bg-[#48ff00] hover:text-black transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  VIEW PROJECTS
                  <FontAwesomeIcon icon={faRocket} className="ml-3" />
                </span>
              </Link>
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

      {/* CSS Animations - Add to index.css */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
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
          0% {
            clip-path: inset(20% 0 30% 0);
          }
          100% {
            clip-path: inset(10% 0 40% 0);
          }
        }

        @keyframes glitch-2 {
          0% {
            clip-path: inset(40% 0 20% 0);
          }
          100% {
            clip-path: inset(30% 0 30% 0);
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
