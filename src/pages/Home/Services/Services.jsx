import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import lotti from '../../../assets/animation/computer.json'
import lotti2 from '../../../assets/animation/allll.json'
import Lottie from 'lottie-react';
import useSevices from '../../../Hooks/useSevices';

const Services = () => {

    const services = useSevices()

    // const [services, setServices] = useState([])

    // useEffect(() => {
    //     // fetch('http://localhost:5000/services')
    //     // .then(res => res.json())
    //     // .then(data => setServices(data))

    //     axios.get('http://localhost:5000/services')
    //     .then(res => {
    //         setServices(res.data)
    //     })

    // },[])

 

    return (
        <div className='lg:py-10'>
            <Lottie animationData={lotti} loop={true}></Lottie>
            <Lottie animationData={lotti2} loop={true}></Lottie>
            <div className='text-center '>
                <h3 className="text-center text-red-600">Service</h3>
                <h4 className='text-3xl font-bold'>Our Service Area</h4>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map(service => <ServiceCard key={service.id} service ={service}></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;