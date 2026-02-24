import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const SHORT_LENGTHS = ["15 seconds", "30 seconds", "45 seconds", "60 seconds"];

const SHORT_GOALS = [
  "Drive new viewers to the channel",
  "Promote a long-form video",
  "Grow subscribers quickly",
  "Promote a product or offer",
];

export default function YouTubeShortsScriptGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("");
  const [goal, setGoal] = useState("Drive new viewers to the channel");
  const [length, setLength] = useState("30 seconds");
  const [tone, setTone] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic || "a simple productivity trick that saves people 1 hour per day";
    const baseNiche =
      niche || "productivity and creator workflows for YouTube and content";
    const baseTone = tone || "fast-paced, friendly, and conversational";

    return [
      "You are a YouTube Shorts scriptwriter who specializes in high-retention vertical videos.",
      "",
      "Write a complete YouTube Shorts script based on the details below.",
      "",
      `- Shorts topic: ${baseTopic}`,
      `- Channel niche: ${baseNiche}`,
      `- Goal of this Short: ${goal}`,
      `- Target duration: ${length}`,
      `- Tone and voice: ${baseTone}`,
      "",
      "Requirements:",
      "- Hook viewers in the first 1–2 seconds with a bold statement, pattern interrupt, or surprising fact.",
      "- Structure the script for vertical viewing with fast pacing and minimal fluff.",
      "- Include explicit instructions for on-screen text and simple visual cues in brackets.",
      "- Use short, punchy sentences that are easy to read as captions.",
      "- End with a clear call to action aligned with the goal.",
      "",
      "Output format:",
      "- Script broken into beats with approximate timestamps (0–3s, 3–10s, etc.).",
      "- On-screen text suggestions in brackets where useful.",
      "- Spoken lines written as natural speech, not blog text.",
    ].join("\n");
  }, [topic, niche, goal, length, tone]);

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
          YouTube Shorts Script Generator – Fast Hooks for Vertical Videos
        </title>
        <meta
          name="description"
          content="Generate high-retention YouTube Shorts scripts with a single prompt. Use this free Shorts script generator to brief ChatGPT for vertical videos."
        />
        <meta
          name="keywords"
          content="YouTube Shorts script generator, Shorts script prompt, vertical video script, AI YouTube Shorts prompt"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-shorts-script-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Shorts Script Generator"
        />
        <meta
          property="og:description"
          content="Use this free prompt builder to create high-retention YouTube Shorts scripts for vertical videos."
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
                YouTube Shorts Script Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Ideas into High-Retention YouTube Shorts Scripts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Shorts move quickly. You do not have time for slow intros or
                vague promises. This prompt builder helps you brief AI so every
                Short opens strong, delivers one clear idea, and ends with a
                deliberate next step. It lives inside the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                , so your Shorts prompts can stay connected to your long-form
                scripts, descriptions, and broader content system.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                For planning the bigger picture, you can combine this page with
                the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>{" "}
                and the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                so that long videos, Shorts, and supporting content all start
                from the same core ideas.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Shorts Script Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>YouTube Shorts and vertical content</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Hook rate and retention</dd>
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
                Shorts Script Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your idea, niche, and goal. Get a detailed Shorts script
                prompt you can paste into ChatGPT.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Shorts topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. one small habit that makes editing faster"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Channel niche
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. productivity, creator tips, tech explainers"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Goal of this Short
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {SHORT_GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target length
                  </label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {SHORT_LENGTHS.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Tone and style
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. punchy, energetic, slightly sarcastic"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
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
                  YouTube Shorts script.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Script YouTube Shorts</h2>
              <p>
                Shorts give you only a few seconds to earn attention. That means
                your prompts need to be much more specific about hooks, pacing,
                and visual cues than for a long-form script. Instead of asking AI
                to write a generic script, you brief it like a creative director.
              </p>
              <p>
                This Shorts script generator is designed to capture the pieces
                that matter most: topic, niche, goal, duration, and tone. When
                you give AI that context, it can write scripts that feel designed
                for vertical viewing instead of repurposed from a blog post.
              </p>
              <p>
                You can reuse the same structure across many Shorts themes,
                keeping your channel style consistent while experimenting with new
                ideas.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Shorts Scripts</h2>
              <p>
                The strongest Shorts prompts specify the hook, the central idea,
                and the call to action. They tell AI to avoid rambling and to
                structure the script as beats instead of paragraphs.
              </p>
              <p>Effective prompts often include:</p>
              <ul>
                <li>A one-sentence summary of the Short&apos;s main idea.</li>
                <li>The niche and viewer profile, such as busy creators or students.</li>
                <li>The desired outcome: views, subscribers, clicks, or saves.</li>
                <li>The target duration and pacing style.</li>
                <li>
                  Instructions to include on-screen text and visual suggestions.
                </li>
              </ul>
              <p>
                When you combine these elements, AI can give you scripts that are
                much closer to publish-ready.
              </p>

              <h2>A Simple Structure for High-Retention Shorts</h2>
              <p>
                Most Shorts can follow a simple template that keeps viewers
                hooked without feeling repetitive.
              </p>
              <ol>
                <li>Hook: Open with tension, curiosity, or a bold claim.</li>
                <li>
                  Setup: In a sentence or two, explain what you are about to show
                  or reveal.
                </li>
                <li>
                  Delivery: Walk through the tip, transformation, or story in a
                  tight sequence.
                </li>
                <li>
                  Payoff: Show the result or key realization quickly and clearly.
                </li>
                <li>
                  CTA: Ask viewers to watch a related long-form video, subscribe,
                  or save the Short.
                </li>
              </ol>
              <p>
                This page&apos;s prompt nudges AI to follow a beat-based structure
                so that flow becomes repeatable.
              </p>

              <h2>Example YouTube Shorts Script Prompts</h2>
              <p>
                Below are a few example prompts you could construct with this
                tool. Use them as patterns and replace the niche and topic with
                your own.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Shorts Script Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template to brief ChatGPT or any AI model to write
                Shorts scripts that are optimized for hooks and retention.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste Shorts script template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are a YouTube Shorts scriptwriter who specializes in high-retention vertical videos.

Write a complete YouTube Shorts script using these details:
- Topic: [what this Short is about in one sentence]
- Channel niche: [e.g. productivity, creator tips, tech explainers]
- Goal of this Short: [views, subscribers, link clicks, saves]
- Target duration: [15/30/45/60 seconds]
- Tone and style: [e.g. punchy, energetic, calm, playful]

Requirements:
- Hook viewers in the first 1–2 seconds with a bold or surprising opening.
- Structure the script as beats with approximate timestamps (0–3s, 3–10s, etc.).
- Include on-screen text suggestions in brackets where helpful.
- Use short, punchy sentences that read well as captions.
- End with a clear call to action tied to the goal.

Output:
- Beat-by-beat script with timestamps.
- Spoken lines formatted for natural speech, not long paragraphs.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example YouTube Shorts Script Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                These examples show how different channels can brief AI to write
                Shorts that support their long-form content and offers.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Productivity channel
                  </p>
                  <p className="mt-1">
                    Write a YouTube Shorts script about{" "}
                    <span className="font-medium">
                      one small change that makes editing videos twice as fast
                    </span>
                    , for a{" "}
                    <span className="font-medium">
                      productivity channel aimed at part-time creators
                    </span>{" "}
                    who want to{" "}
                    <span className="font-medium">
                      publish weekly without burning out
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Faceless finance channel
                  </p>
                  <p className="mt-1">
                    Create a 30-second script for a{" "}
                    <span className="font-medium">
                      faceless finance Shorts channel
                    </span>{" "}
                    explaining{" "}
                    <span className="font-medium">
                      the difference between good and bad debt
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                      beginners in their first job
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Educational coding channel
                  </p>
                  <p className="mt-1">
                    Generate a Shorts script that{" "}
                    <span className="font-medium">
                      explains a tricky coding concept in 45 seconds
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      beginners learning to code after work
                    </span>{" "}
                    and linking to a{" "}
                    <span className="font-medium">
                      full YouTube tutorial in the description
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
                    How long should a YouTube Short be?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many high-performing Shorts are between 20 and 40 seconds,
                    but anything under 60 seconds can work if the pacing is
                    tight and the idea is clear.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I reuse this prompt for TikTok and Reels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. The same script can often be reused across YouTube
                    Shorts, TikTok, and Instagram Reels with only minor changes
                    to the CTA and formatting.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should I write Shorts scripts before or after filming?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators batch scripts first, then film several Shorts
                    in one session. Others record loosely and use AI later to
                    clean up the captions. This prompt works best for planning
                    ahead.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can AI write Shorts that still feel like me?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes, if you give it examples of your current scripts and ask
                    it to match your tone. You can also ask for multiple drafts
                    and edit the best one.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How many Shorts should I script at once?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    A good rhythm is scripting 5–10 Shorts at a time, then
                    filming and scheduling them in a separate block of time to
                    reduce context switching.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this help with faceless Shorts?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Just mention that the channel is faceless and describe
                    the type of visuals you will use so AI can align the script
                    with that style.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Do I still need to test hooks manually?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    AI can give you strong starting points, but you will still
                    learn the most by testing different hooks, thumbnails, and
                    ideas over time.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should Shorts always promote long-form videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Not always. Some Shorts are best used for discovery and
                    subscriber growth. You can decide case by case and ask AI to
                    tailor the CTA accordingly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Combine this Shorts script generator with other tools to build a
                complete vertical content system.
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
                    Map out Shorts and long-form series from the same strategy.
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
                    Turn faceless long-form ideas into scripts that pair with
                    Shorts.
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
                    Write long-form scripts that deepen topics introduced in
                    Shorts.
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
                    Design thumb styles that work across Shorts and long-form.
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
                    Generate tags that connect Shorts to related videos on your
                    channel.
                  </p>
                </Link>
                <Link
                  href="/youtube-hashtag-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Hashtag Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Build hashtag sets you can reuse across multiple Shorts.
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
                Shorts prompts you can use with ChatGPT or Claude. Use them
                alongside this Shorts script generator to plan weeks of content.
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
