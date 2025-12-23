import { AppleIcon, Play } from "lucide-react";
import React from "react";
import playIcon from "../assets/play.png";
import appIcon from "../assets/app-store.png";
import { Link } from "react-router";
import heroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto  text-center justify-center">
      <div className="py-10">
        <h2 className="text-[48px] lg:text-[72px] font-semibold">We Build</h2>
        <h2 className="text-[48px] lg:text-[72px] font-semibold">
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="text-[20px] text-gray-500 px-5 lg:px-30">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex gap-3 justify-center pb-10">
        <Link to="https://play.google.com/" className="btn btn-outline">
          <img src={playIcon} alt="Logo" />
          Google Play
        </Link>
        <Link to="https://play.google.com/" className="btn btn-outline">
          <img src={appIcon} alt="Logo" />
          App Store
        </Link>
      </div>
      <div className="flex justify-center">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
