import React from 'react';
import { CiStar } from "react-icons/ci";
import { MdOutlineStarRate } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";



const Productcard = ({ img, name, price }) => {
  return (
    <>
      <div className='border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative cursor-pointer'>
        <img src={img} alt={name} />
        <div className='space-y-2 relative p-4'>
          <div className='text-yellow-400 flex gap-[2px] text-[20px]'>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <MdOutlineStarRate />
          </div>
          <h3 className='font-medium'>{name}</h3>
          <h3 className='text-2xl font-medium text-red-600'>{price}</h3>
          <div className='absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer'>
          <RiShoppingBag2Fill />
          </div>
        </div>
      </div>
    </>
  )
}

export default Productcard