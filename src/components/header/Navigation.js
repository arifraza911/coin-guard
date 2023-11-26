import React from 'react'
import {  Nav,  Navbar,  } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom';



const Navigation = () => {
  
const navigate =   useNavigate()


  return (
    <>
       

          <div  className='sticky-top' style={{backgroundColor:"#001529"}}>
   <Navbar className='container  '  expand="lg">
   
   <Navbar.Brand className='text-white  cursor-pointer' onClick={()=> navigate('/')} > <img src="./" alt="" /> <h2 className='text-danger' >Crypto Guard</h2></Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{background:"whitesmoke",}} />

   <Navbar.Collapse  id="basic-navbar-nav">
     <Nav  className="ml-auto  ">
       <Nav.Link  as={Link} to={'/search'} className='text-white  text-2xl font-bold ml-10 hover:text-blue-600'> <h5  >Search</h5></Nav.Link>
       <Nav.Link  as={Link} to={'/totalcoins'}  className='text-white  text-2xl font-bold ml-10'> <h5> Coins</h5></Nav.Link>
       <Nav.Link  as={Link} to={'/category'}  className='text-white  text-2xl font-bold ml-10'> <h5> Category</h5></Nav.Link>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
 </div>

        

  </>
  )
}

export default Navigation
 