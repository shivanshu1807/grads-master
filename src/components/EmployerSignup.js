import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerSignup = (props) => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        phnno: "",
        companyname: "",
        pincode: "",
        address: "",
        password: "",
        cpassword: ""
    });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phnno, companyname, pincode, address, password } = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createemployer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phnno, companyname, pincode, address, password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('userType', 'employer');
            navigate("/");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phnno" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phnno" name='phnno' onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyname" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="companyname" name='companyname' onChange={onChange} aria-describedby="companyname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">Pincode</label>
                    <input type="text" className="form-control" id="pincode" name='pincode' onChange={onChange} aria-describedby="pincode" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name='address' onChange={onChange} aria-describedby="address" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EmployerSignup;
