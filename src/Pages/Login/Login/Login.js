import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div>
        <div className="card w-25 h-25 mx-auto mt-5">
            <div className ="card-body">
            <h2 className ="card-title color">Google</h2>
            <h3 className ="card-title">Sign In</h3>
            <Link to='/home'>
               <button onClick={signInUsingGoogle} className="btn btn primary">Sign In</button>
            </Link>
            </div>
        </div>
    </div>
    );
};

export default Login;




/* <div>
            <h2>Google Sign In</h2>
            <button onClick={signInUsingGoogle} className="btn btn primary">Sign In</button>
        </div> */



        /* 
        
        
         <div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="...">
            <div class ="card-body">
            <h5 class ="card-title">Google</h5>
            <h5 class ="card-title">Sign In</h5>
            <button onClick={signInUsingGoogle} className="btn btn primary">Sign In</button>
            </div>
        </div>
        
        
        
        
        */

