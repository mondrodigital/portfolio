import React from 'react';

const ProjectDetail = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-8">Video Platform Redesign</h1>
          <p className="text-gray-600 text-xl leading-relaxed">
            2023 | A comprehensive redesign of a video sharing platform's interface to improve user engagement and content discovery
          </p>
        </div>
        <div className="mt-24">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
              alt="Video Platform Interface"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Context Section (Situation) */}
      <div className="bg-gray-900 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-32">
            <div>
              <h2 className="text-5xl font-bold mb-24">Project Context</h2>
              <div className="space-y-20">
                <div>
                  <h3 className="text-2xl font-medium mb-6">Initial Landscape</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    The platform was experiencing a 40% drop in user retention and struggling with content discovery. 
                    Users found the interface cluttered and navigation confusing, leading to decreased engagement.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-6">Key Metrics</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    • Average session duration: 4 minutes<br />
                    • Content discovery rate: 15%<br />
                    • User retention after 30 days: 20%
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-6">Project Scope</h3>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    3-month redesign project focusing on the core user experience, content discovery system, 
                    and social engagement features.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
                alt="Analytics Dashboard"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section (Task) */}
      <div className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-32">
            <div>
              <h2 className="text-5xl font-bold mb-20">The Challenge</h2>
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">01.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Design an intuitive navigation system that reduces the number of clicks to discover content
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">02.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Create a personalized content recommendation engine that improves discovery
                    </p>
                  </div>
                  <div className="flex items-start gap-6">
                    <span className="text-2xl font-medium">03.</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Implement social features that encourage user engagement and content sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3"
                alt="User Journey Map"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section (Action) */}
      <div className="py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-32">Design Process</h2>
          <div className="space-y-40">
            <div className="grid grid-cols-2 gap-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3"
                  alt="User Research Sessions"
                  className="w-full rounded-2xl mb-12"
                />
                <h3 className="text-3xl font-bold mb-6">User Research</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Conducted 20+ user interviews, created journey maps, and analyzed user behavior patterns
                  to identify pain points and opportunities.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
                  alt="Affinity Mapping Session"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-20">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3"
                  alt="Wireframe Iterations"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3"
                  alt="Interactive Prototype"
                  className="w-full rounded-2xl mb-12"
                />
                <h3 className="text-3xl font-bold mb-6">Prototyping & Testing</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Created low and high-fidelity prototypes, conducted 3 rounds of usability testing
                  with 15 participants per round.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3"
                  alt="Final Design Implementation"
                  className="w-full rounded-2xl mb-12"
                />
                <h3 className="text-3xl font-bold mb-6">Implementation</h3>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Worked closely with development team to ensure design integrity, created detailed
                  documentation and component library.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3"
                  alt="Component Library"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section (Result) */}
      <div className="bg-gray-900 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-24">Impact & Results</h2>
          <div className="grid grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-800 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Key Metrics Improvement</h3>
              <ul className="space-y-4 text-xl text-gray-300">
                <li>• User retention increased by 150%</li>
                <li>• Average session duration up by 200%</li>
                <li>• Content discovery rate improved by 180%</li>
                <li>• User engagement increased by 230%</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">User Feedback</h3>
              <ul className="space-y-4 text-xl text-gray-300">
                <li>• "Much easier to find relevant content"</li>
                <li>• "Navigation feels natural and intuitive"</li>
                <li>• "Love the new social features"</li>
                <li>• "Spend more time watching and sharing"</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
              alt="Results Dashboard"
              className="w-full rounded-2xl"
            />
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3"
              alt="User Feedback Summary"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 