import React from "react";
import "./Hero.css";
import profile_image from "../../assets/profile-img2.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profile_image} alt="" height={200} />
      <h1>
        <span>I am Tadese, Stephen Adeoye,</span> a frontend developer currently live in
        Nigeria
      </h1>
      <p>
        I am a frontend devoloper from Nigeria with 5years of experience in
        multiple companies like Microsoft, Bowen University, and Apple
      </p>
      <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
