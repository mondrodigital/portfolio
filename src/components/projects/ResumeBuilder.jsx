import React from 'react';
import { projectImages } from '../../data/images';

const ResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="w-full rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl mb-24">
          <img
            src={projectImages.ezResumeCover}
            alt="EZResume Interface"
            className="w-full"
          />
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-4 gap-24">
          {/* Left side - 3/4 width */}
          <div className="col-span-3">
            <h1 className="text-6xl font-bold font-faction mb-6">EZResume</h1>
            <h2 className="text-4xl text-gray-500 font-light mb-12">
              A fast, simple tool for customizing resumes without the bloat
            </h2>
            <div className="mb-8">
              <a 
                href="https://ezresume-omega.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Try EZResume →
              </a>
            </div>
            <p className="text-gray-600 text-xl leading-relaxed mb-24 max-w-3xl">
              While job hunting, I found that existing resume tools were either too basic 
              or too complex. Most tools focused on AI-powered suggestions and fancy 
              formatting, when all I needed was a way to quickly customize my resume for 
              different positions while maintaining consistent formatting. I built EZResume 
              as a solution and deployed it online for others to use.
            </p>

            {/* Problem/Outcome Section */}
            <div className="grid grid-cols-2 gap-24">
              <div>
                <h3 className="text-2xl font-bold mb-4">Problem</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  How might we create a resume editor that focuses on speed and efficiency, 
                  allowing job seekers to quickly customize their resumes without getting 
                  bogged down by unnecessary features or complex formatting? Additionally, 
                  how can we make it easily accessible to everyone?
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Outcome</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Built and deployed EZResume as a free web application that reduces update 
                  time from 20 minutes to 5 minutes. Added smart spacing controls to help 
                  users optimize their resume layout. Beta users report applying to 3x more 
                  positions due to the simplified customization process.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - 1/4 width */}
          <div className="space-y-12 mt-[140px]">
            <div>
              <h3 className="text-2xl font-bold mb-4">Role</h3>
              <p className="text-gray-500 text-xl">Developer & Designer</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Timeline</h3>
              <p className="text-gray-500 text-xl">2 months + ongoing beta</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Team</h3>
              <p className="text-gray-500 text-xl">Solo Project</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Showcase */}
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-faction mb-6">Smart Spacing Controls</h3>
              <div className="rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl aspect-[4/3]">
                <img
                  src={projectImages.ezResumeSpacers}
                  alt="Resume Spacing Controls"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <p className="mt-6 text-gray-600 text-lg">
                Intuitive buttons to add or remove space between sections, helping you 
                perfectly fit your content on the page without awkward manual spacing.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-faction mb-6">Page Overflow Detection</h3>
              <div className="rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl aspect-[4/3]">
                <img
                  src={projectImages.ezResumeScroll}
                  alt="Page Overflow Indicator"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <p className="mt-6 text-gray-600 text-lg">
                Visual indicator appears when your resume exceeds one page, helping you 
                quickly identify and adjust content to maintain optimal length.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">Development Process</h2>
          <div className="grid grid-cols-1 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">1. Research & Planning</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Started by analyzing existing resume tools and identifying their shortcomings. 
                Found that most tools prioritized features over efficiency, making quick 
                updates difficult. Decided to build a web application for maximum accessibility.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">2. Core Features</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Focused on essential features: quick text editing, version management, 
                and one-click PDF export. Added smart spacing controls to help users 
                optimize their resume layout. Deliberately excluded AI suggestions and 
                complex formatting options.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">3. Deployment & Testing</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Deployed EZResume as a free web application, making it accessible to anyone 
                who needs it. Currently testing with active job seekers and gathering feedback 
                while maintaining the core focus on speed and simplicity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16">Results</h2>
          <div className="grid grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-5xl font-bold text-gray-900">75%</h3>
              <p className="text-xl text-gray-600">Reduction in time spent updating resumes</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-5xl font-bold text-gray-900">100%</h3>
              <p className="text-xl text-gray-600">Free and accessible to everyone</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-5xl font-bold text-gray-900">3x</h3>
              <p className="text-xl text-gray-600">Increase in job applications submitted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder; 