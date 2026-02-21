import Head from "next/head";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

const VIDEO_TYPES = [
  "Tutorial",
  "Review",
  "Vlog",
  "Educational",
  "Documentary",
  "Livestream replay",
];

const CTAS = [
  "Subscribe to the channel",
  "Join the email list",
  "Download the free resource",
  "Check the product or affiliate links",
  "Book a call or strategy session",
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

function buildDescriptionPrompt(options: {
  topic: string;
  videoType: string;
  keyPoints: string;
  audience: string;
  links: string;
  callToAction: string;
}) {
  const { topic, videoType, keyPoints, audience, links, callToAction } = options;

  return [
    `You are an expert YouTube strategist and copywriter.`,
    ``,
    `Write a complete, SEO-friendly YouTube video description for the following video:`,
    ``,
    `- Topic: ${
      topic || "How to plan, script, and film a month of YouTube content in one weekend"
    }`,
    `- Video type: ${videoType || "Tutorial"}`,
    `- Target audience: ${
      audience || "busy creators who want to publish consistently without burning out"
    }`,
    `- Key points covered in the video: ${
      keyPoints ||
      "planning system, content calendar, batching filming, simple editing workflow"
    }`,
    `- Important links and resources to include: ${
      links ||
      "channel subscribe link, Notion template, affiliate links for camera and mic, newsletter signup"
    }`,
    `- Primary call to action: ${
      callToAction || "Join the email list for weekly creator systems tips"
    }`,
    ``,
    `Description requirements:`,
    `- Start with 2–3 strong sentences that clearly describe the value of the video and speak directly to the target audience.`,
    `- Naturally include the main topic and related keywords without keyword stuffing.`,
    `- Add a short “About this channel” paragraph to build brand consistency.`,
    `- Include a clear section for links and resources with descriptive labels (not just raw URLs).`,
    `- Add a simple call-to-action section that repeats the main call to action.`,
    `- Add 5–10 hashtag suggestions at the end (on separate lines).`,
    ``,
    `Format your answer with clean line breaks and headings so it can be pasted directly into YouTube.`,
  ].join("\n");
}

export default function YouTubeDescriptionGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [videoType, setVideoType] = useState("Tutorial");
  const [keyPoints, setKeyPoints] = useState("");
  const [audience, setAudience] = useState("");
  const [links, setLinks] = useState("");
  const [callToAction, setCallToAction] = useState(CTAS[0]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildDescriptionPrompt({
        topic,
        videoType,
        keyPoints,
        audience,
        links,
        callToAction,
      }),
    [topic, videoType, keyPoints, audience, links, callToAction]
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
        <title>
          YouTube Description Generator | AI Tools for YouTube Creators
        </title>
        <meta
          name="description"
          content="Generate SEO-friendly YouTube descriptions in seconds. AI-powered description prompt generator designed to increase watch time, clicks, and conversions."
        />
        <meta
          name="keywords"
          content="YouTube description generator, AI YouTube descriptions, YouTube SEO description, YouTube video description template"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-description-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Description Generator for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create detailed YouTube description prompts that boost SEO and conversions."
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
                YouTube Description Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Your Video Into a High-Performing Description
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Your description is more than a formality. It is a place to sell
                the value of the video, support SEO, and drive clicks to your
                offers. This prompt builder helps AI write descriptions that work
                for humans and algorithms.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                To keep everything aligned, start with ideas from the{" "}
                <Link href="/youtube-video-idea-generator">
                  YouTube Video Idea Generator
                </Link>
                , build your script in the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>
                , then shape the surface-level metadata with the{" "}
                <Link href="/youtube-title-generator">
                  YouTube Title Generator
                </Link>{" "}
                and{" "}
                <Link href="/youtube-thumbnail-prompt-generator">
                  Thumbnail Prompt Generator
                </Link>
                . Finally, use this page together with the{" "}
                <Link href="/youtube-tags-generator">YouTube Tags Generator</Link>{" "}
                so your tags reinforce what the description promises.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Description Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Built for YouTube creators.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Descriptions, links, channel positioning</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>SEO, click-through, conversions</dd>
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
                Description Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your video and offers. Get a detailed prompt you can use
                in any AI tool.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. How to turn one long-form video into 20 clips"
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
                    Key points covered
                  </label>
                  <textarea
                    placeholder="e.g. main frameworks, steps, tools, mindsets you cover in the video"
                    value={keyPoints}
                    onChange={(e) => setKeyPoints(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. full-time creators, side-hustle creators, education channels, etc."
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Links and resources
                  </label>
                  <textarea
                    placeholder="e.g. subscribe link, lead magnet, course, tools, affiliate links"
                    value={links}
                    onChange={(e) => setLinks(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary call to action
                  </label>
                  <select
                    value={callToAction}
                    onChange={(e) => setCallToAction(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {CTAS.map((cta) => (
                      <option key={cta} value={cta}>
                        {cta}
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
                  generate your description.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Write YouTube Descriptions That Do More</h2>
              <p>
                Many creators treat the description box as an afterthought. They
                paste a couple of lines, drop some links, and move on. But a
                well-written description can increase watch time, improve search
                visibility, and send more clicks to your products and offers.
              </p>
              <p>
                AI is a perfect partner for this job. It can expand your ideas
                into a full, structured description while you stay in control of
                the strategy and key messaging.
              </p>

              <h3>The three jobs of a YouTube description</h3>
              <p>A great YouTube description usually has to do three things:</p>
              <ul>
                <li>Explain the video in a clear, compelling way.</li>
                <li>
                  Help YouTube understand who the video is for and what it is
                  about.
                </li>
                <li>
                  Guide interested viewers toward the next step in your
                  ecosystem.
                </li>
              </ul>
              <p>
                When you include your audience, key points, and links in the
                prompt, AI can structure the description so it works on all three
                levels at once.
              </p>

              <h3>Turning one video into a mini landing page</h3>
              <p>
                Think of your description as a lightweight landing page for the
                video. It should reinforce the promise of the title, set
                expectations, and give viewers options if they want to go deeper.
              </p>
              <p>
                You can ask AI (via this prompt) to add mini headings like
                “What you will learn”, “Tools mentioned”, or “Next steps” to make
                your description skimmable. This makes it easier for both humans
                and algorithms to parse.
              </p>

              <h3>Keeping descriptions consistent across your channel</h3>
              <p>
                As your channel grows, having completely different descriptions on
                every video can feel chaotic. AI prompts like this let you define
                a consistent structure that still adapts to each topic. You can
                standardize:
              </p>
              <ul>
                <li>Your “About the channel” paragraph.</li>
                <li>The order and naming of your key links.</li>
                <li>How you phrase your main call to action.</li>
              </ul>
              <p>
                Over time, this consistency teaches your audience what to expect
                and makes it easier for you to publish quickly without sacrificing
                quality.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Description Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template whenever you want a reusable, SEO-friendly
                YouTube description prompt. It works for tutorials, reviews,
                livestream replays, and more.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste description template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube strategist and copywriter.

Write a complete, SEO-friendly YouTube video description using these details:
- Topic: [what the video is about]
- Video type: [tutorial / review / vlog / educational / documentary / livestream replay]
- Target audience: [who the video serves]
- Key points covered: [main frameworks, steps, tools, mindsets]
- Important links and resources: [subscribe link, lead magnet, offers, tools, affiliates]
- Primary call to action: [what you most want viewers to do next]

Description requirements:
- Start with 2–3 strong sentences that clearly describe the value for the viewer.
- Naturally include the main topic and related keywords without keyword stuffing.
- Add a short “About this channel” paragraph to build consistency.
- Add a section for links and resources with descriptive labels (not just raw URLs).
- Add a clear call-to-action section that repeats the main call to action.
- Add 5–10 hashtag suggestions at the end on separate lines.

Format the output with clean line breaks and headings so it can be pasted directly into YouTube.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Description Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts that match different types of
                channels and offers.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Creator systems channel
                  </p>
                  <p className="mt-1">
                    Write a full YouTube description for an{" "}
                    <span className="font-medium">Educational</span> video about{" "}
                    <span className="font-medium">
                      building a repeatable YouTube content system using Notion
                      and Google Calendar
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      solo creators who work a 9–5 job
                    </span>
                    . Include links to{" "}
                    <span className="font-medium">
                      a free Notion template, an email newsletter, and camera
                      gear affiliate links
                    </span>
                    , and focus the call to action on{" "}
                    <span className="font-medium">
                      joining the email list
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Tech / gear review channel
                  </p>
                  <p className="mt-1">
                    Generate a detailed description for a{" "}
                    <span className="font-medium">Review</span> of{" "}
                    <span className="font-medium">
                      the best budget YouTube camera setup under $1,000
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      creators upgrading from their smartphone
                    </span>
                    . Include{" "}
                    <span className="font-medium">
                      affiliate links, a newsletter, and a free camera settings
                      cheat sheet
                    </span>
                    , with the main call to action to{" "}
                    <span className="font-medium">
                      download the cheat sheet
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Education / course business channel
                  </p>
                  <p className="mt-1">
                    Write a YouTube description for a{" "}
                    <span className="font-medium">Livestream replay</span> about{" "}
                    <span className="font-medium">
                      validating course ideas using YouTube analytics and
                      community feedback
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      creators between 5k–50k subscribers
                    </span>
                    . Include{" "}
                    <span className="font-medium">
                      a free workshop registration link, a paid program link,
                      and social media links
                    </span>
                    , with the main call to action to{" "}
                    <span className="font-medium">
                      register for the free workshop
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
                <FaqItem question="Will this help with YouTube SEO?">
                  <p>
                    Yes. When you clearly describe your topic, audience, and key
                    points, AI can weave those details into a natural,
                    keyword-rich description that supports search without feeling
                    stuffed or robotic. This generator and the free YouTube
                    description template above are designed with that in mind.
                  </p>
                </FaqItem>
                <FaqItem question="How long should my YouTube description be?">
                  <p>
                    Many top-performing videos use descriptions anywhere from a
                    few paragraphs to several hundred words, especially when
                    there are multiple links and resources. The key is clarity,
                    not word count. This prompt nudges AI toward a detailed but
                    focused description that still feels readable.
                  </p>
                </FaqItem>
                <FaqItem question="Should I include timestamps?">
                  <p>
                    Timestamps are great for longer educational content and
                    tutorials. You can add a note in the prompt like “include a
                    placeholder for timestamps” and then paste in your timestamps
                    after AI generates the main copy so everything lines up with
                    your final edit.
                  </p>
                </FaqItem>
                <FaqItem question="Can I reuse the same description structure?">
                  <p>
                    Yes. In fact, that is one of the biggest benefits. You can
                    keep the structure and “About the channel” section similar
                    across videos while customizing the topic, key points, and
                    offers. That makes your channel feel more consistent and
                    saves time.
                  </p>
                </FaqItem>
                <FaqItem question="Does this work for faceless YouTube channels?">
                  <p>
                    It does. Even if you never appear on camera, your
                    descriptions can still explain your value, link to offers,
                    and support SEO. You can mention that the channel is faceless
                    inside the prompt if that context is important to viewers or
                    sponsors.
                  </p>
                </FaqItem>
                <FaqItem question="Can AI write descriptions for YouTube Shorts?">
                  <p>
                    Yes. You can specify that the video is a Short and ask the
                    AI to keep the description more compact while still
                    including key information and hashtags. Shorts descriptions
                    often work best when they are simple but keyword aware.
                  </p>
                </FaqItem>
                <FaqItem question="How many keywords should I target in a description?">
                  <p>
                    It is usually safer to have one primary keyword or phrase and
                    a handful of related terms. Overloading the description with
                    keywords can feel spammy. The templates on this page are
                    built to keep language natural while still signaling what the
                    video is about.
                  </p>
                </FaqItem>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Connect descriptions with hooks, scripts, and titles so every
                element tells the same story.
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
                    Start with a clear script so your description aligns with the
                    content.
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
                    Make sure your first line and description work together to
                    keep viewers.
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
                    Match your description to titles that people actually want to
                    click.
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
                    Generate tags and hashtags that support your descriptions and
                    keywords.
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
                    Make sure your thumbnails, titles, and descriptions all tell
                    the same story.
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
                    Fill your calendar with ideas before you write scripts or
                    descriptions.
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
                    Create descriptions that support faceless, B-roll-focused
                    content and voiceovers.
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
                    Write tight descriptions that fit Shorts-style viewing
                    behavior.
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
                    Support automation channels with descriptions that scale
                    across many uploads.
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
                    Align lesson-style descriptions with structured, educational
                    scripts.
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
                    Write descriptions that support documentary, series, and
                    narrative uploads.
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
                    Pair this generator with story-first scripts that lead into
                    clear CTAs.
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
                description prompts you can plug into ChatGPT or Claude for your
                next uploads.
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
