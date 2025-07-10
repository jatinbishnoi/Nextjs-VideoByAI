"use client";

import React, { useState } from "react";

function VideoUploadForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!videoFile || !title) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("title", title);
    formData.append("description", description);

    try {
      // You can replace this with an actual API call
      console.log("Uploading:", {
        title,
        description,
        videoFile,
      });
      alert("Reel uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload reel.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          placeholder="Enter a catchy title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          Description
        </label>
        <textarea
          rows={4}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          placeholder="Say something about this reel..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          Upload Reel <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          required
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100 dark:file:bg-gray-700 dark:file:text-white"
        />
        {videoFile && (
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            Selected: {videoFile.name}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md font-medium transition duration-300"
      >
        Upload Reel
      </button>
    </form>
  );
}

export default VideoUploadForm;
