import React from 'react';
import AllJobs from './DisplayJobs';
import { Link } from 'react-router-dom';
import './styles/home.css'; 

function Home() {
  return (
    <div className='container'>
      <h1 className='para'>Find Your Dream Job</h1>
      <fieldset className='full'>
        <form className="d-flex relative-container">
          <div className=" form-content">
            <input className="form-control small-input" type="search" placeholder="Skills" aria-label="Search" />
            <input className="form-control small-input" type="search" placeholder="Experience" aria-label="Search" />
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="stateDropdown" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Select State
              </button>
              <div className="dropdown-menu" aria-labelledby="stateDropdown">
                <Link className="dropdown-item" to="#">Andhra Pradesh</Link>
                <Link className="dropdown-item" to="#">Arunachal Pradesh</Link>
                <Link className="dropdown-item" to="#">Assam</Link>
                {/* ... (rest of your dropdown items) */}
              </div>
            </div>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </div>
        </form>
        </fieldset>
      <AllJobs />
      
    </div>
  );
}

export default Home;
