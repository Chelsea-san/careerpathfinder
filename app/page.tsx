import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Career Path Finder
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover your ideal career path with personalized guidance and resources.
        </p>
        <div className="relative w-[500px] h-[300px] mx-auto mb-6">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Career planning workspace"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <a
          href="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
        >
          Get Started
        </a>
      </div>
    </main>
  );
}
