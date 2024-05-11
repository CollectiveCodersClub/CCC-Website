'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { GitHub, Launch } from '@mui/icons-material'
import Modal from './modal'

interface ProjectProps {
  even?: boolean
}

const Project: React.FC<ProjectProps> = ({ even }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className={`relative flex gap-8 ${even && 'flex-row-reverse'}`}>
        <div className='h-52 w-96 bg-white'></div>
        <div className={`w-[36rem] flex flex-col gap-2 ${even && 'items-end'}`}>
          <h2 className='w-fit font-pressStart text-sm hover:text-green transition-all cursor-pointer' onClick={() => setOpenModal(true)}>Project Name</h2>
          <p className={`font-light ${even && 'text-right'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc non blandit massa enim nec dui. In egestas erat imperdiet sed euismod. Sem et tortor consequat id porta. Non quam lacus suspendisse faucibus interdum. Ut tellus elementum sagittis vitae et leo duis ut diam.</p>
          <ul className='flex items-center gap-6 font-pressStart text-[10px]'>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Vercel</li>
          </ul>
          <ul className='flex items-center gap-4'>
            <li><Link href='/' title='Link to Github'><GitHub fontSize='small' className='hover:fill-green transition-all' /></Link></li>
            <li><Link href='/' title='Link to Collective Coders Club'><Launch fontSize='small' className='hover:fill-green transition-all' /></Link></li>
          </ul>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  )
}

export default Project