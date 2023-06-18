import React from 'react'
import '../style/Sidebar.css'
import {BsPersonCircle} from "react-icons/bs"

const Sidebar = ({toggle}) => {
  return (
      <div className={` ${!toggle?"notShow" :"show"}  sidebar      bg-white  z-[999]   lg:block   `}>
          <div className='h-16  flex py-3 items-center justify-center bg-pink-600 text-white'>
        logo
       
      </div>
      <div className='pl-7 py-7 font-medium text-gray-600'>
        <ul>
          <li className='flex  py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Dashboard
          </li>
           <li className='flex py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Customer
          </li>
           <li className='flex py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Sale
          </li>
           <li className='flex py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Payment
          </li>
           <li className='flex py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Supplier
          </li>
           <li className='flex py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Purchase
          </li>
           <li className='flex py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Return
          </li>
           <li className='flex py-3 items-center gap-3 hover:text-pink-600 transition-all duration-500 cursor-pointer hover:border-r-2 hover:border-pink-600'>
            <BsPersonCircle />
            Admin
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar