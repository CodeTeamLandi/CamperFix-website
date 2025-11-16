import { useTranslations } from 'next-intl';
import WaitlistForm from './components/WaitlistForm';

export default function ComingSoonPage() {
  const t = useTranslations('comingSoon');

  const milestones = ['alpha', 'beta', 'launch'].map((key) => ({
    key,
    label: t(`milestones.${key}.label`),
    date: t(`milestones.${key}.date`),
    detail: t(`milestones.${key}.detail`),
  }));

  const highlights = ['experts', 'coverage', 'peace'].map((key) => ({
    key,
    title: t(`highlights.${key}.title`),
    description: t(`highlights.${key}.description`),
  }));

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[140px]" />
        <div className="absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-yellow-200">
            {t('badge')}
          </span>
          <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg text-slate-200 sm:text-xl">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-100">
            {t('waitlistTitle')}
          </p>
          <div className="mt-4">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-sm text-slate-300">
            {t('waitlistNote')}
          </p>
        </div>

        <div className="mt-14 w-full max-w-5xl rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            {t('statusLabel')}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {milestones.map((milestone) => (
              <div
                key={milestone.key}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-2xl shadow-black/30"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-200">
                  {milestone.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {milestone.date}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.key}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-sm text-slate-300 sm:px-8">
        <p>{t('footer.tagline')}</p>
        <p className="mt-2 text-slate-400">{t('footer.contact')}</p>
      </footer>
    </main>
  );
}
