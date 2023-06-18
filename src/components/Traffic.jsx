import React from 'react'
import RadicalBar from './RadicalBar'

const Traffic = () => {
   
    return (
      <div >
            
            <div className='font-semibold'>Traffic</div>
            <div>
                {/* <RadicalBar/> */}
            </div>
            <div className='flex items-center justify-between mb-7'>
                <div className='flex items-center gap-2'>
                    <button className='w-3 h-3 rounded-full bg-pink-600'></button>
                    <p className='text-pink-600 font-semibold'>Earning</p>
                </div>
                <div className='font-semibold text-lg'>$120.56</div>
            </div>
             <div className='flex items-center justify-between mb-7'>
                <div className='flex items-center gap-2'>
                    <button className='w-3 h-3 rounded-full bg-blue-600'></button>
                    <p className='text-blue-600 font-semibold'>Earning</p>
                </div>
                <div className='font-semibold text-lg'>$120.56</div>
            </div>
             <div className='flex items-center justify-between mb-7'>
                <div className='flex items-center gap-2'>
                    <button className='w-3 h-3 rounded-full bg-amber-600'></button>
                    <p className='text-amber-600 font-semibold'>Earning</p>
                </div>
                <div className='font-semibold text-lg'>$120.56</div>
            </div>
      </div>
  )
}

export default Traffic