






// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import HeroSection from "../components/HeroSection";
// import ProjectsSection from "../components/ProjectsSection";
// import GallerySection from "../components/GallerySection";
// import DarkModeToggle from "../components/DarkModeToggle";
// import StatsSection from "../components/StatsSection";
// import FilteredGallery from "../components/FilteredGallery";
// import Footer from "./Footer";
// import { Calculator } from "lucide-react";
// import { Link } from "react-router-dom";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import { scaleLinear } from "d3-scale";

// // Sample emission reduction data, ISO codes
// const emissionData = {
//   USA: 1150,
//   CHN: 450,
//   IND: 150,
//   RUS: 220,
//   BRA: 80,
//   AUS: 60,
//   ZAF: 40
//   // Add more countries with ISO_A3 codes and CO2 reduced (kt)
// };

// const HomePage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);
//   const [visibleNews, setVisibleNews] = useState(3);
//   const [activeFaq, setActiveFaq] = useState(null);

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
      
//       {/* Updated: Interactive World Emissions Map */}
//       <section className="py-16 px-6" data-aos="zoom-in">
//         <h2 className="text-4xl font-bold mb-6 text-center">🌍 World Emissions Map</h2>
//         <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-center">
//           <p className="mb-6 text-xl font-semibold text-center">
//             Click a country to see its CO₂ reduction (kilotons, 2024).
//             <br />
//             <span className="text-sm text-green-700 block">Map colors show relative CO₂ reductions.</span>
//           </p>
//           <div className="w-full flex justify-center mb-6">
//             <div className="border-4 border-green-400 rounded-lg overflow-hidden w-full max-w-2xl h-96 bg-gray-200 dark:bg-gray-900 flex items-center justify-center">
//               <ComposableMap projectionConfig={{ scale: 110 }}>
//                 <Geographies geography="https://unpkg.com/world-atlas@2.0.2/countries-110m.json">
//                   {({ geographies }) =>
//                     geographies.map(geo => {
//                       const iso = geo.properties.ISO_A3;
//                       const emission = emissionData[iso] || 0;
//                       const colorScale = scaleLinear()
//                         .domain([0, 1200])
//                         .range(["#d9f99d", "#15803d"]);
//                       return (
//                         <Geography
//                           key={geo.rsmKey}
//                           geography={geo}
//                           fill={emission ? colorScale(emission) : "#e5e7eb"}
//                           stroke="#fff"
//                           onClick={() => alert(
//                             `${geo.properties.NAME}: ${emission} kilotons CO₂ reduced in 2024`
//                           )}
//                           style={{
//                             default: { outline: "none" },
//                             hover: { fill: "#65a30d", outline: "none", cursor: "pointer" },
//                             pressed: { outline: "none" }
//                           }}
//                         />
//                       );
//                     })
//                   }
//                 </Geographies>
//               </ComposableMap>
//             </div>
//           </div>
//           <button className="px-6 py-3 bg-green-700 text-white rounded-full text-lg font-bold mt-2 shadow hover:bg-green-800 transition">
//             View Details
//           </button>
//         </div>
//       </section>

//       {/* Updated: Latest News Feature Section */}
//       <section className="py-12 px-6" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-6 text-center">📰 Latest Green News</h2>
//         <LatestNews />
//       </section>

//       <section className="py-16 px-6" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-green-200">🌿 Daily Eco Tip</h2>
//         <div className="bg-green-50 dark:bg-green-900 rounded-2xl p-8 text-center shadow-lg">
//           <p className="text-lg font-medium mb-4">♻️ Use reusable bags instead of plastic – a small change with big impact!</p>
//           <div className="text-sm italic">Tip refreshed every 24 hours • Swipe for more soon</div>
//         </div>
//       </section>

//       <section className="py-16 px-6" data-aos="fade-up">
//         <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 dark:text-blue-200">🎯 Take the Climate Pledge</h2>
//         <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8 text-center shadow-xl">
//           <p className="text-lg font-medium mb-4">Join <strong>32,000+</strong> people who’ve pledged to reduce their carbon footprint by 30% this year!</p>
//           <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700" onClick={() => alert("Thank you for pledging! 💚")}>Pledge Now</button>
//         </div>
//       </section>

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

//       <section className="py-12 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-4">💬 Environmental Quote</h2>
//         <blockquote className="italic text-lg max-w-xl mx-auto">“{quote.text}” – <strong>{quote.author}</strong></blockquote>
//       </section>

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

//       <section className="py-12 px-6 text-center" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-2">🧮 Want to Know Your Impact?</h2>
//         <Link to="/calculator">
//           <button className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 mt-2">
//             Calculate Your Carbon Footprint
//           </button>
//         </Link>
//       </section>

//       <section className="py-12 px-6" data-aos="fade-up">
//         <h2 className="text-2xl font-bold mb-4 text-center">🎥 Watch & Learn</h2>
//         <div className="flex justify-center">
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/aQQElkRRnYs"
//             title="Choosing our Future: Education for Climate Action"
//             className="rounded-lg shadow-lg"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <div className="mt-4 text-center text-gray-500 dark:text-gray-300">
//           <span>Choosing our Future: Education for Climate Action</span>
//         </div>
//       </section>

