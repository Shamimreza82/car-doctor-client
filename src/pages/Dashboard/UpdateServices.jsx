import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateServices = () => {

       const updateServices = useLoaderData() 
       console.log(updateServices);

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target; 
    
        const addServices = {
            title: form.title.value, 
            price: form.price.value, 
            img: form.img.value,
            description: form.description.value
        }
        console.log(addServices);

        axios.put(`http://localhost:5000/services/${updateServices._id}`, addServices)
        .then(res => {
            console.log(res.data);
        })
        .catch((error) => {
            console.error('Error updating data', error);
          });
    }


  return (
    <div>
      <p className="text-center text-2xl font-bold py-3">Update Services</p>
      <div>
        <form onSubmit={handleUpdateProduct} className="card-body">
          <div className="flex gap-3">
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Service Title</span>
              </label>
              <input
                type="text"
                placeholder="Service Title"
                className="input input-bordered"
                name="title"
                defaultValue={updateServices.title}
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                name="price"
                defaultValue={updateServices.price}
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              name="img"
              defaultValue={updateServices.img}
              required
            />
            <div>
              <label className="label">
                <span className="label-text">Service description</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                name="description"
                placeholder="description"
                defaultValue={updateServices.description}
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Update Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateServices;
