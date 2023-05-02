import React from 'react';


const LoginBtn = () => {
    return (
      <>
      <div className="nav-right">
            <button className="btn"><Link to="/login"style={{ textDecoration: 'none' }}>Login/Sign Up</Link></button>
        </div>
      </>
    );
  };
 
export default LoginBtn;