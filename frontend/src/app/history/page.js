import Sidebar from "@/components/Sidebar/Sidebar";

export default function HistoryPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          Recent Fits
        </h1>

        <p className="mt-3 text-zinc-400">
          Your generated looks will appear here.
        </p>
      </section>
    </main>
  );
}