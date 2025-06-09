import {
  Bell,
  Calendar,
  Clock,
  User,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GoogleTranslate from "../GoogleTranslate";
import { useGetPostsQuery } from "../../redux/apiSlice";

function TopNavbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return { formattedDate, formattedTime };
  };
  const { formattedDate, formattedTime } = formatDateTime(currentDateTime);




const data = useGetPostsQuery()
console.log(data)
  return (
    <>
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formattedDate}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {formattedTime}
            </span>
          </div>
          
          {/* Breaking News Section - Centered */}
          <div className="flex-1 flex justify-center items-center mx-2">
            <span className="text-yellow-200 font-medium mr-4">
              Breaking News:
            </span>
            <div className="overflow-hidden max-w-md">
              <div className="animate-marquee whitespace-nowrap">
                <span className="inline-block px-8">
                  🔴 Parliament Session Live: Major Policy Announcements Expected
                </span>
                <span className="inline-block px-8">
                  📈 Stock Market Hits New High Amid Economic Reforms
                </span>
                <span className="inline-block px-8">
                  🏆 India Wins International Chess Championship
                </span>
                <span className="inline-block px-8">
                  🚀 Space Mission Launch Scheduled for Tomorrow
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-200 transition-colors" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-200 transition-colors" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-200 transition-colors" />
              <Youtube className="w-4 h-4 cursor-pointer hover:text-red-200 transition-colors" />
            </div>

            {/* Account Section */}
            <div className="flex items-center space-x-3 border-l border-red-400 pl-4">
              <Link to='/login' className="flex items-center cursor-pointer hover:text-red-200 transition-colors">
                <User className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Login</span>
              </Link>
             <div className="z-20">
              {/* <GoogleTranslate/> */}
             </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </>
  );
}

export default TopNavbar;