import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Clients from "./components/Clients.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ChatWidget from "./components/ChatWidget.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="clients"><Clients /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
