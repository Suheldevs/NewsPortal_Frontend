import React, { useState } from 'react';
import { Clock, Eye, MessageCircle, Share2, Bookmark, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import TrendingNow from './TrendingNow';

// Mock data for articles
const mainArticles = [
  {
    id: 1,
    title: "Breaking: Major Tech Breakthrough Announced",
    summary: "Scientists have made a groundbreaking discovery that could revolutionize the way we interact with technology in our daily lives.",
    image: "https://picsum.photos/600/600?random=125",
    category: "Technology",
    author: "John Smith",
    timestamp: "2 hours ago",
    readTime: "5 min read",
    views: "12.5K",
    comments: "234",
    isSponsored: false,
    isTrending: true
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    summary: "World leaders unite on comprehensive climate action plan with unprecedented funding commitments for renewable energy projects.",
    image: "https://picsum.photos/600/600?random=12",
    category: "Environment",
    author: "Sarah Johnson",
    timestamp: "4 hours ago",
    readTime: "7 min read",
    views: "8.2K",
    comments: "156",
    isSponsored: true,
    isTrending: false
  },
  {
    id: 3,
    title: "Stock Markets Surge Following Economic Report",
    summary: "Major indices hit record highs as quarterly economic data exceeds expectations, boosting investor confidence across sectors.",
    image: "https://picsum.photos/600/600?random=13",
    category: "Finance",
    author: "Mike Chen",
    timestamp: "6 hours ago",
    readTime: "4 min read",
    views: "15.7K",
    comments: "89",
    isSponsored: false,
    isTrending: true
  },
  {
    id: 4,
    title: "Revolutionary Medical Treatment Shows Promise",
    summary: "Clinical trials demonstrate remarkable success rates for new gene therapy treatment targeting rare diseases.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    category: "Health",
    author: "Dr. Emily White",
    timestamp: "8 hours ago",
    readTime: "6 min read",
    views: "9.4K",
    comments: "67",
    isSponsored: false,
    isTrending: false
  }
];

const sideArticles = [
  {
    id: 5,
    title: "Local Sports Team Wins Championship",
    summary: "After years of preparation, the home team finally brings the trophy home.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    category: "Sports",
    timestamp: "1 hour ago"
  },
  {
    id: 6,
    title: "New Restaurant Opens Downtown",
    summary: "Celebrity chef launches innovative fusion cuisine restaurant.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    category: "Food",
    timestamp: "3 hours ago"
  },
  {
    id: 7,
    title: "Art Exhibition Draws Record Crowds",
    summary: "Modern art showcase attracts visitors from around the world.",
    image: "https://images.unsplash.com/photo-1544967882-e9b497296987?w=400&h=300&fit=crop",
    category: "Culture",
    timestamp: "5 hours ago"
  }
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
  >
    <ChevronLeft className="w-6 h-6 text-gray-700" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
  >
    <ChevronRight className="w-6 h-6 text-gray-700" />
  </button>
);

const HomeBanner = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleBookmark = (articleId) => {
    setBookmarkedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mainArticles.length) % mainArticles.length);
  };

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Main Slider Section (2/3) */}
        <div className="lg:w-2/3">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mainArticles.map((article) => (
                <div key={article.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 lg:h-[450px]">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-6 left-6 flex space-x-3">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                     
                    </div>

                    {/* Bookmark */}
                    <button 
                      onClick={() => toggleBookmark(article.id)}
                      className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Bookmark 
                        className={`w-5 h-5 ${bookmarkedArticles.includes(article.id) ? 'fill-yellow-400 text-yellow-400' : 'text-white'}`} 
                      />
                    </button>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-200 flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {article.timestamp}
                        </span>
                        <span className="text-sm text-gray-200">{article.readTime}</span>
                      </div>

                      <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                        {article.title}
                      </h1>

                      {/* <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                        {article.summary}
                      </p> */}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-gray-200">
                          <span className="flex items-center">
                            <Eye className="w-5 h-5 mr-2" />
                            {article.views}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {article.comments}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-gray-200">By {article.author}</span>
                          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                            <Share2 className="w-5 h-5 text-gray-200" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <CustomPrevArrow onClick={prevSlide} />
            <CustomNextArrow onClick={nextSlide} />

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {mainArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Side Section (1/3) */}
        <div className="lg:w-1/3">
         <TrendingNow/>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;