import React from 'react';

const TopFooter = () => {
  const topCategories = [
    "Explained News", "Political Pulse", "Latest Opinion", "Mumbai News",
    "Delhi News", "Pune News", "Bangalore News", "Bollywood News",
    "Health News", "India News", "Sports News", "Lifestyle News",
    "Latest News", "Cricket", "Tech Reviews", "Gadgets",
    "Mobile & Tabs", "Food & Wine", "Elections", "Fitness"
  ];

  const trendingNews = [
    "Stock Analysis", "Live Cricket Score", "Screen Videos", "International Videos",
    "Indian Express Live TV", "IPL Points Table 2025", "IPL Orange Cap 2025", "IPL Purple Cap 2025",
    "IPL 2025", "Horoscope Today", "SBI Clerk Mains Result 2025", "JEE Advanced Result 2025",
    "NEET 2025 Answer Key"
  ];

  const topCities = [
    "Mumbai", "Delhi", "Bangalore", "Pune", "Chennai", "Kolkata",
    "Hyderabad", "Ahmedabad", "Lucknow", "Jaipur", "Surat", "Kanpur",
    "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad",
    "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik"
  ];

  const topStates = [
    "Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal", "Madhya Pradesh", "Tamil Nadu",
    "Rajasthan", "Karnataka", "Gujarat", "Andhra Pradesh", "Odisha", "Telangana",
    "Kerala", "Jharkhand", "Assam", "Punjab", "Chhattisgarh", "Haryana",
    "Jammu and Kashmir", "Uttarakhand", "Himachal Pradesh", "Tripura", "Meghalaya", "Manipur"
  ];

  return (
    <div className="bg-neutral-900 text-white py-12  px-6">
      <div className="container px-4 mx-auto">
        
        {/* TOP CATEGORIES Section */}
        {/* <div className="mb-12">
          <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700">
            TOP CATEGORIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            {topCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {category}
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* TRENDING NEWS Section */}
        {/* <div className="mb-12">
          <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700">
            TRENDING NEWS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            {trendingNews.map((news, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {news}
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* TOP CITIES Section */}
        {/* <div className="mb-12">
          <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700">
            TOP CITIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            {topCities.map((city, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {city}
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* TOP STATES Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b border-gray-700">
            TOP STATES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
            {topStates.map((state, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {state}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopFooter;