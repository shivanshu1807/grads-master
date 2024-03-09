import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/displayjobs.css'

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        const response = await axios.get('http://localhost:5000/api/auth/disjob', {
          headers: {
            'Content-Type': 'application/json'
          },
        });

        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error.response || error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <div key={job._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="text-muted">{job.description}</p>
                  <div className="row btnrow my-4">
                    <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-success btn-sm">Full Time</button></div>
                    <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-primary btn-sm" >Min. 1 year</button></div>
                  </div>
                  <div className="row btnrow my-4">
                    <div className="col-4 col-md-3">Location : {job.city}, {job.state}</div>
                    <div className="col-4 col-md-3">Address : {job.address}</div>
                    <div className="col-4 col-md-3">Skills : {job.requirements.join(', ')}</div>
                    <div className="col-4 col-md-3">Posted By : {job.employer.name} (Employer ID: {job.employer._id})</div>
                  </div>
                  <Link to="/Applyjobs" className="b1 btn btn-success">Apply</Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllJobs;
