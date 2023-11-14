import React, { useState, useEffect } from "react";
import '../App.css';
import './Nav.css';
import Nav from './Nav';

import './Home.css';

function Home() {
    const [userData, setUserData] = useState(null);
    // Replace 'yourAuthToken' with the actual authentication token
    

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJzL25pY2hvQGdtYWlsLmNvbSIsInVpZCI6IiIsImlzcyI6InBlYWstc2VydmljZS1wYXNzd29yZC1yZXNldCIsImV4cCI6MTY5MTA5MzM5MSwibmJmIjoxNjkxMDkyNzkxLCJpYXQiOjE2OTEwOTI3OTF9.O7J8cQCJxYUVov5WffUtgIN9RzUZWhbTplTN3Sxk7wY';

                // Make an API call to fetch user profile data
                const response = await fetch('https://api.peakreachdelivery.com/api/v1/users/profile', {
                    method: 'GET',
                    headers: {
                        // Add any headers required for authentication or other purposes
                        'Content-Type': 'application/json',
                        // Add your authentication token if needed
                        'Authorization': `Bearer ${authToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    // Set the user data in the state
                    setUserData(data);
                } else {
                    console.error('Error fetching user profile:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error.message);
            }
        };

        // Call the function to fetch user profile data
        fetchUserProfile();
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <>
            <Nav />
            {userData && (
                <p className="userName">Hi {userData.username},</p>
            )}
            <div className="container2">
               

                    <img className="graybox" src="assets/images/graybox.png" alt="Gray Box" />
                    <p className="send_a_pac">Send a package</p>
                    <p className="our_dedica">Our dedicated delivery agents are ready to pick up and deliver a wide range of items for you,</p>
                    <button className="createOrder">
                        <p>Create Order</p>
                    </button>
               


            </div>
        </>
    );
}

export default Home;
