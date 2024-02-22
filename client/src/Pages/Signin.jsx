import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../assets/Images/Logo.png'



export default function Signin() {
  return (
    // <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-content-center align-items-center bg-dark'>
    //     <Container fluid className="login">
    //         <Row>
    //             <Col className="d-flex justify-content-center align-items-center pt-5"  lg="6" >
    //                 <Image src={logo}   /> <h3 className='fs-3 fw-medium text-white '><span className='fs-1'>G</span>reen <span className='fs-1'>G</span>uard</h3>
    //             </Col>
    //             <Col className=" d-flex flex-column justify-content-center align-items-center gap-4 ">
    //                 <h1>Login</h1>
    //                 <Form style={{ width: '300px' }} className='d-flex flex-column gap-4 '>
    //                 <Form.Group controlId="formBasicEmail" >
    //                         <Form.Control type="email" placeholder="Enter email" required className='bg-info-subtle rounded-4 p-3' />
    //                     </Form.Group>
    //                     <Form.Group controlId="formBasicPassword">
    //                         <Form.Control type="password" placeholder="Password" required className='bg-info-subtle rounded-4 p-3' />
    //                     </Form.Group>
    //                     <Button variant="success" type="submit" className='p-3 rounded-4'>Login</Button>
    //                 </Form>
    //             </Col>
    //         </Row>
    //     </Container>
    //     </div>
    <div style={{width:'100%'}} className=' bg-dark'>
<div className="container col-xl-10 col-xxl-8 px-4 py-5 ">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center ">
      <Image src={logo}   />
      <h3 className='fs-3 fw-medium text-white text-center'><span className='fs-1'>G</span>reen <span className='fs-1'>G</span>uard</h3>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">Login</button>
          <hr className="my-4"/>
          <small className="text-body-secondary">By clicking Login, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
    </div>
    
  )
}
