"use client";

import Image from "next/image";
import React from "react";
import gitLogo from "../assets/github-mark-white.png";

const FooterComponent = () => {
  return (
    <>
      <div id="ContactMe" className="min-h-[200px] text-teal-500 bg-[#121212] px-4 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">

          <div className="text-lg space-y-2 roboto">
            <p className="text-2xl font-semibold">Michael Heckerman</p>
            <p>Stockton, CA</p>
            <p>
              <a className="underline" href="tel:2092270237">
                (209) 227-0237
              </a>
            </p>
            <p>mkheck13@gmail.com</p>
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              href="/MichaelHeckermanResume.pdf"
              download="MichaelHeckermanResume.pdf"
            >
              <button className="px-1 py-1 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-slate-800">
                  Download Resume
                </span>
              </button>
            </a>
          </div>

          <div className="space-y-2 roboto">
            <a
              href="https://github.com/mkheck13"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <Image
                src={gitLogo}
                className="w-10 h-auto"
                alt="GitHub logo"
              />
              <p className="text-lg">Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/mike-heckerman-08867a306/"
              target="_blank"
              className="flex items-center space-x-2"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                width={40}
                height={40}
                alt="LinkedIn logo"
              />
              <p className="text-lg">LinkedIn</p>
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default FooterComponent;


