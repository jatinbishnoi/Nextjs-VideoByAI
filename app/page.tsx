export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white font-sans">
      {/* Hero Section */}
      <header className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to <span className="text-purple-600 dark:text-purple-400">VideoAI</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Your all-in-one platform to generate, edit, and publish AI-powered videos with ease.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900 transition"
          >
            Login
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 py-16 bg-white dark:bg-gray-900 text-center">
        <div className="shadow-lg rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">AI Video Generator</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Generate professional videos using just text prompts.
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Enjoy lightning-fast rendering powered by cloud services.
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Export & Share</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Download or publish your videos directly to social media.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} VideoAI. All rights reserved.
      </footer>
    </div>
  );
}
