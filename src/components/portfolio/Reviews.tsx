import { useState } from "react";
import { Heart, MessageSquare } from "lucide-react";

interface Review {
  id: number;
  author: string;
  text: string;
  likes: number;
  likedByMe: boolean;
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ author: "", text: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleLike = (id: number) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id && !r.likedByMe
          ? { ...r, likes: r.likes + 1, likedByMe: true }
          : r
      )
    );
  };

  const handleAddReview = () => {
    if (!newReview.author.trim() || !newReview.text.trim()) return;
    const newId = Date.now();
    setReviews((prev) => [
      ...prev,
      { id: newId, ...newReview, likes: 0, likedByMe: false },
    ]);
    setNewReview({ author: "", text: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reseñas" className="section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl mb-14">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">Reseñas</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Testimonios y <span className="text-gradient">opiniones</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            ¿Trabajaste conmigo? Deja tu reseña aquí.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-lg mb-14 glow-card p-8">
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            Añadir reseña
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={newReview.author}
              onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
              className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Tu reseña..."
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              rows={4}
              className="w-full rounded-xl border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              onClick={handleAddReview}
              disabled={!newReview.author.trim() || !newReview.text.trim()}
              className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitted ? "¡Reseña publicada! ✓" : "Publicar reseña"}
            </button>
          </div>
        </div>

        {/* Reviews grid */}
        {reviews.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <MessageSquare className="h-10 w-10 mx-auto mb-4 opacity-30" />
            <p className="text-lg">Aún no hay reseñas. ¡Sé el primero!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article key={r.id} className="glow-card p-6 flex flex-col gap-4">
                <div>
                  <p className="font-semibold text-foreground">{r.author}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
                <button
                  onClick={() => handleLike(r.id)}
                  disabled={r.likedByMe}
                  className={`mt-auto self-start flex items-center gap-2 text-sm transition-colors px-3 py-1.5 rounded-lg border ${
                    r.likedByMe
                      ? "text-red-400 border-red-400/30 bg-red-400/5 cursor-default"
                      : "text-muted-foreground border-border hover:text-red-400 hover:border-red-400/30"
                  }`}
                >
                  <Heart className={`h-4 w-4 ${r.likedByMe ? "fill-red-400" : ""}`} />
                  <span>{r.likes}</span>
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
