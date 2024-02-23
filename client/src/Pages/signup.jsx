import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../assets/Images/Logo.png'



export default function Signup() {
  return (
    <div style={{width:'100%'}} className=' bg-dark'>
<div className="container col-xl-10 col-xxl-8 px-4 py-5 ">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center ">
      <Image src={logo}   />
      <h3 className='fs-3 fw-medium text-white text-center'><span className='fs-1'>G</span>reen <span className='fs-1'>G</span>uard</h3>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" method='post'>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">Sign up</button>
          <hr className="my-4"/>
          <small className="text-body-secondary">By clicking Login, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
    </div>
    
  )
}
