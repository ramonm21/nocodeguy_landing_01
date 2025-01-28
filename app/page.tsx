"use client";

import { ArrowRight, Bot, Code2, Sparkles, Zap, Terminal, Rocket, Brain, Wand2, Blocks, Laptop, BookOpen, Lightbulb, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./components/newsletter-form";
import XIcon from "./XIcon";
import XSidebar from "./components/XSidebar";
import { Typewriter } from "@/components/ui/typewriter-text";

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

      {/* Feature Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Tech Insights */}
            <div className="feature-card group">
              <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 text-teal-600 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">AI & Tech Insights</h3>
                <p className="text-gray-600 mb-4 flex-grow min-h-[80px]">
                  Weekly explorations of AI developments, tech innovations, and creator stories. From tool reviews to industry trends - discover what's shaping our digital future.
                </p>
                <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700">
                  Discover Trends
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Practical Guides */}
            <div className="feature-card group">
              <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Practical Guides</h3>
                <p className="text-gray-600 mb-4 flex-grow min-h-[80px]">
                  Step-by-step guides on setting up AI tools and building your own apps. From local LLMs to coding basics - everything you need to get started.
                </p>
                <Link href="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                  Start Building
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Creator's Toolbox */}
            <div className="feature-card group">
              <div className="relative h-full p-8 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                  <Blocks className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Creator's Toolbox</h3>
                <p className="text-gray-600 mb-4 flex-grow min-h-[80px]">
                  A carefully curated collection of tools, prompts, and workflows that I personally use. Everything you need to start building.
                </p>
                <Link href="/apps" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Browse Resources
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
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <span>Learn More</span>
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  <span>Join Newsletter</span>
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
                  Setting Up a Local LLM with Ollama
                  </h3>
                  <p className="text-gray-600 text-sm">
                  A beginner-friendly guide to running powerful AI models locally.
                  Perfect for privacy-focused projects and learning.
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
                  AI Tools That Changed My Workflow in 2025
                  </h3>
                  <p className="text-gray-600 text-sm">
                  Exploring the latest AI developments and how they're reshaping the way we build and create.
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
                  From Idea to Launch: Building PianoLabs
                  </h3>
                  <p className="text-gray-600 text-sm">
                  Behind the scenes of building an AI music teacher. Tools, challenges, and lessons learned.
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
              <span>Discover More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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