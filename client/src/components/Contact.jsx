import React, { useState } from "react";
import { api } from "../api.js";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [state, setState] = useState("idle"); // idle | loading | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    setState("loading");
    setMsg("");
    try {
      const res = await api.post("/subscribe", { email });
      setState("success");
      setMsg(res.data?.message || "Subscribed");
      setEmail("");
    } catch (e) {
      setState("error");
      setMsg(e?.response?.data?.message || "Error subscribing");
    }
  };

  return (
    <div className="contact section-bg" data-bg="/assets/contact.jpg">
      <div className="overlay"></div>
      <div className="container contact-container">
        <h2 className="section-title">Contact</h2>

        <div className="newsletter">
          <div className="title">Join our mailing list</div>
          <form className="newsletter-form" onSubmit={onSubmit}>
            <label className="hidden" htmlFor="email">Enter your email here</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn" disabled={state === "loading"}>
              {state === "loading" ? "Submitting..." : "Subscribe Now"}
            </button>
          </form>
          {msg ? <div className={`note ${state}`}>{msg}</div> : null}
        </div>

        <div className="contact-details">
          <p><a href="info.mohdinteriordesign@gmail.com">info.mohdinteriordesign@gmail.com</a></p>
          <p>Mobile: 9076225822 </p>
          <a href="https://wa.me/9076225822" target="_blank" rel="noopener noreferrer">
             Chat with us on WhatsApp
          </a>
          <p>Shop 8, Sonapur, Lal Bahadur Shastri Marg Bhandup Industrial Area Mumbai Maharashtra 400078</p>
        </div>
      </div>
    </div>
  );
}
