import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const CAMPAIGN_TYPES = [
  "Newsletter",
  "Product launch sequence",
  "Onboarding sequence",
  "Nurture sequence",
  "Re-engagement campaign",
];

const LENGTHS = ["Single email", "3-email sequence", "5-email sequence", "7-email sequence"];

const TONES = [
  "Friendly expert",
  "Direct response",
  "Educational and calm",
  "High-energy launch",
];

function buildEmailPrompt(options: {
  campaignType: string;
  audience: string;
  offer: string;
  mainGoal: string;
  length: string;
  tone: string;
}) {
  const { campaignType, audience, offer, mainGoal, length, tone } = options;

  return [
    `You are an experienced email marketer and copywriter.`,
    ``,
    `Write a ${length || "3-email sequence"} for the following email marketing campaign:`,
    ``,
    `1) Campaign type: ${campaignType || "Nurture sequence"}`,
    audience
      ? `2) Audience: ${audience}`
      : `2) Audience: creators, solo founders, or marketers who already follow my content but have not bought yet.`,
    offer
      ? `3) Main offer or product: ${offer}`
      : `3) Main offer or product: a practical program or product that helps the reader get a specific result.`,
    mainGoal
      ? `4) Primary goal: ${mainGoal}`
      : `4) Primary goal: move readers from interest to taking a clear, low-friction next step.`,
    tone
      ? `5) Tone of voice: ${tone}`
      : `5) Tone of voice: friendly expert, clear and direct without hype.`,
    ``,
    `Structure requirements:`,
    `- For sequences, outline each email with a subject line, preview text, and the core narrative arc.`,
    `- Make every email valuable on its own, not just a teaser for the offer.`,
    `- Use simple language, short paragraphs, and clear calls to action.`,
    `- Include 1–2 story or example ideas the sender could adapt from their own experience.`,
    `- Make the pacing feel natural: awareness, interest, evaluation, and a decision, without pressure or gimmicks.`,
    ``,
    `Formatting:`,
    `- Present the sequence with clear labels like "Email 1", "Email 2", etc.`,
    `- Under each email, provide bullet points for key beats so the sender can customise before sending.`,
  ].join("\n");
}

export default function EmailMarketingPromptGeneratorPage() {
  const [campaignType, setCampaignType] = useState(CAMPAIGN_TYPES[0]);
  const [audience, setAudience] = useState("");
  const [offer, setOffer] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [length, setLength] = useState(LENGTHS[1]);
  const [tone, setTone] = useState(TONES[0]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildEmailPrompt({
        campaignType,
        audience,
        offer,
        mainGoal,
        length,
        tone,
      }),
    [campaignType, audience, offer, mainGoal, length, tone]
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
          Email Marketing Prompt Generator (AI Tool for Campaigns &amp;
          Newsletters)
        </title>
        <meta
          name="description"
          content="Generate email marketing prompts for newsletters and launch sequences. Turn your offer, audience, and goal into a structured prompt for ChatGPT."
        />
        <meta
          name="keywords"
          content="email marketing prompt generator, newsletter prompts, launch email prompts, ChatGPT email sequence, AI email copy"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/email-marketing-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Email Marketing Prompt Generator" />
        <meta
          property="og:description"
          content="Use this email marketing prompt generator to brief ChatGPT for newsletters, launch sequences, and nurture campaigns."
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
                Email Marketing Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Email Marketing Prompt Generator for Newsletters and Launches
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Use this builder to turn your offer, audience, and campaign goal
                into a detailed email marketing prompt. Instead of asking
                ChatGPT to “write a launch email”, you give it a clear brief for
                a sequence designed to actually move readers.
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
                ,{" "}
                <Link href="/sales-copy-prompt-generator">
                  Sales Copy Prompt Generator
                </Link>
                , and{" "}
                <Link href="/product-description-prompt-generator">
                  Product Description Prompt Generator
                </Link>{" "}
                to keep your email campaigns aligned with your content, sales
                pages, and product copy. All of these tools live under the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                , so your prompts become a system instead of one-off messages.
              </p>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Creators, solo founders, small teams</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>ChatGPT, Claude, Gemini</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Campaigns</dt>
                  <dd>Newsletters, launches, onboarding, re-engagement</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Email Marketing Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in the details and get a long, structured prompt you can
                paste into ChatGPT or any AI writing tool.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Campaign type
                  </label>
                  <select
                    value={campaignType}
                    onChange={(e) => setCampaignType(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {CAMPAIGN_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. new subscribers, existing customers, inactive subscribers"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main offer or product
                  </label>
                  <textarea
                    placeholder="e.g. a cohort-based course, a SaaS product, a 1:1 service, or a low-ticket lead product"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary goal
                  </label>
                  <textarea
                    placeholder="e.g. book 20 strategy calls, sell 50 seats in a program, bring inactive subscribers back to weekly opens"
                    value={mainGoal}
                    onChange={(e) => setMainGoal(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Sequence length
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
                  customise the final copy to match your brand voice and list.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use This Email Marketing Prompt Generator</h2>
              <p>
                This page is for creators and teams who want email campaigns
                that feel human, not like a random AI template. You give AI the
                job of drafting, but you stay in control of the offer, the
                pacing, and the calls to action.
              </p>
              <p>
                Start by choosing the campaign type and sequence length. Then
                define who the emails are for and what offer you are moving them
                towards. The generator turns that into a prompt that tells
                ChatGPT exactly how to structure the sequence so each email
                earns its place in the inbox.
              </p>

              <h2>Best Practices for AI-Assisted Email Campaigns</h2>
              <p>
                AI can write quickly, but you still need a clear spine for your
                campaign. A few guidelines that help:
              </p>
              <ul>
                <li>
                  Make every email valuable even if the reader never buys. It
                  should teach, clarify, or reframe something important.
                </li>
                <li>
                  Vary the angle across the sequence: stories, objections,
                  social proof, behind-the-scenes, and direct invitations.
                </li>
                <li>
                  Edit heavily for tone so it sounds like you and fits what your
                  list expects from you.
                </li>
              </ul>
              <p>
                You can pair this generator with the{" "}
                <Link href="/blog-post-outline-prompt-generator">
                  Blog Post Outline Prompt
                </Link>{" "}
                and{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>{" "}
                to run campaigns that connect your articles, videos, and emails
                around a single theme.
              </p>

              <h2>Example Email Marketing Prompts</h2>
              <p>
                Here are a few scenarios where this generator works especially
                well:
              </p>
              <ul>
                <li>
                  A 5-email launch sequence for a YouTube strategy course,
                  linking back to your best SEO articles and videos.
                </li>
                <li>
                  A re-engagement campaign for inactive subscribers who have not
                  opened in 90 days.
                </li>
                <li>
                  An onboarding sequence that helps new buyers get value from a
                  SaaS product in the first week.
                </li>
              </ul>
              <p>
                As your prompt library grows, you can keep this page as the hub
                for all email-related prompts, connected to the{" "}
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
                  Use these tools together to align your email campaigns with
                  your content and offers.
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
                    href="/seo-article-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        SEO Article Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Create long-form drafts that your emails can point back
                        to.
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
                      <p className="text-sm font-semibold text-gray-900">
                        Blog Post Outline Prompt
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Plan supporting articles for your email campaigns.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
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
                        Align your emails with a video content series.
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
