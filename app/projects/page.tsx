'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Projects
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Step-by-step guides and tutorials on building modern applications with AI and no-code tools.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coming Soon Card */}
        <article className="group relative rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-500">
                Coming Soon
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Building a Landing Website with Bolt and Windsurf
            </h3>
            <p className="text-gray-600 mb-6">
              Learn how to create a modern, responsive landing page using Bolt and Windsurf. 
              We'll cover design principles, component creation, and deployment.
            </p>
          </div>
        </article>

        {/* Coming Soon Card */}
        <article className="group relative rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-500">
                Coming Soon
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Creating a Chat with PDF App
            </h3>
            <p className="text-gray-600 mb-6">
              Build an AI-powered PDF chat application. Learn how to integrate document processing, 
              AI models, and create an intuitive chat interface.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
