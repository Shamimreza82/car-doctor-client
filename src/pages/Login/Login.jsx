import React, { useContext } from "react";
import { Link,} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logoImage from '../../assets/images/login/login.svg'
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

const Login = () => {

    const {signIn} = useContext(AuthContext)
    // const location = useLocation()
    // const navigate = useNavigate()
    // console.log(location);


   const handleLogin = e => {
    e.preventDefault()
    const form = e.target; 
    const email = form.email.value; 
    const password = form.password.value; 
    console.log(email, password);

    signIn(email, password)
    .then(result => {
      const loggedInUser = result.user
        console.log(loggedInUser); 
         // navigate(location?.state ? location?.state : '/')
      const user = {email: email}
      console.log(user);

      axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
      .then(res => {
        console.log(res.data);
       if(res.data.success)[
        alert('token save in cookeis')
       ]
      })
      .catch(error => {
        console.log(error);
      })

     
    })
    .catch(error => console.error(error))
   }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  lg:flex-row md:gap-52 flex-row-reverse ">
        <div className="text-center lg:text-left md:w-1/2 invisible md:visible">
         <img src={logoImage} alt="logo Image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-center text-2xl font-bold
            ">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control ">
              <input className="btn" type="submit" value="Login" />
            </div>
            <div className="flex justify-center mt-3 bg-slate-300 w-1/5 py-4 m-auto rounded-md">
            <Link >
              <FaGoogle className="text-2xl "></FaGoogle>
            </Link>
            </div>
          </form>
          <h1 className="text-center py-3 hover:scale-105 duration-300 mb-4">Do you have and Account? <Link className="text-red-600 
          font-bold " to='/signup'>Sign Up</Link></h1>
        </div>
      </div>
    </div> 
  );
};

export default Login;
