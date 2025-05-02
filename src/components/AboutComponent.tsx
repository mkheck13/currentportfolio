"use client";

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import headshot from '../assets/HeadShot.jpg'

export default function AboutComponent() {
  return (
    <>
      <section className='pl-20'>
        <div id="AboutMe" className='grid grid-cols-1 sm:grid-cols-12'>
          <div className="col-span-7 place-self-center text-center sm:text-left">

            <h1 className='text-white mb-4 text-3xl sm:text-6xl lg:text-7xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500'>
                Hi, My name is Michael. I'm a{" "}
              </span>
              <br />

              <TypeAnimation
                sequence={[
                  "Coder",
                  2000,
                  "Web Developer",
                  2000,
                  "Mobile Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </h1>

            <p className='text-[#bdc9d1] mt-4 sm:text-lg text-base font-medium lg:text-xl mb-6'>
            Hi, I'm Michael — a passionate full-stack developer currently honing my skills at CodeStack Academy in Stockton, CA.
            Throughout my time at CodeStack, I’ve led multiple projects in both front-end and back-end roles, even stepping into the position of Project Manager. I’ve worked with a variety of languages and frameworks to build responsive, user-focused applications, and I’m always eager to tackle new challenges and grow as a developer.
            </p>
          </div>

          <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden'>
              <Image
                src={headshot}
                alt='Mike Heckerman'
                height={270}
                width={270}
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
