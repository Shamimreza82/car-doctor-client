
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service; 
    console.log(service);
    return (
        <div className="bg-slate-100 rounded-lg mt-6">
            <figure className='p-4'>
                <img src={img} alt="Shoes" className="rounded-xl h-64 w-full" />
            </figure>
        <div className="p-4">
            <h2 className="card-title text-left">{title}</h2>
            <div >
                <div className='flex justify-between'>
                    <p className='text-left font-bold text-red-600'>${price}</p>
                    <Link to={`/productDetailes/${_id}`}><FaArrowRight className='text-red-600'></FaArrowRight></Link>
                </div>
           
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;