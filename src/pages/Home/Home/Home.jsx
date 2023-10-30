import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Schedule from '../Schedule/Schedule';
import PopularProducts from '../PopularProducts/PopularProducts';
import Team from '../Team/Team';
import WhyChoose from '../WhyChoose/WhyChoose';
import Swiper from '../../../component/Swiper/Swiper';
import CardSwiper from '../../../component/CardSwiper/CardSwiper';



const Home = () => {
    return (
        <div className='max-w-7xl m-auto'>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Schedule></Schedule>
           <PopularProducts></PopularProducts>
           <Team></Team>
           <Swiper></Swiper>
           <CardSwiper></CardSwiper>
           <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;