import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/Logo.png';
import { BiEnvelope } from 'react-icons/bi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


function MyFooter() {
  return (
    <>
      <div className='c container-fluid bg-dark'>
      <div className='d-flex justify-content-between flex-wrap  text-white mt-auto container border-top' >

          <div className='d-flex justify-content-center  align-items-center '>
            <Navbar.Brand as={Link} to="/" className='fs-2 fw-medium ' >
                <img src={logo} alt="Logo" height='80px' width='80px' className='me-2'/>
                <span className='fs-1'>G</span>reen <span className='fs-1'>G</span>uard
            </Navbar.Brand>
          </div>

            <div className='d-flex gap-5 flex-wrap'>
            <div className=' p-3'>
          <h6 className='text-white fs-4'>Contact us</h6>
          <div className='d-flex  gap-3 mt-5'>
          <BiEnvelope size={30}/>
          <FaLinkedin size={30} />
         <FaTwitter size={30} />
            </div>
            
          </div>

          <div className=' p-3'>
            <h6 className='text-white fs-4'>Services</h6>
            <div className='d-flex flex-column gap-2'>
            <Link to='/news' className='text-secondary text-decoration-none fs-6'>News</Link>
            <Link to='/awareness' className='text-secondary text-decoration-none fs-6'>Awareness</Link>
            <Link to='/complaints' className='text-secondary text-decoration-none fs-6'>Complaints</Link>
            </div>
          </div>

          <div className='p-3'>
          <h6 className='text-white fs-4'>Legal</h6>
            <div className='d-flex flex-column gap-2'>
            <Link to='/' className='text-secondary text-decoration-none fs-6'>Terms & Consitions</Link>
            <Link to='/' className='text-secondary text-decoration-none fs-6'>Privacy Policy</Link>
            <Link to='/' className='text-secondary text-decoration-none fs-6'>Terms of Use</Link>
            </div>
          </div>
            </div>
          

        </div>
        <p className="col-md-4 mb-0 text-white bg-dark w-100 text-center pb-4">&copy; 2024 Green Guard, All rights reserved.</p>
        </div>
    </>
  );
}

export default MyFooter;