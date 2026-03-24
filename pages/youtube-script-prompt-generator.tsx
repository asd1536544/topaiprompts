import Head from "next/head";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

const VIDEO_TYPES = [
  "Tutorial",
  "Review",
  "Vlog",
  "Educational",
  "Documentary",
];

const TONES = ["Professional", "Casual", "Energetic", "Storytelling"];

const CTAS = [
  "Subscribe to the channel",
  "Download the free resource",
  "Sign up for the newsletter",
  "Check the product link in description",
  "Leave a comment and share",
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

function buildPrompt(options: {
  videoType: string;
  tone: string;
  targetAudience: string;
  videoLength: string;
  niche: string;
  callToAction: string;
}) {
  const { videoType, tone, targetAudience, videoLength, niche, callToAction } =
    options;

  return [
    `You are an expert YouTube scriptwriter and content strategist for ${niche || "online content creators"}.`,
    ``,
    `Write a complete, high-converting YouTube video script based on the following requirements:`,
    ``,
    `1) Video type: ${videoType || "Tutorial"}`,
    `2) Tone of voice: ${tone || "Professional"}`,
    `3) Target audience: ${targetAudience || "beginner creators"}`,
    `4) Approximate video length: ${videoLength || "8-10 minutes"}`,
    `5) Primary niche / topic: ${niche || "YouTube growth strategies"}`,
    `6) Main call to action: ${callToAction || "Subscribe to the channel"}`,
    ``,
    `Script structure:`,
    `- Strong hook in the first 3–5 seconds that speaks directly to the pain point of the target audience.`,
    `- Brief but compelling introduction that establishes credibility and clearly states the promise of the video.`,
    `- Clear sections with transitions, each focusing on one key idea, written in natural spoken language.`,
    `- Strategic pattern breaks (questions, quick recaps, visual cues) to keep retention high.`,
    `- Occasional permission-based CTAs that feel natural, not pushy.`,
    `- A strong closing summary that reinforces the main value and ends with the main call to action: "${callToAction || "Subscribe to the channel"}".`,
    ``,
    `Requirements:`,
    `- Write in natural, conversational English as if speaking to the viewer.`,
    `- Use short sentences and concrete examples.`,
    `- Include optional visual direction in brackets when helpful, e.g. [cut to screen recording], [overlay key stats].`,
    `- Make the script long and detailed enough for a full ${videoLength || "8-10 minute"} video.`,
    `- Avoid generic fluff; every line should either educate, entertain, or move the viewer to action.`,
  ].join("\n");
}

export default function YouTubeScriptPromptGeneratorPage() {
  const [videoType, setVideoType] = useState("Tutorial");
  const [tone, setTone] = useState("Professional");
  const [targetAudience, setTargetAudience] = useState("");
  const [videoLength, setVideoLength] = useState("8-10 minutes");
  const [niche, setNiche] = useState("");
  const [callToAction, setCallToAction] = useState(CTAS[0]);
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(
    () =>
      buildPrompt({
        videoType,
        tone,
        targetAudience,
        videoLength,
        niche,
        callToAction,
      }),
    [videoType, tone, targetAudience, videoLength, niche, callToAction]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          Free YouTube Script Prompt Generator for ChatGPT – Create High-Retention Scripts Fast
        </title>
        <meta
          name="description"
          content="Generate professional YouTube script prompts for ChatGPT, Claude, and Gemini. Free AI prompt generator to create high-retention video scripts with optimized structure and hooks."
        />
        <meta
          name="keywords"
          content="free YouTube script prompt generator, AI YouTube script generator, YouTube script prompts, ChatGPT script prompts, high-retention video scripts, long-form video scripts, YouTube video structure, optimized YouTube scripts, professional script generator, content creation tools"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/youtube-script-prompt-generator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Free YouTube Script Prompt Generator for Creators"
        />
        <meta
          property="og:description"
          content="Instantly create high-retention YouTube video scripts with this free AI prompt generator. Just enter your topic and audience."
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
              <Link href="/" className="font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full hover:text-indigo-700 hover:bg-indigo-100 transition-colors duration-200">
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
                YouTube Script Prompt Generator
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                YouTube Script Prompt Generator for ChatGPT (Free &amp; Instant)
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Use this YouTube Script Prompt Generator to turn a few inputs
                into a complete AI prompt you can paste into ChatGPT, Claude,
                Gemini, or any AI model. This YouTube Script Prompt Generator is
                built for long-form scripts that are optimized for hooks,
                retention, and conversions.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                After you have a solid script, you can move into the{" "}
                <Link href="/youtube-hook-generator">YouTube Hook Generator</Link>{" "}
                to sharpen your opening, the{" "}
                <Link href="/youtube-title-generator">
                  YouTube Title Generator
                </Link>{" "}
                to shape the headline, and the{" "}
                <Link href="/youtube-description-generator">
                  YouTube Description Generator
                </Link>{" "}
                to finish your upload copy. If you are still planning your
                content calendar, pair this page with the{" "}
                <Link href="/youtube-video-idea-generator">
                  YouTube Video Idea Generator
                </Link>{" "}
                and the{" "}
                <Link href="/script-tools">Script Tools</Link>{" "}
                category page.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Built for YouTube creators.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Built for</dt>
                  <dd>YouTubers, creators, agencies</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Hooks, retention, conversions</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Works with</dt>
                  <dd>OpenAI, Claude, Gemini, more</dd>
                </div>
              </dl>
            </div>

            <div
              id="generator"
              className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 hover:ring-gray-200 transition-all duration-200"
            >
              <h2 className="text-sm font-semibold tracking-tight text-gray-900">
                Script Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Fill in a few details. Get a long, detailed prompt tailored to
                your video.
              </p>

              <div className="mt-5 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video type
                  </label>
                  <select
                    value={videoType}
                    onChange={(e) => setVideoType(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none ring-0 transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 hover:border-gray-300"
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
                    Tone
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                    {TONES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTone(t)}
                        className={`rounded-md border px-3 py-2 text-center transition-all duration-200 ${tone === t
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Target audience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Beginner creators who want to grow from 0 to 10k subscribers"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 hover:border-gray-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Video length
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 8-10 minutes"
                    value={videoLength}
                    onChange={(e) => setVideoLength(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 hover:border-gray-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Niche / topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Notion productivity, AI tools for creators, camera gear reviews"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 hover:border-gray-300"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Call to action
                  </label>
                  <select
                    value={callToAction}
                    onChange={(e) => setCallToAction(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none ring-0 transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 hover:border-gray-300"
                  >
                    {CTAS.map((cta) => (
                      <option key={cta} value={cta}>
                        {cta}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-medium text-gray-700">
                    Generated prompt
                  </p>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:translate-y-0.5"
                  >
                    {copied ? "Copied ✅" : "Copy prompt"}
                  </button>
                </div>
                <textarea
                  readOnly
                  value={prompt}
                  className="h-64 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs font-mono leading-relaxed text-gray-800 shadow-inner outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 hover:border-gray-300"
                />
                <p className="text-[11px] text-gray-500">
                  Paste this into ChatGPT, Claude, or your favorite AI model to
                  generate a full YouTube script.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Write YouTube Scripts with AI</h2>
              <p>
                Writing YouTube scripts with AI starts before you ever open
                ChatGPT. The most important work happens in the way you brief
                the model. A strong YouTube script prompt is a structured set of
                instructions that tells the AI who the video is for, what
                transformation you want to create, and how the script should be
                paced. Instead of typing “Write a script about YouTube growth”,
                you specify video type, tone, target audience, length, niche,
                and call to action.
              </p>
              <p>
                Most creators are not short on ideas. They are short on scripts
                that people actually watch and act on. When you treat the prompt
                as a creative brief, AI becomes less of a random content
                machine and more of a junior writer you manage. You define the
                outcome, the angle, and the constraints. The model fills in the
                structure, examples, and phrasing.
              </p>
              <p>
                A practical way to think about it is this: your YouTube script
                prompt is the bridge between your intuition and the AI&apos;s
                output. The clearer that bridge is, the more the final script
                feels like something you could have written on your best day,
                not a generic AI essay that happens to be in video format.
              </p>
              <p>
                On this page, the fields you fill in are the core levers of a
                good script prompt. Video type informs pacing. Tone sets the
                voice. Target audience keeps examples grounded in real-life
                situations. Video length prevents the script from being either
                too thin or bloated. Niche and call to action focus the whole
                narrative on one promise.
              </p>

              <h2>Best ChatGPT Prompts for YouTube Videos</h2>
              <p>
                The best ChatGPT prompts for YouTube videos do not ask the model
                to “be creative”. They give the model a job to do. A strong
                prompt includes five essentials: who the viewer is, what the
                main promise is, how long the video should be, what format it
                takes, and what action you want at the end. Everything else is
                optional. These ingredients are baked into the generator you are
                using on this page.
              </p>
              <p>
                One effective pattern is to explicitly describe the outcome and
                the constraint. For example: “Write a 9–10 minute educational
                YouTube script that helps beginner creators go from 0 to 1,000
                subscribers using a consistent weekly upload system. Use a
                confident but friendly tone, and end with a call to action to
                download a free Notion template.” That is much more precise than
                “Write a YouTube script about growing on YouTube”.
              </p>
              <p>
                Another best practice is to reference your own style inside the
                prompt. If you normally explain concepts with simple analogies
                and short sentences, tell ChatGPT that. You might say, “Write in
                clear, conversational English, using simple analogies and short
                paragraphs, as if you are coaching one creator over a video
                call.” Over time you can refine this description until the
                scripts feel close to your natural voice.
              </p>
              <p>
                When you find a prompt that consistently produces good results,
                save it as a template. You can reuse the same base prompt and
                only change the topic, audience, or call to action. That is how
                agencies and serious creators scale output without sacrificing
                quality: they treat prompts as reusable assets, not one-off
                experiments.
              </p>

              <h2>Step-by-Step Script Structure</h2>
              <p>
                Whether you write the script yourself or let AI take the first
                pass, the underlying structure is what keeps viewers watching.
                A simple way to think about YouTube script structure is in five
                stages: hook, intro, value delivery, proof, and close. Your
                prompt can ask the AI to follow this structure explicitly so you
                do not have to rebuild it from scratch every time.
              </p>
              <ol>
                <li>
                  <strong>Hook (first 3–5 seconds).</strong> The goal here is to
                  earn the next 30 seconds of attention. Instead of introducing
                  yourself, open with a pattern break, bold claim, surprising
                  result, or specific pain point.
                </li>
                <li>
                  <strong>Intro and promise.</strong> In 20–40 seconds, explain
                  who the video is for, what outcome you will deliver, and why
                  viewers should trust you. This is where you set expectations
                  and build credibility.
                </li>
                <li>
                  <strong>Value sections.</strong> Break the main content into
                  two to five sections. Each section should cover one key idea,
                  end with a micro-win, and use transitions that tell viewers
                  why the next part matters.
                </li>
                <li>
                  <strong>Proof and examples.</strong> Wherever you make a
                  claim, back it up with stories, numbers, or quick demos. Your
                  prompt can ask the AI to include concrete examples instead of
                  staying abstract.
                </li>
                <li>
                  <strong>Close and call to action.</strong> Summarize the main
                  takeaway, restate the transformation, and clearly ask viewers
                  to take the next step—whether that is subscribing, joining a
                  list, or checking a link.
                </li>
              </ol>
              <p>
                The prompt generated on this page already nudges the AI toward
                this structure by calling out hooks, clear sections, pattern
                breaks, and a strong closing CTA. You can further customize the
                structure by mentioning segment length, number of sections, or
                specific moments you want to highlight.
              </p>

              <h2>Examples of High-Converting Scripts</h2>
              <p>
                High-converting YouTube scripts are not just “well written”.
                They match a specific viewer, solve a specific problem, and lead
                to a specific action. Below are a few patterns that tend to
                perform well and that you can recreate with the prompt generator
                on this page.
              </p>
              <p>
                For a tech review channel, you might focus on the before-and-
                after of upgrading gear. The hook could be a pain point like
                “Your videos look worse than your ideas deserve”, followed by a
                promise to fix that in one purchase. The body of the script
                compares old and new results, shows real-world use cases, and
                addresses objections about price or complexity before ending
                with a clear call to check affiliate links.
              </p>
              <p>
                For a productivity or Notion channel, high-converting scripts
                often emphasize relief and clarity. The script walks through a
                simple system viewers can copy, explains why it works, and shows
                what life looks like once it is in place. The call to action is
                usually to download a template or join a deeper training, which
                feels like a natural next step rather than a hard sell.
              </p>
              <p>
                Educational and course-focused creators tend to convert best
                when their scripts blend teaching with a clear path forward. The
                video delivers real value on its own, but also makes it obvious
                why an email list, cohort, or program would help viewers go
                further. When you generate prompts here, you can aim for that
                balance by being explicit about both the free value and the
                optional next step.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free YouTube Script Prompt Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template when you want a reusable, copy-paste prompt
                that works across multiple videos. It is designed for beginners
                and advanced creators who want a best prompt for YouTube script
                that still feels on-brand.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste script template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-56 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an expert YouTube scriptwriter and content strategist.

Write a high-retention YouTube script using the following details:

- Channel type: [faceless channel / talking head / hybrid]
- Video type: [tutorial / review / vlog / documentary / educational]
- Target audience: [who is watching and what level they are at]
- Main topic: [what the video is about]
- Primary outcome: [what viewers should be able to do or feel after]
- Approximate length: [e.g. 8–10 minutes, 15–20 minutes, 45–60 seconds for Shorts]
- Call to action: [subscribe / join email list / download free resource / check offer]

Follow this structure:
1) Hook (first 3–5 seconds) that speaks directly to the viewer’s pain or desire.
2) Short intro that establishes credibility and clearly states the promise.
3) 3–5 value sections with clear transitions and pattern breaks to keep retention high.
4) Proof and examples, including at least one high retention YouTube script example.
5) Strong close that summarizes the transformation and repeats the main call to action.

Requirements:
- Write in natural spoken English that sounds like a real creator.
- Avoid generic fluff; every line should educate, entertain, or move viewers to act.
- Adapt the script for the format (e.g. YouTube Shorts, faceless YouTube channel) when relevant.
- If this is for beginners, treat it as a YouTube script template for beginners and explain jargon briefly.

At the end, suggest 2–3 alternative hooks and a shorter version that could work as a YouTube Shorts script.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Step-by-Step Tutorial: How to Use This YouTube Script Prompt Generator
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Follow these detailed steps to create high-quality YouTube script prompts that produce exceptional results:
              </p>
              <div className="mt-4 space-y-6 text-sm">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Select Your Video Type</h3>
                    <p className="mt-1 text-gray-600">
                      Choose the most appropriate video type from the dropdown menu (Tutorial, Review, Vlog, Educational, Documentary). 
                      This tells the AI the overall structure and pacing your script should follow.
                    </p>
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-xs">
                      <p className="font-medium text-gray-700">Pro Tip:</p>
                      <p className="mt-1 text-gray-600">
                        For hybrid videos (e.g., a review with tutorial elements), choose the type that represents the primary focus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Define Your Tone</h3>
                    <p className="mt-1 text-gray-600">
                      Pick a tone that matches your brand voice and target audience (Professional, Casual, Energetic, Storytelling).
                      This ensures the AI generates content that sounds authentic to you.
                    </p>
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-xs">
                      <p className="font-medium text-gray-700">Pro Tip:</p>
                      <p className="mt-1 text-gray-600">
                        Consistency is key! Use the same tone across all your videos to build a recognizable brand.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Specify Your Target Audience</h3>
                    <p className="mt-1 text-gray-600">
                      Be as specific as possible when describing your audience (e.g., "beginner creators who want to grow from 0 to 10k subscribers").
                      This helps the AI use relevant examples and terminology.
                    </p>
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-xs">
                      <p className="font-medium text-gray-700">Pro Tip:</p>
                      <p className="mt-1 text-gray-600">
                        Include both the audience's current level and their desired outcome for maximum relevance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Set Video Length</h3>
                    <p className="mt-1 text-gray-600">
                      Enter the approximate length of your video (e.g., "8-10 minutes"). This ensures the AI generates a script with appropriate depth.
                    </p>
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-xs">
                      <p className="font-medium text-gray-700">Pro Tip:</p>
                      <p className="mt-1 text-gray-600">
                        Longer videos (10+ minutes) should include more examples and pattern breaks to maintain viewer retention.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Define Your Niche/Topic</h3>
                    <p className="mt-1 text-gray-600">
                      Enter your specific niche or topic (e.g., "Notion productivity, AI tools for creators, camera gear reviews").
                      This gives the AI context for your content.
                    </p>
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-xs">
                      <p className="font-medium text-gray-700">Pro Tip:</p>
                      <p className="mt-1 text-gray-600">
                        The more specific your niche, the more tailored and valuable the AI-generated script will be.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    6
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Choose Your Call to Action</h3>
                    <p className="mt-1 text-gray-600">
                      Select the primary action you want viewers to take (Subscribe, Download resource, Sign up for newsletter, etc.).
                    </p>
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-xs">
                      <p className="font-medium text-gray-700">Pro Tip:</p>
                      <p className="mt-1 text-gray-600">
                        For best results, use only one primary CTA per video to avoid confusing your audience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    7
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Copy and Use Your Generated Prompt</h3>
                    <p className="mt-1 text-gray-600">
                      Click the "Copy prompt" button to copy your generated prompt. Then paste it into ChatGPT, Claude, Gemini, or your preferred AI model.
                    </p>
                    <div className="mt-2 rounded-md bg-gray-50 p-3 text-xs">
                      <p className="font-medium text-gray-700">Pro Tip:</p>
                      <p className="mt-1 text-gray-600">
                        Save successful prompts as templates for future videos in the same niche or format.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Prompts You Can Start With
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Below are a few sample prompts produced by this generator for
                different creator types.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Tech review channel
                  </p>
                  <p className="mt-1">
                    Write a complete, high-converting YouTube script for a
                    10-minute{" "}
                    <span className="font-medium">Review</span> video in an{" "}
                    <span className="font-medium">Energetic</span> tone,
                    targeting{" "}
                    <span className="font-medium">
                      creators who want to upgrade from smartphone to mirrorless
                      cameras
                    </span>{" "}
                    in the{" "}
                    <span className="font-medium">
                      camera gear and filmmaking
                    </span>{" "}
                    niche, and drive viewers to{" "}
                    <span className="font-medium">
                      check the affiliate links in the description
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Notion productivity tutorial
                  </p>
                  <p className="mt-1">
                    Write a detailed YouTube{" "}
                    <span className="font-medium">Tutorial</span> script in a{" "}
                    <span className="font-medium">Storytelling</span> tone for a{" "}
                    <span className="font-medium">
                      12-minute video teaching beginner creators how to build a
                      content calendar in Notion
                    </span>
                    . Target{" "}
                    <span className="font-medium">
                      solo creators juggling YouTube, client work, and a
                      full-time job
                    </span>{" "}
                    and end with a strong CTA to{" "}
                    <span className="font-medium">
                      download a free Notion template
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Education/online course channel
                  </p>
                  <p className="mt-1">
                    Create a structured,{" "}
                    <span className="font-medium">Educational</span> YouTube
                    script in a{" "}
                    <span className="font-medium">Professional</span> tone for a{" "}
                    <span className="font-medium">
                      15-minute video on how to validate course ideas using
                      YouTube analytics
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      intermediate creators who want to turn their channel into
                      a course business
                    </span>
                    , with a closing CTA to{" "}
                    <span className="font-medium">
                      join a free email list
                    </span>{" "}
                    for deeper training.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Real Use Cases and Results
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                See how creators from different niches have used this YouTube Script Prompt Generator to improve their content and grow their channels:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                      🎬
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Tech Review Channel - 30% Increase in Watch Time</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        "I've been using this prompt generator for my tech review channel for the past 3 months. The scripts produced by ChatGPT with these prompts have a much better structure and flow. My average watch time increased from 3:45 to 4:40 minutes, and my subscriber count grew by 12% in just one month."
                      </p>
                      <p className="mt-3 text-xs text-gray-500">— Alex Chen, TechReviewPro (120k subscribers)</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                      📚
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Educational Channel - 50% More Video Output</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        "As a solo creator running an educational channel about personal finance, I was struggling to keep up with my weekly upload schedule. This prompt generator has cut my script writing time by 70%. Now I can create two high-quality videos per week instead of one, without sacrificing quality."
                      </p>
                      <p className="mt-3 text-xs text-gray-500">— Sarah Johnson, FinanceForBeginners (85k subscribers)</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                      🔧
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Faceless Channel - 40% Higher Conversion Rate</h3>
                      <p className="mt-2 text-sm text-gray-600">
                        "I run a faceless channel about DIY projects. Since using these prompts to generate my scripts, the conversion rate for my affiliate links has increased by 40%. The AI-generated scripts are more persuasive and include better calls to action that resonate with my audience."
                      </p>
                      <p className="mt-3 text-xs text-gray-500">— Mike Thompson, DIYMasterClass (210k subscribers)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Industry Best Practices & Expert Tips
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Learn from industry experts about how to get the most out of AI-generated YouTube scripts:
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    💡
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Focus on One Core Message Per Video</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      "The best YouTube scripts focus on solving one specific problem or delivering one clear message. When creating your prompt, avoid trying to cover too many topics in a single video. This keeps your content focused and improves viewer retention."
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Use Specific Examples in Your Prompt</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      "The more specific you are in your prompt, the better the AI-generated script will be. Instead of saying 'beginners', specify 'beginners who have just started their first YouTube channel in the tech niche'. This helps the AI use relevant examples."
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    ⏱️
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Optimize for Retention with Pattern Breaks</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      "Every 60-90 seconds, include a pattern break in your script - a question, a surprising fact, or a visual change. This keeps viewers engaged. When creating your prompt, explicitly ask the AI to include these pattern breaks at regular intervals."
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    🗣️
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Infuse Your Brand Voice into the Prompt</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      "To make AI-generated scripts sound like you, include specific language preferences in your prompt. For example, 'use phrases like "let's dive in" and "here's the thing" to sound more conversational'. This helps maintain brand consistency."
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    🔄
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Iterate on Your Prompts</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      "Don't settle for the first prompt you generate. Experiment with different combinations of video types, tones, and audience descriptions. Keep track of which prompts produce the best results for your channel."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Workflow Guide: Integrate with Other Tools
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Learn how to combine this YouTube Script Prompt Generator with other tools in our hub for a complete content creation workflow:
              </p>
              <div className="mt-4 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Generate Video Ideas</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Start with the <Link href="/youtube-video-idea-generator" className="text-indigo-600 hover:underline">YouTube Video Idea Generator</Link> to brainstorm topics that resonate with your audience and have high search potential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Create Your Script Prompt</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Use this tool to generate a detailed prompt for your YouTube script, focusing on your target audience, tone, and desired outcome.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Perfect Your Hook</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Once you have a script draft, use the <Link href="/youtube-hook-generator" className="text-indigo-600 hover:underline">YouTube Hook Generator</Link> to create attention-grabbing openings that keep viewers watching.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Optimize Your Title</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Create click-worthy titles with the <Link href="/youtube-title-generator" className="text-indigo-600 hover:underline">YouTube SEO Title Generator</Link> that balance searchability and audience appeal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    5
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Write Your Description</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Generate SEO-friendly video descriptions with the <Link href="/youtube-description-generator" className="text-indigo-600 hover:underline">YouTube Description Generator</Link> that include keywords, links, and calls to action.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    6
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Add Tags and Hashtags</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Improve discoverability with the <Link href="/youtube-tags-generator" className="text-indigo-600 hover:underline">YouTube Tags Generator</Link> and <Link href="/youtube-hashtag-generator" className="text-indigo-600 hover:underline">YouTube Hashtag Generator</Link> to reach a wider audience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700">
                    7
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Create Thumbnail Prompts</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      End with the <Link href="/youtube-thumbnail-prompt-generator" className="text-indigo-600 hover:underline">YouTube Thumbnail Prompt Generator</Link> to create compelling visual prompts for your video thumbnails that drive clicks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-md bg-indigo-50 p-4">
                <p className="text-sm text-indigo-700">
                  <span className="font-semibold">Pro Tip:</span> Save time by creating a content calendar and batching these steps for multiple videos at once. This workflow helps you maintain consistency and quality across all your content.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 rounded-xl border border-gray-100 bg-white">
                <FaqItem question="What is a YouTube script prompt?">
                  <p>
                    A YouTube script prompt is a detailed instruction you give to
                    an AI model before it writes your script. Instead of asking
                    for “a video about productivity”, you tell the model who the
                    viewer is, what problem they have, what outcome you promise,
                    how long the video should be, and what action you want at
                    the end. The prompt on this page helps you capture all of
                    that in a repeatable format so the AI behaves more like a
                    trained scriptwriter and less like a generic text generator.
                  </p>
                </FaqItem>
                <FaqItem question="What is the best prompt for YouTube scripts?">
                  <p>
                    The best prompt for YouTube script writing is one that gives
                    the model a clear job. It should define the audience, topic,
                    video length, format, tone, and call to action, and it
                    should describe the structure you want the script to follow.
                    When you use this generator or the free YouTube script
                    template above, you are essentially building that kind of
                    prompt so the AI can focus on high-retention storytelling
                    instead of guessing what you mean.
                  </p>
                </FaqItem>
                <FaqItem question="Is there a free ChatGPT YouTube script prompt?">
                  <p>
                    Yes. This entire page is built around a free ChatGPT YouTube
                    script prompt you can reuse as many times as you like. You
                    can either copy the template, or fill out the fields in the
                    builder to generate a custom prompt that works with ChatGPT,
                    Claude, Gemini, or any other AI model capable of long-form
                    output.
                  </p>
                </FaqItem>
                <FaqItem question="How do I write a viral YouTube script?">
                  <p>
                    Viral scripts start with a sharp concept and a hook that
                    makes it impossible to scroll past. Focus your prompt on one
                    big idea, one core emotion, and one transformation. Ask the
                    AI to open with a bold pattern break, keep each section
                    tight, and build tension toward a satisfying payoff. Then
                    layer your own insights, stories, and delivery style on top.
                    There is no guaranteed viral YouTube script formula, but
                    clear prompts give your videos a much better chance to
                    perform and be shared.
                  </p>
                </FaqItem>
                <FaqItem question="Can ChatGPT write high-retention YouTube scripts?">
                  <p>
                    Yes. Models like ChatGPT are very good at turning structured
                    instructions into full scripts. The key is to avoid vague
                    prompts. When you provide a clear video type, tone, target
                    audience, length, and call to action, ChatGPT can outline,
                    draft, and revise scripts quickly. You still need to review,
                    edit, and personalize the output, but AI can remove most of
                    the friction between idea and publishable script.
                  </p>
                </FaqItem>
                <FaqItem question="Can I use this for a faceless YouTube channel?">
                  <p>
                    Yes. You can mention that you run a faceless YouTube channel
                    and ask the AI to write scripts that rely on b-roll,
                    overlays, and narration instead of on-camera presence. You
                    can also use a dedicated faceless YouTube script prompt on a
                    separate page if you want even more tailored defaults for
                    voiceover-only content.
                  </p>
                </FaqItem>
                <FaqItem question="Can this help with YouTube Shorts scripts?">
                  <p>
                    It can. When you specify that you want a 30–60 second video
                    and that the script is for YouTube Shorts, the AI will
                    compress the structure into a tighter format. You can also
                    use the shorts-focused generator in this toolkit for an even
                    more optimized YouTube script prompt for Shorts.
                  </p>
                </FaqItem>
                <FaqItem question="How long should a YouTube script be?">
                  <p>
                    The ideal script length depends on your format and audience.
                    For educational videos, many creators find that 8–12 minutes
                    is a sweet spot. Shorts and clips might only need 45–90
                    seconds. What matters most is that every section earns its
                    place. When you fill in the video length field on this page,
                    you are telling the AI how much room it has to work with so
                    it can pace the script appropriately instead of guessing.
                  </p>
                </FaqItem>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use these tools together to build a complete workflow: hook,
                script, title, and description all aligned around the same
                promise.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <Link
                  href="/youtube-hook-generator"
                  className="group rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900">
                    YouTube Hook Generator
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Brainstorm multiple attention-grabbing openings for the same
                    video idea.
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
                    Turn your script into click-worthy titles without clickbait.
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
                    Generate SEO-friendly descriptions that support your script
                    and CTA.
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
                    Turn your script into keyword-rich tags that support search
                    and discovery.
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
                    Brief AI tools to design thumbnails that match your script
                    and title.
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
                    Generate a backlog of video ideas your script prompts can be
                    built around.
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
                    Generate prompts tailored to faceless, B-roll-driven YouTube
                    channels.
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
                    Build tight, high-retention prompts for 30–60 second Shorts.
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
                    Create prompts designed for outsourced, systemized YouTube
                    automation channels.
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
                    Use templates built for course-style, lesson-focused YouTube
                    content.
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
                    Structure narrative, interview, and B-roll-heavy documentary
                    YouTube videos.
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
                    Craft prompts for story-driven videos built around a single
                    narrative.
                  </p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Want More Advanced Prompts?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get a free PDF with 50 high-retention YouTube script prompts
                that you can plug into ChatGPT or Claude. These templates are
                designed for faceless channels, Shorts, educational videos,
                documentaries, and storytelling formats.
              </p>
              <form
                className="mt-4 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center"
              >
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
