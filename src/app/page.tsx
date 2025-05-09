"use client";

import AboutComponent from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";
import ProjectComponent from "@/components/ProjectComponent";
import SkillComponent from "@/components/SkillComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <main className="container mx-auto mt-36 px-6 sm:px-12 py-4 space-y-24">
        <AboutComponent />
        <SkillComponent />
        <ProjectComponent />
        <FooterComponent />
      </main>
    </>
  );
}


