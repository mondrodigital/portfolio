import React from 'react';
import { motion } from 'framer-motion';

const Connection = ({ start, end, color = 'currentColor' }) => (
  <motion.line
    x1={start.x}
    y1={start.y}
    x2={end.x}
    y2={end.y}
    stroke={color}
    strokeWidth="1"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ 
      pathLength: [0, 1],
      opacity: [0, 0.6, 0]
    }}
    transition={{
      duration: 1.5,
      ease: "easeInOut"
    }}
  />
);

export default Connection;