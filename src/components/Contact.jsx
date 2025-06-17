import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <h3> We can't wait to serve you the perfect cup and welcome you to our coffee community. </h3>
        <div className="contact-cards">

          <div className="contact-card">
            <img src="https://api.iconify.design/lucide:map-pin.svg" alt="Location" className="icon" />
            <h3>Location</h3>
            <p>123 Brew Street<br/>Caféville, 456789</p>
          </div>

          <div className="contact-card">
            <img src="https://api.iconify.design/lucide:clock.svg" alt="Hours" className="icon" />
            <h3>Hours</h3>
            <p>Mon–Fri: 8am – 8pm<br/>Sat–Sun: 9am – 10pm</p>
          </div>

          <div className="contact-card">
            <img src="https://api.iconify.design/lucide:phone.svg" alt="Phone" className="icon" />
            <h3>Contact</h3>
            <p>+91 98765 43210<br/>+91 91234 56789</p>
          </div>

          <div className="contact-card">
            <img src="https://api.iconify.design/lucide:mail.svg" alt="Email" className="icon" />
            <h3>Email</h3>
            <p>hello@beanandbrew.com<br/>support@beanandbrew.com</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
