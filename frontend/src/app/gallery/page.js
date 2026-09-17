import Sidebar from "@/components/Sidebar/Sidebar";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          Gallery
        </h1>

        <p className="mt-3 text-zinc-400">
          Saved looks and outfit inspirations.
        </p>
      </section>
    </main>
  );
}