'use client';

export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Privacy Policy
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-4">
            This Privacy Policy explains how nocodeguy ("we," "us," or "our") collects, uses, and protects your personal information 
            when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our website</li>
            <li>Comment on our blog posts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Send you our newsletter and updates</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and services</li>
            <li>Analyze website usage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies</h2>
          <p className="text-gray-600 mb-4">
            We use cookies to improve your browsing experience and analyze website traffic. 
            You can control cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at privacy@nocodeguy.com
          </p>
        </section>

        <div className="text-sm text-gray-500 mt-8">
          Last updated: January 24, 2025
        </div>
      </div>
    </main>
  );
}
