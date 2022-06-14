import React from 'react';
import jerseyBazar from '../../assets/projects/jersey-bazar.png'
import phoneGallery from '../../assets/projects/phone-gallery.png'
import randomHeadset from '../../assets/projects/random-eadset-picker.png'

const MoreProjects = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-y-2 lg:gap-x-2 mb-20'>
            {/* Project-1 */}
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={jerseyBazar} alt="jersey" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-primary">Jersey Bazar</h2>
                    <p className='text-info'>It is a product selling website where buyers can give reviews after buying products. Reviews section on the home shows only three reviews.</p>
                    <div className='flex flex-row gap-x-3'>
                        <a href="https://github.com/thowhidulislam/jersey-bazar" target='_blank' rel='noreferrer' className=' inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>Github Server Side Code</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href="https://jersey-bazar-thowhidulislam.netlify.app/" className='inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold' target='_blank' rel='noreferrer' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Live website link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                    <p className='text-info text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Router</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Recharts</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React-rating</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>HTML</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>CSS</span></small></p>
                </div>
            </div>

            {/* Project-2 */}
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={phoneGallery} alt="phones Collection" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-primary">Phone Gallery</h2>
                    <p className='text-info'>User can search phones and see details of that particular phones.</p>
                    <div className='flex flex-row gap-x-3'>
                        <a href="https://github.com/thowhidulislam/phone-gallery" target='_blank' rel='noreferrer' className=' inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>Github Server Side Code</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href="https://phone-gallery-thowhidulislam.netlify.app/" className='inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold' target='_blank' rel='noreferrer' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Live website link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                    <p className='text-info text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Router</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Recharts</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React-rating</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>HTML</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>CSS</span></small></p>
                </div>
            </div>

            {/* Project-3 */}
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={randomHeadset} alt="Headset" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-primary">Random Headset Picker</h2>
                    <p className='text-info'>System will randomly choose one headset from four headsets user selected from the website.</p>
                    <div className='flex flex-row gap-x-3'>
                        <a href="https://github.com/thowhidulislam/random-headset-picker" target='_blank' rel='noreferrer' className=' inline-block my-1 mr-3 text-info focus:bg-transparent hover:text-primary font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>Github Server Side Code</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        <a href="https://random-headset-picker.netlify.app/" className='inline-block my-1 text-info focus:bg-transparent hover:text-primary font-bold' target='_blank' rel='noreferrer' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Live website link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                    <p className='text-info text-sm font-bold'><small><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>React Router</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>Font Awesome Icon</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>HTML</span><span className='mr-2 rounded px-1 py-0.5 my-0.5 bg-neutral inline-block'>CSS</span></small></p>
                </div>
            </div>
        </div>
    );
};

export default MoreProjects;