// import React from "react";

// const ProjectsSection = () => {
//   return (
//     <section className="py-12 px-4 bg-white dark:bg-gray-900">
//       <h2 className="text-3xl font-semibold text-center">Our Projects</h2>
//       <p className="mt-2 text-center">Explore our sustainability initiatives.</p>
//     </section>
//   );
// };

// export default ProjectsSection;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";

const categories = ["All", "Residential", "Commercial", "Industrial"];

const allProjects = [
  { title: "Skyline Tower", category: "Commercial", description: "30-floor office space in downtown.", image: "/images/project1.jpg" },
  { title: "Green Villa", category: "Residential", description: "Eco-friendly residential homes.", image: "/images/project2.jpg" },
  { title: "Steel Plant", category: "Industrial", description: "Heavy manufacturing plant.", image: "/images/project3.jpg" },
  { title: "Sunset Apartments", category: "Residential", description: "Luxury apartment complex.", image: "/images/project4.jpg" },
  { title: "Corporate Hub", category: "Commercial", description: "Modern office block for startups.", image: "/images/project5.jpg" },
  { title: "Mega Warehouse", category: "Industrial", description: "Distribution and storage facility.", image: "/images/project6.jpg" },
];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [modalData, setModalData] = useState(null);

  const filteredProjects = allProjects.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Our Projects</h2>
        <div className="flex justify-center mb-6 flex-wrap gap-3">
          {categories.map((cat) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${selectedCategory === cat ? "bg-green-600 text-white" : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white"}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h4>
                <p className="text-gray-500 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
              onClick={handleLoadMore}
            >
              Load More
            </motion.button>
          </div>
        )}

        {modalData && (
          <Modal
            isOpen={!!modalData}
            onRequestClose={closeModal}
            className="max-w-lg mx-auto my-20 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <img src={modalData.image} alt={modalData.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{modalData.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{modalData.description}</p>
            <div className="mt-4 text-right">
              <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close</button>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
