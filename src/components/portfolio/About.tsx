export function About() {
  return (
    <section id="sobre-mi" className="section-padding">
      <div className="container-narrow grid lg:grid-cols-[1fr_1.5fr] gap-12">
        <div className="text-center lg:text-left">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">
            Sobre mí
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Pasión por crear <span className="text-gradient">soluciones reales</span>.
          </h2>
        </div>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed text-center lg:text-left">
          <p>
            Soy desarrollador web fullstack especializado en la creación de aplicaciones web
            modernas, combinando frontend y backend para construir soluciones completas, eficientes
            y bien estructuradas.
          </p>
          <p>
            Cuento con experiencia en{" "}
            <span className="text-foreground font-medium">
              HTML, CSS, JavaScript, React, Next.js, Java y Python
            </span>
            , además de integrar herramientas de inteligencia artificial para automatizar procesos y
            mejorar la experiencia del usuario.
          </p>
          <p>
            Me adapto rápidamente a nuevas tecnologías y estoy en constante aprendizaje, enfocado en
            desarrollar soluciones escalables, optimizadas y orientadas a resultados.
          </p>
        </div>
      </div>
    </section>
  );
}
