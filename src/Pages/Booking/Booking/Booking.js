// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
// import './Booking.css';

// const Booking = () => {
//     // const { user } = useAuth();
//     // const email = user.email;

//     // const [booking, setBooking] = useState([]);
//     const [book, setBook] = useState([]);
//     const [booking, setBooking] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:5000/getBooking`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setBooking(data)
//             })
//     }, [])



//     const addBook = (id) => {
//         console.log(id);
//         fetch(`http://localhost:5000/book/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setBook(data)
//             })
//     }

    // const foundService = servicess.find(service => service.id === id)




    // const handleBooking = id => {
    //     console.log(id);

    //     fetch(`http://localhost:5000/booking/${id}`, {
    //         method: 'POST',
    //         header: {
    //             'content-type': 'application.json',
    //         },
    //         body: JSON.stringify(booking)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }

    // onClick={() => handleBooking(servicess._id)}


//     return (
//         <div className=" pt-5 pb-5">
//             <div id="booking" className="row">
//                 <h2>Booing Items {booking.length}</h2>
//                 {booking.map((p, index) => (
//                     <div className="col-lg-4 col-md-4 col-sm-12 p-4 box-shadow-sm">
//                         <img className="image1" src={p?.img} alt="" />
//                         <h5 >{p?.title}</h5>
//                         <p className="p-2">{p?.description}</p>
//                         <button onClick={() => addBook(booking._id)} className="btn">Book Now</button>
//                     </div>
//                 ))};
//             </div>
//         </div>
//     );
// };

// export default Booking;