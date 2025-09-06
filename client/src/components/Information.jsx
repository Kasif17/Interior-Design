//import ownerImg from "../assets/owner.jpg";

export default function Information() {
  return (
    <section className="container thin">
      <div className="info-card">
        {/* Owner Image */}
        <img
          src={ownerImg}
          alt="Owner"
          className="info-img"
        />

        {/* Text Info */}
        <div className="info-text">
            <h2 className="info-title">Mohd Kaif Khan</h2>
          <h2 className="info-title">Owner & Co-founder</h2>
          <p className="info-name">Mohammad Interior Design</p>
          <p className="info-bio">
            With 10 years of experience in interior design, Mohd Kaif Khan has
            collaborated with leading MNCs like Infosys and others. His work
            combines creativity, modern aesthetics, and functionality that
            matches international standards. As a co-founder, his vision drives
            innovation and excellence at <span className="brand-text">Mohammad Design</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
