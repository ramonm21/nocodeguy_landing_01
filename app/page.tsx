"use client";

import { ArrowRight, Bot, Code2, Sparkles, Zap, Terminal, Rocket, Brain, Wand2, Blocks, Laptop, BookOpen, Lightbulb, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./components/newsletter-form";
import XIcon from "./XIcon";
import XSidebar from "./components/XSidebar";
import { Typewriter } from "@/components/ui/typewriter-text";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* X Profile Sidebar */}
      <XSidebar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col items-center">
            <div className="mb-6 px-6 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-medium animate-gentle-bounce hover:cursor-pointer">
              Becoming an AI Creator
            </div>

            <div className="text-center max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                <span className="block mb-2">
                  Navigate the AI Revolution
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl text-gray-600">
                  <Typewriter
                    text={"Build • Learn • Grow"}
                    speed={100}
                    loop={true}
                    className="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent"
                    delay={3000}
                  />
                </span>
              </h1>
            </div>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl text-center mx-auto">
              Weekly AI insights, practical tech guides, and honest building stories. 
              Join me on the journey from beginner to independent creator!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#stay-updated"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors text-lg font-medium"
              >
                <span>Join The Journey</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="https://x.com/nocodeguy_"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-lg"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center">Featured Guides</h2>
            <p className="mt-4 text-gray-600 text-center">Latest tutorials and insights about AI & No-Code</p>
          </div>
          <div className="space-y-4">
            <Link 
              href="/blog/local-llm-ollama" 
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm"
            >
              <div className="flex justify-between items-center gap-6">
                <div className="flex gap-6 items-center flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/ollama-deepseek/ollama.png"
                      alt="DeepSeek Guide"
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Running DeepSeek-R1 Locally</h3>
                    <p className="mt-2 text-gray-600">Complete guide to running the best ChatGPT alternative for free using Ollama</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            
            <Link 
              href="/blog/best-free-ai-tools-2025" 
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm"
            >
              <div className="flex justify-between items-center gap-6">
                <div className="flex gap-6 items-center flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/best-free-ai-tools/deepseek.png"
                      alt="AI Tools Guide"
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Best Free AI Tools in 2025</h3>
                    <p className="mt-2 text-gray-600">Discover 10 powerful AI tools that you can use completely free</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            
            <Link 
              href="/blog/nocode-website-prototype-bolt-v0" 
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-sm"
            >
              <div className="flex justify-between items-center gap-6">
                <div className="flex gap-6 items-center flex-1">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/nocode-bolt-v0/bolt-v0-lovable.png"
                      alt="Website Prototyping Guide"
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Rapid Website Prototyping</h3>
                    <p className="mt-2 text-gray-600">Learn how to create stunning website prototypes in minutes with Bolt v0</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-lg font-medium group"
            >
              <span>View All Guides</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-teal-400/10 text-teal-300 text-sm font-medium mb-4">
                Weekly AI Tips
              </div>
              <h2 className="text-3xl font-bold mb-4">Build Your First AI App</h2>
              <p className="text-gray-300 text-lg mb-6">
                Each week, I share practical guides on building AI apps without code. 
                From chatbots to automation - learn how to build and launch fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#stay-updated"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white hover:bg-teal-400 transition-colors font-medium group"
                >
                  <span>Get Free Guide</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors group"
                >
                  <span>Browse Resources</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-sm">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">What You'll Learn</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">Step-by-step tutorials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">No-code tool recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Resources for AI Creators</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Everything you need to start building with AI - from beginner guides to advanced workflows</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI & Tech Insights */}
            <Link href="/blog" className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-100 hover:border-teal-200 transition-all">
                <div className="mb-6 inline-block">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI & Tech Insights</h3>
                <p className="text-gray-600 mb-6">Weekly explorations of AI developments, tech innovations, and creator stories. From tool reviews to industry trends.</p>
                <div className="flex items-center text-teal-600 font-medium group-hover:gap-2 transition-all">
                  <span>Discover Trends</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Practical Guides */}
            <Link href="/resources" className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100 hover:border-purple-200 transition-all">
                <div className="mb-6 inline-block">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Practical Guides</h3>
                <p className="text-gray-600 mb-6">Step-by-step guides on setting up AI tools and building your own apps. From local LLMs to coding basics.</p>
                <div className="flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all">
                  <span>Start Building</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Creator's Toolbox */}
            <Link href="/apps" className="group">
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100 hover:border-blue-200 transition-all">
                <div className="mb-6 inline-block">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Creator's Toolbox</h3>
                <p className="text-gray-600 mb-6">A carefully curated collection of tools, prompts, and workflows that I personally use. Everything you need to start building.</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  <span>Browse Resources</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Connection Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-xl blur-2xl opacity-50"></div>
              <div className="relative space-y-6">
                <h2 className="text-3xl font-bold">Hey there! 👋</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                  I'm Ramon, and I'm exploring the intersection of AI tools, modern tech, and independent creation.
                  After discovering how AI and no-code tools are transforming the way we work and build,
                  I'm documenting my journey from enthusiast to creator.
                  </p>
                  <p>
                  My mission is to help fellow explorers navigate the rapidly evolving tech landscape.
                  Whether you're curious about AI tools, want to build your first project,
                  or are looking to become an independent creator - I share everything I learn along the way.
                  </p>
                  <p>
                  Through weekly insights, practical guides, and behind-the-scenes looks at my own projects
                  (like PianoLabs), I'm building a resource I wish existed when I started.
                  Let's explore these possibilities together!
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="https://x.com/nocodeguy_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  >
                    <XIcon className="w-4 h-4" />
                    <span>Follow Journey</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:ml-auto max-w-lg space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl opacity-10 blur-xl"></div>
                <h3 className="text-xl font-semibold mb-4">What I Share</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-gray-600">Weekly AI discoveries and practical applications</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-600">Hands-on guides for modern tech tools</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Step-by-step tutorials and real project insights</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Let's Connect!</h3>
                <p className="text-gray-600 mb-6">
                Join me for weekly insights on AI tools, tech developments,
                and honest stories from the builder's journey. Every week, straight to your inbox
                </p>
                <a
                  href="#stay-updated"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  <span>Join Newsletter</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="stay-updated" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full">FREE RESOURCE</span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Modern Builder's Toolkit 2025</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
          Get instant access to my curated collection of AI tools, setup guides,
          and workflows that helped me start my creator journey.
          Plus, receive weekly insights on AI developments and practical tech tips.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Essential AI tools and setup guides</span>
              <CheckCircle2 className="h-5 w-5 text-green-500 ml-4" />
              <span>Time-saving automation workflows</span>
              <CheckCircle2 className="h-5 w-5 text-green-500 ml-4" />
              <span>Weekly tech insights and updates</span>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}