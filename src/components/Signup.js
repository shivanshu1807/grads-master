import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
}
  from 'mdb-react-ui-kit';
import './styles/employeesignup.css'
const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      localStorage.setItem('userType', 'employee');
      navigate("/");
    }

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
        <form onSubmit={handleSubmit}>
          <MDBRow>

            <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

              <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                The best offer <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>for you</span>
              </h1>

              <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>

            </MDBCol>

            <MDBCol md='6' className='position-relative'>

              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <MDBCard className='my-5 bg-glass'>
                <MDBCardBody className='p-5'>


                  <MDBInput wrapperClass='mb-4' placeholder='Name' name='name' onChange={onChange} id='form1' type='text' />


                  <MDBInput wrapperClass='mb-4' placeholder='Email' name='email' onChange={onChange} id='form3' type='email' />
                  <MDBInput wrapperClass='mb-4' placeholder='Password' name='password' onChange={onChange} id='form4' minLength={5} type='password' />
                  <MDBInput wrapperClass='mb-4' placeholder='Confirm password' name='cpassword' onChange={onChange} minLength={5} id='form2' type='password' />

                  <MDBBtn className='w-100 mb-4' size='md' type="submit">sign up</MDBBtn>

                  <div className="text-center">

                    <p>or sign up with:</p>

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

                </MDBCardBody>
              </MDBCard>

            </MDBCol>

          </MDBRow>
        </form>
      </MDBContainer>
    </>
  )
}

export default Signup