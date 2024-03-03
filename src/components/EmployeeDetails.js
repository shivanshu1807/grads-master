// EmployerDetails.js
import React, { useEffect, useState } from 'react';

const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Token:', token); // Add this line to check the token
                const response = await fetch("http://localhost:5000/api/auth/getuser", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': token,
                    },
                });
                const data = await response.json();
                setEmployee(data);
            } catch (error) {
                console.error("Error fetching employer details:", error);
            }
        };
    
        fetchEmployeeDetails();
    }, []);

    return (
        <div>
            <h2>Employee Details</h2>
            <ul>
                <li>Name: {employee.name}</li>
                <li>Email: {employee.email}</li>
                {/* Add more details as needed */}
            </ul>
        </div>
    );
};

export default EmployeeDetails;
