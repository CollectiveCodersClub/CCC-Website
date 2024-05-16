// Neal

import React from 'react';
import Image from 'next/image';
import heroImage from './../../public/hero-background.png'



const Hero = () => {
  return (
    <section>
      <div className='h-100 w-200 block font-pressStart'>
        <Image
      className='z-0'
        src={heroImage} 
        alt='Hero Image' 
        width={2000}
      />
        <div className='z-10 flex justify-center items-center flex-col  absolute mx-96 top-16 bg-black  h-96 opacity-70 py-20 px-11 space-y-8'>
          <h2 className='opacity-100 text-4xl'>We are Collective Coders Club</h2>
          <p className='opacity-100'>An IT based community of students, for students, by students to collaborate on open source projects for the betterment of our
            futures.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero