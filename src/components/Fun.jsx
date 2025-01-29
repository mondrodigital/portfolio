import React, { useState, useEffect, useRef } from 'react';

const countryEmojis = [
  { flag: '🇺🇸', country: 'United States' },
  { flag: '🇨🇦', country: 'Canada' },
  { flag: '🇮🇹', country: 'Italy' },
  { flag: '🇬🇷', country: 'Greece' },
  { flag: '🇲🇹', country: 'Malta' },
  { flag: '🇫🇷', country: 'France' },
  { flag: '🇬🇧', country: 'United Kingdom' },
  { flag: '🇩🇪', country: 'Germany' },
  { flag: '🇳🇱', country: 'Netherlands' },
  { flag: '🇧🇷', country: 'Brazil' },
  { flag: '🇲🇽', country: 'Mexico' },
  { flag: '🇧🇸', country: 'Bahamas' },
  { flag: '🇧🇿', country: 'Belize' }
];

const baseballTeams = [
  { 
    name: 'Red Sox', 
    stadium: 'Fenway Park',
    logo: 'https://www.mlbstatic.com/team-logos/111.svg'
  },
  { 
    name: 'Yankees', 
    stadium: 'Yankee Stadium',
    logo: 'https://www.mlbstatic.com/team-logos/147.svg'
  },
  { 
    name: 'Nationals', 
    stadium: 'Nationals Park',
    logo: 'https://www.mlbstatic.com/team-logos/120.svg'
  },
  { 
    name: 'Marlins', 
    stadium: 'LoanDepot Park',
    logo: 'https://www.mlbstatic.com/team-logos/146.svg'
  },
  { 
    name: 'Rangers', 
    stadium: 'Globe Life Field',
    logo: 'https://www.mlbstatic.com/team-logos/140.svg'
  },
  { 
    name: 'Astros', 
    stadium: 'Minute Maid Park',
    logo: 'https://www.mlbstatic.com/team-logos/117.svg'
  },
  { 
    name: 'Giants', 
    stadium: 'Oracle Park',
    logo: 'https://www.mlbstatic.com/team-logos/137.svg'
  },
  { 
    name: 'Padres', 
    stadium: 'Petco Park',
    logo: 'https://www.mlbstatic.com/team-logos/135.svg'
  },
  { 
    name: 'Rockies', 
    stadium: 'Coors Field',
    logo: 'https://www.mlbstatic.com/team-logos/115.svg'
  }
];

const baseballPhotos = [
  '/Personal Photos/baseball1.jpeg',
  '/Personal Photos/baseball2.jpeg',
  '/Personal Photos/baseball3.jpeg',
  '/Personal Photos/baseball4.jpeg',
  '/Personal Photos/baseball5.jpeg',
  '/Personal Photos/baseball6.jpeg',
  '/Personal Photos/baseball7.jpeg',
  '/Personal Photos/baseball8.jpeg'
];

const travelPhotos = [
  '/Personal Photos/travel1.jpeg',
  '/Personal Photos/travel2.jpeg',
  '/Personal Photos/travel3.jpeg'
];

const musicPhotos = [
  // placeholder until you provide music photos
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063'
].map(url => `${url}?auto=format&fit=crop&w=800&h=600&q=80`);

const filmPhotos = [
  // placeholder until you provide film photos
  'https://images.unsplash.com/photo-1485846234645-a62644f84728',
  'https://images.unsplash.com/photo-1492551557933-34265f7af79e',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26'
].map(url => `${url}?auto=format&fit=crop&w=800&h=600&q=80`);

