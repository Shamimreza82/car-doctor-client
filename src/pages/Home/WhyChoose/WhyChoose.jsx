import React from 'react';
import img1 from '../../../assets/icons/New folder/Group 38729.svg'
import img2 from '../../../assets/icons/New folder/Group 38730.svg'
import img3 from '../../../assets/icons/New folder/Group 38731.svg'
import img4 from '../../../assets/icons/New folder/Group 71.svg'
import img5 from '../../../assets/icons/New folder/Group.svg'
import img6 from '../../../assets/icons/New folder/Wrench.svg'

const WhyChoose = () => {
    return (
        <div className='py-10'>
            <div className='text-center py-5 '>
                <h3 className="text-center text-red-600">Core Features</h3>
                <h4 className='text-3xl font-bold'>Why Choose Us</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div> 
            <div className='grid md:grid-cols-6 gap-5'>
                <div className='border rounded-lg text-center p-5'>
                    <div className='flex justify-center'>
                         <img src={img4} alt="" />
                    </div>
                    <p className='font-bold'>Expert Team</p>
                </div>
                <div className='border bg-red-600 rounded-lg text-center p-5'>
                    <div className='flex justify-center'>
                         <img src={img1} alt="" />
                    </div>
                    <p className='font-bold'>Expert Team</p>
                </div>
                <div className='border rounded-lg text-center p-5'>
                    <div className='flex justify-center'>
                         <img src={img5} alt="" />
                    </div>
                    <p className='font-bold'>Expert Team</p>
                </div>
                <div className='border rounded-lg text-center p-5'>
                    <div className='flex justify-center'>
                         <img src={img6} alt="" />
                    </div>
                    <p className='font-bold'>Expert Team</p>
                </div>
                <div className='border rounded-lg text-center p-5'>
                    <div className='flex justify-center'>
                         <img src={img2} alt="" />
                    </div>
                    <p className='font-bold'>Expert Team</p>
                </div>
                <div className='border  rounded-lg text-center p-5'>
                    <div className='flex justify-center'>
                         <img src={img3} alt="" />
                    </div>
                    <p className='font-bold'>Expert Team</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;