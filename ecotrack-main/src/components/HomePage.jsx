

// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import axios from "axios";
// import WorldEmissionsMap from "./WorldEmissionsMap";
// import LiveClimateStats from "./LiveClimateStats";
// import ImpactScorecard from "./ImpactScorecard";
// import EcoEventsSlider from "./EcoEventsSlider";

// const testimonials = [
//   {
//     name: "Aarav Singh",
//     quote: "EcoTrack helped me cut down my emissions by 35% in 3 months!",
//     city: "Delhi"
//   },
//   {
//     name: "Priya Mehta",
//     quote: "I never realized my daily habits mattered this much. Thank you!",
//     city: "Mumbai"
//   },
//   {
//     name: "Rahul Jain",
//     quote: "Beautiful interface, powerful impact. Love using EcoTrack!",
//     city: "Bangalore"
//   }
// ];

// const HomePage = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.rss2json.com/v1/api.json?rss_url=https://www.climatechangenews.com/feed/"
//         );
//         const items = res.data.items.slice(0, 5);
//         setNews(items);
//       } catch (error) {
//         console.error("Error fetching climate news", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-white">

      
// {/* 🌍 Earth Impact Info Slider */}
// <div className="bg-gradient-to-r from-green-100 to-blue-100 py-12 px-6 text-center">
//   <h1 className="text-4xl font-bold text-green-800 mb-6">The Planet Needs You 🌱</h1>

//   <Carousel
//     autoPlay
//     interval={1000}
//     infiniteLoop
//     showThumbs={false}
//     showStatus={false}
//     showIndicators={false}
//   >
//     {[
//       {
//         title: "Global Temperature Rise",
//         fact: "The Earth’s average temperature has increased by 1.2°C since the late 19th century.",
//         icon: "🌡️"
//       },
//       {
//         title: "Melting Ice Caps",
//         fact: "Arctic sea ice is declining at a rate of 13% per decade.",
//         icon: "🧊"
//       },
//       {
//         title: "Deforestation",
//         fact: "We lose around 10 million hectares of forest each year — that’s about the size of Portugal.",
//         icon: "🌳"
//       },
//       {
//         title: "Ocean Acidification",
//         fact: "30% of the CO₂ released into the atmosphere is absorbed by oceans, causing harm to marine life.",
//         icon: "🌊"
//       }
//     ].map((slide, i) => (
//       <div key={i} className="px-6">
//         <div className="bg-white shadow-xl p-8 rounded-xl max-w-3xl mx-auto">
//           <div className="text-5xl mb-4">{slide.icon}</div>
//           <h3 className="text-2xl font-bold text-green-700 mb-2">{slide.title}</h3>
//           <p className="text-gray-700 text-lg">{slide.fact}</p>
//         </div>
//       </div>
//     ))}
//   </Carousel>

//   <button
//     onClick={() => window.location.href = "/calculator"}
//     className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg"
//   >
//     Track My Impact
//   </button>
// </div>


//       {/* 💡 Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-8">
//         {[
//           { title: "Track Emissions", icon: "📈", route: "/calculator" },
//           { title: "View Dashboard", icon: "📊", route: "/dashboard" },
//           { title: "Top CO₂ Absorbing Plants", icon: "🌱", route: "/plants" }
//         ].map((feature, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transition-transform text-center cursor-pointer border border-gray-200"
//             onClick={() => window.location.href = feature.route}
//           >
//             <div className="text-5xl mb-3">{feature.icon}</div>
//             <h3 className="text-xl font-bold text-green-700">{feature.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* 📖 About Section */}
//       <div className="my-16 px-10 flex flex-col md:flex-row items-center gap-10">
//         <img
//           src="/images/earth.jpg"
//           className="rounded-lg w-full md:w-1/2 shadow-lg"
//           alt="Earth"
//         />
//         <div className="text-gray-700 text-lg leading-7">
//           <h2 className="text-3xl font-bold text-green-700 mb-4">Why EcoTrack?</h2>
//           <p>
//             EcoTrack helps you take control of your carbon emissions by tracking
//             daily activities like electricity usage, transport, and food habits.
//             Understand your personal impact and get suggestions to reduce it.
//           </p>
//           <p className="mt-4">
//             Together, we can make a significant change for our planet’s future.
//           </p>
//         </div>
//       </div>

