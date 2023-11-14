import React, { useState, useEffect } from "react";
import axios from 'axios';

import './Nav.css';
import Nav from './Nav';
import './Order.css';

function Order() {
    const [userData, setUserData] = useState(null);
    const [formData, setFormData] = useState({
        parcelSize: '',
        pickupLocation: '',
        receiverName: '',
        receiverPhone: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJzL25pY2hvQGdtYWlsLmNvbSIsInVpZCI6IiIsImlzcyI6InBlYWstc2VydmljZS1wYXNzd29yZC1yZXNldCIsImV4cCI6MTY5MTA5MzM5MSwibmJmIjoxNjkxMDkyNzkxLCJpYXQiOjE2OTEwOTI3OTF9.O7J8cQCJxYUVov5WffUtgIN9RzUZWhbTplTN3Sxk7wY';



                const response = await fetch('https://api.peakreachdelivery.com/api/v1/users/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error('Error fetching user profile:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post('https://api.peakreachdelivery.com/api/v1/users/orders', formData);
            console.log('Form submitted successfully!', response.data);
            setModalMessage('Order submitted successfully!');
        } catch (error) {
            console.error('Form submission failed. Please try again later.', error.message);
            setModalMessage('Order submission failed. Please try again later.');
        }

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
      <>
            <Nav />
       


            {userData && (
                <p className="userName">Hi {userData.username},</p>
            )}
         

           
            <form className="form">
                  
            <div className="container">
                <h2 className="new_order">New Order</h2>
                <p className="fill_the_f">Fill the form provided below with the necessary details
                    to initiate  <br /> the process of creating a new order.</p>
               
                <input
                    type="text"
                    className="input"
                    placeholder="Parcel Size"
                    id="parcelSize"
                    name="parcelSize"
                    value={formData.parcelSize}
                    onChange={(e) => setFormData({ ...formData, parcelSize: e.target.value })}
                />

                <div className="info-container">
                    <img className="info" src="assets/images/info.png" style={{ width: '20px', height: '20px' }} alt="info" />
                    <p className="how_do_i_k">How do I know my parcel size?</p>
                </div>

                <div className="coolinput">
                    <label htmlFor="input" className="text">Pickup location</label>
                    <input
                        type="text"
                        placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486"
                        name="pickupLocation"
                        className="input"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    />
                </div>

                <input
                    type="text"
                    className="input"
                    placeholder="Receiver Name"
                    id="receiverName"
                    name="receiverName"
                    value={formData.receiverName}
                    onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
                />

                <input
                    type="tel"
                    className="input"
                    placeholder="Receiver Phone"
                    id="receiverPhone"
                    name="receiverPhone"
                    value={formData.receiverPhone}
                    onChange={(e) => setFormData({ ...formData, receiverPhone: e.target.value })}
                />

                <button type="button" onClick={handleFormSubmit}>
                    Next
                </button>
                    </div>
               
           
                    </form>
   


            {/* Modal for displaying success/error messages */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Order;
