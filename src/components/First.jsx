import React from 'react'
import Summary from './Summary'
import Traffic from './Traffic'

const First = () => {
  return (
      <div className='mx-5   my-5 '>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-0 sm:gap-7  '>
              <div className='col-span-1 md:col-span-3 rounded-xl p-6 mb-4 sm:mb-0  bg-white'>
                  <Summary/>
              </div>
              <div className='col-span-1 md:col-span-1 rounded-xl p-6 bg-white'>
                  <Traffic/>
              </div>
          </div>
    </div>
  )
}

export default First