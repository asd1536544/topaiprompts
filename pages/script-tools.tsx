import Head from "next/head";
import Link from "next/link";

export default function ScriptToolsPage() {
  return (
    <>
      <Head>
        <title>Script Tools for YouTube Creators | AI Tool Hub</title>
        <meta
          name="description"
          content="Explore script tools for YouTube: long-form scripts, hooks, outlines, faceless videos, Shorts, and more. Built for creators who want high-retention videos."
        />
        <meta
          name="keywords"
          content="YouTube script tools, script prompt generator, faceless YouTube script, Shorts script, documentary script"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/script-tools"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Script Tools for YouTube Creators | AI Tool Hub"
        />
        <meta
          property="og:description"
          content="Browse YouTube script tools for hooks, long-form videos, Shorts, faceless channels, and documentary-style content."
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
              <span className="font-semibold text-gray-900">Script Tools</span>
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
          <section className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                Script Tools
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Script Tools Built for High-Retention YouTube Videos
              </h1>
              <p>
                Great YouTube channels are built on repeatable scripts, not
                one-off inspiration. This section collects every tool in the hub
                that helps you shape words on the page: from the{" "}
                <Link href="/youtube-script-prompt-generator">
                  YouTube Script Prompt Generator
                </Link>{" "}
                that turns rough ideas into detailed prompts, to the{" "}
                <Link href="/youtube-hook-generator">Hook Generator</Link>{" "}
                that sharpens your first three seconds.
              </p>
              <p>
                You can treat this page as a “writing room” for your channel.
                Start with a raw idea, then move through tools that specialise
                in different parts of the script. Use{" "}
                <Link href="/youtube-script-outline-generator">
                  Script Outline
                </Link>{" "}
                when you want structure before words,{" "}
                <Link href="/educational-youtube-script-template">
                  Educational Script Templates
                </Link>{" "}
                when you are teaching, and{" "}
                <Link href="/storytelling-script-prompt">
                  Storytelling Script Prompts
                </Link>{" "}
                when you are turning experience into narrative.
              </p>
              <p>
                If you run faceless or automation channels, you have slightly
                different problems: keeping videos human without being on
                camera, delegating scripts to editors, and batching production.
                The{" "}
                <Link href="/faceless-youtube-script-prompt">
                  Faceless YouTube Script Prompt
                </Link>{" "}
                and{" "}
                <Link href="/youtube-automation-script-prompt">
                  Automation Script Prompt
                </Link>{" "}
                are designed for those constraints so you can still build a
                loyal audience.
              </p>
              <p>
                Short-form platforms demand their own pacing. The{" "}
                <Link href="/youtube-shorts-script-generator">
                  Shorts Script Generator
                </Link>{" "}
                helps you compress ideas into 30–60 seconds without losing the
                hook, payoff, or call to action. Pair it with{" "}
                <Link href="/youtube-title-generator">
                  YouTube Title Generator
                </Link>{" "}
                from the optimization stack when you want the title and script
                to be built together.
              </p>
              <p>
                Finally, when you want to go deep with{" "}
                <Link href="/documentary-script-prompt">
                  documentary-style scripts
                </Link>{" "}
                or long-form educational content, you can move into more
                advanced prompts that think in acts instead of individual clips.
                The goal is the same across every tool on this page: make
                scripts easier to start, faster to iterate, and more consistent
                across your channel.
              </p>
            </article>

            <aside className="space-y-8">
              <section>
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Script Tools in This Hub
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Every tool below links to a dedicated prompt builder or
                  template.
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
                        Turn any idea into a detailed long-form YouTube script
                        prompt.
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
                        Brainstorm cold opens and hooks for your strongest ideas.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/youtube-script-outline-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Script Outline Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Plan the structure of high-retention videos before you
                        write.
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
                        Build scripts for channels that rely on B-roll and
                        narration.
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
                        Shorts Script Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Create tight, fast-paced scripts for vertical Shorts.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/youtube-automation-script-prompt"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Automation Script Prompt
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Write prompts tailored to outsourced, systemised channels.
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
                        Educational Script Template
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Use templates for lesson-based, curriculum-style content.
                      </p>
                    </div>
                    <span className="mt-2 inline-flex items-center text-[11px] font-medium text-indigo-600">
                      Open tool
                    </span>
                  </Link>
                  <Link
                    href="/storytelling-script-prompt"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Storytelling Script Prompt
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Craft scripts built around stories, case studies, and
                        journeys.
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
                        Build act-based scripts for documentary and narrative
                        videos.
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
                  Jump to Other Categories
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/optimization-tools"
                      className="hover:text-gray-900"
                    >
                      Optimization Tools (titles, thumbnails, tags)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/growth-tools"
                      className="hover:text-gray-900"
                    >
                      Growth Tools (ideas, systems, distribution)
                    </Link>
                  </li>
                </ul>
              </section>
            </aside>
          </section>
        </main>

        <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Popular Tools
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/youtube-script-prompt-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Script Prompt Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-hook-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Hook Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-title-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Title Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-description-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Description Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-thumbnail-prompt-generator"
                      className="hover:text-gray-900"
                    >
                      Thumbnail Prompt Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-tags-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Tags Generator
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Script Systems
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/youtube-script-outline-generator"
                      className="hover:text-gray-900"
                    >
                      Script Outline Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faceless-youtube-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Faceless YouTube Script Prompt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-shorts-script-generator"
                      className="hover:text-gray-900"
                    >
                      Shorts Script Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-automation-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Automation Script Prompt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/educational-youtube-script-template"
                      className="hover:text-gray-900"
                    >
                      Educational Script Template
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentary-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Documentary Script Prompt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/storytelling-script-prompt"
                      className="hover:text-gray-900"
                    >
                      Storytelling Script Prompt
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Categories
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="/script-tools" className="hover:text-gray-900">
                      Script Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/optimization-tools"
                      className="hover:text-gray-900"
                    >
                      Optimization Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/growth-tools"
                      className="hover:text-gray-900"
                    >
                      Growth Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-video-idea-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Video Idea Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/youtube-hashtag-generator"
                      className="hover:text-gray-900"
                    >
                      YouTube Hashtag Generator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-400">
              Built for long-term YouTube creator workflows, not generic AI
              demos.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
