import { useState, useEffect } from "react";
import { Heart, MessageSquare } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Review {
  id: string;
  name: string;
  message: string;
  rating: number;
  likes: number;
  created_at: string;
}

function getLikedReviews(): Set<string> {
  try {
    const raw = localStorage.getItem("liked_reviews");
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch { return new Set(); }
}

function saveLikedReviews(set: Set<string>) {
  try { localStorage.setItem("liked_reviews", JSON.stringify([...set])); } catch { /* noop */ }
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [likedSet, setLikedSet] = useState<Set<string>>(getLikedReviews);
  const [newReview, setNewReview] = useState({ author: "", text: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setReviews(data as Review[]);
        setLoading(false);
      });
  }, []);

  const handleLike = async (id: string) => {
    if (likedSet.has(id)) return;
    const review = reviews.find((r) => r.id === id);
    if (!review) return;
    const newLikes = review.likes + 1;
    await supabase.from("reviews").update({ likes: newLikes }).eq("id", id);
    setReviews((prev) => prev.map((r) => r.id === id ? { ...r, likes: newLikes } : r));
    const next = new Set(likedSet).add(id);
    setLikedSet(next);
    saveLikedReviews(next);
  };

  const handleAddReview = async () => {
    if (!newReview.author.trim() || !newReview.text.trim()) return;
    const { data, error } = await supabase
      .from("reviews")
      .insert({ name: newReview.author.trim(), message: newReview.text.trim(), rating: 5, likes: 0 })
      .select()
      .single();
    if (!error && data) {
      setReviews((prev) => [data as Review, ...prev]);
    }
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
        {loading ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">Cargando reseñas...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <MessageSquare className="h-10 w-10 mx-auto mb-4 opacity-30" />
            <p className="text-lg">Aún no hay reseñas. ¡Sé el primero!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article key={r.id} className="glow-card p-6 flex flex-col gap-4">
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.message}</p>
                </div>
                <button
                  onClick={() => handleLike(r.id)}
                  disabled={likedSet.has(r.id)}
                  className={`mt-auto self-start flex items-center gap-2 text-sm transition-colors px-3 py-1.5 rounded-lg border ${
                    likedSet.has(r.id)
                      ? "text-red-400 border-red-400/30 bg-red-400/5 cursor-default"
                      : "text-muted-foreground border-border hover:text-red-400 hover:border-red-400/30"
                  }`}
                >
                  <Heart className={`h-4 w-4 ${likedSet.has(r.id) ? "fill-red-400" : ""}`} />
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
