import Sidebar from "@/components/Sidebar/Sidebar";

export default function HistoryPage() {
  const looks = [
    {
      id: 1,
      title: "Casual Fit",
    },
    {
      id: 2,
      title: "Formal Look",
    },
    {
      id: 3,
      title: "Party Style",
    },
    {
      id: 4,
      title: "Traditional Wear",
    },
    {
      id: 5,
      title: "Street Fashion",
    },
    {
      id: 6,
      title: "Summer Outfit",
    },
  ];

  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          Recent Fits
        </h1>

        <p className="mt-3 text-zinc-400">
          Your previously generated looks will appear here.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {looks.map((look) => (
            <div
              key={look.id}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-orange-500"
            >
              <div className="flex h-52 items-center justify-center bg-zinc-800 text-6xl">
                👗
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-white">
                  {look.title}
                </h2>

                <p className="mt-2 text-sm text-zinc-400">
                  AI generated outfit preview.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}