
import { Link } from 'react-router-dom';
import error from '../../assets/icons/Frame.svg'

const Errorpage = () => {
    return (
        <div>
            <div  className='flex justify-center'>
                <img className='py-4' src={error} alt="" />
            </div>
            <div className=' flex justify-center'>
                 <Link to ='/' className='btn'>Back to home</Link>
            </div>
            
        </div>
    );
};

export default Errorpage;