import React from 'react';

const Team = () => {
    return (
        <>
        <h2 className='text-center we-do' style={{margin: '100px 100px'}}>Choose your Dedicated Team</h2>
        <div className="d-flex flex-wrap justify-content-center px-5 mb-5" >
            <div className="col-md-4 col-lg-2 my-2 col-7 py-5 mx-4 shadow text-center team">
                <h2 className= 'font-weight-bold'>$199</h2>
                <p>For Basic</p>
                <div className='bottom-border'></div>
                <p>Homepage</p>
                <p>No Inner Page</p>
                <p>Asset file</p>
                <p>Source File</p>
                <p>Free Stock Photos</p>
                <p>10 days Free Support</p>
                <p>24/7 Support</p>
                <button className="order-btn button-style">Order Now</button>
            </div>
            <div className="col-md-4 col-lg-2 my-2 col-7 py-5 mx-4 shadow text-center team">
                <h2 className= 'font-weight-bold'>$399</h2>
                <p>For Basic</p>
                <div className='bottom-border'></div>
                <p>Homepage</p>
                <p>No Inner Page</p>
                <p>Asset file</p>
                <p>Source File</p>
                <p>Free Stock Photos</p>
                <p>10 days Free Support</p>
                <p>24/7 Support</p>
                <button className="order-btn button-style">Order Now</button>
            </div>
            <div className="col-md-4 col-lg-2 my-2 col-7 py-5 mx-4 shadow text-center team">
                <h2 className= 'font-weight-bold'>$599</h2>
                <p>For Basic</p>
                <div className='bottom-border'></div>
                <p>Homepage</p>
                <p>No Inner Page</p>
                <p>Asset file</p>
                <p>Source File</p>
                <p>Free Stock Photos</p>
                <p>10 days Free Support</p>
                <p>24/7 Support</p>
                <button className="order-btn button-style">Order Now</button>
            </div>
        </div>
        </>
    );
};

export default Team;