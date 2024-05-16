// Neal

import React from 'react'

const Hero = () => {
  return (
    <section className='bg-hero-image h-[calc(100vh-5rem)]  w-screen flex justify-center items-center font-pressStart'>
      <div className='h-[35vh] lg:h-[65vh] w-[90vw] lg:w-[60vw] px-4 lg:px-16 flex justify-center items-center flex-col gap-4 lg:gap-8  rounded-md bg-black/70'>
        <p className=' lg:text-4xl'>We are</p>
        <h2 className=' lg:text-5xl text-center'>Collective Coders Club</h2>
        <p className='lg:w-[46rem] font-openSans lg:text-4xl  text-center'>An IT based community of students, for students, by students to collaborate on open source projects for the betterment of our
          futures.</p>
      </div>
    </section>
  )
}

export default Hero