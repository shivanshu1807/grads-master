import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './styles/employeelogin.css'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('userType', 'employee');
            navigate("/");
        }
        else {

        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <body>


                <MDBContainer fluid className="p-3 my-5 h-custom">

                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="monitor" />
                        </MDBCol>

                        <MDBCol col='4' md='6'>
                            
                            {/* <div className="d-flex flex-row align-items-center justify-content-center text-center">
                                <MDBRow>
                                    <div>
                                <p className="lead fw-normal mb-0 me-3 text-center">Sign in with</p>
                                </div>
                                <div className='mt-3'>
                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>
                                </div>
                                </MDBRow>   
                            </div>
                            
                            <div className="divider d-flex align-items-center justify-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div> */}
                            <MDBCard className=' bg-glass shadow'>
                            <MDBCardBody className='p-5'>
                            <form onSubmit={handleSubmit}>
                                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' onChange={onChange} name='email' />
                                <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' onChange={onChange} name='password' />

                                <div className="d-flex justify-content-between mb-4">

                                    <a href="!#">Forgot password?</a>
                                </div>

                                <div className='text-center text-md-start mt-4 pt-2'>
                                    <MDBBtn type="submit" className="mb-0 px-5" size='lg'>Login</MDBBtn>
                                    <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/signup" className="link-danger">Register</Link></p>
                                </div>
                            </form>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    </MDBRow>
                    {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                        <div className="text-white mb-3 mb-md-0">
                            Copyright © 2020. All rights reserved.
                        </div>

                        <div>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='facebook-f' size="md" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='twitter' size="md" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='google' size="md" />
                            </MDBBtn>

                            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                                <MDBIcon fab icon='linkedin-in' size="md" />
                            </MDBBtn>

                        </div>

                    </div> */}

                </MDBContainer>
            </body>
        </>
    )
}

export default Login
