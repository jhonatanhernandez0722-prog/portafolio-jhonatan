export function Contact() {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-narrow">
        <div className="glow-card relative overflow-hidden p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-60" aria-hidden />
          <div className="relative">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">Contacto</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
              ¿Tienes una idea? <span className="text-gradient">Hagámosla realidad.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Estoy abierto a colaborar en proyectos innovadores, freelance o oportunidades full-time.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href="mailto:jhonatanhernandez0722@gmail.com" className="btn-primary">
                Enviar email
              </a>
              <a
                href="https://github.com/jhonatanhernandez0722-prog"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Ver GitHub
              </a>
              <a href="/cv.pdf" download className="btn-outline">
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jhonatan Hernández. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="https://github.com/jhonatanhernandez0722-prog" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="mailto:jhonatanhernandez0722@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
