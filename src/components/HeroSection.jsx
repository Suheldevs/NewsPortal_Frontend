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
import HomeBanner from './Home/HomeBanner';
import LatestNewsSection from './Home/LatestNewsSection';
import { Link } from 'react-router-dom';

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
            
         <HomeBanner/>
<LatestNewsSection/>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Trending Hashtags
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <Link to={`/tag/${topic.name}`} key={index}  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 px-2 rounded transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-700 mr-2">#{index + 1}</span>
                      <span className="text-sm text-gray-900">{topic.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {topic.count}
                    </span>
                  </Link>
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

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;