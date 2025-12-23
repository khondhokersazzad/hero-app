import React from 'react';
import Logo from "../assets/hero-logo.png"
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#061a2f] to-[#07243f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-4">
          
          {/* Logo */}
          <Link className="btn btn-ghost text-xl text-blue-500" to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          

          {/* Social Links */}
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <span className="text-sm text-gray-400">Social Links</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                X
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                in
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                f
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400 mt-4">
          © 2025 — All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
