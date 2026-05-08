import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      
      <h1 className="text-4xl font-bold">
        Zivio - Video Streaming Platform
      </h1>

      <p className="max-w-2xl text-gray-600">
        Currently working on a modern video streaming platform where users can 
        upload and manage their video content with seamless streaming experience. 
        The platform handles video uploads, streaming optimization, content management, 
        and responsive user interfaces using Next.js and Tailwind CSS.
      </p>

      <Link
        href="/app/library"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
      >
        Open Demo UI Dashboard
      </Link>

    </div>
  );
}