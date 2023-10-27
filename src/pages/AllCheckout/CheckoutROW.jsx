import React from "react";
import { json } from "react-router-dom";

const CheckoutROW = ({ checkout, handleDeleted, handleconfrom }) => {
  const { _id, costomerName, date, service, price, email, img, status } = checkout;


   

  return (
    <tr>
      <th>
      <button onClick={()=>handleDeleted(_id)} className="btn btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{costomerName}</td>
      <td>{email}</td>
      <td>
        { status === "confirm" ? <span className="text-green-600">Confirmed</span> :
          <button onClick={()=>handleconfrom(_id)}>Confirm</button>}
        </td>
      <th>
        <button className="btn btn-ghost btn-xs">${price}</button>
      </th>
    </tr>
  );
};

export default CheckoutROW;
