import React from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div className='mx-4 px-4 lg:mx-20 lg:px-10'>
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
    );
};

export default Home;