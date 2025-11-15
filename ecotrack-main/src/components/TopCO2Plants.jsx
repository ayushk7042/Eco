// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// const sampleData = [
//   {
//     name: 'Peepal Tree',
//     scientificName: 'Ficus religiosa',
//     co2Absorption: 21.77,
//     lifespan: '100+ years',
//     region: 'India',
//     benefit: 'Also purifies benzene, formaldehyde',
//   },
//   {
//     name: 'Neem Tree',
//     scientificName: 'Azadirachta indica',
//     co2Absorption: 20.23,
//     lifespan: '150+ years',
//     region: 'India, Tropics',
//     benefit: 'Medicinal & air-purifying properties',
//   },
//   {
//     name: 'Banyan Tree',
//     scientificName: 'Ficus benghalensis',
//     co2Absorption: 18.4,
//     lifespan: '200+ years',
//     region: 'India',
//     benefit: 'Massive canopy, excellent for urban cooling',
//   },
//   {
//     name: 'Arjuna Tree',
//     scientificName: 'Terminalia arjuna',
//     co2Absorption: 15.2,
//     lifespan: '60-80 years',
//     region: 'India (riverbanks)',
//     benefit: 'Known for stabilizing river banks & soil',
//   },
//   {
//     name: 'Ashoka Tree',
//     scientificName: 'Saraca asoca',
//     co2Absorption: 13.5,
//     lifespan: '60 years',
//     region: 'South Asia',
//     benefit: 'Reduces noise & pollution',
//   },
//   {
//     name: 'Mango Tree',
//     scientificName: 'Mangifera indica',
//     co2Absorption: 12.8,
//     lifespan: '100 years',
//     region: 'Tropical & Subtropical',
//     benefit: 'Provides fruit and shade',
//   },
//   {
//     name: 'Saptaparni',
//     scientificName: 'Alstonia scholaris',
//     co2Absorption: 12.1,
//     lifespan: '40–60 years',
//     region: 'India, SE Asia',
//     benefit: 'Medicinal & used in Ayurveda',
//   },
//   {
//     name: 'Indian Almond',
//     scientificName: 'Terminalia catappa',
//     co2Absorption: 11.4,
//     lifespan: '60+ years',
//     region: 'Coastal Asia',
//     benefit: 'Excellent for shoreline protection',
//   },
//   {
//     name: 'Karanj Tree',
//     scientificName: 'Pongamia pinnata',
//     co2Absorption: 10.9,
//     lifespan: '70 years',
//     region: 'India',
//     benefit: 'Used for biodiesel & reforestation',
//   },
//   {
//     name: 'Teak Tree',
//     scientificName: 'Tectona grandis',
//     co2Absorption: 9.7,
//     lifespan: '80+ years',
//     region: 'South Asia',
//     benefit: 'Strong carbon sink & timber source',
//   }
// ];

// const COLORS = ['#34D399', '#60A5FA', '#F59E0B', '#EF4444', '#10B981', '#A78BFA', '#F472B6', '#FCD34D', '#38BDF8', '#8B5CF6'];

// const TopCO2Plants = () => {
//   const [plants, setPlants] = useState([]);

//   useEffect(() => {
//     // You can later fetch from backend: /api/plants/top
//     setPlants(sampleData);
//   }, []);

//   return (
//     <div className="p-8 bg-green-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-green-700 mb-6">🌿 Top CO₂ Absorbing Plants (India)</h1>

//       {/* 📋 Plant Details Table */}
//       <div className="overflow-x-auto mb-10">
//         <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
//           <thead className="bg-green-100">
//             <tr>
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">Scientific Name</th>
//               <th className="py-3 px-4 text-left">CO₂ Absorbed (kg/year)</th>
//               <th className="py-3 px-4 text-left">Lifespan</th>
//               <th className="py-3 px-4 text-left">Region</th>
//               <th className="py-3 px-4 text-left">Benefits</th>
//             </tr>
//           </thead>
//           <tbody>
//             {plants.map((plant, index) => (
//               <tr key={index} className="border-t border-gray-200 hover:bg-green-50">
//                 <td className="py-2 px-4">{plant.name}</td>
//                 <td className="py-2 px-4 italic">{plant.scientificName}</td>
//                 <td className="py-2 px-4">{plant.co2Absorption}</td>
//                 <td className="py-2 px-4">{plant.lifespan}</td>
//                 <td className="py-2 px-4">{plant.region}</td>
//                 <td className="py-2 px-4 text-sm text-gray-600">{plant.benefit}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* 📊 Bar Chart Comparison */}
//       <div className="bg-white p-6 shadow-md rounded-lg">
//         <h2 className="text-xl font-semibold mb-4 text-gray-700">CO₂ Absorption Comparison</h2>
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart data={plants}>
//             <XAxis dataKey="name" angle={-35} textAnchor="end" interval={0} height={80} />
//             <YAxis label={{ value: "kg/year", angle: -90, position: "insideLeft" }} />
//             <Tooltip
//               formatter={(value, name, props) => [
//                 `${value} kg CO₂/year`,
//                 props.payload.benefit || "Benefit",
//               ]}
//             />
//             <Bar dataKey="co2Absorption">
//               {plants.map((_, index) => (
//                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default TopCO2Plants;



