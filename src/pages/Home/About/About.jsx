import person from '../../../assets/images/about_us/person.jpg'
import pars from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero md:my-16 py-5 ">
        <div className="hero-content flex-col lg:flex-row ">
            <div className='md:w-1/2 relative'>
                <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
                <img src={pars} className="w-1/2 absolute  right-5 top-28 rounded-lg shadow-2xl border-8 border-white" />
            </div>
            
            <div className='md:w-1/2 mt-16'>
                <h2 className='text-red-600 font-bold'>About Us</h2>
            <h1 className="md:text-5xl font-bold">We are qualified & of experience in this field</h1>
                <p className=" my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                <button className="btn btn-primary bg-red-600 border-none">Get More Info</button>
            </div>
        </div>
        </div>
    );
};

export default About;