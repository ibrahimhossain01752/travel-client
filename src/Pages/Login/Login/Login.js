import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();


    return (
        <div>
            <div className="card w-25 h-25 mx-auto mt-5">
                <div className="card-body">
                    <h2 className="card-title color">Google</h2>
                    <h3 className="card-title">Sign In</h3>
                    <Link to='/home'>
                        <button onClick={signInUsingGoogle} className="btn btn primary">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;