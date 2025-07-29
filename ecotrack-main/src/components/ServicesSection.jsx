// import React from "react";

// const ServicesSection = () => {
//   return (
//     <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
//       <h2 className="text-3xl font-semibold text-center">Our Services</h2>
//       <p className="mt-2 text-center">Empowering green living with digital tools.</p>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTools, FaHardHat, FaPaintRoller, FaWrench, FaDraftingCompass, FaCogs } from "react-icons/fa";

const services = [
  { icon: <FaTools />, title: "General Construction", description: "All-purpose construction services for residential and commercial spaces." },
  { icon: <FaHardHat />, title: "Civil Engineering", description: "Foundations, roads, bridges and all heavy engineering tasks." },
  { icon: <FaPaintRoller />, title: "Interior & Exterior Design", description: "Creative interior and stunning exterior design services." },
  { icon: <FaWrench />, title: "Plumbing & Electrical", description: "All types of plumbing and electrical setup and repair." },
  { icon: <FaDraftingCompass />, title: "Architecture Planning", description: "Innovative architectural plans that suit your goals." },
  { icon: <FaCogs />, title: "Project Management", description: "End-to-end project execution with supervision." }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-4xl text-green-600 mb-4 mx-auto">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
