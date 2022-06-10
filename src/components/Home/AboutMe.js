import React from 'react';
import myImage from '../../assets/my-image.png'

const AboutMe = () => {
    return (
        <section id='aboutMe'>
            <h1 className='text-5xl text-primary font-bold'>About Me</h1>
            <div className='flex flex-col lg:flex-row items-center'>
                <div className='w-[60%]'>
                    <p className='text-xl text-info my-6'>I'm Thowhidul Islam Molla, a front-end web developer. Highly interested in the MERN stack.</p>
                    <p className='text-xl text-info my-2'>I've expertise in React, JavaScript, Tailwind, Bootstrap, React Bootstrap, HTML, and CSS. In addition, I am comfortable writing code in Express JS, MongoDB, React Router, React Hook Form, and Firebase Authentication. Apart from these technologies, I am also familiar with node, postman, and stripe.</p>
                </div>
                <div className='w-[40%]'>
                    <img class="mask mask-hexagon w-[400px]" src={myImage} alt='' />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;