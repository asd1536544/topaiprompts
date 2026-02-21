import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const VIDEO_LENGTHS = [
  "4–6 minutes",
  "8–10 minutes",
  "10–15 minutes",
];

const MONETIZATION_GOALS = [
  "Ad revenue and YouTube Partner Program",
  "Affiliate marketing and product recommendations",
  "Course or info product sales",
  "Newsletter and audience growth",
];

export default function FacelessYouTubeScriptPromptPage() {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("");
  const [length, setLength] = useState("8–10 minutes");
  const [goal, setGoal] = useState("Ad revenue and YouTube Partner Program");
  const [audience, setAudience] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic ||
      "how to launch a faceless YouTube channel using AI tools and simple systems";
    const baseNiche =
      niche || "faceless YouTube automation and creator business";
    const baseAudience =
      audience ||
      "beginner creators who want to earn with YouTube without being on camera";

    return [
      "You are an expert YouTube scriptwriter who specializes in faceless channels and YouTube automation.",
      "",
      "Write a complete YouTube script for the video idea below.",
      "",
      `- Video topic: ${baseTopic}`,
      `- Channel niche: ${baseNiche}`,
      `- Target audience: ${baseAudience}`,
      `- Desired video length: ${length}`,
      `- Main monetization goal: ${goal}`,
      "",
      "Channel style:",
      "- No host appears on camera; the channel is fully faceless.",
      "- Narration is done via voiceover (human or AI).",
      "- Visuals rely on B-roll, stock footage, screen recordings, and motion graphics.",
      "",
      "Script requirements:",
      "- Start with a strong hook that speaks directly to the viewer's desired outcome or pain point.",
      "- Use clear section headings that could be shown as on-screen text.",
      "- Include suggestions for B-roll or visual cues in brackets where helpful.",
      "- Maintain a friendly, confident tone that respects the viewer's time.",
      "- Add one or two moments where you acknowledge common fears about faceless channels.",
      "- End with a clear call to action aligned with the monetization goal.",
      "",
      "Output format:",
      "- Provide the script in sections (Hook, Intro, Main points, Examples, CTA).",
      "- Write in natural spoken English that works well for voiceover.",
      "- Include occasional short sentences for emphasis and pacing.",
    ].join("\n");
  }, [topic, niche, length, goal, audience]);

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
          Faceless YouTube Script Prompt | AI Tools for YouTube Creators
        </title>
        <meta
          name="description"
          content="Generate high-retention faceless YouTube scripts in seconds. Use this free AI prompt builder to create scripts for automation and no-face channels."
        />
        <meta
          name="keywords"
          content="faceless YouTube script prompt, faceless channel script, YouTube automation script, AI YouTube script no face"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/faceless-youtube-script-prompt"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Faceless YouTube Script Prompt Generator"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create faceless YouTube scripts tailored for automation and no-face channels."
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
                Faceless YouTube Script Prompt
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Faceless Video Ideas into High-Retention Scripts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Faceless YouTube channels can feel cold or generic if the script
                is not well structured. This prompt builder helps you brief AI
                like a professional scriptwriter so your voiceover-driven videos
                still feel human, clear, and worth watching. It is part of the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                , which lets you connect faceless scripts with hooks, titles,
                emails, and more.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                When you want to zoom out and design your overall prompt system,
                you can pair this page with the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                and other tools in the hub so your scripts, descriptions, and
                campaigns all point in the same direction.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Faceless Script Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Faceless and automation channels</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Watch time and monetization</dd>
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
                Faceless Script Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your topic, niche, and goals. Get a detailed faceless
                script prompt you can paste into ChatGPT.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 7 faceless YouTube channel ideas powered by AI"
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
                    placeholder="e.g. faceless YouTube automation, finance, productivity, tech explainers"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Desired video length
                  </label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {VIDEO_LENGTHS.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Monetization goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {MONETIZATION_GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
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
                    placeholder="e.g. beginners, busy professionals, students, agency owners"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
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
                  faceless YouTube script.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Script Faceless YouTube Videos</h2>
              <p>
                Faceless YouTube channels rely even more on structure and voice
                than talking-head videos. Because viewers never see the host,
                they judge you by pacing, clarity, and how quickly you deliver on
                the promise. AI can help here, but only if you give it a brief
                that understands what makes faceless content work.
              </p>
              <p>
                By describing your niche, audience, and monetization goal, you
                can ask AI to write scripts that are optimized for watch time and
                business outcomes, not just word count. That is what this faceless
                script prompt generator is built to do.
              </p>
              <p>
                You can reuse the same underlying prompt for multiple videos,
                changing only the topic, audience details, and call to action for
                each upload.
              </p>

              <h2>Best ChatGPT Prompts for Faceless YouTube Scriptwriting</h2>
              <p>
                The best faceless script prompts make it clear that there is no
                host on camera. They describe how visuals will work and ask for
                suggestions that fit a B-roll or motion graphics style.
              </p>
              <p>Strong prompts usually include:</p>
              <ul>
                <li>The core topic and big promise of the video.</li>
                <li>
                  The niche and kind of viewers you want to attract, including
                  their current struggles.
                </li>
                <li>
                  Whether the channel is fully faceless or uses occasional
                  avatar-style shots.
                </li>
                <li>
                  How you monetize the channel, so the CTA can feel natural.
                </li>
                <li>
                  A requirement to include visual suggestions and on-screen text
                  ideas.
                </li>
              </ul>
              <p>
                When you feed all of this into AI, the script becomes far more
                tailored to the style of channel you actually run.
              </p>

              <h2>Step-by-Step Faceless Script Structure for Watch Time</h2>
              <p>
                You can use a simple structure for most faceless videos, then let
                AI fill in the details following your voice and brand.
              </p>
              <ol>
                <li>
                  Hook: Open with a clear outcome or tension, supported by a
                  strong visual.
                </li>
                <li>
                  Setup: Briefly explain who the video is for and what will
                  happen over the next few minutes.
                </li>
                <li>
                  Main sections: Break the idea into steps or chapters, each with
                  its own mini-hook and payoff.
                </li>
                <li>
                  Proof and examples: Show quick stories or results to make the
                  advice feel real.
                </li>
                <li>
                  CTA and next step: Tie the transformation back to your
                  monetization goal and invite viewers to go deeper.
                </li>
              </ol>
              <p>
                This page&apos;s prompt nudges AI toward that kind of structure
                so you are not reinventing the wheel every time.
              </p>

              <h2>Examples of Faceless YouTube Script Prompts</h2>
              <p>
                The examples below show how different faceless channels can brief
                AI with this tool. Each one calls out the niche, audience, and
                monetization model so the script stays focused.
              </p>
              <p>
                You can copy these patterns and replace the bracketed parts with
                your own ideas to build a library of prompts.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free Faceless YouTube Script Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template as a reusable faceless YouTube script prompt.
                It works for automation, compilation, and B-roll driven channels.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste faceless script template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube scriptwriter who specializes in faceless channels and YouTube automation.

Write a complete YouTube script for this faceless video:
- Video topic: [describe the video in one sentence]
- Channel niche: [e.g. faceless automation, finance, productivity, tech explainers]
- Target audience: [who you want to attract]
- Desired length: [e.g. 8–10 minutes]
- Main monetization goal: [Ad revenue / affiliates / course / newsletter]

Channel style:
- No host appears on camera; narration is done via voiceover.
- Visuals rely on B-roll, stock footage, screen recordings, or motion graphics.

Script requirements:
- Start with a strong hook tied to the viewer’s main outcome or pain.
- Use clear section headings that could be used as on-screen text.
- Add suggestions for B-roll or visuals in brackets where useful.
- Address common fears about faceless channels briefly.
- End with a clear call to action aligned with the monetization goal.

Output:
- Script sections: Hook, Intro, Main points, Examples, CTA.
- Natural spoken English suitable for voiceover.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Faceless Script Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this tool
                for different faceless channels.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Automation income channel
                  </p>
                  <p className="mt-1">
                    Generate a full faceless script for a{" "}
                    <span className="font-medium">
                      step-by-step tutorial on building a YouTube automation
                      channel in 30 days
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      beginners with full-time jobs
                    </span>{" "}
                    who want{" "}
                    <span className="font-medium">
                      extra income without being on camera
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Finance compilation channel
                  </p>
                  <p className="mt-1">
                    Create a faceless script for a{" "}
                    <span className="font-medium">
                      compilation video of 10 habits that keep people broke
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      young professionals discovering personal finance
                    </span>{" "}
                    for the first time, monetized with{" "}
                    <span className="font-medium">
                      affiliate links to budgeting tools
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Productivity faceless channel
                  </p>
                  <p className="mt-1">
                    Write a faceless script for a{" "}
                    <span className="font-medium">
                      cinematic B-roll video about building a simple creator
                      workflow in Notion
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      part-time YouTubers who post once per week
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
                    Do faceless YouTube channels really need custom prompts?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. The structure, pacing, and visuals of a faceless video
                    differ from talking-head content. Custom prompts make it more
                    likely that AI scripts work with your B-roll and automation
                    workflows.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this prompt work for YouTube automation at scale?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Many automation channels reuse a core prompt and change
                    only the topic, audience, and CTA. That is exactly how this
                    faceless script prompt is designed to be used.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    What length works best for faceless videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It depends on your niche, but many faceless channels perform
                    well in the 8–12 minute range for long-form content and much
                    shorter loops for Shorts.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I use this for faceless YouTube Shorts?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    You can. Simply mention that the video is a Short and ask for
                    a condensed, fast-paced script that fits your target length.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How do I keep faceless scripts from sounding robotic?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    After generating the script, read it out loud and edit lines
                    that feel stiff. You can also ask AI to imitate a specific
                    tone, such as calm coaching or friendly teacher.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does AI-written faceless content still need editing?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. AI is great for structure and first drafts, but you
                    should still edit for accuracy, pacing, and brand voice
                    before publishing.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I localize faceless scripts for other languages?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    You can generate the script in English, then ask AI to adapt
                    it to another language while keeping the same structure and
                    visual cues.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How many faceless scripts should I batch at once?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many automation workflows generate scripts for 4–8 videos at
                    a time, then move on to recording, editing, and scheduling as
                    a separate batch.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to design a complete faceless channel
                workflow from ideas to monetization.
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
                    Plan faceless-friendly ideas and series before writing
                    scripts.
                  </p>
                </Link>
                <Link
                  href="/youtube-script-outline-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Script Outline Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Turn each idea into a clear outline for your voiceover.
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
                    Generate long-form scripts for any channel, not just faceless
                    ones.
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
                    Create Shorts scripts that support your faceless long-form
                    videos.
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
                    Design thumbnails that make faceless videos feel compelling,
                    not generic.
                  </p>
                </Link>
                <Link
                  href="/youtube-seo-title-analyzer"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube SEO Title Analyzer
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Optimize your titles so viewers actually click on your
                    faceless videos.
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
                alongside this faceless script prompt to build a complete system.
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
