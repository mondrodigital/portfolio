import React from 'react';
import { motion } from 'framer-motion';

const Hexagon = ({ x, y, size = 2, color = 'currentColor' }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={size}
    fill={color}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.6, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: Math.random() * 4 + 2
    }}
  />
);

export default Hexagon;