import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

const Team = () => {
    return (
        <div className='py-9'>
            <div className='text-center '>
                <h3 className="text-center text-red-600">Team</h3>
                <h4 className='text-3xl font-bold'>Meet Our Team</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                 <div className='text-center border p-4 rounded-md space-y-2  '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='rounded-md  ' src={img1} alt="" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-gray-500'>Engine Expert</p>
                    <div className='flex justify-center gap-3'>
                        <FaFacebook className='text-2xl text-blue-900'></FaFacebook>
                        <FaTwitter className='text-2xl text-cyan-500'></FaTwitter>
                        <FaLinkedin className='text-2xl text-blue-600'></FaLinkedin>
                        <FaInstagram className='text-2xl'></FaInstagram>
                    </div>
                </div>
                 <div className='text-center border p-4 rounded-md space-y-2  '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='rounded-md  ' src={img3} alt="" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-gray-500'>Engine Expert</p>
                    <div className='flex justify-center gap-3'>
                        <FaFacebook className='text-2xl text-blue-900'></FaFacebook>
                        <FaTwitter className='text-2xl text-cyan-500'></FaTwitter>
                        <FaLinkedin className='text-2xl text-blue-600'></FaLinkedin>
                        <FaInstagram className='text-2xl'></FaInstagram>
                    </div>
                </div>
                 <div className='text-center border p-4 rounded-md space-y-2  '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='rounded-md  ' src={img2} alt="" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-gray-500'>Engine Expert</p>
                    <div className='flex justify-center gap-3'>
                        <FaFacebook className='text-2xl text-blue-900'></FaFacebook>
                        <FaTwitter className='text-2xl text-cyan-500'></FaTwitter>
                        <FaLinkedin className='text-2xl text-blue-600'></FaLinkedin>
                        <FaInstagram className='text-2xl'></FaInstagram>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;