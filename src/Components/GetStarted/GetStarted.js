import React from 'react';
import { Form } from 'react-bootstrap';

const GetStarted = () => {
    return (
        <div style={{ marginTop: '100px', marginBottom: '100px'}} className="text-center">
            <h2 className='we-do'>Get your design right , right now</h2>
            <p className="mb-5">Be the first know our latest offers and updates</p>
            <div className='shadow m-auto py-2 d-flex flex-wrap' style={{ width: '500px' }}>
                <div className='col-md-9 col-9'>
                    <Form.Control className="m-auto" type="email" placeholder="Enter your email address" style={{ border: 'none' }} />
                </div>
                <button className='btn btn-started'>Get Started</button>
            </div>
        </div>
    );
};

export default GetStarted;