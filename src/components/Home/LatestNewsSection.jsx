import React from 'react'
import articles from '../../data/ArticlesData'
import { ArrowRight, Clock, Eye } from 'lucide-react'
import FormatDate from '../FormateDate'
import { Link, useNavigate } from 'react-router-dom'
function LatestNewsSection() {
    const navigate = useNavigate()
    const handleClick = (slug)=>{
navigate(`/article/${slug}`)
}
  return (
   <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Latest News</h3>
                <Link to='/latest' className="flex items-center text-red-600 hover:text-red-700 font-medium">
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.slice(10, 14).map((article) => (
                  <div key={article.id} onClick={()=>handleClick(article.slug)}   className="flex space-x-4 group cursor-pointer">
                    <img 
                      src={article.thumbnail} 
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
                          {FormatDate(article.publishedAt)}
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
  )
}

export default LatestNewsSection