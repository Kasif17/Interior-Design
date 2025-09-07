import React from "react";
import ownerImg from "/assets/owner.jpg";
import managerImg from "/assets/manager.jpg";
import supervisorImg from "/assets/supervisor.jpg";
import itLeadImg from "/assets/ITLead.jpg";
import mini1 from "/assets/mini1.jpg";
import mini2 from "/assets/mini2.jpg";
import mini3 from "/assets/mini3.jpg";

export default function Information() {
  return (
    <div className="info-page">
      {/* Owner Section */}
      <div className="owner-top">
        <img src={ownerImg} alt="Owner" className="owner-photo" />
        <h2>Mohd Kaif Khan</h2>
        <p className="owner-role">Co-founder & Lead Designer</p>
        <p className="owner-desc">
          With 10+ years of experience in interior design, he has worked with
          global companies like Infosys. His vision brings modern, functional,
          and elegant designs that match international standards.
        </p>
      </div>

      {/* Core Team */}
      <h3 className="section-title">Core Team</h3>
      <div className="team-grid">
        <div className="team-card">
          <div className="team-img">
            <img src={managerImg} alt="Manager" />
          </div>
          <h3>Mohd Azaj Ahmad</h3>
          <p>Operations Manager</p>
          <span>14+ Years Experience</span>
        </div>

        <div className="team-card">
          <div className="team-img">
            <img src={supervisorImg} alt="Supervisor" />
          </div>
          <h3>Ashraf Khan</h3>
          <p>Senior Supervisor</p>
          <span>6+ Years Experience</span>
        </div>

        <div className="team-card">
          <div className="team-img">
            <img src={itLeadImg} alt="IT Lead" />
          </div>
          <h3>Mohd Kasif Khan</h3>
          <p>Technology Head</p>
          <span>5+ Years Experience</span>
        </div>
      </div>

      {/* Mini Supervisors */}
      <h3 className="section-title">Architecture & Designer</h3>
      <div className="team-grid">
        <div className="team-card">
          <div className="team-img">
            <img src={mini1} alt="Mini Supervisor 1" />
          </div>
          <h3>Mohd Imtiyaz Khan</h3>
          <p>Senior Architecture & Designer</p>
          <span>5+ Years Experience</span>
        </div>

        <div className="team-card">
          <div className="team-img">
            <img src={mini2} alt="Mini Supervisor 2" />
          </div>
          <h3>Zeba Khan</h3>
          <p>Junior Designer</p>
          <span>2+ Years Experience</span>
        </div>

        <div className="team-card">
          <div className="team-img">
            <img src={mini3} alt="Mini Supervisor 3" />
          </div>
          <h3>Shadab Khan</h3>
          <p>Assistant Supervisor</p>
          <span>4+ Years Experience</span>
        </div>
      </div>

      {/* Workers Info */}
      <div className="workers-section">
        <p>
          <b>Mohammad Interior Design</b> proudly has a dedicated team of 100+
          workers. Each project is executed with safety, precision, and passion,
          ensuring our clients always get the best quality interiors with modern
          designs and sustainable practices.
        </p>
      </div>
    </div>
  );
}
