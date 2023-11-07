
import React, { useState } from "react";
import '../App.css';
import './AboutUs.css';
import Header from './Header';
import Nav from  './Nav';
import Banner from  './banner';
import Footer from "./Footer";






function AboutUs() {

    const [content, setContent] = useState({
        vision:
          "To become the leading provider of logistics services in Nigeria, catering to a wide range of sectors including supermarkets, pharmacies, schools, food, and package delivery through our innovative mobile app.",
        mission:
          "Our mission is to deliver exceptional logistics services with a strong focus on reliability, efficiency, and customer satisfaction. We aim to simplify the delivery process for our clients and create a positive impact on their operations.",
        approach:
          "At Peakreach Logistics, we leverage agile frameworks to provide comprehensive logistics solutions. We prioritize collaboration and strategic thinking to enhance our overall value proposition. Our approach is customer-centric and driven by technology."
      });
    
    

      const handleButtonClick = (key) => {
        // Update the content based on the button clicked
        if (key === "vision") {
          setContent({
            ...content,
            vision:
              "To become the leading provider of logistics services in Nigeria, catering to a wide range of sectors including supermarkets, pharmacies, schools, food, and package delivery through our innovative mobile app."
          });
        } else if (key === "mission") {
          setContent({
            ...content,
            mission:
              "Our mission is to deliver exceptional logistics services with a strong focus on reliability, efficiency, and customer satisfaction. We aim to simplify the delivery process for our clients and create a positive impact on their operations."
          });
        } else if (key === "approach") {
          setContent({
            ...content,
            approach:
              "At Peakreach Logistics, we leverage agile frameworks to provide comprehensive logistics solutions. We prioritize collaboration and strategic thinking to enhance our overall value proposition. Our approach is customer-centric and driven by technology."
          });
        }
      };


    
    return (

        <>
        <Header/>
        <Nav/>
        <Banner/> 



{/* About us section start here */}
<br/>
<br/>

<div className="app-container">
      <section className="about-us">
        <div className="about-us-left">
          {/* Small Image */}
          <img src="/assets/images/small-image.jpg" alt="Small pic" className="small-pic" />

          {/* Big Image */}
          <img src="/assets/images/big-image.jpg" alt="Big pic" className="big-pic" />
        </div>

        <div className="about-us-right">
          <h2 className="overview">Our Company Overview</h2>
          <p>
          Peakreach, best logistics services in Nigeria. Send your packages with our mobile app.
          </p>

           {/* Buttons Row */}
           <div className="buttons-row">
            <button onClick={() => handleButtonClick("vision")}>
              <span role="img" aria-label="Vision Icon">
                🌟
              </span>{" "}
              Our Vision
            </button>
            <button onClick={() => handleButtonClick("mission")}>
              <span role="img" aria-label="Mission Icon">
                🚀
              </span>{" "}
              Our Mission
            </button>
            <button onClick={() => handleButtonClick("approach")}>
              <span role="img" aria-label="Approach Icon">
                🛠️
              </span>{" "}
              Our Approach
            </button>
          </div>
          

          <p>{content.vision}</p>
          <p>{content.mission}</p>
          <p>{content.approach}</p>

          {/* Learn More Button */}
          <button className="learn-more-button">Learn More</button>
        </div>
      </section>
    </div>
    {/*About stops here */}
   

<br/><br/><br/>

{/* cuteout peakreach logo section stop here */}
<div class="image-container" style={{ backgroundImage: 'url("/assets/images/Background2.png")' }}>
  <div class="text">PEAKREACH</div>
</div>
{/*  cuteout peakreach logo logistics section stop here */}


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
    <button class="view-more">Learn more</button>
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

  export default AboutUs;