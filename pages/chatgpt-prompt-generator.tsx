import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const USE_CASES = [
  "YouTube content planning",
  "Blogging and SEO content",
  "Email marketing and newsletters",
  "Business and marketing strategy",
  "Learning and study support",
];

const OUTPUT_TYPES = [
  "Idea list",
  "Detailed outline",
  "Full draft",
  "Step-by-step plan",
  "Question list",
];

const TONES = [
  "Professional",
  "Casual",
  "Friendly expert",
  "Direct response",
  "Teacher-style",
];

function buildChatGptPrompt(options: {
  useCase: string;
  audience: string;
  goal: string;
  constraints: string;
  model: string;
  outputType: string;
}) {
  const { useCase, audience, goal, constraints, model, outputType } = options;

  return [
    `You are an expert ${useCase || "AI assistant"} using ${model || "ChatGPT"} to help ${audience || "creators and small business owners"}.`,
    ``,
    `Create a ${outputType || "detailed outline"} based on the following brief:`,
    ``,
    `1) Main goal: ${goal || "help the user get a specific result with clear steps"}`,
    `2) Primary audience: ${audience || "beginner content creators"}`,
    `3) Use case: ${useCase || "content planning and writing"}`,
    constraints
      ? `4) Constraints or preferences: ${constraints}`
      : `4) Constraints or preferences: keep the language simple, specific, and practical.`,
    ``,
    `Output requirements:`,
    `- Use clear headings and bullet points where helpful.`,
    `- Avoid generic advice; give concrete, actionable suggestions.`,
    `- Assume the user will copy-paste this prompt into ${model || "ChatGPT"} and wants a high-quality first response without needing to iterate 10 times.`,
    `- Where useful, suggest 2–3 variations or examples the user could try.`,
  ].join("\n");
}

