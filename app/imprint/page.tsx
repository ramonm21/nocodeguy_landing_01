'use client';

export default function Imprint() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Legal Notice (Imprint)
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information according to § 5 TMG</h2>
          <p className="text-gray-600">
            nocodeguy<br />
            [Your Street Address]<br />
            [City, Postal Code]<br />
            Germany
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600">
            Email: contact@nocodeguy.com<br />
            Twitter: @nocodeguy_
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsible for Content</h2>
          <p className="text-gray-600 mb-4">
            [Your Full Name]<br />
            Contact details as above
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Liability for Content</h3>
          <p className="text-gray-600 mb-4">
            The contents of our pages have been created with great care. However, we cannot guarantee the accuracy, 
            completeness, or timeliness of the content. As a service provider, we are responsible for our own content 
            on these pages according to § 7 paragraph 1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated 
            to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Liability for Links</h3>
          <p className="text-gray-600 mb-4">
            Our offer contains links to external websites of third parties, on whose contents we have no influence. 
            Therefore, we cannot assume any liability for these external contents. The respective provider or operator 
            of the pages is always responsible for the content of the linked pages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Copyright</h2>
          <p className="text-gray-600">
            The contents and works created by the site operators on these pages are subject to German copyright law. 
            Duplication, processing, distribution, or any form of commercialization of such material beyond the scope 
            of the copyright law shall require the prior written consent of its respective author or creator.
          </p>
        </section>

        <div className="text-sm text-gray-500 mt-8">
          Last updated: January 24, 2025
        </div>
      </div>
    </main>
  );
}
