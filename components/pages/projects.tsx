// DJ

import React from 'react'
import Container from '../container'
import Project from '../project'
import { GitHub, Launch } from '@mui/icons-material'

const cccProjects = [
  {
    id: 1,
    name: 'Collective Coders Club Website',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit massa enim nec dui. In egestas erat imperdiet sed euismod. Sem et tortor consequat id porta. Non quam lacus suspendisse faucibus interdum. Ut tellus elementum sagittis vitae et leo duis ut diam.',
    longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem. Sit amet mauris commodo quis imperdiet massa tincidunt. Eu non diam phasellus vestibulum lorem sed risus. Blandit libero volutpat sed cras ornare. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Velit scelerisque in dictum non. Facilisis sed odio morbi quis commodo odio aenean sed. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Commodo quis imperdiet massa tincidunt nunc pulvinar. Id velit ut tortor pretium viverra suspendisse potenti nullam. Fermentum posuere urna nec tincidunt praesent semper. Rutrum quisque non tellus orci ac. Vel pharetra vel turpis nunc eget lorem. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Faucibus nisl tincidunt eget nullam. Imperdiet dui accumsan sit amet nulla. At elementum eu facilisis sed odio morbi quis. Faucibus in ornare quam viverra orci sagittis. Cras adipiscing enim eu turpis. Et malesuada fames ac turpis egestas sed tempus urna et. Id diam vel quam elementum pulvinar etiam non quam. Pretium aenean pharetra magna ac placerat. Eu facilisis sed odio morbi quis commodo. Feugiat vivamus at augue eget arcu dictum varius duis at. Nisl purus in mollis nunc sed id. Quam pellentesque nec nam aliquam sem et tortor consequat id. Id porta nibh venenatis cras sed felis eget. At tellus at urna condimentum mattis pellentesque id nibh tortor. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ultrices eros in cursus turpis massa. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Libero id faucibus nisl tincidunt eget. Nunc consequat interdum varius sit. Suspendisse sed nisi lacus sed. Pellentesque nec nam aliquam sem et. Nunc sed augue lacus viverra vitae congue eu consequat ac.',
    techStack: [
      {
        stackNum: 1,
        stackName: 'Next.js'
      },
      {
        stackNum: 2,
        stackName: 'Tailwind CSS'
      },
      {
        stackNum: 3,
        stackName: 'Vercel'
      },
    ],
    links: [
      {
        id: 1,
        name: 'GitHub',
        icon: <GitHub fontSize='small' className='hover:fill-green transition-all' />,
        href: 'https://github.com/CollectiveCodersClub/ccc-website',
      },
    ]
  },
]

const Projects = () => {

  // check if even
  function isEven(num: number) {
    return num % 2 === 0
  }

  return (
    <section id='projects' className='h-fit w-screen py-8'>
      <Container>
        <div className='flex flex-col justify-center items-center gap-12'>
          <h1 className='font-pressStart text-2xl'>Projects</h1>
          {cccProjects.map((project) => (
            <Project key={project.id} name={project.name} short={project.shortDescription} long={project.longDescription} stack={project.techStack} links={project.links} even={isEven(project.id)} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects