"use client";

import VideoUploadForm from "../components/VideoUploadForm";

export default function VideoUploadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-black px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 shadow-xl rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Upload a New Reel
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Share your latest short video or reel with the community.
        </p>
        <VideoUploadForm />
      </div>
    </main>
  );
}
