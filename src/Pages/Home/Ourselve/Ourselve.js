import React from 'react';
import './Ourselve.css';


const Ourselve = () => {
    return (
       <div class="ourselve mt-5">
         <div class="container">
            <h2 class="mb-5 text_on">Who We Are?</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="">
      <img src="https://wordpressboss.com/opb/vtravel-demo/assets/images/about.png" class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="">
     <div class="card-body">
        <h3 class="card-title">We Are Travel Experts</h3>
        <p class="card-text ourselve_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
      </div>
    </div>
  </div>
 </div>
        </div>
       </div>
    );
};

export default Ourselve;