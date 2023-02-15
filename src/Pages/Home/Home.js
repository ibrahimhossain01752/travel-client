import React from 'react';
import Banner from './Banner/Banner';
import Gallerys from './Gallery/Gallerys';
import Ourselve from './Ourselve/Ourselve';
import OurService from './OurService/OurService';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Ourselve/>
            <OurService/>
            <Gallerys></Gallerys>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;