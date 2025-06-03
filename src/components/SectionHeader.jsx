import { ArrowRight } from 'lucide-react';
import React from 'react';

const SectionHeader = ({ 
  title = "TOP NEWS", 
  viewMoreText = "VIEW ALL",
  viewMoreLink = "#",
  bgColor = "bg-red-600",
  textColor = "text-white"
}) => {
  return (
    <div className="relative flex items-center justify-between mb-6 py-2">
      
      {/* Left Side - Title with Triangle */}
      <div className="relative z-10">
        <div className={`${bgColor} ${textColor} px-4 py-2 font-bold text-sm uppercase tracking-wide relative`}>
          {title}
          {/* Triangle pointer */}
          <div className="absolute left-4 bottom-0 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] 
            border-l-transparent border-r-transparent border-t-red-600 translate-y-full z-0" />
        </div>
      </div>

      {/* Right Side - View More Link */}
      <a 
        href={viewMoreLink}
        className="text-gray-700 text-xs font-medium uppercase tracking-wider hover:text-gray-900 transition-colors duration-200 z-10"
      >
        {viewMoreText} <ArrowRight className="w-4 inline-block h-4" />
      </a>
      
      {/* Full-width red line under button and above triangle */}
      <div className="absolute left-0 right-0 bottom-[6px] h-0.5 bg-red-600 z-10" />

    </div>
  );
};

export default SectionHeader;
