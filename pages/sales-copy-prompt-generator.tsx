import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const FUNNEL_STAGES = [
  "Cold traffic (first touch)",
  "Problem-aware but not solution-aware",
  "Solution-aware comparing options",
  "Warm audience (email list or followers)",
  "Existing customers for an upsell",
];

const FORMATS = [
  "Long-form sales page",
  "Short landing page",
  "Video sales letter script outline",
  "Social sales thread outline",
];

const TONES = [
  "Calm and confident",
  "Direct response with clear urgency",
  "Educational and story-driven",
  "Premium and minimal",
];

function buildSalesCopyPrompt(options: {
  offerName: string;
  audience: string;
  coreOutcome: string;
  keyObjections: string;
  proofAssets: string;
  funnelStage: string;
  format: string;
  tone: string;
}) {
  const {
    offerName,
    audience,
    coreOutcome,
    keyObjections,
    proofAssets,
    funnelStage,
    format,
    tone,
  } = options;

  return [
    `You are a senior conversion copywriter and strategist.`,
    ``,
    `Write a ${format || "long-form sales page"} for the following offer:`,
    ``,
    `1) Offer name: ${offerName || "a practical, implementation-focused program or product"}`,
    audience
      ? `2) Ideal customer: ${audience}`
      : `2) Ideal customer: creators, founders, or marketers who are already trying to get results but feel stuck.`,
    coreOutcome
      ? `3) Core outcome or transformation: ${coreOutcome}`
      : `3) Core outcome or transformation: help the customer get a specific, measurable result faster and with less guesswork.`,
    funnelStage
      ? `4) Funnel stage: ${funnelStage}`
      : `4) Funnel stage: warm audience that already knows me from content.`,
    keyObjections
      ? `5) Key objections or fears to address: ${keyObjections}`
      : `5) Key objections or fears to address: price, time, fear of “this will not work for me”, and skepticism from past courses or products.`,
    proofAssets
      ? `6) Proof and assets available: ${proofAssets}`
      : `6) Proof and assets available: case studies, testimonials, screenshots of dashboards, or examples of real work.`,
    tone
      ? `7) Tone of voice: ${tone}`
      : `7) Tone of voice: calm, honest, and confident. No hype.`,
    ``,
    `Copy requirements:`,
    `- Open with a vivid problem and a clear promise that respects the reader's intelligence.`,
    `- Use specific, concrete language instead of vague claims.`,
    `- Weave in proof naturally instead of dumping testimonials in one block.`,
    `- Address the main objections with empathy and clarity, not pressure.`,
    `- Include a clear call to action with a simple next step.`,
    ``,
    `Structure:`,
    `- Use clear sections with headings the reader can scan.`,
    `- Suggest where screenshots, testimonials, or short video clips could go.`,
    `- End with a short FAQ that handles the last remaining doubts.`,
  ].join("\n");
}

