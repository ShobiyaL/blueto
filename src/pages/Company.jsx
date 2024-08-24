import React from 'react';
import Bounded from '../components/Bounded';
import officeImg from '../Office  Background.png';
import Heading from '../components/Heading';
const Company = () => {
  return (
    <Bounded>
      <div className='grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] text-center md:text-start'>
        <Heading size='xl' className='col-start-1'>
          About Blueto
        </Heading>
        <div className='prose prose-xl prose-slate prose-invert col-start-1'>
          <p className='pb-7'>
            We are the change. Where innovation meets functionality. We are a
            team of skilled software freelancers dedicated to providing
            cutting-edge solutions to propel your business forward.
          </p>
          <p className='pb-7'>
            With expertise in diverse technologies and a commitment to
            excellence, we deliver custom software solutions tailored to your
            unique needs.
          </p>
          <p className='font-bold pb-5'>Why Choose Blueto?</p>
          <p className='pb-2'>
            Expertise: Our team comprises skilled professionals with in-depth
            knowledge of the latest technologies.
          </p>
          <p className='pb-2'>
            Custom Solutions: We understand that every business is unique. Our
            solutions are tailor-made to fit your specific requirements.
          </p>
          <p className='pb-2'>
            Quality Assurance: Our commitment to delivering high-quality
            software ensures that your project meets the highest standards.
          </p>
        </div>
        {/* Image */}
        <div className='row-start-2 md:row-start-1 max-w-sm md:col-start-2 md:row-end-3 z-40 mt-0 md:mt-40'>
          <img
            src={officeImg}
            className='about-image  w-full rounded-md h-64 mx-auto'
            alt='aboutimage'
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Company;
