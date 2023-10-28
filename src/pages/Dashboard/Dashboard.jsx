import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
           
            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1 bg-slate-300">
                    <nav className="flex flex-col">
                        <Link className="bg-slate-400 pl-3 py-2 font-bold text-white hover:bg-red-500 duration-200" to='/dashboard/addServices'>Add Services</Link>
                        <Link className="bg-slate-400 pl-3 py-2 font-bold text-white hover:bg-red-500 duration-200"  to='/dashboard/updateServices'>Update Product</Link>
                    </nav>
                    
                </div>
                <div className= "bg-slate-200 col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;