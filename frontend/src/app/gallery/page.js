import Sidebar from "@/components/Sidebar/Sidebar";

export default function GalleryPage() {
  const categories = [
    { id: 1, name: "Casual", emoji: "👕" },
    { id: 2, name: "Formal", emoji: "👔" },
    { id: 3, name: "Traditional", emoji: "🥻" },
    { id: 4, name: "Winter", emoji: "🧥" },
    { id: 5, name: "Party", emoji: "✨" },
    { id: 6, name: "Streetwear", emoji: "🧢" },
  ];

  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          Fashion Gallery
        </h1>

        <p className="mt-3 text-zinc-400">
          Explore different outfit styles and inspirations.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:border-orange-500 hover:-translate-y-1"
            >
              <div className="text-6xl">
                {item.emoji}
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}