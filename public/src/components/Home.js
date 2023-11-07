import React from "react";
import '../App.css';
import './Nav.css';
import Header from './Header';
import Nav from  './Nav';
import Banner from  './banner';
import './AboutUs.css';
import './Home.css';
import Footer from "./Footer";



function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <h2 className="big-heading" style={{ color: "black", fontSize: "42px", fontWeight: "bolder", fontFamily: "Rubik" }}>
        What We Do
      </h2>

      {/* About us section start here */}
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
      {/* About us section stop here */}
      <br/>    <br/>
      {/* We provide a full range of global logistics solution section start here */}
      <div >

{/* cuteout peakreach logo section stop here */}
<div class="image-container" style={{ backgroundImage: 'url("/assets/images/Background2.png")' }}>
  <div class="text">PEAKREACH</div>
</div>
{/*  cuteout peakreach logo logistics section stop here */}

  <div className="bg3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
    <div style={{ flex:1}}>
      <img
        src="/assets/images/man-riding-scooter-white-background.avif"
        alt="vector rider"
        style={{
          width: '30%',
          padding: '10px',
          position: 'absolute',
        
          left: 0,
        }}
      />
    </div>
    <div style={{ flex: 1 }}>
      <p className="we_provide">We provide a full range of global logistics solutions</p>
      <p className="leverage_a">
        Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
      </p>

      <div className="icon">
        <img src="/assets/images/vector5.png" alt="Icon 1" />
        <p className="delivery">Delivery on Time</p>
      </div>

      <div className="icon">
        <img src="/assets/images/vector5.png" alt="Icon 2" />
        <p className="optimized">Optimized Travel Cost</p>
      </div>
    </div>
  </div>
</div>

      {/* We provide full range global logistics section stop here */}





 {/* We provide full range global logistics section stop here */}
 

<ul class="list-group">
  <li>
    <i class="fas fa-box"></i> Delivered Packages
    <span class="badge">1294</span>
  </li>
  <li>
    <i class="fas fa-smile"></i> Satisfied Clients
    <span class="badge">3594</span>
  </li>
  <li>
    <i class="fas fa-motorcycle"></i> Number Of Riders
    <span class="badge">129</span>
  </li>
  <li>
    <i class="fas fa-network-wired"></i> Networks & Partners
    <span class="badge">4594</span>
  </li>
</ul>


 {/* We provide full range global logistics section stop here */}




 {/* Transporting Across The World section stop here */}
 <p className="transporti">Transporting Across Nigeria</p>


<div class="card-row">
  <div class="card">
    <img src="assets/images/truck-with-liquid2.avif" alt="Bag 1" />
    <div class="card-text">
      <p class="title">Liquid Transportation</p>
      <p class="subtitle">Premium Tankers</p>
    </div>
    <br/> <br/> <br/>
    <button class="view-more">Learn More</button>
  </div>
  <div class="card">
    <img src="assets/images/couple-making-plan-redecorate-house.jpg" alt="Bag 2" />
    <div class="card-text">
      <p class="title">Packaging Solutions</p>
      <p class="subtitle">Warehouse Management</p>
    </div> <br/> <br/> <br/>
    <button class="view-more">Learn More</button>
  </div>
  <div class="card">
    <img src="assets/images/close-up-delivery-person.jpg" alt="Bag 3" />
    <div class="card-text">
      <p class="title">Contract Logistics</p>
      <p class="subtitle">Road Transportation</p>
    </div> <br/> <br/> <br/>
    <button class="view-more">Learn More</button>
  </div>
 
</div>

 {/*Transporting Across The World section stop here */}

<br/><br/><br/>
{/*Footer start here */}
<Footer/>

{/*Footer stop here */}


      </>
  );
}

export default Home;
