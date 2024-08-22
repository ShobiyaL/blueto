import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Bounded from '../components/Bounded';
import Shapes from '../components/Shapes';
import HomeAbout from '../components/HomeAbout';
import Features from '../components/Features';
import { addon1 } from '../assets';
const Home = () => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.name-animation',
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
          transformOrigin: 'left top',
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: 'random',
          },
        }
      );
      tl.fromTo(
        '.work',
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,

          scale: 1,
          ease: 'elastic.out(1,0.3)',
        },
        '<1'
      );
    }, component);
    return () => ctx.revert();
  }, []);
  const renderLetters = (name, key) => {
    if (!name) return;
    return name.split('').map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded ref={component} className='md:py-0 lg:py-0  '>
      <div className='grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center   relative md:-mt-10  '>
        <Shapes />
        <div className='col-start-1 md:row-start-1'>
          <h1
            className='mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none '
            aria-label={'blueto-tech'}
          >
            <span className='block text-slate-300 '>
              {renderLetters('Blueto', 'first')}
            </span>
            <span className='-mt-[.2em] block  text-slate-500  '>
              {renderLetters('Tech.', 'last')}
            </span>
          </h1>
        </div>
      </div>
      <div>
        <div className='w-full h-0.5 bg-slate-500/50 '></div>
        <div className='absolute -left-[20rem] bottom-[10rem] md:-left-[60rem] md:bottom-[35rem]'>
          <img src={addon1} alt='addon' />
        </div>

        <HomeAbout />
        <Features />
      </div>
    </Bounded>
  );
};

export default Home;
