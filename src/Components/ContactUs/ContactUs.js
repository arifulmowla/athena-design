import React from 'react';
import illustration2 from '../../images/illustration-2.png'

const ContactUs = () => {
    return (
        <div className='px-5 mt-5 d-flex flex-wrap justify-content-center align-items-center'>

            <div className="col-md-6">
                <img src={illustration2} className="w-md-50 w-100" alt="" />
            </div>
            <div className="col-md-6 text-left">
                <h3 className='we-do'>
                    Stay Running & Project
                    </h3>
                <p className='text-muted'>It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letter.</p>
                <button className='btn button-style'>Contact Us</button>
            </div>
        </div>
    );
};

export default ContactUs;