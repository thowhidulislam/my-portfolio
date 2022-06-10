import React from 'react';
import portfolio from '../../assets/portfolio/Md Thowhidul Islam Molla.pdf'
import PrimaryButton from '../Shared/PrimaryButton';

const Hero = () => {
    return (
        <section className='relative'>
            <div class="py-8 lg:py-24 min-w-screen">
                <div class="flex-col lg:flex-row">
                    <div>
                        <h1 class="text-xl font-bold text-base-100 my-3 tracking-widest">Hi, my name is </h1>
                        <h1 className='text-5xl lg:text-8xl font-bold text-primary'>Thowhidul Islam</h1>
                        <p class="py-6 text-info">I am an aspiring web developer based in the Bangladesh.</p>
                        <div className='button-group-custom relative my-7'>
                            <a href={portfolio} download='Md Thowhidul Islam Molla.pdf'>
                                <PrimaryButton>Resume</PrimaryButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;