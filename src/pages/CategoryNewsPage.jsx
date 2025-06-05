import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Sample news data - replace with your API data
const newsData = {
  latest: [
    {
      id: 1,
      title: "'Never asked anyone to mediate': Shashi Tharoor on Trump's claims of India-Pakistan ceasefire mediation",
      excerpt: "He said that if Pakistan were to 'dismantle the infrastructure of terrorism, we can talk to them'.",
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 14:41 IST"
    },
    {
      id: 2,
      title: "Covid 19 India Cases Live Updates: Active cases rise to nearly 5,000, 7 deaths reported in 24 hours",
      excerpt: "Covid 19 Cases in India Today Live News Updates. Kerala tops the list with 1487 active cases, followed by Delhi and Maharashtra, with 562 and 526 active cases, respectively.",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 14:24 IST"
    },
    {
      id: 3,
      title: "Delhi Rohini Blasts: Traces of explosive chemicals found in samples, show forensic reports",
      excerpt: "Investigators reviewed CCTV footage from the area and identified around 10 individuals present before the explosion. One of them, a local resident, was seen",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 11:18 IST"
    },
    {
      id: 4,
      title: "Stock Market Today: Sensex gains 200 points, Nifty above 23,500 in early trade",
      excerpt: "Banking and IT stocks lead the rally as investors show confidence in economic recovery measures announced by the government.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 13:30 IST"
    },
    {
      id: 5,
      title: "India vs Australia: Kohli scores century in practice match ahead of Border-Gavaskar Trophy",
      excerpt: "Virat Kohli looked in sublime form as he scored his first century in practice matches this year, raising hopes for the upcoming series.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 12:15 IST"
    }
  ],
  international: [
    {
      id: 6,
      title: "US Presidential Election 2024: Key battleground states show tight race as voting begins",
      excerpt: "Latest polls indicate a closely contested election with swing states playing crucial role in determining the outcome.",
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 15:30 IST"
    },
    {
      id: 7,
      title: "Ukraine-Russia Conflict: Peace talks resume in Switzerland with international mediators",
      excerpt: "International mediators express cautious optimism about potential breakthrough in negotiations after months of deadlock.",
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 14:45 IST"
    }
  ],
  sports: [
    {
      id: 8,
      title: "IPL 2025 Auction: Mumbai Indians retain Rohit Sharma as captain for next season",
      excerpt: "MI announces their retention list ahead of the mega auction scheduled for next month, with Rohit leading the core group.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 16:20 IST"
    },
    {
      id: 9,
      title: "FIFA World Cup 2026: India's qualification hopes alive after crucial win against Lebanon",
      excerpt: "Indian football team defeats Lebanon 2-1 in World Cup qualifier match, keeping their dreams alive for the mega event.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 15:45 IST"
    }
  ],
  business: [
    {
      id: 10,
      title: "RBI Monetary Policy: Interest rates remain unchanged at 6.5% amid inflation concerns",
      excerpt: "Central bank maintains status quo citing inflation concerns and global economic uncertainty, keeping repo rate steady.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 14:00 IST"
    }
  ],
  national: [
    {
      id: 1,
      title: "'Never asked anyone to mediate': Shashi Tharoor on Trump's claims of India-Pakistan ceasefire mediation",
      excerpt: "He said that if Pakistan were to 'dismantle the infrastructure of terrorism, we can talk to them'.",
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 14:41 IST"
    },
    {
      id: 2,
      title: "Covid 19 India Cases Live Updates: Active cases rise to nearly 5,000, 7 deaths reported in 24 hours",
      excerpt: "Covid 19 Cases in India Today Live News Updates. Kerala tops the list with 1487 active cases, followed by Delhi and Maharashtra, with 562 and 526 active cases, respectively.",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 14:24 IST"
    },
    {
      id: 3,
      title: "Delhi Rohini Blasts: Traces of explosive chemicals found in samples, show forensic reports",
      excerpt: "Investigators reviewed CCTV footage from the area and identified around 10 individuals present before the explosion. One of them, a local resident, was seen",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 11:18 IST"
    },
    {
      id: 4,
      title: "Stock Market Today: Sensex gains 200 points, Nifty above 23,500 in early trade",
      excerpt: "Banking and IT stocks lead the rally as investors show confidence in economic recovery measures announced by the government.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 13:30 IST"
    },
    {
      id: 5,
      title: "India vs Australia: Kohli scores century in practice match ahead of Border-Gavaskar Trophy",
      excerpt: "Virat Kohli looked in sublime form as he scored his first century in practice matches this year, raising hopes for the upcoming series.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=200&fit=crop",
      date: "JUNE 5, 2025 12:15 IST"
    }
  ],
};



const getCategoryFromParam = (slug) => {
  return slug || 'latest';
};

const CategoryNewsPage = () => {
  const { slug } = useParams(); 
  const [currentNews, setCurrentNews] = useState([]);

  const getNewsByCategory = (category) => {
    return newsData[category] || newsData.latest;
  };

  useEffect(() => {
    const category = getCategoryFromParam(slug);
    setCurrentNews(getNewsByCategory(category));
  }, [slug]);




const NewsItem = ({ news }) => {
  return (
    <div className="border-b border-dotted border-gray-600 py-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - Text Content (col-6) */}
        <div className="col-span-6">
          <h3 className="text-lg font-bold play text-gray-900 leading-tight mb-2 hover:text-red-600 cursor-pointer">
            {news.title}
          </h3>
          <div className="text-xs  text-red-600 font-medium mb-2 uppercase">
            {news.date}
          </div>
          <p className="text-sm line-clamp-3 text-gray-700 leading-relaxed">
            {news.excerpt}
          </p>
        </div>
        
        {/* Right Column - Image (col-6) */}
        <div className="col-span-6">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-44 object-cover "
          />
        </div>
      </div>
    </div>
  );
};




  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
    

      {/* Category Headline */}
      <h1 className="text-3xl play pb-2 border-b border-gray-500 font-bold text-gray-900 mb-6 capitalize">
        {slug} News
      </h1>

      {/* News List */}
      <div className="space-y-0 gap-10 grid-cols-1 lg:grid-cols-2 grid">
        {currentNews.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNewsPage;