import Sidebar from "@/components/Sidebar/Sidebar";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          About MirrorFit
        </h1>

        <div className="mt-8 max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <p className="text-lg leading-8 text-zinc-300">
            MirrorFit is a virtual try-on platform concept designed to help
            users visualize outfits before purchasing them.
          </p>

          <p className="mt-6 text-zinc-400 leading-8">
            The goal is to reduce uncertainty in online shopping by allowing
            users to upload their own photo and preview different clothing
            styles through AI-powered virtual fitting technology.
          </p>

          <p className="mt-6 text-zinc-400 leading-8">
            In the future, MirrorFit can evolve into a smart fitting solution
            for fashion stores, e-commerce platforms, and interactive try-on
            devices.
          </p>
        </div>
      </section>
    </main>
  );
}