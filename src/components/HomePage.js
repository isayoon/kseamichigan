import React from "react";
import "./HomePage.css";
import Ksealogo from "../images/ksealogo.png";

function HomePage() {
  return (
    <div className = "HomePageWrapper">
    <header className="MenuBar">
      <img src={Ksealogo} alt="KSEA logo" className="logo" />
      <p id="topKsea">KSEA</p>
      <div className="vertical-line"></div>
      <nav className="navigation">
          <a href="/about">About Us</a>
          <a href="/events">Events</a>
          <a href="/alumni">Alumni</a>
          <a href="/committees">Committees</a>
          <a href="/join">Join</a>
        </nav>
    </header>

    <main className="main-content">
      <h1 className="title">
        Korean American Scientists & Engineers Association
      </h1>
      <button className="register-button">Register Here</button>
    </main>
    </div>
  );
}

export default HomePage;
