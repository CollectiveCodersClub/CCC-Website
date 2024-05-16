import { Close, GitHub, Launch } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import BusLines from '../public/Green-Bus-Lines.png'

interface ModalProps {
  name: string,
  long: string,
  stack: any[],
  links: any[],
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ name, long, stack, links, setOpenModal }) => {
  return (
    <div className='fixed h-screen w-screen z-20 inset-0 flex justify-center items-center'>
      <div className='absolute h-[80vh] w-[90vw] md:w-[60vw] p-8 flex flex-col gap-4 bg-darkGray/50 backdrop-blur-sm border border-green rounded-md overflow-hidden'>
        <button className='w-full flex justify-end' onClick={() => setOpenModal(false)} title='Close'><Close className='hover:fill-green' /></button>
        <div className='space-y-4 overflow-scroll'>
          <h1 className='font-pressStart'>{name}</h1>
          <div className='h-48 md:h-[24rem] w-full bg-white rounded-md'></div>
          <p>{long}</p>
          <ul className='flex items-center flex-wrap gap-6 font-pressStart text-[10px]'>
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
      <Image 
        className='h-full w-full bg-black' 
        src={BusLines}
        height={1000}
        width={1000}
        alt='Green Conductor Lines'
        onClick={() => setOpenModal(false)} 
      />
    </div>
  )
}

export default Modal