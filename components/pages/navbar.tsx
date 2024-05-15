// DJ

'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/ccc-logo-green.png'
import { Close, Facebook, FacebookRounded, GitHub, Menu } from '@mui/icons-material'

const navLinks = [
  {id: 1, name: 'Home', link: '/', title: 'Home', active: 'false'},
  {id: 2, name: 'About', link: '/#about', title: 'About', active: 'false'},
  {id: 3, name: 'Projects', link: '/#projects', title: 'Projects', active: 'false'},
  {id: 4, name: 'Connect', link: '/#connect', title: 'Connect', active: 'false'},
]

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='fixed h-20 w-full z-10 px-4 lg:px-16 flex justify-between items-center gap-4 lg:gap-0 bg-black/20 shadow-md backdrop-blur-sm'>
      <Link className='flex items-center gap-4' href={'/'} title='Home'>
        <Image 
          className='h-16 w-16'
          src={logo}
          height={100}
          width={100}
          alt='collective coders club logo'
        />
        <h1 className='font-pressStart'>Collective Coders Club</h1>
      </Link>
      <ul className='hidden lg:flex items-center gap-4'>
        {navLinks.map(link => (
          <li key={link.id} title={link.title}><Link className='hover:text-green transition-all' href={link.link}>{link.name}</Link></li>
        ))}
      </ul>
      <button type='button' onClick={() => setOpenMenu(true)}><Menu className='lg:hidden' /></button>
      <menu className={`fixed h-screen w-[80vw] z-40 top-0 ${openMenu ? 'right-0' : '-right-[80vw]'} p-8 flex flex-col justify-between bg-black/70 backdrop-blur-sm border-l-4 border-green transition-all`}>
        <ul className='flex flex-col justify-center items-center gap-8'>
          <button type='button' onClick={() => setOpenMenu(false)}><Close /></button>
          {navLinks.map(link => (
            <li key={link.id} title={link.title}><Link className='font-pressStart text-xl' href={link.link} onClick={() => setOpenMenu(false)}>{link.name}</Link></li>
          ))}
        </ul>
        <ul className='flex justify-center items-center gap-4'>
          <li><Link href={'/'}><FacebookRounded /></Link></li>
          <li><Link href={'/'}><GitHub /></Link></li>
        </ul>
      </menu>
      <div className={`fixed h-screen w-screen z-20 top-0 ${openMenu ? 'right-0' : '-right-full'}`} onClick={() => setOpenMenu(false)}></div>
    </nav>
  )
}

export default Navbar