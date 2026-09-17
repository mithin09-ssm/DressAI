import Sidebar from "@/components/Sidebar/Sidebar";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          About MirrorFit
        </h1>

        <p className="mt-6 max-w-3xl text-zinc-400">
          MirrorFit is a virtual try-on platform concept that allows users
          to preview outfits on themselves before making a purchase decision.
        </p>

        <p className="mt-4 max-w-3xl text-zinc-400">
          The long-term vision is to integrate AI-powered outfit fitting,
          e-commerce support, and real-time virtual try-on experiences.
        </p>
      </section>
    </main>
  );
}