import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const STORY_TYPES = [
  "Personal story from the creator's life",
  "Customer or client case study",
  "Fictional scenario that illustrates a lesson",
];

const STORY_GOALS = [
  "Build connection and trust with the audience",
  "Teach a lesson or share a key insight",
  "Introduce a product, service, or offer naturally",
];

export default function StorytellingScriptPromptPage() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("Personal story from the creator's life");
  const [goal, setGoal] = useState(
    "Build connection and trust with the audience",
  );
  const [audience, setAudience] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic ||
      "a story about nearly quitting YouTube before finding a sustainable workflow";
    const baseAudience =
      audience ||
      "creators who want to grow on YouTube without burning out or losing their voice";

    return [
      "You are a YouTube storytelling coach and scriptwriter.",
      "",
      "Write a complete storytelling-style YouTube script based on the details below.",
      "",
      `- Story topic: ${baseTopic}`,
      `- Story type: ${type}`,
      `- Main goal of the story: ${goal}`,
      `- Intended audience: ${baseAudience}`,
      "",
      "Tone and style:",
      "- Honest, human, and reflective, with clear moments of tension and change.",
      "- Focused on one main story instead of many tips.",
      "",
      "Script requirements:",
      "- Begin with a compelling opening line that drops viewers into the moment or stakes.",
      "- Quickly establish who the story is about and what they wanted.",
      "- Build tension by showing obstacles, doubts, or conflicting options.",
      "- Include at least one vivid scene or concrete moment viewers can picture.",
      "- Show the turning point or realization clearly.",
      "- End with a concise takeaway and, if relevant, a natural call to action.",
      "",
      "Output format:",
      "- Sections: Opening, Setup, Conflict, Turning point, Resolution, Takeaway.",
      "- Natural spoken English that sounds like a creator telling a story to their audience.",
      "- Occasional notes for on-screen text or B-roll in brackets.",
    ].join("\n");
  }, [topic, type, goal, audience]);

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
          Storytelling Script Prompt for Case Studies &amp; Brand Stories
        </title>
        <meta
          name="description"
          content="Use this storytelling script prompt to craft engaging YouTube videos. Generate story-driven prompts for ChatGPT and AI script tools."
        />
        <meta
          name="keywords"
          content="storytelling script prompt, YouTube storytelling script, case study story prompt, creator story video"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/storytelling-script-prompt"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Storytelling Script Prompt Generator"
        />
        <meta
          property="og:description"
          content="Generate story-driven YouTube scripts with this free storytelling prompt builder."
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
                Storytelling Script Prompt
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Experiences into Story-Driven YouTube Scripts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Not every video should be a list of tips. Sometimes the most
                powerful way to teach or connect is through a single well-told
                story. This prompt builder helps you brief AI to shape your
                experiences into structured narratives.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Storytelling Script Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works for personal and client stories.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Creators, coaches, and storytellers</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Connection, watch time, and message clarity</dd>
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
                Storytelling Script Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your story, type, and audience. Get a storytelling
                script prompt you can paste into ChatGPT.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Story topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. almost quitting YouTube before finding a better system"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Story type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {STORY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main goal of the story
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {STORY_GOALS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Intended audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. small creators juggling YouTube with a full-time job"
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
                  storytelling YouTube script.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI for Storytelling YouTube Scripts</h2>
              <p>
                Storytelling videos are where your personality and perspective
                have the most impact. They can deepen loyalty, open up about hard
                experiences, or illustrate lessons more powerfully than lists of
                tips ever could.
              </p>
              <p>
                AI can help you structure those stories without flattening them.
                By giving it context about the type of story, the goal, and the
                audience, you can turn raw experiences into clear arcs with
                emotional beats.
              </p>
              <p>
                This page is designed to help you frame stories the way a writing
                coach would, then let AI handle the first draft.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Storytelling Scripts</h2>
              <p>
                The best storytelling prompts focus on one story at a time. They
                avoid turning everything into a long advice video and instead
                lean on moments, emotions, and specific decisions.
              </p>
              <p>Strong prompts often include:</p>
              <ul>
                <li>The specific event or journey you want to share.</li>
                <li>Who the story is for and what they are struggling with.</li>
                <li>The emotional tone you want: hopeful, honest, intense, calm.</li>
                <li>
                  The key insight or takeaway you want viewers to remember.
                </li>
                <li>
                  Whether you want to introduce an offer or next step at the end.
                </li>
              </ul>
              <p>
                This prompt builder makes sure those elements are part of the
                brief.
              </p>

              <h2>A Simple Storytelling Script Structure</h2>
              <p>
                Most story-driven videos can follow a simple but powerful arc that
                keeps viewers engaged and gives the story meaning.
              </p>
              <ol>
                <li>Opening: Drop into a vivid moment or bold statement.</li>
                <li>
                  Setup: Explain who you are, what you wanted, and why it
                  mattered.
                </li>
                <li>
                  Conflict: Share the obstacles, doubts, and setbacks along the
                  way.
                </li>
                <li>
                  Turning point: Show the decision or realization that changed
                  things.
                </li>
                <li>
                  Resolution: Describe what happened after and where things stand
                  now.
                </li>
                <li>
                  Takeaway: Connect the story back to the viewer and what they
                  can do.
                </li>
              </ol>
              <p>
                The prompt generated on this page nudges AI to build scripts
                around that arc.
              </p>

              <h2>Example Storytelling Script Prompts</h2>
              <p>
                The examples below show how different types of creators can brief
                AI using this storytelling template.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free Storytelling Script Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template to brief ChatGPT or any AI model to write
                story-driven YouTube scripts.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste storytelling script template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are a YouTube storytelling coach and scriptwriter.

Write a complete storytelling-style YouTube script using these details:
- Story topic: [what happens in this story]
- Story type: [personal story, client case study, fictional scenario]
- Main goal: [connection, lesson, or natural introduction to an offer]
- Intended audience: [who this story is for and what they are dealing with]

Tone and style:
- Honest, human, and reflective.
- Focused on one main story, not a list of tips.

Script requirements:
- Start with a compelling opening line that drops viewers into the stakes.
- Quickly establish who the story is about and what they wanted.
- Build tension with obstacles, doubts, and hard choices.
- Include at least one vivid, concrete scene.
- Show the turning point or realization clearly.
- End with a concise takeaway and optional, natural CTA.

Output:
- Sections: Opening, Setup, Conflict, Turning point, Resolution, Takeaway.
- Natural spoken English that sounds like a creator telling a story.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Storytelling Script Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this
                storytelling template for different niches and goals.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Creator burnout story
                  </p>
                  <p className="mt-1">
                    Generate a storytelling script about{" "}
                    <span className="font-medium">
                      nearly quitting YouTube after posting weekly for a year
                      with little growth
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      small creators feeling stuck
                    </span>{" "}
                    and{" "}
                    <span className="font-medium">
                      ending with a message of hope and a new system
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Client case study story
                  </p>
                  <p className="mt-1">
                    Write a script for a{" "}
                    <span className="font-medium">
                      case study about a client who grew from 0 to 50K
                      subscribers
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      creators considering hiring a coach or agency
                    </span>
                    , with a{" "}
                    <span className="font-medium">
                      soft CTA to book a discovery call
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Fictional scenario story
                  </p>
                  <p className="mt-1">
                    Create a storytelling script that{" "}
                    <span className="font-medium">
                      imagines a day in the life of a future version of the
                      viewer
                    </span>
                    who{" "}
                    <span className="font-medium">
                      has built a sustainable YouTube-driven business
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      inspiring newer creators to keep going
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
                    How long should a storytelling YouTube video be?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many story-driven videos work well between 8 and 18 minutes.
                    What matters most is pacing: move the story forward and avoid
                    repeating yourself.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can AI really capture my voice in a story?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    AI can draft a structured script. You can then edit phrases,
                    add personal details, and adjust the tone until it sounds like
                    you.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should storytelling videos always include a CTA?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Not always. Some stories are best left as pure connection
                    pieces. When you do include a CTA, keep it short and aligned
                    with the story&apos;s message.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How personal should I get in my stories?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Share enough detail for the story to feel real, but protect
                    any parts of your life you are not ready to share. You can
                    always change names or combine experiences.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I reuse the same story on multiple platforms?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can adapt the same core story into formats for
                    YouTube, newsletters, podcasts, and social posts. AI can help
                    restructure it for each format.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    What if I feel like my stories are not interesting enough?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many viewers connect most with everyday, relatable stories.
                    Focus on specific moments, honest emotions, and lessons
                    instead of big dramatic events.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I combine stories with teaching in one video?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can use a story to lead into a short teaching
                    section or to demonstrate why a tip matters. This template
                    helps you anchor the video in a story first.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How often should I post storytelling videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators mix storytelling videos into their schedule
                    once or twice per month as deeper connection pieces alongside
                    tactical content.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Combine this storytelling script prompt with other tools to build
                a channel that balances story and strategy.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <Link
                  href="/documentary-script-prompt"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Documentary Script Prompt
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Extend your storytelling into cinematic documentary videos.
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
                    Mix story-driven videos with structured educational content.
                  </p>
                </Link>
                <Link
                  href="/educational-youtube-script-template"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Educational Script Template
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Turn your lessons into clear, structured teaching videos.
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
                    Plan a mix of story, tutorial, and case study videos.
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
                    Turn your story ideas into click-worthy but honest titles.
                  </p>
                </Link>
                <Link
                  href="/youtube-thumbnail-prompt-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    Thumbnail Prompt Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Design thumbnails that highlight the key moment in your
                    story.
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
                alongside this storytelling script prompt to build a deeper
                connection with your audience.
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
