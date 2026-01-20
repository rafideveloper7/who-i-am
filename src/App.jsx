import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import '../public/assets/css/particles.css'
import './App.css'
import AirplaneCursor from './components/Effects/MouseEffect.jsx';
import Home from './Pages/Home/Home.jsx';
import Skills from './Pages/Skills/Skills.jsx';
import Services from './Pages/Services/Services.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <HashRouter>
    <Router>
      <ScrollToTop />
        <AirplaneCursor />
      <div className="min-h-screen bg-black">
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/blog" element={<Blog />} />*/}
        </Routes>
        
      </div>
      <Footer />
      </div>
      <Analytics />
    </Router>
    </HashRouter>
  );
}

export default App;