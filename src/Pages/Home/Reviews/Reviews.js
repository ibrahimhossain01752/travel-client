import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">Customer Reviews</h2>
            <div className="row">
                {
                    reviews.map(review => <Review
                        key={review}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;