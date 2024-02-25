import React,{ useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Complaints() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs.sendForm('service_d6pot4c', 'template_r3bau5n', form.current, {publicKey: '_yYDE2QkWcxEoWb',})
      .then(() => {
        setLoading(false);
        setMessage('Your conplaint has been sent successfully.');
        setStatus('SUCCESS');
        form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessage('Failed to send your complaint. Please try again later.');
          setStatus('ERROR');

        },
      );
  };

  return (
    <div style={{width:"100%"}} className='bg-dark d-flex justify-content-center p-5'>
    <div className="container5">
      <div className="form">
          <h2 className=' '>Raise your complaints with us....</h2>
          <form id="contact-form" ref={form} onSubmit={sendEmail} autoComplete='off'>
            <input type="hidden" name="contact_number" required />
              <div className="inputBx">
                  <input type="text" name="user_name" placeholder="Name"/>
              </div>
              <div className="inputBx">
                  <input type="email" name="user_mail" placeholder="Email" required />
              </div>
              <div className="inputBx">
                  <textarea name="message" id="" placeholder="Your complaint..." required></textarea>
              </div>
              <div className="inputBx">
                  {/* <input type="submit" value="Send" className="bg-success" disabled={loading}/> */}
                  <button className="w-100 btn btn-lg btn-success rounded-5" type="submit" value="Send"  disabled={loading}>
          {
              loading ? (<>
                <span className='ml-2'>Sending...</span>
              </>
              ) : 'Send'
            }
          </button>
              </div>
          </form>
          <div className="status">
              {status === 'SUCCESS' ? <p className="text-success mt-4 text-center">{message}</p> : <p className="text-danger mt-4 text-center">{message}</p>}
              </div>
      </div>
  </div>
    </div>
  )
}
