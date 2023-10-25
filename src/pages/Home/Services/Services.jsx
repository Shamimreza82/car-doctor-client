import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])

    return (
        <div className='lg:py-10'>
            <div className='text-center '>
                <h3 className="text-center text-red-600">Service</h3>
                <h4 className='text-3xl font-bold'>Our Service Area</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    services.map(service => <ServiceCard key={service.id} service ={service}></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;