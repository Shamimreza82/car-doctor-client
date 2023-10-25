import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'

const PopularProducts = () => {
    return (
        <div className='md:mt-20'>
            <div className='text-center py-5 '>
                <h3 className="text-center text-red-600">Popular Products</h3>
                <h4 className='text-3xl font-bold'>Browse Our Products</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div> 
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-5'>
                <div className='text-center border p-4 rounded-md space-y-2  '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='h-56 p-8  rounded-md  ' src={img6} alt="" />
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-red-600'>$20.00</p>
                </div>
                <div className='text-center border p-4 rounded-md space-y-2 '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='h-56 p-8  rounded-md  ' src={img3} alt="" />
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-red-600'>$20.00</p>
                </div>
                <div className='text-center border p-4 rounded-md space-y-2 '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3] '>
                        <img className='h-56 p-8  rounded-md  ' src={img1} alt="" />
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-red-600'>$20.00</p>
                </div>
                <div className='text-center border p-4 rounded-md space-y-2 '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='h-56 p-8  rounded-md  ' src={img2} alt="" />
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-red-600'>$20.00</p>
                </div>
                <div className='text-center border p-4 rounded-md space-y-2 '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='h-56 p-8  rounded-md  ' src={img5} alt="" />
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-red-600'>$20.00</p>
                </div>
                <div className='text-center border p-4 rounded-md space-y-2 '>
                    <div className=' flex justify-center items-center bg-[#F3F3F3]'>
                        <img className='h-56 p-8  rounded-md  ' src={img4} alt="" />
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-2xl font-bold'>Car Engine Plug</p>
                    <p className='text-red-600'>$20.00</p>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;