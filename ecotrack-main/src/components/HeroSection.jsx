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

// import React from "react";
//  import { motion } from "framer-motion";
//  import { FaLeaf, FaBolt, FaRecycle } from "react-icons/fa";
//  import { Swiper, SwiperSlide } from "swiper/react";
//  import "swiper/css";
// import "swiper/css/navigation";
//  import { Navigation, Autoplay } from "swiper/modules";

//  const HeroSection = () => {
//   const slides = [
//     {
//       img: "/images/slide1.jpg",
//       title: "Building a Greener Future",
//       desc: "Track and reduce your carbon footprint with EcoTrack."
//     },
//     {
//       img: "/images/slide2.jpg",
//       title: "Eco Projects in Action",
//       desc: "Explore real-time environmental data and solutions."
//     },
//     {
//       img: "/images/slide3.jpg",
//       title: "Empowering Sustainable Living",
//       desc: "Join the movement for a cleaner planet."
//     }
//   ];

//   return (
//     <section className="w-full h-[100vh] relative overflow-hidden">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         autoplay={{ delay: 4000 }}
//         loop={true}
//         className="h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-full bg-cover bg-center flex items-center justify-center text-white px-6"
//               style={{ backgroundImage: `url(${slide.img})` }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center max-w-3xl bg-black bg-opacity-50 p-6 rounded-2xl"
//               >
//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
//                 <p className="text-lg md:text-xl mb-6">{slide.desc}</p>
//                 <div className="flex flex-col md:flex-row gap-4 justify-center">
//                   <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full shadow-md">
//                     Explore Projects
//                   </button>
//                   <button className="bg-white hover:bg-gray-100 text-green-700 py-2 px-6 rounded-full shadow-md">
//                     Get a Quote
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-10 text-white text-xl">
//         <div className="flex items-center gap-2">
//           <FaLeaf className="text-green-400" /> Eco-Friendly
//         </div>
//         <div className="flex items-center gap-2">
//           <FaBolt className="text-yellow-400" /> Energy Efficient
//         </div>
//         <div className="flex items-center gap-2">
//           <FaRecycle className="text-blue-400" /> Sustainable
//         </div>
//       </div>
//     </section>
//   );
//  };

//  export default HeroSection;




import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaBolt, FaRecycle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

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

const heroIcons = [
  { icon: <FaLeaf className="text-green-400" />, label: "Eco-Friendly" },
  { icon: <FaBolt className="text-yellow-400" />, label: "Energy Efficient" },
  { icon: <FaRecycle className="text-blue-400" />, label: "Sustainable" }
];

const HeroSection = () => (
  <section className="w-full h-[100vh] relative overflow-hidden select-none">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4500 }}
      loop={true}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {/* Beautiful gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-transparent to-black opacity-70"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center max-w-3xl mx-auto py-12 px-6 rounded-3xl backdrop-blur-lg bg-black/60 bg-opacity-80 shadow-2xl"
            >
              {/* Big animated heading */}
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-gray-200 font-medium"
              >
                {slide.desc}
              </motion.p>
              {/* CTA buttons with icons */}
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="bg-green-600 hover:bg-green-700 active:scale-95 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-200 font-semibold flex items-center gap-2 text-lg">
                  <FaLeaf className="text-white" /> Explore Projects
                </button>
                <button className="bg-white hover:bg-gray-100 active:scale-95 text-green-800 py-3 px-8 rounded-full shadow-lg transition-all duration-200 font-semibold flex items-center gap-2 text-lg">
                  <FaRecycle className="text-green-600" /> Get a Quote
                </button>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* Animated eco badges */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 1 }}
      className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-8 text-white text-xl z-20"
    >
      {heroIcons.map((item, i) => (
        <div key={i} className="flex items-center gap-2 bg-black/50 px-5 py-2 rounded-full shadow backdrop-blur-md border border-gray-700">
          {item.icon}
          <span className="font-semibold text-white">{item.label}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default HeroSection;
