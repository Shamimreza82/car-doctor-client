import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CheckoutROW from './CheckoutROW';
import useAxios from '../../Hooks/useAxios';

const AllCheckout = () => {

    const {user} = useContext(AuthContext)
    const [checkouts, setCheckout] = useState([])
    const axiosSecure = useAxios()


    const url = `/checkout?email=${user?.email}`
    const sum = checkouts.reduce((a,b) => a + parseInt(b.price), 0 )
    console.log(sum);
    useEffect(()=> {
            // fetch (url)
            // .then(res => res.json())
            // .then(data => setCheckout(data))
            // axios.get(url, {withCredentials: true})
            // .then(res => {
            //   setCheckout(res.data);
            // })
            // .catch(error => {
            //   console.error(error)
            // })
            axiosSecure.get(url)
            .then(res => {
                setCheckout(res.data);
              })
    },[url, axiosSecure])

    console.log(checkouts);


    const handleDeleted = (_id) => {
        const preseed = confirm ("Are you sure to deleted")
        if(preseed){
          fetch(`http://localhost:5000/checkout/${_id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.deletedCount === 1){
              alert ("delete successFull")
              const remaning = checkouts.filter(checkout => checkout._id !== _id)
              setCheckout(remaning); 
            }
          })
        }
    }; 



    const handleconfrom = _id => {
        fetch(`http://localhost:5000/checkout/${_id}`, {
            method: "PATCH", 
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({status: "confirm"})
        })
        .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.modifiedCount === 1){
              const remaning = checkouts.filter(checkout => checkout._id !== _id)
              const updated = checkouts.find(checkout => checkout._id === _id)
              updated.status = "confirm"
              const newcheckouts = [updated, ...remaning]; 
              setCheckout(newcheckouts) 

            }
          })
    }



    return (
        <div>
            <h2>{checkouts.length}</h2>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Servide Image</th>
                    <th>Name</th>
                    <th>date</th>
                    <th>Job</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Stataus</th>
                </tr>
                </thead>
                <tbody>
                {
                    checkouts.map(checkout => <CheckoutROW key={checkout._id}
                        handleDeleted ={handleDeleted}
                        handleconfrom ={handleconfrom}
                        checkout={checkout}></CheckoutROW>)
                }
               
                </tbody>
            </table>
            </div>
            <p className='text-right'>Total Cost: {sum}</p>
        </div>
    );
};

export default AllCheckout;