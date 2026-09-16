export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-6">
      <h1 className="mb-10 text-3xl font-bold text-orange-500">
        DressAI
      </h1>

      <nav className="space-y-4">
        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-100">
          Home
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-100">
          Create Look
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-100">
          History
        </button>

        <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-100">
          Pricing
        </button>
      </nav>
    </aside>
  );
}