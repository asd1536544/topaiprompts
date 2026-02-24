import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const THUMBNAIL_STYLES = [
  "Clean & minimal",
  "Bold & colorful",
  "Documentary-style",
  "Faceless automation",
  "Educational whiteboard",
];

const EMOTIONS = [
  "Curiosity",
  "Excitement",
  "Authority",
  "Calm & trust",
  "Urgency",
];

export default function YouTubeThumbnailPromptGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [mainText, setMainText] = useState("");
  const [style, setStyle] = useState("Clean & minimal");
  const [emotion, setEmotion] = useState("Curiosity");
  const [brandNotes, setBrandNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic || "how to grow a faceless YouTube channel using AI automation";
    const baseText =
      mainText || "Grow on YouTube without showing your face";
    const baseBrand =
      brandNotes ||
      "brand uses indigo and white, clean layouts, and simple shapes";

    return [
      "You are an expert YouTube thumbnail designer and direct-response marketer.",
      "",
      "Design a YouTube thumbnail concept for the following video:",
      "",
      `- Video topic: ${baseTopic}`,
      `- Main thumbnail text: ${baseText}`,
      `- Visual style: ${style}`,
      `- Core emotion to trigger: ${emotion}`,
      `- Brand notes: ${baseBrand}`,
      "",
      "Requirements:",
      "- Focus on one clear idea with strong contrast between background and subject.",
      "- Make the text large, readable on mobile, and limited to 2–5 words.",
      "- Avoid clutter, tiny text, and generic stock imagery.",
      "- Suggest 2–3 different composition options I can test.",
      "",
      "Output format:",
      "- First, describe the overall concept in 2–3 sentences.",
      "- Then, list 2–3 specific thumbnail variants with:",
      "  - Background description",
      "  - Subject placement and pose (if applicable)",
      "  - Main text and supporting visual elements",
      "  - Color and contrast recommendations.",
    ].join("\n");
  }, [topic, mainText, style, emotion, brandNotes]);

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
          YouTube Thumbnail Prompt Generator for High-Converting Thumbnails
        </title>
        <meta
          name="description"
          content="Generate high-converting YouTube thumbnail prompts in seconds. Use this free AI prompt builder to design click-worthy thumbnails that match your video and title."
        />
        <meta
          name="keywords"
          content="YouTube thumbnail prompt, YouTube thumbnail generator, YouTube thumbnail template, AI YouTube thumbnail"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-thumbnail-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Thumbnail Prompt Generator for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create detailed YouTube thumbnail prompts that increase click-through rate."
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
                YouTube Thumbnail Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Your Video Idea Into a Click-Worthy Thumbnail
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Thumbnails decide whether your video ever gets a chance to be
                watched. This prompt builder turns your topic, text, and brand
                style into a detailed thumbnail brief you can paste into ChatGPT,
                Midjourney, or a designer checklist.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Thumbnail Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>CTR, browse, suggested feed</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>YouTube home, Shorts, and subscriptions</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>ChatGPT, Midjourney, Figma prompts</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Thumbnail Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your video, text, and brand. Get a detailed prompt to
                design testable thumbnails.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. How to batch 30 faceless YouTube Shorts in one day"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main thumbnail text
                  </label>
                  <input
                    type="text"
                    placeholder='e.g. "No-Face YouTube Growth"'
                    value={mainText}
                    onChange={(e) => setMainText(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Visual style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {THUMBNAIL_STYLES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Core emotion
                  </label>
                  <select
                    value={emotion}
                    onChange={(e) => setEmotion(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {EMOTIONS.map((eValue) => (
                      <option key={eValue} value={eValue}>
                        {eValue}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Brand notes (optional)
                  </label>
                  <textarea
                    placeholder="e.g. Use brand colors, avoid stock photos, prefer illustrations, keep it clean and minimal"
                    value={brandNotes}
                    onChange={(e) => setBrandNotes(e.target.value)}
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
                  Paste this into ChatGPT, Midjourney, or your favorite AI tool
                  to generate thumbnail ideas.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Design Better YouTube Thumbnails</h2>
              <p>
                Great thumbnails do two jobs at once: they clarify what the video
                is about and spark enough curiosity for someone to stop scrolling.
                Instead of opening a design tool with a blank canvas, you can use
                AI as a thumbnail strategist. The key is to give the model a
                clear brief that covers topic, text, style, and emotion.
              </p>
              <p>
                You get the best results when your thumbnail ideas line up with
                a clear script and title. Many creators start on the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>
                , test headlines in the{" "}
                <Link href="/youtube-title-generator">
                  YouTube Title Generator
                </Link>
                , and then come here to translate that promise into visuals. You
                can also tighten your SEO by pairing this page with the{" "}
                <Link href="/youtube-tags-generator">YouTube Tags Generator</Link>{" "}
                and{" "}
                <Link href="/youtube-hashtag-generator">
                  YouTube Hashtag Generator
                </Link>
                .
              </p>
              <p>
                When you describe your faceless channel, educational series, or
                documentary-style video in detail, AI can propose visual concepts
                that match the promise of your title. It can also suggest
                alternative text phrases, color palettes, and compositions that
                you would not think of on your own.
              </p>
              <p>
                This thumbnail prompt generator helps you capture that brief in a
                repeatable way. You answer the same core questions every time,
                then reuse a proven prompt structure to generate ideas faster.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Thumbnail Ideas</h2>
              <p>
                A strong YouTube thumbnail prompt does more than ask for “a good
                thumbnail”. It explains who the thumbnail is for, what emotion it
                should trigger, and how it should stand out on the YouTube home
                feed or Shorts shelf.
              </p>
              <p>Effective prompts usually include:</p>
              <ul>
                <li>The exact video topic and main value proposition.</li>
                <li>
                  The headline or main text you expect to show on the thumbnail.
                </li>
                <li>
                  The emotion you want viewers to feel when they see it in their
                  feed.
                </li>
                <li>
                  Brand notes around colors, fonts, and imagery you prefer to
                  use.
                </li>
                <li>
                  A request for multiple variations so you have options to test.
                </li>
              </ul>
              <p>
                When you feed this level of detail into ChatGPT or an image model
                prompt, you turn AI into a creative director rather than a random
                idea generator.
              </p>

              <h2>Step-by-Step Thumbnail Strategy for Higher CTR</h2>
              <p>
                YouTube thumbnails are highly competitive real estate. A simple,
                repeatable process can keep you from overthinking every design.
              </p>
              <ol>
                <li>
                  Start with the promise. Decide what outcome or transformation
                  the video delivers and make that the heart of your thumbnail.
                </li>
                <li>
                  Pick one emotion. Curiosity, fear of missing out, relief, or
                  excitement all work—just avoid mixing too many at once.
                </li>
                <li>
                  Reduce the text. Most high-performing thumbnails use 2–5 words
                  that can be read in less than a second on mobile.
                </li>
                <li>
                  Simplify the visual story. One subject, one main symbol, and
                  one clear direction of attention usually beats a busy collage.
                </li>
                <li>
                  Generate several options. Use this prompt to ask AI for at
                  least 2–3 thumbnail concepts and test them over time.
                </li>
              </ol>
              <p>
                Over dozens of uploads, these small decisions compound into a
                stronger click-through rate and more predictable performance on
                browse and suggested feeds.
              </p>

              <h2>Examples of High-Converting Thumbnail Prompts</h2>
              <p>
                The examples below show how different channels could brief AI
                using this thumbnail prompt generator. Each focuses on a single
                clear idea and emotion.
              </p>
              <p>
                You can adapt these prompts to your niche by swapping in your
                topic, audience, and preferred visual style while keeping the
                underlying structure the same.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Thumbnail Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template as a reusable YouTube thumbnail prompt for
                beginners and advanced creators. Paste it into ChatGPT, Claude,
                or your design brief and customize the bracketed parts.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste thumbnail template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube thumbnail designer and direct-response marketer.

Design 3 YouTube thumbnail concepts for the video below:
- Video topic: [describe the video in one sentence]
- Main thumbnail text: [2–5 word phrase to display]
- Visual style: [clean & minimal / bold & colorful / documentary / faceless automation]
- Core emotion: [curiosity / excitement / authority / calm / urgency]
- Brand notes: [colors, fonts, visual guidelines]

Requirements:
- Make the text large, readable on mobile, and limited to 2–5 words.
- Focus on one clear idea with strong contrast between background and subject.
- Avoid clutter, tiny text, and generic stock photos.

For each concept, describe:
- Background
- Main subject and pose
- Main text and supporting visual elements
- Color and contrast recommendations.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Thumbnail Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this tool,
                tailored to different kinds of channels.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Faceless automation channel
                  </p>
                  <p className="mt-1">
                    Design three thumbnail concepts for a{" "}
                    <span className="font-medium">faceless YouTube automation</span>{" "}
                    video about{" "}
                    <span className="font-medium">
                      earning $3,000/month with AI-generated videos
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      beginners who do not want to show their face
                    </span>
                    . Use a{" "}
                    <span className="font-medium">bold & colorful</span> style
                    that triggers{" "}
                    <span className="font-medium">curiosity and excitement</span>.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Educational productivity channel
                  </p>
                  <p className="mt-1">
                    Create thumbnail ideas for an{" "}
                    <span className="font-medium">educational Notion tutorial</span>{" "}
                    on{" "}
                    <span className="font-medium">
                      building a YouTube content calendar that fits into 5 hours
                      per week
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      busy part-time creators
                    </span>{" "}
                    who want{" "}
                    <span className="font-medium">
                      calm, organized visuals
                    </span>
                    . Use a{" "}
                    <span className="font-medium">clean & minimal</span> style
                    that feels{" "}
                    <span className="font-medium">trustworthy and clear</span>.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Tech review channel
                  </p>
                  <p className="mt-1">
                    Generate thumbnail prompts for a{" "}
                    <span className="font-medium">gear review</span> on{" "}
                    <span className="font-medium">
                      the best budget YouTube camera setup under $1,000
                    </span>
                    , targeting{" "}
                    <span className="font-medium">
                      creators upgrading from smartphones
                    </span>{" "}
                    who care about{" "}
                    <span className="font-medium">
                      image quality and simple setups
                    </span>
                    . Emphasize{" "}
                    <span className="font-medium">authority and clarity</span>{" "}
                    over hype.
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
                    Do thumbnails matter more than titles?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    They work together. Many viewers notice the thumbnail first,
                    then check the title to confirm the topic. Strong channels
                    design both elements as a pair instead of treating them
                    separately.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I use this thumbnail prompt for faceless channels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Mention that you run a faceless or automation channel in
                    the prompt and ask for concepts that rely on symbols, charts,
                    and text instead of your face.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How many thumbnail concepts should I test?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators design two or three strong options for a video
                    and test them over time. You can rotate thumbnails after
                    publishing if performance is weaker than expected.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    What mistakes should I avoid in YouTube thumbnails?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Tiny text, low contrast, and trying to show too many ideas at
                    once are common problems. It is better to choose one concept
                    and exaggerate it visually.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does this work for Shorts thumbnails?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can mention that the video is a Short and ask for
                    vertical-friendly thumbnail ideas or overlays that still read
                    well on mobile.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How do I combine AI and manual design?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use AI to brainstorm concepts and layouts, then refine the
                    best idea manually in your design tool so it fits your brand
                    guidelines and standards.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this help me build a thumbnail system?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. By reusing the same prompt structure, you can develop
                    consistent patterns for series, playlists, and recurring
                    formats on your channel.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should I localize thumbnails for other languages?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    If you have a large audience in another language, you can ask
                    AI for localized text variations and design separate
                    thumbnails for those viewers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to connect your scripts, titles,
                thumbnails, and tags into one workflow.
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
                    Start with a clear script so your thumbnail matches the story.
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
                    Align your thumbnail visuals with strong hook angles.
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
                    Pair your thumbnails with titles that viewers want to click.
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
                    Write descriptions that support your thumbnail and title.
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
                    Generate tags that match the story your thumbnail tells.
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
                    Fill your content calendar with ideas worth designing for.
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
                alongside this thumbnail generator to build a complete system.
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
