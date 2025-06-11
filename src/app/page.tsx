/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Palette, Code, Zap } from 'lucide-react';
// import Link from 'next/link';
// import { getAllPosts } from '../lib/posts';
import Image from "next/image";

// SEO metadata
export const metadata = {
  title: 'Shweta Kale - Creative Developer & Designer | Art Tools & Design Systems',
  description: 'Shweta Kale is a creative developer building delightful digital experiences, art tools, and design systems. Passionate about helping creators bring their visions to life through innovative products.',
  keywords: 'Shweta Kale, creative developer, art tools, design systems, UI/UX designer, creative side hustles, digital products',
  author: 'Shweta Kale',
  creator: 'Shweta Kale',
  publisher: 'Shweta Kale',
  openGraph: {
    title: 'Shweta Kale - Creative Developer & Designer',
    description: 'Turning ideas into delightful digital experiences. Building art tools, design systems, and creative products.',
    url: 'https://raibove.com',
    siteName: 'Shweta Kale',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/me.png',
        width: 1200,
        height: 630,
        alt: 'Shweta Kale - Creative Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shweta Kale - Creative Developer & Designer',
    description: 'Building delightful digital experiences and creative tools',
    creator: '@shweta_kale1',
    images: ['/me.png'],
  },
  alternates: {
    canonical: 'https://raibove.com',
  },
};

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shweta Kale',
  jobTitle: 'Creative Developer',
  description: 'Creative developer building art tools, design systems, and digital products',
  url: 'https://raibove.com',
  image: 'https://raibove.com/me.png',
  sameAs: [
    'https://github.com/raibove',
    'https://twitter.com/shweta_kale1',
    'https://linkedin.com/in/shweta-kale/',
  ],
  knowsAbout: [
    'Web Development',
    'UI/UX Design',
    'Art Tools',
    'Design Systems',
    'Creative Technology',
  ],
  email: 'shwetakale144@gmail.com',
};

export default function Home() {
  // const recentPosts = getAllPosts().slice(0, 3); // Get 3 most recent posts

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
        {/* Header - Full width with centered content */}
        <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold">Hello, I'm Shweta Kale! 👋</h1>
            <p className="text-xl mt-3 max-w-3xl mx-auto">Turning ideas into delightful digital experiences</p>
          </div>
        </header>

        {/* Hero Section with better semantic HTML */}
        <section className="w-full bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image 
                  src="/me.png" 
                  alt="Shweta Kale - Creative Developer and Designer" 
                  className="rounded-lg"
                  width="500"
                  height="500"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 text-indigo-700">About Me</h2>
                <p className="text-gray-700 text-lg mb-4">
                  I'm a creative developer who loves building products related to art, design, and all things creative.
                  I find joy in crafting tools that help creators bring their visions to life.
                </p>
                <p className="text-gray-700 text-lg">
                  Currently, I'm on an exciting journey to become self-funded through various side hustles.
                  I'm passionate about creating sustainable products that solve real problems in the creative space
                  while allowing me to work on what I truly love.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Love Section */}
        <section className="w-full py-16" aria-labelledby="what-i-build">
          <div className="container mx-auto px-6">
            <h2 id="what-i-build" className="text-3xl font-bold mb-10 text-center text-indigo-700">What I Love Building</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500">
                <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Palette size={32} className="text-pink-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Art Tools</h3>
                <p className="text-gray-600">
                  Applications that help artists express themselves and create beautiful work more efficiently.
                </p>
              </article>

              <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Code size={32} className="text-blue-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Design Systems</h3>
                <p className="text-gray-600">
                  Tools that bridge the gap between designers and developers for seamless collaboration.
                </p>
              </article>

              <article className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500">
                <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Zap size={32} className="text-amber-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Creative Side Hustles</h3>
                <p className="text-gray-600">
                  Small, focused apps that solve specific problems for creative professionals.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts Section */}
        {/* {recentPosts.length > 0 && (
          <section className="w-full py-16 bg-gray-50" aria-labelledby="recent-posts">
            <div className="container mx-auto px-6">
              <h2 id="recent-posts" className="text-3xl font-bold mb-10 text-center text-indigo-700">Latest Blog Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {recentPosts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-3">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-indigo-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <time className="text-gray-500 text-sm block mb-3" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link 
                  href="/blog"
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
                >
                  View All Posts
                </Link>
              </div>
            </div>
          </section>
        )} */}

        {/* Social Media Cards */}
        <section className="w-full bg-white py-16" aria-labelledby="connect">
          <div className="container mx-auto px-6">
            <h2 id="connect" className="text-3xl font-bold mb-10 text-center text-indigo-700">Let's Connect!</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* GitHub Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <img src='/github.svg' alt='GitHub logo' width="40" height="40" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 mb-6 text-center">Check out my code and projects</p>
                <a
                  href="https://github.com/raibove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300 flex items-center"
                  aria-label="Visit Shweta Kale's GitHub profile"
                >
                  Visit Profile
                </a>
              </div>

              {/* Twitter Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <img src='/twitter.svg' alt='Twitter logo' width="40" height="40" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Twitter</h3>
                <p className="text-gray-600 mb-6 text-center">Follow me for updates and insights</p>
                <a
                  href="https://twitter.com/shweta_kale1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 flex items-center"
                  aria-label="Follow Shweta Kale on Twitter"
                >
                  Follow Me
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <img src='/linkedin.svg' alt='LinkedIn logo' width="40" height="40" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-600 mb-6 text-center">Connect with me professionally</p>
                <a
                  href="https://linkedin.com/in/shweta-kale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300 flex items-center"
                  aria-label="Connect with Shweta Kale on LinkedIn"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <a
              href="mailto:shwetakale144@gmail.com"
              className="px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-100 transition-colors duration-300 shadow-lg"
              aria-label="Send email to Shweta Kale"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
}