//       {/* 🌟 User Testimonials */}
//       <div className="bg-green-50 py-12 px-8">
//         <h2 className="text-3xl font-bold text-center text-green-800 mb-8">User Testimonials</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((t, i) => (
//             <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
//               <p className="text-gray-700 italic">“{t.quote}”</p>
//               <p className="text-green-800 font-semibold mt-4">{t.name} — {t.city}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 📰 Climate News Ticker */}
//       <div className="bg-gray-100 border-t border-b py-4 mt-10">
//         <div className="overflow-hidden whitespace-nowrap">
//           <div className="animate-marquee flex gap-12 text-sm text-blue-700 font-medium px-4">
//             {news.length > 0
//               ? news.map((item, index) => (
//                   <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                     🌍 {item.title}
//                   </a>
//                 ))
//               : <span>Loading climate news...</span>
//             }
//           </div>
//         </div>
//       </div>

//       {/* 📊 Live Global Climate Stats */}
//       <LiveClimateStats />

//       {/* 🏆 User Impact Scorecard */}
//       <ImpactScorecard />

//       {/* 📅 Upcoming Events */}
//       <EcoEventsSlider />

//       {/* 🔁 News ticker animation */}
//       <style>{`
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 30s linear infinite;
//         }
//         @keyframes marquee {
//           0% { transform: translateX(100%) }
//           100% { transform: translateX(-100%) }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;




// src/pages/HomePage.jsx
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import HeroSection from "../components/HeroSection";
// import ProjectsSection from "../components/ProjectsSection";
// import ServicesSection from "../components/ServicesSection";
// import TestimonialsCarousel from "../components/TestimonialsCarousel";
// import GallerySection from "../components/GallerySection";
// import DarkModeToggle from "../components/DarkModeToggle";
// import StatsSection from "../components/StatsSection";
// import ClientLogos from "../components/ClientLogos";
// import TimelineSection from "../components/TimelineSection";
// import FilteredGallery from "../components/FilteredGallery";

// import { Calculator } from "lucide-react";
// import { Link } from "react-router-dom";


// const HomePage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const [countdown, setCountdown] = useState(10);
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);
//   const [visibleNews, setVisibleNews] = useState(3);
//   const [activeFaq, setActiveFaq] = useState(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const newsItems = [
//     { title: "New solar farms approved", summary: "More states join the green movement...", url: "#" },
//     { title: "Ocean cleanup expands", summary: "Technology now targeting river plastic too...", url: "#" },
//     { title: "Carbon tax introduced", summary: "Countries adopting carbon pricing globally...", url: "#" },
//     { title: "Urban trees initiative", summary: "Cities plant trees to combat heat islands...", url: "#" },
//   ];

//   const faqData = [
//     { question: "What is a carbon footprint?", answer: "It’s the total greenhouse gases emitted by your actions." },
//     { question: "How can I reduce it?", answer: "Use less energy, drive less, and recycle more." },
//     { question: "Are electric cars better?", answer: "Yes, especially when charged from renewable sources." },
//   ];

//   const quote = {
//     text: "The Earth is what we all have in common.",
//     author: "Wendell Berry"
//   };

//   const toggleFaq = (idx) => {
//     setActiveFaq(activeFaq === idx ? null : idx);
//   };

//   const handleSubscribe = () => {
//     if (email) {
//       setSubscribed(true);
//       setEmail("");
//     }
//   };

//   return (
//     <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
//       <DarkModeToggle />
//       <HeroSection />
//       <StatsSection />
//       <ClientLogos />
//       <ServicesSection />
//       <ProjectsSection />
//       <TimelineSection />
//       <FilteredGallery />
//       <TestimonialsCarousel />
//       <GallerySection />

//       {/* 🌍 World Emissions Map */}
//       <section className="py-16 px-6" data-aos="zoom-in">
//         <h2 className="text-4xl font-bold mb-6 text-center">🌍 World Emissions Map</h2>
//         <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md text-center">
//           <p className="mb-4">Interactive map showing carbon emissions per country.</p>
//           <button className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700" onClick={() => alert("Feature Coming Soon!")}>View Map</button>
//         </div>
//       </section>

//       {/* 🌿 Daily Eco Tip */}
//       <section className="py-16 px-6" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-green-200">🌿 Daily Eco Tip</h2>
//         <div className="bg-green-50 dark:bg-green-900 rounded-2xl p-8 text-center shadow-lg">
//           <p className="text-lg font-medium mb-4">♻️ Use reusable bags instead of plastic – a small change with big impact!</p>
//           <div className="text-sm italic">Tip refreshed every 24 hours • Swipe for more soon</div>
//         </div>
//       </section>

//       {/* 🎯 Climate Pledge */}
//       <section className="py-16 px-6" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-200">🎯 Take the Climate Pledge</h2>
//         <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8 text-center shadow-xl">
//           <p className="text-lg font-medium mb-4">Join <strong>32,000+</strong> people who’ve pledged to reduce their carbon footprint by 30% this year!</p>
//           <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700" onClick={() => alert("Thank you for pledging! 💚")}>Pledge Now</button>
//         </div>
//       </section>

