import React, { useEffect, useState } from 'react';

const EmployerDetails = () => {
    const [employer, setEmployer] = useState({});

    useEffect(() => {
        const fetchEmployerDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Token:', token); // Add this line to check the token
                const response = await fetch("http://localhost:5000/api/auth/getemployer", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': token,
                    },

                });
                const data = await response.json();
                setEmployer(data);
            } catch (error) {
                console.error("Error fetching employer details:", error);
            }
        };

        fetchEmployerDetails();
    }, []);

    return (
        <div>
            <h2>Employer Details</h2>
            <ul>
                <li>Name: {employer.name}</li>
                <li>Email: {employer.email}</li>
                <li>Phone Number: {employer.phnno}</li>
                <li>Company Name: {employer.companyname}</li>
                <li>Pincode: {employer.pincode}</li>
                <li>Address: {employer.address}</li>
                {/* Add more details as needed */}
            </ul>
        </div>
    );
};

export default EmployerDetails;

