import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const GOALS = [
  "Maximize click-through rate",
  "Rank for specific keywords",
  "Position an offer or product",
  "Grow subscribers with a series",
];

export default function YouTubeSeoTitleAnalyzerPage() {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("Maximize click-through rate");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTitle =
      title || "I tried YouTube automation for 30 days (here is what happened)";
    const baseKeyword =
      keyword || "YouTube automation for beginners";
    const baseAudience =
      audience ||
      "beginner creators who want to grow faceless channels using AI tools";

    return [
      "You are an expert YouTube SEO strategist and copywriter.",
      "",
      "Analyze and improve the YouTube title below.",
      "",
      `- Current title: ${baseTitle}`,
      `- Primary keyword to include: ${baseKeyword}`,
      `- Target audience: ${baseAudience}`,
      `- Main goal for this video: ${goal}`,
      "",
      "Requirements:",
      "- Keep the title honest while maximizing curiosity and clarity.",
      "- Maintain a natural, human tone instead of clickbait.",
      "- Stay within 55–60 characters when possible.",
      "- Ensure the main keyword (or a close variation) appears once.",
      "",
      "Output format:",
      "- First, provide a short critique of the original title (2–3 bullets).",
      "- Then, suggest 5–10 improved title options.",
      "- For each new title, include:",
      "  - The title itself",
      "  - Approximate character count",
      "  - A note on the angle (e.g. case study, how-to, story).",
    ].join("\n");
  }, [title, keyword, audience, goal]);

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
          YouTube SEO Title Analyzer (Free AI Tool for Better CTR)
        </title>
        <meta
          name="description"
          content="Analyze and improve your YouTube titles in seconds. Use this free AI prompt builder to get SEO-friendly, high-CTR YouTube title suggestions."
        />
        <meta
          name="keywords"
          content="YouTube title analyzer, YouTube SEO title, AI YouTube titles, YouTube title ideas"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-seo-title-analyzer"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube SEO Title Analyzer for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to analyze and improve YouTube titles for SEO and clicks."
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
                AI Tools for YouTube Creators
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
                YouTube SEO Title Analyzer
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Decent YouTube Titles into High-CTR Options
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Strong titles are specific, keyword-aware, and honest. This prompt
                builder helps you brief AI like a YouTube strategist so you can
                analyze and upgrade your working titles without losing your voice.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate SEO Title Analysis Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Improving existing titles</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>CTR and keyword relevance</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>ChatGPT, Claude, spreadsheets</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                SEO Title Analysis Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Paste your working title, keyword, and audience. Get a detailed
                prompt to analyze and improve it.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Current title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. I tried YouTube automation for 30 days (here is what happened)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary keyword (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. YouTube automation, faceless channels, YouTube script prompts"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. beginner creators, teachers, busy professionals"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
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
                  Paste this into ChatGPT or your favorite AI tool to analyze and
                  improve your YouTube title.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Analyze YouTube Titles</h2>
              <p>
                YouTube titles sit at the intersection of copywriting and SEO.
                They need to be clear enough for the algorithm and compelling
                enough for humans. Rather than guessing, you can use AI as a
                second set of eyes that understands both sides.
              </p>
              <p>
                When you share your current title, target keyword, audience, and
                goal, AI can point out where the title is strong and where it
                might be confusing, too vague, or missing an opportunity to be
                more specific.
              </p>
              <p>
                This SEO title analyzer prompt helps you ask for that feedback in
                a structured way so you can quickly iterate toward better ideas.
              </p>

              <h2>Best ChatGPT Prompts for YouTube SEO Titles</h2>
              <p>
                A strong YouTube title prompt does not just ask “give me better
                titles”. It explains what the video is about, who it is for, and
                what outcome you want the title to drive.
              </p>
              <p>Useful prompts usually include:</p>
              <ul>
                <li>The working title you already have.</li>
                <li>The main keyword or phrase you want to rank for.</li>
                <li>
                  The kind of viewer you want to attract and how advanced they
                  are.
                </li>
                <li>
                  The main goal, such as CTR, ranking, or selling a specific
                  offer.
                </li>
                <li>
                  Constraints like character count or words you do not want to
                  use.
                </li>
              </ul>
              <p>
                By including these details, you can ask AI to behave like a
                thoughtful editor rather than a random idea generator.
              </p>

              <h2>Step-by-Step YouTube Title Improvement Workflow</h2>
              <p>
                You can combine this title analyzer with your existing publishing
                process to improve videos without rewriting everything from
                scratch.
              </p>
              <ol>
                <li>
                  Draft your own title based on the core idea of the video and
                  your target keyword.
                </li>
                <li>
                  Use this prompt to ask AI for a critique and 5–10 alternatives.
                </li>
                <li>
                  Choose two or three options that feel the most aligned with
                  your style and test them over time.
                </li>
                <li>
                  Track which angles tend to perform best—stories, how-tos,
                  challenges, or case studies.
                </li>
                <li>
                  Save your winning patterns in a personal title swipe file so
                  you can reuse the underlying structure later.
                </li>
              </ol>
              <p>
                Over dozens of videos, this process can significantly improve
                click-through rates without turning your channel into clickbait.
              </p>

              <h2>Examples of High-Converting YouTube Title Analysis Prompts</h2>
              <p>
                The examples below show how different creators might use this tool
                to analyze and upgrade their titles. Each example includes a
                working title, audience description, and goal.
              </p>
              <p>
                You can adapt these patterns to your own videos by swapping in
                your titles, keywords, and goals.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube SEO Title Analysis Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template as a reusable YouTube SEO title prompt. It
                works whether you run a faceless channel, an educational series,
                or a product-focused channel.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste title analysis template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube SEO strategist and copywriter.

Analyze and improve the YouTube title below:
- Current title: [paste your working title]
- Primary keyword: [target keyword or phrase]
- Target audience: [who you want to attract]
- Main goal for this video: [CTR / ranking / product / subscribers]

Requirements:
- Keep the title honest while maximizing curiosity and clarity.
- Use a natural tone and avoid clickbait.
- Aim for 55–60 characters when possible.
- Ensure the main keyword (or a close variation) appears once.

Output:
- Brief critique of the original title (2–3 bullets).
- 5–10 improved title options with character counts and angle notes.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example SEO Title Analysis Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this tool
                for different channels and goals.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Faceless automation channel
                  </p>
                  <p className="mt-1">
                    Analyze and improve the title{" "}
                    <span className="font-medium">
                      &quot;I let AI run my YouTube channel for 30 days&quot;
                    </span>{" "}
                    for{" "}
                    <span className="font-medium">
                      beginners interested in YouTube automation
                    </span>
                    . The main goal is to{" "}
                    <span className="font-medium">
                      maximize CTR while staying honest
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Educational coding channel
                  </p>
                  <p className="mt-1">
                    Improve the title{" "}
                    <span className="font-medium">
                      &quot;Learn React in 2026 (full course)&quot;
                    </span>{" "}
                    for{" "}
                    <span className="font-medium">
                      complete beginners who feel overwhelmed by JavaScript
                    </span>
                    . The goal is to{" "}
                    <span className="font-medium">
                      attract serious students, not casual viewers
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Notion productivity channel
                  </p>
                  <p className="mt-1">
                    Analyze and suggest better versions of{" "}
                    <span className="font-medium">
                      &quot;My Notion setup for YouTube&quot;
                    </span>{" "}
                    aimed at{" "}
                    <span className="font-medium">
                      part-time creators who want a simple system to post weekly
                    </span>
                    . The goal is to{" "}
                    <span className="font-medium">
                      drive views to a Notion template funnel
                    </span>
                    .
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 grid gap-4 text-sm text-gray-700 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How long should a YouTube title be for SEO?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many successful titles fall between 50 and 60 characters,
                    which is often short enough to display fully while still
                    including a clear promise and keyword.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Do I need my exact keyword in the title?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It is helpful but not mandatory. A close variation that reads
                    naturally is usually better than forcing an awkward phrase
                    just for SEO.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I reuse title structures across videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Many creators build a library of proven title formulas
                    and reuse the structure while swapping in new topics and
                    keywords.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How often should I update old YouTube titles?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    If a strong video underperforms, testing a new title can be
                    worthwhile. Avoid changing titles too frequently, but do
                    revisit older uploads with potential.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does this work for faceless channels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can mention that your channel is faceless or
                    automation-focused so AI suggests titles that highlight the
                    model, workflow, or outcome instead of personality.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should I write titles before or after recording?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators draft a working title before recording to guide
                    the script, then refine it after editing once they know which
                    angle stands out the most.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can AI fully replace my judgment on titles?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    AI is best used as a collaborator. Let it propose options,
                    then choose the ones that match your ethics, brand, and
                    experience with your audience.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How many title options should I test?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Testing two or three strong options for your most important
                    videos is usually enough. For the rest, pick the best option
                    and move on to the next upload.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to take a video from idea to optimized
                title, description, and tags.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <Link
                  href="/youtube-video-idea-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Video Idea Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Start with strategic video ideas before you write titles.
                  </p>
                </Link>
                <Link
                  href="/youtube-title-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Title Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Brainstorm fresh title ideas before you analyze them.
                  </p>
                </Link>
                <Link
                  href="/youtube-description-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Description Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Align your descriptions with your best-performing titles.
                  </p>
                </Link>
                <Link
                  href="/youtube-tags-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Tags Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Generate tags that reinforce your key title phrases.
                  </p>
                </Link>
                <Link
                  href="/youtube-thumbnail-prompt-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Thumbnail Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Design thumbnails that visually support your title angles.
                  </p>
                </Link>
                <Link
                  href="/youtube-script-prompt-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Script Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Ensure your script delivers on the promise of your title.
                  </p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Want More Advanced Prompts?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get a free PDF with 50 high-retention YouTube script, title, and
                description prompts you can use with ChatGPT or Claude. Use them
                alongside this SEO title analyzer to build a complete system.
              </p>
              <form className="mt-4 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your best email to get the PDF"
                  className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Get the 50 Prompts PDF
                </button>
              </form>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
