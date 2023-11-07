
import React from "react";

import '../App.css';
import './Nav.css';
import Header from './Header';
import Nav from  './Nav';
import Banner from  './banner';

import Footer from "./Footer";


function Requestqoute() {
  return (
    <div>
        <Header/>
     <Nav/>
     <Banner/>
      {/* Add your content here */}


      <br/><br/><br/>
{/*Footer start here */}
<Footer/>

{/*Footer stop here */}
    </div>
  );
}

export default Requestqoute;
