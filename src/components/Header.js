import React from 'react'
import * as ReactBootsrap from "react-bootstrap";


const Header = props => {
  return (
    <ReactBootsrap.Navbar  expand="xl" variant="dark">
    <ReactBootsrap.Container>
      <ReactBootsrap.Navbar.Brand href="#home"> <img src="img/logo_white_utlmzm.svg" class="logo-image" alt="logo image" /></ReactBootsrap.Navbar.Brand>
      <ReactBootsrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootsrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootsrap.Nav className="ms-auto">
          <ReactBootsrap.Nav.Link href="#home" className='text-white nav-link text-white a mt-2' style={{textDecoration:`underline`,color:`#fff`}}>Home</ReactBootsrap.Nav.Link>
          <ReactBootsrap.Nav.Link href="#link" className='text-white nav-link text-white a mt-2'>Loans</ReactBootsrap.Nav.Link>
          <ReactBootsrap.Nav.Link href="#link" className='text-white nav-link text-white a mt-2'>Food Mart</ReactBootsrap.Nav.Link>
          <ReactBootsrap.Nav.Link href="#link" className='text-white nav-link text-white a mt-2'>Help</ReactBootsrap.Nav.Link>
          <ReactBootsrap.Nav.Link href="#link" className='text-white nav-link text-white a mt-2'>Sign In</ReactBootsrap.Nav.Link>
          <ReactBootsrap.Nav.Link href="#link" className='text-white'><button className='text-white'>Apply now</button></ReactBootsrap.Nav.Link>
        </ReactBootsrap.Nav>
      </ReactBootsrap.Navbar.Collapse>
    </ReactBootsrap.Container>
  </ReactBootsrap.Navbar>
  )
}

export default Header;