import React, { useEffect, useState } from 'react';
import './Servicess.css'
import { Link, useHistory } from "react-router-dom";



const Services = () => {

    // const history = useHistory();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/travels')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const addOrder = (index) => {
        const travel = (services[index]);
        console.log(travel);

        fetch(`http://localhost:5000/Addbooking`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(travel),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId) {
                //     history.push("/customer");
                // }
            })
    }
    // as={Link} to="/customer"


    return (
        <div id="services">
            <h1 className="mt-5 text-color-success">Featured Destination</h1>
            <div className="row ">
                {services.map((p, index) => (
                    <div className="col-lg-4 col-sm-12  service w-25 h-25  m-5  ">
                        <img className="image1" src={p?.img} alt="" />
                        <h5 >{p?.title}</h5>
                        <p className="p-2">{p?.description}</p>
                        <Link to="/customer">
                            <button onClick={() => addOrder(index)} className="btn">Book Now</button>
                        </Link>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Services;