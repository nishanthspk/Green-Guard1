import React from 'react'

export default function Complaints() {
  return (
    <div style={{width:"100%"}} className='bg-dark d-flex justify-content-center p-5'>
    <div className="container5">
      <div className="form">
          <h2 className=' '>Raise your complaints with us....</h2>
          <form id="contact-form" autoComplete='off'>
            <input type="hidden" name="contact_number"/>
              <div className="inputBx">
                  <input type="text" name="user_name" placeholder="Name"/>
              </div>
              <div className="inputBx">
                  <input type="email" name="user_mail" placeholder="Email"/>
              </div>
              <div className="inputBx">
                  <textarea name="message" id="" placeholder="Your complaint..."></textarea>
              </div>
              <div className="inputBx">
                  <input type="submit" value="Send" className="bg-success"/>
              </div>
          </form> 
      </div>
  </div>
    </div>
  )
}
