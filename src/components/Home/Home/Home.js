import React from 'react';
import AboutMe from '../AboutMe';
import ContactForms from '../ContactForms';
import FeaturedProjects from '../FeaturedProjects';
import Hero from '../Hero';
import Navbar from '../Navbar';

const Home = () => {
    return (
        <div className='mx-4 px-4 lg:mx-20 lg:px-10 pb-14'>
            <Navbar></Navbar>
            <Hero></Hero>
            <FeaturedProjects></FeaturedProjects>
            <AboutMe></AboutMe>
            <ContactForms></ContactForms>

        </div>
    );
};

export default Home;