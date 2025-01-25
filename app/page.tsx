"use client";

import { ArrowRight, Bot, Code2, Sparkles, Zap, Terminal, Rocket, Brain, Wand2, Blocks, Laptop, BookOpen, Lightbulb } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./components/newsletter-form";
import XIcon from "./XIcon";

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
                href="/blog"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300 text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                <span>Articles</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* No-Code Apps */}
            <div className="feature-card group">
              <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 text-teal-600 group-hover:scale-110 transition-transform">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">No-Code to Apps</h3>
                <p className="text-gray-600 mb-4">
                  Discover how to build powerful applications without writing code. From web apps to automation tools, learn the art of no-code development.
                </p>
                <Link href="/projects" className="inline-flex items-center text-teal-600 hover:text-teal-700">
                  View Projects
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* AI & Tech */}
            <div className="feature-card group">
              <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">AI & Tech Insights</h3>
                <p className="text-gray-600 mb-4">
                  Explore the latest in AI technology and how it's transforming the way we build. Get practical tips and insights on leveraging AI tools.
                </p>
                <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                  Read Articles
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Guides & Resources */}
            <div className="feature-card group">
              <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Guides & Resources</h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step tutorials and comprehensive guides to help you master no-code tools and modern development practices.
                </p>
                <Link href="/apps" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Explore Guides
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
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
                    I'm Ramon, and I'm passionate about making technology accessible to everyone. As a developer
                    turned no-code advocate, I've seen firsthand how AI and no-code tools are revolutionizing
                    the way we build digital solutions.
                  </p>
                  <p>
                    My mission is to help creators, entrepreneurs, and innovators bring their ideas to life
                    without getting stuck in technical complexities. Whether you're a seasoned developer looking
                    to work smarter or a complete beginner with a brilliant idea, I'm here to guide you through
                    the exciting world of AI-powered no-code development.
                  </p>
                  <p>
                    Through tutorials, guides, and real-world projects, I share everything I learn about
                    leveraging AI and no-code tools to build amazing things. Let's explore these possibilities
                    together!
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
                    <span>Connect on X</span>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <span>More About Me</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:ml-auto max-w-lg space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl opacity-10 blur-xl"></div>
                <h3 className="text-xl font-semibold mb-4">What I Share</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-gray-600">Practical no-code solutions for real-world problems</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-600">Latest AI tools and how to use them effectively</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-600">Step-by-step guides and detailed tutorials</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Let's Connect!</h3>
                <p className="text-gray-600 mb-6">
                  Join our community of creators and innovators. Share your ideas, ask questions,
                  and let's build amazing things together.
                </p>
                <a
                  href="#stay-updated"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  <span>Subscribe to Newsletter</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Content</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my latest projects, articles, and tutorials. From AI experiments to no-code solutions,
              stay updated with the newest content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Project Card */}
            <Link href="/projects/ai-chatbot" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                  <Bot className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-medium">
                      Project
                    </span>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-600 transition-colors">
                    Build an AI Chatbot with No Code
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Create your own ChatGPT-like assistant using no-code tools and AI APIs.
                  </p>
                </div>
              </div>
            </Link>

            {/* Latest Blog Post */}
            <Link href="/blog/future-of-ai" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium">
                      Article
                    </span>
                    <span className="text-sm text-gray-500">1 week ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    The Future of AI in No-Code Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Exploring how AI is revolutionizing the way we build applications without code.
                  </p>
                </div>
              </div>
            </Link>

            {/* Latest Tutorial */}
            <Link href="/apps/automation-guide" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                      Guide
                    </span>
                    <span className="text-sm text-gray-500">2 weeks ago</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    Automate Your Workflow with AI
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Step-by-step guide to building powerful automation workflows with modern tools.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <span>View All Content</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="stay-updated" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Stay Updated</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Get the latest updates on AI and no-code development, plus exclusive tips and resources.
          </p>
          <div className="mt-10">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}