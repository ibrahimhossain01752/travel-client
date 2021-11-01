import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { title, description, img } = review;
    return (
        <div className="col-lg-4 col-sm-12 w-25 h-25 g-5 m-5 customer-review">
            <p className="descrip">{description}</p>
            <h5>{title}</h5>
            <br />
            <img className="review-img mx-auto" src={img} alt="" />
        </div>
    );
};

export default Review;