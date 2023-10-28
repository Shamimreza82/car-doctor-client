import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navber = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout =()=> {
        logOut()
        .then()
        .catch(error => console.error(error))
    }


    const navItems = <div className='lg:flex font-inter font-bold text-slate-700'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Services</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        {user?.email ? <>
            <li><Link to='/allcheckout'>Checkout</Link></li>
            <li><button onClick={handleLogout}>LogOut</button></li>
        </> :
        <li><Link to='/login'>login</Link></li>}
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
    </div>
    return (
        <div className="navbar bg-base-100 h-28 mb-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                </ul>
                </div>
                <Link to='/' className=" normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  px-1 flex-col">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navber;