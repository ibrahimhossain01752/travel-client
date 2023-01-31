// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Service.css';

// const Service = () => {
//     const [service, setService] = useState();


//     const addOrder = (index) => {
//         console.log(index);
//         fetch(`https://travel-server11.onrender.com/booking`, {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify(index)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             })
//     }

//     return (
//         <div>
//             {service.map((p, index) => (
//                 <div className="col-lg-4 col-sm-12  service w-25 h-25  m-5  ">
//                     <img className="image1" src={service?.img} alt="" />
//                     <h5 >{service?.title}</h5>
//                     <p className="p-2">{service?.description}</p>
//                     <button onClick={() => addOrder(index)} className="btn">Book Now</button>
//                 </div>
//             ))};
//         </div>


//     );
// };

// export default Service;

