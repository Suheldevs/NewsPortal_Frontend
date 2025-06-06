import React from 'react';
import { Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import articles from '../data/ArticlesData';
import FormatDate from './FormateDate';
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

      <SectionHeader 
          title="Breacking News"
          viewMoreText="View All"
          viewMoreLink="/breacking"
        />

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.slice(0,8).map((item) => (
          <div key={item.id} className="border border-gray-200 overflow-hidden">
            {/* Image */}
            <div className=" bg-gray-300 relative">
          <img src={item.thumbnail} className='h-44 w-full' alt={item.title} />
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
                {FormatDate(item.publishedAt)}
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