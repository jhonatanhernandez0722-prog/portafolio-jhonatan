import { useEffect, useState } from "react";

type Comment = {
  id: string;
  author: string;
  message: string;
  createdAt: string;
};

const STORAGE_KEY = "portfolio_comments";

function loadComments(): Comment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Comment[]) : [];
  } catch {
    return [];
  }
}

function saveComments(comments: Comment[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  } catch {
    // noop
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setComments(loadComments());
  }, []);

  const addComment = () => {
    if (!author.trim() || !message.trim()) {
      setStatus("Por favor completa nombre y comentario.");
      return;
    }

    const next: Comment[] = [
      {
        id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
        author: author.trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
      },
      ...comments,
    ];

    setComments(next);
    saveComments(next);
    setAuthor("");
    setMessage("");
    setStatus("Comentario agregado correctamente.");
    window.setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section id="comentarios" className="section-padding">
      <div className="container-narrow">
        <div className="glow-card border border-border/50 bg-card/80 p-8 shadow-[0_0_40px_-18px_oklch(0.77_0.007_250/0.35)]">
          <div className="mb-8 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Comentarios</p>
            <h2 className="mt-3 text-3xl font-bold">Comparte tu opinión sobre mi trabajo</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Deja un comentario y ayuda a mejorar este portafolio con tu experiencia.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Nombre</span>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-foreground">Comentario</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu comentario aquí..."
                  rows={5}
                  className="mt-2 w-full rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none resize-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <button type="button" onClick={addComment} className="btn-primary">
                Publicar comentario
              </button>

              {status ? <p className="text-sm text-primary">{status}</p> : null}
            </div>

            <div className="space-y-4">
              {comments.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-border/50 bg-background/80 p-6 text-sm text-muted-foreground">
                  Aún no hay comentarios. Sé el primero en compartir algo.
                </div>
              ) : (
                comments.map((comment) => (
                  <article
                    key={comment.id}
                    className="rounded-3xl border border-border/50 bg-background/80 p-6 shadow-[0_20px_60px_-40px_oklch(0.77_0.007_250/0.35)]"
                  >
                    <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                      <strong className="text-foreground">{comment.author}</strong>
                      <time dateTime={comment.createdAt}>{formatDate(comment.createdAt)}</time>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-foreground">{comment.message}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
