import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Resources & Guides
          </h1>
          <p className="text-xl text-gray-600">
            A collection of guides and resources to help you build with AI
          </p>
        </div>

        {/* Resources Grid */}
        <div className="space-y-12">
          {/* AI Guides */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Getting Started with AI</h2>
            <div className="grid gap-6">
              <Link 
                href="/blog/local-llm-ollama"
                className="group block p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/ollama-deepseek/ollama.png"
                      alt="Ollama Guide"
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Running DeepSeek-R1 Locally</h3>
                    <p className="text-gray-600 mb-4">
                      Learn how to run powerful AI models on your computer for free using Ollama
                    </p>
                    <div className="flex items-center text-gray-600 group-hover:text-gray-900">
                      <span>Read guide</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link 
                href="/blog/best-free-ai-tools-2025"
                className="group block p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/best-free-ai-tools/deepseek.png"
                      alt="AI Tools Guide"
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Best Free AI Tools in 2025</h3>
                    <p className="text-gray-600 mb-4">
                      A curated list of the most powerful AI tools you can use for free
                    </p>
                    <div className="flex items-center text-gray-600 group-hover:text-gray-900">
                      <span>Read guide</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* No-Code Guides */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">No-Code Development</h2>
            <div className="grid gap-6">
              <Link 
                href="/blog/nocode-website-prototype-bolt-v0"
                className="group block p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/blog/nocode-bolt-v0/bolt-v0-lovable.png"
                      alt="Bolt Guide"
                      width={120}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rapid Website Prototyping</h3>
                    <p className="text-gray-600 mb-4">
                      Create stunning website prototypes in minutes using Bolt v0
                    </p>
                    <div className="flex items-center text-gray-600 group-hover:text-gray-900">
                      <span>Read guide</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">More Coming Soon</h2>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-gray-600">
                I'm working on more guides and resources. Follow me on{" "}
                <Link href="https://x.com/nocodeguy_" className="text-gray-900 hover:text-gray-700">
                  X @nocodeguy_
                </Link>{" "}
                to stay updated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
