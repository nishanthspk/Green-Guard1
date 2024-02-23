import React from 'react'
import Awarness1 from '../assets/Images/awarness1.png';
import Awarness2 from '../assets/Images/awarness2.png';
import Awarness3 from '../assets/Images/awarness3.png';
import Awarness4 from '../assets/Images/awarness4.png';

export default function Awareness() {
  return (
  <>
   <div style={{width:'100%'}} className='bg-dark'>
      <div className="container-fluid  col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Awarness1} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3 text-white">Awareness about Deforestation:</h1>
            <p className="lead text-light fw-normal"> Deforestation is an urgent global issue threatening the balance of our ecosystems. Every day, vast expanses of forests are cleared for agriculture, logging, and urbanization, leading to habitat loss, biodiversity decline, and climate change.</p>
          </div>
        </div>
      </div>
    </div>

   <div style={{width:'100%'}} className='bg-dark'>
      <div className="container-fluid  col-xxl-8 px-4 py-5 ">
        <div className="row flex-lg-row-reverse d-flex flex-column-reverse align-items-center g-5 py-5 justify-content-center">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3 text-white">Report Plant Injuries:</h1>
            <p className="lead text-light fw-normal">Your voice matters in protecting our precious plant life.If you witness any instances of plant injuries, whether from human activities, disease, or natural disasters, don't hesitate to report them. By promptly reporting plant injuries, we can take necessary actions to mitigate damage, restore ecosystems, and prevent further harm to our invaluable greenery.</p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Awarness2} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>

   <div style={{width:'100%'}} className='bg-dark'>
      <div className="container-fluid  col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 justify-content-center">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Awarness3} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3 text-white">Engage with a Vibrant Community:</h1>
            <p className="lead text-light fw-normal">Become part of a dynamic community dedicated to preventing and protecting plants. Share your insights, experiences, and initiatives for plant conservation, and connect with like-minded individuals passionate about preserving our planet's flora. Together, we can exchange knowledge, collaborate on conservation efforts, and inspire positive change to ensure the health and vitality of our natural world.</p>
          </div>
        </div>
      </div>
    </div>

   <div style={{width:'100%'}} className='bg-dark'>
      <div className="container-fluid col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse d-flex flex-column-reverse align-items-center g-5 py-5 justify-content-center">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3 text-white">Dedicated to Preventing and Protecting Plants:</h1>
            <p className="lead text-light fw-normal">At our core, we are committed to proactive measures for preventing and protecting plants. From advocating for sustainable land use policies to implementing reforestation projects, we strive to address the root causes of plant loss and promote solutions that promote the resilience of our ecosystems. Join us in our mission to be stewards of the Earth and champions for plant preservation.</p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={Awarness4} className="d-block mx-lg-auto img-fluid rounded-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  </>
    
  )
}
