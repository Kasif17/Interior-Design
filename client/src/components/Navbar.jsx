import React from "react";
import "./Navbar.css"
export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <nav className="nav">
        {/* Left logo */}
        <div className="nav-left">
          <img
            src="/assets/logo.png"   // ✅ put your logo in public/assets/logo.png
            alt="Logo"
            className="nav-logo"
          />
        </div>

        {/* Right links */}
        <ul className="nav-links">
          <li onClick={() => scrollTo("home")}>HOME</li>
          <li onClick={() => scrollTo("about")}>ABOUT</li>
          <li onClick={() => scrollTo("portfolio")}>PORTFOLIO</li>
          <li onClick={() => scrollTo("clients")}>CLIENTS</li>
          <li onClick={() => scrollTo("contact")}>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}

// import React from "react";

// export default function Navbar() {
//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };
//   return (
//     <header className="navbar">
//       <nav className="nav">
//         <div className="nav-left"></div>
//         <ul className="nav-links">
//           <li onClick={() => scrollTo('home')}>HOME</li>
//           <li onClick={() => scrollTo('about')}>ABOUT</li>
//           <li onClick={() => scrollTo('portfolio')}>PORTFOLIO</li>
//           <li onClick={() => scrollTo('clients')}>CLIENTS</li>
//           <li onClick={() => scrollTo('contact')}>CONTACT</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
