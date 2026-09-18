"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

export default function GalleryPage() {
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
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          Gallery
        </h1>

        <p className="mt-3 text-zinc-400">
          Your generated MirrorFit looks.
        </p>

        {looks.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center text-zinc-400">
            No looks available yet.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {looks.map((look) => (
              <div
                key={look.id}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
              >
                <img
                  src={look.image}
                  alt={look.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-white">
                      {look.title}
                    </h2>

                    <span className="text-orange-500">
                      ❤️
                    </span>
                  </div>

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
      </section>
    </main>
  );
}