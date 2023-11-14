import React, { useState } from 'react';
import './Login.css';
import './ForgetPassword.css';
//import { Link } from "react-router-dom";
          
import axios from 'axios';

function ForgetPassword() {
    const [formData, setFormData] = useState({
        Password: '',
        VerificationCode: '4062', // Initialize with four underscores or an empty string
    });

      const [message, setMessage] = useState('');
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Make an Axios request to your endpoint with formData
          // Replace 'your_endpoint_url' with the actual endpoint URL
            const response = await axios.post('https://api.peakreachdelivery.com/api/v1/users/users/forgot-password', formData);
            
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
                        <p className="forgot_pas">Forgot password</p>
                        <p className='Sub-text'>Enter the verification code sent to your email foobarbaz@gmail.com</p>
          </div>

          




                    

                    <form className="form">

                        <>
                            {/* pagination */}
                            <div className="pagination">
                                
                                <div className="circle"></div>
                                <div className="circle active"></div>
                                <div className="circle"></div>
                            </div>
                        </>
                        <div className="content">
                            {/* Password reset verification inputs */}
                            <div className="inp">


                               

                                <input
                                    maxLength="1"
                                    className="input2"
                                    type="text"
                                    placeholder=""
                                    value={formData.VerificationCode[0]}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            VerificationCode: e.target.value + formData.VerificationCode.slice(1),
                                        })
                                    }
                                />
                                <input
                                    maxLength="1"
                                    className="input2"
                                    type="text"
                                    placeholder=""
                                    value={formData.VerificationCode[1]}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            VerificationCode: formData.VerificationCode[0] + e.target.value + formData.VerificationCode.slice(2),
                                        })
                                    }
                                />
                                <input
                                    maxLength="1"
                                    className="input2"
                                    type="text"
                                    placeholder=""
                                    value={formData.VerificationCode[2]}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            VerificationCode: formData.VerificationCode.slice(0, 2) + e.target.value + formData.VerificationCode.slice(3),
                                        })
                                    }
                                />
                                <input
                                    maxLength="1"
                                    className="input2"
                                    type="text"
                                    placeholder=""
                                    value={formData.VerificationCode[3]}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            VerificationCode: formData.VerificationCode.slice(0, 3) + e.target.value,
                                        })
                                    }
                                />
                            </div>                             
                                         


        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <button type="submit" className="next-button" onClick={handleFormSubmit}>
            Next
          </button>
          
                            </div></div>
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
