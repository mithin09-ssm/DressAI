"use client";

import { useState } from "react";

export default function CreateLook() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="rounded-3xl border-2 border-dashed border-orange-300 p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Create New Look
      </h2>

      <label
        htmlFor="photo-upload"
        className="flex h-80 cursor-pointer flex-col items-center justify-center rounded-2xl bg-orange-50 transition hover:bg-orange-100"
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <>
            <div className="text-7xl text-orange-500">+</div>

            <p className="mt-4 text-lg font-medium">
              Add Your Photo
            </p>

            <p className="text-sm text-gray-500">
              JPG, PNG supported
            </p>
          </>
        )}
      </label>

      <input
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
}