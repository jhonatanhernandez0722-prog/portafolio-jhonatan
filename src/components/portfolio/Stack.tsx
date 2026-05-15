import { useState } from "react";
import { Monitor, Server, Wrench, Settings2 } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type TechIconEntry = {
  icon: React.ElementType;
  color: string;
};

const techIcons: Record<string, TechIconEntry> = {
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#1572b6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  Java: { icon: FaJava, color: "#f89820" },
  Python: { icon: SiPython, color: "#3776ab" },
  "Git & GitHub": { icon: SiGit, color: "#f05032" },
  "APIs REST": { icon: SiGithub, color: "#c0c8d8" },
  "Inteligencia Artificial": { icon: SiOpenai, color: "#10a37f" },
  Automatización: { icon: Settings2, color: "#a0aec0" },
};

const groups = [
  {
    title: "Frontend",
    desc: "Interfaces modernas, accesibles y responsivas.",
    Icon: Monitor,
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    desc: "Lógica de servidor robusta y escalable.",
    Icon: Server,
    items: ["Java", "Python"],
  },
  {
    title: "Otros",
    desc: "Herramientas, integraciones y automatización.",
    Icon: Wrench,
    items: ["Git & GitHub", "APIs REST", "Inteligencia Artificial", "Automatización"],
  },
];

export function Stack() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="stack" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl text-center md:text-left">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">
            Stack
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Tecnologías y <span className="text-gradient">herramientas</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <article
              key={g.title}
              className="glow-card p-8 relative overflow-hidden group cursor-default"
            >
              {/* Shimmer overlay on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />
              {/* Silver ring glow */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-primary/0 group-hover:ring-primary/20 transition-all duration-500 pointer-events-none" />

              <div className="flex items-center gap-3 relative z-10">
                <span className="h-11 w-11 rounded-xl bg-primary/8 border border-primary/20 grid place-items-center text-primary group-hover:bg-primary/14 group-hover:border-primary/35 transition-all duration-300">
                  <g.Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold">{g.title}</h3>
              </div>

              <p className="mt-3 text-sm text-muted-foreground relative z-10">{g.desc}</p>

              <ul className="mt-6 flex flex-wrap gap-2 relative z-10">
                {g.items.map((item) => {
                  const isHovered = hovered === item;
                  const tech = techIcons[item];
                  const IconComp = tech?.icon;
                  return (
                    <li
                      key={item}
                      onMouseEnter={() => setHovered(item)}
                      onMouseLeave={() => setHovered(null)}
                      className={`relative flex items-center gap-2 px-3 pb-2 pt-2 rounded-lg text-sm border select-none transition-all duration-250 overflow-hidden cursor-default ${
                        isHovered
                          ? "border-primary/50 bg-primary/10 text-primary shadow-[0_0_16px_-4px_oklch(0.77_0.007_250/0.55)]"
                          : "bg-secondary text-foreground/80 border-border hover:border-primary/25"
                      }`}
                    >
                      {/* Rising silver bar at bottom */}
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300"
                        style={{ width: isHovered ? "100%" : "0%" }}
                      />
                      {/* Brand icon */}
                      {IconComp && (
                        <IconComp
                          className={`shrink-0 transition-transform duration-250 ${isHovered ? "scale-125" : "scale-100"}`}
                          style={{
                            fontSize: "1.1rem",
                            color: isHovered ? tech.color : "currentColor",
                            filter: isHovered ? `drop-shadow(0 0 6px ${tech.color}88)` : "none",
                          }}
                          aria-hidden
                        />
                      )}
                      <span className="font-medium">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
