"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import spotmeimage from "../assets/spotmeimage.png"
import ScreenshotPoke from "../assets/ScreenshotPoke.png"

const projects = [
  {
    title: "SpotMe | Full-Stack Fitness Matchmaking Platform",
    description: "SpotMe is a fitness-focused web application that connects users with compatible workout partners, spotters, and trainers. It features real-time messaging powered by SignalR, dynamic matchmaking, and a clean, mobile-responsive interface. Built with a modern tech stack, SpotMe helps users overcome scheduling and accessibility challenges by streamlining fitness networking in their local area.",
    techStack: "React • TypeScript • Tailwind CSS • ASP.NET Core Web API • SignalR",
    image: spotmeimage,
    link: "https://new-front-end-xi.vercel.app/",
  },
  {
    title: "Pokémon Rebuild",
    description: "A Pokémon-themed web application that allows users to view and search for Pokémon, with a focus on responsive design and user experience.",
    techStack: "React • TypeScript • Tailwind CSS • ASP.NET Core Web API",
    image: ScreenshotPoke,
    link: "https://rebuildpokemon-o8nj.vercel.app/",
  },
];

export default function ProjectComponent() {
  return (
    <>
      <h1 id="projects" className="text-center pt-12 fontlife font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 mb-10">
        Projects
      </h1>
      <br />

      <div className="flex flex-wrap justify-center gap-20 px-5">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <figure className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body pt-4 px-6 pb-6">
              <h2 className="card-title text-xl font-semibold text-teal-600">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <p className="text-sm text-gray-500">{project.techStack}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-white mt-2 sm:mt-0"
                >
                  Go To Site
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </>
  );
}
