"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [looks, setLooks] = useState([]);

  useEffect(() => {
    const savedLooks = JSON.parse(
      localStorage.getItem("mirrorfit-history") || "[]"
    );

    setLooks(savedLooks);
  }, []);

  const deleteLook = (id) => {
    const updatedLooks = looks.filter(
      (look) => look.id !== id
    );

    setLooks(updatedLooks);

    localStorage.setItem(
      "mirrorfit-history",
      JSON.stringify(updatedLooks)
    );
  };

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold text-orange-500">
        History
      </h1>

      {looks.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 p-10 text-center text-zinc-400">
          No generated looks yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {looks.map((look) => (
            <div
              key={look.id}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <img
                src={look.image}
                alt={look.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-4">
                <h2 className="font-semibold">
                  {look.title}
                </h2>

                <p className="mt-2 text-sm text-zinc-400">
                  {new Date(look.id).toLocaleString()}
                </p>

                <button
                  onClick={() => deleteLook(look.id)}
                  className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium hover:bg-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}