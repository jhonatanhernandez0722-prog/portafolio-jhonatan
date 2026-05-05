import { useState, useEffect } from "react";
import logo from "@/assets/Images/Logo.png";
import {
  Home,
  User,
  Code2,
  GraduationCap,
  FolderOpen,
  Users,
  MessageSquare,
  Mail,
  Download,
} from "lucide-react";

const links = [
  { href: "#top", label: "Inicio", Icon: Home },
  { href: "#sobre-mi", label: "Sobre mí", Icon: User },
  { href: "#stack", label: "Stack", Icon: Code2 },
  { href: "#formacion", label: "Formación", Icon: GraduationCap },
  { href: "#proyectos", label: "Proyectos", Icon: FolderOpen },
  { href: "#colaboraciones", label: "Colaboraciones", Icon: Users },
  { href: "#comentarios", label: "Comentarios", Icon: MessageSquare },
  { href: "#contacto", label: "Contacto", Icon: Mail },
];

export function SideNavbar() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { threshold: 0.25, rootMargin: "-60px 0px -35% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="fixed right-0 top-0 h-screen z-50 flex flex-col items-center py-6 w-16 border-l border-white/8 backdrop-blur-2xl"
      style={{
        backgroundColor: "oklch(0.10 0.006 250 / 0.97)",
        boxShadow: "-4px 0 40px -8px oklch(0.77 0.007 250 / 0.12)",
      }}
    >
      {/* Logo */}
      <a
        href="#top"
        className="mb-7 w-10 h-10 rounded-2xl overflow-hidden border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-[0_0_18px_-4px_oklch(0.77_0.007_250/0.40)] bg-black"
        aria-label="Ir al inicio"
      >
        <img src={logo} alt="Logo JH Dev" className="w-full h-full object-contain" />
      </a>

      {/* Navigation links */}
      <nav className="flex flex-col items-center gap-1 flex-1" aria-label="Navegación lateral">
        {links.map(({ href, label, Icon }) => {
          const id = href.slice(1);
          const isActive = active === id;
          return (
            <a
              key={href}
              href={href}
              aria-label={label}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-primary/18 text-primary border border-primary/40 shadow-[0_0_18px_-4px_oklch(0.77_0.007_250/0.50)]"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border hover:border-primary/20"
              }`}
            >
              {isActive && (
                <span
                  aria-hidden
                  className="absolute -right-px top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full bg-primary sidebar-dot-pulse"
                />
              )}
              <Icon className="h-4 w-4 shrink-0" />
              <span className="pointer-events-none absolute right-[calc(100%+0.625rem)] whitespace-nowrap rounded-xl border border-primary/20 bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-2xl opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Download CV */}
      <a
        href="/cv.pdf"
        download
        aria-label="Descargar CV"
        className="group relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-white/8 hover:border-primary/30"
      >
        <Download className="h-4 w-4 shrink-0" />
        <span className="pointer-events-none absolute right-[calc(100%+0.625rem)] whitespace-nowrap rounded-xl border border-primary/20 bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-2xl opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          Descargar CV
        </span>
      </a>
    </aside>
  );
}
