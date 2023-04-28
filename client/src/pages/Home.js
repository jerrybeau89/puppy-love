import React, {useState} from "react";
import '../../src/index.css';
import Login from "../components/Login";
import title from '../img/title.png'

// import Signup from "../components/Signup";
const Home = () => {

  const [hideMain, setHideMain] = useState(false);
  const handleLogin = () => {
    setHideMain(true);
  };


  return (
    <body>
      <div class="background">
        <div>
          <nav>
            <div className="nav-left">
              <h1>Puppy-Luv</h1>
            </div>
            <div className="nav-right">
              <button className="btn">Login/Signup</button>
            </div>
          </nav>
          <div className={`main ${hideMain ? "hidden" : ""}`}>
            <img src={title} alt="title"></img>
            <h2>Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App</h2>
            <p>Find your perfect match who loves pets just as much as you do.</p>
            <Login handleLogin={handleLogin} />
          </div>
        </div>
      </div>
    </body>
  );
}


export default Home;
