import React, {useState} from "react";
import '../../src/index.css';
import Login from "../components/Login";
import title from '../img/title.png'

// import Signup from "../components/Signup";
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
        <div onClick={toggle}>
          <nav>
            <div className="nav-left">
              <h1>Puppy-Luv</h1>
            </div>
            <div className="nav-right">
              <button className="btn">Login/Signup</button>
            </div>
          </nav>
          {hideMain && (
          <div>
            <img src={title} alt="title"></img>
            <h2>Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App</h2>
            <p>Find your perfect match who loves pets just as much as you do.</p>
          </div>
            )}
            {showLogin && (<Login />)}
        </div>
      </div>
    </body>
  );
}


export default Home;
