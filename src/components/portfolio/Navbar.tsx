import { Code } from "lucide-react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#formacion", label: "Formación" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#colaboraciones", label: "Colaboraciones" },
  { href: "#reseñas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-2xl bg-background/70 border-b border-border shadow-[0_25px_60px_-40px_rgba(99,102,241,0.45)]">
      <nav className="container-narrow flex items-center justify-between gap-4 py-4 px-6">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/5 px-3 py-2 transition hover:border-primary/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Brand</p>
              <p className="text-sm font-semibold text-foreground">JH Dev</p>
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/cv.pdf" download className="btn-primary !py-2.5 !px-5 text-sm">
          Descargar CV
        </a>
      </nav>
    </header>
  );
}
