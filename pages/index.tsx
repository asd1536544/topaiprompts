import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Free AI Prompt Generators for YouTube, SEO &amp; Marketing</title>
        <meta
          name="description"
          content="AI Prompt Generator Hub focused on practical prompts for creators: YouTube scripts, hooks, titles, descriptions, and more scenario-based prompt templates."
        />
        <meta
          name="keywords"
          content="AI prompt generator, AI prompt generator hub, free AI prompts, ChatGPT prompts, YouTube script generator, YouTube prompt generator, SEO prompts, marketing prompts, Midjourney prompts"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://topaiprompts.top/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YC · AI Prompt Generator Hub for Creators"
        />
        <meta
          property="og:description"
          content="A creator-focused AI prompt hub built around scenarios and templates, starting with YouTube prompts and expanding into business, marketing, and image prompts."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-semibold text-white">
                YC
              </div>
              <div className="text-sm font-semibold tracking-tight text-gray-900">
                AI Prompt Generator Hub
              </div>
            </div>
            <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
              <span className="font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Home</span>
              <Link
                href="/script-tools"
                className="text-gray-500 hover:text-gray-900"
              >
                Script Tools
              </Link>
              <Link
                href="/optimization-tools"
                className="text-gray-500 hover:text-gray-900"
              >
                Optimization Tools
              </Link>
              <Link
                href="/growth-tools"
                className="text-gray-500 hover:text-gray-900"
              >
                Growth Tools
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 lg:px-8 lg:pt-16">
          <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                Prompt Hub for Creators
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Free AI Prompt Generator Hub for Content Makers
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Generate high-impact prompts for YouTube, blogs, marketing, and
                more in seconds. Free, fast, and built so you can create more
                content without losing your voice.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/youtube-script-prompt-generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Try It Now — Start Prompting
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-400 hover:bg-white"
                >
                  Learn How It Works
                </Link>
                <p className="w-full text-xs text-gray-500 sm:w-auto">
                  Free • Instant • No login required
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Focus</dt>
                  <dd>YouTube creators and creative teams</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Ecosystem</dt>
                  <dd>Scripts, hooks, titles, descriptions</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>ChatGPT, Claude, Gemini, more</dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/youtube-script-prompt-generator"
                className="group flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                    Core tool
                  </p>
                  <h2 className="mt-2 text-sm font-semibold text-gray-900">
                    YouTube Script Prompt Generator
                  </h2>
                  <p className="mt-2 text-xs text-gray-600">
                    Turn your idea and niche into a long, structured prompt that
                    instructs AI to write high-retention scripts.
                  </p>
                </div>
                <span className="mt-3 text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                  Open script prompt →
                </span>
              </Link>

              <Link
                href="/youtube-hook-generator"
                className="group flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Hooks
                  </p>
                  <h2 className="mt-2 text-sm font-semibold text-gray-900">
                    YouTube Hook Generator
                  </h2>
                  <p className="mt-2 text-xs text-gray-600">
                    Brief AI to write multiple hook ideas for the same video so
                    you can test intros that actually stop the scroll.
                  </p>
                </div>
                <span className="mt-3 text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                  Open hook prompt →
                </span>
              </Link>

              <Link
                href="/youtube-title-generator"
                className="group flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Titles
                  </p>
                  <h2 className="mt-2 text-sm font-semibold text-gray-900">
                    YouTube Title Generator
                  </h2>
                  <p className="mt-2 text-xs text-gray-600">
                    Generate a board of title angles that balance click-through,
                    search keywords, and your own brand voice.
                  </p>
                </div>
                <span className="mt-3 text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                  Open title prompt →
                </span>
              </Link>

              <Link
                href="/youtube-description-generator"
                className="group flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                    Descriptions
                  </p>
                  <h2 className="mt-2 text-sm font-semibold text-gray-900">
                    YouTube Description Generator
                  </h2>
                  <p className="mt-2 text-xs text-gray-600">
                    Turn your script into a search-friendly description with
                    clear links, CTAs, and hashtag suggestions.
                  </p>
                </div>
                <span className="mt-3 text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                  Open description prompt →
                </span>
              </Link>
            </div>
          </section>

          <section className="mt-16 grid gap-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Why Use This Prompt Hub
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                A focused system for creators who care about results, not just
                trying another AI toy.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-gray-700 lg:col-span-3 lg:grid-cols-3">
              <div className="flex gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Faster prompt creation
                  </h3>
                  <p className="mt-1 text-xs text-gray-600">
                    Turn ideas into structured prompts in minutes instead of
                    rewriting the same instructions every time.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    AI-optimized outputs
                  </h3>
                  <p className="mt-1 text-xs text-gray-600">
                    Each tool is built around how models like ChatGPT and Claude
                    actually respond, not generic “write me X” prompts.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    One system, many channels
                  </h3>
                  <p className="mt-1 text-xs text-gray-600">
                    Reuse the same scaffold across YouTube, SEO articles, email
                    campaigns, and product pages so everything stays aligned.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 lg:col-span-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                  4
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Free, no login, creator-first
                  </h3>
                  <p className="mt-1 text-xs text-gray-600">
                    Use the tools as often as you like. No accounts, no credits,
                    just a lean toolkit for serious creators.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="how-it-works"
            className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]"
          >
            <article className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  How This Creator-Focused Prompt Hub Works
                </h2>
                <p className="text-sm text-gray-700">
                  Most “AI tool collections” on the internet are built for
                  everyone and therefore work for almost no one. They list
                  dozens of tools in every category and leave you to figure out
                  which ones fit your workflow. This hub takes a different
                  approach: it focuses on one ecosystem, YouTube, and on one
                  type of user, creators.
                </p>
                <p className="text-sm text-gray-700">
                  By narrowing the scope to YouTube script prompts, hooks,
                  titles, and descriptions, each tool can be opinionated. The
                  UX, the copy, and even the example prompts are written with
                  real creator problems in mind: publishing consistently,
                  improving retention, and turning views into a business.
                </p>
                <p className="text-sm text-gray-700">
                  You do not need another dashboard to manage. You need a small
                  set of reliable prompt building blocks you can reach for every
                  time you sit down to plan content. That is what this Creator
                  Tool Hub is designed to provide.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                <h3 className="text-sm font-semibold tracking-tight text-gray-900">
                  How to use this hub in your weekly content workflow
                </h3>
                <p className="mt-2 text-xs text-gray-600">
                  Anchor the tools to a simple weekly ritual so AI becomes a
                  system, not a one-off experiment.
                </p>
                <ol className="mt-3 space-y-2 text-xs text-gray-700">
                  <li className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-700">
                      1
                    </span>
                    <span>Batch your video ideas for the upcoming week or month.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-700">
                      2
                    </span>
                    <span>
                      For each idea, start on the script prompt page and
                      generate a detailed prompt tailored to that topic.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-700">
                      3
                    </span>
                    <span>
                      Use your preferred AI model to draft the script, then
                      refine it into your voice.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-700">
                      4
                    </span>
                    <span>
                      Visit the hook generator to brainstorm multiple openings
                      for your strongest ideas.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-700">
                      5
                    </span>
                    <span>
                      Use the title generator to explore headline variations for
                      your thumbnails.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-[11px] font-semibold text-indigo-700">
                      6
                    </span>
                    <span>
                      Finish on the description generator to prepare
                      search-friendly copy and links.
                    </span>
                  </li>
                </ol>
                <p className="mt-3 text-xs text-gray-600">
                  When this becomes a routine, you remove friction from planning
                  and spend more time filming, editing, and improving your
                  craft. AI becomes the scaffolding around your creativity, not
                  a replacement for it.
                </p>
              </div>
            </article>

            <aside className="space-y-8">
              <section>
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Who This Hub Is For
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  This setup is intentionally simple. It is aimed at:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                  <li>Solo creators who want to publish more without burning out.</li>
                  <li>Small teams managing multiple client channels.</li>
                  <li>
                    Educators and course creators turning their content into a
                    business.
                  </li>
                </ul>
              </section>

              <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Example: YouTube Script Prompt Output
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Here is what a real prompt and AI-generated script preview can
                  look like when you start from the YouTube Script Prompt
                  Generator.
                </p>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Prompt
                    </p>
                    <pre className="mt-1 max-h-32 overflow-auto rounded-md bg-gray-900 px-3 py-2 text-[11px] leading-relaxed text-gray-100">
{`Write a 9–10 minute YouTube script that helps beginner creators go
from 0 to 1,000 subscribers using a simple weekly upload system.
Use a friendly, confident tone and end with a clear call to action
to subscribe and download a free content calendar template.`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Script preview
                    </p>
                    <pre className="mt-1 max-h-40 overflow-auto rounded-md bg-gray-50 px-3 py-2 text-[11px] leading-relaxed text-gray-800">
{`[Hook] "If you can give me one hour a week, I can help you get your
first 1,000 YouTube subscribers."

[Intro] In this video, you will learn a simple weekly upload system
designed for busy beginner creators...

[Section 1] Clarify your niche and promise...

[Section 2] Plan one weekly video using a repeatable outline...

[Section 3] Batch scripts, thumbnails, and titles in one sitting...

[Close] Summarize the system and invite viewers to subscribe and
download the free Notion content calendar template.`}
                    </pre>
                  </div>
                </div>
              </section>
            </aside>
          </section>

          <section className="mt-16">
            <h2 className="text-base font-semibold tracking-tight text-gray-900">
              Tool Library
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore all the tools in this hub. Each one is designed to plug
              into the same workflow so your scripts, titles, thumbnails,
              descriptions, tags, and hashtags all work together.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 md:gridCols-3 lg:grid-cols-4">
              <Link
                href="/youtube-content-creation-guide"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Guides
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    YouTube Content Creation Guide
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Complete guide with tools for idea generation, script writing, titles, and more.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Read guide
                </span>
              </Link>
              <Link
                href="/seo-writing-guide"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Guides
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    SEO Writing Guide
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Learn how to write SEO-friendly content that ranks high on search engines.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Read guide
                </span>
              </Link>
              <Link
                href="/chatgpt-prompt-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    General
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    ChatGPT Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Build scenario-based prompts for content, marketing, or
                    learning in one place.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open generator
                </span>
              </Link>
              <Link
                href="/email-marketing-prompt-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Email Marketing Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Create newsletter and launch email prompts that connect to
                    your core content.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/blog-post-outline-prompt-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Blogging
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Blog Post Outline Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Generate detailed blog post outline prompts before you write
                    or draft with AI.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/seo-article-prompt-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    SEO
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    SEO Article Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Create long-form SEO article prompts for blogs and content
                    hubs.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/sales-copy-prompt-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Sales
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Sales Copy Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Build sales page and landing page prompts based on your
                    offer and proof.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/product-description-prompt-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Product
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Product Description Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Create product description prompts for websites,
                    marketplaces, and app stores.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-tags-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Metadata
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    YouTube Tags Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Turn your video idea into SEO-friendly tags and hashtags
                    that support discovery.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-thumbnail-prompt-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Thumbnails
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Thumbnail Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Brief AI or designers to create click-worthy thumbnails that
                    match your titles.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-video-idea-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Ideas
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Video Idea Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Generate strategic video ideas and series that fit your
                    niche and schedule.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-script-outline-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Structure
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Script Outline Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Plan high-retention videos with clear sections before you
                    write every line.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-seo-title-analyzer"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    SEO Titles
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    SEO Title Analyzer
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Analyze and upgrade your YouTube titles for clicks and
                    search.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-hashtag-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Hashtags
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Hashtag Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Create hashtag sets for YouTube and other platforms without
                    starting from zero.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/faceless-youtube-script-prompt"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Faceless Scripts
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Faceless YouTube Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Generate prompts tailored to faceless channels that rely on
                    B-roll and narration.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-shorts-script-generator"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Shorts
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    YouTube Shorts Script Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Build prompts for short, vertical videos that need fast
                    hooks and pacing.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/youtube-automation-script-prompt"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Automation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    YouTube Automation Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Create prompts built for outsourced, systemized YouTube
                    automation channels.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/educational-youtube-script-template"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Education
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Educational YouTube Script Template
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Use ready-made templates for course-style, lesson-focused
                    YouTube videos.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/documentary-script-prompt"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Documentary
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Documentary Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Build prompts for narrative and documentary-style
                    storytelling on YouTube.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
              <Link
                href="/storytelling-script-prompt"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Storytelling
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Storytelling Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Craft prompts for story-first content, case studies, and
                    narrative-driven videos.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                  Open tool
                </span>
              </Link>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Popular Tools
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/youtube-script-prompt-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Script Prompt Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-hook-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Hook Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-title-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Title Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-description-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Description Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-thumbnail-prompt-generator"
                      className="hover:text-gray-900"
                    >
                      Thumbnail Prompt Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-tags-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Tags Generator
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Script Systems
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/youtube-script-outline-generator"
                      className="hover:text-gray-900"
                    >
                      Script Outline Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faceless-youtube-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Faceless YouTube Script Prompt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-shorts-script-generator"
                      className="hover:text-gray-900"
                    >
                      Shorts Script Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-automation-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Automation Script Prompt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/educational-youtube-script-template"
                      className="hover:text-gray-900"
                    >
                      Educational Script Template
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentary-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Documentary Script Prompt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/storytelling-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Storytelling Script Prompt
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Categories
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/script-tools" className="hover:text-gray-900">
                      Script Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/optimization-tools"
                      className="hover:text-gray-900"
                    >
                      Optimization Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/growth-tools"
                      className="hover:text-gray-900"
                    >
                      Growth Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-video-idea-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Video Idea Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-hashtag-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Hashtag Generator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-400">
              Built for long-term YouTube creator workflows, not generic AI
              demos.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
