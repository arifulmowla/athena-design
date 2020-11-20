import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
const Navigation = () => {
    return (
        <div className="px-5 pt-3">
            <Navbar expand="lg">
                <NavLink to="/">
                    <img style={{ width: '120px', heigth: '56px' }} src={logo} alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/">Home</NavLink>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" href="#portfolio">About</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/">Service</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" to="/">Pricing</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" href="#contact-form">Contact Us</a>
                        <a className="text-decoration-none font-weight-bold text-dark mx-3 my-2" href="#contact-form">Our Team</a>
                        <button className='btn button-style'>Admin Login</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;