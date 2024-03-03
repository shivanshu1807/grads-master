import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    state: '',
    city: '',
    address: '',
    description: '',
    requirements: '',
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  // const handleAddJob = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await axios.post('http://localhost:5000/api/auth/addjob', jobData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'auth-token': token,
  //       },
  //     });
  //     console.log('Job added successfully:', response.data);
  //     // You can redirect or update state as needed after adding a job
  //   } catch (error) {
  //     console.error('Error adding job:', error);
  //   }
  // };

  const handleAddJob = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { title, company, state, city, address, description, requirements } = jobData;

    const response = await fetch("http://localhost:5000/api/auth/addjob", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
        },
        body: JSON.stringify({ title, company, state, city, address, description, requirements })
    });

    const json = await response.json();
    console.log(json);

    // if (json.success) {
    //     // Save the auth token and redirect
    //     localStorage.setItem('token', json.authtoken);
    //     localStorage.setItem('userType', 'employer');
    //     navigate("/");
    // }
}

  return (
    <div>
      <h2>Add Job</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={jobData.title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company</label>
          <input type="text" className="form-control" id="company" name="company" value={jobData.company} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input type="text" className="form-control" id="state" name="state" value={jobData.state} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" name="city" value={jobData.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="location" name="address" value={jobData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={jobData.description} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="requirements" className="form-label">Requirements</label>
          <textarea className="form-control" id="requirements" name="requirements" value={jobData.requirements} onChange={handleChange} />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleAddJob}>
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
