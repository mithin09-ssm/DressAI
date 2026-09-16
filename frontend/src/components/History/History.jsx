export default function History() {
  const looks = [1, 2, 3, 4];

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">
        Recent Looks
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {looks.map((item) => (
          <div
            key={item}
            className="aspect-square rounded-2xl bg-gray-200"
          />
        ))}
      </div>
    </div>
  );
}