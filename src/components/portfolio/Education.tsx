const items = [
  { year: "En curso", title: "Tecnólogo en Desarrollo de Software", place: "SENA" },
  { year: "2024", title: "Técnico en Desarrollo de Software", place: "SENA" },
  { year: "2024", title: "Especialista en Frontend", place: "Coursera" },
  { year: "2024", title: "Desarrollo de APIs REST", place: "Udemy" },
  { year: "2024", title: "Inteligencia Artificial & Python", place: "Plataforma Online" },
  { year: "2024", title: "Control de Versiones", place: "GitHub" },
];

export function Education() {
  return (
    <section id="formacion" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">Formación</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Aprendizaje <span className="text-gradient">continuo</span>
          </h2>
        </div>

        <ol className="mt-14 relative border-l border-border ml-3 space-y-8">
          {items.map((it, i) => (
            <li key={i} className="pl-8 relative">
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)]" />
              <div className="glow-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{it.place}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 self-start md:self-auto">
                  {it.year}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
