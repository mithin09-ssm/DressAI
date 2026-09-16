import UploadBox from "../UploadBox/UploadBox";

export default function CreateLook() {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Create New Look
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        <UploadBox title="Your Photo" />

        <UploadBox title="Outfit Photo" />
      </div>

      <button
        className="
          mt-8
          rounded-xl
          bg-orange-500
          px-8
          py-4
          font-semibold
          text-black
          transition
          hover:bg-orange-400
        "
      >
        Generate Look
      </button>
    </div>
  );
}