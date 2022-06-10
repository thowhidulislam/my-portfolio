import React from 'react';
import FeaturedProjects1 from "../../assets/featured-projects/Carpentryz-featuredProjects.png"
import FeaturedProjects2 from "../../assets/featured-projects/SpicyKart-featuredProjects.png"
import FeaturedProjects3 from "../../assets/featured-projects/Mike Reynolds-featuredProjects.png"

const FeaturedProjects = () => {
    return (
        <section>
            <h1 className='text-5xl text-primary'>Projects</h1>
            <div className='my-10'>
                <div class="hero min-w-screen bg-secondary">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={FeaturedProjects1} class="max-w-xl rounded-lg shadow-2xl flex-1" alt='' />
                        <div className='text-right flex-1 ml-11'>
                            <h4 class="text-sm font-bold text-base-100">Featured Project</h4>
                            <h1 className='text-5xl text-primary'>Carpentryz</h1>
                            <p class="py-6 text-accent">Carpentryz is a website built focusing on product <br /> manufacturers. Both buyers and sellers can use this website. </p>
                        </div>
                    </div>
                </div>
                <div class="hero min-w-screen bg-secondary my-14">
                    <div class="hero-content flex-col lg:flex-row-reverse flex-1">
                        <img src={FeaturedProjects2} class="max-w-xl rounded-lg shadow-2xl" alt='' />
                        <div className='text-left'>
                            <h4 class="text-sm font-bold text-base-100">Featured Project</h4>
                            <h1 className='text-5xl text-primary'>SpiceKart</h1>
                            <p className="py-6 text-accent">SpiceKart is a warehouse management website.</p>
                        </div>
                    </div>
                </div>
                <div class="hero min-w-screen bg-secondary my-14">
                    <div class="hero-content flex-col lg:flex-row flex-1">
                        <img src={FeaturedProjects3} class="max-w-xl rounded-lg shadow-2xl" alt='' />
                        <div className='text-right'>
                            <h4 class="text-sm font-bold text-base-100">Featured Project</h4>
                            <h1 className='text-5xl text-primary'>Reynolds</h1>
                            <p className="py-6 text-accent">It is an independent service provider website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;