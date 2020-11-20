import React from 'react';
import ach1 from '../../images/ach-1.png'
import ach2 from '../../images/ach-2.png'
import ach3 from '../../images/ach-3.png'
import happy from '../../images/happy.png'

const Achievement = () => {
    return (
        <div className='px-5 d-flex flex-wrap justify-content-center' style={{marginTop:'100px'}}>
            <div className="col-lg-4 col-md-8 text-md-left col-12">
                <h2 className='we-do text-center text-lg-left'>Our Achievements</h2>
                <p className='text-center text-lg-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae ducimus laborum voluptates nesciunt quae excepturi eveniet hic quibusdam ab.</p>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="d-flex flex-wrap justify-content-center pricing-card">
                    <div className="col-lg-4 col-md-5 p-3 d-flex achievement mx-3 justify-content-center align-items-center happy">
                        <div className='mr-3'>
                            <img src={happy} style={{ width: '35px' }} alt="" />
                        </div>
                        <div className='text-muted'>
                            <h4 className='font-weight-bold'>700+</h4>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-lg-4 p-3 col-md-5 d-flex achievement mx-3 justify-content-center align-items-center complete">
                        <div className='mr-3'>
                            <img src={ach1} style={{ width: '35px' }} alt="" />
                        </div>
                        <div className='text-muted'>
                            <h4 className='font-weight-bold'>140+</h4>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className="col-lg-4 p-3 col-md-5 d-flex achievement mx-3 justify-content-center align-items-center minds">
                        <div className='mr-3'>
                            <img src={ach2} style={{ width: '35px' }} alt="" />
                        </div>
                        <div className='text-muted'>
                            <h4 className='font-weight-bold'>25+</h4>
                            <p>Crazy Minds</p>
                        </div>
                    </div>
                    <div className="col-lg-4 p-3 col-md-5 d-flex achievement mx-3 justify-content-center align-items-center project">
                        <div className='mr-3'>
                            <img src={ach3} style={{ width: '35px' }} alt="" />
                        </div>
                        <div className='text-muted'>
                            <h4 className='font-weight-bold'>75+</h4>
                            <p>running Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;