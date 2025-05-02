"use client";

import { Tooltip } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Libraries",
    items: [
      { src: "/react-librarys.png", label: "React" },
      { src: "/unity.png", label: "Unity" },
    ],
  },
  {
    title: "Languages",
    items: [
      { src: "/js.png", label: "JavaScript" },
      { src: "/HTML.png", label: "HTML5" },
      { src: "/CSS.png", label: "CSS" },
      { src: "/typescript.png", label: "TypeScript" },
      { src: "/csharp.png", label: "C#" },
      { src: "/sql.png", label: "SQL" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { src: "/tailwind1.png", label: "TailwindCSS" },
      { src: "/bootstrap.png", label: "Bootstrap" },
      { src: "/nextjs.png", label: "Next.js" },
    ],
  },
  {
    title: "Productivity",
    items: [
      { src: "/vscode.png", label: "Visual Studio Code" },
      { src: "/github.png", label: "GitHub" },
      { src: "/slack.png", label: "Slack" },
      { src: "/azure.png", label: "Azure" },
      { src: "/jira.png", label: "Jira" },
      { src: "/trello.png", label: "Trello" },
      { src: "/figma.png", label: "Figma" },
      { src: "/notion.png", label: "Notion" },
    ],
  },
];

export default function SkillComponent() {
  return (
    <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-16 px-5 items-start">
      {skillsData.map((category, idx) => (
        <motion.div
          key={category.title}
          className="col-span-1 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-railway font-medium text-teal-500">{category.title}</p>
          <div className="flex flex-row flex-wrap justify-center gap-3 mt-5 items-center">
            {category.items.map((item) => (
              <Tooltip
                key={item.label}
                content={item.label}
                placement="bottom"
                style="light"
                className="px-4 mt-2 font-railway text-lg"
              >
                <Image
                  src={item.src}
                  width={50}
                  height={50}
                  alt={`Icon for ${item.label}`}
                  className="rounded-sm"
                />
              </Tooltip>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

