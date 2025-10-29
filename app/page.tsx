export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Expert RV Technical Support
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              Professional, brand-agnostic technical support for RV and camper owners. Get expert help when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </a>
              <a
                href="#download"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
              >
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CamperFix?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🚐</div>
              <h3 className="text-xl font-semibold mb-3">Immediate Response</h3>
              <p className="text-gray-600">
                Get help fast with our 30-minute SOS support availability. We're here when you need us most.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                AI-powered assistance backed by experienced RV technicians who understand your specific needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">Complete Solutions</h3>
              <p className="text-gray-600">
                From diagnosis to parts sourcing to local service referrals - we provide end-to-end support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About CamperFix</h2>
            <p className="text-lg text-gray-600 mb-4">
              CamperFix is a mobile application that connects RV and camper owners with expert technical support. Our platform combines artificial intelligence with experienced RV technicians to provide fast, accurate, and professional assistance.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're dealing with electrical issues, plumbing problems, or mechanical concerns, CamperFix is your trusted partner on the road.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-6">
              CamperFix will be available on iOS and Android. Sign up to be notified when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-gray-300 text-gray-600 px-8 py-3 rounded-lg font-semibold cursor-not-allowed">
                App Store (Coming Soon)
              </div>
              <div className="bg-gray-300 text-gray-600 px-8 py-3 rounded-lg font-semibold cursor-not-allowed">
                Google Play (Coming Soon)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">&copy; 2024 CamperFix. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="/support" className="hover:text-blue-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
