import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="CamperFix Logo"
                width={140}
                height={32}
                className="h-8 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-yellow-500 transition-colors font-medium relative group hidden sm:block"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/privacy"
              className="text-gray-700 hover:text-yellow-500 transition-colors font-medium relative group hidden sm:block"
            >
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/terms"
              className="text-gray-700 hover:text-yellow-500 transition-colors font-medium relative group hidden sm:block"
            >
              Terms
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/support"
              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg"
            >
              Support
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
