import React from 'react';
import { SquarePlay } from 'lucide-react';

const WebStorySection = () => {
  const stories = [
    {
      id: 1,
      title: "Watch: Sloth bear falls into 40 feet well, rescued",
      image: "/api/placeholder/300/400",
      bgColor: "from-gray-400 to-gray-600"
    },
    {
      id: 2,
      title: "Watch: Bengaluru's new smash burger restaurant",
      image: "/api/placeholder/300/400",
      bgColor: "from-orange-400 to-red-500"
    },
    {
      id: 3,
      title: "Watch: How good is MOAL the 24,000-square-foot restobar in Hyderabad?",
      image: "/api/placeholder/300/400",
      bgColor: "from-green-400 to-teal-500"
    },
    {
      id: 4,
      title: "Watch: Inside Bengaluru's self-serve instant ramen bar",
      image: "/api/placeholder/300/400",
      bgColor: "from-blue-400 to-indigo-600"
    },
    {
      id: 5,
      title: "Watch: Kamal Haasan: Myself and Mani Ratnam didn't get into movies to somehow make money",
      image: "/api/placeholder/300/400",
      bgColor: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">TH</span>
            </div>
            <h2 className="text-3xl font-bold text-red-600">Shorts</h2>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="flex-shrink-0 w-72 cursor-pointer group"
            >
              {/* Story Container */}
              <div className="relative rounded-lg overflow-hidden h-96 shadow-lg group-hover:shadow-xl transition-shadow">
                {/* Background Image/Gradient */}
                <div className={`w-full h-full bg-gradient-to-br ${story.bgColor} relative`}>
                  
                  {/* Play Icon */}
                  <div className="absolute top-4 left-4">
                    <SquarePlay className="w-8 h-8 text-white opacity-80" fill="white" />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {story.title}
                    </h3>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {stories.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-red-600' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStorySection;