// import React from "react";

// const FilteredGallery = () => {
//   return (
//     <section className="py-12 px-4 bg-gray-100 dark:bg-gray-900">
//       <h2 className="text-2xl font-semibold text-center mb-6">Filter Projects by Category</h2>
//       <div className="flex justify-center gap-4 mb-4">
//         <button className="px-4 py-2 bg-green-500 text-white rounded">All</button>
//         <button className="px-4 py-2 bg-green-500 text-white rounded">Residential</button>
//         <button className="px-4 py-2 bg-green-500 text-white rounded">Commercial</button>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-gray-400 h-40"></div>
//         <div className="bg-gray-400 h-40"></div>
//         <div className="bg-gray-400 h-40"></div>
//         <div className="bg-gray-400 h-40"></div>
//       </div>
//     </section>
//   );
// };

// export default FilteredGallery;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const categories = ["All", "Residential", "Commercial", "Industrial"];

const galleryItems = [
  { id: 1, src: "/gallery1.jpg", category: "Residential", title: "Modern Villa" },
  { id: 2, src: "/gallery2.jpg", category: "Commercial", title: "Office Space" },
  { id: 3, src: "/gallery3.jpg", category: "Industrial", title: "Factory Plant" },
  { id: 4, src: "/gallery4.jpg", category: "Residential", title: "Luxury Apartment" },
  { id: 5, src: "/gallery5.jpg", category: "Commercial", title: "Shopping Complex" },
  { id: 6, src: "/gallery6.jpg", category: "Industrial", title: "Warehouse" },
];

export default function FilterGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-12 bg-white" id="gallery">
      <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
        layout
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="rounded overflow-hidden shadow-lg cursor-pointer relative group"
              whileHover={{ scale: 1.03 }}
              layout
              onClick={() => handleImageClick(index)}
            >
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                {item.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={filteredItems[photoIndex].src}
          nextSrc={filteredItems[(photoIndex + 1) % filteredItems.length].src}
          prevSrc={
            filteredItems[(photoIndex + filteredItems.length - 1) % filteredItems.length].src
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + filteredItems.length - 1) % filteredItems.length)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % filteredItems.length)}
        />
      )}
    </div>
  );
}