import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const DOCUMENTARY_STYLES = [
  "Narrated mini-documentary with B-roll and archival footage",
  "Interview-driven story with supporting visuals",
  "Case-study style breakdown with voiceover and graphics",
];

const STORY_ARCS = [
  "Hero's journey (struggle to transformation)",
  "Problem-solution with a clear turning point",
  "Before-and-after case study",
];

export default function DocumentaryScriptPromptPage() {
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [style, setStyle] = useState(
    "Narrated mini-documentary with B-roll and archival footage",
  );
  const [arc, setArc] = useState("Hero's journey (struggle to transformation)");
  const [length, setLength] = useState("12–20 minutes");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic ||
      "the story of how one creator turned a small YouTube channel into a full-time business";
    const baseSubject =
      subject || "online creators, YouTube growth, and digital storytelling";

    return [
      "You are an experienced documentary scriptwriter for YouTube and streaming platforms.",
      "",
      "Write a complete documentary-style YouTube script based on the details below.",
      "",
      `- Documentary topic: ${baseTopic}`,
      `- Subject area: ${baseSubject}`,
      `- Preferred documentary style: ${style}`,
      `- Story arc: ${arc}`,
      `- Target length: ${length}`,
      "",
      "Tone and pacing:",
      "- Cinematic and thoughtful, but still accessible for YouTube audiences.",
      "- Balances information with emotional storytelling and character moments.",
      "",
      "Script requirements:",
      "- Open with a cold open or teaser that drops viewers into a key moment or quote.",
      "- Establish the central question or tension within the first minute.",
      "- Introduce the main character(s) or subject clearly and memorably.",
      "- Structure the story in acts or chapters that build toward a resolution.",
      "- Include notes for B-roll, archival footage, and key on-screen text.",
      "- Weave in data, context, or expert commentary without slowing the story.",
      "- End with a reflection, takeaway, or call to action that feels earned.",
      "",
      "Output format:",
      "- Sections: Cold open, Act I, Act II, Act III, Resolution, Closing.",
      "- Natural spoken English for voiceover and/or on-camera narration.",
      "- Visual suggestions in brackets where impactful.",
    ].join("\n");
  }, [topic, subject, style, arc, length]);

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
          Documentary Script Prompt – Plan Narrative YouTube Documentaries
        </title>
        <meta
          name="description"
          content="Use this documentary script prompt to craft cinematic YouTube stories. Generate documentary-style prompts for ChatGPT and AI script tools."
        />
        <meta
          name="keywords"
          content="documentary script prompt, YouTube documentary script, case study video prompt, storytelling script"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/documentary-script-prompt"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Documentary Script Prompt Generator"
        />
        <meta
          property="og:description"
          content="Generate documentary-style YouTube scripts with this free prompt builder."
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
                Documentary Script Prompt
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Real Stories into Documentary-Style YouTube Scripts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Documentary videos demand more than a list of facts. This prompt
                helps you brief AI to structure real stories into acts, weave in
                context, and keep viewers watching to the final frame. It belongs
                to the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                , so your documentary scripts can live alongside prompts for
                hooks, titles, and supporting content.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                You can also combine this page with the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                to design research workflows, interview prep, and follow-up
                content, keeping everything inside one prompt system.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Documentary Script Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Built for documentary-style channels.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Documentary, case study, and long-form stories</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Watch time and emotional engagement</dd>
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
                Documentary Script Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your topic, subject, style, and story arc. Get a
                documentary script prompt you can paste into ChatGPT.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Documentary topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. how one creator turned burnout into a sustainable YouTube business"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Subject area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. creators, business, finance, technology, culture"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Documentary style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {DOCUMENTARY_STYLES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Story arc
                  </label>
                  <select
                    value={arc}
                    onChange={(e) => setArc(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {STORY_ARCS.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target length
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12–20 minutes, 25–35 minutes"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
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
                  documentary-style YouTube script.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI for Documentary-Style YouTube Scripts</h2>
              <p>
                Documentary videos combine story, information, and emotion. That
                makes them powerful but time-consuming to write from scratch. AI
                can help you move faster if your prompts explain the story arc,
                style, and subject clearly.
              </p>
              <p>
                This page is built to capture that context. Instead of asking for
                a generic script, you are briefing AI like a producer: What story
                are we telling, who is involved, what style are we using, and
                where do we want viewers to end up?
              </p>
              <p>
                The result is a script that feels designed for cinematic YouTube
                storytelling rather than a simple talking-head video.
              </p>

              <h2>Best ChatGPT Prompts for Documentary YouTube Scripts</h2>
              <p>
                The best documentary prompts call out conflict and change. They
                highlight what is at stake and how the world looks before and
                after the events of the story.
              </p>
              <p>Effective prompts often include:</p>
              <ul>
                <li>The central question or tension the story explores.</li>
                <li>The main character or subject and why they matter.</li>
                <li>The broader context or industry the story sits within.</li>
                <li>A preferred narrative style or story arc.</li>
                <li>
                  Notes about where interviews, B-roll, and data should appear.
                </li>
              </ul>
              <p>
                By combining those pieces, AI can outline and draft scripts that
                feel more like documentaries than tutorials.
              </p>

              <h2>A Reusable Documentary Script Structure</h2>
              <p>
                While every documentary is unique, many follow a familiar arc that
                keeps viewers engaged from start to finish.
              </p>
              <ol>
                <li>
                  Cold open: Drop into a key moment, quote, or result that hooks
                  attention.
                </li>
                <li>
                  Act I: Introduce the subject, stakes, and central question.
                </li>
                <li>
                  Act II: Explore the journey, obstacles, and attempts at change.
                </li>
                <li>
                  Act III: Show the turning point, outcomes, and consequences.
                </li>
                <li>
                  Closing: Reflect on what the story means and what viewers should
                  take away.
                </li>
              </ol>
              <p>
                The prompt generated here nudges AI to fill in that arc with
                details specific to your topic and style.
              </p>

              <h2>Example Documentary Script Prompts</h2>
              <p>
                The examples below show how different creators and topics can use
                this page to brief AI for documentary-style videos.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free Documentary Script Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template to brief ChatGPT or any AI model to write
                documentary-style scripts for YouTube.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste documentary script template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an experienced documentary scriptwriter for YouTube and streaming platforms.

Write a complete documentary-style YouTube script using these details:
- Documentary topic: [what the story is about]
- Subject area: [creators, business, technology, culture, etc.]
- Preferred style: [narrated mini-doc, interview-driven, case study, etc.]
- Story arc: [hero’s journey, problem-solution, before-and-after, etc.]
- Target length: [e.g. 15 minutes]

Tone and pacing:
- Cinematic and thoughtful, but accessible for YouTube.
- Balances information with emotional storytelling.

Script requirements:
- Open with a cold open or teaser from a key moment or quote.
- Establish the central question or tension quickly.
- Introduce the main character(s) or subject clearly.
- Structure the story into acts that build toward a resolution.
- Include notes for B-roll, archival footage, and on-screen text.
- Weave context and data into the story without overwhelming it.
- End with a reflection or takeaway that feels earned.

Output:
- Sections: Cold open, Act I, Act II, Act III, Resolution, Closing.
- Natural spoken English suitable for voiceover or on-camera narration.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Documentary Script Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this
                template for different documentary topics.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Creator business documentary
                  </p>
                  <p className="mt-1">
                    Generate a documentary script about{" "}
                    <span className="font-medium">
                      how one faceless channel quietly grew to a seven-figure
                      business
                    </span>
                    , focusing on{" "}
                    <span className="font-medium">
                      systems, setbacks, and key turning points
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Technology and culture story
                  </p>
                  <p className="mt-1">
                    Write a mini-documentary script exploring{" "}
                    <span className="font-medium">
                      how AI tools are changing the way small creators run their
                      channels
                    </span>
                    , using{" "}
                    <span className="font-medium">
                      case studies, data, and interviews
                    </span>{" "}
                    to tell the story.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Case study style documentary
                  </p>
                  <p className="mt-1">
                    Create a documentary-style script about{" "}
                    <span className="font-medium">
                      one teacher who turned classroom lessons into a global
                      YouTube channel
                    </span>
                    , highlighting{" "}
                    <span className="font-medium">
                      the shift from in-person to online teaching
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
                    How long should a YouTube documentary be?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many successful YouTube documentaries run 15–40 minutes,
                    depending on the topic. It is better to stay engaging than to
                    hit an arbitrary length target.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Do I need expensive gear to make documentary videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    No. Many creators start with simple cameras, stock footage,
                    and solid storytelling. A strong script often matters more
                    than fancy equipment.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can AI write a full documentary script for me?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    AI can draft outlines and first versions quickly, but you
                    will still want to refine structure, pacing, and voice to fit
                    your story and footage.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How do I make AI-written scripts feel authentic?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Add your own interviews, anecdotes, and observations. You can
                    also give AI real quotes and data to work with, then edit the
                    final script in your voice.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this template work for multi-part documentary series?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can use it to plan each episode as its own arc while
                    still connecting them inside a bigger series storyline.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should I script documentaries word for word?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It depends on your style. Many creators fully script
                    voiceovers but leave room for spontaneous lines around
                    interviews and footage.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How much B-roll should I plan for?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Plan more B-roll than you think you need. Documentary scripts
                    generated with this template include suggestions for visuals
                    so you can collect footage intentionally.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I adapt this for podcast-style documentaries?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can ask AI to focus on audio storytelling with fewer
                    visual cues, then reuse parts of the script for a podcast
                    version.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools alongside the documentary script prompt to build
                a powerful storytelling workflow.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <Link
                  href="/storytelling-script-prompt"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Storytelling Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Develop narrative skills that support your documentary work.
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
                    Turn research into outlines for each act of your story.
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
                    Design cinematic thumbnails that match your documentary tone.
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
                    Generate emotional, searchable titles for documentary videos.
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
                    Turn your story into a detailed, SEO-friendly description.
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
                    Generate tags that help viewers discover your documentary
                    series.
                  </p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Want More Advanced Prompts?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get a free PDF with 50 high-retention YouTube script and
                storytelling prompts you can use with ChatGPT or Claude. Use them
                alongside this documentary script prompt to plan your next series.
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
