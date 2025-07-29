// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="py-12 text-center bg-blue-100 dark:bg-blue-900">
//       <h1 className="text-4xl font-bold">Welcome to EcoTrack</h1>
//       <p className="mt-4 text-lg">Track and reduce your carbon footprint.</p>
//     </section>
//   );
// };

// export default HeroSection;

// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaBolt, FaRecycle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HeroSection = () => {
  const slides = [
    {
      img: "/images/slide1.jpg",
      title: "Building a Greener Future",
      desc: "Track and reduce your carbon footprint with EcoTrack."
    },
    {
      img: "/images/slide2.jpg",
      title: "Eco Projects in Action",
      desc: "Explore real-time environmental data and solutions."
    },
    {
      img: "/images/slide3.jpg",
      title: "Empowering Sustainable Living",
      desc: "Join the movement for a cleaner planet."
    }
  ];

  return (
    <section className="w-full h-[100vh] relative overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white px-6"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl bg-black bg-opacity-50 p-6 rounded-2xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-md">
                    Explore Projects
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-green-700 py-2 px-6 rounded-full shadow-md">
                    Get a Quote
                  </button>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-10 text-white text-xl">
        <div className="flex items-center gap-2">
          <FaLeaf className="text-green-400" /> Eco-Friendly
        </div>
        <div className="flex items-center gap-2">
          <FaBolt className="text-yellow-400" /> Energy Efficient
        </div>
        <div className="flex items-center gap-2">
          <FaRecycle className="text-blue-400" /> Sustainable
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
