import React from 'react';

const ContactForm = () => {
    return (
        <section>
            <div className='my-24'>
                <div class="flex items-center lg:flex-row bg-secondary">
                    <div class=" w-full max-w-3xl lg:text-left flex-1">
                        <h1 className='text-5xl text-primary font-bold '>Get In Touch</h1>
                        <p class="py-2 text-accent">Want to know about me? Drop me a line and let's chat!</p>
                    </div>
                    <div class="max-w-3xl flex-1">
                        <form action="https://formsubmit.co/thowhidmk@gmail.com" method="POST">
                            <input type="text" name='name' placeholder="Enter your name" class="input input-ghost w-full max-w-3xl my-2" />
                            <input type="email" name='email' placeholder="Enter your email" class="input input-ghost w-full max-w-3xl my-2" required />
                            <div className=''>
                                <textarea name='message' class="textarea textarea-ghost my-2 w-full " placeholder="Write your message here.."></textarea>
                            </div>
                            <div className='button-group-custom relative my-7 w-2/4 mx-auto'>
                                <button className='bg-primary w-44 h-14 font-bold text-2xl absolute bottom-6 left-4 hover:bottom-4 hover:left-2 transition hover:ease-out-in duration-300' type='submit'>Send</button>
                                <button className='bg-neutral w-44 h-14'></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;