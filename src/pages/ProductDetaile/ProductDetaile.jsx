import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetaile = () => {

    const services = useLoaderData()

    const {data: allServices, error, isLoading} = useQuery({
        queryKey: ['serviceInfo'], 
        queryFn: () => fetch('http://localhost:5000/services').then(res => res.json())
    })

    console.log(allServices);
    if (isLoading) return 'Loading..'

  if (error) return 'An error has occurred: ' + error.message

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
                <div className='border'>
                    <div className='bg-slate-400'>
                        <p className='text-center text-2xl font-bold '>Services</p>
                        <div className='py-3'>
                            {
                               allServices.map(servides => <div className='flex justify-between hover:text-white hover:bg-red-600 hover:duration-200 mx-5 rounded-md px-5 mt-3 py-3  bg-slate-200' key={services._id}>
                                <p>{servides.title}</p>
                                <Link to={`/productDetailes/${servides._id}`}>All</Link>
                               </div> ) 
                            }
                        </div>
                    </div>
                    <p>${price}</p>
                    <Link to={`/checkout/${_id}`} className='btn'>Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetaile;