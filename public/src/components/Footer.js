import React from "react";
import './Footer.css';


function Footer() {
  return (
    <>
      <footer className="footer" style={{  backgroundImage: 'url("/assets/images/footer-bg.png")'}}>
        <div className="footer-content">
          <div className="footer-column">
            <h3>Peakreach Logistics</h3>
            <p>
            To become the leading provider of logistics services in Nigeria, catering to a wide range of sectors including supermarkets, pharmacies, schools, food, and package delivery through our innovative mobile app.
            </p>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
           < p>Address: Gwarinpa, Abuja,Nigeria</p>
            <p>Email: peakreach@gmail.com</p>
            <p>Phone: 08128224769, 07042744334</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
            <li><a href="/">Home</a></li>        
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>


            </ul>
          </div>
          <div className="footer-column">
            <h3>Subscribe</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="footer-column">
            <h3>Download Our App</h3>
            <div className="app-icons">
            <img src="/assets/images/play-store-icon.png" alt="Play Store" />
            </div>
            <div className="app-icons">
              <img src="/assets/images/apple-app-store-badge-white.png" alt="Apple Store" />
              
            </div>
          </div>
        
        </div>
        <p className="copyright">Copyright © 2023 | Peakreach Logistics Services</p>

      </footer>
    </>
  );
}

export default Footer;
