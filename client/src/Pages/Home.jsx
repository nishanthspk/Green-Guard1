import React from 'react'
import { Link } from 'react-router-dom';
import Homelogo from '../assets/Images/Homelogo.png';

export default function Home() {
  return (
    <div style={{width:'100%'}} className='bg-dark'>
      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={Homelogo} class="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold  lh-1 mb-3 text-white">Protecting Our Planet's Lifeline</h1>
        <p class="lead text-light fw-normal">Join GreenGuardians to raise awareness about deforestation, report plant injuries, engage with a vibrant community dedicated to preventing and protecting plants, and stay informed with daily plant news. Together, let's cultivate a greener, healthier planet for future generations.</p>
        <div class="d-flex gap-3 justify-content-center flex-row">
        <Link to='/awareness'>
        <button type="button" class="btn btn-success btn-lg px-4">Awarness</button>
        </Link>
        <Link to='/news'>
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">News</button>
        </Link>
          
          
        </div>
      </div>
    </div>
  </div>
    </div>
    
  )
}
