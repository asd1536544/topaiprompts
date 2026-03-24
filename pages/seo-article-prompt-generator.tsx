import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const INTENTS = [
  "Top-of-funnel education",
  "Product-led SEO",
  "Comparison or alternatives",
  "Problem–solution deep dive",
  "Case study or story",
];

const LENGTHS = [
  "1200–1800 words",
  "1800–2500 words",
  "2500+ words",
  "Long-form pillar article",
];

const STRUCTURES = [
  "How-to guide with clear steps",
  "List post with deep explanations",
  "Problem–solution narrative",
  "Comparison article with pros and cons",
];

function buildSeoPrompt(options: {
  topic: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  audience: string;
  searchIntent: string;
  articleLength: string;
  structure: string;
  productAngle: string;
}) {
  const {
    topic,
    primaryKeyword,
    secondaryKeywords,
    audience,
    searchIntent,
    articleLength,
    structure,
    productAngle,
  } = options;

  return [
    `You are an SEO strategist and senior content writer.`,
    ``,
    `Write a long-form SEO article based on the following brief:`,
    ``,
    `1) Core topic: ${topic || "SEO content strategy for creators and small businesses"}`,
    `2) Primary keyword: ${primaryKeyword || "SEO content strategy"}`,
    secondaryKeywords
      ? `3) Secondary keywords to naturally include: ${secondaryKeywords}`
      : `3) Secondary keywords: cover related phrases a reader would naturally search for.`,
    `4) Target audience: ${audience || "beginner to intermediate content creators"} `,
    `5) Search intent: ${searchIntent || "Top-of-funnel education"}`,
    `6) Target length: ${articleLength || "1800–2500 words"}`,
    `7) Preferred structure: ${structure || "How-to guide with clear steps"}`,
    productAngle
      ? `8) Product or offer angle: ${productAngle}`
      : `8) Product or offer angle: softly introduce a relevant product or service only where it adds value.`,
    ``,
    `Structural requirements:`,
    `- Start with an introduction that speaks directly to the reader's current problem and what they will learn.`,
    `- Use clear H2 and H3 headings that align with how someone would scan the page from a search result.`,
    `- For each section, include specific examples, mini frameworks, or step-by-step instructions.`,
    `- End with a summary and a practical next step the reader can take today.`,
    ``,
    `SEO and writing guidelines:`,
    `- Naturally weave the primary keyword into the title, introduction, at least one H2, and the conclusion.`,
    `- Use secondary keywords where it feels natural, not forced.`,
    `- Write in clear, accessible English without jargon, as if coaching a motivated beginner.`,
    `- Avoid fluffy filler; every paragraph should teach, clarify, or help the reader take action.`,
    `- Include occasional prompts or questions the reader can use with ChatGPT to go deeper on subtopics.`,
  ].join("\n");
}

