import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import pars from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
            <div className='w-1/2 relative'>
                <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
                <img src={pars} className="w-1/2 absolute  right-5 top-28 rounded-lg shadow-2xl border-8 border-white" />
            </div>
            
            <div className='w-1/2'>
                <h2>About Us</h2>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                <p className=" my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                <button className="btn btn-primary bg-red-600 border-none">Get More Info</button>
            </div>
        </div>
        </div>
    );
};

export default About;