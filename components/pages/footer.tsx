// Angela

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, GitHub } from '@mui/icons-material';
import DiscordIcon from '../discordIcon';
import logo from '../../public/ccc-logo-green.png';

const footerLinks = [
  { id: 1, name: 'Home', link: '/', title: 'Home' },
  { id: 2, name: 'About', link: '/#about', title: 'About' },
  { id: 3, name: 'Rules & Regs', link: '/#rules', title: 'Rules & Regs' },
  { id: 4, name: 'Projects', link: '/#projects', title: 'Projects' },
  { id: 5, name: 'Connect', link: '/#connect', title: 'Connect' },
];

const socialMediaLinks = [
  { id: 1, name: 'Facebook', link: 'https://facebook.com', title: 'Facebook', icon: <Facebook fontSize='small' className='hover:fill-green transition-all' /> },
  { id: 2, name: 'Discord', link: 'https://discord.com', title: 'Discord', icon: <DiscordIcon fontSize='small' className='hover:fill-green transition-all' /> },
  { id: 3, name: 'GitHub', link: 'https://github.com', title: 'GitHub', icon: <GitHub fontSize='small' className='hover:fill-green transition-all' /> },
];

const Footer = () => (
  <footer className='bg-gray-900 text-white py-8'>
    <div className='container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start'>
      <div className='flex items-center md:items-start md:flex-row'>
        <Image src={logo} height={120} width={120} alt='collective coders club logo' />
      </div>
      <div className='flex flex-col items-center md:ml-6 md:items-start'>
        <h1 className='font-pressStart text-3xl mt-4 md:mt-0 md:ml-4'>Collective Coders Club</h1>
        <ul className='flex flex-wrap justify-center md:justify-start gap-4 mt-4'>
          {footerLinks.map(link => (
            <li key={link.id} title={link.title}>
              <Link className='hover:text-green-500 transition-colors' href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className='flex justify-center md:justify-start gap-4 mt-4'>
          {socialMediaLinks.map(link => (
            <li key={link.id} title={link.title}>
              <Link className='hover:text-green-500 transition-colors' href={link.link} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
