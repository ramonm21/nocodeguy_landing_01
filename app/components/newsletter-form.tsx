'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setStatus('success');
      setMessage('🎉 Check your email for your free AI Tools guide!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <form onSubmit={subscribe} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors disabled:opacity-70"
        >
          {status === 'loading' ? (
            'Sending...'
          ) : (
            <>
              <span>Get Free Guide</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      {message && (
        <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
