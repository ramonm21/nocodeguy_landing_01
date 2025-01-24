"use client";

import { ArrowRight, Bot, Code2, Sparkles, Twitter, Zap, Terminal, Rocket, Brain, Wand2, Blocks } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col items-center">
            <div className="mb-6 px-6 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-medium animate-gentle-bounce hover:cursor-pointer">
              Zero Code, Infinite Possibilities
            </div>
            <div className="text-center max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                <span className="block mb-2">
                  Transforming Ideas into Reality
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl mb-2 text-gray-600">
                  with
                </span>
                <span className="block bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
                  AI & No-Code Magic <span className="inline-block">✨</span>
                </span>
              </h1>
            </div>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl text-center mx-auto">
              Join me on a journey where we harness the power of AI to build amazing apps - no coding required.
              Let's make tech accessible to everyone!
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 text-sm font-medium"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/guide"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <span>Read the Guide</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 justify-items-center">
            {/* AI Lab */}
            <div className="feature-card group relative flex flex-col items-center text-center w-full max-w-[320px] p-8 rounded-3xl bg-violet-50/50 hover:bg-violet-50">
              <div className="feature-icon w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-2xl font-semibold text-violet-600 mb-6">AI Lab</h3>
              <ul className="space-y-5 mb-8 w-full">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-600 mt-2 shrink-0" />
                  <span className="text-gray-600">Weekly AI tool breakdowns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-600 mt-2 shrink-0" />
                  <span className="text-gray-600">Step-by-step project guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-600 mt-2 shrink-0" />
                  <span className="text-gray-600">Real-world applications</span>
                </li>
              </ul>
              <Link
                href="/lab"
                className="group inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium"
              >
                <span>Explore the Lab</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* No-Code Spells */}
            <div className="feature-card group relative flex flex-col items-center text-center w-full max-w-[320px] p-8 rounded-3xl bg-pink-50/50 hover:bg-pink-50">
              <div className="feature-icon w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
                <Wand2 className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">No-Code Spells</h3>
              <ul className="space-y-5 mb-8 w-full">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-pink-600 mt-2 shrink-0" />
                  <span className="text-gray-600">Visual automation recipes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-pink-600 mt-2 shrink-0" />
                  <span className="text-gray-600">AI integration patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-pink-600 mt-2 shrink-0" />
                  <span className="text-gray-600">Ready-to-use templates</span>
                </li>
              </ul>
              <Link
                href="/spells"
                className="group inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
              >
                <span>Learn the Spells</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Future Stack */}
            <div className="feature-card group relative flex flex-col items-center text-center w-full max-w-[320px] p-8 rounded-3xl bg-emerald-50/50 hover:bg-emerald-50">
              <div className="feature-icon w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-6">Future Stack</h3>
              <ul className="space-y-5 mb-8 w-full">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span className="text-gray-600">AI tool mastery paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span className="text-gray-600">Workflow optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span className="text-gray-600">Future-proof strategies</span>
                </li>
              </ul>
              <Link
                href="/stack"
                className="group inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                <span>Master the Stack</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Latest Experiments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out my latest adventures in AI and no-code development. Each project comes with 
              a detailed guide so you can build it too!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="group relative rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                    alt="AI Writing Assistant"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-500 backdrop-blur-sm">
                      Latest Project
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    AI Writing Companion
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Create your personal AI writing assistant that helps you write better, 
                    faster, and more creatively - no coding required.
                  </p>
                  <Link
                    href="/blog/ai-writing-assistant"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    <span>Read the Guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
            <article className="group relative rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1676299081847-824916de030a"
                    alt="AI Image Generator"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-500 backdrop-blur-sm">
                      Popular
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    AI Art Studio
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Build your own AI art generation platform that turns text descriptions 
                    into stunning visual masterpieces.
                  </p>
                  <Link
                    href="/blog/ai-image-generator"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    <span>Read the Guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-teal-50 text-teal-600">
            Join the Community
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new AI tools, tutorials, and behind-the-scenes looks at my latest projects.
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-teal-500 rounded-lg shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}