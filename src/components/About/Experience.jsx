import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-semibold mb-4"
          >
            Day job
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 mb-2"
          >
            Currently, I am a <span className="font-medium">Senior Product Designer at Figma</span>. Before that, I co-founded Octoshop, designed at Meta, Xbox, and Wish, and freelanced for startups, VC firms, and agencies. I hold an HBSc in Neuroscience, Computer Science, and Statistics, along with an MI from the University of Toronto.
          </motion.p>
        </div>
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-semibold mb-4"
          >
            Out of office
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700"
          >
            When I'm not building things, I love traveling, playing video games, baking, cooking, painting, and capturing moments through photography. I'm a natural puzzler with a passion for trivia and crosswords—maybe even to a concerning degree! If I've piqued your interest, feel free to reach out!
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Experience;