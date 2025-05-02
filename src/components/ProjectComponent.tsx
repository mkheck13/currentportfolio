"use client";

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import hackerman from "../assets/hackerman.jpg"; // Replace with real images

const projects = [
  {
    title: "Full Stack Application",
    description: "A full-stack web app built with React, Node.js, and MongoDB. It allows users to create and manage tasks.",
    techStack: "React, Node.js, MongoDB",
    image: hackerman,
    link: "https://caddytrackfrontend.vercel.app/",
  },
  {
    title: "E-commerce Platform",
    description: "An e-commerce platform built with Next.js and TailwindCSS, featuring product listings, shopping cart, and checkout.",
    techStack: "Next.js, TailwindCSS, Stripe",
    image: hackerman,
    link: "#",
  },
  {
    title: "Weather App",
    description: "A weather app that provides live weather data using OpenWeather API. Users can search for any city and get weather details.",
    techStack: "React, OpenWeather API",
    image: hackerman,
    link: "#",
  },
];

export default function ProjectComponent() {
  return (
    <>
      <h1 id="projects" className="text-center pt-12 fontlife font-bold text-4xl text-teal-500">
        Projects
      </h1>
      <br />

      <div className="xl:grid xl:grid-cols-3 md:grid-cols-1 gap-14 px-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card w-full md:w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <figure className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                layout="responsive"
                height={256}
                width={256}
              />
            </figure>
            <div className="card-body p-6">
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
