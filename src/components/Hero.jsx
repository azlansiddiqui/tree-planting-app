import React from 'react'
import HeroCard from './ui/HeroCard'

const Hero = () => {
  return (
    <section className='flex justify-between items-center mt-15'>
        <div>
            <div className='w-65'>
                <p>COMMUNITY TREE MAP</p>
                <h1>Plant a tree.
                    <br />
                    <span>Make an impact.</span>
                </h1>
                <p>Choose a location, register your tree, and help build a greener community.</p>
            </div>
        </div>
        <div className='flex gap-3'>
             <HeroCard/>
             <HeroCard/>
             <HeroCard/>
             <HeroCard/>
            <img src="/heroImage.avif" alt="" className='h-30'  />
        </div>
    </section>
  )
}

export default Hero