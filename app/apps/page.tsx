'use client';

import { ArrowRight, Music, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Apps() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
        Apps
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Explore AI-powered tools and applications I'm building to make creation more accessible.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {/* PianoLabs AI Composer */}
        <div className="group relative rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-indigo-50">
                <Music className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                PianoLabs AI Composer
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Learn music theory and compose beautiful chord progressions using natural language. 
                Engage with an AI chat interface that understands music theory and helps you create.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Key Features:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Natural language music composition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Interactive music theory learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">AI-powered chord progression generation</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-4">
                <Link 
                  href="http://aicomposer.chat" 
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-xl"
                >
                  <span>Visit AI Composer</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <span className="text-sm text-gray-500">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* More Apps Coming Soon Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-medium text-gray-900">
              More Apps Coming Soon
            </h2>
          </div>
          <p className="text-gray-600">
            I'm working on more AI-powered tools to help creators build amazing things. 
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </main>
  );
}
