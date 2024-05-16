// Neal

import React from 'react';

const Hero = () => {
  return (
    <section className='bg-hero-image h-[calc(100vh-5rem)] w-screen flex justify-center items-center font-pressStart'>
      <div className='h-[35vh] md:h-[65vh] w-[90vw] md:w-[60vw] px-4 md:px-16 flex justify-center items-center flex-col gap-4 md:gap-8 rounded-md bg-black/70'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='md:text-2xl'>We are</p>
          <h2 className='md:text-4xl text-center'>Collective Coders Club</h2>
        </div>
        <p className=' font-openSans md:text-2xl text-center'>An IT based community of students, for students, by students to collaborate on open source projects for the betterment of our
          futures.</p>
      </div>
    </section>
  )
}

export default Hero