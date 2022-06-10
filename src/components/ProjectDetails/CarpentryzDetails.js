import React from 'react';
import carpentryz1 from '../../assets/featured-projects/Carpentryz-login-page.png'
import carpentryz2 from '../../assets/featured-projects/Carpentryz-dashboard-admin.png'
import carpentryz3 from '../../assets/featured-projects/carpentryz-add-review.png'
import carpentryz4 from '../../assets/featured-projects/carpentryz-make-admin.png'
import carpentryz5 from '../../assets/featured-projects/carpentryz-manage-products.png'

const CarpentryzDetails = () => {
    return (
        <section className='bg-secondary text-white mx-4 px-4 lg:mx-20 lg:px-10 pb-14'>
            <h1 className='text-5xl font-bold text-primary text-center'>Carpentryz</h1>
            <div className='text-info'>
                <p className='text-info my-12'>Carpentryz is a website built focusing on product manufacturers. Both buyers and sellers can use this website.</p>
                <ul className='my-8'>
                    <li>• Implemented Dashboard for both user and admin.</li>
                    <li>• User can give a review.</li>
                    <li>• User can make payment by card. </li>
                    <li>• Admin can change the status of the paid order.</li>
                    <li>• Admin can add and delete product in the dashboard.</li>
                    <li>• Admin can change the status of paid and pending order.</li>
                </ul>
                <div>
                    <h1 className='text-primary text-5xl text-bold my-9'>Images of Features</h1>
                    <img src={carpentryz2} className='my-10' alt="" />
                    <img src={carpentryz3} className='my-10' alt="" />
                    <img src={carpentryz1} className='my-10' alt="" />
                    <img src={carpentryz4} className='my-10' alt="" />
                    <img src={carpentryz5} className='my-10' alt="" />
                </div>

                {/* Technologies used */}

                <p className='text-accent text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Express</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Tailwind</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Hook Form</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Firebase Hooks</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>MongoDB</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Toastify</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Stripe</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Query</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Router</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Axios</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Heroku</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>HTML</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>CSS</span></small></p>
            </div>
        </section>
    );
};

export default CarpentryzDetails;