'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function WaitlistForm() {
  const t = useTranslations('waitlist');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || t('success'));
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || t('error'));
      }
    } catch (error) {
      setStatus('error');
      setMessage(t('error'));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('placeholder')}
          required
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-yellow-500/30 text-white placeholder-gray-300 focus:outline-none focus:border-yellow-500/50 focus:bg-white/20 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? t('sending') : status === 'success' ? t('sent') : t('submit')}
        </button>
      </form>
      {message && (
        <p className={`mt-4 text-center text-sm ${status === 'success' ? 'text-green-200' : 'text-red-200'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
