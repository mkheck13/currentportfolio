"use client";

import Head from "next/head";
import AboutComponent from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";
import ProjectComponent from "@/components/ProjectComponent";
import SkillComponent from "@/components/SkillComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Heckerman | Portfolio</title>
        <meta name="description" content="Full-Stack Developer Portfolio for Michael Heckerman." />
      </Head>

      <main className="container mx-auto mt-24 px-6 sm:px-12 py-4 space-y-24">
        <AboutComponent />
        <SkillComponent />
        <ProjectComponent />
        <FooterComponent />
      </main>
    </>
  );
}

