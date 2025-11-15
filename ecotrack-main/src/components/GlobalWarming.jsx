


// import React, { useState, useEffect } from "react";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend
// } from "recharts";
// import YouTube from "react-youtube";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";
// import glacierBefore from "../assets/glacier-before.jpg";
// import glacierAfter from "../assets/glacier-after.jpg";

// const GEO_URL = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// // Example impact data keyed by country ISO_A3 (for map colors)
// const impactZones = {
//   USA: 0.8, CHN: 0.7, IND: 0.6, RUS: 0.5, BRA: 0.4, AUS: 0.3, ZAF: 0.2
// };

// const GlobalWarming = () => {
//   const [tempData, setTempData] = useState([]);
//   const [emissionData, setEmissionData] = useState([]);

//   useEffect(() => {
//     // Example temperature rise data (replace with real API or live source as needed)
//     setTempData([
//       { year: 1880, temp: 0 },
//       { year: 1920, temp: 0.2 },
//       { year: 1960, temp: 0.3 },
//       { year: 1980, temp: 0.6 },
//       { year: 2000, temp: 0.9 },
//       { year: 2020, temp: 1.2 }
//     ]);

//     setEmissionData([
//       { country: "China", total: 10000, perCapita: 7.1 },
//       { country: "USA", total: 5000, perCapita: 15.5 },
//       { country: "India", total: 3000, perCapita: 2.5 },
//       { country: "Russia", total: 1500, perCapita: 11.2 }
//     ]);
//   }, []);

//   // Color scale for map impact zones
//   const colorScale = scaleLinear()
//     .domain([0, 1])
//     .range(["#d1fae5", "#065f46"]); // Light green to dark green

//   return (
//     <div className="p-6 bg-white min-h-screen space-y-10">
//       <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">🌍 Global Warming Impact</h1>

//       {/* 1. Temperature Rise Timeline */}
//       <section className="bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">🔥 Temperature Rise Since 1880</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={tempData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="year" />
//             <YAxis label={{ value: "°C Rise", angle: -90, position: "insideLeft" }} />
//             <Tooltip />
//             <Line type="monotone" dataKey="temp" stroke="#EF4444" strokeWidth={3} dot />
//           </LineChart>
//         </ResponsiveContainer>
//       </section>

//       {/* 2. Melting Glaciers */}
//       <section className="grid md:grid-cols-2 gap-6 items-center">
//         <div className="p-6 bg-blue-50 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-3">🧊 Melting Glaciers</h2>
//           <p className="text-gray-600">Himalayan glaciers have shrunk by 40% in 50 years.</p>
//           <div className="flex justify-between mt-4 gap-4">
//             <figure className="w-1/2">
//               <img src={glacierBefore} alt="Glacier Before" className="rounded shadow" />
//               <figcaption className="text-center text-sm mt-1">Glacier Before</figcaption>
//             </figure>
//             <figure className="w-1/2">
//               <img src={glacierAfter} alt="Glacier After" className="rounded shadow" />
//               <figcaption className="text-center text-sm mt-1">Glacier After</figcaption>
//             </figure>
//           </div>
//         </div>

//         {/* 3. Awareness Video */}
//         <div className="p-6 bg-gray-50 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold mb-3">📽️ Awareness Video</h2>
//           <YouTube
//             videoId="EtW2rrLHs08"
//             opts={{ height: "230", width: "100%" }}
//             className="rounded-lg"
//           />
//           <p className="text-gray-600 mt-2">
//             A 2-minute clip explaining causes of global warming.
//           </p>
//         </div>
//       </section>

//       {/* 4. Global Climate Impact Map */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">🗺️ Global Climate Impact Map</h2>
//         <div className="w-full max-w-4xl mx-auto h-96">
//           <ComposableMap projectionConfig={{ scale: 140 }}>
//             <Geographies geography={GEO_URL}>
//               {({ geographies }) =>
//                 geographies.map((geo) => {
//                   const iso = geo.properties.ISO_A3;
//                   const impact = impactZones[iso] || 0;
//                   return (
//                     <Geography
//                       key={geo.rsmKey}
//                       geography={geo}
//                       fill={colorScale(impact)}
//                       stroke="#fff"
//                       onClick={() =>
//                         alert(
//                           `${geo.properties.NAME}\nEstimated Impact Severity: ${(impact * 100).toFixed(1)}%`
//                         )
//                       }
//                       style={{
//                         default: { outline: "none" },
//                         hover: { fill: "#059669", outline: "none", cursor: "pointer" },
//                         pressed: { outline: "none" },
//                       }}
//                     />
//                   );
//                 })
//               }
//             </Geographies>
//           </ComposableMap>
//         </div>
//         <p className="text-sm text-gray-500 mt-2 text-center">
//           Zones colored by estimated climate impact severity (sea-level rise, droughts, flood risks).
//         </p>
//       </section>

