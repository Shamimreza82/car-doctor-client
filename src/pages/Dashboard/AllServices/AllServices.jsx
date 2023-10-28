import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllServices = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["allServices"],
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });
  console.log(data);

  if(isLoading){
    return <div>Loding......</div>
  }

  const handleDelete = (_id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            axios.delete(`http://localhost:5000/services/${_id}`)
            .then(res => {
                console.log(res.data);
                refetch()
            })
            console.log(_id);

        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        }
      })
  }


  const handleupdateService = (_id) => {
    console.log(_id);
  }

  return (
    <div>
      <p className="text-center">All Services</p>
      <div className="grid grid-cols-2 gap-6 mx-4">
        {data.map((services) => (
          <div key={services._id} className="">
            <div className="bg-slate-100 rounded-lg ">
              <figure className="p-4">
                <img src={services.img} alt="Shoes" className="rounded-xl h-64 w-full" />
              </figure>
              <div className="p-4">
                <h2 className="card-title text-left">{services.title}</h2>
                <div>
                  <div className="flex justify-between">
                    
                    <p className="text-left font-bold text-red-600">${services.price}</p>
                    <Link to={`/dashboard/upService/${services._id}`}>Edit</Link>
                    <button onClick={()=>handleDelete(services._id)}>delete</button>
                    <Link to={`/productDetailes/${services._id}`}>
                      <FaArrowRight className="text-red-600"></FaArrowRight>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
