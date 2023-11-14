import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
 
    const [formData, setFormData] = useState({
       
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
           

      });

      const [message, setMessage] = useState('');
      const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Convert first_name and last_name to lowercase in formData
        setFormData({
            ...formData,
            first_name: formData.first_name.toLowerCase(),
            last_name: formData.last_name.toLowerCase(), // Change Last_Name to last_name
        });

        try {
            // Make an Axios request to your endpoint with formData
            // Replace 'your_endpoint_url' with the actual endpoint URL
            const response = await axios.post(
                'https://api.peakreachdelivery.com/api/v1/users',
                formData
            );

            // If the request is successful, display a success message
            setMessage('Form submitted successfully!', response.data);
            // If the request is successful, redirect to the login page
            navigate('/uploadImage');
        } catch (error) {
            // If there's an error, display an error message
            setMessage('Form submission failed. Please try again later.');
        }

        // Open the modal to display the message
        setIsModalOpen(true);
    };






    return (

        <form className="form">
            <div className="flex-column">  
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
                                <>
                                    {/* pagination */}
                                    <div className="pagination">
                                        <div className="circle active"></div>
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                    </div>
                                </>
                                <br />
            </div>

          





        {/* Add input fields with 'onChange' handlers to update 'formData' */}
        <input
          type="text"
          placeholder="First Name"
          className="input"
          value={formData.first_name}
          id="first_name"
          onChange={(e) => setFormData({ ...formData,first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input"    
        id="last_name"
        value={formData.last_name}
        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="input"
          id="phone"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

       


        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <button type="submit" className="next-button" onClick={handleFormSubmit}>
            Next
          </button>
                            </div>
      

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
            </div>
        </form>

    );
}

export default Register;
