import { useTranslations } from 'next-intl';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Coming Soon Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg1djVoLTV6bTAtNWg1djVoLTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Motorhome Icon */}
          <div className="flex justify-center mb-12">
            <svg className="w-32 h-32 sm:w-40 sm:h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Motorhome body */}
              <rect x="40" y="100" width="120" height="50" rx="8" fill="url(#camperGradient)"/>

              {/* Motorhome cab/front */}
              <path d="M40 100 L40 85 Q40 75 50 75 L70 75 Q80 75 80 85 L80 100 Z" fill="url(#camperGradient)"/>

              {/* Windows */}
              <rect x="50" y="80" width="18" height="12" rx="2" fill="#FCD34D"/>
              <rect x="90" y="110" width="20" height="20" rx="3" fill="#FCD34D"/>
              <rect x="120" y="110" width="20" height="20" rx="3" fill="#FCD34D"/>

              {/* Door */}
              <rect x="145" y="115" width="12" height="30" rx="2" fill="#78350F" opacity="0.5"/>
              <circle cx="148" cy="130" r="1.5" fill="#FCD34D"/>

              {/* Wheels */}
              <circle cx="70" cy="155" r="12" fill="#374151"/>
              <circle cx="70" cy="155" r="8" fill="#6B7280"/>
              <circle cx="70" cy="155" r="4" fill="#FCD34D"/>

              <circle cx="130" cy="155" r="12" fill="#374151"/>
              <circle cx="130" cy="155" r="8" fill="#6B7280"/>
              <circle cx="130" cy="155" r="4" fill="#FCD34D"/>

              {/* Headlights */}
              <circle cx="45" cy="95" r="3" fill="#FCD34D" opacity="0.9"/>

              <defs>
                <linearGradient id="camperGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FBBF24"/>
                  <stop offset="50%" stopColor="#F59E0B"/>
                  <stop offset="100%" stopColor="#D97706"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-block mb-6 px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-yellow-500/30 text-yellow-400">
            COMING SOON
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
            CamperFix
          </h1>

          <div className="mb-8">
            <p className="text-2xl sm:text-3xl mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent font-bold">
              Your Motorhome Support Solution
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional roadside assistance and expert support for motorhome and caravan owners across Europe.
            </p>
          </div>

          {/* Waitlist Form */}
          <div className="mb-12">
            <WaitlistForm />
          </div>

          {/* Simple Feature Points */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-gray-300">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="font-medium text-white">Fast Response</p>
              <p className="text-sm text-gray-400">Quick support when you need it</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="font-medium text-white">Expert Help</p>
              <p className="text-sm text-gray-400">Specialized motorhome support</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium text-white">Europe-Wide</p>
              <p className="text-sm text-gray-400">Coverage across Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                CamperFix
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">{t('footer.legal')}</h4>
              <div className="space-y-2">
                <a href="/privacy" className="block text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="block text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">{t('footer.support')}</h4>
              <div className="space-y-2">
                <a href="/support" className="block text-gray-400 hover:text-yellow-400 transition-colors">{t('footer.contact')}</a>
                <a href="/support#faq" className="block text-gray-400 hover:text-yellow-400 transition-colors">{t('footer.faq')}</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CamperFix. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
