"use client";

import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

import headshot from '../assets/HeadShot2.png'

export default function AboutComponent() {
  return (
    <>
      <section className="px-4 md:px-20">
        <div id="AboutMe" className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6">
          <div className="col-span-12 sm:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-white mb-4 text-3xl sm:text-6xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                Hi, My name is Michael. I&#39;m a{" "}
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

            <p className="text-[#bdc9d1] mt-4 text-base sm:text-lg lg:text-xl font-medium mb-6 max-w-prose">
              Hi, I&#39;m Michael — a passionate full-stack developer currently honing my skills at CodeStack Academy in Stockton, CA. Throughout my time at CodeStack, I&#39;ve led multiple projects in both front-end and back-end roles, even stepping into the position of Project Manager. I&#39;ve worked with a variety of languages and frameworks to build responsive, user-focused applications, and I&#39;m always eager to tackle new challenges and grow as a developer.
            </p>
          </div>

          <div className="col-span-12 sm:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden">
              <Image
                src={headshot}
                alt="Mike Heckerman"
                height={270}
                width={270}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
