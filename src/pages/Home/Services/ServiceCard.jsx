import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price} = service; 
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-center">
            <h2 className="card-title text-left">{title}</h2>
            <div className="">
                <div className='flex justify-between'>
                    <p>{price}</p>
                    <p>More Info</p>
                </div>
           
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;