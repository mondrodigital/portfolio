import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="pt-16 sm:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left side vertical image */}
          <motion.div 
            className="w-full lg:w-1/3 mb-8 lg:mb-0"
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
            className="w-full lg:w-2/3 pb-8 sm:pb-16 border-b border-gray-200"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-8 sm:space-y-12">
              {/* Name and intro */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  Hello,<br />
                  I'm Mitch
                </h1>
                <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  I build marketing systems for companies that still rely on traditional sales. My focus is modernizing their processes without breaking what already works. I've found that most companies know they need to digitize, but struggle with the how. That's the gap I fill.
                </p>
              </div>

              {/* Day job and Out of office sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Current Work</h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    At <span className="font-medium">Vellum Mortgage</span>, I'm rebuilding how loan officers generate business. Key project: Automated follow-up system that helps officers maintain relationships with past clients. Early results show 30% more repeat business compared to manual outreach.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Side Work</h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Writing about practical applications of AI in traditional businesses. Not the theory—the actual implementation details that companies need. Also building small tools that help marketers automate repetitive tasks through AI.</p>
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