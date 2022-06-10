import React from 'react';
import { Link } from 'react-router-dom'
import FeaturedProjects1 from "../../assets/featured-projects/Carpentryz-featuredProjects.png"
import FeaturedProjects2 from "../../assets/featured-projects/SpicyKart-featuredProjects.png"
import FeaturedProjects3 from "../../assets/featured-projects/Mike Reynolds-featuredProjects.png"

const FeaturedProjects = () => {
    return (
        <section id='projects'>
            <h1 className='text-5xl text-primary text-center lg:text-left'>Projects</h1>
            <div className='my-10'>
                <div className=''>
                    <div class="flex flex-col lg:flex-row bg-secondary h-[380px] items-start lg:items-center">
                        <figure className='w-full lg:w-[60%] h-full'><img src={FeaturedProjects1} className='w-full h-full object-cover' alt="Album" /></figure>
                        <div class="w-full lg:w-[40%] mt-6 lg:mt-0 text-left lg:text-right">
                            <h1 className='text-md font-bold text-base-100'>Featured Project</h1>
                            <h1 class="text-primary text-5xl font-bold">Carpentryz</h1>
                            <p className='py-3 text-base-100'>Carpentryz is a website built focusing on product manufacturers. Both buyers and sellers can use this website.</p>
                            <p className='text-accent text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Express</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Tailwind</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Hook Form</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Firebase Hooks</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>MongoDB</span></small></p>

                            {/* Github and Details link */}

                            <div className='mt-5'>
                                <a href="https://github.com/thowhidulislam/carpentryz-client-side" target='_blank' rel='noreferrer' className=' inline-block my-1 mr-3'><svg className='fill-base-100 hover:fill-primary h-5 w-5' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                <Link to='/carpentryzDetails' className='inline-block my-1 mr-3' title='More Details'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-base-100 hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                                <a href="https://carpentryz.web.app/" className='inline-block my-1' title='Live website link' target='_blank' rel='noreferrer' >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-base-100 hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* SpiceKart */}
                    <div class="flex flex-col lg:flex-row-reverse bg-secondary h-[380px] items-start lg:items-center my-40 lg:my-24">
                        <figure className='w-full lg:w-[60%] h-full'><img src={FeaturedProjects2} className='w-full h-full object-cover' alt="Album" /></figure>
                        <div class="w-full lg:w-[40%] mt-6 lg:mt-0 text-left">
                            <h1 className='text-md font-bold text-base-100'>Featured Project</h1>
                            <h1 class="text-primary text-5xl font-bold">SpiceKart</h1>
                            <p className='py-3 text-base-100'>SpiceKart is a warehouse management website.</p>
                            <p className='text-accent text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Express</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Bootstrap</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Hook Form</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Firebase Hooks</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Recharts</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Axios</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Heroku</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>MongoDB</span></small></p>
                            <div className='mt-5'>
                                <a href="https://github.com/thowhidulislam/spiceKart-client-side" target='_blank' rel='noreferrer' className='inline-block my-1 mr-3'><svg className='fill-base-100 hover:fill-primary h-5 w-5' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                <Link to="/spiceKartDetails" className='text-end inline-block my-1 mr-3' title='More Details'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-base-100 hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                                <a href="https://spicy-kart.web.app/" className='inline-block my-1' title='Live website link' target='_blank' rel='noreferrer' >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-base-100 hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Reynolds */}
                    <div class="flex flex-col lg:flex-row bg-secondary h-[380px] items-start lg:items-center my-40 lg:my-24">
                        <figure className='w-full lg:w-[60%] h-full'><img src={FeaturedProjects3} className='w-full h-full object-cover' alt="Album" /></figure>
                        <div class="w-full lg:w-[40%] text-left lg:text-right mt-6 lg:mt-0">
                            <h1 className='text-md font-bold text-base-100'>Featured Project</h1>
                            <h1 class="text-primary text-5xl font-bold">Reynolds</h1>
                            <p className='py-3 text-base-100'>It is an independent service provider website.</p>
                            <p className='text-accent text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Express</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Bootstrap</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Hook Form</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Firebase Hooks</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Recharts</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Axios</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Heroku</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>MongoDB</span></small></p>
                            <div className='mt-5'>
                                <a href="https://github.com/thowhidulislam/reynolds-trainer" target='_blank' rel='noreferrer' className='text-end inline-block my-1 mr-3'><svg className='fill-base-100 hover:fill-primary h-5 w-5' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                <Link to="/reynoldsDetails" className='text-end inline-block my-1 mr-3' title='More Details'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-base-100 hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                                <a href="https://reynolds-gym-thowhidulislam.netlify.app/" className='inline-block my-1' title='Live website link' target='_blank' rel='noreferrer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-base-100 hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;