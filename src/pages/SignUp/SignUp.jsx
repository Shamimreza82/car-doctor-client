import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)



    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target; 
        const name = form.name.value; 
        const email = form.email.value; 
        const password = form.password.value; 
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.error(error))

       }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-center text-2xl">Sign Up</h1>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="form-control mt-6">
                <input className="btn" type="submit" value="Sign Up" />
              </div>
            </form>
            <h1 className="text-center py-3">do you have an account <Link className="text-red-600" to='/login'>login</Link></h1>
          </div>
        </div>
      </div>
    );
};

export default SignUp;