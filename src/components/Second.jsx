import React from 'react'

const Second = () => {
  return (
      <div className='mx-5   my-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-4 '>
              <div className='bg-pink-600 mb-4 sm:mb-0 text-white rounded-lg px-4 py-3'>
                  <h1 className='font-semibold mb-4'>Estimate Sales</h1>
                  <div className='flex items-center justify-between'>
                      <div>barchart</div>
                      <div>
                          <h1 className='text-xl text-center font-semibold'>$439</h1>
                          <p>Jan 5 - July 23</p>
                      </div>
                  </div>
              </div>
             <div className='bg-blue-600 mb-4 sm:mb-0 text-white rounded-lg px-4 py-3'>
                  <h1 className='font-semibold mb-4'>Bonus Rate</h1>
                  <div className='flex items-center justify-between'>
                       <div>
                          <h1 className='text-xl text-center font-semibold'>$439</h1>
                          <p>Jan 5 - July 23</p>
                      </div>
                      <div>barchart</div>
                     
                  </div>
              </div>
              <div className='bg-amber-500 mb-4 sm:mb-0 text-white rounded-lg px-4 py-3'>
                  <h1 className='font-semibold mb-4'>Revenue State</h1>
                  <div className='flex items-center justify-between'>
                      <div>barchart</div>
                      <div>
                          <h1 className='text-xl text-center font-semibold'>$439</h1>
                          <p>Jan 5 - July 23</p>
                      </div>
                  </div>
              </div>
              
          </div>

    </div>
  )
}

export default Second