import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from "recharts";

const sampleData = [
  {
    name: "Peepal Tree",
    scientificName: "Ficus religiosa",
    co2Absorption: 21.77,
    lifespan: 100,
    region: "India",
    benefit: "Also purifies benzene, formaldehyde",
    pollutantsRemoved: 5,
  },
  {
    name: "Neem Tree",
    scientificName: "Azadirachta indica",
    co2Absorption: 20.23,
    lifespan: 150,
    region: "India, Tropics",
    benefit: "Medicinal & air-purifying properties",
    pollutantsRemoved: 4,
  },
  {
    name: "Banyan Tree",
    scientificName: "Ficus benghalensis",
    co2Absorption: 18.4,
    lifespan: 200,
    region: "India",
    benefit: "Massive canopy, excellent for urban cooling",
    pollutantsRemoved: 3,
  },
  {
    name: "Arjuna Tree",
    scientificName: "Terminalia arjuna",
    co2Absorption: 15.2,
    lifespan: 80,
    region: "India (riverbanks)",
    benefit: "Known for stabilizing river banks & soil",
    pollutantsRemoved: 2,
  },
  {
    name: "Ashoka Tree",
    scientificName: "Saraca asoca",
    co2Absorption: 13.5,
    lifespan: 60,
    region: "South Asia",
    benefit: "Reduces noise & pollution",
    pollutantsRemoved: 3,
  },
  {
    name: "Mango Tree",
    scientificName: "Mangifera indica",
    co2Absorption: 12.8,
    lifespan: 100,
    region: "Tropical & Subtropical",
    benefit: "Provides fruit and shade",
    pollutantsRemoved: 2,
  },
  {
    name: "Saptaparni",
    scientificName: "Alstonia scholaris",
    co2Absorption: 12.1,
    lifespan: 60,
    region: "India, SE Asia",
    benefit: "Medicinal & used in Ayurveda",
    pollutantsRemoved: 2,
  },
  {
    name: "Indian Almond",
    scientificName: "Terminalia catappa",
    co2Absorption: 11.4,
    lifespan: 60,
    region: "Coastal Asia",
    benefit: "Excellent for shoreline protection",
    pollutantsRemoved: 3,
  },
  {
    name: "Karanj Tree",
    scientificName: "Pongamia pinnata",
    co2Absorption: 10.9,
    lifespan: 70,
    region: "India",
    benefit: "Used for biodiesel & reforestation",
    pollutantsRemoved: 2,
  },
  {
    name: "Teak Tree",
    scientificName: "Tectona grandis",
    co2Absorption: 9.7,
    lifespan: 80,
    region: "South Asia",
    benefit: "Strong carbon sink & timber source",
    pollutantsRemoved: 1,
  },
];

const COLORS = [
  "#34D399", "#60A5FA", "#F59E0B", "#EF4444",
  "#10B981", "#A78BFA", "#F472B6", "#FCD34D",
  "#38BDF8", "#8B5CF6"
];

const commonBenefits = [
  "Air purification",
  "Medicinal uses",
  "Urban cooling",
  "Biodiesel source",
  "Soil stabilization",
  "Fruit production",
  "Noise reduction",
  "Shoreline protection",
  "Carbon sink",
];

const TopCO2Plants = () => {
  const [plants, setPlants] = useState([]);
  const [sortKey, setSortKey] = useState("co2Absorption");
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    setPlants(sampleData);
  }, []);

  const sortedPlants = [...plants].sort((a, b) =>
    sortAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]
  );

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <div className="p-8 bg-green-50 min-h-screen max-w-7xl mx-auto space-y-12">

      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        🌿 Top CO₂ Absorbing Plants (India)
      </h1>

      {/* 1. Details Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-green-100 select-none">
            <tr>
              {["name", "scientificName", "co2Absorption", "lifespan", "region", "benefit"].map((key) => (
                <th
                  key={key}
                  className="py-3 px-6 cursor-pointer text-left hover:bg-green-200"
                  onClick={() => handleSort(key)}
                >
                  {key === "name" ? "Name" :
                   key === "scientificName" ? "Scientific Name" :
                   key === "co2Absorption" ? "CO₂ Absorbed (kg/year)" :
                   key === "lifespan" ? "Lifespan (years)" :
                   key === "region" ? "Region" : "Benefits"}
                  {sortKey === key ? (sortAsc ? " 🔼" : " 🔽") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedPlants.map((plant, i) => (
              <tr key={i} className="border-t border-gray-200 hover:bg-green-50">
                <td className="py-2 px-6 font-semibold">{plant.name}</td>
                <td className="py-2 px-6 italic">{plant.scientificName}</td>
                <td className="py-2 px-6">{plant.co2Absorption}</td>
                <td className="py-2 px-6">{plant.lifespan}</td>
                <td className="py-2 px-6">{plant.region}</td>
                <td className="py-2 px-6 text-sm text-gray-600">{plant.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. Bar Chart of CO₂ Absorption */}
      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">CO₂ Absorption Comparison</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={plants}>
            <XAxis dataKey="name" angle={-35} textAnchor="end" interval={0} height={80} />
            <YAxis label={{ value: "kg/year", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value, name, props) => [`${value} kg CO₂/year`, props.payload.benefit || "Benefit"]} />
            <Bar dataKey="co2Absorption">
              {plants.map((_, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 3. Radar Chart */}
      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">CO₂ Absorption vs. Pollutants Removed</h2>
        <ResponsiveContainer width="100%" height={450}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={plants}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 25]} />
            <Radar name="CO₂ Absorption" dataKey="co2Absorption" stroke="#34D399" fill="#34D399" fillOpacity={0.6} />
            <Radar name="Pollutants Removed" dataKey="pollutantsRemoved" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </section>

      {/* 4. Plant lifespan distribution chart */}
      <section className="bg-white p-6 shadow-md rounded-lg max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">Plant Lifespan Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={plants}>
            <XAxis dataKey="name" angle={-35} textAnchor="end" interval={0} height={100} />
            <YAxis label={{ value: "Lifespan (years)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Bar dataKey="lifespan" fill="#60A5FA" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 5. Benefits summary badges */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Common Benefits</h2>
        <div className="flex flex-wrap gap-3">
          {commonBenefits.map((benefit, i) => (
            <span
              key={i}
              className="bg-green-200 text-green-800 text-sm font-semibold px-4 py-1 rounded-full cursor-default select-none"
              title={benefit}
            >
              {benefit}
            </span>
          ))}
        </div>
      </section>

      {/* 6. Regional CO2 absorption heatmap (placeholder) */}
      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Regional CO₂ Absorption Heatmap</h2>
        <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-600 italic select-none">
          [Heatmap Visualization Placeholder – Add map integration later]
        </div>
      </section>

      {/* 7. Carbon sequestration info cards */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Carbon Sequestration Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plants.slice(0, 3).map((plant, i) => (
            <div
              key={i}
              className="bg-green-100 p-4 rounded shadow hover:scale-105 transform transition cursor-pointer"
              title={`Scientific Name: ${plant.scientificName}`}
            >
              <h3 className="text-lg font-bold mb-1">{plant.name}</h3>
              <p className="text-sm mb-2">{plant.benefit}</p>
              <p className="text-sm font-semibold">CO₂ Absorbed: {plant.co2Absorption} kg/year</p>
              <p className="text-sm font-semibold">Lifespan: {plant.lifespan} years</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Importance of urban trees */}
      <section className="bg-green-50 p-6 rounded-lg shadow-md text-gray-800 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Why Urban Trees Are Vital</h2>
        <p>
          Urban trees absorb large amounts of CO₂, reduce urban heat, improve air quality,
          and enhance mental well-being. Planting trees in urban spaces is a powerful climate solution.
        </p>
      </section>

      {/* 9. Tips for maximizing CO2 absorption */}
      <section className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Tips to Maximize CO₂ Absorption from Plants</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Choose native species suited for your local climate and soil.</li>
          <li>Include a range of tree ages for constant absorption over time.</li>
          <li>Maintain healthy soil using mulches and compost.</li>
          <li>Water regularly during dry seasons to promote growth.</li>
          <li>Protect young trees from pests and damage.</li>
        </ul>
      </section>

      {/* 10. Call to action */}
      <section className="bg-green-700 p-8 rounded-lg shadow-lg text-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">🌳 Join the Green Movement</h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Plant trees, support reforestation, and spread awareness for a healthier planet.
        </p>
        <button
          onClick={() => window.open("/get-involved", "_blank")}
          className="px-10 py-3 bg-yellow-400 rounded-full text-green-900 font-semibold hover:bg-yellow-300 transition"
        >
          Get Involved
        </button>
      </section>

    </div>
  );
};

export default TopCO2Plants;
