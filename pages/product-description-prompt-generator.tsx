import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const PLATFORMS = [
  "Website or landing page",
  "Amazon or marketplace listing",
  "Shopify or ecommerce store",
  "App store listing",
  "Internal catalog or sales deck",
];

const LENGTHS = [
  "Short blurb (1–2 sentences)",
  "Medium description (3–5 sentences)",
  "Long description (sectioned copy)",
];

const TONES = [
  "Clear and straightforward",
  "Premium and aspirational",
  "Friendly and conversational",
  "Technical but accessible",
];

function buildProductDescriptionPrompt(options: {
  productName: string;
  category: string;
  audience: string;
  mainBenefit: string;
  keyFeatures: string;
  platform: string;
  length: string;
  tone: string;
}) {
  const {
    productName,
    category,
    audience,
    mainBenefit,
    keyFeatures,
    platform,
    length,
    tone,
  } = options;

  return [
    `You are a product marketer and copywriter.`,
    ``,
    `Write a ${length || "medium description (3–5 sentences)"} for the following product:`,
    ``,
    productName
      ? `1) Product name: ${productName}`
      : `1) Product name: a clear, benefit-driven product name.`,
    category
      ? `2) Category: ${category}`
      : `2) Category: a software product or program that helps the user get a specific outcome.`,
    audience
      ? `3) Ideal customer or audience: ${audience}`
      : `3) Ideal customer or audience: creators, founders, or marketers who are actively trying to improve their results.`,
    mainBenefit
      ? `4) Core benefit or promise: ${mainBenefit}`
      : `4) Core benefit or promise: help the user get a visible, measurable result with less friction.`,
    keyFeatures
      ? `5) Key features or components: ${keyFeatures}`
      : `5) Key features or components: list the main elements that make the product work.`,
    platform
      ? `6) Platform or context: ${platform}`
      : `6) Platform or context: website product page.`,
    tone
      ? `7) Tone of voice: ${tone}`
      : `7) Tone of voice: clear, friendly, and specific.`,
    ``,
    `Copy requirements:`,
    `- Lead with the benefit and outcome, then support it with features.`,
    `- Use concrete language instead of buzzwords.`,
    `- Make it easy for the reader to imagine using the product.`,
    `- If appropriate, suggest one or two short bullet points for key features.`,
    ``,
    `Formatting:`,
    `- Adapt the style to the platform mentioned above.`,
    `- Keep the description scannable with short sentences and simple phrasing.`,
  ].join("\n");
}

