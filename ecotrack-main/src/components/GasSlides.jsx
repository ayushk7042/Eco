
// import React from "react";
// import GasCard from "./GasCard";
// import GasRadarChart from "./GasRadarChart";
// import GasFactsMarquee from "./GasFactsMarquee";

// const gases = [
//   {
//     name: "Carbon Dioxide",
//     formula: "CO₂",
//     source: "Fossil fuels, deforestation",
//     impact: "Baseline (1x)",
//     lifespan: "100+ years",
//     icon: "🟤",
//     color: "#A0AEC0",
//     fact: "CO₂ accounts for over 75% of global greenhouse gas emissions."
//   },
//   {
//     name: "Methane",
//     formula: "CH₄",
//     source: "Livestock, landfills",
//     impact: "25x CO₂",
//     lifespan: "12 years",
//     icon: "🟢",
//     color: "#48BB78",
//     fact: "Methane is over 80 times more potent than CO₂ in the first 20 years."
//   },
//   {
//     name: "Nitrous Oxide",
//     formula: "N₂O",
//     source: "Fertilizers, biomass burning",
//     impact: "298x CO₂",
//     lifespan: "114 years",
//     icon: "🔵",
//     color: "#4299E1",
//     fact: "Used in anesthesia but a major contributor to ozone depletion."
//   },
//   {
//     name: "CFCs",
//     formula: "CFC-12",
//     source: "Refrigerants (now banned)",
//     impact: "10,900x CO₂",
//     lifespan: "100+ years",
//     icon: "🟣",
//     color: "#9F7AEA",
//     fact: "CFCs are banned in most countries due to ozone layer damage."
//   },
//   {
//     name: "Ozone",
//     formula: "O₃",
//     source: "Smog, VOCs, UV reactions",
//     impact: "Indirect",
//     lifespan: "Short-lived",
//     icon: "🟠",
//     color: "#ED8936",
//     fact: "Ground-level ozone causes respiratory issues and crops damage."
//   }
// ];

// const GasSlides = () => {
//   return (
//     <div className="p-6 bg-gradient-to-br from-green-50 to-white min-h-screen">
//       <h1 className="text-3xl font-bold text-green-700 mb-4">
//         🌍 Greenhouse Gases Overview
//       </h1>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//         {gases.map((gas, idx) => (
//           <GasCard key={idx} gas={gas} />
//         ))}
//       </div>

//       <div className="mt-10">
//         <GasRadarChart />
//       </div>

//       <div className="mt-10">
//         <GasFactsMarquee gases={gases} />
//       </div>
//     </div>
//   );
// };

// export default GasSlides;





import React from "react";
import GasCard from "./GasCard";
import GasRadarChart from "./GasRadarChart";
import GasFactsMarquee from "./GasFactsMarquee";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Cell } from "recharts";

const gases = [
  {
    name: "Carbon Dioxide",
    formula: "CO₂",
    source: "Fossil fuels, deforestation",
    impact: 1,
    impactText: "Baseline (1x)",
    lifespan: "100+ years",
    icon: "🟤",
    color: "#A0AEC0",
    fact: "CO₂ accounts for over 75% of global greenhouse gas emissions."
  },
  {
    name: "Methane",
    formula: "CH₄",
    source: "Livestock, landfills",
    impact: 25,
    impactText: "25x CO₂",
    lifespan: "12 years",
    icon: "🟢",
    color: "#48BB78",
    fact: "Methane is over 80 times more potent than CO₂ in the first 20 years."
  },
  {
    name: "Nitrous Oxide",
    formula: "N₂O",
    source: "Fertilizers, biomass burning",
    impact: 298,
    impactText: "298x CO₂",
    lifespan: "114 years",
    icon: "🔵",
    color: "#4299E1",
    fact: "Used in anesthesia but a major contributor to ozone depletion."
  },
  {
    name: "CFCs",
    formula: "CFC-12",
    source: "Refrigerants (now banned)",
    impact: 10900,
    impactText: "10,900x CO₂",
    lifespan: "100+ years",
    icon: "🟣",
    color: "#9F7AEA",
    fact: "CFCs are banned in most countries due to ozone layer damage."
  },
  {
    name: "Ozone",
    formula: "O₃",
    source: "Smog, VOCs, UV reactions",
    impact: 0, // indirect
    impactText: "Indirect",
    lifespan: "Short-lived",
    icon: "🟠",
    color: "#ED8936",
    fact: "Ground-level ozone causes respiratory issues and crop damage."
  }
];

