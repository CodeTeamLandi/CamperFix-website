import { useTranslations } from 'next-intl';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Coming Soon Badge */}
        <div className="inline-block mb-8 px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-yellow-500/30 text-yellow-400">
          COMING SOON
        </div>

        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          CamperFix
        </h1>

        {/* Simple Description */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed">
          Something new is coming
        </p>

        {/* Waitlist Form */}
        <div className="mb-8">
          <WaitlistForm />
        </div>
      </div>

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
