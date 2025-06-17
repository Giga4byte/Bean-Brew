import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 class="h1">
          Welcome to <br />
          <span>Bean & Brew</span>
        </h1>
        <p class="p">
          Where every cup tells a story and every sip creates a moment.
          <br />
          Experience the perfect blend of artisan coffee and community warmth.
        </p>
        <br></br>
        <div className="hero-buttons">
          <a href="#menu" className="menu-btn">Explore Our Menu →</a>
          <a href="#about" className="story-btn">Our Story</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                Did you know?
            </div>
            <div className="flip-card-back">
              Our beans are ethically sourced and roasted to perfection!
            </div>
          </div>
        </div>
      </div>

      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>

      <div className="circle circle-5"></div>
      <div className="circle circle-6"></div>
      <div className="circle circle-7"></div>
      <div className="circle circle-8"></div>
      
      <div className="circle circle-9"></div>
      <div className="circle circle-10"></div>
      <div className="circle circle-11"></div>
      <div className="circle circle-12"></div>
    </section>
  );
};

export default Hero;
