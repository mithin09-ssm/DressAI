import Sidebar from "@/components/Sidebar/Sidebar";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="text-5xl font-bold text-orange-500">
          About MirrorFit
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-zinc-300">
          MirrorFit is a virtual try-on platform that helps users visualize
          outfits before purchasing them online.
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Problem
          </h2>

          <p className="mt-3 text-zinc-400">
            Online shoppers often cannot determine how an outfit will look
            on them before buying. This creates uncertainty and increases
            return rates.
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Solution
          </h2>

          <p className="mt-3 text-zinc-400">
            MirrorFit allows users to upload their own photo and an outfit
            image to preview a virtual try-on experience before making a
            purchase decision.
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Features
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-zinc-800 p-4">
              📷 Upload Personal Photo
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              👗 Upload Outfit Photo
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              ✨ AI Try-On Preview
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              🕘 History Tracking
            </div>

            <div className="rounded-xl bg-zinc-800 p-4">
              📂 Gallery Collection
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-white">
            Tech Stack
          </h2>

          <ul className="mt-4 space-y-2 text-zinc-400">
            <li>• Next.js</li>
            <li>• React</li>
            <li>• Tailwind CSS</li>
            <li>• Local Storage</li>
          </ul>
        </div>

        <div className="mt-6 rounded-3xl border border-orange-500 bg-zinc-900 p-8">
          <h2 className="text-2xl font-bold text-orange-500">
            Future Vision
          </h2>

          <p className="mt-3 text-zinc-300">
            MirrorFit is designed with a long-term vision of becoming a
            Smart Try-On Mirror or Try-On Device where users can visualize
            outfits in real time before purchasing.
          </p>
        </div>
      </section>
    </main>
  );
}