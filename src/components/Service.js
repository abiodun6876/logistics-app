import React from "react";

import '../App.css';
import './Nav.css';
import Header from './Header';
import Nav from  './Nav';
import Banner from  './banner';
import './services.css';
import Footer from "./Footer";


function Service() {
  return (
    <div className="services">
        <Header/>
     <Nav/>
     <Banner/>


     <h2 className="big-heading" style={{ color: "black", fontSize: "42px", fontWeight: "bolder", fontFamily: "Rubik" }}>
        What We Do
      </h2>

      {/* our services start here */}
      <div className="about-us-container ">
        <div className="about-us-column">
          <div className="sub-content">
            <div className="icon">
              <img src="/assets/images/vector5.png" alt="Icon 2" />
            </div>
            <p className="sub-heading" style={{ color: "#FFDA56" }}>
              Safe & Reliable Cargo Solutions
            </p>
            <p className="description" style={{ color: "black" }}>
              Following the quality of our service, we have gained the trust of our many clients.
            </p>
          </div>
        </div>

        <div className="about-us-column">
          <div className="sub-content">
            <div className="icon">
              <img src="/assets/images/vector.png" alt="Icon 3" />
            </div>
            <p className="sub-heading" style={{ color: "#FFDA56" }}>
              Sea Transport Services
            </p>
            <p className="description" style={{ color: "black" }}>
              Following the quality of our service, we have gained the trust of our many clients.
            </p>
          </div>
        </div>

        <div className="about-us-column">
          <div className="sub-content">
            <div className="icon">
              <img src="/assets/images/vector4.png" alt="Icon 3" />
            </div>
            <p className="sub-heading" style={{ color: "#FFDA56" }}>
              Local Shipping Services
            </p>
            <p className="description" style={{ color: "black" }}>
              We offer local package delivery services with our mobile app for efficient and reliable service.
            </p>
          </div>
        </div>

        <div className="about-us-column">
          <div className="sub-content">
            <div className="icon">
              <img src="/assets/images/vector6.png" alt="Icon 4" />
            </div>
            <p className="sub-heading" style={{ color: "#FFDA56" }}>
              Warehousing Services
            </p>
            <p className="description" style={{ color: "black" }}>
              Following the quality of our service, we have gained the trust of our many clients.
            </p>
          </div>


        </div>

      
        
      </div>
      {/*{/* our services stop here */} 
      {/* Add your content here */}

      {/*Footer start here */}
<Footer/>

{/*Footer stop here */}

     
    </div>
  );
}

export default Service;
