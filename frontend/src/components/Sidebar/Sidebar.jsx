"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-6">
      <h1 className="mb-10 flex items-center gap-2 text-3xl font-bold text-orange-500">
  🪞 MirrorFit
</h1>

      <nav className="space-y-3">

        <button
          onClick={() => router.push("/create")}
          className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500"
        >
          ✨ Create
        </button>

        <button
          onClick={() => router.push("/history")}
          className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500"
        >
          🕘 History
        </button>

        <button
          onClick={() => router.push("/gallery")}
          className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500"
        >
          📂 Gallery
        </button>

        <button
          onClick={() => router.push("/about")}
          className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500"
        >
          ℹ️ About
        </button>

      </nav>
    </aside>
  );
}