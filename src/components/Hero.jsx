import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const phrases = [
    "I've been building websites since 2016",
    "I'm currently learning Portuguese",
    "I create AI apps for fun",
    "I've traveled to 12 countries",
    "I love to golf"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    // Initial delay before starting rotation
    const startDelay = setTimeout(() => {
      // Start the rotation
      const interval = setInterval(() => {
        setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
      }, 5000); // Change phrase every 5 seconds
      
      // Cleanup interval when component unmounts
      return () => clearInterval(interval);
    }, 2000); // Wait 2 seconds before starting rotation

    // Cleanup timeout when component unmounts
    return () => clearTimeout(startDelay);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="pt-16 bg-[#f7f7f7] relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:h-[300px] relative">
          <div className="flex-1 mb-12 lg:mb-0">
            <div className="flex-grow">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-faction mb-4 text-black"
              >
                Hello, I'm Mitch
              </motion.div>
              <div className="h-[120px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h2 
                    key={currentPhraseIndex}
                    initial={{ 
                      rotateX: 90,
                      y: 60,
                      opacity: 0
                    }}
                    animate={{ 
                      rotateX: 0,
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        damping: 15,
                        stiffness: 100,
                        duration: 1.2,
                        opacity: { duration: 0.4 }
                      }
                    }}
                    exit={{ 
                      rotateX: -90,
                      y: -60,
                      opacity: 0,
                      transition: {
                        duration: 0.4
                      }
                    }}
                    className="text-2xl sm:text-4xl lg:text-6xl text-gray-500 font-light absolute transform-gpu"
                    style={{ transformOrigin: "50% 50%" }}
                  >
                    {phrases[currentPhraseIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.5,
                ease: "easeOut"
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16"
            >
              <div>
                <h3 className="text-xl font-medium mb-2">Currently</h3>
                <p className="text-gray-600">Marketing @ Vellum Mortgage</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Previously at</h3>
                <p className="text-gray-600">Coghlin Companies and Dassault Systemès</p>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block w-px bg-gray-200 mx-8 h-full"></div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
            className="w-full lg:w-96 flex flex-col justify-end"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="flex items-center gap-4 mb-4"
            >
              <img 
                src="/ProfilePic.png"
                alt="Mitch Mondro"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  delay: 0.5,
                  duration: 0.8
                }}
                className="text-xl sm:text-2xl font-medium"
              >
                Nice to meet you
              </motion.h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.7,
                duration: 0.8
              }}
              className="text-gray-600 text-base sm:text-lg mb-4"
            >
              I'm a full stack marketer passionate about combining marketing, human behavior, and technology to create delightful digital experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.9,
                duration: 0.8
              }}
              className="flex space-x-4"
            >
              <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/mitchellmondro/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-black transition-colors duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;