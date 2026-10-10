import React from 'react'
import { RiHome4Fill } from "react-icons/ri";
import { CiMap } from "react-icons/ci";
import { FaTree } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-2 fixed top-0 left-0 right-0 z-50 mx-auto  ">
        <div className='flex items-center justify-center'>
            <img src="/logo.png" alt="" className='h-12'/>
            <h1 className='text-green-700 font-bold text-2xl'>Green<span className='text-black'>Map</span></h1>
        </div>
        <div className='hidden lg:block '>
            <ul className='list-none flex justify-center items-center  gap-4'>
                <li className='flex items-center justify-center gap-1 hover:bg-green-100'><RiHome4Fill />
 <a href="#">Home</a></li>
                <li className='flex items-center justify-center gap-1'><CiMap/><a href="#">Map</a></li>
                <li className='flex items-center justify-center gap-1'><FaTree />
<a href="#">My Trees</a></li>
                <li className='flex items-center justify-center gap-1'>
                    <IoPersonOutline/>
                    <a href="#">About</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar