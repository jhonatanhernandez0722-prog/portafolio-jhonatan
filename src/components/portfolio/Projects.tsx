import p1 from "@/assets/Images/Proyecto1.jpeg";
import p2 from "@/assets/Images/Proyecto2.png";
import p3 from "@/assets/Images/Proyecto3.png";
import p4 from "@/assets/Images/Proyecto4.png";
import p5 from "@/assets/Images/Proyecto5.png";
import p6 from "@/assets/Images/Proyecto6.png";

const projects = [
  {
    img: p1,
    name: "Manjares del Campo",
    desc: "E-commerce de productos frescos y artesanales del campo. Catálogo completo, carrito de compras y rastreo de pedidos.",
    tags: ["Next.js", "E-commerce"],
    link: "https://github.com/jhonatanhernandez0722-prog",
  },
  {
    img: p2,
    name: "CineMotion",
    desc: "Plataforma de cine con cartelera en tiempo real, taquilla virtual y dulcería online. Hero dinámico e interfaz inmersiva.",
    tags: ["React", "UI/UX"],
    link: "https://github.com/jhonatanhernandez0722-prog",
  },
  {
    img: p3,
    name: "Art in Ears",
    desc: "Tienda online de audífonos premium con catálogo por categorías, comparador de modelos y experiencia de compra inmersiva.",
    tags: ["React", "Música"],
    link: "https://github.com/jhonatanhernandez0722-prog",
  },
  {
    img: p4,
    name: "Urbaland Inmobiliaria",
    desc: "Plataforma inmobiliaria con listado de propiedades, filtros avanzados, galería de fotos y formulario de contacto.",
    tags: ["Fullstack", "Inmobiliaria"],
    link: "https://github.com/jhonatanhernandez0722-prog",
  },
  {
    img: p5,
    name: "Comunidad Cristiana Gosen",
    desc: "Sitio web para iglesia con publicaciones, ministerios, testimonios y transmisiones en vivo integradas.",
    tags: ["Fullstack", "Comunidad"],
    link: "https://github.com/jhonatanhernandez0722-prog",
  },
  {
    img: p6,
    name: "Arcadeland",
    desc: "Plataforma arcade con múltiples minijuegos, sistema de niveles, XP y logros desbloqueables.",
    tags: ["Games", "React"],
    link: "https://github.com/jhonatanhernandez0722-prog",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="section-padding">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">Proyectos</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Trabajos <span className="text-gradient">destacados</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Una selección de proyectos donde combino diseño, código y producto.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="glow-card overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={`Captura de ${p.name}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Ver proyecto <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
