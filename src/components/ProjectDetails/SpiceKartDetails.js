import React from 'react';
import spiceKart1 from '../../assets/featured-projects/SpicyKart-update.png'
import spiceKart2 from '../../assets/featured-projects/SpicyKart-myProducts.png'
import spiceKart3 from '../../assets/featured-projects/SpicyKart-inventory.png'

const SpiceKartDetails = () => {
    return (
        <section className='bg-secondary text-white mx-4 px-4 lg:mx-20 lg:px-10 pb-14'>
            <h1 className='text-5xl font-bold text-primary text-center'>SpiceKart</h1>
            <div className="spiceKart-code-link flex lg:flex-row justify-center">
                <div className='text-center my-10 mr-5'>
                    <a href="https://github.com/thowhidulislam/spiceKart-client-side" target='_blank' rel='noreferrer' className=' inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>Github Client Side Code</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    <p className='text-info'>Client side</p>
                </div>
                <div className='text-center my-10 mr-5'>
                    <a href="https://github.com/thowhidulislam/spiceKart-server-side" target='_blank' rel='noreferrer' className=' inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>Github Server Side Code</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    <p className='text-info'>Server side</p>
                </div>
                <div className='text-center my-10'>
                    <a href="https://spicy-kart.web.app/" className='inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold' target='_blank' rel='noreferrer' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Live website link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                    <p className='text-info'>Live Website Link</p>
                </div>
            </div>
            <div className='text-info'>
                <p className='text-info my-5 lg:my-12'>SpiceKart is a warehouse management website.</p>
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