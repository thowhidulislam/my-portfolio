import React from 'react';

const Hero = () => {
    return (
        <section className='relative'>
            <div class="py-24 min-w-screen">
                <div class="flex-col lg:flex-row">
                    <div>
                        <h1 class="text-xl font-bold text-base-100 my-3 tracking-widest">Hi, my name is </h1>
                        <h1 className='text-5xl font-bold text-primary'>Thowhidul Islam</h1>
                        <p class="py-6 text-[#B9D1E8]">I am an aspiring web developer. Highly interested in the MERN stack.</p>
                        <div className='button-group-custom relative my-7'>
                            <button className='bg-primary w-44 h-14 z-100 font-bold text-2xl absolute bottom-6 left-4 hover:bottom-4 hover:left-2 transition hover:ease-in-out duration-300'>Resume</button>
                            <button className='bg-neutral w-44 h-14'></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;