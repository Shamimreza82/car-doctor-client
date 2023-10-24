
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute flex rounded-lg items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                <div className='text-white space-y-7 w-1/2 pl-4 '>
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-success mr-3 uppercase">Discover More</button>
                    <button className="btn btn-outline btn-success">LATEST PROJECTS</button>
                </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" />
                <div className="absolute flex rounded-lg items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                <div className='text-white space-y-7 w-1/2 pl-4 '>
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-success mr-3 uppercase">Discover More</button>
                    <button className="btn btn-outline btn-success">LATEST PROJECTS</button>
                </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute flex rounded-lg items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                <div className='text-white space-y-7 w-1/2 pl-4 '>
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-success mr-3 uppercase">Discover More</button>
                    <button className="btn btn-outline btn-success">LATEST PROJECTS</button>
                </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className="absolute flex rounded-lg items-center h-full left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                <div className='text-white space-y-7 w-1/2 pl-4 '>
                    <h2 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn btn-success mr-3 uppercase">Discover More</button>
                    <button className="btn btn-outline btn-success">LATEST PROJECTS</button>
                </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end">
                <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
         </div>
    );
};

export default Banner;