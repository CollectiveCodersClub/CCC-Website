'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { GitHub, Launch } from '@mui/icons-material'
import Modal from './modal'

interface ProjectProps {
  name: string,
  short: string,
  long: string,
  stack: any[],
  links: any[],
  even: boolean,
}

const Project: React.FC<ProjectProps> = ({ name, short, long, stack, links, even }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${even && 'md:flex-row-reverse'}`}>
        <div className='h-52 w-96 bg-white rounded-md'></div>
        <div className={`w-full md:w-[36rem] flex flex-col gap-2 ${even && 'md:items-end'}`}>
          <h2 className='w-fit font-pressStart text-sm hover:text-green transition-all cursor-pointer' onClick={() => setOpenModal(true)}>{name}</h2>
          <p className={`font-light ${even && 'md:text-right'}`}>{short}</p>
          <ul className='flex items-center gap-6 font-pressStart text-[10px]'>
            {stack.map((tech) => (
              <li key={tech.stackNum}>{tech.stackName}</li>
            ))}
          </ul>
          <ul className='flex items-center gap-4'>
            {links.map((link) => (
              <li key={link.id}><Link href={link.href} title={`Link to ${link.name}`} target="_blank" rel="noopener noreferrer">{link.icon}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      {openModal && <Modal name={name} long={long} stack={stack} links={links} setOpenModal={setOpenModal} />}
    </>
  )
}

export default Project