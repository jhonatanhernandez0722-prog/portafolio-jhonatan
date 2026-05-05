import { createFileRoute } from "@tanstack/react-router";
import { SideNavbar } from "@/components/portfolio/SideNavbar";
import { Comments } from "@/components/portfolio/Comments";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/resenas")({
  component: Resenas,
  head: () => ({
    meta: [
      { title: "Reseñas — Jhonatan Hernández" },
      {
        name: "description",
        content: "Reseñas y comentarios sobre el trabajo de Jhonatan Hernández.",
      },
    ],
  }),
});

function Resenas() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 pr-16 min-h-screen pt-24">
        <div className="container-narrow">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Reseñas</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comentarios y reseñas de colaboradores y clientes sobre mi trabajo.
              </p>
            </div>
            <p>Esta es la página de reseñas.</p>
          </div>
        </div>
      </main>
    </div>
  );
}