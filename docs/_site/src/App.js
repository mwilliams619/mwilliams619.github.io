import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Press from './pages/Press'
import CV from './pages/CV';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <Router>
        <div className='app-body'>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/press" element={<Press/>} />
            </Routes>
        
            <Footer />
        </div>
    </Router>
  );
}

export default App;