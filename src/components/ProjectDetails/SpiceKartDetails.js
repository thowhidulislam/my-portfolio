import React from 'react';
import spiceKart1 from '../../assets/featured-projects/SpicyKart-update.png'
import spiceKart2 from '../../assets/featured-projects/SpicyKart-myProducts.png'
import spiceKart3 from '../../assets/featured-projects/SpicyKart-inventory.png'

const SpiceKartDetails = () => {
    return (
        <section className='bg-secondary text-white mx-4 px-4 lg:mx-20 lg:px-10 pb-14'>
            <h1 className='text-5xl font-bold text-primary text-center'>SpiceKart</h1>
            <div className="spiceKart-code-link flex flex-col lg:flex-row justify-center">
                <div className='text-center my-10 mr-5'>
                    <a href="https://github.com/thowhidulislam/spiceKart-client-side" target='_blank' rel='noreferrer' className='inline-block my-1'><svg className='fill-base-100 hover:fill-primary h-6 w-6' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><title>GitHub Client Side Code</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                    <p className='text-info'>Client side</p>
                </div>
                <div className='text-center my-10 mr-5'>
                    <a href="https://github.com/thowhidulislam/spiceKart-server-side" target='_blank' rel='noreferrer' className='inline-block my-1'><svg className='fill-base-100 hover:fill-primary h-6 w-6' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><title>GitHub Server Side Code</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                    <p className='text-info'>Server side</p>
                </div>
                <div className='text-center my-10'>
                    <a href="https://spicy-kart.web.app/" className='inline-block my-1' title='Live website link' target='_blank' rel='noreferrer' >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-base-100 hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    <p className='text-info'>Live Website Link</p>
                </div>
            </div>
            <div className='text-info'>
                <p className='text-info my-12'>SpiceKart is a warehouse management website.</p>
                <ul className='my-8'>
                    <li>• Upon logging in user can see manage products, add products, and my products on the nav bar.</li>
                    <li>• User can delete products from both manage products and my products section.</li>
                    <li>• User can restock products.</li>
                    <li>• Used charts from recharts.org in the homepage to show the report.</li>
                    <li>• Used JWT for the verification of user.</li>
                </ul>
                <div>
                    <h1 className='text-primary text-5xl text-bold my-9'>Images of Features</h1>
                    <img src={spiceKart1} className='my-10' alt="" />
                    <img src={spiceKart2} className='my-10' alt="" />
                    <img src={spiceKart3} className='my-10' alt="" />
                </div>

                {/* Technologies used */}

                <p className='text-accent text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Express</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Bootstrap</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Hook Form</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Firebase Hooks</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>MongoDB</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Toastify</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Stripe</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Recharts</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Router</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Axios</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Heroku</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>HTML</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>CSS</span></small></p>
            </div>
        </section>
    );
};

export default SpiceKartDetails;