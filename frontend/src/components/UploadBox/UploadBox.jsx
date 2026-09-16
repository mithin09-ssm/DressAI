"use client";

import { useState } from "react";

export default function UploadBox({ title }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-zinc-900 p-6">
      <h3 className="mb-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <label
        htmlFor={title}
        className="flex h-80 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-500/40 bg-zinc-950 transition hover:border-orange-500 hover:bg-zinc-900"
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <>
            <div className="text-7xl font-light text-orange-500">
              +
            </div>

            <p className="mt-4 text-lg text-white">
              Upload Image
            </p>

            <p className="text-sm text-zinc-400">
              JPG, PNG supported
            </p>
          </>
        )}
      </label>

      <input
        id={title}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}