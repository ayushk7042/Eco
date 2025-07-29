// import React from "react";

// const StatsSection = () => {
//   return (
//     <section className="py-12 bg-gray-200 dark:bg-gray-700 text-center">
//       <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
//       <p className="text-xl">Over 1,000,000 kg CO₂ saved by users!</p>
//     </section>
//   );
// };

// export default StatsSection;

// src/components/StatsSection.jsx
import React from "react";
import { FaLeaf, FaProjectDiagram, FaUsers, FaGlobe } from "react-icons/fa";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const statsData = [
  {
    id: 1,
    icon: <FaLeaf className="text-green-600 text-4xl" />,
    label: "Trees Planted",
    value: 12500,
    suffix: "+",
  },
  {
    id: 2,
    icon: <FaProjectDiagram className="text-blue-600 text-4xl" />,
    label: "Green Projects",
    value: 320,
    suffix: "+",
  },
  {
    id: 3,
    icon: <FaUsers className="text-yellow-500 text-4xl" />,
    label: "Active Volunteers",
    value: 750,
    suffix: "+",
  },
  {
    id: 4,
    icon: <FaGlobe className="text-purple-600 text-4xl" />,
    label: "Cities Impacted",
    value: 85,
    suffix: "+",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-100 py-16" id="stats">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800" data-aos="fade-up">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {statsData.map(({ id, icon, label, value, suffix }) => (
            <div key={id} className="bg-white shadow-xl rounded-2xl p-6" data-aos="zoom-in" data-aos-delay={id * 100}>
              <div className="mb-3">{icon}</div>
              <h3 className="text-2xl font-bold text-gray-700">
                <CountUp end={value} duration={3} suffix={suffix} />
              </h3>
              <p className="text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
