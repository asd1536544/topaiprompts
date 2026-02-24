import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const VIDEO_TYPES = [
  "Tutorial",
  "Storytime",
  "Case study",
  "Review",
  "Educational series",
];

const LENGTHS = [
  "5–8 minutes",
  "8–15 minutes",
  "15–30 minutes",
  "Over 30 minutes",
];

export default function YouTubeScriptOutlineGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [videoType, setVideoType] = useState("Tutorial");
  const [length, setLength] = useState("8–15 minutes");
  const [audience, setAudience] = useState("");
  const [cta, setCta] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic || "how to launch a faceless YouTube channel with AI automation";
    const baseAudience =
      audience ||
      "beginner creators who want to grow without showing their face";
    const baseCta =
      cta || "subscribe, join an email list, or check a simple offer";

    return [
      "You are an expert YouTube scriptwriter and content strategist.",
      "",
      "Create a detailed YouTube script outline for the video below.",
      "",
      `- Topic: ${baseTopic}`,
      `- Video type: ${videoType}`,
      `- Target audience: ${baseAudience}`,
      `- Desired video length: ${length}`,
      `- Primary call to action: ${baseCta}`,
      "",
      "Requirements:",
      "- Use a clear, numbered outline with sections and subsections.",
      "- Include suggested timestamps or approximate durations for each section.",
      "- Make room for pattern breaks, examples, and viewer engagement moments.",
      "- End with a strong closing segment that reinforces the CTA.",
      "",
      "Output format:",
      "- First, summarize the core promise of the video in 2–3 sentences.",
      "- Then, provide the outline with:",
      "  - Hook",
      "  - Introduction",
      "  - Main sections (with key talking points)",
      "  - Examples or case studies",
      "  - Objection handling (if relevant)",
      "  - Call to action and closing.",
    ].join("\n");
  }, [topic, videoType, length, audience, cta]);

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
          YouTube Script Outline Generator – Plan High-Retention Videos
        </title>
        <meta
          name="description"
          content="Generate structured YouTube script outlines in seconds. Use this free AI prompt builder to plan high-retention videos before writing the full script."
        />
        <meta
          name="keywords"
          content="YouTube script outline generator, YouTube outline template, AI YouTube outline, YouTube script structure"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-script-outline-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Script Outline Generator for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create detailed YouTube script outlines tailored to your topic, audience, and goals."
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
                YouTube Script Outline Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Plan High-Retention YouTube Videos with a Clear Outline
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Before you write a full script, a strong outline keeps your ideas
                focused and your pacing tight. This prompt builder turns your
                topic, audience, and goals into a detailed script outline you can
                hand to AI or use as your own structure.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Script Outline Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Educational, storytime, and case study videos</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Watch time, clarity, and structure</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>ChatGPT, Claude, human writers</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Script Outline Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your video and audience. Get a detailed prompt to
                generate a YouTube script outline.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 7-day plan to launch a faceless YouTube channel"
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
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {VIDEO_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Desired length
                  </label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {LENGTHS.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. beginner creators, teachers, SaaS founders, students"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary call to action
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. subscribe, download a free guide, join a newsletter"
                    value={cta}
                    onChange={(e) => setCta(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                  Paste this into ChatGPT or your favorite AI tool to generate a
                  detailed YouTube script outline.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Plan YouTube Script Outlines</h2>
              <p>
                A clear outline is the bridge between an idea and a video that
                holds attention. Instead of jumping straight into writing every
                sentence, you can use AI to design the structure, pacing, and key
                beats of your YouTube scripts.
              </p>
              <p>
                When you tell AI who the video is for, how long it should be, and
                what action you want viewers to take, it can propose an outline
                that feels intentional instead of improvised. That structure is
                especially helpful for tutorials, storytime videos, and case
                studies where it is easy to wander off track.
              </p>
              <p>
                This script outline generator turns that briefing process into a
                repeatable prompt so you can plan high-retention videos more
                consistently.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Script Outlines</h2>
              <p>
                Great script outline prompts are specific about format,
                audience, and purpose. Rather than asking for “a YouTube outline”,
                you describe the exact type of video you want to create.
              </p>
              <p>Strong prompts often include:</p>
              <ul>
                <li>The topic and main promise of the video.</li>
                <li>
                  The video type, such as tutorial, case study, storytime, or
                  documentary-style.
                </li>
                <li>
                  The desired length and any pace preferences, like “no section
                  longer than three minutes”.
                </li>
                <li>
                  The target audience and what they already know about the topic.
                </li>
                <li>
                  The primary call to action and where it should appear in the
                  outline.
                </li>
              </ul>
              <p>
                With this level of detail, AI can create outlines that feel close
                to a professional producer&apos;s planning notes.
              </p>

              <h2>Step-by-Step YouTube Script Outline Strategy</h2>
              <p>
                You can take the outlines generated from this prompt and adapt
                them into your own repeatable system.
              </p>
              <ol>
                <li>
                  Start with the hook. Make sure the first 30–60 seconds earn the
                  next few minutes by promising a clear outcome.
                </li>
                <li>
                  Group ideas into sections. Each section should have one main
                  job, like setting context, teaching a concept, or showing an
                  example.
                </li>
                <li>
                  Add pattern breaks. Plan where you will change visuals, tell a
                  story, or show proof so the video never feels static.
                </li>
                <li>
                  Decide where to handle objections. If you are selling an offer,
                  include a segment that addresses common doubts before the CTA.
                </li>
                <li>
                  Close with clarity. The final segment should reinforce the
                  promise and make it obvious what viewers should do next.
                </li>
              </ol>
              <p>
                Over time, you can save your favorite outlines as templates for
                recurring series or formats on your channel.
              </p>

              <h2>Examples of High-Converting Script Outline Prompts</h2>
              <p>
                The examples below demonstrate how different channels might use
                this tool. Each prompt gives AI enough context to design a
                structure that supports watch time and conversion goals.
              </p>
              <p>
                You can copy these and swap in your own topics, audiences, and
                CTAs to build outlines for your next batch of videos.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Script Outline Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template as a reusable YouTube script outline prompt.
                It works for faceless channels, educational videos, and
                documentary-style content.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste script outline template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube scriptwriter and content strategist.

Create a detailed YouTube script outline for this video:
- Topic: [describe the video in one sentence]
- Video type: [tutorial / storytime / case study / review / educational series]
- Target audience: [who you are speaking to]
- Desired length: [e.g. 8–15 minutes]
- Primary call to action: [subscribe / join email list / check offer]

Requirements:
- Use a numbered outline with sections and subsections.
- Suggest approximate timestamps or durations per section.
- Include hooks, pattern breaks, examples, and a clear CTA segment.

Outline structure:
- Hook
- Introduction
- Main sections with key talking points
- Examples or case studies
- Objection handling (if relevant)
- Call to action and closing.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Script Outline Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this tool
                for different kinds of YouTube channels.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Faceless automation channel
                  </p>
                  <p className="mt-1">
                    Create a script outline for a{" "}
                    <span className="font-medium">
                      faceless YouTube automation tutorial
                    </span>{" "}
                    on{" "}
                    <span className="font-medium">
                      setting up your first AI-powered video workflow in one
                      weekend
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      beginners who have never published a video before
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Educational channel for teachers
                  </p>
                  <p className="mt-1">
                    Generate a script outline for an{" "}
                    <span className="font-medium">
                      educational series episode
                    </span>{" "}
                    about{" "}
                    <span className="font-medium">
                      using YouTube videos to flip the classroom
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      high school teachers new to video
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Documentary-style case study
                  </p>
                  <p className="mt-1">
                    Plan a script outline for a{" "}
                    <span className="font-medium">
                      documentary-style case study
                    </span>{" "}
                    about{" "}
                    <span className="font-medium">
                      how one creator grew from 0 to 100k subscribers with 40
                      videos
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      serious students of YouTube who want to copy the process
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
                    Do I need an outline for every YouTube video?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Not necessarily, but most creators find that outlines improve
                    clarity and pacing, especially for educational, storytime, and
                    case study videos.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this outline prompt work for faceless channels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Mention that the channel is faceless or automation-based
                    so AI can suggest pattern breaks with B-roll, text overlays,
                    and visuals instead of talking-head shots.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How detailed should my script outline be?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators like outlines that include section titles, key
                    talking points, and approximate timings, but leave room for
                    natural delivery when recording.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I turn one outline into multiple videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. An in-depth outline can often be split into a series,
                    Shorts, or follow-up videos that go deeper into specific
                    segments.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How do I adapt AI outlines to my own style?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Treat the outline as a starting point. Edit section headings,
                    add personal stories, and adjust pacing so it feels natural to
                    you.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does this work for live streams or only recorded videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It works for both. For live streams, you can ask AI to
                    include interactive segments and Q&amp;A moments in the
                    outline.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How many outlines should I plan ahead?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Planning outlines for 3–8 upcoming videos often gives you
                    enough structure to film consistently without feeling locked
                    in for months.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this help with writer&apos;s block?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Once you see a full outline, it is much easier to sit
                    down and write or improvise the script section by section
                    instead of facing a blank page.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to go from outline to fully produced
                YouTube videos.
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
                    Turn your outlines into full scripts faster.
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
                    Brainstorm multiple hook options for your opening.
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
                    Turn your outline into titles that match the structure.
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
                    Write descriptions that reflect your outlined sections.
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
                    Generate tags that match your core sections and topics.
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
                    Design thumbnails that highlight the outline&apos;s main idea.
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
                alongside this script outline generator to build a complete
                system.
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
