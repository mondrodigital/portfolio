import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Fun from './components/Fun';
import About from './components/About';
import LawFirmWebsite from './components/projects/LawFirmWebsite';
import AiTripPlanning from './components/projects/AiTripPlanning';
import SapienceNews from './components/projects/SapienceNews';
import ResumeBuilder from './components/projects/ResumeBuilder';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProjectGrid />
              </>
            } />
            <Route path="/project/resume-builder" element={<ResumeBuilder />} />
            <Route path="/project/law-firm-website" element={<LawFirmWebsite />} />
            <Route path="/project/ai-trip-planning" element={<AiTripPlanning />} />
            <Route path="/project/sapience-news" element={<SapienceNews />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;