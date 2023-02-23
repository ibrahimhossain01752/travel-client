import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div class=" ">

        <footer class="text-white text-center text-lg-start bg-primary">
        {/* <!-- Grid container --> */}
        <div class="container p-4">
          {/* <!--Grid row--> */}
          <div class="row ">
            {/* <!--Grid column--> */}
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">About company</h5>
      
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti.
              </p>
      
            
      
              <div class="mt-4">
               
                <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-facebook-f"></i></a>
                
                <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-dribbble"></i></a>
              
                <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-twitter"></i></a>
                
                <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-google-plus-g"></i></a>
              
              </div>
            </div>
            {/* <!--Grid column--> */}
      
            {/* <!--Grid column--> */}
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              {/* <h5 class="text-uppercase mb-4 pb-1">Search something</h5> */}
      
              {/* <div class="form-outline form-white mb-4">
                <input type="text" id="formControlLg" class="form-control form-control-lg" />
                <label class="form-label" for="formControlLg">Search</label>
              </div> */}
      
              <ul class="fa-ul">
                <li class="mb-3">
                  <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Bangladesh, Jaleshoritola, BD</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">ibrahimhossain01752@gmail.com</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 8801 304 0277 58</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567 89</span>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
      
            {/* <!--Grid column--> */}
            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Opening hours</h5>
      
              <table class="table text-center text-white">
                <tbody class="font-weight-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}
      
        {/* <!-- Copyright --> */}
        <div class="text-center p-3">
          © 2023 Copyright:
          {/* <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      
    </div>
    );
};

export default Footer;