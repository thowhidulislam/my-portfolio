import React from 'react';
import AboutMe from '../AboutMe';
import ContactForms from '../ContactForms';
import FeaturedProjects from '../FeaturedProjects';
import Hero from '../Hero';
import MoreProjects from '../MoreProjects';

const Home = () => {
    return (
        <div className='mx-4 px-4 lg:mx-20 lg:px-10'>
            <div>
                <Hero></Hero>
                <FeaturedProjects></FeaturedProjects>
                <MoreProjects></MoreProjects>
                <AboutMe></AboutMe>
                <ContactForms></ContactForms>
            </div>
        </div>
    );
};

export default Home;