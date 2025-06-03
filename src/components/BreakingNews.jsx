import React from 'react';
import { Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';

const BreakingNews = () => {
  const newsItems = [
    {
      id: 1,
      category: "BUSINESS",
      title: "Amit Shah Expand Loan Facility to PACS: Revolutionary Cooperative Storage Plan",
      time: "2 Hours",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      category: "BUSINESS", 
      title: "81st IATA Annual General Meeting: Revolutionary Changes Transform India's Aviation Sector",
      time: "3 Hours",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      category: "CRIME",
      title: "Shocking Delhi Police Warehouse Robbery: Inside Job Exposes Security Flaws",
      time: "3 Hours", 
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      category: "SPORTS",
      title: "Gukesh vs Magnus: Shocking Comeback Victory In Norway Chess 2025",
      time: "3 Hours",
      image: "/api/placeholder/300/200"
    },
    {
      id: 1,
      category: "BUSINESS",
      title: "Amit Shah Expand Loan Facility to PACS: Revolutionary Cooperative Storage Plan",
      time: "2 Hours",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      category: "BUSINESS", 
      title: "81st IATA Annual General Meeting: Revolutionary Changes Transform India's Aviation Sector",
      time: "3 Hours",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      category: "CRIME",
      title: "Shocking Delhi Police Warehouse Robbery: Inside Job Exposes Security Flaws",
      time: "3 Hours", 
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      category: "SPORTS",
      title: "Gukesh vs Magnus: Shocking Comeback Victory In Norway Chess 2025",
      time: "3 Hours",
      image: "/api/placeholder/300/200"
    }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'BUSINESS': return 'text-orange-600';
      case 'CRIME': return 'text-red-600';
      case 'SPORTS': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white py-12 container px-6 mx-auto">
      {/* Header */}
      {/* <div className="flex items-center mb-6">
        <div className="bg-red-600 text-white px-4 py-2 font-bold text-sm">
          BREAKING NEWS
        </div>
        <div className="h-0.5 bg-red-600 flex-1 ml-2"></div>
      </div> */}

      <SectionHeader 
          title="Breacking News"
          viewMoreText="View More"
          viewMoreLink="/tech"
          // bgColor="bg-green-500"
          // textColor="text-white"
        />

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsItems.map((item) => (
          <div key={item.id} className="border border-gray-200 overflow-hidden">
            {/* Image */}
            <div className="h-40 bg-gray-300 relative">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
            </div>
            
            {/* Content */}
            <div className="p-3">
              {/* Category */}
              <div className={`text-xs font-semibold mb-2 ${getCategoryColor(item.category)}`}>
                {item.category}
              </div>
              
              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-3 line-clamp-3">
                {item.title}
              </h3>
              
              {/* Time */}
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </div>
  );
};

export default BreakingNews;