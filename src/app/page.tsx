"use client";

import AboutComponent from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";
import ProjectComponent from "@/components/ProjectComponent";
import SkillComponent from "@/components/SkillComponent";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-24 px-12 py-4">
        <AboutComponent />

        <SkillComponent />

        <ProjectComponent />

        <FooterComponent />
      </div>

    </>

  );
}
