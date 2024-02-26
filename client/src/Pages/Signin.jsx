import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import logo from '../assets/Images/Logo.png'
import { Link, useNavigate } from 'react-router-dom';




export default function Signin() {
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const baseUrl = 'http://localhost:3000';
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(email === "" || password === "") {
        
        return setErrorMessage('Please fill all the fields');
      }
      else{
        setEmail("");
        setPassword("");
    }
      setLoading(true);
      setErrorMessage(null);
      await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status === 'ok'){
          console.log('success', data.user);
          window.localStorage.setItem('token', data.data);
          window.localStorage.setItem('loggedIn', true);
          navigate('/');
        }
        else{
          setLoading(false);
          setErrorMessage('Something went wrong!...');

        }
      });
    


  }

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
            <input type="email" className="form-control" id="email" placeholder="name@example.com"  onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          
          <div className="checkbox mb-3">
            
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit"  disabled={loading}>
          {
              loading ? (<>
                <span className='ml-2'>Loading...</span>
              </>
              ) : 'Login'
            }
          </button>
          <hr className="my-4"/>
          <small className="text-body-secondary">Don't have any account! <Link to='/signup' className='t text-decoration-none'>Sign up</Link> </small>
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
