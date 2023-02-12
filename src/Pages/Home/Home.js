import React from 'react';
import Banner from './Banner/Banner';
import Gallerys from './Gallery/Gallerys';
import Ourselve from './Ourselve/Ourselve';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Ourselve/>
            <Gallerys></Gallerys>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;