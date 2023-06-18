import React from 'react'
import {HiOutlineMenu} from "react-icons/hi"
import { CiSettings } from "react-icons/ci"
import { CiBellOn } from "react-icons/ci"
import {BsPersonCircle} from "react-icons/bs"

const Nav = ({toggle,setToggle}) => {
  return (
      <nav className='flex fixed top-0 right-0 left-0 bg-white items-center shadow-lg justify-between z-[999]  px-7 py-5'>
          
          <HiOutlineMenu className={`cursor-pointer ${!toggle? "menu":"move"}`} onClick={()=>setToggle(!toggle)}   />
          <div className='flex items-center gap-5'>
        <CiSettings />
        <div className='relative'>

          <CiBellOn  />
          <button className='h-2 w-2 rounded-full top-0 right-0 bg-red-600 absolute'></button>
        </div>
              <BsPersonCircle/>
          </div>
    </nav>
  )
}

export default Nav