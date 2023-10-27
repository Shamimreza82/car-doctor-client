import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();

  const {user, setUser} = useContext(AuthContext)

  const hanldebookService = event => {
    event.preventDefault()
    const form = event.target; 
    const name =form.name.value; 
    const date = form.date.value; 
    const email = form.email.value; 

    const bookings = {
        costomerName: name, 
        email, 
        date, 
        service: service.title,
        service_id: service._id, 
        price: service.price, 
        img: service.img
    }
    console.log(bookings);

    fetch('http://localhost:5000/checkout', {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bookings)
    })
    .then (res => res.json())
    .then(data => {
        console.log(data);
    })


  }

  return (
    <div>
      <h2>Book Service: {service.title}</h2>
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <form onSubmit={hanldebookService}>
              <div className="flex gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Name"
                    defaultValue={user?.displayName}
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
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due Amount</span>
                  </label>
                  <input
                    type="text"
                    name="due"
                    placeholder="Service Price"
                    className="input input-bordered"
                    defaultValue={'$' + service.price}
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <input className="btn" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
