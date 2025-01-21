import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-16">
          {/* Left side vertical image */}
          <motion.div 
            className="w-1/3"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="/ProfilePic.png"
                alt="Mitch Mondro"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div 
            className="w-2/3 pb-16 border-b border-gray-200"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-12">
              {/* Name and intro */}
              <div>
                <h1 className="text-6xl font-bold mb-4">
                  Hello,<br />
                  I'm Mitch
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  I'm a marketer with an insatiable curiosity for the future of AI. By staying deeply connected to the latest breakthroughs in artificial intelligence, I craft innovative marketing strategies that push boundaries. My passion lies in discovering creative ways to harness AI and automation, transforming how brands connect with their audiences and achieve remarkable results.
                </p>
              </div>

              {/* Day job and Out of office sections */}
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-medium mb-4">Day job</h3>
                  <p className="text-gray-600">
                    Currently, I am a <span className="font-medium">Marketing Lead at Vellum Mortgage</span>, where I manage and oversee all functions of the marketing department. Before that, I worked as a Marketing Specialist at Coghlin Companies, a high-tech manufacturing company. I hold a BA in Management and an MBA with a concentration in Business Analytics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Out of office</h3>
                  <p className="text-gray-600">
                    When I'm not working, I love golfing, making music, and traveling to new places. I played baseball in college and continue to play in adult leagues. I believe in continuous learning and often take online courses to expand my knowledge in areas like AI and emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;