import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const CONTENT_PACES = [
  "1 video per week",
  "2–3 videos per week",
  "Daily uploads",
  "One deep-dive per month",
];

const CHANNEL_STAGES = [
  "Just getting started",
  "Under 10k subscribers",
  "10k–100k subscribers",
  "100k+ subscribers",
];

export default function YouTubeVideoIdeaGeneratorPage() {
  const [niche, setNiche] = useState("");
  const [audience, setAudience] = useState("");
  const [pace, setPace] = useState("2–3 videos per week");
  const [stage, setStage] = useState("Under 10k subscribers");
  const [goal, setGoal] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseNiche =
      niche || "faceless YouTube automation channel teaching AI workflows";
    const baseAudience =
      audience ||
      "beginner creators who want to grow on YouTube with limited time";
    const baseGoal =
      goal ||
      "grow subscribers, test new series, and find repeatable video formats";

    return [
      "You are an experienced YouTube content strategist and programming director.",
      "",
      "Generate a list of YouTube video ideas for the channel described below.",
      "",
      `- Channel niche: ${baseNiche}`,
      `- Target audience: ${baseAudience}`,
      `- Current publishing pace: ${pace}`,
      `- Channel stage: ${stage}`,
      `- Primary goals for the next 90 days: ${baseGoal}`,
      "",
      "Requirements:",
      "- Propose video ideas that could realistically be produced at the stated pace.",
      "- Mix evergreen tutorials, timely experiments, and story-driven case studies.",
      "- Include a few ideas optimized for Shorts and a few for longer videos.",
      "- Avoid clickbait; focus on honest but compelling promises.",
      "",
      "Output format:",
      "- First, summarize the overall content strategy in 3–4 bullet points.",
      "- Then, list 15–25 specific video ideas.",
      "- For each idea, include:",
      "  - A working title",
      "  - Whether it is best as a Short or long-form video",
      "  - The core hook or angle",
      "  - The main outcome or transformation for the viewer.",
    ].join("\n");
  }, [niche, audience, pace, stage, goal]);

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
          YouTube Video Idea Generator – Never Run Out of Video Topics
        </title>
        <meta
          name="description"
          content="Generate endless YouTube video ideas in seconds. Use this free AI prompt builder to create strategic content ideas for your channel and audience."
        />
        <meta
          name="keywords"
          content="YouTube video idea generator, AI YouTube ideas, YouTube content ideas, YouTube video ideas for beginners"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-video-idea-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Video Idea Generator for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create strategic YouTube video ideas for your niche, audience, and goals."
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
                YouTube Video Idea Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Never Run Out of Strategic YouTube Video Ideas
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Instead of random brainstorming, use this prompt builder to brief
                AI like a YouTube content strategist. Turn your niche, audience,
                and goals into a structured list of video ideas that fit your
                schedule and growth targets.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Video Ideas Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Content planning, series design</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Evergreen and Shorts ideas</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>ChatGPT, Claude, Notion docs</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Video Ideas Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your niche, audience, and goals. Get a detailed prompt
                to generate strategic YouTube video ideas.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Channel niche
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. faceless AI automation channel, Notion productivity, coding tutorials"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. beginner creators, teachers, solo founders, busy professionals"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Publishing pace
                  </label>
                  <select
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {CONTENT_PACES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Channel stage
                  </label>
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {CHANNEL_STAGES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main goal for the next 90 days
                  </label>
                  <textarea
                    placeholder="e.g. hit 1,000 subscribers, validate a new series, sell a course, grow a newsletter"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
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
                  Paste this into ChatGPT or your favorite AI tool to generate
                  YouTube video ideas.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Plan a YouTube Content Calendar</h2>
              <p>
                The hardest part of YouTube is often not filming or editing, but
                deciding what to make next. Instead of coming up with ideas from
                scratch every week, you can use AI as a content strategist that
                understands your niche, audience, and constraints.
              </p>
              <p>
                When you describe your channel&apos;s stage, upload pace, and
                business goals, AI can propose video ideas that fit into a bigger
                strategy. That might include evergreen tutorials, recurring series,
                and Shorts that act as discovery pieces for your longer videos.
              </p>
              <p>
                This YouTube video idea prompt generator helps you capture that
                context in a reusable way so you can generate ideas on demand
                without losing strategic alignment.
              </p>
              <p>
                Once you have a backlog of ideas, you can turn your favorites
                into full scripts with the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>
                , refine the opening on the{" "}
                <Link href="/youtube-hook-generator">YouTube Hook Generator</Link>
                , and package everything with the{" "}
                <Link href="/youtube-title-generator">
                  YouTube Title Generator
                </Link>{" "}
                and{" "}
                <Link href="/youtube-thumbnail-prompt-generator">
                  Thumbnail Prompt Generator
                </Link>
                . You can also browse more planning tools on the{" "}
                <Link href="/growth-tools">Growth Tools</Link>{" "}
                category page.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Video Ideas</h2>
              <p>
                A good YouTube video ideas prompt does more than ask for “video
                ideas for my channel”. It explains who you are trying to reach,
                what transformation you offer, and how often you can publish.
              </p>
              <p>Strong prompts tend to include:</p>
              <ul>
                <li>Your channel niche and the problems you solve.</li>
                <li>
                  The exact type of viewer you want to attract and where they are
                  starting from.
                </li>
                <li>
                  The schedule you can realistically maintain for at least 90
                  days.
                </li>
                <li>
                  The main outcomes you want, such as subscribers, leads, or
                  course sales.
                </li>
                <li>
                  A request for a mix of Shorts and longer videos with clear
                  hooks.
                </li>
              </ul>
              <p>
                By feeding this structure into AI, you avoid receiving generic,
                one-off ideas that do not build toward anything meaningful.
              </p>

              <h2>Step-by-Step YouTube Idea Strategy for Consistent Growth</h2>
              <p>
                You can combine AI with a simple framework to turn your channel
                into a system instead of a series of guesses.
              </p>
              <ol>
                <li>
                  Define your pillars. Choose 3–5 core topics or themes that you
                  want to be known for over the long term.
                </li>
                <li>
                  Decide on your publishing pace. Pick a realistic cadence and
                  stick to it; AI can then suggest ideas that match this rhythm.
                </li>
                <li>
                  Use this prompt to generate a backlog of 30–50 ideas and group
                  them into series or playlists.
                </li>
                <li>
                  Mark a few ideas as Shorts-first and a few as long-form
                  deep-dives to support them.
                </li>
                <li>
                  Track performance and feed your learnings back into the next
                  round of idea generation.
                </li>
              </ol>
              <p>
                Over time, this loop turns your channel into a library of videos
                that support each other rather than disconnected experiments.
              </p>

              <h2>Examples of High-Impact YouTube Idea Prompts</h2>
              <p>
                The examples below show how different channels can adapt this
                video idea generator. Each prompt gives AI enough context to
                propose ideas that fit the creator&apos;s goals and constraints.
              </p>
              <p>
                You can copy these structures and swap in your own niche,
                audience, and goals to build a backlog of strategic ideas.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Video Ideas Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template as a reusable YouTube video ideas prompt. It
                works for faceless channels, Shorts-first channels, and
                educational brands.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste video ideas template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an experienced YouTube content strategist and programming director.

Generate strategic YouTube video ideas for the channel below:
- Channel niche: [describe your channel in one sentence]
- Target audience: [who you want to attract]
- Publishing pace: [e.g. 2–3 videos per week]
- Channel stage: [just starting / under 10k / 10k–100k / 100k+]
- Main goals for the next 90 days: [subscribers, leads, sales, etc.]

Requirements:
- Mix evergreen tutorials, timely experiments, and story-driven case studies.
- Include ideas for both Shorts and long-form videos.
- Avoid clickbait; focus on honest, specific promises.

Output:
- First, summarize the strategy in 3–4 bullets.
- Then, list 20 specific video ideas with title, format (Short or long), hook, and main outcome.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Video Idea Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this tool
                for different channels and goals.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Faceless AI automation channel
                  </p>
                  <p className="mt-1">
                    Generate YouTube video ideas for a{" "}
                    <span className="font-medium">
                      faceless AI automation channel
                    </span>{" "}
                    targeting{" "}
                    <span className="font-medium">
                      beginners who want to earn online with YouTube
                    </span>
                    . The channel uploads{" "}
                    <span className="font-medium">2–3 videos per week</span> and
                    aims to{" "}
                    <span className="font-medium">
                      hit 10,000 subscribers in 6 months
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Educational coding channel
                  </p>
                  <p className="mt-1">
                    Create strategic video ideas for an{" "}
                    <span className="font-medium">educational coding channel</span>{" "}
                    teaching{" "}
                    <span className="font-medium">
                      web development to complete beginners
                    </span>
                    . The creator can publish{" "}
                    <span className="font-medium">one deep-dive per week</span>{" "}
                    plus{" "}
                    <span className="font-medium">
                      a few Shorts highlighting key tips
                    </span>
                    , and wants to{" "}
                    <span className="font-medium">
                      drive traffic to a beginner course
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Notion productivity channel
                  </p>
                  <p className="mt-1">
                    Suggest YouTube ideas for a{" "}
                    <span className="font-medium">
                      Notion productivity and creator systems
                    </span>{" "}
                    channel aimed at{" "}
                    <span className="font-medium">
                      part-time YouTubers with day jobs
                    </span>
                    . The goal is to{" "}
                    <span className="font-medium">
                      grow an email list and sell a workspace template
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
                    How many video ideas should I generate at once?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators find that 20–50 ideas is a good starting point
                    for a 90-day plan. You can always generate more once you have
                    tested the first batch.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does this work for faceless and Shorts channels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Mention that your channel is faceless or Shorts-first in
                    the prompt so AI can suggest formats and hooks that fit that
                    style.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How do I avoid generic YouTube video ideas?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    The more specific you are about your audience, problems, and
                    goals, the more specific the ideas become. You can also ask AI
                    to avoid topics that feel overdone in your niche.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How often should I refresh my idea backlog?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators refresh their backlog every one to three
                    months, using analytics from the previous period to refine
                    which ideas they prioritize next.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I combine this with keyword research tools?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can use tools like YouTube search suggestions or
                    keyword explorers to find phrases with demand and then ask AI
                    to build video ideas around those keywords.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should every idea become a video?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    No. Treat the list as a menu. Highlight the ideas that best
                    match your goals and energy, and archive the rest for later.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How do I turn ideas into a publishing schedule?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Group ideas into themes or series, then map them onto a
                    calendar. Many creators plan 4–8 weeks ahead and leave room
                    for timely topics.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this generator help with burnout?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Having a backlog of thoughtful ideas reduces decision fatigue.
                    It lets you focus on execution, knowing that each video fits
                    a larger plan.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to turn your ideas into scripts, titles,
                thumbnails, and tags.
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
                    Turn your best ideas into full scripts faster.
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
                    Brainstorm multiple hook options for each idea.
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
                    Turn strategic ideas into titles that people want to click.
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
                    Write descriptions that support your content strategy.
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
                    Generate tags that connect related ideas and topics.
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
                    Design thumbnails that make your best ideas stand out.
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
                alongside this video idea generator to build a complete system.
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
