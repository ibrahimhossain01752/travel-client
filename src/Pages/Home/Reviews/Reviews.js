import React from 'react';
import './Reviews.css';

const Reviews = () => {

    return (
        <div className="container pt-5 pb-5">
            <h2 className="mb-5">Traveler Reviews</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100  customer-review">
                        <img className="review-img" src="https://as2.ftcdn.net/v2/jpg/02/14/74/61/500_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Mofij</h5>
                            <p class="card-text descrip">Jammu and Kashmir was a region formerly administered by India as a state from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100  customer-review">
                        <img className="review-img" src="https://as2.ftcdn.net/v2/jpg/02/14/74/61/500_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Rahman</h5>
                            <p class="card-text descrip">Jammu and Kashmir was a region formerly administered by India as a state from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100  customer-review">
                        <img className="review-img" src="https://as2.ftcdn.net/v2/jpg/02/14/74/61/500_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Tajmid</h5>
                            <p class="card-text descrip">Jammu and Kashmir was a region formerly administered by India as a state from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;