//       <Link
//         to="/feedback"
//         className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
//       >
//         Give Feedback
//       </Link>

//       <Link
//         to="/calculator"
//         className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition duration-300"
//         title="Open Carbon Footprint Calculator"
//       >
//         <Calculator size={28} />
//       </Link>

//       <Footer />
//     </div>
//   );
// };

// // Latest News Component using GNews API (replace with your key)
// function LatestNews() {
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     fetch("https://gnews.io/api/v4/search?q=climate+AND+carbon&lang=en&max=6&apikey=YOUR_GNEWS_API_KEY")
//       .then(res => res.json())
//       .then(data => setArticles(data.articles || []));
//   }, []);
//   if (!articles.length) return <div className="text-gray-400 text-center">Loading news...</div>;
//   return (
//     <div className="grid md:grid-cols-3 gap-6">
//       {articles.map((item, i) => (
//         <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
//           {item.image && (
//             <img src={item.image} alt={item.title} className="rounded mb-2 w-full h-36 object-cover" />
//           )}
//           <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//           <p className="text-sm flex-1 mb-3">{item.description}</p>
//           <a href={item.url} className="text-green-600 hover:underline text-sm mt-2 inline-block" target="_blank" rel="noopener noreferrer">Read more</a>
//           <div className="text-xs text-gray-400 mt-2">{new Date(item.publishedAt).toLocaleDateString()}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HomePage;


import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import GallerySection from "../components/GallerySection";
import DarkModeToggle from "../components/DarkModeToggle";
import StatsSection from "../components/StatsSection";
import FilteredGallery from "../components/FilteredGallery";
import Footer from "./Footer";
import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const GEO_URL = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Sample (placeholder) emission reduction data keyed by ISO_A3 country code
const emissionData = {
  USA: 1150,
  CHN: 450,
  IND: 150,
  RUS: 220,
  BRA: 80,
  AUS: 60,
  ZAF: 40
  // Add or update with your real data source
};

const GNEWS_API_KEY = "2bc8f70d10879b1634434dd89715152e";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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

      {/* Interactive Emissions Map */}
      <section className="py-16 px-6" data-aos="zoom-in">
        <h2 className="text-4xl font-bold mb-6 text-center">🌍 World Emissions Map</h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-md flex flex-col items-center">
          <p className="mb-6 text-xl font-semibold text-center">
            Click a country to see its CO₂ reduction (kilotons, 2024).
            <br />
            <span className="text-sm text-green-700 block">Map colors show relative CO₂ reductions.</span>
          </p>
          <div className="w-full flex justify-center mb-6">
            <div className="border-4 border-green-400 rounded-lg overflow-hidden w-full max-w-2xl h-96 bg-gray-200 dark:bg-gray-900 flex items-center justify-center">
              <ComposableMap projectionConfig={{ scale: 120 }} data-tip="" style={{ width: "100%", height: "auto" }}>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map(geo => {
                      const iso = geo.properties.ISO_A3;
                      const reduction = emissionData[iso] || 0;
                      const colorScale = scaleLinear()
                        .domain([0, 1200])
                        .range(["#e5ffe5", "#037a0a"]);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={colorScale(reduction)}
                          stroke="#fff"
                          onClick={() => alert(`${geo.properties.NAME}: ${reduction} kilotons CO₂ reduced in 2024`)}
                          style={{
                            default: { outline: "none" },
                            hover: { fill: "#55a630", outline: "none", cursor: "pointer" },
                            pressed: { outline: "none" }
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>
          </div>
          <button className="px-6 py-3 bg-green-700 text-white rounded-full text-lg font-bold mt-2 shadow hover:bg-green-800 transition">
            View Details
          </button>
        </div>
      </section>

      {/* Updated Latest Green News Section */}
      <section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">📰 Latest Green News</h2>
        <LatestNews apiKey={GNEWS_API_KEY} />
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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aQQElkRRnYs"
            title="Choosing our Future: Education for Climate Action"
            className="rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 text-center text-gray-500 dark:text-gray-300">
          <span>Choosing our Future: Education for Climate Action</span>
        </div>
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

function LatestNews({ apiKey }) {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  // Shuffle array function for randomizing displayed news
  const shuffleArray = (array) => {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/search?q=climate+OR+carbon+OR+environment+OR+sustainability&lang=en&max=20&apikey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
          setDisplayedArticles(shuffleArray(data.articles).slice(0, 6)); // display 6 random articles
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [apiKey]);

  if (!articles.length) return <div className="text-gray-400 text-center">Loading news...</div>;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {displayedArticles.map((item, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          {item.image && (
            <img src={item.image} alt={item.title} className="rounded mb-4 w-full h-48 object-cover" />
          )}
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-base flex-1 mb-4">{item.description}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm mb-2 inline-block">
            Read more
          </a>
          <div className="text-xs text-gray-400 mt-auto">{new Date(item.publishedAt).toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;

