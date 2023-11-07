import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function Register() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
      const [message, setMessage] = useState('');
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Make an Axios request to your endpoint with formData
          // Replace 'your_endpoint_url' with the actual endpoint URL
          const response = await axios.post('https://peakreachdelivery.com/logistic/registerForm.php', formData);
    
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
        <div className="content" style={{ background: '#FFEFCE', margin: '0px' }}>
          <img
            src="/assets/images/logo.png"
            style={{
              width: '225.1px',
              height: '56px'
            }}
            alt="logo"
          />
          <div className="d-flex gap-3">
            <p className="register">Register</p>
            <p className='Sub-text'>Sign up and begin using PeakReach Logistics for seamless deliveries</p>
          </div>

          





          <form style={{ borderRadius: '10px', padding: '20px', margin: '20px', background: '#FFEFCE' }}>
        {/* Add input fields with 'onChange' handlers to update 'formData' */}
        <input
          type="text"
          placeholder="First Name"
          className="form-input"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form-input"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="form-input"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <button type="submit" className="next-button" onClick={handleFormSubmit}>
            Next
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

export default Register;
