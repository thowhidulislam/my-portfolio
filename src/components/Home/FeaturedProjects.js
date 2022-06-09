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
                        <img src={FeaturedProjects1} class="max-w-2xl rounded-lg shadow-2xl" alt='' />
                        <div className='text-right'>
                            <h4 class="text-sm font-bold text-base-100">Featured Project</h4>
                            <h1 className='text-5xl text-primary'>Carpentryz</h1>
                            <p class="py-6 text-accent">Carpentryz is a website built focusing on product manufacturers. Both buyers and sellers can use this website. </p>
                        </div>
                    </div>
                </div>
                <div class="hero min-w-screen bg-secondary my-14">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={FeaturedProjects2} class="max-w-2xl rounded-lg shadow-2xl" alt='' />
                        <div className='text-left'>
                            <h4 class="text-sm font-bold text-base-100">Featured Project</h4>
                            <h1 className='text-5xl text-primary'>SpiceKart</h1>
                            <p className="py-1 text-accent">SpiceKart is a warehouse management website.</p>
                            <p className="text-accent py-1">
                                • Upon logging in user can see manage products, add products, and my products on the nav bar.
                            </p>
                            <p className="text-accent py-1">
                                • User can delete products from both manage products and my products section.
                            </p>
                            <p className="text-accent py-1"> • User can restock products.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="hero min-w-screen bg-secondary my-14">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={FeaturedProjects3} class="max-w-2xl rounded-lg shadow-2xl" alt='' />
                        <div className='text-right'>
                            <h4 class="text-sm font-bold text-base-100">Featured Project</h4>
                            <h1 className='text-5xl text-primary'>Reynolds</h1>
                            <p className="py-1 text-accent">It is an independent service provider website.</p>
                            <p className="text-accent py-1">
                                Used email-password-based authentication for registration and login.
                            </p>
                            <p className="text-accent py-1">
                                Clicking the enroll button will take the user to the checkout page.
                            </p>
                            <p className="text-accent py-1">To go to the registration page user have to click the Sign-Up button on the banner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;