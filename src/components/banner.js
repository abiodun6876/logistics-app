import React from "react";
import './Banner.css';

function Banner() {
  return (
    <div className="Content" style={{ backgroundImage: 'url("/assets/images/background.png")', backgroundSize: 'cover' }}>
      <p className="logistics">Logistics & Supply Chain Solutions</p>
      <div className="SubContent">
        <div className="YourGateway">
          Your Gateway <br /> to any Destination in the Nigeria
        </div>
        <p className="in_augue_l">
        Peakreach, best logistics services in Nigeria. Send your packages with our mobile app.
        </p>
        <div className="ExploreMore">Download Our App</div>
      </div>
      <div className="DownloadApp">
  <div className="app-icons">
    <img src="/assets/images/apple-app-store-badge-white.png" alt="Apple Store" />
    <img src="/assets/images/play-store-icon.png" alt="Play Store" />
  </div>
</div>

  
    </div>
  );
}

export default Banner;
