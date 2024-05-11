import { Close, GitHub, Launch } from '@mui/icons-material'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ setOpenModal }) => {
  return (
    <div className='fixed h-screen w-screen z-20 inset-0 flex justify-center items-center'>
      <div className='absolute h-[80vh] w-[60vw] p-8 flex flex-col gap-4 bg-gradient-to-br from-black via-gray to-lightGray overflow-hidden'>
        <button className='w-full flex justify-end' onClick={() => setOpenModal(false)} title='Close'><Close /></button>
        <div className='space-y-4 overflow-scroll'>
          <h1 className='font-pressStart'>Project Name</h1>
          <div className='h-[24rem] w-full bg-white'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tempus quam pellentesque nec nam aliquam sem. Sit amet mauris commodo quis imperdiet massa tincidunt. Eu non diam phasellus vestibulum lorem sed risus. Blandit libero volutpat sed cras ornare. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Velit scelerisque in dictum non. Facilisis sed odio morbi quis commodo odio aenean sed. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Commodo quis imperdiet massa tincidunt nunc pulvinar. Id velit ut tortor pretium viverra suspendisse potenti nullam.

          Fermentum posuere urna nec tincidunt praesent semper. Rutrum quisque non tellus orci ac. Vel pharetra vel turpis nunc eget lorem. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Faucibus nisl tincidunt eget nullam. Imperdiet dui accumsan sit amet nulla. At elementum eu facilisis sed odio morbi quis. Faucibus in ornare quam viverra orci sagittis. Cras adipiscing enim eu turpis. Et malesuada fames ac turpis egestas sed tempus urna et. Id diam vel quam elementum pulvinar etiam non quam. Pretium aenean pharetra magna ac placerat. Eu facilisis sed odio morbi quis commodo. Feugiat vivamus at augue eget arcu dictum varius duis at.

          Nisl purus in mollis nunc sed id. Quam pellentesque nec nam aliquam sem et tortor consequat id. Id porta nibh venenatis cras sed felis eget. At tellus at urna condimentum mattis pellentesque id nibh tortor. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Ultrices eros in cursus turpis massa. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Libero id faucibus nisl tincidunt eget. Nunc consequat interdum varius sit. Suspendisse sed nisi lacus sed. Pellentesque nec nam aliquam sem et. Nunc sed augue lacus viverra vitae congue eu consequat ac.</p>
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
      <div className='h-full w-full bg-black/50' onClick={() => setOpenModal(false)}></div>
    </div>
  )
}

export default Modal