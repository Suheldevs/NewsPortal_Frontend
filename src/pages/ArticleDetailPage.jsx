import { useState, useEffect } from 'react';
import { Calendar, User, MapPin, Eye, Heart, Tag, Share2 } from 'lucide-react';
import articles from '../data/ArticlesData';
import { useNavigate, useParams } from 'react-router-dom';


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const RelatedArticleCard = ({ article }) => {
  const navigate = useNavigate()
  const handleClick = (slug)=>{
navigate(`/article/${slug}`)
}
  return (
    <div onClick={()=>handleClick(article.slug)} className="flex gap-3 p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
      <img 
        src={article.thumbnail} 
        alt={article.title}
        className="w-20 h-16 object-cover rounded flex-shrink-0"
      />
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900 leading-tight mb-1 hover:text-red-600">
          {article.title}
        </h4>
        <p className="text-xs text-gray-600 mb-1">{article.summary}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{article.author}</span>
          <span>•</span>
          <span>{formatDate(article.publishedAt).split(',')[0]}</span>
        </div>
      </div>
    </div>
  );
};

const ArticleDetailPage = () => {
 const { slug } = useParams(); 
  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
      if (slug) {
      const found = articles.find(item => item.slug === slug);
      setArticle(found);
      const relatedItems = articles.filter(
        item => item.category === found?.category && item.slug !== slug
      );
      setRelated(relatedItems);
    }
  }, [slug]);


if(!article){
  return null 
}

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Article Content - Center */}
        <div className="lg:col-span-2">
          {/* Article Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                {article.subcategory}
              </span>
              {article.isFeatured && (
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>
            
            <p className="text-lg text-gray-600 mb-4">
              {article.summary}
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{article.city}, {article.state}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={16} />
                <span>{article.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart size={16} />
                <span>{article.likes} likes</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-6">
            <img 
              src={article.thumbnail} 
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose max-w-none mb-6">
            <div 
              className="text-gray-800 leading-relaxed article"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Tags */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Tag size={16} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100">
                  <Heart size={16} />
                  <span>{article.likes}</span>
                </button>
                <button className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
              <div className="text-sm text-gray-500">
                Published: {formatDate(article.publishedAt)}
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Sidebar - Right */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg sticky top-44">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">Related Articles</h3>
              <p className="text-sm text-gray-600 mt-1">More from {article.category}</p>
            </div>
            
            <div className="divide-y divide-gray-100">
              {related.map((relatedArticle, index) => (
                <RelatedArticleCard key={index} article={relatedArticle} />
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <button className="w-full text-red-600 text-sm font-medium hover:text-red-800">
                View All {article.category} News →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;