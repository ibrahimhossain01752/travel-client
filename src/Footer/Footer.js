import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class="row row-cols-1 row-cols-md-4 g-2 text-light pt-5">
            <div class="col bg p-5">
                <div class=" h-100 bg ">
                    <h4>Travel</h4>
                    <p className="p-3">Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure</p>

                </div>
            </div>
            <div class="col bg">
                <div class=" h-100 bg p-5">
                    <h4>Features</h4>
                    <h6>Date & Offers</h6>
                    <h6>Customer Reviews</h6>
                    <h6>Private Policy</h6>
                </div>
            </div>
            <div class="col bg ">
                <div class=" h-100 bg p-5">
                    <h4>Quick Contact</h4>
                    <h6 > <i class="fas fa-phone-square-alt"></i> +347836736 </h6>
                    <h6> <i class="fas fa-envelope"></i> travel@gmail.com</h6>
                    <h6> <i class="fas fa-home"></i> Nework,USA</h6>
                </div>
            </div>
            <div class="col bg ">
                <div class=" h-100 bg p-5">
                    <h4>Quick Contact</h4>
                    <h6> <i class="fab fa-facebook-square"></i> Facebook </h6>
                    <h6> <i class="fab fa-twitter"></i> Twiter</h6>
                    <h6> <i class="fab fa-youtube"></i> Youtube</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;