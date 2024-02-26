import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../assets/Images/Logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = 'http://localhost:3000';
  const navigate = useNavigate()
;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });     
  };


  const handleSubmit=async(e)=>{
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill all the fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res=await fetch(`${baseUrl}/auth/signup`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      });
      const data=await res.json()
      console.log(data);
      if (data.success===false) {
        setLoading(false);
       return setErrorMessage("Username or Email already exists! Please try again.");
       
      }
      if (res.ok) {
        navigate('/signin')
      }
    } 
    catch (error) {
      setErrorMessage(error.message || "Something went wrong! Please try again.");
      setLoading(false);
    }
  };

  
  return (
    <div style={{width:'100%'}} className=' bg-dark'>
<div className="container col-xl-10 col-xxl-8 px-4 py-5 ">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center ">
      <Image src={logo}   />
      <h3 className='fs-3 fw-medium text-white text-center'><span className='fs-1'>G</span>reen <span className='fs-1'>G</span>uard</h3>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">

        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit} autoComplete='off'>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange}/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange}/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
           
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit" disabled={loading}>
          {
              loading ? (<>
                <span className='ml-2'>Loading...</span>
              </>
              ) : 'Sign Up'
            }
          </button>
          <hr className="my-4"/>
          <small className="text-body-secondary">Already have an account! <Link to='/signin' className='t text-decoration-none'>Login</Link> </small>
          {
            errorMessage && <h5 className='mt-5 text-danger'>
              {errorMessage}
            </h5>
          }
        </form>
      </div>
    </div>
  </div>
    </div>
    
  )
}
