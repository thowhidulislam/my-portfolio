import React from 'react';
import ContactForm from '../ContactForm';
import FeaturedProjects from '../FeaturedProjects';
import Hero from '../Hero';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div className='mx-4 px-4 lg:mx-20 lg:px-10 pb-14'>
            <Navbar></Navbar>
            <Hero></Hero>
            <FeaturedProjects></FeaturedProjects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;