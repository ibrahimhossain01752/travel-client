import './Customer.css';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const Customer = () => {

    const { user } = useAuth();
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [booking, setBooking] = useState([]);



    // getting customert information & inserting database.
    const onSubmit = data => {
        console.log(data)
        const status = "Pending";
        data.status = status;

        fetch(`http://localhost:5000/customerInfo`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    history.push('/tradetail')
                }
            })
    };


    // Show Booking data on customer info pages.
    useEffect(() => {
        fetch(`http://localhost:5000/getBooking`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooking(data)
            })
    }, [])



    return (
        <div className="row pt-5 pb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 content">
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mt-2" readOnly defaultValue={user.displayName} {...register("name")} /> <br />
                    <input className="mt-2" readOnly defaultValue={user.email} {...register("eamil")} /> <br />
                    <input className="mt-2" type="text" {...register("city")} /> <br />
                    <input className="mt-2" type="number" {...register("phone", { required: true })} /> <br />
                    {errors.exampleRequired && <span>This field is required</span>} <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Customer;