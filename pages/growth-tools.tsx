import Head from "next/head";
import Link from "next/link";

export default function GrowthToolsPage() {
  return (
    <>
      <Head>
        <title>Growth Tools for YouTube Creators | AI Tool Hub</title>
        <meta
          name="description"
          content="Explore growth tools for YouTube: video ideas, automation scripts, faceless channels, Shorts, and systems thinking for long-term growth."
        />
        <meta
          name="keywords"
          content="YouTube growth tools, YouTube video ideas, YouTube automation, faceless channel scripts, YouTube Shorts scripts"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topaiprompts.top/growth-tools"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Growth Tools for YouTube Creators | AI Tool Hub"
        />
        <meta
          property="og:description"
          content="Browse YouTube growth tools for ideas, automation, faceless channels, and Shorts."
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
              <span className="font-semibold text-gray-900">Growth Tools</span>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 pb-16 pt-12 lg:px-8 lg:pt-16">
          <section className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                Growth Tools
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Tools That Help Your Channel Grow on Purpose, Not by Accident
              </h1>
              <p>
                Growth is a byproduct of a clear strategy executed consistently.
                This page collects tools that support that strategy:{" "}
                <Link href="/youtube-video-idea-generator">
                  Video Idea Generator
                </Link>{" "}
                for mapping your content calendar,{" "}
                <Link href="/youtube-automation-script-prompt">
                  Automation Script Prompts
                </Link>{" "}
                for turning ideas into systems, and{" "}
                <Link href="/faceless-youtube-script-prompt">
                  Faceless YouTube Script Prompts
                </Link>{" "}
                for channels that are built to scale beyond a single on-camera
                personality.
              </p>
              <p>
                You can use the{" "}
                <Link href="/youtube-video-idea-generator">
                  Video Idea Generator
                </Link>{" "}
                at the start of every planning cycle. Once a list of ideas is
                ready, move those that matter into{" "}
                <Link href="/youtube-script-prompt-generator">
                  Script Prompts
                </Link>{" "}
                and then through{" "}
                <Link href="/optimization-tools">
                  optimization tools for titles, thumbnails, and tags
                </Link>
                . When everything works, save the workflow as an automation
                system so your output is less dependent on mood and motivation.
              </p>
              <p>
                Not every creator wants to be on camera. Faceless and
                documentary-style channels still need strong concepts, scripts,
                and repeatable formats. Combining{" "}
                <Link href="/faceless-youtube-script-prompt">
                  faceless scripts
                </Link>
                ,{" "}
                <Link href="/documentary-script-prompt">
                  documentary prompts
                </Link>{" "}
                and{" "}
                <Link href="/storytelling-script-prompt">
                  storytelling prompts
                </Link>{" "}
                helps you build formats that can be handed off to writers and
                editors as the channel grows.
              </p>
              <p>
                Finally, short-form content is now part of most growth
                strategies. The{" "}
                <Link href="/youtube-shorts-script-generator">
                  Shorts Script Generator
                </Link>{" "}
                and{" "}
                <Link href="/youtube-hashtag-generator">
                  Hashtag Generator
                </Link>{" "}
                help you repurpose ideas from long-form videos into Shorts and
                social clips that still feel intentional instead of random.
              </p>
            </article>

            <aside className="space-y-8">
              <section>
                <h2 className="text-base font-semibold tracking-tight text-gray-900">
                  Growth Tools in This Hub
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Use these tools when you are planning content and systems.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/youtube-video-idea-generator"
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-3 text-sm shadow-sm transition hover:border-indigo-500 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        YouTube Video Idea Generator
                      </p>
                      <p className="mt-1 text-xs text-gray-600">
                        Generate strategic video ideas, series, and content
                        pillars.
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
                        Design prompts for systemised, outsourced channel
                        operations.
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
                        Plan faceless content that can scale with B-roll and
                        voiceover.
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
                        Map out deep-dive, documentary-style videos for your
                        niche.
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
                        Build story-led videos that grow loyalty and watch time.
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
                        Turn long-form ideas into Shorts that drive discovery.
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
                      href="/script-tools"
                      className="hover:text-gray-900"
                    >
                      Script Tools (writing, story, structure)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/optimization-tools"
                      className="hover:text-gray-900"
                    >
                      Optimization Tools (titles, thumbnails, tags)
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
