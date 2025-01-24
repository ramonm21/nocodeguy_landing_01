'use client';

import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        About Me
      </h1>

      <div className="prose prose-lg max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h2>
          <p className="text-gray-600 mb-6">
            Hey there! I'm the nocodeguy, a developer and AI enthusiast passionate about making technology more accessible. 
            I believe in the power of AI and no-code tools to democratize software development and empower creators.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h2>
          <p className="text-gray-600 mb-6">
            I explore and build with cutting-edge AI tools, creating practical applications and sharing my learnings along the way. 
            My focus is on bridging the gap between powerful AI capabilities and practical, everyday use cases.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Building AI-powered applications without traditional coding</li>
            <li>Creating tutorials and guides for no-code development</li>
            <li>Exploring the future of software development with AI</li>
            <li>Sharing insights and learnings with the community</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why I Do This</h2>
          <p className="text-gray-600 mb-6">
            I believe we're at the beginning of a revolutionary change in how software is created. AI is not just changing 
            the tools we use—it's transforming who can build software. My mission is to help people harness these 
            powerful tools and bring their ideas to life, regardless of their technical background.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Future We're Building</h2>
          <p className="text-gray-600 mb-6">
            We're moving towards a future where AI becomes a collaborative partner in the creative process. I envision 
            a world where anyone can build sophisticated software solutions, with AI handling the technical complexity 
            while humans focus on creativity and problem-solving.
          </p>
          <p className="text-gray-600">
            This isn't just about making development easier—it's about unleashing a new wave of innovation by removing 
            the traditional barriers to software creation.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect With Me</h2>
          <p className="text-gray-600 mb-6">
            I'm always excited to connect with fellow enthusiasts, creators, and anyone interested in the future of AI and no-code development.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="https://x.com/nocodeguy_" 
              target="_blank"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Twitter className="h-5 w-5" />
              <span>Follow on X</span>
            </Link>
            <Link 
              href="https://github.com/nocodeguy" 
              target="_blank"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
              <span>Follow on GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
