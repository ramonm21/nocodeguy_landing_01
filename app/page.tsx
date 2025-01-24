"use client";

import { ArrowRight, Bot, Code2, Sparkles, Twitter, Zap, Terminal, Rocket } from "lucide-react";
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
            <div className="mb-6 px-6 py-1.5 rounded-full bg-teal-50 text-teal-600 text-sm font-medium">
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
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">AI Adventures</h3>
                <p className="text-muted-foreground">
                  Follow along as I explore and break down the latest AI tools into simple, 
                  actionable projects anyone can build.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Bot className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">No-Code Magic</h3>
                <p className="text-muted-foreground">
                  Discover how to create powerful AI applications using visual tools and 
                  automated workflows.
                </p>
              </div>
            </div>
            <div className="group relative p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Rocket className="h-8 w-8 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Future Skills</h3>
                <p className="text-muted-foreground">
                  Learn the essential skills needed to thrive in the AI-powered future of 
                  no-code development.
                </p>
              </div>
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
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-2xl bg-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
            <div className="relative text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Adventure</h2>
              <p className="text-muted-foreground mb-8">
                Get weekly updates on new AI tools, no-code tips, and exclusive behind-the-scenes 
                looks at my latest projects.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-3 rounded-full bg-background border-2 border-muted hover:border-muted-foreground/50 focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="group px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  <span className="inline-flex items-center gap-2">
                    Subscribe
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}