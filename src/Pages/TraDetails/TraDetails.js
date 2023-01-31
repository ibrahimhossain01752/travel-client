import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const TraDetails = () => {

    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const [IsDelete, setIsDelete] = useState(false);

    useEffect(() => {
        fetch('https://travel-server11.onrender.com/myOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data)
            })
    }, [IsDelete])


    //handleDelete
    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://travel-server11.onrender.com/deleteOrdersByUser/${id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    setIsDelete(true);
                } else {
                    setIsDelete(false)
                }
            })
    }




    return (
        <div className="pt-5 pb-5 container">
            <h2> Total confirm : {details.length}</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Travel ID</th>
                        <th>Change</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((p, index) => (
                            <tr>
                                <th scope="row">1</th>
                                <td>{p?.name}</td>
                                <td>{p?.email}</td>
                                <td>{p?.phone}</td>
                                <td>{p?._id}</td>
                                <Button onClick={() => handleDelete(p._id)} variant="danger">Delete</Button>{' '}
                                <td>{p?.status}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default TraDetails;