// import React from "react";

// const TimelineSection = () => {
//   return (
//     <section className="py-12 bg-slate-50 dark:bg-slate-800 px-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Our Journey</h2>
//       <ul className="list-disc pl-8">
//         <li>2022 - Launch of EcoTrack</li>
//         <li>2023 - 10,000+ users joined</li>
//         <li>2024 - Added smart analytics</li>
//       </ul>
//     </section>
//   );
// };

// export default TimelineSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, CalendarDays, BadgeCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const timelineData = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started operations with a small team of passionate engineers.",
    icon: <Building2 className="text-blue-600" />,
  },
  {
    year: "2019",
    title: "First Residential Project",
    description: "Successfully completed our first housing project in Delhi.",
    icon: <BadgeCheck className="text-green-600" />,
  },
  {
    year: "2020",
    title: "Commercial Expansion",
    description: "Started commercial construction and increased team size.",
    icon: <BadgeCheck className="text-yellow-600" />,
  },
  {
    year: "2022",
    title: "Nationwide Projects",
    description: "Launched projects in 5+ cities across India.",
    icon: <CalendarDays className="text-red-600" />,
  },
  {
    year: "2024",
    title: "Tech-Enabled Construction",
    description: "Introduced smart tech into buildings for eco-efficiency.",
    icon: <Building2 className="text-purple-600" />,
  },
];

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Company Timeline
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-[30px] top-0 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 flex items-center justify-center shadow-lg">
                {item.icon}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.year} — {item.title}
                </h3>
                {expandedIndex === index && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
