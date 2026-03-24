import Head from "next/head";
import Link from "next/link";

export default function YouTubeContentCreationGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>YouTube Content Creation Guide - Tools & Resources for Creators</title>
        <meta
          name="description"
          content="Complete YouTube content creation guide with free AI tools for idea generation, script writing, titles, hooks, and more. Learn how to grow your YouTube channel."
        />
        <meta
          name="keywords"
          content="YouTube content creation, YouTube tools, YouTube script writing, YouTube SEO, YouTube growth"
        />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            Complete YouTube Content Creation Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, optimize, and grow your YouTube channel with free AI tools and expert tips
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Master YouTube Content Creation
          </h2>
          <p className="text-gray-600 mb-4">
            Creating successful YouTube content requires more than just hitting record. It involves strategic planning, engaging storytelling, and optimization for search and viewer retention. Our comprehensive guide provides all the tools, resources, and expertise you need to take your YouTube channel to the next level.
          </p>
          <p className="text-gray-600">
            Whether you're a beginner looking to start your first channel or an experienced creator wanting to improve your content, this guide has something for everyone. Explore our free AI tools and expert resources below.
          </p>
        </section>

        {/* Tools Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Free YouTube AI Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Idea Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube Video Idea Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Generate creative, high-performing YouTube video ideas tailored to your niche and audience.
              </p>
              <Link
                href="/youtube-video-idea-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Script Prompt Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube Script Prompt Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Create detailed prompts for AI to write high-retention YouTube scripts tailored to your audience.
              </p>
              <Link
                href="/youtube-script-prompt-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Title Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube SEO Title Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Generate click-worthy titles optimized for YouTube search and viewer engagement.
              </p>
              <Link
                href="/youtube-title-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Hook Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube Hook Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Create attention-grabbing video intros that stop viewers from scrolling.
              </p>
              <Link
                href="/youtube-hook-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Description Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube Description Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Generate SEO-friendly YouTube video descriptions that drive traffic and engagement.
              </p>
              <Link
                href="/youtube-description-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Tags Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube Tags Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Generate relevant tags to improve your YouTube video discoverability.
              </p>
              <Link
                href="/youtube-tags-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Hashtags Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube Hashtag Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Generate trending hashtags to increase your video's reach on YouTube.
              </p>
              <Link
                href="/youtube-hashtag-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>

            {/* Thumbnail Prompt Generator */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                YouTube Thumbnail Prompt Generator
              </h3>
              <p className="text-gray-600 mb-4">
                Create compelling thumbnail prompts for AI image generators.
              </p>
              <Link
                href="/youtube-thumbnail-prompt-generator"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Use Tool
              </Link>
            </div>
          </div>
        </section>

        {/* Content Creation Workflow */}
        <section className="mb-16 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            YouTube Content Creation Workflow
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Brainstorm Video Ideas</h3>
                <p className="text-gray-600">
                  Use our <Link href="/youtube-video-idea-generator" className="text-indigo-600 hover:underline">YouTube Video Idea Generator</Link> to discover topics that resonate with your audience and have high search potential.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Create a Script</h3>
                <p className="text-gray-600">
                  Generate a detailed script prompt with our <Link href="/youtube-script-prompt-generator" className="text-indigo-600 hover:underline">YouTube Script Prompt Generator</Link> and use it with AI tools like ChatGPT to write your script.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Optimize Your Hook</h3>
                <p className="text-gray-600">
                  Create an attention-grabbing opening with our <Link href="/youtube-hook-generator" className="text-indigo-600 hover:underline">YouTube Hook Generator</Link> to keep viewers watching.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Craft SEO Titles</h3>
                <p className="text-gray-600">
                  Generate click-worthy titles optimized for search with our <Link href="/youtube-title-generator" className="text-indigo-600 hover:underline">YouTube SEO Title Generator</Link>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                5
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Write Descriptions</h3>
                <p className="text-gray-600">
                  Create SEO-friendly descriptions with our <Link href="/youtube-description-generator" className="text-indigo-600 hover:underline">YouTube Description Generator</Link> to improve discoverability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                6
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Add Tags & Hashtags</h3>
                <p className="text-gray-600">
                  Improve reach with our <Link href="/youtube-tags-generator" className="text-indigo-600 hover:underline">YouTube Tags Generator</Link> and <Link href="/youtube-hashtag-generator" className="text-indigo-600 hover:underline">YouTube Hashtag Generator</Link>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                7
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Create Thumbnails</h3>
                <p className="text-gray-600">
                  Design compelling thumbnails with our <Link href="/youtube-thumbnail-prompt-generator" className="text-indigo-600 hover:underline">YouTube Thumbnail Prompt Generator</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            YouTube Content Creation Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">📈</span>
                Focus on Viewer Retention
              </h3>
              <p className="text-gray-600">
                The first 30 seconds of your video are crucial. Use a strong hook to grab attention and clearly state the value viewers will get by watching the entire video.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">🔍</span>
                Optimize for YouTube Search
              </h3>
              <p className="text-gray-600">
                Research keywords using tools like Google Keyword Planner and YouTube's search suggest. Include these keywords in your title, description, and tags.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">🎨</span>
                Create Consistent Branding
              </h3>
              <p className="text-gray-600">
                Use consistent colors, fonts, and tone of voice across all your videos. This helps viewers recognize your content and builds brand loyalty.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">👥</span>
                Engage with Your Audience
              </h3>
              <p className="text-gray-600">
                Respond to comments, ask questions in your videos, and create community posts. Engagement signals to YouTube that your content is valuable.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">📊</span>
                Analyze Your Data
              </h3>
              <p className="text-gray-600">
                Use YouTube Analytics to understand what's working. Look at watch time, audience retention, and click-through rate to optimize future content.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-indigo-600">⏰</span>
                Be Consistent
              </h3>
              <p className="text-gray-600">
                Create a content schedule and stick to it. Consistency helps build trust with your audience and improves your channel's performance in YouTube's algorithm.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-indigo-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Grow Your YouTube Channel?</h2>
            <p className="mb-6 text-lg">
              Start creating high-quality YouTube content today with our free AI tools.
            </p>
            <Link
              href="/youtube-video-idea-generator"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors"
            >
              Generate Your First Video Idea
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}