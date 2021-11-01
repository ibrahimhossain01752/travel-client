import React from 'react';
import './Banner.css';

import banner from '../../../images/banner/banner.jpg'




const Banner = () => {
    return (
        <div className="image-container ">

            <img src={banner} className="image" alt="..."></img>

        </div>
    );
};

export default Banner;