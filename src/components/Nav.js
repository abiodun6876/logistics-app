import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Nav.css';

//styles goes here:




  const linkStyle = {
    fontFamily: 'Krub',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '21.60px',
    wordWrap: 'break-word',
    textDecoration: 'none', // Remove underlines from links
    borderBottom: '2px solid transparent', // Add a transparent underline
    padding: '0 5px',
    color:'black',
  };





const activeLinkStyle = {
    ...linkStyle,
    color: 'Black',
    // Set white underline for active links
  };





//the Mobile responsive toggle funtion start here

function MobileNav({ activeButton, handleButtonClick, mobileMenuOpen }) {
  return (
    <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
      <ul className="nav-list">
  <li className="nav-text">
    <Link
      to="/"
      className="Home"
      style={activeButton === "Home" ? { ...activeLinkStyle, borderBottomColor: "white" } : {}}
      onClick={() => handleButtonClick("Home")}
    >
      <i className="fas fa-home"></i> Home
    </Link>
  </li>

  <li className="nav-text">
    <Link to="/order"
      className="AboutUS"
      style={activeButton === "Oder" ? { ...activeLinkStyle, borderBottomColor: "white" } : {}}
      onClick={() => handleButtonClick("Order")}
    >
      <i className="fas fa-box"></i> Order
    </Link>
  </li>

  <li className="nav-text">
    <Link
      to="/services"
      className="Service"
      style={activeButton === "Service" ? { ...activeLinkStyle, borderBottomColor: "white" } : {}}
      onClick={() => handleButtonClick("Service")}
    >
      <i className="fas fa-circle-user"></i> Account
    </Link>
  </li>

  

  
</ul>
    </div>
  );
}
//the Mobile responsive toggle funtion stop here











function Nav() {

   // {/*code to handle open and close the toggle button start here */}
  const [activeButton, setActiveButton] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  
    //{/*code to handle open and close the toggle button stop here */}

  return (
    <div className="background">
     

          
          <div className="logo-container">
              <img className="short-logo" src="assets/images/PeakReach-Logistics.png" alt="short-logo" />
             

              <div className="mobile-nav">

                  {/* Mobile navigation (visible on screens less than or equal to 768px) */}
                  <MobileNav activeButton={activeButton} handleButtonClick={handleButtonClick} mobileMenuOpen={mobileMenuOpen} />
                  <span className="menu-toggle" onClick={toggleMobileMenu}>
                      <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`} style={{ width: '50px', height: '50px', fontSize: '30px' }} />
                  </span>
              </div>
          </div>


       
    

      </div>

    
    
  );
}





export default Nav;
