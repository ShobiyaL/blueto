import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Bounded from '../components/Bounded';
import Shapes from '../components/Shapes';

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
    <Bounded ref={component}>
      <div className='grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center '>
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
          <span
            className='work block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500
             bg-clip-text text-md md:text-xl font-bold uppercase leading-8 tracking-[.2em]  text-transparent opacity-0 '
          >
            crafting a world where exceptional service adorns every smile.
          </span>
          {/* <span className=' text-slate-300 text-xl'>managed by</span> */}
        </div>
      </div>
    </Bounded>
  );
};

export default Home;
