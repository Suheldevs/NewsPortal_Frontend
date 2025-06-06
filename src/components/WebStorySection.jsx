import React, { useState, useEffect } from 'react';
import { SquarePlay, ChevronLeft, ChevronRight } from 'lucide-react';

const WebStorySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const stories = [
    {
      id: 1,
      title: "Watch: Sloth bear falls into 40 feet well, rescued",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=300&h=400&fit=crop",
      bgColor: "from-gray-400 to-gray-600"
    },
    {
      id: 2,
      title: "Watch: Bengaluru's new smash burger restaurant",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=400&fit=crop",
      bgColor: "from-orange-400 to-red-500"
    },
    {
      id: 3,
      title: "Watch: How good is MOAL the 24,000-square-foot restobar in Hyderabad?",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&h=400&fit=crop",
      bgColor: "from-green-400 to-teal-500"
    },
    {
      id: 4,
      title: "Watch: Inside Bengaluru's self-serve instant ramen bar",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=400&fit=crop",
      bgColor: "from-blue-400 to-indigo-600"
    },
    {
      id: 5,
      title: "Watch: Kamal Haasan: Myself and Mani Ratnam didn't get into movies to somehow make money",
      image: "https://images.unsplash.com/photo-1489599004593-b61b59dd0db0?w=300&h=400&fit=crop",
      bgColor: "from-purple-400 to-pink-500"
    },
    {
      id: 6,
      title: "Watch: Street food vendors share their success stories",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d74a?w=300&h=400&fit=crop",
      bgColor: "from-yellow-400 to-orange-500"
    },
    {
      id: 7,
      title: "Watch: Traditional craftsmen preserve ancient art forms",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      bgColor: "from-cyan-400 to-blue-500"
    }
  ];

  // Calculate stories per view based on screen size
  const getStoriesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg screens
      if (window.innerWidth >= 768) return 3;  // md screens
      if (window.innerWidth >= 640) return 2;  // sm screens
      return 1; // mobile
    }
    return 4;
  };

  const [storiesPerView, setStoriesPerView] = useState(getStoriesPerView());

  useEffect(() => {
    const handleResize = () => {
      setStoriesPerView(getStoriesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, stories.length - storiesPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev >= maxSlides) return 0;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, maxSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlides));
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">THE</span>
            </div>
            <h2 className="text-3xl font-bold text-red-600">Shorts</h2>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 -ml-4"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button 
            onClick={nextSlide}
            disabled={currentSlide >= maxSlides}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 -mr-4"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Stories Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / storiesPerView + 4 / storiesPerView)}%)`,
                width: `${(stories.length * 100) / storiesPerView}%`
              }}
            >
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className="cursor-pointer group"
                  style={{ width: `${100 / stories.length}%` }}
                  onMouseEnter={() => setIsAutoPlay(false)}
                  onMouseLeave={() => setIsAutoPlay(true)}
                >
                  {/* Story Container */}
                  <div className="relative rounded-xl overflow-hidden h-96 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    {/* Background Image/Gradient */}
                    <div className={`w-full h-full bg-gradient-to-br ${story.bgColor} relative`}>
                      
                      {/* Background Image */}
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover mix-blend-overlay opacity-60"
                      />
                      
                      {/* Play Icon */}
                      <div className="absolute top-4 left-4 group-hover:scale-110 transition-transform duration-200">
                        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2">
                          <SquarePlay className="w-8 h-8 text-white" fill="white" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {Math.floor(Math.random() * 5) + 1}:30
                        </span>
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                        <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-red-300 transition-colors">
                          {story.title}
                        </h3>
                        
                        {/* Engagement Stats */}  
                        <div className="flex items-center gap-4 mt-2 text-white/80 text-xs">
                          <span>{Math.floor(Math.random() * 900) + 100}K views</span>
                          <span>•</span>
                          <span>{Math.floor(Math.random() * 6) + 1} hours ago</span>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxSlides + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-red-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        {/* <div className="flex justify-center mt-4">
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isAutoPlay 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WebStorySection;