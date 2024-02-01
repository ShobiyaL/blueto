import React, { useState, useRef } from 'react';
import { MdArrowCircleRight, MdArrowOutward } from 'react-icons/md';
import { IoIosArrowDropright } from 'react-icons/io';
const ProductsList = ({ products }) => {
  console.log(products);

  return (
    <>
      <ul className='grid border-y border-y-slate-50/25'>
        {products.map((product, index) => (
          <li key={index} className='list-item opacity-100 z-20'>
            <a
              href='#'
              className='flex flex-col justify-between  border-t border-t-slate-50/25 py-10  text-slate-200 md:flex-row '
            >
              <div className='flex flex-col'>
                <span className='text-2xl font-bold'>{product.title}</span>
                <div className='flex gap-3 text-yellow-400'></div>
              </div>
              <span className='ml-auto flex items-center gap-2 text-xl font-medium md:mr-10 cursor-pointer z-20'>
                <IoIosArrowDropright />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
