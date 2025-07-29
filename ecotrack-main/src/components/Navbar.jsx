


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Bell,
//   ChevronDown,
//   UserCircle,
//   Leaf,
// } from "lucide-react";

// const Navbar = ({ user, setUser }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [notifications] = useState(3);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   useEffect(() => {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     if (prefersDark) {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   return (
//     <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
//           <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
//           <span className="text-2xl font-bold text-green-700 dark:text-green-300">EcoTrack</span>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-6 font-medium">
//           <Link to="/" className="hover:text-green-600 dark:hover:text-green-300">Home</Link>
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center hover:text-green-600 dark:hover:text-green-300"
//             >
//               Features <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             {dropdownOpen && (
//               <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow rounded-md w-48 py-2 z-20">
//                 <Link to="/calculator" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Calculator</Link>
//                 <Link to="/plants" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Top CO₂ Plants</Link>
//                 <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>
//                 <Link to="/greenhouse-gases" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Gas Slide</Link>
//                 <Link to="/global-warming" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Global Warming</Link>
//               </div>
//             )}
//           </div>
//           <div className="relative">
//             <Bell className="h-5 w-5 hover:text-green-600 dark:hover:text-green-300" />
//             {notifications > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//                 {notifications}
//               </span>
//             )}
//           </div>
//           <button onClick={toggleDarkMode}>
//             {darkMode ? (
//               <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-500" />
//             ) : (
//               <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
//             )}
//           </button>
//           {user ? (
//             <>
//               <div className="flex items-center space-x-2">
//                 <UserCircle className="h-5 w-5 text-green-700 dark:text-green-300" />
//                 <span>{user.name}</span>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-green-700 dark:text-green-300 border border-green-500 px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden px-6 py-4 space-y-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//           <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
//           <Link to="/plants" onClick={() => setMenuOpen(false)}>Top CO₂ Plants</Link>
//           <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
//           <Link to="/greenhouse-gases" onClick={() => setMenuOpen(false)}>Gas Slide</Link>
//           <Link to="/global-warming" onClick={() => setMenuOpen(false)}>Global Warming</Link>
//           <div className="flex items-center justify-between">
//             <span>Notifications</span>
//             <div className="relative">
//               <Bell className="h-5 w-5" />
//               {notifications > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//                   {notifications}
//                 </span>
//               )}
//             </div>
//           </div>
//           <button onClick={toggleDarkMode} className="flex items-center space-x-2">
//             {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
//           </button>
//           {user ? (
//             <>
//               <span className="text-green-700 dark:text-green-300">Hi, {user.name}</span>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-red-600 border border-red-500 px-4 py-1 rounded-md"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
//               <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
//             </>
//           )}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  Bell,
  ChevronDown,
  UserCircle,
  Leaf,
  Search,
  LogOut,
  LogIn,
  Plus,
  Home,
  BarChart2,
  Thermometer,
  Activity,
  Settings,
} from "lucide-react";

const Navbar = ({ user, setUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications] = useState(3);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
          <span className="text-2xl font-bold text-green-700 dark:text-green-300">EcoTrack</span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center relative">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm dark:text-white"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-green-600 dark:hover:text-green-300 hover:underline">Home</Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-green-600 dark:hover:text-green-300 hover:underline"
            >
              Features <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-52 py-2 z-30">
                <Link to="/calculator" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Activity size={16} /> Calculator
                </Link>
                <Link to="/plants" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Leaf size={16} /> CO₂ Plants
                </Link>
                <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <BarChart2 size={16} /> Dashboard
                </Link>
                <Link to="/greenhouse-gases" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Thermometer size={16} /> Greenhouse Gases
                </Link>
                <Link to="/global-warming" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Settings size={16} /> Global Warming
                </Link>
              </div>
            )}
          </div>

          {/* Icons */}
          <div className="relative">
            <Bell className="h-5 w-5 hover:text-green-600 dark:hover:text-green-300" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {notifications}
              </span>
            )}
          </div>

          {/* Dark Mode */}
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
            )}
          </button>

          {/* User Auth */}
          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <UserCircle className="h-5 w-5 text-green-700 dark:text-green-300" />
                <span className="text-sm">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1 text-green-700 dark:text-green-300 border border-green-500 px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800"
              >
                <LogIn size={16} /> Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                <Plus size={16} /> Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 bg-white dark:bg-gray-900 border-t dark:border-gray-700 animate-slide-down">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
          <Link to="/plants" onClick={() => setMenuOpen(false)}>Top CO₂ Plants</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/greenhouse-gases" onClick={() => setMenuOpen(false)}>Gas Slide</Link>
          <Link to="/global-warming" onClick={() => setMenuOpen(false)}>Global Warming</Link>

          <button onClick={toggleDarkMode} className="flex items-center gap-2">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          {user ? (
            <>
              <div className="text-green-700 dark:text-green-300">Hi, {user.name}</div>
              <button
                onClick={handleLogout}
                className="w-full text-red-600 border border-red-500 px-4 py-1 rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

