// Home.js

import React from 'react';
import AllJobs from './DisplayJobs';
import { Link } from 'react-router-dom';
import bg from './bg.png';
import './styles/home.css'; // Import the CSS file

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
        <form className="d-flex relative-container" style={backgroundStyle}>
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
      
      <AllJobs />
    </div>
  );
}

export default Home;
