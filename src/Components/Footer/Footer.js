import React from 'react';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import twiter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import dribble from '../../images/dribbble.png';

const Footer = () => {
    return (
        <div className='d-flex flex-wrap justify-content-center mb-4'>
            <div className='col-md-3 col-12'>
                <div className='ml-3'>
                    <img style={{ width: '100px' }} src={logo} alt="" />
                </div>
                <div className='d-flex'>
                    <div className='m-3'>
                        <img src={facebook} alt="" />
                    </div>
                    <div className='m-3'>
                        <img src={twiter} alt="" />
                    </div>
                    <div className='m-3'>
                        <img src={linkedin} alt="" />
                    </div>
                    <div className='m-3'>
                        <img src={dribble} alt="" />
                    </div>
                </div>
            </div>
            <div className='col-md-2 col-4'>
                <p>Feature</p>
                <p>Enterprise</p>
                <p>Pricing</p>
            </div>
            <div className='col-md-2 col-4'>
                <p>Blog</p>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Status</p>
            </div>
            <div className='col-md-2 col-4'>
                <p>About Us</p>
                <p>Terms of Service</p>
                <p>Security</p>
                <p>Login</p>
            </div>
        </div>
    );
};

export default Footer;