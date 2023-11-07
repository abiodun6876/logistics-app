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
        <div className="d-flex gap-3">
          <p className="register">Register</p>
          
         
        </div>
        <p className="sign_up_an">
        <Link to="/register" style={{textDecoration:'none',color:'black'}}>
          
       
          Sign up and begin using PeakReach Logistics for seamless deliveries
          </Link>
        </p>
        <div className="d-flex gap-3">
          <p className="login">Login</p>
         
        </div>
        <p className="log_in_to">
        <Link to="/login"  style={{textDecoration:'none',color:'black'}}>
          Log in to access PeakReach Logistics for swift deliveries
          </Link>
        </p>
      </div>
    </div>
  );
}

export default WelcomeSreen;
