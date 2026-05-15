import portada from "@/assets/Images/Portada.jpeg";
import banner from "@/assets/Images/banner.png";
import { useState, useRef, useEffect } from "react";

/** Each letter: dim gray base → bright silver chrome on hover, very noticeable */
function LetterHover({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block cursor-default"
          style={{
            color: "#6b7280",
            transition: "color 0.18s ease, text-shadow 0.18s ease, transform 0.18s ease",
            transitionDelay: `${i * 12}ms`,
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.color = "#e2e8f0";
            el.style.textShadow =
              "0 0 12px #c8d0de, 0 0 30px rgba(200,208,222,0.7), 0 0 60px rgba(180,192,210,0.4)";
            el.style.transform = "scale(1.12) translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.color = "#6b7280";
            el.style.textShadow = "";
            el.style.transform = "";
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ══════════ BANNER — primera vista, contenedor completo ══════════ */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "0 0 2rem 2rem",
          background:
            "linear-gradient(135deg, #090909 0%, #111111 28%, #1a1a1a 52%, #0e0e0e 65%, #111111 82%, #090909 100%)",
          border: "1px solid rgba(192,200,216,0.18)",
          boxShadow:
            "0 0 80px -16px rgba(192,200,216,0.18), 0 30px 100px -30px rgba(0,0,0,0.85), inset 0 1px 0 rgba(226,232,240,0.10)",
          marginBottom: "0",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 50% 55%, rgba(192,200,216,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(192,200,216,0.12) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            opacity: 0.6,
          }}
        />
        {/* ── Banner image ── */}
        <img
          src={banner}
          alt="Banner portfolio"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            position: "relative",
            zIndex: 10,
          }}
        />
        {/* Silver tint over image */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,9,9,0.20) 0%, rgba(17,17,17,0.08) 40%, rgba(192,200,216,0.03) 70%, rgba(9,9,9,0.45) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 z-30 pointer-events-none"
          style={{
            height: "120px",
            background: "linear-gradient(to bottom, transparent, oklch(0.07 0 0))",
          }}
        />
      </div>

      {/* ══════════ HERO CONTENT ══════════ */}
      <div className="relative section-padding pt-12 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-orb left-0 top-24" />
          <div className="hero-orb right-10 top-16" />
          <div className="hero-grid-dots" />
        </div>

        <div className="container-narrow relative">
          <div className="flex flex-col xl:grid xl:gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center gap-12 items-center">
            {/* ── Left column ── */}
            <div className="space-y-8 text-center md:text-left w-full xl:w-auto">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary shadow-[0_0_40px_-18px_oklch(0.77_0.007_250/0.4)] md:justify-start justify-center w-full md:w-auto">
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                Disponible para nuevos proyectos con tecnología moderna
              </div>

              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                  Web, backend y AI
                </p>

                {/* Name with letter-hover gray → bright silver chrome */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-tight whitespace-nowrap">
                  <LetterHover text="Jhonatan Hernández" />
                </h2>

                <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                  Desarrollo digital <span className="text-gradient">impactante</span> para
                  experiencias memorables.
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                  Transformo ideas en productos atractivos, rápidos y funcionales. Diseño interfaces
                  limpias con detalle y construyo arquitecturas que escalan.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#proyectos" className="btn-primary">
                  Ver proyectos →
                </a>
                <a href="#contacto" className="btn-outline">
                  Contactarme
                </a>
                <a href="https://resenas-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Reseñas
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-lg justify-items-center md:justify-items-start">
                {[
                  { k: "+10", v: "Proyectos" },
                  { k: "5", v: "Stacks dominadas" },
                  { k: "100%", v: "Compromiso" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-3xl border border-border/50 bg-card/40 p-5 shadow-[0_20px_60px_-40px_oklch(0.77_0.007_250/0.35)] backdrop-blur-sm hover:border-primary/25 transition-colors duration-300"
                  >
                    <div className="text-3xl font-bold text-primary font-display">{s.k}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column — Interactive portada ── */}
            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div
                className="absolute -inset-10 rounded-full bg-primary/8 blur-3xl animate-float"
                aria-hidden
              />

              {/* 3-D tilt card */}
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative glow-card border border-border/50 overflow-hidden cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                  transition:
                    tilt.x === 0 && tilt.y === 0 ? "transform 0.6s ease" : "transform 0.08s linear",
                }}
              >
                <img
                  src={portada}
                  alt="Foto de Jhonatan Hernández"
                  width={1080}
                  height={1440}
                  className="w-full aspect-[4/5] object-cover rounded-[2rem]"
                />
                {/* Shimmer highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/4 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(7,7,7,0.95))] px-6 py-6">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em]">Estado</p>
                      <p className="mt-2 text-sm text-foreground">Abierto para nuevos retos</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em]">Stack</p>
                      <p className="mt-2 text-sm text-foreground">React · Node · AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
