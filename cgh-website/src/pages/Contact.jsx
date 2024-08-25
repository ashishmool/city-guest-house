import React from 'react';
import { ScrollToTop} from '../components';




const Contact = () => {
    return (
        <>
            <ScrollToTop />

            {/* Header Section */}
            <div className='bg-contact h-[560px] relative flex justify-center items-center bg-cover bg-center'>
                <div className='absolute w-full h-full bg-black/70' />
                <h1 className='text-6xl text-white z-20 font-primary text-center'>Contact Us</h1>
            </div>

            {/* Content Section */}
            <div className='container mx-auto py-24'>
                <div className='flex flex-col lg:flex-row lg:gap-x-8'>

                    {/* Left Side: Contact Form */}
                    <div className='w-full lg:w-[60%]'>
                        <h2 className='h2'>Get in Touch</h2>
                        <p className='mb-8 text-justify'>
                            We're here to assist you with any inquiries or requests you may have. Please fill out the form below, and we’ll get back to you as soon as possible.
                        </p>
                        <form action="https://formspree.io/f/mvgpdyoz" method="POST">
                            <div className='mb-4'>
                                <label htmlFor='name' className='block text-lg mb-2'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-lg mb-2'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='message' className='block text-lg mb-2'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='4'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-md'
                                    required
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-lg btn-primary w-full'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Google Map */}
                    <div className='w-full lg:w-[40%] h-full mt-12 lg:mt-0'>


                        <h2 className='h2'>Find Us Here</h2>
                        <div className='w-full h-96 lg:h-[500px]'>  {/* Increased height */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4799800959015!2d85.4218197768378!3d27.67121627705251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb5b9f19e85%3A0x0!2zMjfCsDQwJzE2LjMiTiA4NcKwMjUnMjEuNCJF!5e0!3m2!1sen!2snp!4v1673682316978!5m2!1sen!2snp"
                                width="100%"
                                height="60%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="City Guest House Location"
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Contact;
