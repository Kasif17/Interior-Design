import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram,FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero section-bg" data-bg="/assets/hero.jpg">
      <div className="overlay"></div>
      <div className="hero-inner">
        <h1 className="brand">
          Mohammad Interior<br />DESIGN
        </h1>

        {/* Social Icons */}
        <div className="socials">
          <a
            href="https://facebook.com/"
            aria-label="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/Mohd_Interior1"
            aria-label="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/mohd_interior1/"
            aria-label="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@MohdInteriorDesign"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>

        <div className="year">
          <p>Founded in 2020 by <span>Mohammad Design</span>.</p>
         <p>© {new Date().getFullYear()} <span>Mohammad Design</span>. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
