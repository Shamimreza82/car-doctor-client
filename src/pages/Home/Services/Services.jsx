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
        <div>
            <div className='text-center'>
                <h3 className="text-3xl text-center">Our Services</h3>
                <h4>Our Service Area</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
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