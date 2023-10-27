import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetaile = () => {

    const services = useLoaderData()
    console.log(services);

    const {_id, img, price, service_id, title, description, facility} = services; 


    return (
        <div>
            <div className='relative w-full'>
                <img className='object-cover '  src={img} alt="" />
                <p className='absolute h-full text-white  top-0 text-5xl font-bold bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>Service Details</p>
            </div>

            <div className='grid grid-cols-4 gap-4 py-4 '>
                <div className='col-span-3 border'>
                    <img className='w-full h-72 ' src={img} alt="" />
                    <p className='text-2xl py-3 font-bold'>{title}</p>
                    <p>{description}</p>
                    <div className='grid grid-cols-2 gap-4 w-3/4 m-auto my-3'>
                        {
                            facility.map((fac, idx) => 
                            <div key={idx} className='border p-6 bg-slate-200 rounded-lg border-t-red-600 '>
                                <p className='text-2xl'>{fac.name}</p>
                                <p>{fac.details}</p>
                            </div>
                            )
                        }
                    </div>

                    
                </div >
                <div className='border'>to</div>
            </div>
        </div>
    );
};

export default ProductDetaile;