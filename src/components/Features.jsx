import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { animateWithGsap } from '../utils/animation';

import gsap from 'gsap';
import { dots } from '../assets';

const Features = () => {
  useGSAP(() => {
    animateWithGsap('.g_box', { rotation: 360, x: 100, duration: 1 });
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap('.g_text', {
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      duration: 1,
    });
    animateWithGsap('.g_box', {
      y: 0,
      opacity: 1,
      ease: 'bounce.out',
      duration: 1,
    });
  }, []);

  return (
    <section className='h-full  bg-zinc relative overflow-hidden '>
      <div className='screen-max-wdith '>
        <div className='mb-12 w-full'>
          <h1
            id='features_title'
            className='text-zinc-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20'
          >
            Explore the full story.
          </h1>
        </div>
        <div className='feature-text-container'>
          <div className='flex-1 '>
            <p className='feature-text g_text'>
              <p className='text-white my-4'>
                Own Your Vision, Command the Process
              </p>
              From day one, you’re not just involved—you’re in charge. Your
              ideas are your greatest asset, and we provide the secure
              environment and expert team to bring them to life without
              compromise. You lead, we execute.
            </p>
            <p className='feature-text g_text'>
              <p className='text-white my-4'>
                Real-Time Updates, Full Transparency
              </p>
              Experience the thrill of running your own project with daily
              updates and transparent communication. Our team is at your
              disposal for advice and collaboration, ensuring that your vision
              is realized exactly as you envision it.
            </p>
            <p className='feature-text g_text'>
              <p className='text-white my-4'>Lead Like a CEO</p>
              Step into the role of a CEO—visit our team, drive the development
              process, and watch your product take shape under your leadership.
              This isn’t just a service; it’s a partnership where your decisions
              define the outcome.
            </p>
            <p className='feature-text g_text'>
              <p className='text-white my-4'>Why Choose Blueto? Expertise: </p>
              Our team comprises skilled professionals with in-depth knowledge
              of the latest technologies. Custom Solutions: We understand that
              every business is unique. Our solutions are tailor-made to fit
              your specific requirements. Quality Assurance: Our commitment to
              delivering high-quality software ensures that your project meets
              the highest standards.{' '}
              <span className='text-white '>
                ALL THE PROJECTS WILL BE KEPT AS SECRETS.
              </span>{' '}
            </p>

            <div className='g_box  hidden md:flex w-36 h-40 md:w-64 md:h-64 border-2  items-center justify-center rounded-2xl'>
              <p className='text-center p-4 text-zinc-400 '>
                <p className='italic text-slate-300 text-lg '>
                  Your Vision, Your Secret Your ideas
                </p>{' '}
                remain strictly confidential with us. We guarantee that your
                intellectual property stays protected, so you can innovate with
                peace of mind
              </p>
            </div>
            {/* sm:-top-[5rem] sm:-right-[10rem] */}
            <div className='absolute   md:-bottom-[19rem] md:-right-[35rem]'>
              <img src={dots} alt='addon' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
