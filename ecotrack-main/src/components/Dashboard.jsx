

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import {
// //   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
// //   PieChart, Pie, Cell
// // } from "recharts";
// // import ClimateSlideshow from "./ClimateSlideshow";
// // import ClimateNews from "./ClimateNews";
// // import UserCard from "./UserCard";
// // import GoalTracker from "./GoalTracker";
// // import ClimateStatsCard from "./ClimateStatsCard";
// // import CityStatsCard from './CityStatsCard';

// // //import CityStatsGrid from './CityStatsGrid';

// // const COLORS = ["#34D399", "#60A5FA", "#F59E0B", "#EF4444"];

// // // ✅ Utility function for safe toFixed
// // const safeFixed = (val, digits = 2) => Number(val || 0).toFixed(digits);

// // const Dashboard = () => {
// //   const [emissions, setEmissions] = useState([]);
// //   const [user, setUser] = useState({});
// //   const [city, setCity] = useState("Your City");

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     // Fetch user details
// //     axios.get("http://localhost:5000/api/auth/me", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     }).then(res => setUser(res.data)).catch(() => setUser({}));

// //     // Fetch emissions
// //     axios.get("http://localhost:5000/api/emissions", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     }).then(res => setEmissions(res.data)).catch(() => setEmissions([]));

// //     // Detect city
// //     axios.get("https://ipapi.co/json/")
// //       .then(res => setCity(res.data.city || "Your City"))
// //       .catch(() => setCity("Your City"));
// //   }, []);

// //   // Weekly emission data
// //   const weeklyData = emissions.slice(-7).map((e, i) => ({
// //     name: `Day ${i + 1}`,
// //     emission: Number(e.totalEmission || 0),
// //   }));

// //   const monthlyTotal = emissions.reduce((sum, e) => sum + Number(e.totalEmission || 0), 0);

// //   const categoryTotals = { electricity: 0, transport: 0, food: 0, waste: 0 };
// //   emissions.forEach(e => {
// //     categoryTotals.electricity += Number(e.electricity || 0);
// //     categoryTotals.transport += Number(e.transport || 0);
// //     categoryTotals.food += Number(e.food || 0);
// //     categoryTotals.waste += Number(e.waste || 0);
// //   });

// //   const pieData = Object.entries(categoryTotals).map(([key, value]) => ({
// //     name: key.charAt(0).toUpperCase() + key.slice(1),
// //     value: Number(value || 0),
// //   }));

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
// //       <h1 className="text-3xl font-bold text-green-700 mb-4">
// //         Welcome, {user.name || "Eco User"} 🌱
// //       </h1>




// // {/* 🌆 Real-time City-wise Stats */}
// // <CityStatsCard city={city} />

// //       {/* 🌍 Climate Slideshow */}
// //       <ClimateSlideshow />

// //       {/* 🌐 Real-time Climate Data */}
// //       <div className="mt-10">
// //         <ClimateStatsCard userEmission={safeFixed(monthlyTotal)} />
// //       </div>

// //       {/* 📊 User Card + Goal Tracker */}
// //       <div className="grid md:grid-cols-2 gap-6 mt-10">
// //         <UserCard name={user.name} city={city} totalEmission={safeFixed(monthlyTotal)} />
// //         <GoalTracker totalEmission={monthlyTotal} />
// //       </div>

// //       {/* 📈 Stats Summary */}
// //       <div className="grid md:grid-cols-3 gap-6 mt-10">
// //         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
// //           <h3 className="text-gray-600 text-lg font-semibold">Weekly Emission</h3>
// //           <p className="text-2xl text-green-600 font-bold mt-2">
// //             {safeFixed(weeklyData.reduce((sum, e) => sum + e.emission, 0))} kg CO₂
// //           </p>
// //         </div>
// //         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
// //           <h3 className="text-gray-600 text-lg font-semibold">Monthly Emission</h3>
// //           <p className="text-2xl text-yellow-600 font-bold mt-2">
// //             {safeFixed(monthlyTotal)} kg CO₂
// //           </p>
// //         </div>
// //         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
// //           <h3 className="text-gray-600 text-lg font-semibold">Total Records</h3>
// //           <p className="text-2xl text-blue-600 font-bold mt-2">{emissions.length}</p>
// //         </div>
// //       </div>

// //       {/* 📉 Weekly Graph */}
// //       <div className="bg-white shadow-md rounded-lg p-6 my-10">
// //         <h2 className="text-xl font-bold mb-4 text-gray-700">Weekly Emission Trend</h2>
// //         {weeklyData.length > 0 ? (
// //           <ResponsiveContainer width="100%" height={300}>
// //             <LineChart data={weeklyData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="name" />
// //               <YAxis label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }} />
// //               <Tooltip />
// //               <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={3} />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         ) : (
// //           <p className="text-center text-gray-500">No data for graph.</p>
// //         )}
// //       </div>

// //       {/* 🥧 Emission Breakdown */}
// //       <div className="bg-white shadow-md rounded-lg p-6 mb-10">
// //         <h2 className="text-xl font-bold mb-4 text-gray-700">Emission Breakdown by Category</h2>
// //         {pieData.every(item => item.value === 0) ? (
// //           <p className="text-center text-gray-500">No category data yet.</p>
// //         ) : (
// //           <ResponsiveContainer width="100%" height={300}>
// //             <PieChart>
// //               <Pie
// //                 data={pieData}
// //                 dataKey="value"
// //                 nameKey="name"
// //                 cx="50%"
// //                 cy="50%"
// //                 outerRadius={110}
// //                 label
// //               >
// //                 {pieData.map((_, index) => (
// //                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                 ))}
// //               </Pie>
// //               <Tooltip />
// //             </PieChart>
// //           </ResponsiveContainer>
// //         )}
// //       </div>

// //       {/* 📰 Climate News Feed */}
// //       <ClimateNews />
// //     </div>
// //   );
// // };

// // export default Dashboard;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
//   ResponsiveContainer, PieChart, Pie, Cell,
//   BarChart, Bar, Legend
// } from "recharts";
// import ClimateSlideshow from "./ClimateSlideshow";
// import ClimateNews from "./ClimateNews";
// import UserCard from "./UserCard";
// import GoalTracker from "./GoalTracker";
// import ClimateStatsCard from "./ClimateStatsCard";
// import CityStatsCard from "./CityStatsCard";

// const COLORS = ["#34D399", "#60A5FA", "#F59E0B", "#EF4444", "#A78BFA", "#F472B6"];

// const safeFixed = (val, digits = 2) => Number(val || 0).toFixed(digits);

// const citiesAQIList = [
//   "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
//   "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Surat"
// ];

// const ecoTips = [
//   "Use reusable bags instead of plastic.",
//   "Turn off lights when not in use.",
//   "Plant native trees in your community.",
//   "Reduce car usage; opt for biking or walking.",
//   "Compost organic waste to reduce emissions.",
//   "Switch to energy-efficient appliances.",
//   "Support renewable energy initiatives.",
//   "Conserve water to reduce energy use.",
//   "Recycle paper, plastic, and metals.",
//   "Avoid single-use plastics."
// ];

// const pollutantContributorsData = [
//   { name: "Electricity", value: 35 },
//   { name: "Transport", value: 25 },
//   { name: "Food", value: 20 },
//   { name: "Waste", value: 10 },
//   { name: "Industry", value: 10 }
// ];

// const Dashboard = () => {
//   const [emissions, setEmissions] = useState([]);
//   const [user, setUser] = useState({});
//   const [city, setCity] = useState("Your City");
//   const [aqiData, setAqiData] = useState([]);
//   const [dailyTipIndex, setDailyTipIndex] = useState(0);
//   const [recentEvents, setRecentEvents] = useState([]);
//   const [monthTrendData, setMonthTrendData] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     // Fetch user info
//     axios.get("http://localhost:5000/api/auth/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     }).then(res => setUser(res.data)).catch(() => setUser({}));

//     // Fetch emissions data
//     axios.get("http://localhost:5000/api/emissions", {
//       headers: { Authorization: `Bearer ${token}` },
//     }).then(res => setEmissions(res.data)).catch(() => setEmissions([]));

//     // Fetch month trend (mock or backend API)
//     axios.get("http://localhost:5000/api/emissions/monthlytrend", {
//       headers: { Authorization: `Bearer ${token}` },
//     }).then(res => setMonthTrendData(res.data)).catch(() => setMonthTrendData([]));

//     // Detect city by IP
//     axios.get("https://ipapi.co/json/")
//       .then(res => setCity(res.data.city || "Your City"))
//       .catch(() => setCity("Your City"));

//     // Fetch AQI for cities (replace YOUR_AQI_API_KEY)
//     const fetchAqiData = async () => {
//       try {
//         const results = await Promise.all(
//           citiesAQIList.map(async (c) => {
//             const response = await axios.get(`https://api.waqi.info/feed/${c}/?token=YOUR_AQI_API_KEY`);
//             return {
//               city: c,
//               aqi: response.data.data.aqi || "N/A",
//               category: getAqiCategory(response.data.data.aqi),
//             };
//           })
//         );
//         setAqiData(results);
//       } catch {
//         setAqiData([]);
//       }
//     };
//     fetchAqiData();

//     // Fetch recent climate events (mock or from news API)
//     setRecentEvents([
//       { title: "UN Climate Report Released", date: "2025-06-10" },
//       { title: "New Solar Plant Opens in India", date: "2025-08-21" },
//       { title: "Global Forest Cover Increases Slightly", date: "2025-07-15" },
//     ]);

//     // Rotate daily tip every 12 hours roughly
//     const interval = setInterval(() => {
//       setDailyTipIndex(i => (i + 1) % ecoTips.length);
//     }, 12 * 60 * 60 * 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const getAqiCategory = (aqi) => {
//     if (aqi === "N/A") return { label: "Unknown", color: "#9CA3AF" };
//     if (aqi <= 50) return { label: "Good", color: "#10B981" };
//     if (aqi <= 100) return { label: "Moderate", color: "#FBBF24" };
//     if (aqi <= 150) return { label: "Unhealthy Sensitive", color: "#F97316" };
//     if (aqi <= 200) return { label: "Unhealthy", color: "#DC2626" };
//     if (aqi <= 300) return { label: "Very Unhealthy", color: "#9333EA" };
//     return { label: "Hazardous", color: "#7C2D12" };
//   };

//   // Weekly emission data
//   const weeklyData = emissions.slice(-7).map((e, i) => ({
//     name: `Day ${i + 1}`,
//     emission: Number(e.totalEmission || 0),
//   }));

//   const monthlyTotal = emissions.reduce((sum, e) => sum + Number(e.totalEmission || 0), 0);

//   const categoryTotals = { electricity: 0, transport: 0, food: 0, waste: 0 };
//   emissions.forEach(e => {
//     categoryTotals.electricity += Number(e.electricity || 0);
//     categoryTotals.transport += Number(e.transport || 0);
//     categoryTotals.food += Number(e.food || 0);
//     categoryTotals.waste += Number(e.waste || 0);
//   });

//   const pieData = Object.entries(categoryTotals).map(([key, value]) => ({
//     name: key.charAt(0).toUpperCase() + key.slice(1),
//     value: Number(value || 0),
//   }));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6 max-w-7xl mx-auto space-y-8 font-sans">

//       <h1 className="text-3xl font-bold text-green-700 mb-6">Welcome, {user.name || "Eco User"} 🌱</h1>

//       {/* 1. Live AQI for Cities */}
//       <section className="bg-white rounded-lg shadow p-6">
//         <h2 className="text-2xl font-semibold mb-4">🌆 Live Air Quality Index - Top Cities</h2>
//         {aqiData.length > 0 ? (
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//             {aqiData.map(({ city, aqi, category }) => (
//               <div key={city} className="border rounded p-3 flex flex-col items-center">
//                 <h3 className="font-semibold text-lg">{city}</h3>
//                 <p className="text-2xl font-bold" style={{ color: category.color }}>{aqi}</p>
//                 <span className="text-sm font-medium" style={{ color: category.color }}>{category.label}</span>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center">Unable to load AQI data.</p>
//         )}
//       </section>

//       {/* 2. Real-time City-wise Stats */}
//       <CityStatsCard city={city} />

//       {/* 3. Climate Slideshow */}
//       <ClimateSlideshow />

//       {/* 4. Real-time Climate Stats with monthly total */}
//       <ClimateStatsCard userEmission={safeFixed(monthlyTotal)} />

//       {/* 5. User + Goal Tracker */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <UserCard name={user.name} city={city} totalEmission={safeFixed(monthlyTotal)} />
//         <GoalTracker totalEmission={monthlyTotal} />
//       </div>

//       {/* 6. Stats Summary */}
//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
//           <h3 className="text-gray-600 text-lg font-semibold">Weekly Emission</h3>
//           <p className="text-2xl text-green-600 font-bold mt-2">{safeFixed(weeklyData.reduce((sum, e) => sum + e.emission, 0))} kg CO₂</p>
//         </div>
//         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
//           <h3 className="text-gray-600 text-lg font-semibold">Monthly Emission</h3>
//           <p className="text-2xl text-yellow-600 font-bold mt-2">{safeFixed(monthlyTotal)} kg CO₂</p>
//         </div>
//         <div className="bg-white shadow-lg p-5 rounded-lg text-center">
//           <h3 className="text-gray-600 text-lg font-semibold">Total Records</h3>
//           <p className="text-2xl text-blue-600 font-bold mt-2">{emissions.length}</p>
//         </div>
//       </div>

//       {/* 7. Weekly Trend Line Chart */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">Weekly Emission Trend</h2>
//         {weeklyData.length > 0 ? (
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={weeklyData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis label={{ value: "kg CO₂", angle: -90, position: "insideLeft" }} />
//               <Tooltip />
//               <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         ) : (
//           <p className="text-center text-gray-500">No data for weekly trend.</p>
//         )}
//       </section>

//       {/* 8. Emission Breakdown Pie Chart */}
//       <section className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">Emission Breakdown by Category</h2>
//         {pieData.every(item => item.value === 0) ? (
//           <p className="text-center text-gray-500">No category data yet.</p>
//         ) : (
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} label>
//                 {pieData.map((item, idx) => (
//                   <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         )}
//       </section>

//       {/* 9. Sustainability News Ticker */}
//       <section className="bg-green-100 p-4 rounded-md text-gray-700 overflow-hidden whitespace-nowrap">
//         <span className="animate-marquee inline-block mr-10">
//           Latest Climate Headlines: UN Climate Summit progresses | New solar projects launched | Cities pledge zero emissions | ...
//         </span>
//       </section>

//       {/* 10. Recent Climate Events Carousel */}
//       <section className="bg-white rounded-lg shadow p-6">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-700">Recent Climate Events</h2>
//         <ul className="list-disc list-inside space-y-2 text-gray-800">
//           <li>UN Climate Report Released - 2025-06-10</li>
//           <li>New Solar Plant Opened in India - 2025-08-21</li>
//           <li>Global Forest Cover Increase Reported - 2025-07-15</li>
//         </ul>
//       </section>

//       {/* 11. Link to Carbon Footprint Calculator */}
//       <section className="bg-green-50 p-6 rounded-lg shadow-md text-center">
//         <h2 className="text-2xl font-semibold mb-4 text-green-900">Calculate Your Carbon Footprint</h2>
//         <button
//           onClick={() => window.open("/calculator", "_blank")}
//           className="px-6 py-3 bg-green-700 text-white rounded hover:bg-green-800 transition"
//         >
//           Open Calculator
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";
import ClimateSlideshow from "./ClimateSlideshow";
import ClimateNews from "./ClimateNews";
import UserCard from "./UserCard";
import GoalTracker from "./GoalTracker";
import ClimateStatsCard from "./ClimateStatsCard";
import CityStatsCard from "./CityStatsCard";

const COLORS = ["#34D399", "#60A5FA", "#F59E0B", "#EF4444"];

const safeFixed = (val, digits = 2) => Number(val || 0).toFixed(digits);

const citiesAQIList = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
  "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Surat"
];

