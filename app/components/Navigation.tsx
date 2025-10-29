import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">CamperFix</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-blue-600 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
