// Angela

'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../container';

const iconDetails = [
  { src: '/Connect.png', alt: 'Collaboration' },
  { src: '/Ideas.png', alt: 'Innovative Ideas' },
  { src: '/IT.png', alt: 'Information Technology' }
];

const Graphic = () => (
  <section className='py-8'>
    <Container>
      <div className='mb-16 flex justify-center items-center text-white'>
        {iconDetails.map((icon, index) => (
          <React.Fragment key={icon.alt}>
            <div className='text-center'>
              <Image src={icon.src} alt={icon.alt} width={100} height={100} />
            </div>
            {index < iconDetails.length - 1 && (
              <span className='text-6xl mx-4' style={{ fontFamily: 'Arial, sans-serif' }}>{'}'}</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className='text-center text-white mt-4 font-pressStart'>
        {"\"Bridging the gap between students and real world experience.\""}
      </p>
    </Container>
  </section>
);

export default Graphic;
