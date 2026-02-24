import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const POST_TYPES = [
  "How-to guide",
  "List post",
  "Thought leadership essay",
  "Case study",
  "Comparison post",
];

const INTENTS = [
  "Top-of-funnel education",
  "Problem–solution",
  "Product-led SEO",
  "Comparison or alternatives",
];

const LENGTHS = [
  "1200–1800 words",
  "1800–2500 words",
  "2500+ words",
];

function buildOutlinePrompt(options: {
  topic: string;
  audience: string;
  postType: string;
  primaryKeyword: string;
  searchIntent: string;
  length: string;
  callToAction: string;
}) {
  const {
    topic,
    audience,
    postType,
    primaryKeyword,
    searchIntent,
    length,
    callToAction,
  } = options;

  return [
    `You are an experienced content strategist and SEO writer.`,
    ``,
    `Create a detailed outline for a long-form blog post based on this brief:`,
    ``,
    `1) Working title or core topic: ${topic || "How to build a simple content system that works every week"}`,
    audience
      ? `2) Target audience: ${audience}`
      : `2) Target audience: beginner to intermediate creators or marketers.`,
    `3) Post type: ${postType || "How-to guide"}`,
    primaryKeyword
      ? `4) Primary keyword: ${primaryKeyword}`
      : `4) Primary keyword: choose a realistic main keyword that matches the topic.`,
    `5) Search intent: ${searchIntent || "Top-of-funnel education"}`,
    `6) Target length: ${length || "1800–2500 words"}`,
    callToAction
      ? `7) Main call to action: ${callToAction}`
      : `7) Main call to action: invite the reader to join an email list or take the next step in a simple, low-friction way.`,
    ``,
    `Outline requirements:`,
    `- Start with an introduction section that names the reader's current situation, the promise of the article, and why they should trust the advice.`,
    `- Include clear H2 sections that follow a logical sequence for this topic.`,
    `- Under each H2, include H3 sub-points with 1–2 bullet ideas for what to cover.`,
    `- Call out where examples, stories, or screenshots would be most helpful.`,
    `- Suggest natural places to mention a relevant product, service, or lead magnet without turning the article into a sales page.`,
    `- End with a conclusion section that summarises the key ideas and reinforces the main call to action.`,
    ``,
    `Formatting:`,
    `- Present the outline as nested bullet points using H2 and H3 labels.`,
    `- Keep headings clear and scannable, as if the reader arrived from a search result and is deciding whether to stay.`,
  ].join("\n");
}

export default function BlogPostOutlinePromptGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [postType, setPostType] = useState(POST_TYPES[0]);
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [searchIntent, setSearchIntent] = useState(INTENTS[0]);
  const [length, setLength] = useState(LENGTHS[1]);
  const [callToAction, setCallToAction] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildOutlinePrompt({
        topic,
        audience,
        postType,
        primaryKeyword,
        searchIntent,
        length,
        callToAction,
      }),
    [topic, audience, postType, primaryKeyword, searchIntent, length, callToAction]
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
        <title>Blog Post Outline Prompt Generator for SEO Content</title>
        <meta
          name="description"
          content="Generate structured blog post outline prompts for ChatGPT. Turn your topic, audience, and intent into a clear outline brief for long-form posts."
        />
        <meta
          name="keywords"
          content="blog post outline prompt, blog outline generator, ChatGPT blog prompts, SEO content outline, article outline prompt"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/blog-post-outline-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blog Post Outline Prompt Generator"
        />
        <meta
          property="og:description"
          content="Use this blog post outline prompt generator to brief ChatGPT or any AI writer for clear, SEO-aware article structures."
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
                AI Prompt Generator Hub
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
                Blog Post Outline Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Blog Post Outline Prompt Generator for Clear, SEO-Aware Drafts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Use this builder to turn a loose blog idea into a structured
                outline brief. Instead of asking ChatGPT to “write a blog post
                about X”, you design the headings, sections, and call to action
                upfront.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Pair this page with the{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>{" "}
                when you need a full draft, and with the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                as your general prompt system. All of these tools roll up into
                the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>{" "}
                so your prompts stay organised instead of scattered.
              </p>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Bloggers, content teams, niche site builders</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>ChatGPT, Claude, Gemini, AI writing tools</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Use cases</dt>
                  <dd>How-to guides, list posts, thought leadership, case studies</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Blog Post Outline Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in the details and get a long, structured prompt that asks
                ChatGPT to produce a clear outline.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Working title or core topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. How to build a simple content engine around YouTube and a blog"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. beginner creators, B2B marketers, course creators"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Post type
                  </label>
                  <select
                    value={postType}
                    onChange={(e) => setPostType(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {POST_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Primary keyword (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. content marketing strategy, YouTube SEO guide"
                    value={primaryKeyword}
                    onChange={(e) => setPrimaryKeyword(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Search intent
                  </label>
                  <select
                    value={searchIntent}
                    onChange={(e) => setSearchIntent(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {INTENTS.map((intent) => (
                      <option key={intent} value={intent}>
                        {intent}
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
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {LENGTHS.map((len) => (
                      <option key={len} value={len}>
                        {len}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main call to action (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. join an email list, book a strategy call, try a free tool"
                    value={callToAction}
                    onChange={(e) => setCallToAction(e.target.value)}
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
                  Paste this into ChatGPT, Claude, or any AI writing tool to
                  generate a detailed outline, then refine it in your own voice.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use This Blog Post Outline Prompt Generator</h2>
              <p>
                This page is built for writers and marketers who want to stop
                fighting messy first drafts. Instead of letting AI decide the
                structure, you co-design the outline and ask the model to fill
                in the details later.
              </p>
              <p>
                Start by defining the topic, audience, and type of post you need.
                Then choose a search intent and a realistic target length. The
                generator turns that into a prompt that tells ChatGPT exactly how
                to structure the article, including which sections need examples,
                stories, or screenshots.
              </p>

              <h2>Why Separate Outlines from Full Drafts</h2>
              <p>
                Many teams ask AI to write full articles from scratch and then
                wrestle with a wall of text. Separating the outline step gives
                you more control and makes editing faster. You can:
              </p>
              <ul>
                <li>Agree on structure with a client or teammate before drafting.</li>
                <li>Check that headings match actual search intent and user needs.</li>
                <li>
                  Spot gaps where you need more research, stories, or internal
                  data.
                </li>
              </ul>
              <p>
                Once you have a strong outline, you can move to the{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>{" "}
                to brief ChatGPT for a full draft, or use your own writing
                process to fill in each section.
              </p>

              <h2>Example Blog Post Outline Prompts</h2>
              <p>
                Here are a few example scenarios where this generator works well:
              </p>
              <ul>
                <li>
                  A how-to guide on building a YouTube content engine that feeds
                  traffic into a newsletter.
                </li>
                <li>
                  A comparison post on different AI tools for scripting and
                  editing videos.
                </li>
                <li>
                  A thought leadership piece on why creators should treat prompts
                  as part of their business systems, not one-off hacks.
                </li>
              </ul>
              <p>
                Over time, you can save your favourite prompts from this page
                into your own prompt library. They sit alongside general prompts
                from the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                and content-specific prompts from the{" "}
                <Link href="/seo-article-prompt-generator">
                  SEO Article Prompt Generator
                </Link>
                , all linked back to the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                .
              </p>
            </article>

            <aside className="space-y-8">
              <section>
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Related Prompt Tools
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Connect your blog outlines with long-form drafts and YouTube
                  content.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/seo-article-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        SEO Article Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Turn approved outlines into long-form, search-focused
                        drafts.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/chatgpt-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        ChatGPT Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Design reusable prompts for ideation, drafting, and
                        editing.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open generator
                    </span>
                  </Link>
                  <Link
                    href="/youtube-script-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Script Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Repurpose your best blog topics into YouTube scripts.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/youtube-video-idea-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Video Idea Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Generate video ideas that tie back to your key blog
                        pillars.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                </div>
              </section>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}