export default function ChatGptPromptGeneratorPage() {
  const [useCase, setUseCase] = useState(USE_CASES[0]);
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");
  const [constraints, setConstraints] = useState("");
  const [model, setModel] = useState("ChatGPT");
  const [outputType, setOutputType] = useState(OUTPUT_TYPES[1]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildChatGptPrompt({
        useCase,
        audience,
        goal,
        constraints,
        model,
        outputType,
      }),
    [useCase, audience, goal, constraints, model, outputType]
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
        <title>ChatGPT Prompt Generator for Creators and Businesses</title>
        <meta
          name="description"
          content="Generate better ChatGPT prompts in seconds. Turn your use case, audience, and goal into a detailed, reusable prompt for content, marketing, or learning."
        />
        <meta
          name="keywords"
          content="ChatGPT prompt generator, AI prompt generator, prompts for creators, prompts for business, prompts for marketing"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/chatgpt-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ChatGPT Prompt Generator for Creators and Businesses"
        />
        <meta
          property="og:description"
          content="A practical ChatGPT prompt generator that helps you design scenario-based prompts for YouTube, blogging, marketing, and more."
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
                ChatGPT Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                ChatGPT Prompt Generator for Real-World Use Cases
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Instead of typing “write me a blog post about X” and hoping for
                the best, use this builder to turn your use case, audience, and
                goal into a clear, reusable ChatGPT prompt.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                If you are focused on YouTube, you can move from this general
                prompt builder into the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>{" "}
                for deeper, video-specific prompts. All of these tools link back
                to the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>{" "}
                so your prompt system stays organised instead of scattered
                across random chats.
              </p>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Creators, solo founders, marketers, students</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>ChatGPT, Claude, Gemini</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>Content, marketing, learning, research</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                ChatGPT Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in the context and get a long, detailed prompt you can
                paste into ChatGPT or any similar model.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main use case
                  </label>
                  <select
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {USE_CASES.map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Audience (who this is for)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. beginner YouTube creators, solo SaaS founders, marketing teams"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Main goal
                  </label>
                  <textarea
                    placeholder="e.g. generate 20 YouTube video ideas around my niche, outline a long-form SEO article, draft an email sequence to launch a new product"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Output type
                  </label>
                  <select
                    value={outputType}
                    onChange={(e) => setOutputType(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {OUTPUT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Preferred model
                  </label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="ChatGPT">ChatGPT</option>
                    <option value="Claude">Claude</option>
                    <option value="Gemini">Gemini</option>
                    <option value="any modern AI model">
                      Any modern AI model
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Constraints and style preferences (optional)
                  </label>
                  <textarea
                    placeholder="e.g. write in simple English, avoid jargon, include concrete examples, use a friendly expert tone"
                    value={constraints}
                    onChange={(e) => setConstraints(e.target.value)}
                    className="h-20 w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                  Paste this into ChatGPT or your preferred model and adapt the
                  output to your brand and context.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use This ChatGPT Prompt Generator</h2>
              <p>
                The easiest way to get more from ChatGPT is not to switch
                models, but to upgrade your prompts. Instead of asking for a
                generic result, you give the model a clear role, a specific
                audience, and a concrete goal. This page helps you do that
                without rewriting prompts from scratch every time.
              </p>
              <p>
                Start by choosing a use case that reflects what you are working
                on this week: planning YouTube content, outlining SEO articles,
                drafting emails, or designing a new offer. Then fill in who you
                are trying to help and what you want to achieve. The generator
                turns that into a reusable prompt you can save in your own
                prompt library.
              </p>

              <h2>Best Practices for High-Quality ChatGPT Prompts</h2>
              <p>
                Strong ChatGPT prompts usually include a few key ingredients:
              </p>
              <ul>
                <li>A clear role for the model to play.</li>
                <li>
                  A specific audience with a real problem or aspiration.
                </li>
                <li>
                  A concrete goal, such as increasing watch time, driving sales,
                  or helping someone learn faster.
                </li>
                <li>
                  Constraints on tone, length, and level of detail so the output
                  is usable on the first try.
                </li>
              </ul>
              <p>
                You can combine this general builder with more specialised
                tools. For example, you might use this page to design a prompt
                that asks ChatGPT to{" "}
                <strong>generate 20 YouTube video ideas</strong>, then move to
                the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>{" "}
                to turn the best ideas into full scripts.
              </p>

              <h2>Examples of Effective ChatGPT Prompts</h2>
              <p>
                Here are a few example prompts you could generate with this
                page:
              </p>
              <ul>
                <li>
                  Plan a month of YouTube content for a faceless automation
                  channel, then outline the top three videos.
                </li>
                <li>
                  Draft an email sequence that warms up new subscribers before a
                  product launch.
                </li>
                <li>
                  Create a detailed study plan for students preparing for a
                  specific exam.
                </li>
              </ul>
              <p>
                As your library grows, you can turn these prompts into your own
                templates and reuse them across projects.
              </p>
            </article>

            <aside className="space-y-8">
              <section>
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Related Prompt Tools
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Use these tools together with this page to build a complete
                  prompt workflow.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/youtube-script-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Script Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Turn content ideas into full, detailed YouTube script
                        prompts.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/blog-post-outline-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Blog Post Outline Prompt
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Generate detailed blog outline prompts as a bridge
                        between ideas and full drafts.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/seo-article-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        SEO Article Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Create long-form SEO article prompts that pair with your
                        general ChatGPT prompt system.
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
                        Generate strategic video ideas before you build prompts
                        for them.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/script-tools"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Script Tools
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Browse all script-related prompt generators in this hub.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      View category
                    </span>
                  </Link>
                  <Link
                    href="/optimization-tools"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Optimization Tools
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Connect prompts to titles, thumbnails, tags, and
                        descriptions.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      View category
                    </span>
                  </Link>
                  <Link
                    href="/email-marketing-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Email Marketing Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Build prompts for newsletters and launch sequences that
                        align with your content.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/sales-copy-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Sales Copy Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Create prompts for long-form sales and landing pages.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/product-description-prompt-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Product Description Prompt Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Build prompts for clear, benefit-driven product
                        descriptions.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/youtube-hook-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Hook Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Build prompt briefs that generate 15 strong hooks per
                        video idea.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/youtube-shorts-script-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Shorts Script Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Create prompts for fast, high-retention Shorts that match
                        your main content.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/faceless-youtube-script-prompt"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Faceless YouTube Script Prompt
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Generate prompts for automation-style channels that never
                        show a host on camera.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/educational-youtube-script-template"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Educational YouTube Script Template
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Write teaching-focused prompts for lessons and
                        explainer-style videos.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/documentary-script-prompt"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Documentary Script Prompt
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Build prompts for narrative, interview, and documentary
                        YouTube formats.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                </div>
              </section>

              <section>
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Want More Prompt Templates?
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Get a free PDF with ready-made ChatGPT prompts for YouTube,
                  blogging, email marketing, and more. You can combine them with
                  this builder to create your own prompt system.
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
                    Get the Prompt PDF
                  </button>
                </form>
              </section>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}
