import Link from "next/link";

export default function Studio() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-white/10 bg-slate-900 p-5 md:flex">
          <div className="mb-10">
            <h1 className="text-2xl font-bold">DressAI</h1>
            <p className="mt-1 text-xs uppercase tracking-widest text-orange-400">
              AI Fashion Studio
            </p>
          </div>

          <nav className="space-y-2">
            <Link
              href="/studio"
              className="block rounded-xl bg-orange-500 px-4 py-3 text-sm font-medium"
            >
              Home
            </Link>

            <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
              Try On
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
              History
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
              Pricing
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
              Settings
            </button>
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium">Welcome back</p>
            <p className="mt-1 text-xs text-slate-400">
              Sign in to save your looks.
            </p>

            <button className="mt-4 w-full rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-900">
              Login
            </button>
          </div>
        </aside>

        <section className="flex-1">
          <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-10">
            <div>
              <p className="text-sm text-slate-400">Workspace</p>
              <h2 className="text-xl font-semibold">Your Fashion Studio</h2>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Free Plan
            </div>
          </header>

          <div className="px-6 py-8 md:px-10">
            <div className="mb-10">
              <h3 className="text-3xl font-bold">Create a new look</h3>
              <p className="mt-2 max-w-xl text-slate-400">
                Start with your photo and create an AI-powered virtual outfit.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="group rounded-3xl border border-dashed border-orange-400/50 bg-gradient-to-br from-orange-500/15 to-amber-500/5 p-8 transition hover:border-orange-400 hover:bg-orange-500/20 lg:col-span-2">
                <div className="flex min-h-64 flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl shadow-lg shadow-orange-500/20">
                    +
                  </div>

                  <h4 className="text-xl font-semibold">Create New Look</h4>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                    Upload your photo and choose an outfit to begin your
                    virtual try-on experience.
                  </p>

                  <button className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold transition hover:bg-orange-400">
                    Start Creating
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-400">Quick Start</p>

                <h4 className="mt-2 text-xl font-semibold">
                  How it works
                </h4>

                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-sm text-orange-400">
                      1
                    </span>

                    <div>
                      <p className="text-sm font-medium">Upload Photo</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Add a photo of yourself.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-sm text-orange-400">
                      2
                    </span>

                    <div>
                      <p className="text-sm font-medium">Choose Outfit</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Select the style you want to try.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-sm text-orange-400">
                      3
                    </span>

                    <div>
                      <p className="text-sm font-medium">Generate Look</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Let AI create your result.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-12">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-slate-400">Your creations</p>
                  <h3 className="mt-1 text-2xl font-bold">
                    Recent Try-Ons
                  </h3>
                </div>

                <button className="text-sm text-orange-400 hover:text-orange-300">
                  View all
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex min-h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <p className="text-sm text-slate-500">No looks yet</p>
                </div>

                <div className="flex min-h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <p className="text-sm text-slate-500">Your history will appear here</p>
                </div>

                <div className="flex min-h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <p className="text-sm text-slate-500">Create your first look</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}