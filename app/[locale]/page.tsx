import { useTranslations } from 'next-intl';
import WaitlistForm from './components/WaitlistForm';

export default function ComingSoonPage() {
  const t = useTranslations('comingSoon');

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[140px]" />
        <div className="absolute right-10 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[180px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-yellow-200">
          {t('badge')}
        </span>
        <h1 className="mt-8 text-4xl font-semibold leading-tight sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-base text-slate-200 sm:text-lg">{t('subtitle')}</p>

        <div className="mt-10 w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-100">
            {t('waitlistTitle')}
          </p>
          <div className="mt-4">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-xs text-slate-300">{t('waitlistNote')}</p>
        </div>

        <div className="mt-12 text-sm text-slate-300">
          {t('status')}
        </div>
      </div>

      <footer className="relative z-10 mt-16 w-full max-w-2xl border-t border-white/10 pt-6 text-center text-xs text-slate-400">
        <p>{t('footer.tagline')}</p>
        <p className="mt-2">{t('footer.contact')}</p>
      </footer>
    </main>
  );
}
