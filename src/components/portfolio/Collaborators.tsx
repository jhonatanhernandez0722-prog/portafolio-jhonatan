import c1 from "@/assets/Images/Colaborador-1.png";
import c2 from "@/assets/Images/Colaborador-2.jpeg";
import c3 from "@/assets/Images/Colaborador-3.jpeg";

const partners = [
  {
    img: c1,
    name: "Colaborador 1",
    role: "Frontend Developer",
    desc: "Compañero en proyectos web e interfaces modernas.",
  },
  {
    img: c2,
    name: "Colaborador 2",
    role: "Backend Developer",
    desc: "Apoyo en arquitectura backend y bases de datos.",
  },
  {
    img: c3,
    name: "Colaborador 3",
    role: "UI / UX Designer",
    desc: "Diseño visual y experiencia de usuario en productos.",
  },
];

export function Collaborators() {
  return (
    <section id="colaboraciones" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">
            Colaboraciones
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Con quiénes <span className="text-gradient">colaboro</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Equipo de personas con las que he trabajado, aprendido y construido proyectos reales.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <article key={p.name} className="glow-card p-8 text-center">
              <div className="relative mx-auto w-32 h-32">
                <div
                  className="absolute -inset-1 rounded-full bg-[var(--gradient-primary)] opacity-60 blur-md"
                  aria-hidden
                />
                <img
                  src={p.img}
                  alt={`Foto de ${p.name}`}
                  loading="lazy"
                  width={256}
                  height={256}
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-primary/40"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-primary uppercase tracking-wider font-semibold">
                {p.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
