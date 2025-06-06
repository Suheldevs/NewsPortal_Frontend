// import React, { useState } from 'react';
// import {
//   Menu,
//   X,
//   Search,
//   Bell,
//   User,
//   ChevronDown,
//   Globe,
//   TrendingUp,
//   Briefcase,
//   Gamepad2,
//   Heart,
//   Car,
//   Lightbulb,
//   Shield,
//   Calendar
// } from 'lucide-react';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const categories = [
//     {
//       name: 'राष्ट्रीय',
//       icon: <Globe className="w-4 h-4" />,
//       subcategories: ['दिल्ली', 'मुंबई', 'कोलकाता', 'चेन्नई', 'बेंगलुरु', 'हैदराबाद']
//     },
//     {
//       name: 'अंतर्राष्ट्रीय',
//       icon: <Globe className="w-4 h-4" />,
//       subcategories: ['अमेरिका', 'यूरोप', 'चीन', 'पाकिस्तान', 'रूस', 'मध्य पूर्व']
//     },
//     {
//       name: 'बिजनेस',
//       icon: <Briefcase className="w-4 h-4" />,
//       subcategories: ['शेयर मार्केट', 'बैंकिंग', 'कंपनी न्यूज', 'इकॉनमी', 'क्रिप्टो', 'स्टार्टअप']
//     },
//     {
//       name: 'खेल',
//       icon: <Gamepad2 className="w-4 h-4" />,
//       subcategories: ['क्रिकेट', 'फुटबॉल', 'टेनिस', 'बैडमिंटन', 'हॉकी', 'ओलंपिक']
//     },
//     {
//       name: 'मनोरंजन',
//       icon: <Heart className="w-4 h-4" />,
//       subcategories: ['बॉलीवुड', 'हॉलीवुड', 'टीवी', 'म्यूजिक', 'सेलिब्रिटी', 'वेब सीरीज']
//     },
//     {
//       name: 'टेक्नोलॉजी',
//       icon: <Lightbulb className="w-4 h-4" />,
//       subcategories: ['मोबाइल', 'गैजेट्स', 'AI', 'साइबर सिक्यूरिटी', 'ऐप्स', 'इंटरनेट']
//     },
//     {
//       name: 'ऑटो',
//       icon: <Car className="w-4 h-4" />,
//       subcategories: ['कार न्यूज', 'बाइक न्यूज', 'इलेक्ट्रिक व्हीकल', 'रिव्यू', 'लॉन्च', 'सेफ्टी']
//     },
//     {
//       name: 'लाइफस्टाइल',
//       icon: <TrendingUp className="w-4 h-4" />,
//       subcategories: ['हेल्थ', 'फिटनेस', 'फैशन', 'ट्रेवल', 'फूड', 'रिलेशनशिप']
//     }
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <header className="bg-white shadow-lg sticky top-0 z-50">
//       {/* Top Bar */}
//       <div className="bg-red-600 text-white py-2">
//         <div className="container mx-auto px-4 flex justify-between items-center text-sm">
//           <div className="flex items-center space-x-4">
//             <span className="flex items-center">
//               <Calendar className="w-4 h-4 mr-1" />
//               सोमवार, 2 जून 2025
//             </span>
//             <span className="hidden md:block">ब्रेकिंग न्यूज़</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Bell className="w-4 h-4 cursor-pointer hover:text-red-200" />
//             <User className="w-4 h-4 cursor-pointer hover:text-red-200" />
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <h1 className="text-2xl md:text-3xl font-bold text-red-600">
//               समाचार<span className="text-blue-600">पोर्टल</span>
//             </h1>
//           </div>

//           {/* Search Bar - Desktop */}
//           <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="समाचार खोजें..."
//                 className="w-full px-4 py-2 border border-gray-300 rounded-full pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//               <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="p-2 rounded-md hover:bg-gray-100"
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="bg-gray-50 border-t border-gray-200">
//         <div className="container mx-auto px-4">
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-1">
//             <a href="/" className="px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-white rounded-t-lg font-medium">
//               होम
//             </a>
//             {categories.map((category, index) => (
//               <div key={index} className="relative group">
//                 <button
//                   onClick={() => toggleDropdown(index)}
//                   className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-white rounded-t-lg font-medium transition-colors"
//                 >
//                   {category.icon}
//                   <span className="ml-2">{category.name}</span>
//                   <ChevronDown className="w-4 h-4 ml-1" />
//                 </button>

//                 {/* Dropdown */}
//                 {activeDropdown === index && (
//                   <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-b-lg shadow-lg min-w-48 z-50">
//                     {category.subcategories.map((sub, subIndex) => (
//                       <a
//                         key={subIndex}
//                         href={`/${category.name}/${sub}`}
//                         className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
//                       >
//                         {sub}
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden py-4 space-y-2">
//               {/* Mobile Search */}
//               <div className="relative mb-4">
//                 <input
//                   type="text"
//                   placeholder="समाचार खोजें..."
//                   className="w-full px-4 py-2 border border-gray-300 rounded-full pr-10 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 />
//                 <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
//               </div>

//               <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-white rounded font-medium">
//                 होम
//               </a>
//               {categories.map((category, index) => (
//                 <div key={index}>
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-white rounded font-medium"
//                   >
//                     <div className="flex items-center">
//                       {category.icon}
//                       <span className="ml-2">{category.name}</span>
//                     </div>
//                     <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
//                   </button>

