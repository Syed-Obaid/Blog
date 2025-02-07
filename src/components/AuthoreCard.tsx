import React from 'react'

function AuthoreCard() {
  return (
    <>
      <section className='bg-white shadow-lg p-6  mt-8'>
        <div className='flex items-center animation-fadeIn'>

<img src="../images/author.jpg" alt="Author image" className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-black'/>
<div>
    <h3 className='text-xl font-bold'>Syed Obaid-ullah sharif</h3>
    <p className='text-slate-500'>Frontend Developer | Web Developer</p>
</div>
        </div>
        <p className='mt-4 text-black leading-relaxed'> 
        I am Syed Obaid, an undergraduate BSCS student at Federal University. I am also enrolled in the GAIAC program. As a passionate frontend developer, I love creating intuitive and visually appealing web experiences.</p>
        <div className='mt-4 flex space-x-3'>
            {/* <a href="#" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-600 transition duration-300'>Twitter</a> */}
            <a href="https://www.linkedin.com/in/syedobaidullahsharif/" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-600 transition duration-300'>Linkedin</a>
            <a href="https://github.com/syed-obaid" className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-600 transition duration-300'>GitHub</a>
        </div>
      </section>
    </>
  )
}

export default AuthoreCard
