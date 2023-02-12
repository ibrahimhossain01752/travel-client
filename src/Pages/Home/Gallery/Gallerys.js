import React from 'react';

const Gallerys = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-5">Travelling Gallery</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://image.freepik.com/free-photo/beautiful-river-snow-covered-mountains-landscape-kashmir-state-india_1232-4804.jpg" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Kashmir</h5>
                            <p class="card-text">Jammu and Kashmir was a region formerly administered by India as a state from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src='https://image.freepik.com/free-photo/tropical-beach_74190-188.jpg' class="card-img-top" alt="" />  {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title">Cox's Bazar</h5>
                            <p class="card-text">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://as2.ftcdn.net/v2/jpg/03/23/34/09/500_F_323340944_0VjHFqQrx34zBVYWBF4XmCBIECKgBDX2.jpg" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Sundarban</h5>
                            <p class="card-text">Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallerys;