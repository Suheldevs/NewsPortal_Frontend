import React from 'react'

function LiveUpdate() {
  return (
    <div>
        <div>
        <div className="mt-8 bg-red-600 text-white py-2 px-4 rounded-lg overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-bold whitespace-nowrap">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              LIVE UPDATES:
            </div>
            <div className="animate-marquee whitespace-nowrap">
              <span className="mx-8">🔴 Parliament Session Live: Major Policy Announcements Expected</span>
              <span className="mx-8">📈 Stock Market Hits New High Amid Economic Reforms</span>
              <span className="mx-8">🏆 India Wins International Chess Championship</span>
              <span className="mx-8">🚀 Space Mission Launch Scheduled for Tomorrow</span>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style> */}
    </div>
  )
}

export default LiveUpdate