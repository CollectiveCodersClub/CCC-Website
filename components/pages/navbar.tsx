// DJ

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/ccc-logo-green.png'

const navLinks = [
  {id: 1, name: 'Home', link: '/', title: 'Home', active: 'false'},
  {id: 2, name: 'About', link: '/#about', title: 'About', active: 'false'},
  {id: 3, name: 'Projects', link: '/#projects', title: 'Projects', active: 'false'},
  {id: 4, name: 'Connect', link: '/#connect', title: 'Connect', active: 'false'},
]

const Navbar = () => {
  return (
    <nav className='fixed h-20 w-full z-10 px-16 flex justify-between items-center bg-black/20 shadow-md backdrop-blur-sm'>
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
      <ul className='flex items-center gap-4'>
        {navLinks.map(link => (
          <li key={link.id} title={link.title}><Link className='hover:text-green transition-all' href={link.link}>{link.name}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar