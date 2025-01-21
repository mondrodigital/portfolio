import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollingImages = ({ images }) => {
  const scrollContainerRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({});

  // Function to calculate width based on aspect ratio
  const calculateWidth = (naturalWidth, naturalHeight) => {
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio < 1) {
      return 250;
    }
    return Math.floor(400 * aspectRatio);
  };

  // Handle image load to get natural dimensions
  const handleImageLoad = (event, index) => {
    const { naturalWidth, naturalHeight } = event.target;
    setImageDimensions(prev => ({
      ...prev,
      [index]: calculateWidth(naturalWidth, naturalHeight)
    }));
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth * 2) / 3) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
        } else {
          scrollContainer.scrollLeft += 2;
        }
      }, 20);
    };

    // Initial setup - scroll to the first set of images
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

    startScroll();

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startScroll();

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Scrolling container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide py-4" 
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Triple the images for smoother infinite scroll */}
        {[...images, ...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-none h-[400px] bg-gray-100 rounded-lg overflow-hidden"
            style={{ 
              width: imageDimensions[index % images.length] || 400,
              transition: 'width 0.3s ease'
            }}
          >
            <img
              src={image}
              alt={`Photo ${(index % images.length) + 1}`}
              className="w-full h-full object-cover"
              draggable="false"
              onLoad={(e) => handleImageLoad(e, index % images.length)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PhotoGrid = () => {
  const photos = [
    "/Personal Photos/about1.jpeg",
    "/Personal Photos/about2.jpeg",
    "/Personal Photos/about3.jpeg",
    "/Personal Photos/about4.jpeg",
    "/Personal Photos/about5.jpeg",
    "/Personal Photos/about6.jpeg",
    "/Personal Photos/about7.jpeg",
    "/Personal Photos/about8.jpeg",
    "/Personal Photos/about9.jpeg"
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <ScrollingImages images={photos} />
        </motion.div>
      </div>
    </div>
  );
};

export default PhotoGrid;