//       {/* 📰 Latest News */}
//       <section className="py-12 px-6" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-6 text-center">📰 Latest Green News</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {newsItems.slice(0, visibleNews).map((item, i) => (
//             <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm">{item.summary}</p>
//               <a href={item.url} className="text-green-600 hover:underline text-sm mt-2 inline-block">Read more</a>
//             </div>
//           ))}
//         </div>
//         {visibleNews < newsItems.length && (
//           <div className="text-center mt-6">
//             <button onClick={() => setVisibleNews((prev) => prev + 3)} className="px-4 py-2 bg-green-600 text-white rounded">Load More</button>
//           </div>
//         )}
//       </section>

//       {/* ❓ FAQ Accordion */}
//       <section className="py-12 px-6" data-aos="fade-up">
//         <h2 className="text-3xl font-bold text-center mb-6">❓ Frequently Asked Questions</h2>
//         <div className="max-w-3xl mx-auto space-y-4">
//           {faqData.map((faq, idx) => (
//             <div key={idx} className="border rounded-lg overflow-hidden">
//               <button onClick={() => toggleFaq(idx)} className="w-full text-left px-4 py-3 bg-gray-100 dark:bg-gray-700 font-semibold">{faq.question}</button>
//               {activeFaq === idx && (
//                 <div className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 💬 Quote */}
//       <section className="py-12 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-4">💬 Environmental Quote</h2>
//         <blockquote className="italic text-lg max-w-xl mx-auto">“{quote.text}” – <strong>{quote.author}</strong></blockquote>
//       </section>

//       {/* 📩 Newsletter */}
//       <section className="py-12 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-4">📩 Subscribe to our Newsletter</h2>
//         <div className="flex justify-center items-center flex-wrap gap-2">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 rounded-md border w-72"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button onClick={handleSubscribe} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Subscribe</button>
//         </div>
//         {subscribed && <p className="mt-4 text-green-600 text-sm">✅ Thank you for subscribing!</p>}
//       </section>

//       {/* 🧮 Carbon Calculator */}
//       <section className="py-12 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-2">🧮 Want to Know Your Impact?</h2>
//         <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 mt-2">Calculate Your Carbon Footprint</button>
//       </section>

//       {/* 🎥 Awareness Video */}
//       <section className="py-12 px-6" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-4 text-center">🎥 Watch & Learn</h2>
//         <div className="flex justify-center">
//           <iframe width="560" height="315" src="https://www.youtube.com/embed/TG2UcxY5gzI" title="Climate Awareness" className="rounded-lg" allowFullScreen></iframe>
//         </div>
//       </section>

//       {/* 🏢 Partners */}
//       <section className="py-12 px-6" data-aos="fade-up">
//         <h2 className="text-2xl font-bold text-center mb-6">🏢 Our Partners</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//           {["🌱 GreenPeace", "🌍 UNDP", "⚡ Tesla", "☀️ SolarNow"].map((partner, i) => (
//             <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow">{partner}</div>
//           ))}
//         </div>
//       </section>

//       {/* 🙌 Volunteer CTA */}
//       <section className="py-12 px-6 text-center bg-yellow-100 dark:bg-yellow-900" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-2">🙌 Become a Volunteer</h2>
//         <p>Join us in making a difference.</p>
//         <button className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700">Join Now</button>
//       </section>

//       {/* ⏳ Countdown */}
//       <section className="py-12 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-2">⏳ Countdown to Climate Summit</h2>
//         <p className="text-4xl font-bold text-red-600">{countdown}s</p>
//       </section>

//  <Link
//       to="/calculator"
//       className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300"
//       title="Open Carbon Footprint Calculator"
//     >
//       <Calculator size={28} />
//     </Link>

//       <Link
//     to="/feedback"
//     className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
//   >
//     <span>Give Feedback</span>
//   </Link>
//     </div>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import GallerySection from "../components/GallerySection";
import DarkModeToggle from "../components/DarkModeToggle";
import StatsSection from "../components/StatsSection";
import ClientLogos from "../components/ClientLogos";
import TimelineSection from "../components/TimelineSection";
import FilteredGallery from "../components/FilteredGallery";

