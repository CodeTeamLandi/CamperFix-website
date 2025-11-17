export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="text-center px-4">
        {/* Coming Soon Badge */}
        <div className="inline-block mb-8 px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-yellow-500/30 text-yellow-400">
          COMING SOON
        </div>

        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          CamperFix
        </h1>

        {/* Simple Description */}
        <p className="text-xl sm:text-2xl text-gray-300">
          Something new is coming
        </p>
      </div>
    </main>
  );
}
