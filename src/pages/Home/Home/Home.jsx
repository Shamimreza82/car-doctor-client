import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Schedule from '../Schedule/Schedule';
import PopularProducts from '../PopularProducts/PopularProducts';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Schedule></Schedule>
           <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;