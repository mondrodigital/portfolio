import React from 'react';
import { projectImages } from '../../data/images';

const AiTripPlanning = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="w-full rounded-2xl overflow-hidden bg-[#FDF6F3] shadow-xl mb-24">
          <img
            src={projectImages.triplyLanding}
            alt="Triply Landing Page"
            className="w-full"
          />
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-4 gap-24">
          {/* Left side - 3/4 width */}
          <div className="col-span-3">
            <h1 className="text-6xl font-bold font-faction mb-6">Triply</h1>
            <h2 className="text-4xl text-gray-500 font-light mb-12">
              User acquisition campaign for an AI-powered travel planning platform
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-24 max-w-3xl">
              For a startup in beta phase, we were tasked with building a user acquisition
              campaign to attract early adopters. My partner, the engineer, and I designed
              and executed a multi-channel strategy that exceeded our targets, generating
              150 engaged beta users at an efficient cost per acquisition.
            </p>

            {/* Problem/Outcome Section */}
            <div className="grid grid-cols-2 gap-24">
              <div>
                <h3 className="text-2xl font-bold mb-4">Problem</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  How might we attract and convert tech-savvy travelers to test a new
                  AI travel planning platform while maintaining a low cost per acquisition?
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Outcome</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Generated 150 beta users through a combination of paid social media
                  and organic ChatGPT marketing, achieving a 5% conversion rate at $0.33
                  per lead.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - 1/4 width */}
          <div className="space-y-12 mt-[140px]">
            <div>
              <h3 className="text-2xl font-bold mb-4">Role</h3>
              <p className="text-gray-500 text-xl">Marketing Lead</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Timeline</h3>
              <p className="text-gray-500 text-xl">3 weeks</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Team</h3>
              <p className="text-gray-500 text-xl">2 people</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-gray-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-20">
            <div className="pr-12">
              <h2 className="text-6xl font-bold font-faction mb-4">Marketing sprint</h2>
              <h2 className="text-6xl font-bold font-faction text-gray-500 mb-8">in three weeks</h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                I'm proud of this project because we were able to 
                design and execute a successful user acquisition 
                campaign in just three weeks. While we had aggressive 
                targets, we exceeded expectations through continuous 
                optimization and multi-channel approach.
              </p>
            </div>
            
            <div className="space-y-16">
              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">01</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Week 1—Research & Strategy</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Conducted market research and competitor analysis. Created campaign strategy 
                    and messaging framework. Designed initial landing page wireframes and ran A/B 
                    tests with small focus groups.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">02</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Week 2—Launch & Optimization</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Launched Facebook and Instagram ad campaigns. Started ChatGPT marketing 
                    initiatives. Continuously monitored metrics and optimized ad spend based on 
                    performance data.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[80px_1fr] gap-6">
                <div className="text-4xl font-bold text-gray-600">03</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Week 3—Scale & Analysis</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Scaled successful ad campaigns. Expanded ChatGPT marketing presence. 
                    Analyzed user feedback and campaign metrics. Prepared comprehensive 
                    report on campaign performance.
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
              <h2 className="text-5xl font-bold font-faction mb-20">The Approach</h2>
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">01.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Designed and launched targeted Facebook and Instagram ad campaigns to reach 
                      tech-savvy travelers interested in AI and innovation
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">02.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Created engaging content for ChatGPT, providing travel planning prompts that 
                      naturally led users to discover Triply
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">03.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Built an email capture form integrated with the landing page to collect user 
                      information for beta testing outreach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-[600px] w-full rounded-2xl overflow-y-auto bg-[#FDF6F3] shadow-xl">
                <img
                  src={projectImages.triplyFullScreen}
                  alt="Full Landing Page Design"
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
              <span className="text-7xl font-bold mb-6">5%</span>
              <span className="text-xl text-gray-400">Conversion rate on landing page</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">$0.33</span>
              <span className="text-xl text-gray-400">Average cost per lead</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-7xl font-bold mb-6">150</span>
              <span className="text-xl text-gray-400">Beta users acquired</span>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h3 className="text-3xl font-bold mb-12">Channel Performance</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Social Media</h4>
                    <p className="text-gray-400">Facebook and Instagram campaigns drove 65% of total signups with highest quality leads</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">ChatGPT Marketing</h4>
                    <p className="text-gray-400">Organic strategy through AI prompts generated 35% of signups at zero cost</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-12">Key Outcomes</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Target Exceeded</h4>
                    <p className="text-gray-400">Surpassed initial goal of 100 beta users by 50% within budget constraints</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Quality Engagement</h4>
                    <p className="text-gray-400">80% of beta users remained active throughout the testing phase</p>
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

export default AiTripPlanning; 