const impactBarData = gases
  .filter(g => g.impact > 0)
  .map(({ name, impact, color }) => ({ name, impact, color }));

const GasSlides = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-white min-h-screen space-y-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        🌍 Greenhouse Gases Overview
      </h1>

      {/* Existing Gas Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {gases.map((gas, idx) => (
          <GasCard key={idx} gas={gas} />
        ))}
      </div>

      {/* Existing Radar Chart */}
      <div className="mt-10">
        <GasRadarChart />
      </div>

      {/* Existing Facts Marquee */}
      <div className="mt-10">
        <GasFactsMarquee gases={gases} />
      </div>

      {/* 1. Animated Gas Impact Bar Chart */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">🏆 Gas Global Warming Potential (GWP) Comparison</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={impactBarData} layout="vertical" margin={{ left: 40, right: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="impact" animationDuration={1500} >
              {impactBarData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* 2. Lifespan Comparison Timeline */}
      <section className="bg-green-50 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">⏳ Lifespan Comparison of Gases</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800 max-w-xl mx-auto">
          {gases.map(({ name, lifespan, icon }, idx) => (
            <li key={idx} className="text-lg">{icon} <strong>{name}:</strong> {lifespan}</li>
          ))}
        </ul>
      </section>

      {/* 3. Emission Sources Illustration */}
      <section className="bg-white rounded-lg p-6 shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">🏭 Common Emission Sources</h2>
        <p className="text-gray-600 mb-4">
          Greenhouse gases originate from sources like fossil fuel combustion, agriculture, industrial processes, and waste management.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {gases.map(({ name, source }, idx) => (
            <li key={idx}><strong>{name}:</strong> {source}</li>
          ))}
        </ul>
      </section>

      {/* 4. Health & Environmental Effects Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">⚠️ Health & Environmental Effects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {gases.map(({ name, fact, icon, color }, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition cursor-default select-none border-l-8" style={{ borderColor: color }}>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span>{icon}</span> {name}
              </h3>
              <p className="text-gray-700">{fact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Historical Atmospheric Concentration Graph (Placeholder) */}
      <section className="bg-green-50 rounded-lg p-6 shadow max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">📈 Historical Atmospheric Concentrations</h2>
        <div className="bg-white h-64 rounded flex items-center justify-center italic text-gray-400 select-none">
          Chart placeholder for CO₂, CH₄, N₂O atmospheric concentrations over time.
        </div>
      </section>

      {/* 6. Global Warming Potential Explainer */}
      <section className="bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">🌡️ What is Global Warming Potential (GWP)?</h2>
        <p>
          GWP measures how much heat a greenhouse gas traps in the atmosphere over a specific time, relative to CO₂.
          Gases with higher GWP have a greater impact on warming per unit mass.
        </p>
      </section>

      {/* 7. Gas Reduction Technologies */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">⚙️ Gas Reduction Technologies</h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto space-y-3 text-gray-700">
          <li><strong>Carbon capture and storage (CCS):</strong> Captures CO₂ emissions from industrial sources.</li>
          <li><strong>Agricultural methane management:</strong> Improved livestock feeding and waste treatment.</li>
          <li><strong>Refrigerant replacement:</strong> Phasing out CFCs and HFCs with safer alternatives.</li>
          <li><strong>Renewable energy:</strong> Solar and wind reduce fossil fuel reliance.</li>
        </ul>
      </section>

      {/* 8. Interactive Quiz Teaser (Placeholder) */}
      <section className="bg-green-50 rounded-lg p-6 shadow text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">❓ Test Your Knowledge</h2>
        <p>Engage with our interactive quiz to learn about greenhouse gases and their impacts!</p>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Take the Quiz (Coming Soon)
        </button>
      </section>

      {/* 9. Policy & Regulation Highlights */}
      <section className="bg-white rounded-lg p-6 shadow max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">📜 Policy & Regulations</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Paris Agreement aiming to limit global temperature rise below 2°C.</li>
          <li>Kyoto Protocol to reduce greenhouse gas emissions worldwide.</li>
          <li>Local initiatives promoting renewable energy and emission caps.</li>
        </ul>
      </section>

      {/* 10. Call to Action Section */}
      <section className="bg-green-700 p-8 rounded-lg shadow-lg text-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">🌱 Join the Fight Against Climate Change</h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Reduce your carbon footprint, support sustainable practices, and spread awareness.
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

export default GasSlides;
