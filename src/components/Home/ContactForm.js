import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div className='my-14 '>
                <div class="min-w-screen bg-secondary">
                    <div class="flex justify-center items-start lg:flex-row">
                        <div class=" w-full max-w-2xl lg:text-left ">
                            <h1 className='text-5xl text-primary font-bold '>Get In Touch</h1>
                            <p class="py-2 text-accent">Want to know about me? Drop me a line and let's chat!</p>
                        </div>
                        <div class=" w-full max-w-2xl">
                            <form action="https://formsubmit.co/thowhidmk@gmail.com" method="POST">
                                <input type="text" name='name' placeholder="Enter your name" class="input input-ghost w-full max-w-xs my-2" />
                                <input type="email" name='email' placeholder="Enter your email" class="input input-ghost w-full max-w-xs my-2" required />
                                <div className='max-w-xs'>
                                    <textarea name='message' class="textarea textarea-ghost my-2 w-full max-w-xs " placeholder="Write your message here.."></textarea>
                                </div>
                                <div className='button-group-custom relative my-7'>
                                    <button className='bg-primary w-44 h-14 font-bold text-2xl absolute bottom-6 left-4 hover:bottom-4 hover:left-2 transition hover:ease-out-in duration-300' type='submit'>Send</button>
                                    <button className='bg-neutral w-44 h-14'></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;