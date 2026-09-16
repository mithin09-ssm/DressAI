"use client";

import Link from "next/link";
import { useState } from "react";

export default function TryOn() {
  const [personImage, setPersonImage] = useState(null);
  const [outfitImage, setOutfitImage] = useState(null);

  const handlePersonUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPersonImage(URL.createObjectURL(file));
    }
  };

  const handleOutfitUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setOutfitImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/studio"
            className="text-sm text-slate-400 hover:text-white"
          >
            ← Back to Studio
          </Link>

          <p className="text-sm text-slate-500">
            DressAI Try-On
          </p>
        </div>

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Create Your Look
          </h1>

          <p className="mt-3 text-slate-400">
            Upload your photo and outfit to generate an AI try-on result.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Your Photo
            </h2>

            <div className="flex h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700">
              <div className="text-6xl">📷</div>

              <p className="mt-4 text-lg font-medium">
                Upload Your Photo
              </p>

              <input
                id="person-upload"
                type="file"
                accept="image/*"
                onChange={handlePersonUpload}
                hidden
              />

              <label
                htmlFor="person-upload"
                className="mt-5 cursor-pointer rounded-xl bg-orange-500 px-6 py-3 font-medium hover:bg-orange-400"
              >
                Choose Photo
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Outfit Photo
            </h2>

            <div className="flex h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700">
              <div className="text-6xl">👗</div>

              <p className="mt-4 text-lg font-medium">
                Upload Outfit
              </p>

              <input
                id="outfit-upload"
                type="file"
                accept="image/*"
                onChange={handleOutfitUpload}
                hidden
              />

              <label
                htmlFor="outfit-upload"
                className="mt-5 cursor-pointer rounded-xl bg-orange-500 px-6 py-3 font-medium hover:bg-orange-400"
              >
                Choose Outfit
              </label>
            </div>
          </div>

        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold">
            Preview
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">

            <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-slate-900">
              {personImage ? (
                <img
                  src={personImage}
                  alt="Person"
                  className="h-full w-full object-cover"
                />
              ) : (
                "Person Photo"
              )}
            </div>

            <div className="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-slate-900">
              {outfitImage ? (
                <img
                  src={outfitImage}
                  alt="Outfit"
                  className="h-full w-full object-cover"
                />
              ) : (
                "Outfit Photo"
              )}
            </div>

            <div className="flex h-64 items-center justify-center rounded-2xl bg-slate-900">
              AI Result
            </div>

          </div>

         <button
  type="button"
  onClick={() => {
    if (!personImage || !outfitImage) {
      alert("Please upload both your photo and outfit first.");
      return;
    }

    alert("Ready for AI try-on!");
  }}
  className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-semibold hover:bg-orange-400"
>
  Generate Look
</button>
        </div>

      </div>
    </main>
  );
}