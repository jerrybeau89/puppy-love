import React, {useState} from "react";
import '../../src/index.css';
import Login from "../components/Login";
import title from '../img/title.png'
// import Logo1 from '../img/Logo1.png'
// import testlogo from '../img/testlogo2.PNG'

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
        <div >
          <nav>
            <div className="nav-left">
            {/* <img src={Logo1} alt="logo"></img> */}
              {/* <img src={testlogo} alt="logo"></img> */}
            </div>
            <div className="nav-right">
              <button onClick={toggle} className="btn">Login/Signup</button>

            </div>
          </nav>
          {hideMain && (
          <div style={{ display: "flex", justifyContent: "center" }} >
            <div style={{ textAlign: "left" }}>
            <img src={title} alt="title"></img>
            <h2 className="quote"
            style={{ textAlign: "center", marginTop: "30px", color: "#eac715" }} >Pawsome Love: Connect with Pet-lovers Using Adorable Pet Photos on Our Dating App</h2>
            <p className="quote" style={{ textAlign: "center", marginTop: "10px", color: "#eac715", }}>Find your perfect match who loves pets just as much as you do.</p>

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