import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Schedule from '../Schedule/Schedule';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Schedule></Schedule>
        </div>
    );
};

export default Home;