import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const AUTOMATION_MODELS = [
  "One main channel with supporting automation channels",
  "Multiple faceless automation channels in one niche",
  "Multiple faceless automation channels in different niches",
];

const WORKLOAD_PREFERENCES = [
  "I want to keep my personal workload low and outsource later",
  "I am comfortable scripting and editing but want help with ideas",
  "I want to automate as much as possible with AI from day one",
];

export default function YouTubeAutomationScriptPromptPage() {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("");
  const [model, setModel] = useState(
    "One main channel with supporting automation channels",
  );
  const [workload, setWorkload] = useState(
    "I want to keep my personal workload low and outsource later",
  );
  const [goal, setGoal] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic ||
      "a step-by-step video about launching your first faceless automation channel";
    const baseNiche =
      niche || "faceless YouTube automation for finance, productivity, or tech";
    const baseGoal =
      goal ||
      "build a system of videos that generate steady views and revenue over time";

    return [
      "You are a YouTube strategist and scriptwriter who specializes in automation and faceless channels.",
      "",
      "Write a complete YouTube script for the following automation-focused video.",
      "",
      `- Video topic: ${baseTopic}`,
      `- Channel niche: ${baseNiche}`,
      `- Automation model: ${model}`,
      `- Creator workload preference: ${workload}`,
      `- Business goal: ${baseGoal}`,
      "",
      "Channel context:",
      "- The channel uses automation, templates, and systems to produce videos consistently.",
      "- Scripts should be written so they can be reused or repurposed across multiple videos and channels.",
      "",
      "Script requirements:",
      "- Start with a hook that speaks directly to people who want leverage from YouTube without turning it into a second full-time job.",
      "- Explain any automation concepts clearly and concretely.",
      "- Suggest system-friendly ways to batch work (scripting, recording, editing, and publishing).",
      "- Include callouts where a workflow diagram or on-screen checklist could appear.",
      "- Address common fears about automation (quality, authenticity, burnout).",
      "- Close with a specific next step that fits the business goal.",
      "",
      "Output format:",
      "- Script sections: Hook, Context, Main framework, Practical steps, CTA.",
      "- Use natural spoken English suitable for voiceover or a simple talking-head video.",
      "- Add brief notes in brackets where automation tooling or templates would be helpful.",
    ].join("\n");
  }, [topic, niche, model, workload, goal]);

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
          YouTube Automation Script Prompt for Faceless Cash-Cow Channels
        </title>
        <meta
          name="description"
          content="Design YouTube automation scripts with a single prompt. Use this free YouTube automation script prompt to brief AI for faceless systems and channels."
        />
        <meta
          name="keywords"
          content="YouTube automation script prompt, faceless automation channel script, AI YouTube automation prompt"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-automation-script-prompt"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Automation Script Prompt"
        />
        <meta
          property="og:description"
          content="Use this free prompt builder to create YouTube automation scripts for faceless channels and systems."
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
                YouTube Automation Script Prompt
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Automation Strategies into YouTube Scripts You Can Systemize
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Automation channels are about leverage, not just volume. This
                prompt builder helps you brief AI so each script fits into a
                repeatable system that multiple channels or editors can execute.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Automation Script Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Faceless automation and multi-channel setups</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Systems, batching, and monetization</dd>
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
                Automation Script Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your niche, automation model, and workload preferences.
                Get a detailed YouTube automation script prompt you can paste
                into ChatGPT.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. how to launch your first faceless automation channel"
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
                    placeholder="e.g. faceless finance, AI automation, productivity, tech explainers"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Automation model
                  </label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {AUTOMATION_MODELS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Workload preference
                  </label>
                  <select
                    value={workload}
                    onChange={(e) => setWorkload(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {WORKLOAD_PREFERENCES.map((w) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Business goal
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. build multiple channels to $2K/month each"
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
                  Paste this into ChatGPT or your favorite AI tool to generate a
                  YouTube automation script.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI for YouTube Automation Scripts</h2>
              <p>
                YouTube automation is not only about delegating work. It is about
                building a repeatable system where ideas, scripts, editing, and
                publishing can happen without you rewriting the process every
                week. Well-designed prompts are part of that system.
              </p>
              <p>
                When you tell AI how your automation model works, what niche you
                serve, and what workload you want to personally carry, the
                resulting scripts can be tailored to your operations instead of
                generic advice.
              </p>
              <p>
                This page helps you write prompts that respect your constraints
                while still aiming for growth and monetization.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Automation Channels</h2>
              <p>
                The best automation prompts combine storytelling with systems
                thinking. They invite viewers into your framework for creating
                leverage, not just one-off tricks.
              </p>
              <p>Strong prompts often include:</p>
              <ul>
                <li>A clear description of your automation setup.</li>
                <li>
                  The type of viewer you want: side-hustle seekers, agency
                  owners, or full-time creators.
                </li>
                <li>
                  Your current bottleneck, such as time, skills, or creative
                  energy.
                </li>
                <li>
                  Whether scripts will be used on one channel or many automation
                  channels.
                </li>
                <li>
                  The main business model behind your content, not just Ad
                  revenue.
                </li>
              </ul>
              <p>
                With that context, AI can generate scripts that align with your
                larger strategy.
              </p>

              <h2>A Simple Automation Script Structure You Can Reuse</h2>
              <p>
                Automation scripts benefit from clear frameworks. Viewers should
                walk away understanding the system and what to do next.
              </p>
              <ol>
                <li>
                  Hook: Speak directly to the viewer&apos;s desire for leverage or
                  freedom.
                </li>
                <li>
                  Context: Clarify the kind of automation channel you are talking
                  about.
                </li>
                <li>
                  Framework: Show the core steps or pillars of your system.
                </li>
                <li>
                  Examples: Share quick cases or hypotheticals that make it feel
                  real.
                </li>
                <li>
                  CTA: Invite viewers to a next video, playlist, or resource that
                  deepens the system.
                </li>
              </ol>
              <p>
                This prompt is written to nudge AI toward that structure so it
                becomes your default automation script template.
              </p>

              <h2>Example YouTube Automation Script Prompts</h2>
              <p>
                The examples below show how creators with different automation
                models can brief AI using this page.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Automation Script Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template to brief ChatGPT or any AI model to write
                scripts tailored for automation and faceless channels.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste automation script template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are a YouTube strategist and scriptwriter who specializes in automation and faceless channels.

Write a complete YouTube script for this automation-focused video:
- Video topic: [describe the video in one sentence]
- Channel niche: [e.g. faceless finance, AI automation, productivity]
- Automation model: [one main channel, multiple automation channels, etc.]
- Creator workload preference: [how involved the creator wants to be day to day]
- Business goal: [e.g. build multiple channels to $2K/month each]

Channel context:
- The channel uses repeatable systems, templates, and automations.
- Scripts should be easy to repurpose across multiple videos or channels.

Script requirements:
- Open with a hook about leverage, time freedom, or consistent income.
- Clearly explain the automation system and where this video fits.
- Suggest batchable steps and places where templates are useful.
- Address common fears about quality, authenticity, and burnout.
- End with a CTA aligned with the business goal.

Output:
- Sections: Hook, Context, Main framework, Practical steps, CTA.
- Natural spoken English suitable for voiceover or talking-head video.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example YouTube Automation Script Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could build with this tool for
                different kinds of automation setups.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Single main channel with automation support
                  </p>
                  <p className="mt-1">
                    Generate a script for a{" "}
                    <span className="font-medium">
                      video teaching creators how to build a content engine with
                      one main channel and two supporting automation channels
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      solo creators with limited time
                    </span>{" "}
                    who want to{" "}
                    <span className="font-medium">
                      publish more without burning out
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Multi-channel automation portfolio
                  </p>
                  <p className="mt-1">
                    Write a script explaining{" "}
                    <span className="font-medium">
                      how to manage a portfolio of five faceless channels
                    </span>
                    , each{" "}
                    <span className="font-medium">
                      earning $1K/month through ad revenue and affiliates
                    </span>
                    , for{" "}
                    <span className="font-medium">
                      advanced creators and small agencies
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Automation for educators
                  </p>
                  <p className="mt-1">
                    Create a script for a{" "}
                    <span className="font-medium">
                      video showing teachers how to automate lesson recap videos
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      educators who want to repurpose their classes onto YouTube
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
                    What is a YouTube automation script prompt?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It is a detailed instruction set you give to AI so every
                    script it writes fits your automation model, niche, and
                    business goals instead of being generic.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Do I need to reveal that my channel is automated?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Not necessarily. Many viewers care more about consistent,
                    useful content than how the scripts are produced. Focus on
                    value and clarity first.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can AI handle multiple automation niches?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes, as long as you give it clear instructions and examples
                    for each niche. You can build separate prompt templates per
                    channel if needed.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How much editing do automation scripts need?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Plan to edit for accuracy, pacing, and tone. Over time, you
                    can refine your prompts to reduce edits, but human review is
                    still important.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Is YouTube automation only about faceless channels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    No. Many creators automate parts of their workflow while
                    still appearing on camera. This prompt works for both faceless
                    and hybrid channels.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I use this prompt for Shorts automation?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Mention that you are scripting Shorts and adjust the
                    target length and pacing. You can also pair this with the
                    Shorts script generator page.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How many scripts should I batch per channel?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many operators batch 4–8 scripts at a time per channel, then
                    move to recording and editing. Experiment to find your best
                    rhythm.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does automation hurt authenticity?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It does not have to. When scripts are thoughtful and you are
                    transparent about your value, automation simply becomes a way
                    to deliver more of what works.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Pair this automation script prompt with other tools to design an
                efficient content engine.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <Link
                  href="/faceless-youtube-script-prompt"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Faceless YouTube Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Script videos for fully faceless automation channels.
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
                    Extend your automation system to vertical content.
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
                    Turn ideas into outlines that multiple editors can follow.
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
                    Plan video ideas across several automation channels.
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
                    Generate tag sets you can reuse across entire automation
                    series.
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
                    Build hashtag systems that match your automation strategy.
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
                automation prompts you can use with ChatGPT or Claude. Use them
                alongside this page to refine your content engine.
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
