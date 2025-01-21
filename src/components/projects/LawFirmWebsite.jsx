import React from 'react';
import { projectImages } from '../../data/images';

const LawFirmWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="w-full rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl mb-24">
          <img
            src={projectImages.newLawSite}
            alt="Law Firm Website"
            className="w-full"
          />
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-4 gap-24">
          {/* Left side - 3/4 width */}
          <div className="col-span-3">
            <h1 className="text-6xl font-bold font-faction mb-6">Slepkow Law Website</h1>
            <h2 className="text-4xl text-gray-500 font-light mb-12">
              Modernizing a 90-year legacy in real estate law
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-24 max-w-3xl">
              Slepkow, Slepkow & Associates, a real estate law firm with over 90 years 
              of history, needed a complete website overhaul. After an in-depth consultation 
              to understand their vision and goals, I developed a modern, user-friendly 
              website that honored their legacy while providing powerful content management 
              capabilities they didn't even know they needed.
            </p>

            {/* Problem/Outcome Section */}
            <div className="grid grid-cols-2 gap-24">
              <div>
                <h3 className="text-2xl font-bold mb-4">Problem</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  How might we transform an outdated website into a modern platform that 
                  maintains the firm's professional reputation while making it easy for 
                  them to manage their own content and engage with clients effectively?
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Outcome</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Created a modern, responsive website with intuitive CMS integration 
                  that exceeded client expectations. The new site significantly improved 
                  user engagement metrics and empowered the firm to manage their own 
                  content with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - 1/4 width */}
          <div className="space-y-12 mt-[140px]">
            <div>
              <h3 className="text-2xl font-bold mb-4">Role</h3>
              <p className="text-gray-500 text-xl">Independent Developer & Designer</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Timeline</h3>
              <p className="text-gray-500 text-xl">4 months + ongoing support</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Team</h3>
              <p className="text-gray-500 text-xl">Solo Project</p>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-faction mb-6">Original</h3>
              <div className="rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl">
                <img
                  src={projectImages.originalLawSite}
                  alt="Original Law Firm Website"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-faction mb-6">New Design</h3>
              <div className="rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl">
                <img
                  src={projectImages.newLawSite}
                  alt="New Law Firm Website Design"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-gray-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-20">
            <div className="pr-12">
              <h2 className="text-6xl font-bold font-faction mb-4">Project</h2>
              <h2 className="text-6xl font-bold font-faction text-gray-500 mb-8">approach</h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Starting with a thorough consultation to understand the firm's needs, 
                I followed a systematic approach that prioritized both immediate 
                improvements and long-term maintainability. Each phase built upon user 
                feedback and analytics insights.
              </p>
            </div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">01</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Discovery & Design</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Met with the partners to document their goals and desired aesthetic. 
                    Created multiple design concepts and refined the chosen direction 
                    based on their feedback to ensure it matched their vision.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">02</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Development & CMS</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Built out the homepage first to establish the design system. After 
                    approval, developed the full site with CMS integration for team 
                    members, practice areas, and real estate law services management.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">03</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Analytics & Launch</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Integrated Microsoft Clarity for behavior tracking. Secured new 
                    domain and launched the site. Helped announce the launch to their 
                    professional network.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">04</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Optimization & Support</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Monitored analytics for 4 months, making continuous improvements. 
                    Enhanced attorney profiles based on search patterns and adjusted 
                    navigation paths to reduce confusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Details */}
      <div className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-32">
            <div>
              <h2 className="text-5xl font-bold font-faction mb-8">Key Features</h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-16">
                The website combines professional design with powerful management tools, 
                creating a platform that serves both the firm's clients and internal 
                team effectively.
              </p>
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">01.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Custom CMS: Easy management of team profiles, real estate law services, 
                      and client testimonials without technical knowledge
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">02.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Behavior Analytics: Microsoft Clarity integration for detailed 
                      user interaction tracking and heatmaps
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">03.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Enhanced Attorney Profiles: Optimized with firm context for 
                      direct search traffic
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-[600px] w-full rounded-2xl overflow-y-auto bg-[#FDF6F3] shadow-xl">
                <img
                  src={projectImages.slepkowFullScreen}
                  alt="Full Law Firm Website Design"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-900 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold font-faction mb-32">The Impact</h2>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-8 mb-32">
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">4mo</span>
              <span className="text-xl text-gray-400">Optimization period</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">90+</span>
              <span className="text-xl text-gray-400">Years of firm history</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">100%</span>
              <span className="text-xl text-gray-400">Client satisfaction</span>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h3 className="text-3xl font-bold mb-12">Technical Success</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">⚡️</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Modern Platform</h4>
                    <p className="text-gray-400">
                      Responsive design with powerful content management capabilities
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Analytics Integration</h4>
                    <p className="text-gray-400">
                      Detailed user behavior tracking leading to continuous improvements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-12">Client Success</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Improved Engagement</h4>
                    <p className="text-gray-400">Longer session times and reduced bounce rates</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Content Control</h4>
                    <p className="text-gray-400">Team independently manages site content through CMS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawFirmWebsite; 