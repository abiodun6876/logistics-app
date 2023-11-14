import React from 'react';
import './App.css';

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component


import Order from './components/Order';

import Register from './components/Register';
import Login from './components/Login';
import WelcomeSreen from './components/WelcomeSreen'; 
import ForgetPassword from './components/ForgetPassword';
import ForgetPasswordemail from './components/ForgetPasswordemail';
import ProfileImage from './components/ProfileImage';

function App(){

  return(
<>

<Router>

 
  <Routes>
    <Route path="/" element={<WelcomeSreen />} />
    <Route path="/home" element={<Home />} />
    <Route path="/order" element={<Order/>}/>
    
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/welcomeSreen" element={<WelcomeSreen/>}/>
    <Route path="/forgetPassword" element={<ForgetPassword/>}/>
    <Route path="/forgetPasswordemail" element={<ForgetPasswordemail />} />
    <Route path="/profileImage" element={< ProfileImage />} />
  </Routes>
          
 
</Router>


</>

  );



}

export default App;
