import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
            At Bean & Brew, we believe that coffee is more than just a drink — it's a ritual, a comfort, a connection. 
            <br />
            Started in 2025 with a passion for quality and community, our café has grown into a cozy hub where friends meet, ideas brew, and every sip matters. 
            Whether you're starting your morning with a bold espresso, catching up with friends over a creamy latte, or winding down with a warm cup of herbal tea, there's always a seat for you here.
            <br />
            Come in, stay a while, and be part of the Bean & Brew story — where every visit feels like coming home.
        </p>
      </div>

      <div className="about-cards">
        <div className="about-card">
            <div className="icon"><i className="fas fa-mug-hot"></i></div>
            <h3>Artisan Coffee</h3>
            <p>We handcraft every cup using ethically sourced beans and expert techniques.</p>
        </div>
        <div className="about-card">
            <div className="icon"><i className="fas fa-heart"></i></div>
            <h3>Made with Love</h3>
            <p>Every sip is infused with care — from bean to brew to you.</p>
        </div>
        <div className="about-card">
            <div className="icon"><i className="fas fa-people-roof"></i></div>
            <h3>Community Hub</h3>
            <p>A cozy corner to connect, relax, and feel at home.</p>
        </div>
      </div>

    </section>
  );
};

export default About;