import Footer from "./Footer"; 
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const targetDate = new Date("2025-12-01T00:00:00").getTime();
  const [countdown, setCountdown] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [visibleNews, setVisibleNews] = useState(3);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Event Started 🎉");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const newsItems = [
    { title: "New solar farms approved", summary: "More states join the green movement...", url: "#" },
    { title: "Ocean cleanup expands", summary: "Technology now targeting river plastic too...", url: "#" },
    { title: "Carbon tax introduced", summary: "Countries adopting carbon pricing globally...", url: "#" },
    { title: "Urban trees initiative", summary: "Cities plant trees to combat heat islands...", url: "#" },
  ];

  const faqData = [
    { question: "What is a carbon footprint?", answer: "It’s the total greenhouse gases emitted by your actions." },
    { question: "How can I reduce it?", answer: "Use less energy, drive less, and recycle more." },
    { question: "Are electric cars better?", answer: "Yes, especially when charged from renewable sources." },
  ];

  const quote = {
    text: "The Earth is what we all have in common.",
    author: "Wendell Berry"
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative">
      <DarkModeToggle />
      <HeroSection />
      <StatsSection />
      <ClientLogos />
      <ServicesSection />
      <ProjectsSection />
      <TimelineSection />
      <FilteredGallery />
      <TestimonialsCarousel />
      <GallerySection />

      <section className="py-16 px-6" data-aos="zoom-in">
        <h2 className="text-4xl font-bold mb-6 text-center">🌍 World Emissions Map</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md text-center">
          <p className="mb-4">Interactive map showing carbon emissions per country.</p>
          <button className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700" onClick={() => alert("Feature Coming Soon!")}>View Map</button>
        </div>
      </section>

      <section className="py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-green-200">🌿 Daily Eco Tip</h2>
        <div className="bg-green-50 dark:bg-green-900 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-lg font-medium mb-4">♻️ Use reusable bags instead of plastic – a small change with big impact!</p>
          <div className="text-sm italic">Tip refreshed every 24 hours • Swipe for more soon</div>
        </div>
      </section>

      <section className="py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-200">🎯 Take the Climate Pledge</h2>
        <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8 text-center shadow-xl">
          <p className="text-lg font-medium mb-4">Join <strong>32,000+</strong> people who’ve pledged to reduce their carbon footprint by 30% this year!</p>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700" onClick={() => alert("Thank you for pledging! 💚")}>Pledge Now</button>
        </div>
      </section>

      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">📰 Latest Green News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.slice(0, visibleNews).map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.summary}</p>
              <a href={item.url} className="text-green-600 hover:underline text-sm mt-2 inline-block">Read more</a>
            </div>
          ))}
        </div>
        {visibleNews < newsItems.length && (
          <div className="text-center mt-6">
            <button onClick={() => setVisibleNews((prev) => prev + 3)} className="px-4 py-2 bg-green-600 text-white rounded">Load More</button>
          </div>
        )}
      </section>

      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-6">❓ Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button onClick={() => toggleFaq(idx)} className="w-full text-left px-4 py-3 bg-gray-100 dark:bg-gray-700 font-semibold">{faq.question}</button>
              {activeFaq === idx && (
                <div className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">💬 Environmental Quote</h2>
        <blockquote className="italic text-lg max-w-xl mx-auto">“{quote.text}” – <strong>{quote.author}</strong></blockquote>
      </section>

      <section className="py-12 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">📩 Subscribe to our Newsletter</h2>
        <div className="flex justify-center items-center flex-wrap gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border w-72"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Subscribe</button>
        </div>
        {subscribed && <p className="mt-4 text-green-600 text-sm">✅ Thank you for subscribing!</p>}
      </section>

      <section className="py-12 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-2">🧮 Want to Know Your Impact?</h2>
        <Link to="/calculator">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 mt-2">
            Calculate Your Carbon Footprint
          </button>
        </Link>
      </section>

      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-center">🎥 Watch & Learn</h2>
        <div className="flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TG2UcxY5gzI" title="Climate Awareness" className="rounded-lg" allowFullScreen></iframe>
        </div>
      </section>

      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-center mb-6">🏢 Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["🌱 GreenPeace", "🌍 UNDP", "⚡ Tesla", "☀️ SolarNow"].map((partner, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow">{partner}</div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 text-center bg-yellow-100 dark:bg-yellow-900" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-2">🙌 Become a Volunteer</h2>
        <p>Join us in making a difference.</p>
        <button className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700">Join Now</button>
      </section>

      <section className="py-12 px-6 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-2">⏳ Countdown to Climate Summit</h2>
        <p className="text-4xl font-bold text-red-600">{countdown}</p>
      </section>

<Link
        to="/feedback"
        className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
      >
        Give Feedback
      </Link>

      <Link
        to="/calculator"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300"
        title="Open Carbon Footprint Calculator"
      >
        <Calculator size={28} />
      </Link>
   
   <Footer />
    </div>
  );
};

export default HomePage;