// Helper to map AQI value to category and color
const getAqiCategory = (aqi) => {
  if (aqi === undefined || aqi === null) return { label: "Unknown", color: "#9CA3AF" };
  if (aqi <= 50) return { label: "Good", color: "#10B981" };
  if (aqi <= 100) return { label: "Moderate", color: "#FBBF24" };
  if (aqi <= 150) return { label: "Unhealthy Sensitive", color: "#F97316" };
  if (aqi <= 200) return { label: "Unhealthy", color: "#DC2626" };
  if (aqi <= 300) return { label: "Very Unhealthy", color: "#9333EA" };
  return { label: "Hazardous", color: "#7C2D12" };
};

const LiveAqiPanel = () => {
  const [aqiData, setAqiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "d5ffda5dbaf412d9a268b3b28891caa07b537239";

    const fetchAqiData = async () => {
      try {
        const results = await Promise.all(
          citiesAQIList.map(async (city) => {
            const { data } = await axios.get(
              `https://api.waqi.info/feed/${city}/?token=${API_KEY}`
            );
            return {
              city,
              aqi: data.data?.aqi,
              category: getAqiCategory(data.data?.aqi),
            };
          })
        );
        setAqiData(results);
      } catch (error) {
        console.error("Error fetching AQI data:", error);
        setAqiData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAqiData();

    const intervalId = setInterval(fetchAqiData, 10 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading AQI data...</p>;
  if (!aqiData.length) return <p className="text-center text-red-600">Failed to load AQI data.</p>;

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">🌆 Live Air Quality Index - Top Cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {aqiData.map(({ city, aqi, category }) => (
          <div key={city} className="border rounded p-3 flex flex-col items-center">
            <h3 className="font-semibold text-lg">{city}</h3>
            <p className="text-2xl font-bold" style={{ color: category.color }}>
              {aqi !== undefined && aqi !== null ? aqi : "N/A"}
            </p>
            <span className="text-sm font-medium" style={{ color: category.color }}>
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Dashboard = () => {
  const [emissions, setEmissions] = useState([]);
  const [user, setUser] = useState({});
  const [city, setCity] = useState("Your City");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setUser(res.data)).catch(() => setUser({}));

    axios.get("http://localhost:5000/api/emissions", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setEmissions(res.data)).catch(() => setEmissions([]));

    axios.get("https://ipapi.co/json/")
      .then(res => setCity(res.data.city || "Your City"))
      .catch(() => setCity("Your City"));
  }, []);

  const weeklyData = emissions.slice(-7).map((e, i) => ({
    name: `Day ${i + 1}`,
    emission: Number(e.totalEmission || 0),
  }));

  const monthlyTotal = emissions.reduce((sum, e) => sum + Number(e.totalEmission || 0), 0);

  const categoryTotals = { electricity: 0, transport: 0, food: 0, waste: 0 };
  emissions.forEach(e => {
    categoryTotals.electricity += Number(e.electricity || 0);
    categoryTotals.transport += Number(e.transport || 0);
    categoryTotals.food += Number(e.food || 0);
    categoryTotals.waste += Number(e.waste || 0);
  });

  const pieData = Object.entries(categoryTotals).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: Number(value || 0),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6 max-w-7xl mx-auto space-y-8 font-sans">

      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Welcome, {user.name || "Eco User"} 🌱
      </h1>

      {/* Live AQI Panel */}
      <LiveAqiPanel />

      {/* Real-time City-wise Stats */}
      <CityStatsCard city={city} />

      {/* Climate Slideshow */}
      <ClimateSlideshow />

      {/* Real-time Climate Stats */}
      <ClimateStatsCard userEmission={safeFixed(monthlyTotal)} />

      {/* User Card + Goal Tracker */}
      <div className="grid md:grid-cols-2 gap-6">
        <UserCard name={user.name} city={city} totalEmission={safeFixed(monthlyTotal)} />
        <GoalTracker totalEmission={monthlyTotal} />
      </div>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-5 rounded-lg text-center">
          <h3 className="text-gray-600 text-lg font-semibold">Weekly Emission</h3>
          <p className="text-2xl text-green-600 font-bold mt-2">{safeFixed(weeklyData.reduce((sum, e) => sum + e.emission, 0))} kg CO₂</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg text-center">
          <h3 className="text-gray-600 text-lg font-semibold">Monthly Emission</h3>
          <p className="text-2xl text-yellow-600 font-bold mt-2">{safeFixed(monthlyTotal)} kg CO₂</p>
        </div>
        <div className="bg-white shadow-lg p-5 rounded-lg text-center">
          <h3 className="text-gray-600 text-lg font-semibold">Total Records</h3>
          <p className="text-2xl text-blue-600 font-bold mt-2">{emissions.length}</p>
        </div>
      </div>

      {/* Weekly Trend Line Chart */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Weekly Emission Trend</h2>
        {weeklyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: "kg CO₂", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Line type="monotone" dataKey="emission" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No data for weekly trend.</p>
        )}
      </section>

      {/* Emission Breakdown Pie Chart */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Emission Breakdown by Category</h2>
        {pieData.every(item => item.value === 0) ? (
          <p className="text-center text-gray-500">No category data yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} label>
                {pieData.map((item, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </section>

      {/* Climate News Feed */}
      <ClimateNews />
    </div>
  );
};

export default Dashboard;
