import React from "react";

export default function Hero() {
  return (
    <div className="hero section-bg" data-bg="/assets/hero.jpg">
      <div className="overlay"></div>
      <div className="hero-inner">
        <h1 className="brand">
          Mohammad Interior<br/>DESIGN
        </h1>
        <div className="socials">
          <a href="#" aria-label="facebook">f</a>
          <a href="https://x.com/Mohd_Interior1" aria-label="twitter">X</a>
          <a href="https://www.instagram.com/mohd_interior1/" aria-label="instagram">📸</a>
        </div>
        <div className="year">
          © 2020 by <span>Mohammad Interior Design</span>.
        </div>
      </div>
    </div>
  );
}
