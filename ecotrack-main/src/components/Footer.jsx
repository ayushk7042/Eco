import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-green-600">🌍 EcoTrack</h2>
          <p className="mt-2 text-sm">Together we build a greener future. Join the mission to fight climate change.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-green-500">Home</Link></li>
            <li><Link to="/projects" className="hover:text-green-500">Projects</Link></li>
            <li><Link to="/services" className="hover:text-green-500">Services</Link></li>
            <li><Link to="/calculator" className="hover:text-green-500">Carbon Calculator</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: ayushkayush1@gmail.com</li>
            <li>Phone: +91 7042070261</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded text-black"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-3 text-xl text-green-600">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} EcoTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
