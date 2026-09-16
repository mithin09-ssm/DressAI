import CreateLook from "@/components/CreateLook/CreateLook";
import History from "@/components/History/History";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Studio() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      <section className="flex-1 p-8">
        <h1 className="mb-8 text-4xl font-bold">
          Welcome Back
        </h1>

        <CreateLook />

        <History />
      </section>
    </main>
  );
}