import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
// import Projects from './pages/Projects';
import Skills from './components/Skills/Skills.jsx';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
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
    </Router>
  );
}

export default App;