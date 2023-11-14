import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import './ProfileImage.css'; 


function ProfileImage() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle changing the profile image
    const handleChangeImage = async () => {
        try {
            const response = await axios.post(
                'https://api.peakreachdelivery.com/api/v1/users/changeProfileImage'
            );
            setMessage('Profile image changed successfully!', response.data);
        } catch (error) {
            setMessage('Failed to change profile image. Please try again later.');
        }
        setIsModalOpen(true);
    };

    // Function to handle removing the profile image
    const handleRemoveImage = async () => {
        try {
            const response = await axios.post(
                'https://api.peakreachdelivery.com/api/v1/users/removeProfileImage'
            );
            setMessage('Profile image removed successfully!', response.data);
        } catch (error) {
            setMessage('Failed to remove profile image. Please try again later.');
        }
        setIsModalOpen(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://api.peakreachdelivery.com/api/v1/users/updateProfileImage'
            );
            setMessage('Profile image uploaded successfully!', response.data);
            navigate('/RegisterPassword');
        } catch (error) {
            setMessage('Profile image upload failed. Please try again later.');
        }
        setIsModalOpen(true);
    };

    return (
        <form className="form">
           
            <div className="container1">
                <img src="/assets/images/rafiki.png" className="sideImage" alt="Rafiki" />
                <div className="center-container">

                    <div className="center-container">
                        <img
                            src="/assets/images/logo.png"
                            style={{
                                width: '225.1px',
                                height: '56px',
                            }}
                            alt="logo"
                        />
                        <div className="d-flex gap-3">
                            <p className="register">Register</p>
                            <p className="Sub-text">
                                Sign up and begin using peakreach logistics for seamless deliveries
                            </p>

                            {/* Pagination */}
                            <div className="pagination">

                                <div className="circle"></div>
                                <div className="circle active"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                        <br />


                        
                           
                        {/* Profile Image */}
                        
                        <div className="center-container">
                            <div className="image">
                                <img
                                    src="/assets/images/profileImage.png"
                                    alt="Profile"
                                />
                            </div>

                            <div className="image-options">
                                <p onClick={handleChangeImage} className="ChangeImage">CHANGE IMAGE</p>
                                <p onClick={handleRemoveImage} className="RemoveImage">REMOVE IMAGE</p>
                            </div>
                        </div>       
                           

                       
                        {/* Previous and Next Buttons */}
                        <div className="buttons-container">
                            <button
                                type="button"
                                className="next-button"
                                onClick={() => navigate('/Register')}
                            >
                                Previous
                            </button>
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
        </form>
    );
}

export default ProfileImage;
