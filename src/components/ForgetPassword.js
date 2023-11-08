import React, { useState } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
          
import axios from 'axios';

function ForgetPassword() {

    const [formData, setFormData] = useState({
        
        email: '',
        Password: '',
      });
      const [message, setMessage] = useState('');
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Make an Axios request to your endpoint with formData
          // Replace 'your_endpoint_url' with the actual endpoint URL
          const response = await axios.post('https://peakreachdelivery.com/logistic/ForgetPassword.php', formData);
    
          // If the request is successful, display a success message
          setMessage('Form submitted successfully!', response.data);
        } catch (error) {
          // If there's an error, display an error message
          setMessage('Form submission failed. Please try again later.');
        }
    
        // Open the modal to display the message
        setIsModalOpen(true);
      };

   



  return (
    <div className="register-container">
      <img src="/assets/images/rafiki.png" className="loginImage" alt="Rafiki" />
      <div className="big-container">
        <div className="content2" style={{ background: '#FFEFCE', margin: '0px' }}>
          <img
            src="/assets/images/logo.png"
            style={{
              width: '225.1px',
              height: '56px'
            }}
            alt="logo"
          />
          <div className="d-flex gap-3">
            <p className="login">Login</p>
            <p className='Sub-text'>Log in to access peakreach logistics for swift deliveries</p>
          </div>

          





          <form style={{ borderRadius: '10px', padding: '20px', margin: '20px', background: '#FFEFCE' }}>
        {/* Add input fields with 'onChange' handlers to update 'formData' */}
       
        
       

<input
  type= "password"
  placeholder="New Password"
  className="form-input"
  value={formData.Password}
  onChange={(e) => setFormData({ ...formData, Password: e.target.value })}
/>




        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <button type="submit" className="next-button" onClick={handleFormSubmit}>
            Login
          </button>
          
        
        </div>
      </form>


      {/* Modal for displaying success/error messages */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{message}</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
  
    

        </div>
      </div>
    </div>
    );
}

export default ForgetPassword;
