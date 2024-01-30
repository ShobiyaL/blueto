import React, { useState, useRef } from 'react';
import { MdArrowOutward } from 'react-icons/md';
const ProductsList = ({ products }) => {
  console.log(products);

  return (
    <>
      <ul className='grid border-b border-b-slate-100'>
        {products.map((product, index) => (
          <li key={index} className='list-item opacity-100'>
            <a
              href='#'
              className='flex flex-col justify-between border-t border-t-slate-100 py-10  text-slate-200 md:flex-row '
            >
              <div className='flex flex-col'>
                <span className='text-3xl font-bold'>{product.title}</span>
                <div className='flex gap-3 text-yellow-400'></div>
              </div>
              <span className='ml-auto flex items-center gap-2 text-xl font-medium md:ml-0'>
                Read more <MdArrowOutward />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
