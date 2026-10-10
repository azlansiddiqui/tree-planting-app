import React from 'react'

const HeroCard = () => {
  return (
    <div className='border p-2 flex justify-center items-center h-30 w-30'>
        <div className='flex flex-col justify-center items-center'>
            <img src='/tree-marker.png' alt="" className='h-10 border rounded-full'/>
            <h2 className='font-bold text-xl'>12</h2>
            <p>total trees</p>
        </div>
    </div>
  )
}

export default HeroCard