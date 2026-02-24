import Head from "next/head";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

const VIDEO_TYPES = [
  "Tutorial",
  "Review",
  "Vlog",
  "Educational",
  "Documentary",
  "Case study",
];

const TONES = [
  "Clear & benefit-driven",
  "Curiosity-based",
  "Bold & controversial",
  "Storytelling",
];

const GOALS = [
  "Increase click-through rate",
  "Rank for specific keywords",
  "Promote a product or offer",
  "Grow subscribers",
];

type FaqItemProps = {
  question: string;
  children: ReactNode;
};

function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-100 first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
      >
        <span className="text-sm font-medium text-gray-900">{question}</span>
        <span className="relative h-5 w-5">
          <span className="absolute left-1/2 top-1/2 h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 bg-gray-500" />
          <span
            className={`absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-gray-500 transition ${
              open ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
            }`}
          />
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600 sm:px-5">{children}</div>
      )}
    </div>
  );
}

function buildTitlePrompt(options: {
  topic: string;
  mainKeyword: string;
  videoType: string;
  tone: string;
  audience: string;
  goal: string;
}) {
  const { topic, mainKeyword, videoType, tone, audience, goal } = options;

  return [
    `You are an expert YouTube title copywriter and SEO strategist.`,
    ``,
    `Generate 20 high-performing YouTube video title ideas for the following video:`,
    ``,
    `- Topic: ${
      topic || "How to grow a YouTube channel using AI tools as a solo creator"
    }`,
    `- Main keyword to include when natural: ${
      mainKeyword || "YouTube growth with AI"
    }`,
    `- Video type: ${videoType || "Tutorial"}`,
    `- Title style / tone: ${tone || "Clear & benefit-driven"}`,
    `- Target audience: ${
      audience || "ambitious creators who want to grow faster with limited time"
    }`,
    `- Primary goal: ${
      goal || "Increase click-through rate"
    } while staying truthful to the content`,
    ``,
    `Each title should:`,
    `- Be under 70 characters when possible.`,
    `- Be written in natural, conversational English.`,
    `- Focus on one clear promise or outcome, not multiple.`,
    `- Use curiosity without clickbait or misleading claims.`,
    `- Include the main keyword naturally in at least half of the options.`,
    ``,
    `Format your answer as a numbered list from 1 to 20, without extra commentary.`,
  ].join("\n");
}

