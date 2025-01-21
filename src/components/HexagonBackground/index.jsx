import React, { useState, useEffect } from 'react';
import Hexagon from './Hexagon';
import Connection from './Connection';

const HexagonBackground = () => {
  const [points, setPoints] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const generateHexagonPoints = () => {
      const spacing = 60; // Reduced spacing
      const width = window.innerWidth;
      const height = 200; // Reduced height
      const points = [];

      for (let y = 0; y < height; y += spacing) {
        const rowOffset = (Math.floor(y / spacing) % 2) * (spacing / 2);
        for (let x = -spacing; x < width + spacing; x += spacing) {
          if (Math.random() < 0.3) { // Reduced point density
            points.push({
              x: x + rowOffset,
              y: y + (Math.random() * 10 - 5), // Reduced random offset
              id: `${x}-${y}`
            });
          }
        }
      }
      return points;
    };

    const points = generateHexagonPoints();
    setPoints(points);

    const generateConnections = () => {
      const maxDistance = 80; // Reduced connection distance
      const connections = [];

      points.forEach((point, i) => {
        points.slice(i + 1).forEach(otherPoint => {
          const distance = Math.sqrt(
            Math.pow(point.x - otherPoint.x, 2) + 
            Math.pow(point.y - otherPoint.y, 2)
          );

          if (distance < maxDistance && Math.random() < 0.3) { // Reduced connection probability
            connections.push({
              start: point,
              end: otherPoint,
              id: `${point.id}-${otherPoint.id}`
            });
          }
        });
      });

      return connections;
    };

    const intervalId = setInterval(() => {
      setConnections(generateConnections());
    }, 2000); // Slightly slower interval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[200px] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7f7f7] to-[#f7f7f7]" />
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(147, 197, 253)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {connections.map(connection => (
          <Connection
            key={connection.id}
            start={connection.start}
            end={connection.end}
            color="url(#connection-gradient)"
          />
        ))}
        {points.map(point => (
          <Hexagon
            key={point.id}
            x={point.x}
            y={point.y}
            size={2} // Smaller dots
            color="rgb(147, 197, 253)" // Light blue color
          />
        ))}
      </svg>
    </div>
  );
};

export default HexagonBackground;