import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Register.css';
import axios from 'axios';

function ForgetPasswordemail() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
     
    });

    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();


        try {
            // Make an Axios request to your endpoint with formData
            // Replace 'your_endpoint_url' with the actual endpoint URL
            const response = await axios.post('https://api.peakreachdelivery.com/api/v1/users/reset-password-email', formData);

            // If the request is successful, display a success message
            setMessage('Verify 4-digit code sent to your email', response.data);
            // If the request is successful, redirect to the login page
            navigate('/ForgetPassword');
        } catch (error) {
            // If there's an error, display an error message
            setMessage('Incorrect email. Please try again later.');
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
                                <p className="register">Forgot password</p>
                                <p className='Sub-text'>Please provide the
                                    email linked to your account, and we'll send you a 4-digit
                                    code to reset your password</p>

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
                                type="email"
                                placeholder="Email"
                                className="form-input"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

export default ForgetPasswordemail;
