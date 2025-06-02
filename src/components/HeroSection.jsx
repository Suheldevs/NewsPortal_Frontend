import React, { useState } from 'react';
import { 
  Clock, 
  Eye, 
  MessageCircle, 
  Share2, 
  Bookmark,
  Play,
  TrendingUp,
  Calendar,
  ArrowRight,
  Star,
  Users,
  Award,
  Target
} from 'lucide-react';

const HeroSection = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  const toggleBookmark = (articleId) => {
    setBookmarkedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const mainArticles = [
    {
      id: 1,
      title: "Breaking: Major Policy Changes Announced in Parliament Session",
      summary: "Government introduces new reforms affecting multiple sectors including healthcare, education, and technology infrastructure...",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      category: "Politics",
      readTime: "5 min read",
      views: "15.2K",
      comments: 234,
      timestamp: "2 hours ago",
      isSponsored: false,
      author: "Sarah Johnson",
      isTrending: true
    },
    {
      id: 2,
      title: "Tech Giants Report Record Quarterly Earnings Amid Market Volatility",
      summary: "Major technology companies show resilient performance despite global economic uncertainties and supply chain challenges...",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "Business",
      readTime: "3 min read",
      views: "8.7K",
      comments: 156,
      timestamp: "4 hours ago",
      isSponsored: true,
      author: "Michael Chen",
      isTrending: false
    }
  ];

  const sidebarArticles = [
    {
      id: 3,
      title: "Climate Summit Reaches Historic Agreement on Carbon Emissions",
      category: "Environment",
      timestamp: "1h ago",
      views: "12.5K",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb5fa992?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Olympic Preparations in Full Swing as Athletes Gear Up",
      category: "Sports",
      timestamp: "3h ago",
      views: "9.2K",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "New Medical Breakthrough Shows Promise for Cancer Treatment",
      category: "Health",
      timestamp: "5h ago",
      views: "18.3K",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Space Mission Successfully Lands on Mars Surface",
      category: "Science",
      timestamp: "6h ago",
      views: "25.1K",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop"
    }
  ];

  const trendingTopics = [
    { name: "Election Results", count: "45.2K" },
    { name: "Stock Market", count: "32.1K" },
    { name: "Climate Change", count: "28.9K" },
    { name: "Tech Innovation", count: "24.5K" },
    { name: "Sports Updates", count: "19.8K" }
  ];

  const liveUpdates = [
    {
      id: 1,
      title: "LIVE: Parliament Session Ongoing",
      viewers: "2.3K",
      category: "Politics"
    },
    {
      id: 2,
      title: "LIVE: Stock Market Today",
      viewers: "1.8K",
      category: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Hero Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      {article.isSponsored && (
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium">
                          Sponsored
                        </span>
                      )}
                      {article.isTrending && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>

                    {/* Bookmark */}
                    <button 
                      onClick={() => toggleBookmark(article.id)}
                      className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Bookmark 
                        className={`w-4 h-4 ${bookmarkedArticles.includes(article.id) ? 'fill-yellow-400 text-yellow-400' : 'text-white'}`} 
                      />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.timestamp}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {article.comments}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">By {article.author}</span>
                        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                          <Share2 className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Latest News Grid */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Latest News</h3>
                <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sidebarArticles.map((article) => (
                  <div key={article.id} className="flex space-x-4 group cursor-pointer">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-900 mt-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.timestamp}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Live Updates */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                Live Updates
              </h3>
              <div className="space-y-3">
                {liveUpdates.map((update) => (
                  <div key={update.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors cursor-pointer">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{update.title}</h4>
                      <span className="text-xs text-red-600">{update.category}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-3 h-3 mr-1" />
                      {update.viewers}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Trending Now
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 px-2 rounded transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-700 mr-2">#{index + 1}</span>
                      <span className="text-sm text-gray-900">{topic.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {topic.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-red-100 text-sm mb-4">Get the latest news delivered to your inbox</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-red-600 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Ad Space */}
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <div className="text-gray-400 mb-2">
                <Target className="w-8 h-8 mx-auto mb-2" />
              </div>
              <p className="text-sm text-gray-600">Advertisement Space</p>
              <p className="text-xs text-gray-500 mt-1">300x250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;