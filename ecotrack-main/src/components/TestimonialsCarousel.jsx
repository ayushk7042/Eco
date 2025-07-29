// import React from "react";

// const TestimonialsCarousel = () => {
//   return (
//     <section className="py-12 bg-green-100 dark:bg-green-900 text-center">
//       <h2 className="text-2xl font-bold">What Our Users Say</h2>
//       <p className="mt-4">"EcoTrack changed how I think about my carbon impact!"</p>
//     </section>
//   );
// };

// export default TestimonialsCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ayush Kumar",
    role: "CEO, BuildCon",
    image: "/client1.jpg",
    rating: 5,
    quote:
      "Exceptional work! The team delivered the project ahead of schedule with superb quality. Highly recommend."
  },
  {
    name: "Priya Sharma",
    role: "Architect",
    image: "/client2.jpg",
    rating: 4,
    quote: "Professional and responsive. A pleasure to work with. Great results and attention to detail."
  },
  {
    name: "Ravi Patel",
    role: "Real Estate Developer",
    image: "/client3.jpg",
    rating: 5,
    quote:
      "Top-notch service from start to finish. Will definitely partner again for future projects."
  }
];

export default function Testimonials() {
  return (
    <div className="py-16 bg-gray-100" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-10">Client Testimonials</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="max-w-2xl mx-auto"
      >
        {testimonials.map((client, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{client.role}</p>
              <p className="text-gray-700 italic mb-4">"{client.quote}"</p>
              <div className="flex justify-center gap-1">
                {Array.from({ length: client.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
