import React from 'react';
import { Link } from "react-router-dom";
import './WelcomeSreen.css'; 

function WelcomeSreen() {
  return (
    <div className="register-container">
    
        <img src="/assets/images/rafiki.png" className="loginImage" alt="Rafiki" />
      
      <div className="content1">
        
        <img src="/assets/images/logo.png" 
        style={{
        width: '225.1px',
        height: '56px'
        }} alt="logo" />


        <p className="welcome_to">
          Welcome to PeakReach Logistics
        </p>
         
          
        <p className="sign_up_an1">
        <div className="link-container">
    <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
  <p className="register1">Register</p>
  
      Sign up and begin using PeakReach
      <br/> 
      Logistics for seamless deliveries
    </Link>
  </div>
</p>

<p className="log_in_to1">
<div className="link-container">
    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
  <p className="login1">Login</p>
  
      Log in to access PeakReach
      <br/> 
      Logistics for swift deliveries
    </Link>
  </div>
</p>


      
      </div>
    </div>
  );
}

export default WelcomeSreen;