const YouTubeStats = () => {
  const [stats, setStats] = useState({
    subscribers: '...',
    views: '...',
    error: null
  });

  useEffect(() => {
    const fetchYouTubeStats = async () => {
      console.log('Starting YouTube stats fetch...');
      
      // Check if API key and channel ID are available
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
      
      console.log('API Key exists:', !!apiKey);
      console.log('Channel ID:', channelId);
      
      if (!apiKey || !channelId) {
        console.error('Missing configuration');
        setStats({
          subscribers: 'Config Error',
          views: 'Config Error',
          error: 'Missing YouTube configuration'
        });
        return;
      }

      try {
        const url = `https://youtube.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${apiKey}`;
        
        console.log('Fetching from URL:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error Response:', errorText);
          throw new Error(`API Error: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log('YouTube API Response:', data);
        
        if (data.items && data.items[0]) {
          const statistics = data.items[0].statistics;
          console.log('Raw statistics:', statistics);
          
          // Format numbers with commas every 3 digits
          const formatNumber = (num) => {
            return new Intl.NumberFormat('en-US', {
              notation: 'standard',
              maximumFractionDigits: 0
            }).format(num);
          };

          const formattedStats = {
            subscribers: formatNumber(statistics.subscriberCount),
            views: formatNumber(statistics.viewCount),
            error: null
          };
          
          console.log('Formatted stats:', formattedStats);
          setStats(formattedStats);
        } else {
          console.error('No items found in response:', data);
          throw new Error('No channel data found');
        }
      } catch (error) {
        console.error('Detailed error:', error);
        console.error('Error message:', error.message);
        setStats({
          subscribers: 'Error',
          views: 'Error',
          error: error.message
        });
      }
    };

    fetchYouTubeStats();
    const interval = setInterval(fetchYouTubeStats, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <img 
          src="https://cdn.midjourney.com/dc051d0a-bcb3-425d-8058-ab6bffa6883d/0_0.png"
          alt="Mondro Music Logo" 
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-bold text-lg">Mondro Music</h3>
          <a 
            href="https://www.youtube.com/@MondroMusic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            @MondroMusic
          </a>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="text-center">
          <div className="text-2xl font-bold">{stats.subscribers}</div>
          <div className="text-sm text-gray-500">Subscribers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{stats.views}</div>
          <div className="text-sm text-gray-500">Total Views</div>
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <a
          href="https://www.youtube.com/@MondroMusic?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Subscribe
        </a>
        <a
          href="https://www.youtube.com/@MondroMusic"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          Visit Channel
        </a>
      </div>
      {stats.error && (
        <div className="text-red-500 text-sm mt-2">
          {stats.error}
        </div>
      )}
    </div>
  );
};

const ScrollingImages = ({ images }) => {
  const scrollContainerRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({});

  // Function to calculate width based on aspect ratio
  const calculateWidth = (naturalWidth, naturalHeight) => {
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio < 1) {
      return 200;
    }
    return Math.floor(300 * aspectRatio);
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
          scrollContainer.scrollLeft += 1;
        }
      }, 30);
    };

    // Initial setup - scroll to the first set of images
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

    startScroll();

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startScroll();
    const handleTouchStart = () => clearInterval(scrollInterval);
    const handleTouchEnd = () => startScroll();

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-4 sm:mt-8">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Scrolling container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-4" 
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
            className="flex-none h-[250px] sm:h-[400px] bg-gray-100 rounded-lg overflow-hidden"
            style={{ 
              width: imageDimensions[index % images.length] || 300,
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

const Fun = () => {
  const [activeTab, setActiveTab] = useState('Sports');

  const renderContent = () => {
    if (activeTab === 'Travel') {
      return (
        <>
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                I'm passionate about exploring both the United States and international destinations whenever possible. I love experiencing different cultures, trying local cuisines, and learning about the unique traditions each place has to offer.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex flex-wrap gap-4 pt-1">
                {countryEmojis.map((emoji, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <span
                      className="text-xl sm:text-2xl select-none bg-gray-50 rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      {emoji.flag}
                    </span>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-3 py-1 rounded shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      {emoji.country}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ScrollingImages images={travelPhotos} />
        </>
      );
    } else if (activeTab === 'Sports') {
      return (
        <>
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10">
            <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Baseball has been a huge part of my life. I've had the privilege of visiting some of America's most iconic ballparks, each with its own unique character and atmosphere.
              </p>
            </div>

            <div className="w-full lg:w-3/5">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1">
                {baseballTeams.map((team, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center min-h-[100px] gap-2"
                  >
                    <img 
                      src={team.logo} 
                      alt={`${team.name} logo`} 
                      className="h-6 sm:h-8 w-6 sm:w-8 object-contain mb-1"
                    />
                    <span className="font-medium text-xs sm:text-sm text-gray-900 text-center">{team.name}</span>
                    <span className="text-xs text-gray-500 text-center whitespace-nowrap">{team.stadium}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ScrollingImages images={baseballPhotos} />
        </>
      );
    } else if (activeTab === 'Music') {
      return (
        <>
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10">
            <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Music has always been a creative outlet for me. Through my YouTube channel, I share my passion for music by creating unique covers and original compositions, blending different genres and styles.
              </p>
            </div>

            <div className="w-full lg:w-3/5">
              <YouTubeStats />
            </div>
          </div>
          <ScrollingImages images={musicPhotos} />
        </>
      );
    } else if (activeTab === 'Film') {
      return (
        <>
          <div className="space-y-8">
            <div className="w-full">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                I have a deep appreciation for filmmaking and visual storytelling. Beyond creating music, I enjoy capturing moments and telling stories through video. Here are some of my recent film projects.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-6">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/5qhwjWqsKWY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Launch</h3>
                    <p className="text-gray-500 mt-1">Director & Editor</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-base sm:text-lg">
                      Created for the NASA CineSpace Competition in 2021, this film explores the intersection of space exploration and human potential. Using NASA's archival footage combined with original cinematography, the piece aims to inspire viewers about the accessibility of space exploration in our modern era.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ScrollingImages images={filmPhotos} />
        </>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-24">
            {/* Left column with Fun title and description */}
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-8 lg:mb-12 font-faction">Fun</h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Curiosity and creativity have always been central to my life. When I'm not tinkering at work, I love exploring, learning, trying new things and diving into new hobbies. Here are just a few of the things I've made.
              </p>
            </div>

            {/* Right column with sections */}
            <div className="w-full lg:w-2/3">
              {/* Navigation */}
              <div className="flex flex-wrap gap-6 sm:gap-12 mb-12 lg:mb-16 border-b overflow-x-auto pb-4 scrollbar-hide">
                <button 
                  className={`pb-4 whitespace-nowrap ${activeTab === 'Travel' ? 'text-black font-medium border-b-2 border-black' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('Travel')}
                >
                  Travel
                </button>
                <button 
                  className={`pb-4 whitespace-nowrap ${activeTab === 'Sports' ? 'text-black font-medium border-b-2 border-black' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('Sports')}
                >
                  Sports
                </button>
                <button 
                  className={`pb-4 whitespace-nowrap ${activeTab === 'Music' ? 'text-black font-medium border-b-2 border-black' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('Music')}
                >
                  Music
                </button>
                <button 
                  className={`pb-4 whitespace-nowrap ${activeTab === 'Film' ? 'text-black font-medium border-b-2 border-black' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('Film')}
                >
                  Film
                </button>
              </div>

              {/* Content container */}
              <div className="space-y-16">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fun;