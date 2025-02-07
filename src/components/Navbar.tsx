'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [isClick , setIsClick] = useState(false)
    const toggleNavbar = () =>{
        setIsClick(!isClick)
    }
  return (
    <>
      <nav className='py-1'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 border shadow-lg  rounded-full'>
            <div className='flex justify-between items-center h-16 '>
                <div className='w-32'>
                
                <img src="../images/logo1.png" alt="" className='w-16 transition duration-300 hover:scale-105'/>
      
        </div>   
      <div className=' hidden md:block'>
<div className='flex items-center  space-x-4 '>
  <Link href={"http://localhost:3000/"} className='text-xl transition-colors duration-300 transform hover:scale-105'>Home</Link>
  <Link href={"http://localhost:3000/"} className='text-xl transition-colors duration-300 transform hover:scale-105'>Blog</Link>
  <Link href={"http://localhost:3000/"} className='text-xl transition-colors duration-300 transform hover:scale-105'>About</Link>
  <Link href={"http://localhost:3000/"} className='text-xl transition-colors duration-300 transform hover:scale-105'>Contact</Link>
        {/* <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">About</a>
        <a href="">Contact</a> */}

</div>
               </div>

<div className='md:hidden flex items-center'>
    <button className='inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
    {
        isClick ? (  <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
            fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6112 12'/>
            </svg> ) : (  <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
                fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7'/>
                </svg> )
    }
    </button>
</div>


            </div>

        </div>
{isClick && (       <div className=' md:hidden'>
<div className='space-y-4 flex flex-col justify-center items-center'>

        <a className='block' href="">home</a>
        <a className='block' href="">contact</a>
        <a className='block' href="">about</a>
        <a className='block' href="">services</a>

</div>
               </div> )}


      </nav>
    </>
  )
}

export default Navbar
