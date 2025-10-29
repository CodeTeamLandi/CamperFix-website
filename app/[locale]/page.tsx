import { useTranslations } from 'next-intl';
import WaitlistForm from './components/WaitlistForm';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg1djVoLTV6bTAtNWg1djVoLTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-yellow-500/30">
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              {t('hero.title1')}
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                {t('hero.title2')}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                {t('hero.cta1')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#download"
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-yellow-500/50 flex items-center justify-center gap-2"
              >
                <span className="animate-pulse text-yellow-500">●</span>
                {t('hero.cta2')}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature 1 - Fast Response */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2">
              <div className="w-20 h-20 mb-6 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="url(#speedGradient)"/>
                  <path d="M32 12v8M32 44v8M12 32h8M44 32h8M20.686 20.686l5.657 5.657M37.657 37.657l5.657 5.657M20.686 43.314l5.657-5.657M37.657 26.343l5.657-5.657" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="32" cy="32" r="8" fill="white"/>
                  <path d="M32 24l4 8h-8l4-8z" fill="url(#speedGradient)"/>
                  <defs>
                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FBBF24"/>
                      <stop offset="100%" stopColor="#F59E0B"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('features.feature1.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature1.description')}
              </p>
            </div>

            {/* Feature 2 - Expert Support */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2">
              <div className="w-20 h-20 mb-6 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="url(#expertGradient)"/>
                  <path d="M20 38l8-4 4 4 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="32" cy="22" r="6" fill="white"/>
                  <path d="M26 30c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <rect x="18" y="42" width="28" height="3" rx="1.5" fill="white"/>
                  <path d="M24 48h16M26 52h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="expertGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B"/>
                      <stop offset="100%" stopColor="#D97706"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('features.feature2.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature2.description')}
              </p>
            </div>

            {/* Feature 3 - Complete Coverage */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2">
              <div className="w-20 h-20 mb-6 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="30" fill="url(#coverageGradient)"/>
                  <circle cx="32" cy="32" r="22" stroke="white" strokeWidth="2" opacity="0.3"/>
                  <circle cx="32" cy="32" r="16" stroke="white" strokeWidth="2" opacity="0.5"/>
                  <path d="M32 10v44M10 32h44" stroke="white" strokeWidth="2" opacity="0.3"/>
                  <path d="M18 18l28 28M46 18L18 46" stroke="white" strokeWidth="1.5" opacity="0.2"/>
                  <circle cx="32" cy="32" r="8" fill="white"/>
                  <path d="M32 28v8M28 32h8" stroke="url(#coverageGradient)" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="32" cy="16" r="2.5" fill="white"/>
                  <circle cx="32" cy="48" r="2.5" fill="white"/>
                  <circle cx="16" cy="32" r="2.5" fill="white"/>
                  <circle cx="48" cy="32" r="2.5" fill="white"/>
                  <defs>
                    <linearGradient id="coverageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EAB308"/>
                      <stop offset="100%" stopColor="#CA8A04"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('features.feature3.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full text-sm font-medium text-yellow-800">
                {t('value.badge')}
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {t('value.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('value.text1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('value.text2')}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('value.check1.title')}</div>
                    <div className="text-sm text-gray-600">{t('value.check1.subtitle')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('value.check2.title')}</div>
                    <div className="text-sm text-gray-600">{t('value.check2.subtitle')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('value.check3.title')}</div>
                    <div className="text-sm text-gray-600">{t('value.check3.subtitle')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('value.check4.title')}</div>
                    <div className="text-sm text-gray-600">{t('value.check4.subtitle')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
                <div className="flex justify-center mb-6">
                  <svg className="w-40 h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Sky background */}
                    <circle cx="100" cy="100" r="95" fill="url(#skyGradient)"/>

                    {/* Sun */}
                    <circle cx="150" cy="50" r="15" fill="#FCD34D" opacity="0.8"/>

                    {/* Mountains/Hills */}
                    <path d="M0 120 Q50 100 100 120 T200 120 L200 200 L0 200 Z" fill="#FDE68A" opacity="0.3"/>

                    {/* Motorhome body */}
                    <rect x="40" y="100" width="120" height="50" rx="8" fill="url(#camperGradient)"/>

                    {/* Motorhome cab/front */}
                    <path d="M40 100 L40 85 Q40 75 50 75 L70 75 Q80 75 80 85 L80 100 Z" fill="url(#camperGradient)"/>

                    {/* Windows */}
                    <rect x="50" y="80" width="18" height="12" rx="2" fill="#FEF3C7"/>
                    <rect x="90" y="110" width="20" height="20" rx="3" fill="#FEF3C7"/>
                    <rect x="120" y="110" width="20" height="20" rx="3" fill="#FEF3C7"/>

                    {/* Door */}
                    <rect x="145" y="115" width="12" height="30" rx="2" fill="#78350F" opacity="0.3"/>
                    <circle cx="148" cy="130" r="1.5" fill="#FCD34D"/>

                    {/* Wheels */}
                    <circle cx="70" cy="155" r="12" fill="#374151"/>
                    <circle cx="70" cy="155" r="8" fill="#6B7280"/>
                    <circle cx="70" cy="155" r="4" fill="#9CA3AF"/>

                    <circle cx="130" cy="155" r="12" fill="#374151"/>
                    <circle cx="130" cy="155" r="8" fill="#6B7280"/>
                    <circle cx="130" cy="155" r="4" fill="#9CA3AF"/>

                    {/* Details */}
                    <path d="M160 120 L165 120 M160 125 L165 125 M160 130 L165 130" stroke="#78350F" strokeWidth="1.5" opacity="0.3"/>

                    {/* Headlights */}
                    <circle cx="45" cy="95" r="3" fill="#FCD34D" opacity="0.7"/>

                    <defs>
                      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FEF3C7"/>
                        <stop offset="100%" stopColor="#FDE68A"/>
                      </linearGradient>
                      <linearGradient id="camperGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1F2937"/>
                        <stop offset="50%" stopColor="#111827"/>
                        <stop offset="100%" stopColor="#030712"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Peace of Mind</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional support designed specifically for motorhome and caravan owners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE5NGg1djVoLTV6bTAtNWg1djVoLTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative z-10 text-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-yellow-500/30">
                {t('download.badge')}
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t('download.title')}</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                {t('download.description')}
              </p>

              <WaitlistForm />

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 mb-6">
                <div className="flex items-center gap-3 opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 384 512" fill="white">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                  <span className="font-medium">{t('download.appStore')}</span>
                </div>
                <div className="flex items-center gap-3 opacity-80">
                  <svg className="w-8 h-8" viewBox="0 0 512 512" fill="white">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                  <span className="font-medium">{t('download.googlePlay')}</span>
                </div>
              </div>
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
