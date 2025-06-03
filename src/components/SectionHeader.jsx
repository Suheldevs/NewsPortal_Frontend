import React from 'react';

const SectionHeader = ({ 
  title = "TOP NEWS", 
  viewMoreText = "VIEW ALL",
  viewMoreLink = "#",
  bgColor = "bg-yellow-400",
  textColor = "text-black"
}) => {
  return (
    <div className="flex items-center justify-between mb-6 bg-gray-100 px-4 py-2">
      {/* Left Side - Title with Speech Bubble */}
      <div className="relative">
        <div className={`${bgColor} ${textColor} px-4 py-2 font-bold text-sm uppercase tracking-wide relative`}>
          {title}
          {/* Bottom arrow/triangle pointer */}
          <div className="absolute left-4 bottom-0 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-yellow-400 translate-y-full"></div>
        </div>
      </div>

      {/* Right Side - View More Link */}
      <a 
        href={viewMoreLink}
        className="text-gray-700 text-xs font-medium uppercase tracking-wider hover:text-gray-900 transition-colors duration-200"
      >
        {viewMoreText}
      </a>
    </div>
  );
};

// Example usage component
const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Top News Section */}
      <div>
        <SectionHeader 
          title="TOP NEWS"
          viewMoreText="VIEW ALL"
          viewMoreLink="/news"
        />
        <div className="bg-gray-100 p-6 rounded">
          <p className="text-gray-600">News content goes here...</p>
        </div>
      </div>

      {/* Sports Section */}
      <div>
        <SectionHeader 
          title="SPORTS"
          viewMoreText="VIEW MORE"
          viewMoreLink="/sports"
          bgColor="bg-blue-500"
          textColor="text-white"
        />
        <div className="bg-gray-100 p-6 rounded">
          <p className="text-gray-600">Sports content goes here...</p>
        </div>
      </div>

      {/* Entertainment Section */}
      <div>
        <SectionHeader 
          title="ENTERTAINMENT"
          viewMoreText="SEE ALL"
          viewMoreLink="/entertainment"
          bgColor="bg-purple-500"
          textColor="text-white"
          buttonBgColor="bg-red-600"
        />
        <div className="bg-gray-100 p-6 rounded">
          <p className="text-gray-600">Entertainment content goes here...</p>
        </div>
      </div>

      {/* Technology Section */}
      <div>
        <SectionHeader 
          title="TECHNOLOGY"
          viewMoreText="EXPLORE"
          viewMoreLink="/tech"
          bgColor="bg-green-500"
          textColor="text-white"
        />
        <div className="bg-gray-100 p-6 rounded">
          <p className="text-gray-600">Technology content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;