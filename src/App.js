import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
//import Home from "./components/Home"; // Import the Home component
import Blog from "./components/Blog"; // Import the Pages component
import Service from "./components/Service"; // Import the Project component
import Contact from "./components/Contact"; // Import the Contact component
import Requestqoute from  "./components/Requestqoute";
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import Login from './components/Login';
import WelcomeSreen from './components/WelcomeSreen'; 
import ForgetPassword from './components/ForgetPassword';


function App(){

  return(
<>

<Router>

 
  <Routes>
    <Route path="/" element={<WelcomeSreen />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/services" element={<Service />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/requestqoute" element={<Requestqoute/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/welcomeSreen" element={<WelcomeSreen/>}/>
    <Route path="/forgetPassword" element={<ForgetPassword/>}/>
  </Routes>

 
</Router>


</>

  );



}

export default App;
