import { Clock, TrendingUp } from "lucide-react"
import articles from "../../data/ArticlesData"
import FormatDate from "../FormateDate"
import { useNavigate } from "react-router-dom"
export default function TrendingNow() {

const navigate = useNavigate()

const handleClick = (slug)=>{
navigate(`/article/${slug}`)
}

  return (
    <>
         <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-red-500" />
              Trending Now
            </h2>
            
            <div className="space-y-4">
              {articles.slice(0,3).map((article, index) => (
                <div key={index} className="group cursor-pointer" onClick={()=>handleClick(article.slug)}>
                  <div className="flex space-x-2">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={article.thumbnail} 
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                      />
                      <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      
                      <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1 line-clamp-2">
                        {article.title}
                      </h3>
                    
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {FormatDate(article.publishedAt)}
                      </span>
                    </div>
                  </div>
                  
                  {index < articles.length - 1 && (
                    <hr className="mt-6 border-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
    </>
  )
}
