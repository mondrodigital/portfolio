import React from 'react';
import { motion } from 'framer-motion';

const SuperPowers = () => {
  const powers = [
    {
      title: 'Handling Ambiguity',
      description: 'I excel at navigating uncertain situations and making decisions with incomplete information. I can break down ambiguous problems into clear action items while remaining flexible as new information emerges.'
    },
    {
      title: 'Full Stack Marketing',
      description: 'Comfortable working across the entire marketing stack, from copywriting to design to analytics. I enjoy creating compelling campaigns while maintaining data-driven strategies.'
    },
    {
      title: 'Tech & AI Adaptability',
      description: 'I quickly master new technologies and stay at the forefront of AI developments. I actively experiment with emerging tools and frameworks, allowing me to rapidly integrate cutting-edge solutions into my workflow.'
    },
    {
      title: 'Technical Translation',
      description: 'I excel at breaking down complex technical concepts into clear, consumer-friendly messaging. I bridge the gap between engineering and marketing teams, helping translate technical capabilities into compelling value propositions.'
    }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-16">
          {/* Left side title */}
          <motion.div 
            className="w-1/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold font-faction sticky top-24">My super powers</h2>
          </motion.div>

          {/* Right side powers grid */}
          <motion.div 
            className="w-2/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-12">
              {powers.map((power, index) => (
                <motion.div 
                  key={power.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="text-xl font-medium mb-4">{power.title}</h3>
                  <p className="text-gray-600">{power.description}</p>
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