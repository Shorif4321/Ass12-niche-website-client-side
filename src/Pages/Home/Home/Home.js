import React from 'react';
import Banner from '../Banner/Banner.js';
import FeturedProduct from '../FeturedProduct/FeturedProduct.js';
import Services from '../Services/Services.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <FeturedProduct></FeturedProduct>
        </div>
    );
};

export default Home;