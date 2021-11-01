import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
// import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
// import TraDetail from './TraDetail';


const TraDetails = () => {

    // const { user } = useAuth();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data)
            })
    }, [])



    return (
        <div>
            <table class="table table-striped">
                <h2>Length : {details.length}</h2>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Travel ID</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((p, index) => (
                        <tr>
                            <th scope="row">1</th>
                            <td>{p?.name}</td>
                            <td>{p?.email}</td>
                            <td>{p?.phone}</td>
                            <td>{p?._id}</td>
                            <td>{p?.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TraDetails;