export default function YouTubeTitleGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [mainKeyword, setMainKeyword] = useState("");
  const [videoType, setVideoType] = useState("Tutorial");
  const [tone, setTone] = useState("Clear & benefit-driven");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("Increase click-through rate");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildTitlePrompt({
        topic,
        mainKeyword,
        videoType,
        tone,
        audience,
        goal,
      }),
    [topic, mainKeyword, videoType, tone, audience, goal]
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
        <title>YouTube Title Generator – Create Click-Worthy Titles Fast</title>
        <meta
          name="description"
          content="Generate high-converting YouTube titles in seconds. AI-powered title prompt generator designed to increase click-through rate and search performance."
        />
        <meta
          name="keywords"
          content="YouTube title generator, AI YouTube titles, YouTube SEO title, YouTube headline generator"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-title-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Title Generator for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create optimized YouTube title prompts for better CTR and SEO."
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
                YouTube Title Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Generate Titles That Viewers Want to Click
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Instead of staring at a blank headline, turn your video idea into
                20 data-informed title angles. This prompt builder helps AI write
                titles that respect your brand while maximizing click-through
                rate.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                For the strongest results, pair this page with the{" "}
                <Link href="/youtube-hook-generator">YouTube Hook Generator</Link>{" "}
                so your hook and title tell the same story, and with the{" "}
                <Link href="/youtube-thumbnail-prompt-generator">
                  Thumbnail Prompt Generator
                </Link>{" "}
                so your visuals match the promise. You can also run working
                titles through the{" "}
                <Link href="/youtube-seo-title-analyzer">
                  YouTube SEO Title Analyzer
                </Link>{" "}
                and then finish your upload flow on the{" "}
                <Link href="/youtube-description-generator">
                  YouTube Description Generator
                </Link>
                .
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Title Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Built for YouTube creators.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Thumbnail + title experiments</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>CTR, search, browse</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>ChatGPT, Claude, Gemini</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Title Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in the context and get a long, detailed prompt you can paste
                into any AI model.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. How to turn your YouTube channel into a full-time income"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main keyword (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. make money on YouTube, YouTube automation, faceless channel"
                    value={mainKeyword}
                    onChange={(e) => setMainKeyword(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video type
                  </label>
                  <select
                    value={videoType}
                    onChange={(e) => setVideoType(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {VIDEO_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Title style / tone
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                    {TONES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTone(t)}
                        className={`rounded-md border px-2.5 py-1.5 text-center ${
                          tone === t
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. creators stuck between 1k and 10k subscribers"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                  Paste this into ChatGPT, Claude, or your favorite AI model to
                  generate title ideas.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Generate YouTube Titles That Actually Perform</h2>
              <p>
                A strong title is often the difference between a video that
                quietly dies and one that compounds views for months or years.
                Your thumbnail might grab attention, but the title sets the
                promise. Together, they decide whether someone chooses your video
                over the other nine options on their screen.
              </p>
              <p>
                AI is extremely good at brainstorming many variations quickly.
                The challenge is guiding it so that the titles are not generic or
                clickbait. A focused prompt lets AI act like a strategic partner
                rather than a random headline generator.
              </p>

              <h3>Balancing humans, algorithm, and truth</h3>
              <p>
                A good YouTube title has to make three parties happy at the same
                time: the viewer, the algorithm, and you as the creator. That
                means:
              </p>
              <ul>
                <li>
                  Viewers should instantly understand what they get and why it
                  matters.
                </li>
                <li>
                  The algorithm should see clear, relevant keywords that match
                  the content and audience.
                </li>
                <li>
                  You should feel comfortable standing behind the promise you
                  make.
                </li>
              </ul>
              <p>
                When you specify your topic, main keyword, audience, and primary
                goal in the prompt, AI can propose titles that sit in the sweet
                spot between performance and integrity.
              </p>

              <h3>From one idea to a full headline board</h3>
              <p>
                Instead of trying to write the perfect title in one shot, think
                of title creation as a process:
              </p>
              <ol>
                <li>Describe your video clearly in one sentence.</li>
                <li>
                  Use this generator to create 20 titles in different tones and
                  angles.
                </li>
                <li>
                  Shortlist 3–5 options that feel aligned with your brand voice.
                </li>
                <li>
                  Combine the best parts of those options into one or two final
                  candidates.
                </li>
                <li>
                  Pair them with 2–3 thumbnail concepts and test over time.
                </li>
              </ol>
              <p>
                This workflow helps you detach emotionally from any single title
                and focus on what actually gets results in your analytics.
              </p>

              <h3>Titles across your creator ecosystem</h3>
              <p>
                The same core idea behind a YouTube title often gets reused in
                email subject lines, landing page headlines, shorts, and social
                clips. Once AI helps you discover a “winning angle” for a
                concept, you can repurpose it across platforms and formats.
              </p>
              <p>
                Over time, you will see patterns in what your audience responds
                to: specific numbers, certain phrases, or particular outcomes.
                This makes both your human writing and your AI prompts stronger.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Title Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template when you want a YouTube title prompt you can
                reuse across videos. It is optimized for click-through rate and
                SEO without sliding into clickbait.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste title template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube title copywriter and SEO strategist.

Generate 20 high-performing YouTube video titles using the details below:
- Topic: [what the video is about]
- Main keyword: [primary SEO keyword or phrase]
- Video type: [tutorial / review / vlog / educational / documentary / case study]
- Target audience: [who should click]
- Primary goal: [increase click-through rate, grow subscribers, rank for a keyword]

Each title should:
- Be under 70 characters when possible.
- Be written in natural, conversational English.
- Focus on one clear promise or outcome.
- Use curiosity without misleading or overpromising.
- Include the main keyword naturally in at least half of the options.

Format your answer as a numbered list from 1 to 20.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Title Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts that could be generated from this
                tool for different niches.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Faceless automation channel
                  </p>
                  <p className="mt-1">
                    Generate 20 curiosity-based YouTube titles for a{" "}
                    <span className="font-medium">Tutorial</span> on{" "}
                    <span className="font-medium">
                      building a faceless YouTube automation channel in 2026
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      beginners who want to make money on YouTube without
                      showing their face
                    </span>{" "}
                    and aiming to{" "}
                    <span className="font-medium">
                      increase click-through rate
                    </span>
                    . Include the keyword{" "}
                    <span className="font-medium">“YouTube automation”</span>{" "}
                    in at least half of the titles.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Notion / productivity channel
                  </p>
                  <p className="mt-1">
                    Write 20 clear, benefit-driven YouTube titles for an{" "}
                    <span className="font-medium">Educational</span> video about{" "}
                    <span className="font-medium">
                      building a YouTube content OS in Notion
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      creators posting at least once per week
                    </span>{" "}
                    who want to{" "}
                    <span className="font-medium">
                      stay consistent without burnout
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Course / education business
                  </p>
                  <p className="mt-1">
                    Generate 20 storytelling-style YouTube titles for a{" "}
                    <span className="font-medium">Case study</span> video on{" "}
                    <span className="font-medium">
                      how a small education channel turned 10k subscribers into
                      a six-figure course business
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      creators who already have an audience but no product
                    </span>{" "}
                    and focused on{" "}
                    <span className="font-medium">
                      growing subscribers and leads
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
              <div className="mt-4 rounded-xl border border-gray-100 bg-white">
                <FaqItem question="Does this tool generate titles automatically?">
                  <p>
                    This page gives you a detailed prompt. You paste it into
                    ChatGPT, Claude, or another AI model to generate the actual
                    titles. This way, you keep full control and can use whichever
                    AI platform you prefer.
                  </p>
                </FaqItem>
                <FaqItem question="What is the best prompt for YouTube titles?">
                  <p>
                    The best prompt for YouTube title ideas tells the model the
                    topic, audience, keyword, and goal. When you give AI this
                    context, it can propose titles that balance humans, the
                    algorithm, and the truth of your content instead of generic
                    clickbait. The title builder on this page and the free
                    template above are built around that idea.
                  </p>
                </FaqItem>
                <FaqItem question="How many titles should I test?">
                  <p>
                    Many creators test at least 2–3 titles for important videos
                    by iterating thumbnails and headlines over time. Even if you
                    only publish one title at a time, having options helps you
                    improve thumbnails, hooks, and future uploads.
                  </p>
                </FaqItem>
                <FaqItem question="Will these titles help with SEO?">
                  <p>
                    Yes. By including your main keyword and clear topical
                    signals, the generated titles can support SEO while still
                    being written for humans. You should also reflect those
                    keywords in the description, tags, and script so your topic
                    is consistent across the whole video.
                  </p>
                </FaqItem>
                <FaqItem question="Can I use these prompts for faceless channels?">
                  <p>
                    Yes. Faceless channels still need strong titles. You can add
                    phrases like “faceless YouTube channel” or “YouTube
                    automation” to your topic or main keyword so AI suggests
                    titles that attract the right audience for that style of
                    content.
                  </p>
                </FaqItem>
                <FaqItem question="What about languages other than English?">
                  <p>
                    You can add a line to the prompt such as “Write all titles in
                    Spanish” or your preferred language. The underlying structure
                    still works; only the output language changes.
                  </p>
                </FaqItem>
                <FaqItem question="How long should a YouTube title be?">
                  <p>
                    Many high-performing titles sit between 45 and 60 characters,
                    which tends to display well on most devices. The goal is not
                    to hit an exact number but to keep the promise clear and
                    scannable. This generator nudges AI toward concise, focused
                    options.
                  </p>
                </FaqItem>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Pair strong titles with hooks, scripts, and descriptions that all
                point in the same direction.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <Link
                  href="/youtube-script-prompt-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Script Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Generate the underlying script before you lock in your title.
                  </p>
                </Link>
                <Link
                  href="/youtube-hook-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Hook Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Brainstorm hooks that match the angle of your title.
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
                    Turn your best titles into SEO-friendly descriptions and CTAs.
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
                    Generate tags that reinforce the keywords in your titles and
                    descriptions.
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
                    Brief AI to design thumbnails that match your strongest title
                    angles.
                  </p>
                </Link>
                <Link
                  href="/youtube-video-idea-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Video Idea Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Turn winning title ideas into a calendar of future videos.
                  </p>
                </Link>
                <Link
                  href="/faceless-youtube-script-prompt"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Faceless YouTube Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Generate titles that work especially well for faceless,
                    narration-driven channels.
                  </p>
                </Link>
                <Link
                  href="/youtube-shorts-script-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Shorts Script Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Explore title angles tuned for fast, vertical Shorts content.
                  </p>
                </Link>
                <Link
                  href="/youtube-automation-script-prompt"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Automation Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Build titles that fit automation-style channels and outsourced
                    production.
                  </p>
                </Link>
                <Link
                  href="/educational-youtube-script-template"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Educational YouTube Script Template
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Pair this generator with templates for lesson-focused,
                    classroom-style videos.
                  </p>
                </Link>
                <Link
                  href="/documentary-script-prompt"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Documentary Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Test title ideas for documentary and narrative-style uploads.
                  </p>
                </Link>
                <Link
                  href="/storytelling-script-prompt"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Storytelling Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Experiment with story-first titles built around a single,
                    vivid narrative.
                  </p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Want More Advanced Prompts?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get a free PDF with 50 high-retention YouTube script and title
                prompts you can plug into ChatGPT or Claude for your next videos.
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

            <section className="mt-10 rounded-xl border border-dashed border-indigo-200 bg-indigo-50/70 p-4 text-sm text-gray-800">
              <p>
                To build a complete video, start with the{" "}
                <Link
                  href="/youtube-script-prompt-generator"
                  className="font-semibold text-indigo-700 underline-offset-2 hover:underline"
                >
                  YouTube Script Prompt Generator
                </Link>{" "}
                to create the main script prompt, then use this title generator
                to package that story for clicks and search.
              </p>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
