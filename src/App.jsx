import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Skills from './components/Skills/Skills.jsx';
import '../public/assets/css/particles.css'
import './App.css'
import CursorCircle from './components/Effects/MouseEffect.jsx';
// import Projects from './pages/Projects';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <CursorCircle />
        {/* particles */}
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>

        <Navbar />
        <div className=' xl:w-[80%] xl:m-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} /> 
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />*/}
        </Routes>
        
      </div>
      </div>
    </Router>
  );
}

export default App;