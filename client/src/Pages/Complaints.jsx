import React from 'react'

export default function Complaints() {
  return (
    <div style={{width:"100%"}} className='bg-dark d-flex justify-content-center p-5'>
    <div class="container5">
      <div class="form">
          <h2 className='b '>Raise your complaints with us....</h2>
          <form id="contact-form" autocomplete="off">
            <input type="hidden" name="contact_number"/>
              <div class="inputBx">
                  <input type="text" name="user_name" placeholder="Name"/>
              </div>
              <div class="inputBx">
                  <input type="email" name="user_mail" placeholder="Email"/>
              </div>
              <div class="inputBx">
                  <textarea name="message" id="" placeholder="Your complaints..."></textarea>
              </div>
              <div class="inputBx">
                  <input type="submit" value="Send" class="bg-success"/>
              </div>
          </form> 
      </div>
  </div>
    </div>
  )
}