//       {/* 5. Emissions by Country */}
//       <section className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">📊 Carbon Emissions by Country</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={emissionData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="country" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="total" fill="#60A5FA" name="Total Emissions (Mt)" />
//             <Bar dataKey="perCapita" fill="#F59E0B" name="Per Capita Emissions (t)" />
//           </BarChart>
//         </ResponsiveContainer>
//       </section>
//     </div>
//   );
// };

// export default GlobalWarming;




import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell
} from "recharts";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import YouTube from "react-youtube";
import glacierBefore from "../assets/glacier-before.jpg";
import glacierAfter from "../assets/glacier-after.jpg";

const GEO_URL = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Sample Climate Impact Severity by country ISO_A3 for map coloring
const impactZones = {
  USA: 0.8, CHN: 0.7, IND: 0.6, RUS: 0.5, BRA: 0.4, AUS: 0.3, ZAF: 0.2,
  CAN: 0.5, MEX: 0.4, ARG: 0.4, NGA: 0.3, EGY: 0.3,
  // Add more country ISO_A3 codes with impact severity (0-1)
};

const CO2EmissionData = [
  { country: "China", total: 10000, perCapita: 7.1 },
  { country: "USA", total: 5000, perCapita: 15.5 },
  { country: "India", total: 3000, perCapita: 2.5 },
  { country: "Russia", total: 1500, perCapita: 11.2 },
];

const TempRiseData = [
  { year: 1880, temp: 0 },
  { year: 1920, temp: 0.2 },
  { year: 1960, temp: 0.3 },
  { year: 1980, temp: 0.6 },
  { year: 2000, temp: 0.9 },
  { year: 2020, temp: 1.2 },
];

const RenewableEnergyData = [
  { year: 2000, usage: 7 },
  { year: 2005, usage: 9 },
  { year: 2010, usage: 12 },
  { year: 2015, usage: 18 },
  { year: 2020, usage: 25 },
  { year: 2025, usage: 32 },
];

