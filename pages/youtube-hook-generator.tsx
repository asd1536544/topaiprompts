import Head from "next/head";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

const VIDEO_TYPES = [
  "Tutorial",
  "Review",
  "Vlog",
  "Educational",
  "Documentary",
  "Storytime",
];

const TONES = ["Bold", "Curiosity-driven", "Relatable", "Shock & Surprise"];

const OUTCOMES = [
  "Higher click-through rate",
  "More watch time",
  "More comments",
  "More subscribers",
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

function buildHookPrompt(options: {
  topic: string;
  videoType: string;
  tone: string;
  audience: string;
  outcome: string;
}) {
  const { topic, videoType, tone, audience, outcome } = options;

  return [
    `You are an expert YouTube copywriter who specializes in high-retention hooks.`,
    ``,
    `Generate 15 YouTube video hook ideas for the following video:`,
    ``,
    `- Topic: ${topic || "How to grow a YouTube channel with AI tools"}`,
    `- Video type: ${videoType || "Tutorial"}`,
    `- Tone: ${tone || "Curiosity-driven"}`,
    `- Target audience: ${
      audience || "ambitious creators who want to grow faster"
    }`,
    `- Main outcome: ${outcome || "Higher click-through rate"}`,
    ``,
    `Each hook should:`,
    `- Be short (under 15 words) and written in natural spoken English.`,
    `- Lead with a strong pattern break, bold promise, or surprising tension.`,
    `- Speak directly to the target audience and their core pain or desire.`,
    `- Make it impossible to skip the first 5 seconds of the video.`,
    ``,
    `Format your answer as a numbered list from 1 to 15, without explanations.`,
  ].join("\n");
}

export default function YouTubeHookGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [videoType, setVideoType] = useState("Tutorial");
  const [tone, setTone] = useState("Curiosity-driven");
  const [audience, setAudience] = useState("");
  const [outcome, setOutcome] = useState("Higher click-through rate");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildHookPrompt({
        topic,
        videoType,
        tone,
        audience,
        outcome,
      }),
    [topic, videoType, tone, audience, outcome]
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
        <title>YouTube Hook Generator | AI Tools for YouTube Creators</title>
        <meta
          name="description"
          content="Generate attention-grabbing YouTube hooks in seconds. AI-powered hook prompt generator designed to boost click-through rate and retention."
        />
        <meta
          name="keywords"
          content="YouTube hook generator, YouTube intro hook, AI hooks for YouTube, YouTube script hook"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-hook-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Hook Generator for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create powerful hooks for your YouTube videos."
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
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-900"
              >
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
                YouTube Hook Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Craft Hooks That Stop the Scroll in 3 Seconds
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Turn your video idea into a list of high-impact YouTube hooks.
                This prompt generator helps you brief AI so that every hook is
                written for clicks and retention, not just for views. It sits
                inside the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                , so you can treat hooks as one part of a bigger prompt system.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Once you have a winning hook, you can send it to the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>{" "}
                to build a full script, then refine the package with the{" "}
                <Link href="/youtube-title-generator">
                  YouTube Title Generator
                </Link>{" "}
                and{" "}
                <Link href="/youtube-thumbnail-prompt-generator">
                  Thumbnail Prompt Generator
                </Link>
                . For discovery and SEO, combine your hooks with the{" "}
                <Link href="/youtube-description-generator">
                  YouTube Description Generator
                </Link>{" "}
                and{" "}
                <Link href="/youtube-tags-generator">YouTube Tags Generator</Link>
                . For general research and ideation, you can also use the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                as the central place to design prompts that feed into all of
                your YouTube tools.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Hook Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Built for YouTube creators.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Intros, shorts, cold opens</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>CTR, first 30 seconds</dd>
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
                Hook Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in a few details and get a plug-and-play prompt for AI to
                generate multiple hooks.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. How to batch film 10 YouTube videos in one day"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
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
                    Hook style / tone
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
                    placeholder="e.g. Part-time creators trying to hit their first 1,000 subscribers"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary outcome
                  </label>
                  <select
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {OUTCOMES.map((o) => (
                      <option key={o} value={o}>
                        {o}
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
                  generate hooks.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Write Better YouTube Hooks</h2>
              <p>
                The first 5 seconds of your video decide almost everything:
                whether the viewer stays, whether the algorithm gets strong
                signals, and whether the rest of your script even matters. That
                is why hooks are one of the highest leverage pieces of copy in
                your entire YouTube funnel.
              </p>
              <p>
                AI can brainstorm dozens of hook ideas in seconds, but it needs
                clear instructions. Instead of asking “write me hooks for my
                video”, you want to brief AI like a senior copywriter who knows
                your audience, your format, and your business goal.
              </p>

              <h3>What makes a YouTube hook actually work?</h3>
              <p>
                Great hooks do more than state the topic. They introduce
                tension, curiosity, or contrast that makes the viewer feel an
                open loop they want to close. A strong hook often:
              </p>
              <ul>
                <li>Names a painful problem or fear the viewer already feels.</li>
                <li>Promises an unusually specific outcome or shortcut.</li>
                <li>Breaks a common belief or expectation in your niche.</li>
                <li>Shows a surprising result first, then explains how.</li>
              </ul>
              <p>
                When you include your audience and desired outcome in the prompt,
                AI can focus on the hooks that are most likely to convert for
                your channel, not just any channel.
              </p>

              <h3>Using multiple hooks for one video</h3>
              <p>
                One of the most underrated YouTube growth levers is testing
                multiple hooks for the same video. You can record 2–3 different
                openings and see which one performs best over time, then use
                that learning to inform future scripts.
              </p>
              <p>
                With this generator, you can quickly create 10–15 variations and
                shortlist a few favorites. You can even ask AI to rewrite the
                best hook in different tones (more bold, more subtle, more
                storytelling) to match your personal style.
              </p>

              <h3>Integrating hooks into your overall script workflow</h3>
              <p>
                Hooks should not be written in isolation. They should connect
                directly to the value of your video and set expectations the
                rest of the script delivers on. A practical workflow is:
              </p>
              <ol>
                <li>Outline the core promise and key points of your video.</li>
                <li>Use this page to generate hook prompts and hook ideas.</li>
                <li>Pick 2–3 hooks and record alternate intros.</li>
                <li>
                  Use the script prompt generator page to build the full video
                  script.
                </li>
                <li>
                  Use the title and description generators to package your video
                  for clicks and search.
                </li>
              </ol>
              <p>
                Over time, you will build a repeatable system that turns every
                idea into a high-performing video, supported by AI at each step.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Hook Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this free template whenever you need a best prompt for
                YouTube hooks that you can paste into ChatGPT, Claude, or any
                other AI model. It works well for both long-form videos and
                Shorts.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste hook template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-48 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube copywriter who specializes in high-retention hooks.

Generate 15 hook ideas for a YouTube video using the details below:
- Topic: [what the video is about]
- Video type: [tutorial / review / vlog / educational / documentary / storytime]
- Target audience: [who is watching]
- Primary outcome: [higher click-through rate, more watch time, more subscribers]
- Format: [long-form video / YouTube Shorts / faceless YouTube channel]

Each hook should:
- Be under 15 words and written in natural spoken English.
- Start with a bold pattern break, surprising result, or specific pain point.
- Make it impossible to scroll past the first 3–5 seconds.
- Match the promise of the full video script so viewers get what they expect.

Format your answer as a numbered list from 1 to 15.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Hook Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could generate with this tool
                for different types of channels.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Productivity channel
                  </p>
                  <p className="mt-1">
                    Generate 15 bold, curiosity-driven YouTube hooks for a{" "}
                    <span className="font-medium">Tutorial</span> video about{" "}
                    <span className="font-medium">
                      how to plan a week of content in 60 minutes using Notion
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      busy creators with full-time jobs
                    </span>{" "}
                    who want{" "}
                    <span className="font-medium">
                      higher click-through rate
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Tech review channel
                  </p>
                  <p className="mt-1">
                    Write 15 energetic hooks for a{" "}
                    <span className="font-medium">Review</span> video about{" "}
                    <span className="font-medium">
                      the best budget camera for YouTube in 2026
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      creators upgrading from a smartphone
                    </span>{" "}
                    and focused on{" "}
                    <span className="font-medium">more watch time</span>.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Education / course channel
                  </p>
                  <p className="mt-1">
                    Generate 15 relatable, story-driven hooks for an{" "}
                    <span className="font-medium">Educational</span> YouTube
                    video teaching{" "}
                    <span className="font-medium">
                      how to validate an online course idea using YouTube
                      analytics
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      intermediate creators turning their channel into a course
                      business
                    </span>{" "}
                    and optimized for{" "}
                    <span className="font-medium">more subscribers</span>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 rounded-xl border border-gray-100 bg-white">
                <FaqItem question="Does this tool write hooks for me?">
                  <p>
                    This page focuses on generating a strong prompt. You paste it
                    into ChatGPT, Claude, or another AI model to generate the
                    actual hooks. That means you stay flexible and can use
                    whatever model you prefer.
                  </p>
                </FaqItem>
                <FaqItem question="What is the best prompt for YouTube hooks?">
                  <p>
                    The best prompt for YouTube hooks tells the model who the
                    viewer is, what the topic is, what outcome you want, and how
                    bold or subtle the hook should be. When you fill out the
                    fields on this page or use the free YouTube hook template
                    above, you are feeding AI everything it needs to propose
                    hooks that fit your brand instead of random clickbait.
                  </p>
                </FaqItem>
                <FaqItem question="How many hooks should I test?">
                  <p>
                    A good baseline is to test 2–3 hooks per important video. For
                    shorts or ads, testing even more variations can make sense.
                    The goal is to learn what resonates with your specific
                    audience so you can build your own high-retention YouTube
                    hook playbook over time.
                  </p>
                </FaqItem>
                <FaqItem question="Will these hooks work for YouTube Shorts?">
                  <p>
                    Yes. Hooks for Shorts often need to be even more aggressive
                    and visual. You can mention “for YouTube Shorts” in the video
                    topic field or add it directly in the prompt so AI optimizes
                    for vertical, fast-paced content. There is also a dedicated
                    YouTube Shorts script generator in this toolkit for even more
                    focused prompts.
                  </p>
                </FaqItem>
                <FaqItem question="Can I use this for faceless YouTube channels?">
                  <p>
                    Yes. Faceless channels still rely on strong hooks. You can
                    specify that the channel is faceless and ask for hooks that
                    lean on visuals, stats, and curiosity rather than personal
                    presence. Pair this with the faceless YouTube script prompt
                    page for a fully aligned workflow.
                  </p>
                </FaqItem>
                <FaqItem question="Can I use this for client work?">
                  <p>
                    Absolutely. Many editors and agencies use prompt systems like
                    this to create repeatable hook frameworks for every client,
                    while still adapting to each brand’s tone and audience. You
                    can save your favorite prompts as templates and reuse them
                    across channels.
                  </p>
                </FaqItem>
                <FaqItem question="Do hooks matter if my content is already good?">
                  <p>
                    They do. The hook decides whether your content even gets a
                    chance. Strong hooks improve click-through rate and the first
                    30 seconds of watch time, which in turn gives your best
                    videos more opportunities to be recommended by YouTube.
                  </p>
                </FaqItem>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to build a complete workflow: hook,
                script, title, and description all aligned around the same
                promise.
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
                    Turn your best hooks into full scripts tailored to your
                    audience.
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
                    Package each hook into click-worthy, honest titles.
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
                    Support your hooks with descriptions that sell the click and
                    the watch.
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
                    Generate keyword ideas that reinforce the promise of your
                    hooks.
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
                    Design thumbnails that visually match your hook angle.
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
                    Turn winning hooks into a backlog of video concepts.
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
                    Create hooks and prompts tailored to faceless automation and
                    B-roll-heavy channels.
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
                    Build scroll-stopping hooks for 30–60 second vertical videos.
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
                    Develop prompts for systemized, outsourced content where
                    hooks must work at scale.
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
                    Use education-focused templates when writing hooks for
                    lesson-style content.
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
                    Craft hooks for narrative, interview, and documentary-style
                    YouTube videos.
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
                    Experiment with story-driven hooks for personal, case-study,
                    or brand narratives.
                  </p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Want More Advanced Prompts?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get a free PDF with 50 high-retention YouTube hook and script
                prompts you can use across faceless channels, Shorts, and
                educational videos.
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
