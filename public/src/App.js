import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import Blog from "./components/Blog"; // Import the Pages component
import Service from "./components/Service"; // Import the Project component
import Contact from "./components/Contact"; // Import the Contact component
import Requestqoute from  "./components/Requestqoute";
import AboutUs from './components/AboutUs';



function App(){

  return(
<>

<Router>

 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/services" element={<Service />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/requestqoute" element={<Requestqoute/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    
  </Routes>


 
</Router>


</>

  );



}

export default App;