"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [looks, setLooks] = useState([]);

  useEffect(() => {
    const savedLooks = JSON.parse(
      localStorage.getItem("mirrorfit-history") || "[]"
    );

    setLooks(savedLooks);
  }, []);

  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          Recent Fits
        </h1>

        <p className="mt-3 text-zinc-400">
          Your generated looks.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {looks.length === 0 ? (
            <div className="text-zinc-500">
              No generated looks yet.
            </div>
          ) : (
            looks.map((look) => (
              <div
                key={look.id}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
              >
                <img
                  src={look.image}
                  alt={look.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <h2 className="font-semibold text-white">
                    {look.title}
                  </h2>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}