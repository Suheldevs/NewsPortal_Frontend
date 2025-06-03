import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const BusinessNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Amit Shah Expand Loan Facility to PACS: Revolutionary Cooperative Storage Plan",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      title: "81st IATA Annual General Meeting: Revolutionary Changes Transform India's Aviation Sector",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      title: "DRI Busts Major Methamphetamine Smuggling Attempt in Tripura; Rs. 7 Crore Drug Haul Seized",
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      title: "2 June 2025- Markets Close Mixed Amid Volatility: Nifty 50 Dips, Select Stocks Surge",
      image: "/api/placeholder/80/80",
      badge: "INDIAN STOCK MARKET 2 JUNE 2025"
    },
    {
      id: 5,
      title: "7 Shocking Revelations: BuildersAt Accused of Using Indian Coders as 'AI' in Billion-Dollar Scandal",
      image: "/api/placeholder/80/80"
    },
    {
      id: 6,
      title: "7 Ultimate Game-Changing Banking Moves: Canara Bank's Zero-Balance Revolution and How SBI, HDFC, Axis Stack Up",
      image: "/api/placeholder/80/80"
    },
    {
      id: 7,
      title: "Rising US Yields and Weakening Dollar Pose Global Risks, Warns KIE: June 2025",
      image: "/api/placeholder/80/80"
    },
    {
      id: 8,
      title: "Sarbananda Sonowal to Lead India's Delegation at 60th Nor-Shipping Event, Hold Key Bilateral Talks and Promote India Maritime Week 2025",
      image: "/api/placeholder/80/80",
      badge: "UNION MINISTER SARBANANDA SONOWAL INVITES NORWAY & MARITIME OFFICIAL VISIT TO NORWAY & DENMARK FOR INDIA MARITIME WEEK"
    },
    {
      id: 9,
      title: "Indian Army Trials High-Altitude Warfare Technologies Amid Push for Indigenous Defence Capability: May 2025",
      image: "/api/placeholder/80/80"
    },
    {
      id: 10,
      title: "Prime Minister Narendra Modi Unveils Development Projects Worth Rs48,520 Crore in Karakat, Bihar",
      image: "/api/placeholder/80/80"
    },
    {
      id: 11,
      title: "5 Transformative Shifts: Wipro's CTO Leadership Ushers in a New Era of Innovation and Growth",
      image: "/api/placeholder/80/80"
    },
    {
      id: 12,
      title: "West Bengal on the Energy Map: PM Modi Launches Rs1,010 Cr Gas Project in Alipurduar, Ushering in a New Era of Clean and Inclusive...",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <div className="bg-white p-6 max-w-7xl mx-auto">
      {/* Header */}
      {/* <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-black mr-4">Business</h2>
          <div className="h-0.5 bg-red-500 w-20"></div>
        </div>
        <button className="flex items-center text-red-500 text-sm font-medium hover:text-red-600">
          VIEW ALL
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div> */}

       <SectionHeader 
          title="Business"
          viewMoreText="VIEW ALL"
          viewMoreLink="/tech"
          // bgColor="bg-green-500"
          // textColor="text-white"
        />

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded">
            {/* Image */}
            <div className="w-20 h-20 flex-shrink-0 relative">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded"></div>
              {/* {item.badge && (
                <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-1 py-0.5 rounded text-center leading-tight">
                  {item.badge.split(' ').slice(0, 3).join(' ')}
                  <br />
                  {item.badge.split(' ').slice(3).join(' ')}
                </div>
              )} */}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .line-clamp-4 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
      `}</style>
    </div>
  );
};

export default BusinessNews;