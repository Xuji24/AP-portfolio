import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-7xl lg:text-9xl font-black mb-4 bg-linear-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-teal-600 dark:bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
