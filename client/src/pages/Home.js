import React from "react";
import '../../src/index.css'
<<<<<<< HEAD
import title from '../img/title.png'

=======
import Login from "../components/Login";
import Signup from "../components/Signup";
>>>>>>> main
const Home = () => {


  
    return (
      <body>
        <div class="background">
        <div>
        <nav>
          <div className="nav-left">
            <h1>Puppy-Luv</h1>
          </div>
          <div className="nav-right">
<<<<<<< HEAD
            <button className="btn1">Login/Signup</button>
=======
            <Login />
            <button className="btn">Login/Signup</button>
>>>>>>> main
          </div>
        </nav>
        
        <div className="main">
        <img src= {title} alt="title"></img>
          <h2>Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App</h2>
          <p>Find your perfect match who loves pets just as much as you do.</p>
          <button className="btn"><span></span>started</button>
        </div>
      </div>
      </div>
      </body>
    );
  }
  

export default Home;
