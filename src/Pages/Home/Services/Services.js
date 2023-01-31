import React, { useEffect, useState } from 'react';
import './Servicess.css'
import { Link, useHistory } from "react-router-dom";



const Services = () => {
    // const history = useHistory();

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://travel-server11.onrender.com/travels')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const addOrder = (index) => {
        const travel = (services[index]);
        console.log(travel);

        fetch(`https://travel-server11.onrender.com/Addbooking`, {
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



    return (
        <div id="services" className="container text-center">
            <h1 className="mt-5 text-color-success">Featured Destination</h1>
            <div className="row">
                {services.map((p, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="service">
                            <img className="image1 img-fluid" src={p?.img} alt="" />
                            <h5 >{p?.title}</h5>
                            <p className="p-2">{p?.description}</p>
                            <Link to="/customer">
                                <button onClick={() => addOrder(index)} className="btn">Book Now</button>
                            </Link>
                        </div>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Services;