export default function SeoArticlePromptGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [audience, setAudience] = useState("");
  const [searchIntent, setSearchIntent] = useState(INTENTS[0]);
  const [articleLength, setArticleLength] = useState(LENGTHS[1]);
  const [structure, setStructure] = useState(STRUCTURES[0]);
  const [productAngle, setProductAngle] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildSeoPrompt({
        topic,
        primaryKeyword,
        secondaryKeywords,
        audience,
        searchIntent,
        articleLength,
        structure,
        productAngle,
      }),
    [
      topic,
      primaryKeyword,
      secondaryKeywords,
      audience,
      searchIntent,
      articleLength,
      structure,
      productAngle,
    ]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          SEO Article Prompt Generator (Free AI Tool for Long-Form Content)
        </title>
        <meta
          name="description"
          content="Generate detailed SEO article prompts for long-form blog posts. Turn your topic, keywords, and intent into a clear brief for ChatGPT or any AI writer."
        />
        <meta
          name="keywords"
          content="SEO article prompt, blog post prompt generator, AI SEO content, ChatGPT SEO prompts, long-form article prompts"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/seo-article-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="SEO Article Prompt Generator for Long-Form Content"
        />
        <meta
          property="og:description"
          content="Use this SEO article prompt generator to brief ChatGPT for long-form, search-focused articles without starting from a blank page."
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
              <Link href="/" className="font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full hover:text-indigo-700 hover:bg-indigo-100 transition-colors duration-200">
                Home
              </Link>
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
          <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                SEO Article Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                SEO Article Prompt Generator for Long-Form Blog Posts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Use this page to turn your topic, keywords, and search intent
                into a detailed prompt for ChatGPT or any AI writer. Instead of
                “write a blog post about X”, you give the model a strategic brief
                that is built to rank and still read like a human wrote it.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                This tool works well alongside the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                as your general prompt system. You can design your global prompt
                patterns there and then use this page when you need a focused
                SEO article or pillar post.
              </p>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Bloggers, content teams, niche site owners</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>ChatGPT, Claude, Gemini, any AI writer</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Article type</dt>
                  <dd>Guides, comparisons, product-led SEO, case studies</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                SEO Article Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in the brief and get a long, structured prompt you can
                paste into ChatGPT or any AI writing tool.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Core topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SEO content strategy for YouTube creators"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary keyword
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. YouTube SEO strategy, content marketing for coaches"
                    value={primaryKeyword}
                    onChange={(e) => setPrimaryKeyword(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Secondary keywords (optional)
                  </label>
                  <textarea
                    placeholder="e.g. related phrases, questions, or long-tail keywords separated by commas"
                    value={secondaryKeywords}
                    onChange={(e) => setSecondaryKeywords(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. beginner creators, B2B marketers, course creators"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Search intent
                  </label>
                  <select
                    value={searchIntent}
                    onChange={(e) => setSearchIntent(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {INTENTS.map((intent) => (
                      <option key={intent} value={intent}>
                        {intent}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target length
                  </label>
                  <select
                    value={articleLength}
                    onChange={(e) => setArticleLength(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {LENGTHS.map((len) => (
                      <option key={len} value={len}>
                        {len}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Preferred article structure
                  </label>
                  <select
                    value={structure}
                    onChange={(e) => setStructure(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {STRUCTURES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Product or offer angle (optional)
                  </label>
                  <textarea
                    placeholder="e.g. mention my YouTube strategy course, introduce a SaaS product as a natural next step"
                    value={productAngle}
                    onChange={(e) => setProductAngle(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-gray-700">
                    Generated prompt
                  </p>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  >
                    {copied ? "Copied" : "Copy prompt"}
                  </button>
                </div>
                <textarea
                  readOnly
                  value={prompt}
                  className="h-52 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 shadow-inner outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <p className="text-[11px] text-gray-500">
                  Paste this into ChatGPT, Claude, or any AI writing tool. Edit
                  the prompt and the final article to match your brand voice and
                  expertise.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use This SEO Article Prompt Generator</h2>
              <p>
                This page is designed for long-form, search-focused content. You
                can use it whether you are running a niche blog, a content-heavy
                SaaS site, or a personal brand. The goal is to give AI the kind
                of brief a senior content strategist would write, not a vague
                one-liner.
              </p>
              <p>
                Start by defining a clear topic and primary keyword. Then, think
                about the real human behind the search. What problem are they
                trying to solve? What decision are they trying to make? Choose a
                search intent that matches that moment, then set a realistic
                target length and structure. The generator turns this into a
                reusable prompt you can keep in your prompt library.
              </p>

              <h2>Best Practices for AI-Generated SEO Articles</h2>
              <p>
                AI can draft a lot of words quickly, but ranking and conversions
                still come from clarity, specificity, and real expertise. A few
                guidelines that help:
              </p>
              <ul>
                <li>
                  Use AI to produce a strong first draft, then edit for nuance,
                  examples, and internal links.
                </li>
                <li>
                  Avoid stuffing every keyword variation into the text. Prioritise
                  readability first.
                </li>
                <li>
                  Add screenshots, stories, and real data that only you or your
                  team can provide.
                </li>
              </ul>
              <p>
                You can combine this generator with the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                to design a library of prompts for every stage of your content
                system, from ideation to outlining and revising.
              </p>

              <h2>Example SEO Article Prompts You Can Build</h2>
              <p>
                Here are a few scenarios where this page works especially well:
              </p>
              <ul>
                <li>
                  A pillar guide on how to build a YouTube content system that
                  drives traffic back to an email list.
                </li>
                <li>
                  A comparison article on different AI tools for scriptwriting,
                  outlining their strengths and weaknesses.
                </li>
                <li>
                  A problem–solution deep dive on why some blogs do not convert
                  and how to fix the offer and call to action.
                </li>
              </ul>
              <p>
                As your site grows, you can build additional pages around this
                one, such as{" "}
                <Link href="/blog-post-outline-prompt-generator">
                  blog post outline prompts
                </Link>
                ,{" "}
                <Link href="/email-marketing-prompt-generator">
                  email sequence prompts
                </Link>
                ,{" "}
                <Link href="/sales-copy-prompt-generator">
                  landing page copy prompts
                </Link>
                , all pointing back to your{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                and the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                .
              </p>
            </article>

            <aside className="space-y-8">
              <section>
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Related Prompt Tools
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Use these tools together to connect your SEO content with
                  YouTube and other channels.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/chatgpt-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        ChatGPT Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Build general-purpose prompts that work across content
                        and marketing.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open generator
                    </span>
                  </Link>
                  <Link
                    href="/youtube-script-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Script Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Turn SEO topics into scripts that push readers to your
                        channel and offers.
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
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Video Idea Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Turn your SEO topics into video ideas to repurpose your
                        best articles.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/optimization-tools"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Optimization Tools
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Connect your SEO content and videos with titles, thumbs,
                        and descriptions.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      View category
                    </span>
                  </Link>
                </div>
              </section>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}
