import { createFileRoute } from "@tanstack/react-router";
import { SideNavbar } from "@/components/portfolio/SideNavbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Collaborators } from "@/components/portfolio/Collaborators";
import { Reviews } from "@/components/portfolio/Reviews";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Jhonatan Hernández — Desarrollador Web Fullstack" },
      {
        name: "description",
        content:
          "Portafolio de Jhonatan Hernández, desarrollador fullstack especializado en React, Next.js, Java, Python e IA. Proyectos, stack y formación.",
      },
      { property: "og:title", content: "Jhonatan Hernández — Fullstack Developer" },
      { property: "og:description", content: "Aplicaciones web modernas, eficientes y escalables." },
    ],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen">
      <SideNavbar />
      <main className="flex-1 pr-16 min-h-screen">
        <Hero />
        <About />
        <Stack />
        <Education />
        <Projects />
        <Collaborators />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}
