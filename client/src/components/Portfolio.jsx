import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard.jsx";
import "./portfolio.css";


// Just list your images here (relative to /public folder)
const localImages = [
  { url: "/assets/portfolio/01.jpg", title: "Living Room" },
  { url: "/assets/portfolio/02.jpg", title: "Bedroom" },
  { url: "/assets/portfolio/03.jpg", title: "Kitchen" },
  { url: "/assets/portfolio/04.jpg", title: "Bathroom" },
  { url: "/assets/portfolio/05.jpg", title: "Hallway" },
  { url: "/assets/portfolio/06.jpg", title: "Hallway" },
  { url: "/assets/portfolio/07.jpg", title: "Hallway" },
  { url: "/assets/portfolio/08.jpg", title: "Hallway" },
  { url: "/assets/portfolio/09.jpg", title: "Hallway" },
  { url: "/assets/portfolio/10.jpg", title: "Hallway" },
  { url: "/assets/portfolio/11.jpg", title: "Hallway" },
  { url: "/assets/portfolio/12.jpg", title: "Hallway" },
  { url: "/assets/portfolio/13.jpg", title: "Hallway" },
  { url: "/assets/portfolio/14.jpg", title: "Hallway" },
  { url: "/assets/portfolio/15.jpg", title: "Hallway" },
  
];

export default function Portfolio() {
  const [images] = useState(localImages);
  const [current, setCurrent] = useState(null);

  const openAt = (i) => setCurrent(i);
  const close = () => setCurrent(null);
  const prev = (e) => { e.stopPropagation(); setCurrent((i) => (i === 0 ? images.length - 1 : i - 1)); };
  const next = (e) => { e.stopPropagation(); setCurrent((i) => (i === images.length - 1 ? 0 : i + 1)); };


  useEffect(() => {
    const onKey = (e) => {
      if (current === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
      if (e.key === "ArrowRight") setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, images.length]);

  return (
    <div className="portfolio section-bg">
      <div className="container wide">
        <h2 className="section-title">Portfolio</h2>
        <div className="grid">
          {images.map((img, i) => (
            <div key={i} onClick={() => openAt(i)}>
              <ImageCard src={img.url} title={img.title} />
            </div>
          ))}
        </div>
      </div>

      {current !== null && (
        <div className="modal" onClick={close}>
          <button className="nav prev" onClick={prev}>‹</button>
          <img className="modal-img" src={images[current].url} alt={images[current].title}/>
          <button className="nav next" onClick={next}>›</button>
          <button className="close" onClick={(e)=>{e.stopPropagation(); close();}}>✕</button>
        </div>
      )}
    </div>
  );
}



// import React, { useEffect, useState } from "react";
// import ImageCard from "./ImageCard.jsx";
// import { api } from "../api.js";

// export default function Portfolio() {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     api.get("/images")
//       .then(r => setImages(r.data?.data || []))
//       .catch(() => setError("Failed to load images"))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="portfolio section-bg" data-bg="">
//       <div className="overlay"></div>
//       <div className="container wide">
//         <h2 className="section-title">Portfolio</h2>
//         {loading ? <p className="muted center">Loading...</p> : null}
//         {error ? <p className="error center">{error}</p> : null}
//         <div className="grid">
//           {images.map((img) => (
//             <ImageCard key={img._id || img.url} src={img.url} title={img.title} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
