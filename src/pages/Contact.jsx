import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Bounded from '../components/Bounded';
import EarthCanvas from '../components/EarthCanvas';
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {};
  const handleSubmit = (event) => {};
  return (
    <Bounded>
      <div className=' flex lg:flex-row flex-col-reverse gap-7 overflow-hidden mx-auto '>
        <div className='flex-[0.75]  p-8 rounded-lg bg-slate-100/75 shadow-lg z-40 ml-10'>
          <p className='text-lg font-semibold'>Get in touch</p>
          <h1 className='text-4xl font-bold'>Contact</h1>
          <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-8 '>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Your name..'
                className='px-2 py-2 rounded-lg z-50 outline-none'
              />
            </label>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Your email..'
                className='px-2 py-2 rounded-lg z-50 outline-none'
              />
            </label>
            <label className='flex flex-col'>
              <span className=' font-medium mb-4'>Your message</span>
              <textarea
                rows='7'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='message..'
                className='px-2 py-2 rounded-lg z-50 outline-none'
              />
            </label>
            <button
              type='submit'
              className='bg-white px-8 py-3 shadow-md w-fit font-bold rounded-md outline-none'
            >
              {loading ? 'Sending' : 'Send'}
            </button>
          </form>
        </div>
        <div className='lg:flex-1 lg:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
