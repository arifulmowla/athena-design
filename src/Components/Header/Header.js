import React from 'react';
import illustration1 from '../../images/illustration-1.png'

const Header = () => {
    return (
        <div className='px-5 mt-5 d-flex flex-wrap'>
            <div className="col-md-6 text-left">
                <h1 className='heading-font'>
                    Florence <br /> agency
                        </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum blanditiis aliquam ea, voluptatem quae ducimus architecto ullam aspernatur tempora corrupti.</p>
                <button className='btn button-style'>See Pricing</button>
            </div>
            <div className="col-md-6">
                <img src={illustration1} className='w-100' alt="" />
            </div>
        </div>
    );
};

export default Header;