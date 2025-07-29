import React from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Building2,
  Factory,
  Leaf,
  Globe,
  Sun,
} from "lucide-react";

import { useEffect } from "react";

const clients = [
  {
    name: "GreenBuild Co.",
    logo: "/clients/greenbuild.png",
    testimonial: "GreenBuild helped us achieve a zero-carbon footprint on 3 major projects.",
    link: "https://greenbuild.com",
    icon: <Leaf className="w-5 h-5 inline mr-1 text-green-600" />,
  },
  {
    name: "UrbanInfra Ltd.",
    logo: "/clients/urbaninfra.png",
    testimonial: "Efficient and modern project delivery. Excellent collaboration!",
    link: "https://urbaninfra.com",
    icon: <Building2 className="w-5 h-5 inline mr-1 text-blue-600" />,
  },
  {
    name: "EcoFactory",
    logo: "/clients/ecofactory.png",
    testimonial: "We scaled our green manufacturing with EcoFactory's innovative designs.",
    link: "https://ecofactory.com",
    icon: <Factory className="w-5 h-5 inline mr-1 text-red-600" />,
  },
  {
    name: "GlobalWorks",
    logo: "/clients/globalworks.png",
    testimonial: "GlobalWorks partnered with us across 4 international projects.",
    link: "https://globalworks.com",
    icon: <Globe className="w-5 h-5 inline mr-1 text-indigo-600" />,
  },
  {
    name: "SolarEdge Partners",
    logo: "/clients/solaredge.png",
    testimonial: "Collaborated on multiple green-certified projects.",
    link: "https://solaredge.com",
    icon: <Sun className="w-5 h-5 inline mr-1 text-yellow-500" />,
  },
];

const ClientLogos = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-12 bg-gray-50" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6" data-aos="fade-up">
          Our Trusted Clients
        </h2>

        <Marquee pauseOnHover gradient={false} speed={40}>
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group relative mx-8 flex flex-col items-center transition-transform hover:scale-105"
              data-aos="zoom-in"
            >
              <a href={client.link} target="_blank" rel="noopener noreferrer" title={client.name}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 w-auto grayscale group-hover:grayscale-0 drop-shadow-md transition-all duration-300"
                />
              </a>
              <div className="absolute top-full mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow-lg w-64 z-50">
                <span className="font-semibold">{client.icon} {client.name}:</span>
                <p className="text-xs mt-1 italic">{client.testimonial}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogos;
