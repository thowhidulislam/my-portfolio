import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import './ContactForm.css'

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
                            <input type="text" name='name' placeholder="Enter your name" class="input input-ghost w-full max-w-3xl my-2 rounded-full border-1 border-primary bg-neutral focus:text-white text-white" />
                            <input type="email" name='email' placeholder="Enter your email" class="input input-ghost w-full max-w-3xl my-2 rounded-full border-1 border-primary bg-neutral focus:text-white text-white" required />
                            <div className=''>
                                <textarea name='message' class="textarea textarea-ghost my-2 w-full h-52 max-h-full border-1 border-primary bg-neutral focus:text-white text-white" placeholder="Write your message here.."></textarea>
                            </div>
                            <div className='button-group-custom relative my-7 w-2/4 mx-auto'>
                                <PrimaryButton>Send</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;