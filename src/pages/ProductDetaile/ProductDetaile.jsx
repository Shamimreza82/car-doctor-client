import { useQuery } from '@tanstack/react-query';
import { Link, useLoaderData } from 'react-router-dom';
import img3 from '../../assets/images/team/Rectangle 1541.png'

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
                    <div>
                         <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos neque, corporis officiis voluptate ipsum minima quae, rerum velit exercitationem eius a quia minus, recusandae commodi? Nihil, est provident. Ut quaerat consequuntur neque corrupti modi eligendi, cumque voluptas? Sint maxime ipsum autem quaerat possimus expedita mollitia quas officiis necessitatibus illum, ex, error delectus enim illo. Architecto asperiores atque ea officiis vitae.</h2>   
                         <h1 className='text-2xl font-bold py-3'>3 Simple Steps to Process</h1>
                         <div className='grid grid-cols-3 gap-3'>
                            <div className='border my-3'>
                                <div className='h-40 flex justify-center items-center'>
                                    <div className='h-[100px] w-[100px] bg-[#FF3811] flex text-2xl text-white
                                    justify-center items-center rounded-full border-8'  >
                                        01
                                    </div>
                                 </div>
                                 <h1 className='text-2xl text-center'>Step One</h1>
                                <h2 className='text-slate-500 text-center'>It uses a dictionary of over 200 .</h2>
                            </div>
                            <div className='border my-3'>
                                <div className='h-40 flex justify-center items-center'>
                                    <div className='h-[100px] w-[100px] bg-[#FF3811] flex text-2xl text-white
                                    justify-center items-center rounded-full border-8'  >
                                        02
                                    </div>
                                 </div>
                                 <h1 className='text-2xl text-center'>Step Two</h1>
                                <h2 className='text-slate-500 text-center'>It uses a dictionary of over 200 .</h2>
                            </div>
                            <div className='border my-3'>
                                <div className='h-40 flex justify-center items-center'>
                                    <div className='h-[100px] w-[100px] bg-[#FF3811] flex text-2xl text-white
                                    justify-center items-center rounded-full border-8'  >
                                        03
                                    </div>
                                 </div>
                                 <h1 className='text-2xl text-center'>Step Three</h1>
                                <h2 className='text-slate-500 text-center'>It uses a dictionary of over 200 .</h2>
                            </div>
                               
                         </div>
                        <div className='flex justify-center py-4 mb-10'>
                                <img src={img3} alt="" />   
                        </div>
                        
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
                    <div className='bg-[#151515] rounded-md my-4'>
                        <h1 className='text-white'>Download</h1>
                    </div>
                    <p className='font-bold text py-4'>Price:${price}</p>
                    <Link to={`/checkout/${_id}`} className='btn w-full bg-[#FF3811] text-white'>Proceed Checkout</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetaile;