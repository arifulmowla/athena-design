import React from 'react';
import ex1 from '../../images/ex-1.png'
import ex2 from '../../images/ex-2.png'
import ex3 from '../../images/ex-3.png'
import ex4 from '../../images/ex-4.png'
const whatWeDo = [
    {
        id: 0,
        title: 'Experience Design',
        details: 'The point of using Lorem Ipsum is that it has a more-orless normal',
        image: ex1
    },
    {
        id: 1,
        title: 'Interface Design',
        details: `The point of using 
        Lorem Ipsum is that 
        it has a more-orless normal`,
        image: ex2
    },
    {
        id: 2,
        title: 'Prototyping',
        details: 'The point of using Lorem Ipsum is that it has a more-orless normal',
        image: ex3
    },
    {
        id: 2,
        title: 'Illustration',
        details: 'The point of using Lorem Ipsum is that it has a more-orless normal',
        image: ex4
    },
]

const WhatWeDo = () => {
    return (
        <div className='px-5'>
            <div className='text-center' style={{ margin: '100px 0' }}>
                <h3 className='we-do'>what we do</h3>
                <p className='w-50 mx-auto text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ad.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center mb-5">
                {
                    whatWeDo.map(x =>
                        <div className="col-md-4 col-lg-3 service">
                            <div className='text-center mb-2'>
                                <img src={x.image} style={{ width: '60px' }} alt="" />
                            </div>
                            <div className='text-center'>
                                <h5>{x.title}</h5>
                                <p className='w-50 mx-auto text-muted'>{x.details}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default WhatWeDo;