export default function SalesCopyPromptGeneratorPage() {
  const [offerName, setOfferName] = useState("");
  const [audience, setAudience] = useState("");
  const [coreOutcome, setCoreOutcome] = useState("");
  const [keyObjections, setKeyObjections] = useState("");
  const [proofAssets, setProofAssets] = useState("");
  const [funnelStage, setFunnelStage] = useState(FUNNEL_STAGES[3]);
  const [format, setFormat] = useState(FORMATS[0]);
  const [tone, setTone] = useState(TONES[0]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildSalesCopyPrompt({
        offerName,
        audience,
        coreOutcome,
        keyObjections,
        proofAssets,
        funnelStage,
        format,
        tone,
      }),
    [
      offerName,
      audience,
      coreOutcome,
      keyObjections,
      proofAssets,
      funnelStage,
      format,
      tone,
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
        <title>Sales Copy Prompt Generator</title>
        <meta
          name="description"
          content="Generate sales copy prompts for long-form pages, landing pages, and VSLs. Turn your offer and audience into a structured brief for ChatGPT."
        />
        <meta
          name="keywords"
          content="sales copy prompt generator, landing page prompts, sales page prompt, ChatGPT sales copy, AI copywriting"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/sales-copy-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sales Copy Prompt Generator" />
        <meta
          property="og:description"
          content="Use this sales copy prompt generator to brief ChatGPT for landing pages, sales pages, and launch campaigns."
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
                Sales Copy Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Sales Copy Prompt Generator for Landing Pages and Launches
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Use this builder to turn your offer, audience, and proof into a
                detailed prompt for sales copy. Instead of asking ChatGPT to
                “write a sales page”, you give it a clear brief that respects
                your positioning and the reader&apos;s attention.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Combine this page with the{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>
                ,{" "}
                <Link href="/blog-post-outline-prompt-generator">
                  Blog Post Outline Prompt
                </Link>
                , and{" "}
                <Link href="/email-marketing-prompt-generator">
                  Email Marketing Prompt Generator
                </Link>{" "}
                to keep your sales pages aligned with your content and email
                campaigns. All of these live under the{" "}
                <Link href="/">AI Prompt Generator Hub</Link>
                .
              </p>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Creators, course builders, SaaS, service businesses</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Formats</dt>
                  <dd>Sales pages, landing pages, VSL outlines</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>ChatGPT, Claude, Gemini</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Sales Copy Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in the essentials and get a long, structured prompt you can
                paste into ChatGPT or any AI writing tool.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Offer name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. YouTube Content System, Creator Operating System, SaaS product"
                    value={offerName}
                    onChange={(e) => setOfferName(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Ideal audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. full-time creators, B2B marketers, indie SaaS founders"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Core outcome or transformation
                  </label>
                  <textarea
                    placeholder="e.g. publish 2 high-quality videos per week, double qualified leads, reduce churn in 90 days"
                    value={coreOutcome}
                    onChange={(e) => setCoreOutcome(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Key objections or fears
                  </label>
                  <textarea
                    placeholder="e.g. pricing, time commitment, fear of not being technical enough, past bad experiences"
                    value={keyObjections}
                    onChange={(e) => setKeyObjections(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Proof and assets available
                  </label>
                  <textarea
                    placeholder="e.g. 5 client case studies, 20+ testimonials, screenshots of analytics, before/after examples"
                    value={proofAssets}
                    onChange={(e) => setProofAssets(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Funnel stage
                  </label>
                  <select
                    value={funnelStage}
                    onChange={(e) => setFunnelStage(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {FUNNEL_STAGES.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {FORMATS.map((f) => (
                      <option key={f} value={f}>
                        {f}
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
                  then edit the draft to sound like you and match your brand.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use This Sales Copy Prompt Generator</h2>
              <p>
                This page is for when you are close to an offer you believe in,
                but you do not want AI to invent the positioning for you. You
                use AI as a drafting partner, not as the strategist.
              </p>
              <p>
                Start by writing down who the offer is for and the concrete
                outcome it delivers. Then list the real objections you have
                heard from customers. The generator turns that into a prompt
                that tells ChatGPT exactly how to structure the page and where
                to lean on proof.
              </p>

              <h2>Best Practices for AI-Assisted Sales Pages</h2>
              <p>
                AI can help you get an ugly first draft quickly, but you still
                need to shape the message:
              </p>
              <ul>
                <li>
                  Keep the promises specific and grounded. Avoid generic “make
                  more money” claims.
                </li>
                <li>
                  Talk directly to one reader. It should feel like a 1:1
                  conversation, not an announcement.
                </li>
                <li>
                  Rewrite any lines that sound like generic internet copy until
                  they sound like you.
                </li>
              </ul>
              <p>
                You can pair this generator with the{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>
                ,{" "}
                <Link href="/blog-post-outline-prompt-generator">
                  Blog Post Outline Prompt
                </Link>
                ,{" "}
                <Link href="/email-marketing-prompt-generator">
                  Email Marketing Prompt Generator
                </Link>
                , and{" "}
                <Link href="/product-description-prompt-generator">
                  Product Description Prompt Generator
                </Link>{" "}
                to keep your entire funnel connected.
              </p>

              <h2>Example Sales Copy Prompts</h2>
              <p>
                A few situations where this page works especially well:
              </p>
              <ul>
                <li>
                  A long-form sales page for a YouTube content system that ties
                  together your videos, SEO articles, and email list.
                </li>
                <li>
                  A launch page for a new cohort-based program with limited
                  seats and a clear deadline.
                </li>
                <li>
                  A simple landing page for a low-ticket product that leads into
                  a bigger offer later.
                </li>
              </ul>
              <p>
                As your prompt library grows, you can treat this page as the hub
                for high-intent sales copy, connected to the{" "}
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
                  Use these tools together to keep your traffic, content, and
                  sales pages working as one system.
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
                        Design general prompts for research, drafting, and
                        editing.
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
                      <p className="text-sm font-semibold text-gray-900">
                        Email Marketing Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Build prompts for newsletters and launch email
                        sequences.
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
                      <p className="text-sm font-semibold text-gray-900">
                        Product Description Prompt
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Generate product descriptions that stay consistent with
                        your main sales page.
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
                        Draft long-form content that supports your sales page.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
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
