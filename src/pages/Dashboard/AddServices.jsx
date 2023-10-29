import axios from "axios";
import React from "react";

const AddServices = () => {

  const handleAddProduct = e => {
    e.preventDefault()
    const form = e.target; 

    const addServices = {
        title: form.title.value, 
        price: form.price.value, 
        img: form.img.value,
        description: form.description.value
    }
    console.log(addServices);

    axios.post('http://localhost:5000/newServices', addServices)
    .then(res => {
        console.log(res.data);
        if(res.data.acknowledged){
            alert('add Product successfully')
        }
    })
  }



  return (
    <div>
      <p className="text-center text-2xl font-bold py-3">Add Services</p>
      <div>
        <form onSubmit={handleAddProduct} className="card-body">
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
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
