import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const EDUCATION_AUDIENCES = [
  "High school students",
  "University students",
  "Adult learners and professionals",
  "Teachers and educators",
];

const LESSON_FORMATS = [
  "Step-by-step tutorial",
  "Concept explanation with examples",
  "Case study or real-world application",
  "Revision and exam-style walkthrough",
];

export default function EducationalYouTubeScriptTemplatePage() {
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [audience, setAudience] = useState("Adult learners and professionals");
  const [format, setFormat] = useState("Concept explanation with examples");
  const [outcome, setOutcome] = useState("");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    const baseTopic =
      topic || "a beginner-friendly introduction to AI tools for study and work";
    const baseSubject = subject || "productivity, note-taking, and learning";
    const baseOutcome =
      outcome ||
      "help learners understand the concept clearly and apply it to real tasks";

    return [
      "You are an experienced teacher and YouTube educator.",
      "",
      "Write a complete educational YouTube script based on the details below.",
      "",
      `- Lesson topic: ${baseTopic}`,
      `- Subject area: ${baseSubject}`,
      `- Target audience: ${audience}`,
      `- Preferred lesson format: ${format}`,
      `- Learning outcome: ${baseOutcome}`,
      "",
      "Teaching style:",
      "- Clear, patient, and structured, with simple language and concrete examples.",
      "- Uses visual explanations and on-screen text to reinforce key ideas.",
      "",
      "Script requirements:",
      "- Start with a hook that addresses the learner's pain point or desired outcome.",
      "- Briefly explain why this topic matters before going deep.",
      "- Break the lesson into clear sections with headings learners can screenshot.",
      "- Use analogies, examples, or mini exercises to make abstract ideas concrete.",
      "- Include at least one recap moment and a short quiz-style check-in.",
      "- End with a quick summary and a next step the learner can take today.",
      "",
      "Output format:",
      "- Sections: Hook, Context, Main teaching points, Recap, Next steps.",
      "- Natural spoken English suitable for classroom-style or talking-head videos.",
      "- Include occasional on-screen text prompts in brackets.",
    ].join("\n");
  }, [topic, subject, audience, format, outcome]);

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
          Educational YouTube Script Template | AI Tools for YouTube Creators
        </title>
        <meta
          name="description"
          content="Use this educational YouTube script template to write clear, structured lessons. Generate teaching-focused prompts for ChatGPT and AI script tools."
        />
        <meta
          name="keywords"
          content="educational YouTube script template, teacher YouTube script, lesson video prompt, AI teaching script"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/educational-youtube-script-template"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Educational YouTube Script Template"
        />
        <meta
          property="og:description"
          content="Generate teaching-friendly YouTube scripts with this free educational script template."
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
                Educational YouTube Script Template
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Turn Lessons into Clear Educational YouTube Scripts
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                Teaching on YouTube is different from teaching in a classroom.
                This template helps you brief AI to write scripts that keep
                learners engaged, chunk information logically, and lead to real
                understanding. It is part of the{" "}
                <Link href="/">
                  AI Prompt Generator Hub
                </Link>
                , so your educational scripts can connect to prompts for titles,
                descriptions, email follow-ups, and more.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                When you want to design a full learning journey, you can combine
                this page with the{" "}
                <Link href="/chatgpt-prompt-generator">
                  ChatGPT Prompt Generator
                </Link>{" "}
                and other tools in the hub to keep lessons, companion articles,
                and emails aligned.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#generator"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                >
                  Generate Educational Script Prompt
                </a>
                <p className="text-xs text-gray-500">
                  No login. Free to use. Built for teachers and educators.
                </p>
              </div>
              <dl className="mt-6 flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <dt className="font-medium text-gray-700">Best for</dt>
                  <dd>Teachers, tutors, and educational creators</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-700">Optimized for</dt>
                  <dd>Clarity, retention, and learning outcomes</dd>
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
                Educational Script Prompt Builder
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Describe your topic, subject, and learners. Get a structured
                educational script prompt you can paste into ChatGPT.
              </p>

              <div className="mt-4 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Lesson topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. understanding compound interest in simple steps"
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
                    placeholder="e.g. math, physics, language learning, exam prep"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Audience
                  </label>
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {EDUCATION_AUDIENCES.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Lesson format
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="block w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    {LESSON_FORMATS.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700">
                    Learning outcome
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. be able to solve 3 basic exam-style questions"
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
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
                  Paste this into ChatGPT or your favorite AI tool to generate an
                  educational YouTube script.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 space-y-16">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <h2>How to Use AI for Educational YouTube Scripts</h2>
              <p>
                Educational content works best when learners feel guided, not
                overwhelmed. AI can help you draft lessons quickly, but only if
                your prompts include the right teaching context and learning
                goals.
              </p>
              <p>
                This template captures the key pieces teachers think about
                naturally: subject, learner profile, lesson format, and intended
                outcome. With that information, AI can create scripts that feel
                like a thoughtful lesson, not a generic explainer.
              </p>
              <p>
                You can reuse this template across an entire playlist or course,
                adjusting only the topic and outcome for each video.
              </p>

              <h2>Best ChatGPT Prompts for Educational YouTube Scripts</h2>
              <p>
                Strong educational prompts explicitly tell AI to teach, not just
                describe. They call out misconceptions, examples, and practice
                opportunities so the resulting script leads to real learning.
              </p>
              <p>Effective prompts often include:</p>
              <ul>
                <li>A clear, focused lesson objective.</li>
                <li>The learner level and prior knowledge.</li>
                <li>
                  The subject and any exam or curriculum context that matters.
                </li>
                <li>A preferred teaching style or classroom persona.</li>
                <li>
                  A request for recap and quick checks to reinforce retention.
                </li>
              </ul>
              <p>
                This page is built to help you quickly assemble those ingredients
                for every video.
              </p>

              <h2>A Simple Educational Script Structure You Can Reuse</h2>
              <p>
                You can apply a consistent structure across most educational
                videos, whether they are 5 minutes or 30 minutes long.
              </p>
              <ol>
                <li>Hook: Connect to a real problem or exam-style scenario.</li>
                <li>
                  Context: Explain why the topic matters for the learner&apos;s
                  goals.
                </li>
                <li>
                  Teaching: Break the idea into small, logical chunks with
                  examples.
                </li>
                <li>
                  Recap: Summarize and check understanding with a quick quiz or
                  reflection.
                </li>
                <li>
                  Next steps: Suggest one or two things the learner should do next
                  to practice or go deeper.
                </li>
              </ol>
              <p>
                The prompt generated on this page nudges AI toward that pattern so
                your lessons stay consistent and effective.
              </p>

              <h2>Example Educational YouTube Script Prompts</h2>
              <p>
                The examples below show how different educators can use this page
                to brief AI for structured lessons.
              </p>
            </article>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Free Educational YouTube Script Template
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use this template to brief ChatGPT or any AI model to write
                teaching-focused YouTube scripts that support real learning.
              </p>
              <div className="mt-3 rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Copy-paste educational script template
                </p>
                <textarea
                  readOnly
                  className="mt-2 h-52 w-full resize-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-mono leading-relaxed text-gray-800 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  value={`You are an experienced teacher and YouTube educator.

Write a complete educational YouTube script using these details:
- Lesson topic: [topic in one sentence]
- Subject area: [math, physics, language, exam prep, etc.]
- Target audience: [student profile and level]
- Preferred lesson format: [tutorial, concept explanation, case study, revision]
- Learning outcome: [what learners should be able to do after watching]

Teaching style:
- Clear, patient, and structured.
- Uses visuals and on-screen text to reinforce key points.

Script requirements:
- Open with a hook tied to a real problem or exam scenario.
- Explain why the topic matters before going into detail.
- Break the lesson into short sections with headings learners can screenshot.
- Use analogies, examples, or small exercises to make the idea tangible.
- Include one recap and a quick quiz-style check.
- End with a summary and a next step for practice.

Output:
- Sections: Hook, Context, Main teaching points, Recap, Next steps.
- Natural spoken English suitable for classroom-style or talking-head videos.`}
                />
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Example Educational Script Prompts
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Here are a few example prompts you could build with this template
                for different subjects and audiences.
              </p>
              <div className="mt-3 space-y-3 text-xs text-gray-700">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    High school math lesson
                  </p>
                  <p className="mt-1">
                    Generate a script for a{" "}
                    <span className="font-medium">
                      15-minute lesson on understanding quadratic equations
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      high school students preparing for exams
                    </span>{" "}
                    who need{" "}
                    <span className="font-medium">
                      clear visual explanations and practice questions
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Language learning channel
                  </p>
                  <p className="mt-1">
                    Write an educational YouTube script that{" "}
                    <span className="font-medium">
                      teaches English learners five common phrasal verbs for
                      daily life
                    </span>
                    , targeted at{" "}
                    <span className="font-medium">
                      adult learners at an intermediate level
                    </span>
                    .
                  </p>
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">
                  <p className="font-semibold text-gray-900">
                    Teacher support channel
                  </p>
                  <p className="mt-1">
                    Create a script for a{" "}
                    <span className="font-medium">
                      lesson that helps new teachers design engaging warm-up
                      activities
                    </span>
                    , aimed at{" "}
                    <span className="font-medium">
                      first- and second-year teachers looking for classroom-ready
                      ideas
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
                    Is this template only for academic subjects?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    No. It works for any educational topic, including creative
                    skills, software tutorials, and professional development.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can I use this for full courses, not just single videos?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Many creators use the same script template across
                    entire playlists or course modules, changing only the topic
                    and examples.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How long should an educational YouTube video be?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It depends on the subject and audience. Many lessons work
                    well in the 8–20 minute range, with longer topics split into
                    a series.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can AI replace me as the teacher on screen?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    AI can help with scripting and structure, but your presence,
                    stories, and explanations are still what make the lesson
                    meaningful. Think of AI as a planning assistant.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    How do I adapt the script for different learner levels?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    You can regenerate the script with a different audience
                    profile or ask AI to simplify or deepen the explanations while
                    keeping the same structure.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Can this work for live lessons or webinars?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. You can adapt the script for live delivery, using the
                    recap and questions as interactive moments with your students.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Should I include homework or practice tasks?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    It is often helpful. You can ask AI to propose a short
                    practice task or reflection at the end of each script to
                    support learning.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-sm font-medium text-gray-900">
                    Does this template support captioning and accessibility?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Yes. Clear, well-structured scripts make it easier to add
                    accurate captions and on-screen text, which helps learners who
                    rely on subtitles.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Related Tools for YouTube Creators
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Combine this educational template with other tools to build a
                complete learning-focused channel.
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
                    Build general-purpose scripts that support your educational
                    series.
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
                    Plan lesson sequences and course-style playlists.
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
                    Turn curriculum plans into individual video outlines.
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
                    Create titles that attract the right learners and parents.
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
                    Design thumbnails that feel clear, student-friendly, and
                    trustworthy.
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
                    Turn your lesson into a search-friendly description with
                    helpful links.
                  </p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold tracking-tight text-gray-900">
                Want More Advanced Prompts?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Get a free PDF with 50 high-retention YouTube script, lesson, and
                title prompts you can use with ChatGPT or Claude. Use them to
                build out your educational channel faster.
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
