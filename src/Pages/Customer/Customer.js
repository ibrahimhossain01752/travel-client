import './Customer.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const Customer = () => {

    const { user } = useAuth();
    let history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();


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
                    history.push('/booking')
                }
            })
    };



    return (
        <div className="conatainer pt-5 pb-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <Card style={{ width: '18rem' }}>
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
            <div className="col-lg-6 col-md-6 col-sm-12">
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("eamil")} />
                    <input {...register("city")} />
                    <input type="number" {...register("phone", { required: true })} />
                    <input {...register("", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form> */}

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue="test" {...register("example")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Customer;