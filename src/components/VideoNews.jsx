import React from 'react';
import { Play } from 'lucide-react';
import SectionHeader from './SectionHeader';

const VideosNews = () => {
  const videoItems = [
    {
      id: 1,
      title: "LIVE: Sudhanshu Trivedi hits out Mamata Banerjee over Murshidabad Violence Report",
      date: "21/05/2025",
      thumbnail: "/api/placeholder/400/250",
      type: "LIVE PRESS CONFERENCE"
    },
    {
      id: 2,
      title: "LIVE: Indian Army, Air force & Navy briefing on operation 'sindoor'",
      date: "07/05/2025",
      thumbnail: "/api/placeholder/400/250",
      type: "OPERATION SINDOOR"
    },
    {
      id: 3,
      title: "LIVE: PM Modi Meets with President of Mauritius Dharam Gokhool | India-Mauritius",
      date: "11/03/2025",
      thumbnail: "/api/placeholder/400/250",
      type: "PM MODI MEETS"
    },
    {
      id: 4,
      title: "LIVE: Defence Minister Rajnath Singh addresses Armed Forces Personnel",
      date: "15/04/2025",
      thumbnail: "/api/placeholder/400/250",
      type: "DEFENCE UPDATE"
    },
    {
      id: 5,
      title: "LIVE: External Affairs Ministry Weekly Briefing on International Relations",
      date: "28/04/2025",
      thumbnail: "/api/placeholder/400/250",
      type: "MINISTRY BRIEFING"
    },
    {
      id: 6,
      title: "LIVE: Economic Survey 2025 Press Conference by Finance Ministry",
      date: "10/05/2025",
      thumbnail: "/api/placeholder/400/250",
      type: "ECONOMIC SURVEY"
    }
  ];

  return (
    <div className="bg-white p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
         <SectionHeader 
          title="Video News"
          viewMoreText="View More"
          viewMoreLink="/tech"
          // bgColor="bg-green-500"
          // textColor="text-white"
        />
        
        {/* Section Title */}
        <div className="flex items-center mb-6">
          <div className="w-1 h-6 bg-red-500 mr-3"></div>
          <h3 className="text-lg font-bold text-black">PRESS CONFERENCE & EVENTS</h3>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoItems.map((item) => (
          <div key={item.id} className="cursor-pointer group">
            {/* Video Thumbnail */}
            <div className="relative mb-3 overflow-hidden">
              {/* Thumbnail Background */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-red-500 relative">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                
                {/* Video Type Badge */}
                <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 text-xs font-semibold">
                  {item.type}
                </div>
                
                {/* Live Badge */}
                <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 text-xs font-bold">
                  LIVE
                </div>
              </div>
            </div>
            
            {/* Video Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <div className="text-xs text-gray-500">
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosNews;