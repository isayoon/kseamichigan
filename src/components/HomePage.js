import React from "react";
import "./HomePage.css";
import ksealogo from "../images/ksealogo.png";
import iglogo from "../images/instagram.png";
import star from "../images/star.png";

function HomePage() {
  return (
    <div className="HomePageWrapper">
      <header className="MenuBar">
        <img src={ksealogo} alt="KSEA logo" className="ksealogo" />
        <p id="topKsea">KSEA</p>
        <div className="vertical-line"></div>
        <p className="umich">University of Michigan</p>
        <nav className="navigation">
          <a href="/about">About Us</a>
          <a href="/events">Events</a>
          <a href="/alumni">Alumni</a>
          <a href="/committees">Committees</a>
          <a href="/join">Join</a>
        </nav>
        <a
          href="https://www.instagram.com/ksea.michigan"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iglogo} alt="Instagram logo" className="iglogo" />
        </a>
      </header>
      <hr className="line" />
      <main className="main-content">
        <h1 className="title">
          Korean American Scientists & Engineers Association
        </h1>
        <img src={star} alt="star" className="star1" />
        <button className="register-button">Register Here</button>
        
      </main>
    </div>
  );
}

export default HomePage;
