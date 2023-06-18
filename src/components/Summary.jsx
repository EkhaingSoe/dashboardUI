import React from 'react'
import { AiOutlineCrown } from "react-icons/ai"
import { HiCurrencyDollar } from "react-icons/hi"
import {AiOutlineDollarCircle} from "react-icons/ai"
import Chart from './Chart'

const Summary = () => {
    return (
        <div className='summary text-center md:text-left'>
            <div className='grid grid-cols-1 sm:grid-cols-3 mb-4 '>
               
                    <div className='col-span-1 sm:col-span-1 mb-5 sm:mb-0'>
                        <h1 className='text-lg font-semibold'>Dashboard</h1>
                                <p className='text-gray-500 mb-4 font-medium'>Overview of Last Month</p>
                                <h1 className='text-2xl font-bold'>$3245,120</h1>
                                <p className='text-gray-500 mb-4 font-medium'>Current month earning</p>
                                <h1 className='text-2xl font-bold'>89</h1>
                                <p className='text-gray-500 mb-4 font-medium'>Current month sales</p>
                                <button className='bg-pink-600 px-5 rounded-xl py-2 font-medium text-white'>Last Month Summary</button>
                    </div>
                <div className='col-span-1 sm:col-span-2 '>
                    <div>
                        <ul className='flex justify-between '>
                            <li className='hover:underline cursor-pointer'>
                                Daily
                            </li>
                             <li className='hover:underline cursor-pointer'>
                                Weekly
                            </li>
                             <li className='hover:underline cursor-pointer'>
                                Monthly
                            </li>
                             <li className='hover:underline cursor-pointer'>
                                Yearly
                            </li>
                             <li className='flex items-center gap-2'>
                                <button className='w-3 h-3 rounded-full bg-pink-600'></button>
                                Cash

                            </li>
                            <li className='flex items-center gap-2'>
                                  <button className='w-3 h-3 rounded-full bg-orange-600'></button>
                                Credit
                            </li>
                        </ul>
                    <Chart/>
                    </div>
                    </div>
            </div>
               
                    
            <hr />
            <div className='grid grid-cols-1 sm:grid-cols-3 mt-4 '>
                <div className='flex items-center mb-4 sm:mb-0 gap-6 sm:gap-4'>
                    <button className='bg-pink-600 text-white p-2 rounded-full'>

                    <AiOutlineCrown className='text-3xl'/>
                    </button>
                    <div>
                        <p className='text-gray-500  font-medium '>Wallet Balance</p>
                        <h1 className='font-semibold'>$12335,250</h1>
                    </div>
                </div>
                 <div className='flex items-center gap-6 sm:gap-4  mb-4 sm:mb-0 '>
                    <button className='bg-blue-400 text-white p-2 rounded-full'>

                    <HiCurrencyDollar className='text-3xl'/>
                    </button>
                    <div>
                        <p className='text-gray-500  font-medium '>Incomes</p>
                        <h1 className='font-semibold'>$12335,250</h1>
                    </div>
                </div>
                 <div className='flex items-center gap-6 sm:gap-4 '>
                    <button className='bg-amber-500 text-white p-2 rounded-full'>

                    <AiOutlineDollarCircle className='text-3xl'/>
                    </button>
                    <div>
                        <p className='text-gray-500  font-medium '>Outcome</p>
                        <h1 className='font-semibold'>$12335,250</h1>
                    </div>
          </div>
         

    </div>
        </div>
      
  )
}

export default Summary