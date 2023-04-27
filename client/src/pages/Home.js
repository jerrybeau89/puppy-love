import React from "react";
import '../../src/index.css'
import Login from "../components/Login";
// import Signup from "../components/Signup";
const Home = () => {

    return (
        <div>
        <nav>
          <div className="nav-left">
            <h1>Puppy-Luv</h1>
          </div>
          <div className="nav-right">
           
            <button className="btn">Login/Signup</button>
          </div>
        </nav>
        <div className="main">
          <h2>Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App</h2>
          <p>Find your perfect match who loves pets just as much as you do.</p>
          <button className="btn">Get started</button>
          <Login/>
        </div>
      </div>
    );
  }
  

export default Home;
