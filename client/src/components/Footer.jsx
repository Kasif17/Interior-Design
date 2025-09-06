import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
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
      </div>
      <div className="copyright">
        <p>Founded in 2020 by <span>Mohammad Design</span>.</p>
  <p>© {new Date().getFullYear()} <span>Mohammad Design</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}


// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="icons">
//         <a href="#" aria-label="facebook">f</a>
//         <a href="https://x.com/Mohd_Interior1" aria-label="twitter">t</a>
//         <a href="https://www.instagram.com/mohd_interior1/" aria-label="instagram">📸</a>
//       </div>
//       <div className="copyright">© {new Date().getFullYear()} by <span>Mohammad Design</span>.</div>
//     </footer>
//   );
// }
