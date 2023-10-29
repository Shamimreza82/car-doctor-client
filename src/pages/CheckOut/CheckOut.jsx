import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();

  const { user, setUser } = useContext(AuthContext);
  console.log(service);

  const hanldebookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const date = form.date.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value
    const address = form.address.value; 
    console.log(firstName, lastName, date, phoneNumber, address);

    const bookings = {
      address, 
      name: firstName, 
      email,
      date,
      service: service.title,
      service_id: service._id,
      price: service.price,
      img: service.img,
    };
    console.log(bookings);

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-center py-5 font-bold">
        Your Selected Service: {service.title}
      </h2>
      <div className="bg-[#F3F3F3] md:p-14 rounded-md p-4 md:w-2/4 m-auto ">
        <div className="flex-col lg:flex-row-reverse">
          <div>
            <form onSubmit={hanldebookService}>
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="form-control flex-1 ">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex-1 ">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4 flex-col md:flex-row">
                <div className="form-control flex-1">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <input
                    type="email"
                    placeholder="Email"
                    defaultValue={user.email}
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  className="mt-4 p-3 rounded-md"
                  type="date"
                  name="date"
                  id=""
                />
              </div>
              <div>
                <textarea
                  className="textarea textarea-bordered w-full mt-4"
                  placeholder="Address"
                  name="address"
                ></textarea>
              </div>
              <div>
                <p>Service Cost: ${service.price}</p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#FF3811] text-white border-none"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
