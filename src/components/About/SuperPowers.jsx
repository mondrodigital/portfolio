import React from 'react';
import { motion } from 'framer-motion';

const SuperPowers = () => {
  const powers = [
    {
      title: 'Process Design',
      description: "I identify the 20% of a company's marketing process that generates 80% of results, then automate it. At Vellum, found that consistent client follow-up was key but rarely done. Built a system that automatically identifies opportunities for loan officers and suggests relevant talking points. Now used by 15 officers daily."
    },
    {
      title: 'Sales Enablement',
      description: "Most marketing teams create content their sales team never uses. I fix this by building systems that deliver the right content at the right time. Example: At Coghlin, created a manufacturing capabilities database that sales reps actually reference in customer calls. Usage tracked at 80% of sales team weekly."
    },
    {
      title: 'Digital Migration',
      description: "Companies often fail at digital transformation because they try to change everything at once. I take the opposite approach: identify one critical workflow, digitize it properly, prove the ROI, then expand. At Coghlin, started with customer documentation. Once team saw 50% time savings, they eagerly adopted other digital tools."
    },
    {
      title: 'AI Integration',
      description: "I implement AI in ways that augment rather than replace human work. Focus on tasks that machines do better: data analysis, pattern recognition, and repetitive operations. Recent example: Built a system that helps loan officers identify which past clients are likely to need refinancing, increasing conversion rates on follow-up calls."
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left side title */}
          <motion.div 
            className="w-full lg:w-1/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-faction sticky top-24">My super powers</h2>
          </motion.div>

          {/* Right side powers grid */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {powers.map((power, index) => (
                <motion.div 
                  key={power.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">{power.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg">{power.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SuperPowers;