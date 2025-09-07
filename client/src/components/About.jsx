// import React from "react";

// export default function About() {
//   return (
//     <div className="about section-bg" data-bg="/assets/about.jpg">
//       <div className="overlay"></div>
//       <div className="container thin">
//         <h2 className="section-title">About Us</h2>
// <p className="subtitle">A tradition of designing interiors of distinction</p>
// <p>
//   A full-service interior design company, <b>Mohd. Design</b> has been successfully
//   designing spectacular spaces for over a decade for luxurious private residences
//   and commercial projects.
// </p>
// <p>
//   Our work is commissioned by private clients, interior designers, architects, and furniture
//   contractors. Our in-house team of master craftsmen and interior designers have the
//   knowledge, skills, and experience required for offering highly personalised services,
//   effective project management, and maintaining our tradition of excellence in every
//   project we undertake.
// </p>
// <p>
//   From innovative colour schemes, bespoke furniture, spectacular lighting, eye-catching flooring
//   and ceilings, opulent drapes and upholstery, elegant wainscot moulding, glamorous stair
//   bannisters, eye-catching window treatments, entry hall installations, and designer accessories,
//   to adding a touch of flair to walls with materials ranging from decorative wallpaper and
//   textured paint to mother-of-pearl and full-length mirrors, we offer our clients a wide
//   variety of modern options for expressing their personal style in the most beautiful ways.
// </p>
// <p>
//   Our focus on creativity, craftsmanship, and dependability forms the core of our
//   customer-oriented services. In summary, our designs and products are made to appeal
//   to the creatively inclined, quality-conscious, discerning customers of the 21st century.
// </p>

//       </div>
//     </div>
//   );
// }

// import React from "react";
// import ownerImg from "/assets/owner.jpg";

// export default function About() {
//   return (
//     <div className="about section-bg" data-bg="/assets/about.jpg">
//       <div className="overlay"></div>
//       <div className="container thin">
//         <h2 className="section-title">About Us</h2>
//         <p className="subtitle">A tradition of designing interiors of distinction</p>

//         {/* Existing Company Info */}
//         <p>
//           A full-service interior design company, <b>Mohammad Interior Design</b> has been successfully
//           designing spectacular spaces for over a decade for luxurious private residences
//           and commercial projects.
//         </p>
//         <p>
//           Our work is commissioned by private clients, interior designers, architects, and furniture
//           contractors. Our in-house team of master craftsmen and interior designers have the
//           knowledge, skills, and experience required for offering highly personalised services,
//           effective project management, and maintaining our tradition of excellence in every
//           project we undertake.
//         </p>

//         {/* Owner Section */}
//         <div className="owner-section">
//           <img
//             src={ownerImg}
//             alt="Owner"
//             className="owner-img"
//           />
//           <div className="owner-text">
//             <h3>Mohd Kaif Khan</h3>
//             <p className="owner-role"> <b>Co-founder of Mohammad Interior Design</b></p>
//             <p>
//               With over 10 years of expertise in interior design, he has worked with
//               leading multinational companies like Infosys. His unique blend of creativity
//               and practical design ensures every project is elegant, functional, and timeless.
//             </p>
//           </div>
//         </div>

//         {/* Rest of Company Info */}
//         <p>
//           From innovative colour schemes, bespoke furniture, spectacular lighting, eye-catching flooring
//           and ceilings, opulent drapes and upholstery, elegant wainscot moulding, glamorous stair
//           bannisters, eye-catching window treatments, entry hall installations, and designer accessories,
//           to adding a touch of flair to walls with materials ranging from decorative wallpaper and
//           textured paint to mother-of-pearl and full-length mirrors, we offer our clients a wide
//           variety of modern options for expressing their personal style in the most beautiful ways.
//         </p>
//         <p>
//           Our focus on creativity, craftsmanship, and dependability forms the core of our
//           customer-oriented services. In summary, our designs and products are made to appeal
//           to the creatively inclined, quality-conscious, discerning customers of the 21st century.
//         </p>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import ownerImg from "/assets/owner.jpg";

export default function About() {
  return (
    <div className="about section-bg" data-bg="/assets/about.jpg">
      <div className="overlay"></div>
      <div className="container thin">
        <h2 className="section-title">About Us</h2>
        <p className="subtitle">A tradition of designing interiors of distinction</p>

        <p>
          A full-service interior design company, <b>Mohammad Interior Design</b> has been
          successfully designing spectacular spaces for over a decade for luxurious private
          residences and commercial projects.
        </p>

        {/* Owner Section */}
        <div className="owner-section">
          <img src={ownerImg} alt="Owner" className="owner-img" />
          <div className="owner-text">
            <h3>Mohd Kaif Khan</h3>
            <p className="owner-role"><b>Co-founder of Mohammad Interior Design</b></p>
            <p>
              With over 10 years of expertise in interior design, he has worked with leading
              multinational companies like Infosys. His unique blend of creativity and practical
              design ensures every project is elegant, functional, and timeless.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="center" style={{ marginTop: "20px" }}>
          <Link to="/information">
            <button className="info-btn">Get About Company</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