export default function ProductDescriptionPromptGeneratorPage() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [audience, setAudience] = useState("");
  const [mainBenefit, setMainBenefit] = useState("");
  const [keyFeatures, setKeyFeatures] = useState("");
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [length, setLength] = useState(LENGTHS[1]);
  const [tone, setTone] = useState(TONES[0]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildProductDescriptionPrompt({
        productName,
        category,
        audience,
        mainBenefit,
        keyFeatures,
        platform,
        length,
        tone,
      }),
    [productName, category, audience, mainBenefit, keyFeatures, platform, length, tone]
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
        <title>Product Description Prompt Generator</title>
        <meta
          name="description"
          content="Generate product description prompts for websites, marketplaces, and app stores. Turn your product details into a clear brief for ChatGPT."
        />
        <meta
          name="keywords"
          content="product description prompt generator, product copy prompts, listing prompt, ChatGPT product description, AI product copy"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/product-description-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Product Description Prompt Generator"
        />
        <meta
          property="og:description"
          content="Use this product description prompt generator to brief ChatGPT for clear, benefit-driven product copy."
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
              <Link href="/" className="text-gray-500 hover:text-gray-900">
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
                Product Description Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Product Description Prompt Generator for Websites and Listings
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Use this builder to turn your product details into a structured
                prompt for product descriptions. Instead of asking ChatGPT to
                “write a product description”, you give it a clear brief about
                the audience, benefits, and features.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Pair this page with the{" "}
                <Link href="/sales-copy-prompt-generator">
                  Sales Copy Prompt Generator
                </Link>
                ,{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>
                , and{" "}
                <Link href="/email-marketing-prompt-generator">
                  Email Marketing Prompt Generator
                </Link>{" "}
                so that your product pages, long-form content, and email
                campaigns all tell the same story from different angles. All of
                these tools sit under the{" "}
                <Link href="/">AI Prompt Generator Hub</Link>
                .
              </p>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>SaaS, digital products, courses, ecommerce, apps</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Platforms</dt>
                  <dd>Websites, marketplaces, app stores, internal catalogs</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>ChatGPT, Claude, Gemini</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Product Description Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in the details and get a long, structured prompt you can
                paste into ChatGPT or any AI writing tool.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Product name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Creator OS, Launch Analytics, Focus Timer"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SaaS tool, cohort-based course, digital template pack"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Ideal audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. solo creators, small marketing teams, product-led founders"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Core benefit or promise
                  </label>
                  <textarea
                    placeholder="e.g. plan and publish a full content calendar in 2 hours, cut editing time in half"
                    value={mainBenefit}
                    onChange={(e) => setMainBenefit(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Key features or components
                  </label>
                  <textarea
                    placeholder="e.g. templates, analytics dashboard, community access, automation features"
                    value={keyFeatures}
                    onChange={(e) => setKeyFeatures(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Platform or context
                  </label>
                  <select
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {PLATFORMS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Length
                  </label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
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
                    Tone of voice
                  </label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {TONES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
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
                  Paste this into ChatGPT, Claude, or any AI writing tool and
                  customise the wording to match your brand and platform.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use This Product Description Prompt Generator</h2>
              <p>
                This page is for when you know what your product does, but you
                want the description to be clearer, sharper, and easier to scan.
                You bring the facts, AI helps with the first draft.
              </p>
              <p>
                Start by writing the real benefits and features, not just the
                buzzwords. The generator turns that into a prompt that tells
                ChatGPT how to talk about the product in a way your audience can
                understand quickly.
              </p>

              <h2>Best Practices for AI-Assisted Product Copy</h2>
              <p>
                Product descriptions work best when they feel simple and honest:
              </p>
              <ul>
                <li>
                  Lead with what changes for the user when they start using the
                  product.
                </li>
                <li>
                  Use feature lists to support the benefit, not the other way
                  around.
                </li>
                <li>
                  Give specific examples of how different types of users might
                  use the product.
                </li>
              </ul>
              <p>
                You can connect this generator to the{" "}
                <Link href="/sales-copy-prompt-generator">
                  Sales Copy Prompt Generator
                </Link>
                ,{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>
                , and{" "}
                <Link href="/email-marketing-prompt-generator">
                  Email Marketing Prompt Generator
                </Link>{" "}
                so that your descriptions, sales pages, and campaigns all refer
                to the same benefits and language.
              </p>

              <h2>Example Product Description Prompts</h2>
              <p>
                A few situations where this page is especially useful:
              </p>
              <ul>
                <li>
                  Writing product copy for a new SaaS launch before the main
                  sales page goes live.
                </li>
                <li>
                  Updating old marketplace listings so they match your current
                  positioning.
                </li>
                <li>
                  Creating internal descriptions for sales decks or partner
                  catalogs.
                </li>
              </ul>
              <p>
                As your library grows, you can treat this page as the hub for
                product-level prompts, alongside the{" "}
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
                  Use these tools together to keep your product copy aligned
                  with your sales pages and content.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/sales-copy-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Sales Copy Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Generate prompts for long-form sales and landing pages.
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
                      <p className="text-sm font-semibold text-gray-900">
                        SEO Article Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Draft long-form content that supports your product
                        pages.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/email-marketing-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Email Marketing Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Align your product descriptions with launch sequences
                        and newsletters.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/chatgpt-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        ChatGPT Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Build general prompts that connect across your funnel.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open generator
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
