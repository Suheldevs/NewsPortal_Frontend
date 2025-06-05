import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function WebStoriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 8;

  // Sample stories data
  const allStories = [
    {
      id: 1,
      category: "Entertainment",
      title: "Radika Apte's Stunning New Film Gets Standing Ovation",
      image: "https://images.unsplash.com/photo-1594736797933-d0200b6d2b95?w=400&h=300&fit=crop",
      date: "June 04, 2025",
      categoryColor: "text-pink-500"
    },
    {
      id: 2,
      category: "Entertainment", 
      title: "Sitaare Zameen Par Gets Netflix's Biggest Offer",
      image: "https://images.unsplash.com/photo-1489599849486-9e76a3f44b3d?w=400&h=300&fit=crop",
      date: "June 04, 2025",
      categoryColor: "text-pink-500"
    },
    {
      id: 3,
      category: "Sports",
      title: "RCB's Victory Celebration After Historic Win",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop",
      date: "June 04, 2025", 
      categoryColor: "text-purple-500"
    },
    {
      id: 4,
      category: "Technology",
      title: "Tata Harrier EV: Sleek Design, Powerful Battery and 500km Range",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
      date: "June 03, 2025",
      categoryColor: "text-green-500"
    },
    {
      id: 5,
      category: "Politics",
      title: "Major Policy Announcement Expected in Parliament Session",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
      date: "June 04, 2025",
      categoryColor: "text-blue-500"
    },
    {
      id: 6,
      category: "Business",
      title: "Stock Market Reaches All-Time High Amid Economic Reforms",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      date: "June 04, 2025",
      categoryColor: "text-orange-500"
    },
    {
      id: 7,
      category: "Sports",
      title: "India Wins International Chess Championship Trophy",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=300&fit=crop",
      date: "June 03, 2025",
      categoryColor: "text-purple-500"
    },
    {
      id: 8,
      category: "Science",
      title: "Space Mission Launch Scheduled for Tomorrow Morning",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
      date: "June 03, 2025",
      categoryColor: "text-indigo-500"
    },
    {
      id: 9,
      category: "Entertainment",
      title: "Bollywood Star's Surprise Wedding Announcement Shocks Fans",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      date: "June 02, 2025",
      categoryColor: "text-pink-500"
    },
    {
      id: 10,
      category: "Technology",
      title: "Revolutionary AI Technology Unveiled by Indian Startup",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      date: "June 02, 2025",
      categoryColor: "text-green-500"
    },
    {
      id: 11,
      category: "Sports",
      title: "Olympic Preparations: India's Gold Medal Hopes Rise",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
      date: "June 01, 2025",
      categoryColor: "text-purple-500"
    },
    {
      id: 12,
      category: "Health",
      title: "New Medical Breakthrough: Cancer Treatment Success Rate Increases",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      date: "June 01, 2025",
      categoryColor: "text-red-500"
    }
  ];

  const totalPages = Math.ceil(allStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const currentStories = allStories.slice(startIndex, startIndex + storiesPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Visual Stories
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {currentStories.map((story) => (
          <div
            key={story.id}
            className=" overflow-hidden  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
          >
            <div className="relative overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-96 object-cover rounded-xl  transition-transform duration-300"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            </div>
            
            <div className="py-4">
              <div className="mb-2">
                <span className={`text-xs font-semibold uppercase tracking-wide ${story.categoryColor}`}>
                  {story.category}
                </span>
              </div>
              
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-3 mb-3 leading-5 group-hover:text-red-600 transition-colors">
                {story.title}
              </h3>
              
              <div className="text-xs text-gray-500">
                {story.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === page
                  ? "bg-red-600 text-white"
                  : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Page Info */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Showing {startIndex + 1} - {Math.min(startIndex + storiesPerPage, allStories.length)} of {allStories.length} stories
      </div>
    </div>
  );
}

export default WebStoriesPage;