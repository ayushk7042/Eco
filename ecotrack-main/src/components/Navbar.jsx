




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
//   Search,
//   LogOut,
//   LogIn,
//   Plus,
//   Home,
//   BarChart2,
//   Thermometer,
//   Activity,
//   Settings,
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
//     <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md sticky top-0 z-50 transition-all">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
//           <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
//           <span className="text-2xl font-bold text-green-700 dark:text-green-300">EcoTrack</span>
//         </Link>

//         {/* Search */}
//         <div className="hidden md:flex items-center relative">
//           <Search className="absolute left-3 h-4 w-4 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="pl-9 pr-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm dark:text-white"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center space-x-6 font-medium">
//           <Link to="/" className="hover:text-green-600 dark:hover:text-green-300 hover:underline">Home</Link>

//           {/* Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center hover:text-green-600 dark:hover:text-green-300 hover:underline"
//             >
//               Features <ChevronDown className="ml-1 h-4 w-4" />
//             </button>
//             {dropdownOpen && (
//               <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md w-52 py-2 z-30">
//                 <Link to="/calculator" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <Activity size={16} /> Calculator
//                 </Link>
//                 <Link to="/plants" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <Leaf size={16} /> CO₂ Plants
//                 </Link>
//                 <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <BarChart2 size={16} /> Dashboard
//                 </Link>
//                 <Link to="/greenhouse-gases" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <Thermometer size={16} /> Greenhouse Gases
//                 </Link>
//                 <Link to="/global-warming" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
//                   <Settings size={16} /> Global Warming
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Icons */}
//           <div className="relative">
//             <Bell className="h-5 w-5 hover:text-green-600 dark:hover:text-green-300" />
//             {notifications > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//                 {notifications}
//               </span>
//             )}
//           </div>

//           {/* Dark Mode */}
//           <button onClick={toggleDarkMode}>
//             {darkMode ? (
//               <Sun className="h-5 w-5 text-yellow-400 hover:text-yellow-500" />
//             ) : (
//               <Moon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
//             )}
//           </button>

//           {/* User Auth */}
//           {user ? (
//             <>
//               <div className="flex items-center space-x-2">
//                 <UserCircle className="h-5 w-5 text-green-700 dark:text-green-300" />
//                 <span className="text-sm">{user.name}</span>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 <LogOut size={16} /> Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="flex items-center gap-1 text-green-700 dark:text-green-300 border border-green-500 px-3 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800"
//               >
//                 <LogIn size={16} /> Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
//               >
//                 <Plus size={16} /> Sign Up
//               </Link>
//             </>
//           )}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden px-6 py-4 space-y-4 bg-white dark:bg-gray-900 border-t dark:border-gray-700 animate-slide-down">
//           <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link to="/calculator" onClick={() => setMenuOpen(false)}>Calculator</Link>
//           <Link to="/plants" onClick={() => setMenuOpen(false)}>Top CO₂ Plants</Link>
//           <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
//           <Link to="/greenhouse-gases" onClick={() => setMenuOpen(false)}>Gas Slide</Link>
//           <Link to="/global-warming" onClick={() => setMenuOpen(false)}>Global Warming</Link>

//           <button onClick={toggleDarkMode} className="flex items-center gap-2">
//             {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
//           </button>

//           {user ? (
//             <>
//               <div className="text-green-700 dark:text-green-300">Hi, {user.name}</div>
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
  Activity,
  BarChart2,
  Thermometer,
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
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-7 w-7 text-green-600 dark:text-green-400" />
          <span className="text-2xl font-extrabold text-green-700 dark:text-green-300 tracking-tight">
            EcoTrack
          </span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center relative max-w-xs flex-grow">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium select-none">
          <Link
            to="/"
            className="hover:text-green-600 dark:hover:text-green-300 hover:underline transition"
          >
            Home
          </Link>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-300 hover:underline transition focus:outline-none"
            >
              Features <ChevronDown className="h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 shadow-xl rounded-md w-56 py-2 z-40 border border-gray-200 dark:border-gray-700">
                <Link
                  to="/calculator"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Activity size={16} /> Calculator
                </Link>
                <Link
                  to="/plants"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Leaf size={16} /> CO₂ Plants
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <BarChart2 size={16} /> Dashboard
                </Link>
                <Link
                  to="/greenhouse-gases"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Thermometer size={16} /> Greenhouse Gases
                </Link>
                <Link
                  to="/global-warming"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Settings size={16} /> Global Warming
                </Link>
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="relative cursor-pointer">
            <Bell className="h-6 w-6 hover:text-green-600 dark:hover:text-green-300 transition" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {notifications}
              </span>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="focus:outline-none"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="h-6 w-6 text-yellow-400 hover:text-yellow-500 transition" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600 hover:text-gray-800 transition" />
            )}
          </button>

          {/* User/Auth */}
          {user ? (
            <>
              <div className="flex items-center gap-2 select-none cursor-default">
                <UserCircle className="h-6 w-6 text-green-700 dark:text-green-300" />
                <span className="text-sm font-semibold">{user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                title="Logout"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1 text-green-700 dark:text-green-300 border border-green-500 px-4 py-1 rounded hover:bg-green-100 dark:hover:bg-green-800 transition"
              >
                <LogIn size={16} /> Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded transition"
              >
                <Plus size={16} /> Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle Menu">
            {menuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 px-6 py-6 space-y-5 animate-slide-down z-40 shadow-lg select-none">
          <Link to="/" className="block text-lg font-medium hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/calculator" className="block hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
            Calculator
          </Link>
          <Link to="/plants" className="block hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
            Top CO₂ Plants
          </Link>
          <Link to="/dashboard" className="block hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
          <Link to="/greenhouse-gases" className="block hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
            Gas Slide
          </Link>
          <Link to="/global-warming" className="block hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
            Global Warming
          </Link>

          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="w-full flex items-center gap-2 text-lg"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>

          {user ? (
            <>
              <div className="text-green-700 dark:text-green-300 font-semibold">Hi, {user.name}</div>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-red-600 border border-red-500 px-4 py-2 rounded-md mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="block hover:text-green-600 dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
