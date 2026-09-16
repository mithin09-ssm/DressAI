import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-amber-400 text-white">
      <div className="relative flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-8 py-6 md:px-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">MirrorFit</h2>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-100">
              AI Virtual Try-On
            </p>
          </div>

          <div className="hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md md:block">
            Create your look
          </div>
        </header>

        <section className="relative flex flex-1 items-center justify-center px-6 py-12">
          <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full bg-white/15 blur-sm" />
          <div className="absolute bottom-[15%] right-[10%] h-32 w-32 rounded-full bg-amber-200/20 blur-sm" />
          <div className="absolute right-[20%] top-[12%] h-5 w-5 rounded-full bg-white/50" />

          <div className="relative z-10 max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              ✦ Your AI fashion studio
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
              Welcome to MirrorFit
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-50 sm:text-xl">
              Discover your style with me.
            </p>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-orange-100">
              Upload your photo, choose an outfit, and let AI create your
              virtual look.
            </p>

            <div className="mt-10">
              <Link
                href="/studio"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-orange-600 shadow-xl transition hover:scale-105 hover:bg-orange-50"
              >
                Start Creating
                <span className="text-lg">→</span>
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-5 text-xs uppercase tracking-[0.2em] text-orange-100">
              <span>Create</span>
              <span>•</span>
              <span>Try On</span>
              <span>•</span>
              <span>Discover</span>
            </div>
          </div>
        </section>

        <footer className="px-8 py-5 text-center text-xs text-orange-100">
          MirrorFit — Reimagine your wardrobe with AI
        </footer>
      </div>
    </main>
  );
}