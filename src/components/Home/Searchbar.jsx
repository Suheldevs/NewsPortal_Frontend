import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";

export const dummyData = [
  { title: "PM Modi plants sacred Tulsi at residence", slug: "pm-modi-plants-sacred-tulsi" },
  { title: "Chenab bridge ready after Pulwama attack", slug: "chenab-bridge-ready-pulwama-attack" },
  { title: "Bengaluru BJP leader's bold statement", slug: "bengaluru-bjp-leader-statement" },
  { title: "Rising tensions between China and Pakistan", slug: "china-pakistan-tensions" },
  { title: "India completes highest railway bridge", slug: "india-highest-railway-bridge" },
  { title: "Government plans new employment scheme", slug: "government-new-employment-scheme" },
  { title: "Supreme Court to hear electoral bond case", slug: "supreme-court-electoral-bond-case" },
  { title: "Farmers protest reignites in Punjab", slug: "farmers-protest-punjab" },
  { title: "India signs space deal with NASA", slug: "india-nasa-space-deal" },
  { title: "Inflation drops to 4.2% in May", slug: "inflation-drops-may" },
  { title: "Cyclone BIPARJOY alert for Gujarat coast", slug: "cyclone-biparjoy-gujarat" },
  { title: "Government introduces Digital India Act", slug: "digital-india-act" },
  { title: "India to host G20 Summit in New Delhi", slug: "g20-summit-new-delhi" },
  { title: "ISRO successfully launches Chandrayaan-3", slug: "isro-launches-chandrayaan-3" },
  { title: "Delhi air quality worsens to severe", slug: "delhi-air-quality-severe" },
  { title: "Metro fare hike announced for Mumbai", slug: "mumbai-metro-fare-hike" },
  { title: "Budget 2025: Key takeaways from FM speech", slug: "budget-2025-highlights" },
  { title: "India's GDP growth forecast revised to 7%", slug: "india-gdp-growth-forecast" },
  { title: "RBI keeps repo rate unchanged", slug: "rbi-repo-rate-unchanged" },
  { title: "CBSE announces Class 12 results", slug: "cbse-class-12-results" },
  { title: "NEET exam leak triggers protests", slug: "neet-exam-leak-protests" },
  { title: "Rahul Gandhi addresses public rally in Jaipur", slug: "rahul-gandhi-rally-jaipur" },
  { title: "Amit Shah visits Manipur to review situation", slug: "amit-shah-manipur-visit" },
  { title: "Congress to launch Bharat Jodo Yatra 2.0", slug: "bharat-jodo-yatra-2" },
  { title: "Monsoon likely to hit Kerala early", slug: "monsoon-kerala-forecast" },
  { title: "Fuel prices hiked again in metro cities", slug: "fuel-price-hike-india" },
  { title: "Adani Group denies financial irregularities", slug: "adani-group-denies-irregularities" },
  { title: "Sensex crosses 75,000 mark", slug: "sensex-crosses-75000" },
  { title: "SEBI introduces new IPO rules", slug: "sebi-new-ipo-rules" },
  { title: "Virat Kohli scores 50th ODI century", slug: "virat-kohli-50th-century" },
  { title: "India wins Asia Cup 2025", slug: "india-wins-asia-cup-2025" },
  { title: "IPL 2025: CSK signs new foreign player", slug: "ipl-2025-csk-new-player" },
  { title: "Supreme Court upholds Article 370 abrogation", slug: "article-370-abrogation" },
  { title: "Karnataka CM announces free bus for women", slug: "karnataka-free-bus-women" },
  { title: "Uttar Pradesh to build new film city", slug: "uttar-pradesh-film-city" },
  { title: "Covid-19 new variant detected in Maharashtra", slug: "covid19-new-variant-maharashtra" },
  { title: "Air India signs $80B deal with Boeing", slug: "air-india-boeing-deal" },
  { title: "No-confidence motion fails in Parliament", slug: "no-confidence-motion-parliament" },
  { title: "India bans 20 new Chinese apps", slug: "india-bans-chinese-apps" },
  { title: "Government to regulate AI tools", slug: "government-regulate-ai" },
  { title: "Income tax filing deadline extended", slug: "income-tax-deadline-extended" },
  { title: "Delhi floods again after heavy rain", slug: "delhi-floods-heavy-rain" },
  { title: "India ranks 3rd in global startup index", slug: "india-global-startup-index" },
  { title: "UGC introduces new 4-year degree rules", slug: "ugc-4-year-degree-rules" },
  { title: "Electric vehicle sales hit record high", slug: "ev-sales-record-india" },
  { title: "Nirmala Sitharaman speaks at WEF", slug: "nirmala-sitharaman-wef" },
  { title: "SC orders demolition of illegal resorts", slug: "sc-demolition-resorts" },
  { title: "Heavy snow disrupts Kashmir traffic", slug: "snow-kashmir-traffic" },
  { title: "Yogi Adityanath launches UP drone policy", slug: "yogi-adityanath-drone-policy" },
  { title: "India wins Oscar for Best Documentary", slug: "india-oscar-documentary" },
  { title: "LPG prices slashed by Rs 100", slug: "lpg-price-slashed" },
  { title: "Delhi Metro launches WhatsApp ticketing", slug: "delhi-metro-whatsapp-ticket" },
  { title: "Agniveer recruitment opens pan-India", slug: "agniveer-recruitment-india" },
  { title: "Mumbai local trains to get AC coaches", slug: "mumbai-trains-ac-coaches" },
  { title: "Railway Minister announces new bullet train", slug: "new-bullet-train-announced" },
  { title: "CoWIN data breach sparks concerns", slug: "cowin-data-breach" },
  { title: "WhatsApp introduces AI chat assistant", slug: "whatsapp-ai-assistant" },
  { title: "India to host Chess Olympiad 2026", slug: "india-host-chess-olympiad" },
  { title: "India signs FTA with UK", slug: "india-fta-uk" },
  { title: "NDA allies finalize seat sharing", slug: "nda-alliance-seat-sharing" },
  { title: "Delhi Police arrests cyber fraud gang", slug: "delhi-cyber-fraud-arrest" },
  { title: "Bengal violence ahead of panchayat polls", slug: "bengal-violence-panchayat-polls" },
  { title: "Sikkim flash floods leave 20 missing", slug: "sikkim-flash-floods" },
  { title: "Tata to launch new electric SUV", slug: "tata-electric-suv-launch" },
  { title: "Jio announces free 5G upgrade", slug: "jio-5g-upgrade" },
  { title: "Google fined for antitrust violations", slug: "google-antitrust-fine" },
  { title: "India tops remittance inflow rankings", slug: "india-remittance-top" },
  { title: "ED raids multiple locations in Delhi", slug: "ed-raids-delhi" },
  { title: "Heavy rains lash Himachal Pradesh", slug: "rains-himachal" },
  { title: "ISRO to launch reusable rocket", slug: "isro-reusable-rocket" },
  { title: "Delhi schools to remain closed amid heatwave", slug: "delhi-schools-heatwave" },
  { title: "Tamil Nadu bans online gambling apps", slug: "tamil-nadu-gambling-ban" },
  { title: "Budget smartphones under ₹10,000 launched", slug: "budget-phones-under-10000" },
  { title: "India’s new education policy praised globally", slug: "education-policy-india" },
  { title: "Ganga cleanup project enters final phase", slug: "ganga-cleanup-final-phase" },
  { title: "Smart cities mission deadline extended", slug: "smart-cities-deadline" },
  { title: "Indigo flight emergency landing in Nagpur", slug: "indigo-emergency-landing" },
  { title: "Stock market hits record high", slug: "stock-market-record-high" },
  { title: "Kejriwal launches free WiFi project", slug: "kejriwal-free-wifi" },
  { title: "Amazon to invest $15B in India", slug: "amazon-invests-india" },
  { title: "CBI investigates NEET paper leak", slug: "cbi-neet-leak" },
  { title: "Aadhaar card update deadline extended", slug: "aadhaar-update-deadline" },
  { title: "National highway project launched in Assam", slug: "assam-highway-project" },
  { title: "Youth unemployment rate climbs to 18%", slug: "youth-unemployment-india" },
  { title: "New education curriculum for Class 10", slug: "class-10-new-curriculum" },
  { title: "Parliament passes women’s reservation bill", slug: "womens-reservation-bill" },
  { title: "Twitter rebranded to X", slug: "twitter-rebrand-x" },
  { title: "Record number of Indian students abroad", slug: "indian-students-abroad" },
  { title: "Petrol price may reduce this week", slug: "petrol-price-cut" },
  { title: "Over 10 lakh voters to cast vote today", slug: "lakh-voters-cast-vote" },
  { title: "India celebrates 79th Independence Day", slug: "independence-day-79" },
  { title: "Election Commission updates voter list", slug: "voter-list-update" },
  { title: "Fire breaks out in Noida hospital", slug: "noida-hospital-fire" },
  { title: "PM Modi meets US President at G7", slug: "modi-meets-us-president" },
  { title: "Ayodhya Ram temple opens for visitors", slug: "ayodhya-ram-temple" },
];


export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (query.trim()) {
      const result = dummyData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
    } else {
      setFiltered([]);
    }
  }, [query]);

  const handleClear = () => {
    setQuery("");
    setFiltered([]);
  };

//   useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch(`/search?text=${query}`);
//     const data = await res.json();
//     setFiltered(data);
//   };
//   if (query) fetchData();
// }, [query]);


  return (

    <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search news..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <X
            className="absolute right-10 top-2.5 w-4 h-4 text-gray-400 cursor-pointer"
            onClick={handleClear}
          />
        )}
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        
        {/* Dropdown Results */}
        
        {filtered.length > 0 && (
          <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            {filtered.map((item, index) => (
              <Link
                key={index}
                to={`/article/${item.slug}`}
                className="px-4 block py-2 border-b mt-1 border-gray-100 text-sm hover:bg-gray-50 cursor-pointer"
              >
                <span className="text-blue-600 font-semibold">Article:</span> {item.title}
              </Link>
            ))}
          </ul>
        )}
        {(query && filtered.length == 0) && (
            <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
            <li className="text-center px-4 py-2 text-red">No Matches ! </li>
          </ul>
        )}
      </div>
    </div>
  );
}
