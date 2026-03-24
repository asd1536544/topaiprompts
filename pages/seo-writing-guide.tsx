import Head from "next/head";
import Link from "next/link";

export default function SeoWritingGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SEO Writing Guide - Tools & Resources for SEO Content</title>
        <meta
          name="description"
          content="Complete SEO writing guide with free AI tools for keyword research, content planning, meta tags, and more. Learn how to write SEO-friendly content that ranks."
        />
        <meta
          name="keywords"
          content="SEO writing, SEO content, SEO tools, keyword research, content optimization"
        />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            Complete SEO Writing Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to write SEO-friendly content that ranks high on search engines. Free AI tools, expert tips, and proven strategies for content optimization.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Master SEO Writing
          </h2>
          <p className="text-gray-600 mb-4">
            SEO writing is the art of creating content that appeals to both search engines and human readers. It involves researching keywords, optimizing content structure, and ensuring your writing is both informative and engaging.
          </p>
          <p className="text-gray-600">
            Whether you're a blogger, content marketer, or business owner, this guide provides all the tools and resources you need to create content that ranks high on Google and drives organic traffic to your website.
          </p>
        </section>

        {/* Tools Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Free SEO Writing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Keyword Research Tool */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                SEO Keyword Research Tool
              </h3>
              <p className="text-gray-600 mb-4">
                Discover high-volume, low-competition keywords for your SEO content.
              </p>
              <Link
                href="/seo-keyword-research-tool"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Content Outline Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Content Outline Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Create SEO-friendly content outlines that structure your articles for maximum readability and ranking potential.
              </p>
              <Link
                href="/content-outline-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Meta Title Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Meta Title Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Generate compelling meta titles optimized for search engines and click-through rates.
              </p>
              <Link
                href="/meta-title-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Meta Description Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Meta Description Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Create persuasive meta descriptions that improve search engine visibility and drive clicks.
              </p>
              <Link
                href="/meta-description-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* SEO Content Writer */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                SEO Content Writer
              </h3>
              <p className="text-gray-600 mb-4">
                Generate SEO-friendly content for blog posts, articles, and web pages.
              </p>
              <Link
                href="/seo-content-writer"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Content Optimizer */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Content Optimizer
              </h3>
              <p className="text-gray-600 mb-4">
                Optimize your existing content for search engines with our AI-powered content optimizer.
              </p>
              <Link
                href="/content-optimizer"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Writing Workflow */}
        <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            SEO Writing Workflow
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Research Keywords</h3>
                <p className="text-gray-600">
                  Use our <Link href="/seo-keyword-research-tool" className="text-indigo-600 hover:underline">SEO Keyword Research Tool</Link> to find relevant keywords with high search volume and low competition.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Create a Content Outline</h3>
                <p className="text-gray-600">
                  Generate a structured content outline with our <Link href="/content-outline-generator" className="text-indigo-600 hover:underline">Content Outline Generator</Link> to organize your ideas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Write SEO Content</h3>
                <p className="text-gray-600">
                  Create SEO-friendly content with our <Link href="/seo-content-writer" className="text-indigo-600 hover:underline">SEO Content Writer</Link>, focusing on natural keyword integration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Optimize Content</h3>
                <p className="text-gray-600">
                  Improve your content's SEO with our <Link href="/content-optimizer" className="text-indigo-600 hover:underline">Content Optimizer</Link>, ensuring proper keyword density and readability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                5
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Create Meta Titles</h3>
                <p className="text-gray-600">
                  Generate compelling meta titles with our <Link href="/meta-title-generator" className="text-indigo-600 hover:underline">Meta Title Generator</Link> to improve click-through rates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                6
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Write Meta Descriptions</h3>
                <p className="text-gray-600">
                  Create persuasive meta descriptions with our <Link href="/meta-description-generator" className="text-indigo-600 hover:underline">Meta Description Generator</Link> to drive more clicks from search results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Writing Tips */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            SEO Writing Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">🔑</span>
                Focus on User Intent
              </h3>
              <p className="text-gray-600">
                Write content that addresses the user's search intent. Are they looking for information, a product, or a solution to a problem? Tailor your content accordingly.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">📝</span>
                Use Keywords Naturally
              </h3>
              <p className="text-gray-600">
                Avoid keyword stuffing. Integrate keywords naturally into your content, focusing on headings, introduction, and conclusion. Aim for a keyword density of 1-2%.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">📊</span>
                Optimize for Featured Snippets
              </h3>
              <p className="text-gray-600">
                Structure your content with clear headings, bullet points, and numbered lists. Answer common questions directly to increase your chances of appearing in featured snippets.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">🔗</span>
                Use Internal and External Links
              </h3>
              <p className="text-gray-600">
                Include relevant internal links to other pages on your website and authoritative external links. This improves your content's credibility and helps search engines understand your site structure.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">📱</span>
                Write for Mobile Users
              </h3>
              <p className="text-gray-600">
                Ensure your content is easy to read on mobile devices. Use short paragraphs, clear headings, and avoid large blocks of text. Mobile-friendliness is a ranking factor for Google.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">💡</span>
                Create Valuable Content
              </h3>
              <p className="text-gray-600">
                The most important SEO factor is content quality. Create informative, engaging content that provides value to your readers. High-quality content naturally attracts backlinks and social shares.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-indigo-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Write SEO-Friendly Content?</h2>
            <p className="mb-6 text-lg">
              Start creating content that ranks high on search engines today with our free AI tools.
            </p>
            <Link
              href="/seo-keyword-research-tool"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
            >
              Start Keyword Research
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}