const greenhouseGasSources = [
  { name: "Energy Production", value: 44 },
  { name: "Agriculture", value: 24 },
  { name: "Industry", value: 21 },
  { name: "Waste", value: 6 },
  { name: "Other", value: 5 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

const climateFacts = [
  "The last decade was the hottest on record.",
  "Carbon dioxide levels have risen over 40% since pre-industrial times.",
  "Global sea levels rose about 8 inches in the last century.",
  "Glaciers worldwide are shrinking at unprecedented rates.",
  "Extreme weather events have become more frequent and severe."
];

const climatePolicies = [
  "Paris Agreement aims to limit warming below 2°C.",
  "Many countries commit to net-zero emissions by 2050.",
  "Efforts to phase out coal and invest in renewables accelerating.",
  "Reforestation and carbon capture projects are growing worldwide."
];

const emissionReductionTips = [
  "Reduce car travel; use public transport or cycle more.",
  "Switch to renewable energy sources.",
  "Improve home insulation and energy efficiency.",
  "Adopt a plant-based diet or reduce meat consumption.",
  "Recycle and minimize waste.",
  "Support climate-friendly policies and organizations."
];

const wildlifeImpacts = [
  "Many species face habitat loss due to rising temperatures.",
  "Coral reefs are dying from ocean warming and acidification.",
  "Migratory patterns are shifting, affecting ecosystems balance.",
  "Some species risk extinction if warming continues unchecked."
];

const GlobalWarming = () => {
  const [tempData, setTempData] = useState([]);
  const [emissionData, setEmissionData] = useState([]);

  useEffect(() => {
    // Example data; in real app, fetch from APIs
    setTempData(TempRiseData);
    setEmissionData(CO2EmissionData);
  }, []);

  const colorScale = scaleLinear()
    .domain([0, 1])
    .range(["#d1fae5", "#065f46"]); // green shades

  return (
    <div className="p-6 bg-white min-h-screen space-y-12 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">🌍 Global Warming & Climate Impact</h1>

      {/* 1. Temperature Rise Timeline */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🔥 Temperature Rise Since 1880</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tempData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: "°C Rise", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#EF4444" strokeWidth={3} dot />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* 2. Melting Glaciers Before & After */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">🧊 Melting Glaciers</h2>
          <p className="text-gray-700">
            Himalayan glaciers have shrunk by 40% in 50 years due to rising temperatures.
          </p>
          <div className="flex justify-between mt-6 gap-4">
            <figure className="w-1/2">
              <img src={glacierBefore} alt="Glacier Before" className="rounded shadow" />
              <figcaption className="text-center text-sm mt-1">Before (1970s)</figcaption>
            </figure>
            <figure className="w-1/2">
              <img src={glacierAfter} alt="Glacier After" className="rounded shadow" />
              <figcaption className="text-center text-sm mt-1">After (2020s)</figcaption>
            </figure>
          </div>
        </div>

        {/* 3. Awareness Video */}
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">📽️ Awareness Video</h2>
          <YouTube
            videoId="EtW2rrLHs08"
            opts={{ height: "250", width: "100%" }}
            className="rounded-lg"
          />
          <p className="text-gray-600 mt-3">
            A concise clip explaining causes and consequences of global warming.
          </p>
        </div>
      </section>

      {/* 4. Global Climate Impact Interactive Map */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🗺️ Global Climate Impact Map</h2>
        <div className="w-full max-w-5xl mx-auto h-96">
          <ComposableMap projectionConfig={{ scale: 140 }}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const iso = geo.properties.ISO_A3;
                  const impact = impactZones[iso] || 0;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={colorScale(impact)}
                      stroke="#fff"
                      onClick={() => alert(
                        `${geo.properties.NAME}\nEstimated Climate Impact Severity: ${(impact * 100).toFixed(1)}%`
                      )}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#059669", cursor: "pointer" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
        <p className="text-sm text-gray-500 mt-3 text-center">
          Countries color-coded by estimated climate impact severity (sea-level rise, droughts, flood risks).
        </p>
      </section>

      {/* 5. Carbon Emissions by Country Bar Chart */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">📊 Carbon Emissions by Country</h2>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={CO2EmissionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#60A5FA" name="Total Emissions (Mt)" />
            <Bar dataKey="perCapita" fill="#F59E0B" name="Per Capita Emissions (t)" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 6. Climate Change Facts */}
      <section className="bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">📚 Climate Change Facts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {climateFacts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      </section>

      {/* 7. Renewable Energy Usage Trends */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">⚡ Renewable Energy Usage Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={RenewableEnergyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: "% Usage", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="usage" stroke="#10B981" strokeWidth={3} dot />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* 8. Sea Level Rise Visual */}
      <section className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🌊 Sea Level Rise</h2>
        <p className="text-gray-700 mb-4">
          Coastal cities worldwide face increasing flooding risk due to rising sea levels, threatening millions.
        </p>
        {/* Use an illustrative image or animation here, placeholder below */}
        <div className="bg-blue-300 h-48 rounded-lg flex items-center justify-center text-white italic select-none">
          [Sea Level Rise Visual Placeholder]
        </div>
      </section>

      {/* 9. Carbon Footprint Calculator Link */}
      <section className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">🧮 Calculate Your Carbon Footprint</h2>
        <p className="mb-6 text-gray-700">
          Understand your individual impact and discover ways to reduce it.
        </p>
        <button
          onClick={() => window.open("/calculator", "_blank")}
          className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
        >
          Open Calculator
        </button>
      </section>

      {/* 10. Greenhouse Gas Sources (Pie Chart) */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Greenhouse Gas Emission Sources</h2>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={greenhouseGasSources}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
              fill="#82ca9d"
            >
              {greenhouseGasSources.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* 11. Climate Policy Highlights */}
      <section className="bg-green-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">📜 Climate Policy Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {climatePolicies.map((policy, i) => (
            <li key={i}>{policy}</li>
          ))}
        </ul>
      </section>

      {/* 12. Tips to Reduce Emissions */}
      <section className="bg-yellow-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">💡 Tips to Reduce Your Emissions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-900">
          {emissionReductionTips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </section>

      {/* 13. Climate Change News Feed (Static Sample) */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">📰 Climate Change News</h2>
        <p className="text-gray-700 italic">For real-time news, visit trusted sources like <a href="https://gnews.io" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">GNews</a> or <a href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions" className="text-green-600 underline" target="_blank" rel="noopener noreferrer">Our World in Data</a>.</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mt-3 max-h-48 overflow-y-auto">
          <li>New global climate targets announced at COP meetings</li>
          <li>Innovations in carbon capture technology show promise</li>
          <li>Rising temperatures linked to increasing wildfire frequency</li>
        </ul>
      </section>

      {/* 14. Impact on Wildlife and Biodiversity */}
      <section className="bg-red-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🐾 Impact on Wildlife & Biodiversity</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {wildlifeImpacts.map((impact, i) => (
            <li key={i}>{impact}</li>
          ))}
        </ul>
      </section>

      {/* 15. Call to Action Section */}
      <section className="bg-green-700 p-8 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">🌱 Join the Fight Against Climate Change</h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Every action counts. Reduce, reuse, recycle and promote awareness. Together, we can make a difference!
        </p>
        <button
          onClick={() => window.open("/get-involved", "_blank")}
          className="px-8 py-3 bg-yellow-400 rounded-full text-green-900 font-semibold hover:bg-yellow-300 transition"
        >
          Get Involved
        </button>
      </section>

    </div>
  );
};

export default GlobalWarming;
