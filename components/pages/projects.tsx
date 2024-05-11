// DJ

import React from 'react'
import Container from '../container'
import Project from '../project'

const Projects = () => {
  return (
    <section id='projects' className='h-[90vh] w-screen pt-px'>
      <Container>
        <div className='flex flex-col justify-center items-center gap-12'>
          <h1 className='font-pressStart text-2xl'>Projects</h1>
          <Project />
          <Project even />
        </div>
      </Container>
    </section>
  )
}

export default Projects