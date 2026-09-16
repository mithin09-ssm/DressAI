export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 p-6">
      <h1 className="mb-10 text-3xl font-bold text-orange-500">
        MirrorFit
      </h1>

      <nav className="space-y-3">
        <button className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500">
          ✨ Create
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500">
          🕘 History
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500">
          ♡ Saved
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left text-zinc-300 hover:bg-zinc-900 hover:text-orange-500">
          💳 Pricing
        </button>
      </nav>
    </aside>
  );
}