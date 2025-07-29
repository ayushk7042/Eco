// import React from "react";

// const GallerySection = () => {
//   return (
//     <section className="py-12 bg-white dark:bg-black">
//       <h2 className="text-2xl font-semibold text-center mb-6">Gallery</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
//         <div className="bg-gray-300 h-40"></div>
//         <div className="bg-gray-300 h-40"></div>
//         <div className="bg-gray-300 h-40"></div>
//         <div className="bg-gray-300 h-40"></div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { ImageIcon } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Industrial"];

const images = [
  { src: "/images/res1.jpg", category: "Residential", title: "Modern Villa" },
  { src: "/images/res2.jpg", category: "Residential", title: "Eco Bungalow" },
  { src: "/images/com1.jpg", category: "Commercial", title: "Office Complex" },
  { src: "/images/com2.jpg", category: "Commercial", title: "Tech Park" },
  { src: "/images/ind1.jpg", category: "Industrial", title: "Green Factory" },
  { src: "/images/ind2.jpg", category: "Industrial", title: "Solar Plant" },
];

export default function FilteredGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="py-16 px-6 bg-gray-100" id="gallery">
      <h2 className="text-3xl font-bold text-center mb-10">Project Gallery</h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-medium transition duration-300 shadow ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-green-100"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg relative cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-lg font-semibold">
                <ImageIcon className="w-8 h-8 mb-2 animate-pulse" />
                {img.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          mainSrc={filteredImages[lightboxIndex].src}
          nextSrc={filteredImages[(lightboxIndex + 1) % filteredImages.length].src}
          prevSrc={
            filteredImages[(lightboxIndex + filteredImages.length - 1) % filteredImages.length].src
          }
          onCloseRequest={() => setLightboxIndex(-1)}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + filteredImages.length - 1) % filteredImages.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
          }
          imageTitle={filteredImages[lightboxIndex].title}
        />
      )}
    </div>
  );
}