//                   {activeDropdown === index && (
//                     <div className="ml-6 mt-2 space-y-1">
//                       {category.subcategories.map((sub, subIndex) => (
//                         <a
//                           key={subIndex}
//                           href={`/${category.name}/${sub}`}
//                           className="block px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded text-sm"
//                         >
//                           {sub}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Bell,
  User,
  Globe,
  TrendingUp,
  Briefcase,
  Gamepad2,
  Heart,
  Car,
  Lightbulb,
  Shield,
  Calendar,
  Clock,
  ChevronDown,
  GalleryVerticalEnd,
  GalleryVertical,
  GalleryHorizontalEnd,
  BellElectric,
  MenuIcon,
  Ellipsis,
} from "lucide-react";
import TopNavbar from "./Home/TopNavbar";
import { Link } from "react-router-dom";
import Searchbar from "./Home/Searchbar";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [more, setMore] = useState(null);
  // Update time every second
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

  const toggleDropdown = (index) => {
    if (index == "more") {
      setMore(!more);
    }
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const categories = [
    // { name: 'Home', icon: <Globe className="w-4 h-4" />, hasDropdown: false },
    {
      name: "National",
      icon: <Globe className="w-4 h-4" />,
      hasDropdown: false,
      subcategories: [
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai",
        "Bangalore",
        "Politics",
      ],
    },
    {
      name: "International",
      icon: <Globe className="w-4 h-4" />,
      hasDropdown: false,
      subcategories: [
        "USA",
        "Europe",
        "China",
        "Russia",
        "Middle East",
        "World Politics",
      ],
    },
    {
      name: "Politics",
      icon: <BellElectric className="w-4 h-4" />,
      hasDropdown: false,
      subcategories: [
        "USA",
        "Europe",
        "China",
        "Russia",
        "Middle East",
        "World Politics",
      ],
    },
    {
      name: "Business",
      icon: <Briefcase className="w-4 h-4" />,
      hasDropdown: true,
      subcategories: [
        "Stock Market",
        "Banking",
        "Economy",
        "Crypto",
        "Startups",
        "Corporate",
      ],
    },
    {
      name: "Sports",
      icon: <Gamepad2 className="w-4 h-4" />,
      hasDropdown: true,
      subcategories: [
        "Cricket",
        "Football",
        "Tennis",
        "Badminton",
        "Hockey",
        "Olympics",
      ],
    },
    {
      name: "Entertainment",
      icon: <Heart className="w-4 h-4" />,
      hasDropdown: false,
    },
    {
      name: "Technology",
      icon: <Lightbulb className="w-4 h-4" />,
      hasDropdown: true,
      subcategories: [
        "Mobile",
        "Gadgets",
        "AI",
        "Cyber Security",
        "Apps",
        "Reviews",
      ],
    },

    { name: "Auto", icon: <Car className="w-4 h-4" />, hasDropdown: false },
    {
      name: "Lifestyle",
      icon: <TrendingUp className="w-4 h-4" />,
      hasDropdown: false,
    },
    {
      name: "Health",
      icon: <Shield className="w-4 h-4" />,
      hasDropdown: false,
    },
  ];

  return (
    <>
     <TopNavbar />
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">
              News<span className="text-blue-600">Portal</span>
            </h1>
          </div>

          {/* Search Bar - Desktop */}
        <Searchbar/>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-0.5">
            <Link
              to="/"
              className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-white rounded-t-lg font-medium transition-all duration-200 group"
            >
              Home
            </Link>
            {categories.slice(0, 8).map((category, index) => (
              <div key={index} className="relative">
                {category.hasDropdown ? (
                  <Link
                   to={`/news/${category.name.toLowerCase()}`}
                    onMouseEnter={() => toggleDropdown(index)}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-white rounded-t-lg font-medium transition-all duration-200 group"
                  >
                    {category.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Link>
                ) : (
                  <Link
                    to={`/news/${category.name.toLowerCase()}`}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-white rounded-t-lg font-medium transition-all duration-200 group"
                  >
                    {category.name}
                  </Link>
                )}

                {/* Dropdown */}
                {category.hasDropdown && activeDropdown === index && (
                  <div
                    onMouseLeave={() => toggleDropdown(index)}
                    className="absolute top-full left-0 bg-white border border-gray-200 rounded-b-lg shadow-lg min-w-48 z-50"
                  >
                    {category.subcategories.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to={`/web-stories`}
              className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-white rounded-t-lg font-medium transition-all duration-200 group"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                <GalleryHorizontalEnd className="h-4 w-4 rotate-180" />
              </span>
              Web Stories
            </Link>
            <button
              onClick={() => toggleDropdown("more")}
              className="flex items-center px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-white rounded-t-lg font-medium transition-all duration-200 group"
            >
              <Ellipsis className="w-6 h-6" />
            </button>
            {more && (
              <div
                onMouseLeave={() => toggleDropdown("more")}
                className="absolute top-full right-2 bg-white border border-gray-200 rounded-b-lg shadow-lg min-w-48 z-50"
              >
                {categories.slice(7, 9).map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`/news/${sub.name}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full pr-10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>

              {categories.map((category, index) => (
                <div key={index}>
                  {category.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-white hover:text-red-600 rounded font-medium transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{category.icon}</span>
                          {category.name}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === index && (
                        <div className="ml-6 mt-2 space-y-1">
                          {category.subcategories.map((sub, subIndex) => (
                            <a
                              key={subIndex}
                              href={`/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                              className="block px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded text-sm"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={`/${category.name.toLowerCase()}`}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-white hover:text-red-600 rounded font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-3">{category.icon}</span>
                      {category.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;
