import React, { useState } from "react";
import { Link } from "react-router-dom";



//styles goes here:


const backgroundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '30px',
    width: '100%', // Full width of the container
    height: '50px',
    flexShrink: 0,
    backgroundColor: '#FFDA56',
    margin: 'o auto',
    
  };

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

const RequestqoutebG = {
    backgroundColor: "#FFAE0A",
    width: "100px",
    fontFamily: "Krub",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "21.60px",
    wordWrap: "break-word",
    textDecoration: "none",
    borderBottom: "2px solid transparent",
    padding: "0 5px",
    color: "black",
    borderRadius: "5px",
    

}



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
    <Link
      to="/aboutUs"
      className="AboutUS"
      style={activeButton === "AboutUS" ? { ...activeLinkStyle, borderBottomColor: "white" } : {}}
      onClick={() => handleButtonClick("AboutUS")}
    >
      <i className="fas fa-info-circle"></i> About
    </Link>
  </li>

  <li className="nav-text">
    <Link
      to="/services"
      className="Service"
      style={activeButton === "Service" ? { ...activeLinkStyle, borderBottomColor: "white" } : {}}
      onClick={() => handleButtonClick("Service")}
    >
      <i className="fas fa-file-alt"></i> Services
    </Link>
  </li>

  <li className="nav-text">
    <Link
      to="/blog"
      className="Blog"
      style={activeButton === "Blog" ? { ...activeLinkStyle, borderBottomColor: "white" } : {}}
      onClick={() => handleButtonClick("Blog")}
    >
      <i className="fas fa-tasks"></i> Blog
    </Link>
  </li>

  <li className="nav-text">
    <Link
      to="/contact"
      className="Contact"
      style={activeButton === "Contact" ? { ...activeLinkStyle, borderBottomColor: "white" } : {}}
      onClick={() => handleButtonClick("Contact")}
    >
      <i className="fas fa-envelope"></i> Contact
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
    <div className="background" style={backgroundStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="78" viewBox="0 0 1920 78" fill="none">
        <path d="M0 0H1920V78H9.39002e-06L0 0Z" fill="#FFDA56" />
      </svg>

      <div className="mobile-nav">
        {/* Mobile navigation (visible on screens less than or equal to 768px) */}
        <MobileNav activeButton={activeButton} handleButtonClick={handleButtonClick} mobileMenuOpen={mobileMenuOpen} />
        <span className="menu-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`} style={{ width: '50px', height: '50px', fontSize: '30px' }} />
        </span>
      </div>



     <div className="desktop-nav">
        {/* Desktop navigation (visible on screens wider than 768px starts here) */}
        <Link to="/" className="Home" style={activeButton === "Home" ? activeLinkStyle : linkStyle} onClick={() => handleButtonClick("Home")}>
          Home
        </Link>
        <Link to="/aboutUs" className="AboutUs" style={activeButton === "AboutUs" ? activeLinkStyle : linkStyle} onClick={() => handleButtonClick("AboutUs")}>
          About
        </Link>
        <Link to="/services" className="Service" style={activeButton === "Service" ? activeLinkStyle : linkStyle} onClick={() => handleButtonClick("Service")}>
          Services
        </Link>
        <Link to="/blog" className="Blog" style={activeButton === "Blog" ? activeLinkStyle : linkStyle} onClick={() => handleButtonClick("Blog")}>
          Blog
        </Link>
        <Link to="/contact" className="Contact" style={activeButton === "Contact" ? activeLinkStyle : linkStyle} onClick={() => handleButtonClick("Contact")}>
          Contact
        </Link>
{/* Desktop navigation (visible on screens wider than 768px stops here) */}

        


<div className="Follow" style={{ width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center', gap: 24, display: 'inline-flex' }}>


{/* Add images inside these div elements */}
<div className="Vector" style={{ width: 19.87, height: 19.12 }}>
  <img src="/assets/images/instagram.png" alt="instagram" />
</div>
<div className="Vector" style={{ width: 11.59, height: 11.15 }}>
  <img src="/assets/images/Facebook.png" alt="Facebook" />
</div>
<div className="Vector" style={{ width: 20.53, height: 19.12 }}>
  <img src="/assets/images/Linkdin.png" alt="Linkdin" />
</div>
<div className="Vector" style={{ width: 19.17, height: 15.32 }}>
  <img src="/assets/images/Twitter.png" alt="Twitter" />
</div>


<Link to="./requestqoute" className="RequestQuote" style={linkStyle}>
<p style={RequestqoutebG}>
Request Quote
</p>
</Link>
</div>


<div className="emptyRight" style={{linkStyle}}><p style={{backgroundColor:'#FFDA56',width:'100px', height:'50px',}}></p></div>
      </div>

      </div>
    
  );
}





export default Nav;
