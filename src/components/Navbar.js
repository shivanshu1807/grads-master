import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles/navbar.css'

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('Token exists');

    }
    else {
      console.log('Token missing, navigating to login');
      navigate("/");
    }
    // eslint-disable-next-line
  }, [])
  let location = useLocation();
  const isEmployeeLoggedIn = localStorage.getItem('token') && localStorage.getItem('userType') === 'employee';
  const isEmployerLoggedIn = localStorage.getItem('token') && localStorage.getItem('userType') === 'employer';

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Grads On Hire
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/recruiters' ? 'active' : ''}`}
                to="/recruiters"
              >
                Recruiters
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/findjob' ? 'active' : ''}`}
                to="/findjob"
              >
                Find a Job
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          {isEmployeeLoggedIn && (
            <div className="btn-group">
              <button type="button" className="dd btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                Action
              </button>
              <div className="nav-item dropdown">
                <ul className="dropdown-menu" aria-labelledby="employeeDropdown">
                  <li>
                    <Link className="dropdown-item" to="/getemployeedetails">
                      My Account
                    </Link>
                  </li>
                  <li>

                    <Link className="dropdown-item" to="/showjobs">
                      All Jobs
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {isEmployerLoggedIn && (
            <div className="btn-group">
              <button type="button" className="dd btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                Action
              </button>
              <li className="nav-item dropdown">
                <ul className="dropdown-menu" aria-labelledby="employerDropdown">
                  <li>
                    <Link className="dropdown-item" to="/getemployerdetails">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/newjob">
                      New Job
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          )}

          {!localStorage.getItem('token') ? (
            <div className="d-flex align-items-center">
              <Link className="dd btn btn-success mx-2" to="/EmployeeLogin" role="button">
                Login
              </Link>
              <Link className="dd btn btn-success mx-2" to="/signup" role="button">
                Signup
              </Link>
              <div className="btn-group">
                <button
                  type="button"
                  className="dd btn btn-success dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employer
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/EmployerLogin">
                      Employer Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/EmployerSignup">
                      Employer Signup
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button onClick={handleLogout} className="dd btn btn-success mx-2">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from 'react'
// import { Link, useLocation, useNavigate } from "react-router-dom";



// const Navbar = () => {
//     let navigate = useNavigate();
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/EmployeeLogin');
//     }
//     let location = useLocation();
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">Grads On Hire</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
//                         </li>
//                     </ul>
//                     {localStorage.getItem('token') ?<div className="btn-group">
//                         <button type="button" className="btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
//                             Action
//                         </button>
//                         <ul className="dropdown-menu">
//                             <li><Link className="dropdown-item" to="/getemployerdetails">My account</Link></li>
//                             <li><Link className="dropdown-item" to="#">Another action</Link></li>
//                             <li><Link className="dropdown-item" to="#">Something else here</Link></li>
//                             <li><hr className="dropdown-divider" /></li>
//                             <li><Link className="dropdown-item" to="#">Separated link</Link></li>
//                         </ul>
//                     </div>: null}
//                     {!localStorage.getItem('token') ? <form className="d-flex">
//                     <Link className="btn btn-primary mx-1" to="/EmployerLogin" role="button">Login</Link>
//                     <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
//                     <div className="btn-group">
//                         <button type="button" className="btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
//                             Employer
//                         </button>
//                     <ul className="dropdown-menu">
//                             <li><Link className="dropdown-item" to="/EmployerLogin">Employer Login</Link></li>
//                             <li><Link className="dropdown-item" to="/EmployerSignup">Employer Signup</Link></li>
//                             </ul>
//                             </div>
//                         {/* <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link> */}
//                     </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar