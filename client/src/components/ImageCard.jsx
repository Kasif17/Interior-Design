import React from "react";

export default function ImageCard({ src, title }) {
  return (
    <div className="image-card">
      <img src={src} alt={title || "portfolio"} loading="lazy" />
    </div>
  );
}

// import React from "react";

// export default function ImageCard({ src, title }) {
//   return (
//     <div className="image-card">
//       <img src={src} alt={title || 'portfolio'} loading="lazy" />
//     </div>
//   );
// }
