import React, { useEffect, useRef } from 'react';
import Bounded from '../components/Bounded';
import Heading from '../components/Heading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';

const Services = () => {
  const component = useRef(null);

  return (
    <Bounded as='section'>
      <Heading size='xl' className='mb-8'>
        What we do!
      </Heading>
      <div className='prose prose-xl prose-invert mb-10'>
        <p>
          {' '}
          Central hub, innovation-focused we provide a diverse array of
          technological services.
        </p>
      </div>
      <div className='mt-20 flex flex-wrap gap-20 '>
        {services.map((services, index) => (
          <ServiceCard key={index} {...services} ref={component} />
        ))}
        <div className='ml-20 flex items-end justify-end prose prose-xl prose-stone z-20'>
          <p>& more..</p>
        </div>
      </div>
    </Bounded>
  );
};

export default Services;
