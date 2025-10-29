import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg1djVoLTV6bTAtNWg1djVoLTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              {t('hero.title1')}
              <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                {t('hero.title2')}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-blue-50 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                {t('hero.cta1')}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#download"
                className="group bg-blue-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500/30 transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-2"
              >
                <span className="animate-pulse">●</span>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('features.feature1.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature1.description')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform">
                🔧
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{t('features.feature2.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature2.description')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform">
                🌍
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <div className="text-6xl mb-6 text-center">🚐</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <span className="text-2xl">🔌</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{t('value.systems.electrical.title')}</div>
                      <div className="text-sm text-gray-600">{t('value.systems.electrical.subtitle')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-xl">
                    <span className="text-2xl">🌡️</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{t('value.systems.climate.title')}</div>
                      <div className="text-sm text-gray-600">{t('value.systems.climate.subtitle')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl">
                    <span className="text-2xl">💧</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{t('value.systems.water.title')}</div>
                      <div className="text-sm text-gray-600">{t('value.systems.water.subtitle')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                    <span className="text-2xl">⚙️</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{t('value.systems.mechanical.title')}</div>
                      <div className="text-sm text-gray-600">{t('value.systems.mechanical.subtitle')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE5NGg1djVoLTV6bTAtNWg1djVoLTV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative z-10 text-center text-white">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                {t('download.badge')}
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t('download.title')}</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                {t('download.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 flex items-center justify-center gap-2">
                  <span className="text-2xl">🍎</span>
                  {t('download.appStore')}
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 flex items-center justify-center gap-2">
                  <span className="text-2xl">🤖</span>
                  {t('download.googlePlay')}
                </div>
              </div>
              <p className="text-sm text-blue-200">
                {t('download.waitlist')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                CamperFix
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">{t('footer.legal')}</h4>
              <div className="space-y-2">
                <a href="/privacy" className="block text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="block text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">{t('footer.support')}</h4>
              <div className="space-y-2">
                <a href="/support" className="block text-gray-400 hover:text-blue-400 transition-colors">{t('footer.contact')}</a>
                <a href="/support#faq" className="block text-gray-400 hover:text-blue-400 transition-colors">{t('footer.faq')}</a>
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
