import React, { useState, useRef } from 'react';
import { MdArrowCircleRight, MdArrowOutward } from 'react-icons/md';
import { IoIosArrowDropright } from 'react-icons/io';

const ProductsList = ({ products }) => {
  console.log(products);

  return (
    <>
      <ul className='grid border-y border-y-slate-50/25'>
        {products.map((product, index) => (
          <li key={index} className='list-item opacity-100 z-20 '>
            <div className='flex flex-col justify-between  border-t border-t-slate-50/25 py-10  text-slate-200 md:flex-row '>
              <div className='flex flex-col'>
                <span className='text-2xl font-bold'>{product.title}</span>
                <div className='flex flex-col md:flex-row gap-2'>
                  <div className=' prose prose-lg prose-stone font-bold mt-5   '>
                    {product.description}
                  </div>
                  <div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='w-[470px] h-64 rounded-md'
                    />
                  </div>
                </div>
              </div>
              <span className='ml-auto flex items-center gap-2 text-xl  font-medium md:mr-10 cursor-pointer z-20'>
                <IoIosArrowDropright />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
