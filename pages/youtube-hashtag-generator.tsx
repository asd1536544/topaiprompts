import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const VIDEO_TYPES = ["Long-form", "Shorts", "Livestream", "Clip from long video"];

const PLATFORMS = ["YouTube only", "YouTube + Instagram", "YouTube + TikTok"];

export default function YouTubeHashtagGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [mainKeyword, setMainKeyword] = useState("");
  const [videoType, setVideoType] = useState("Long-form");
  const [platforms, setPlatforms] = useState("YouTube only");
  const [audience, setAudience] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic || "how to batch record 10 faceless YouTube videos with AI";
    const baseKeyword =
      mainKeyword || "faceless YouTube automation";
    const baseAudience =
      audience ||
      "beginner creators who want to grow with faceless channels and AI tools";

    return [
      "You are an expert social media strategist specializing in YouTube hashtags.",
      "",
      "Generate a set of hashtags for the content described below.",
      "",
      `- Video topic: ${baseTopic}`,
      `- Main keyword or phrase: ${baseKeyword}`,
      `- Video type: ${videoType}`,
      `- Platforms: ${platforms}`,
      `- Target audience: ${baseAudience}`,
      "",
      "Requirements:",
      "- Focus on hashtags that are relevant and natural for real viewers.",
      "- Mix broad, niche, and long-tail hashtags.",
      "- Avoid spammy or misleading tags.",
      "- Include a few branded or series-specific hashtag ideas.",
      "",
      "Output format:",
      "- First, list 15–25 YouTube-ready hashtags.",
      "- Then, suggest 5–10 optional cross-platform hashtags that would also work on Instagram or TikTok (if applicable).",
      "- Group them into categories: broad, niche, long-tail, and branded/series.",
    ].join("\n");
  }, [topic, mainKeyword, videoType, platforms, audience]);

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
          YouTube Hashtag Generator | AI Tools for YouTube Creators
        </title>
        <meta
          name="description"
          content="Generate effective YouTube hashtags in seconds. Use this free AI prompt builder to create hashtag sets that support discovery across YouTube and other platforms."
        />
        <meta
          name="keywords"
          content="YouTube hashtag generator, YouTube hashtags, AI YouTube hashtags, YouTube hashtags for shorts"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-hashtag-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouTube Hashtag Generator for Creators"
        />
        <meta
          property="og:description"
          content="Use this free AI prompt builder to create targeted YouTube hashtag prompts for your videos."
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
                YouTube Hashtag Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Your Topic into Targeted YouTube Hashtags
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Hashtags are a lightweight way to help viewers and algorithms
                understand what your video is about. This prompt builder turns
                your topic, audience, and platforms into a detailed instruction
                you can paste into ChatGPT to generate hashtag sets in seconds.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Hashtag Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Works with any AI model.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Discovery, Shorts, cross-platform posting</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>YouTube and social platforms</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>ChatGPT, social media planners</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Hashtag Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your video, audience, and platforms. Get a detailed
                prompt to generate hashtag sets.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. How to grow a faceless YouTube channel with AI"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main keyword (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. YouTube automation, faceless channel, AI content"
                    value={mainKeyword}
                    onChange={(e) => setMainKeyword(e.target.value)}
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
                    {VIDEO_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Platforms
                  </label>
                  <select
                    value={platforms}
                    onChange={(e) => setPlatforms(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {PLATFORMS.map((p) => (
                      <option key={p} value={p}>
                        {p}
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
                    placeholder="e.g. beginner creators, teachers, busy professionals"
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
                  Paste this into ChatGPT or your favorite AI tool to generate
                  YouTube hashtags.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI to Generate YouTube Hashtags</h2>
              <p>
                YouTube hashtags are most powerful when they are used as a simple
                navigation aid. They help group related videos and give viewers a
                quick way to understand the topic, series, or niche. Instead of
                guessing a few tags for every upload, you can brief AI to produce
                consistent, strategic hashtag sets.
              </p>
              <p>
                By sharing your topic, main keyword, audience, and platforms, you
                give AI enough context to propose hashtags that match real search
                behavior instead of random buzzwords.
              </p>
              <p>
                This YouTube hashtag generator prompt turns that briefing process
                into a reusable template so you can generate tags quickly while
                still staying intentional.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Hashtags</h2>
              <p>
                A good hashtag prompt asks for variety and structure, not just a
                long list of similar tags. It is helpful to request broad, niche,
                and long-tail hashtags explicitly, plus a few branded or
                series-specific ideas.
              </p>
              <p>Strong prompts usually include:</p>
              <ul>
                <li>The topic and main keyword of the video.</li>
                <li>The platforms where the content will be posted.</li>
                <li>The type of video (Shorts, long-form, clip, or livestream).</li>
                <li>The audience and outcome you care about most.</li>
                <li>
                  A request for grouped hashtags so you can pick the best
                  combination.
                </li>
              </ul>
              <p>
                With that context, AI can behave like a strategist rather than a
                random generator of trend-chasing tags.
              </p>

              <h2>Step-by-Step Hashtag Strategy for YouTube Creators</h2>
              <p>
                You can use hashtags more effectively by following a simple,
                repeatable system instead of reinventing the wheel every upload.
              </p>
              <ol>
                <li>
                  Choose 1–3 broad hashtags that describe your overall niche or
                  series.
                </li>
                <li>
                  Add a few niche-specific hashtags that describe the exact topic
                  of the video.
                </li>
                <li>
                  Include long-tail hashtags that sound like natural searches.
                </li>
                <li>
                  Keep a shortlist of branded or series tags you reuse across
                  related videos.
                </li>
                <li>
                  Avoid overloading your description with dozens of hashtags;
                  focus on relevance and clarity.
                </li>
              </ol>
              <p>
                Over time, you will recognize which patterns reliably bring in
                the right viewers and which tags add noise.
              </p>

              <h2>Examples of High-Converting Hashtag Prompts</h2>
              <p>
                The examples below show how different channels might use this
                hashtag generator. Each one gives AI enough information to
                propose thoughtful, context-aware hashtag sets.
              </p>
              <p>
                You can adapt these prompts by swapping in your own topic,
                audience, and platforms while keeping the structure the same.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Hashtags Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template as a reusable YouTube hashtags prompt. It works
                for faceless channels, educational videos, and Shorts.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste hashtags template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert social media strategist specializing in YouTube hashtags.

Generate YouTube hashtags for the content below:
- Video topic: [describe the video in one sentence]
- Main keyword or phrase: [primary keyword]
- Video type: [long-form / Shorts / livestream / clip]
- Platforms: [YouTube only / YouTube + Instagram / YouTube + TikTok]
- Target audience: [who you want to reach]

Requirements:
- Focus on relevant, natural hashtags for real viewers.
- Mix broad, niche, and long-tail hashtags.
- Include a few branded or series-specific hashtag ideas.

Output:
- 15–25 YouTube-ready hashtags.
- 5–10 optional cross-platform hashtags (if relevant).
- Group them into broad, niche, long-tail, and branded/series.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Hashtag Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could create with this tool
                for different channels.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Faceless automation channel
                  </p>
                  <p className="mt-1">
                    Generate YouTube hashtags for a{" "}
                    <span className="font-medium">
                      Shorts series about building a faceless YouTube channel
                    </span>{" "}
                    targeting{" "}
                    <span className="font-medium">
                      beginners who want to earn with AI
                    </span>
                    . The platform is{" "}
                    <span className="font-medium">
                      YouTube + Instagram Reels
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Educational productivity channel
                  </p>
                  <p className="mt-1">
                    Create hashtags for an{" "}
                    <span className="font-medium">
                      educational video about building a YouTube content
                      calendar in Notion
                    </span>{" "}
                    aimed at{" "}
                    <span className="font-medium">
                      part-time creators with day jobs
                    </span>
                    . The platform is{" "}
                    <span className="font-medium">YouTube only</span>.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Tech review channel
                  </p>
                  <p className="mt-1">
                    Suggest hashtags for a{" "}
                    <span className="font-medium">
                      gear review Shorts series
                    </span>{" "}
                    about{" "}
                    <span className="font-medium">
                      budget YouTube camera and microphone setups
                    </span>
                    , posted to{" "}
                    <span className="font-medium">
                      YouTube Shorts and TikTok
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
                    How many hashtags should I use on YouTube?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators use between 3 and 10 hashtags. You do not need
                    dozens; a small set of relevant tags usually works better
                    than a long, unfocused list.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Do hashtags replace tags and descriptions?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    No. Hashtags are one small signal among many. They work best
                    alongside clear titles, descriptions, and tags.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should I add hashtags to every video?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It is often useful to add a few hashtags to most uploads,
                    especially if they belong to a series or cover topics viewers
                    might click on as hashtag pages.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I reuse the same hashtags across videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Many channels keep a core set of branded and niche
                    hashtags and then add a few video-specific ones to each
                    upload.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does this work for faceless and Shorts channels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Mention your format in the prompt so AI can suggest
                    hashtags that fit faceless or Shorts-specific discovery
                    patterns.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should I chase trending hashtags?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Trending hashtags can help occasionally, but irrelevant tags
                    may confuse both viewers and the algorithm. Relevance comes
                    first.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Where should I place hashtags on YouTube?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Many creators add hashtags at the end of the description to
                    keep things tidy while still signaling topics to YouTube.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this generator help with cross-posting?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can ask for a separate list of hashtags that make
                    sense on Instagram or TikTok so you do not have to start from
                    zero on each platform.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to connect your titles, descriptions,
                tags, and hashtags.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <Link
                  href="/youtube-title-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Title Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Generate titles that pair well with your hashtags.
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
                    Analyze titles and make sure they match your hashtag
                    strategy.
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
                    Write descriptions where your hashtags naturally fit at the
                    end.
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
                    Align backend tags with visible hashtags for clarity.
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
                    Design thumbnails that reflect your main hashtags visually.
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
                    Plan video ideas that can share a common hashtag system.
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
                alongside this hashtag generator to build a complete system.
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
