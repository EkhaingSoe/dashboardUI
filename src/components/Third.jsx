import React from 'react'
import { BsLightning } from "react-icons/bs"
import '../style/Third.css'
import {BiSearch} from "react-icons/bi"

const Third = () => {
  return (
      <div  className='mx-5   my-5 '>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-5'>
              <div className='lg:col-span-1 mb-5 sm:mb-0'>
                   <div className=' rounded-xl px-6 py-2 bg-white'>
                  <h1 className='text-gray-600 mb-4 text-lg font-semibold'>Recent Activity</h1>
                  <div className='flex  justify-between'>
                      <p className='text-gray-500 text-sm font-medium mt-3'>45 Mins ago</p>
                      <div>
                          <button className='bg-pink-600 mb-1 text-white p-3 rounded-full'>
                          <BsLightning className='text-lg' />
                          </button>
                          <div className='line mx-auto'></div>
                      </div>
                      
                      <div>
                          <p className='text-gray-500 font-semibold'>Task Updated</p>
                          <p className='font-semibold text-sm'>Thura <span className='text-gray-400 font-normal  '>Updated A Task</span> </p>
                    </div>
                  </div>
                  <div className='flex  justify-between mt-2'>
                      <p className='text-gray-500 text-sm font-medium mt-3'>45 Mins ago</p>
                      <div>
                          <button className='bg-blue-600 mb-2 text-white p-3 rounded-full'>
                          <BsLightning className='text-lg' />
                          </button>
                          <div className='line mx-auto'></div>
                      </div>
                      
                      <div>
                          <p className='text-gray-500 font-semibold'>Task Updated</p>
                          <p className='font-semibold text-sm'>Thura <span className='text-gray-400 font-normal  '>Updated A Task</span> </p>
                    </div>
                  </div>
                  <div className='flex  justify-between mt-2'>
                      <p className='text-gray-500 text-sm font-medium mt-3'>45 Mins ago</p>
                      <div>
                          <button className='bg-amber-500 mb-2 text-white p-3 rounded-full'>
                          <BsLightning className='text-lg' />
                          </button>
                          {/* <div className='line mx-auto'></div> */}
                      </div>
                      
                      <div>
                          <p className='text-gray-500 font-semibold'>Task Updated</p>
                          <p className='font-semibold text-sm'>Thura <span className='text-gray-400 font-normal  '>Updated A Task</span> </p>
                    </div>
                  </div>
                    </div>
              </div>
             
              <div className='lg:col-span-2'>
                  <div className='rounded-xl px-6 py-2 bg-white'>
                      <div className='sm:flex  sm:items-center mb-5 sm:justify-between '>
                          <h1 className='text-gray-600 mb-3 sm:mb-0  text-lg font-semibold'>Order Status
                          </h1>
                          <div >
                              <input type="search" placeholder='Search' className='text-base font-medium bg-gray-100  px-4  py-1 rounded-full' name="" id="" />
                              <button className='bg-gray-100 ml-3 px-2 rounded-full  rounded-lg  py-2'>
                                  <BiSearch className='text-pink-700 text-lg'/>
                              </button>
                          </div>
                      </div>
                      {/* table */}
                      
                        <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left  ">
                                    <thead className="text-xs text-white uppercase bg-black  ">
                                        <tr>
                                        <th scope="col" className="px-6 py-3 rounded-l-lg">
                                            Invoice
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Customer
                                      </th>
                                      <th scope="col" className="px-6 py-3">
                                            From
                                      </th>
                                      <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 rounded-r-lg">
                                            Process
                                        </th>
                                        </tr>
                            </thead>
                            <tbody>
                                 <tr className="bg-white  text-gray-500 font-medium  ">
                                <th scope="row" className=" px-3 py-2  whitespace-nowrap ">
                                    1458CC
                                </th>
                                <td className="">
                                    Alex
                                
                                </td>
                                <td className="">
                                    Brazi
                                </td>
                                <td className="">
                                        $1234
                                </td>
                                       <td className="">
                    <button className='bg-pink-600 text-white w-32 px-7 py-1 rounded-full'
                    >Process</button>
                                </td>
                                  </tr>
                                     <tr className="bg-white text-gray-500 font-medium  ">
                                        <th scope="row" className="px-3 py-2  whitespace-nowrap ">
                                        1458CC
                                        </th>
                <td className="">
                    Alex
                </td>
                <td className="">
                    Brazi
                                      </td>
                                       <td className="">
                    $1234
                                      </td>
                                       <td className="">
                    <button className='bg-blue-500 text-white w-32 px-7 py-1 rounded-full'
                    >On Hold</button>
                </td>
                                  </tr>
                                     <tr className="bg-white text-gray-500 font-medium  ">
                <th scope="row" className="px-3 py-2  whitespace-nowrap ">
                   1458CC
                </th>
                <td className="">
                    Alex
                </td>
                <td className="">
                    Brazi
                                      </td>
                                       <td className="">
                    $1234
                                      </td>
                                       <td className="">
                    <button className='bg-pink-600 text-white w-32 px-6 py-1 rounded-full'
                    >Process</button>
                </td>
                                  </tr>
                                     <tr className="bg-white text-gray-500 font-medium  ">
                <th scope="row" className="px-3 py-2  whitespace-nowrap ">
                   1458CC
                </th>
                <td className="">
                    Alex
                </td>
                <td className="">
                    Brazi
                                      </td>
                                       <td className="">
                    $1234
                                      </td>
                                       <td className="">
                    <button className='bg-amber-500 text-white w-32 px-6 py-1 rounded-full'
                    >Process</button>
                </td>
                                  </tr>
                                     <tr className="bg-white text-gray-500 font-medium  ">
                <th scope="row" className="px-3 py-2  whitespace-nowrap ">
                   1458CC
                </th>
                <td className="">
                    Alex
                </td>
                <td className="">
                    Brazi
                                      </td>
                                       <td className="">
                    $1234
                                      </td>
                                       <td className="">
                    <button className='bg-lime-500 text-white w-32 px-6 py-1 rounded-full'
                    >Process</button>
                </td>
                                </tr>
           
                        </tbody>
   
                                </table>
                        </div>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Third