'use client';

import { useState } from 'react';
import { ContentUpgrade as ContentUpgradeType } from '@/app/types/blog';

export default function ContentUpgrade({ upgrade }: { upgrade: ContentUpgradeType }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement email collection
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="p-6 bg-teal-50 rounded-xl">
        <h3 className="font-semibold text-teal-900">Thank you!</h3>
        <p className="text-teal-700 mt-2">Check your email for your download.</p>
        <a
          href={upgrade.downloadLink}
          className="mt-4 inline-block text-teal-600 hover:underline"
          download
        >
          Download Now →
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 bg-purple-50 rounded-xl">
      <h3 className="font-semibold text-purple-900">{upgrade.title}</h3>
      <p className="text-purple-700 mt-2">{upgrade.description}</p>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-3 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Get Free Download'}
        </button>
      </form>
    </div>
  );
}
