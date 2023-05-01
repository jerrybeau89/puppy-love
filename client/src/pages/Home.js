import React, { useState } from "react";
import '../../src/index.css';
import Login from "../components/Login";
import title from '../img/title.png'
import { NavLink } from "react-router-dom";

const Home = () => {

  const [hideMain, setHideMain] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const toggle = () => {
    setHideMain(wasOpened => !wasOpened);
    setShowLogin(wasOpened => !wasOpened);

  };


  return (
    <body>
      <div class="background">
        <div >
          <nav>
            <div className="nav-left">
              <h1>Puppy-Luv</h1>

            </div>
            <div className="nav-right">
             
              <NavLink onclick ={toggle} exact to="/" activeClassName="active" className="btn">
            Home
          </NavLink>
          <NavLink to="/login" activeClassName="active" className="btn">
            Login/
          </NavLink>
            </div>
          </nav>
          {hideMain && (
            <div style={{ display: "flex", justifyContent: "center" }} >
              <div style={{ textAlign: "left" }}>
                <img src={title} alt="title"></img>
                <h2 className="quote"
                  style={{ textAlign: "center", marginTop: "30px", color: "#dfaf20" }} >Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App</h2>
                <p className="quote" style={{ textAlign: "center", marginTop: "10px", color: "#c8ac37", }}>Find your perfect match who loves pets just as much as you do.</p>
              </div>
            </div>
          )}
          {showLogin && (<Login />)}
        </div>
      </div>
    </body>
  );
}


export default Home;
