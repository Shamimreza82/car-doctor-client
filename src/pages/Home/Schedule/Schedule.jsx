import React from 'react';
import logo1 from '../../../assets/icons/Group 34.svg'
import logo2 from '../../../assets/icons/Group 35.svg'
import logo3 from '../../../assets/icons/001-timetable.svg'

const Schedule = () => {
    return (
        <div className='h-48 bg-black m-auto rounded-md text-white flex flex-col md:flex-row justify-around items-center'>
            <div className='flex gap-3 '>
                <img className='h-14' src={logo3} alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className='text-2xl '>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex gap-3 '>
                <img className='h-14' src={logo1} alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className='text-2xl '>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex gap-3 '>
                <img className='h-14' src={logo2} alt="" />
                <div>
                    <p>We are open monday-friday</p>
                    <p className='text-2xl '>7:00 am - 9:00 pm</p>
                </div>
            </div>
          

        </div>
    );
};

export default Schedule;