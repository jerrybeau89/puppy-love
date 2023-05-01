import React, { useState } from "react";
import '../../src/index.css';
import Login from "../components/Login";
import title from '../img/title.png'
import {toggle } from '../components/Header'
// import testlogo from '../img/testlogo2.PNG'

const Home = () => {

  return (
    <body>
      <div class="background">
          <div style={{ display: "flex", justifyContent: "center" }} >
            <div style={{ textAlign: "left" }}>
            <img src={title} alt="title"></img>
            <h2 className="quote"
            style={{ textAlign: "center", marginTop: "30px", color: "#eac715" }} >Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App</h2>
            <p className="quote" style={{ textAlign: "center", marginTop: "10px", color: "#eac715", }}>Find your perfect match who loves pets just as much as you do.</p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;