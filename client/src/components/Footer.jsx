import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="#" aria-label="facebook">f</a>
        <a href="https://x.com/Mohd_Interior1" aria-label="twitter">t</a>
        <a href="https://www.instagram.com/mohd_interior1/" aria-label="instagram">📸</a>
      </div>
      <div className="copyright">© {new Date().getFullYear()} by <span>Mohd. Design</span>.</div>
    </footer>
  );
}
