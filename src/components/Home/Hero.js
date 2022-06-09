import React from 'react';

const Hero = () => {
    return (
        <section>
            <div class="py-24 min-h-screen">
                <div class="flex-col lg:flex-row">
                    <div>
                        <h1 class="text-xl font-bold text-base-100 my-3 tracking-widest">Hi, my name is </h1>
                        <h1 className='text-5xl font-bold text-primary'>Thowhidul Islam</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;