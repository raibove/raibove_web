import React from 'react';
import { Palette, Code, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Header - Full width with centered content */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Hello, I'm Shweta Kale! 👋</h1>
          <p className="text-xl mt-3 max-w-3xl mx-auto">Turning ideas into delightful digital experiences</p>
        </div>
      </header>

      {/* Hero Section - Full width with background */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/me.png" alt="Shweta Kale" className="rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">My Intro</h2>
              <p className="text-gray-700 text-lg mb-4">
                I'm a developer who loves building products related to art, design, and all things creative.
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

      {/* What I Love Section - Colorful and friendly */}
      <section className="w-full py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">What I Love Building</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500">
              <div className="h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Palette size={32} className="text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Art Tools</h3>
              <p className="text-gray-600">
                Applications that help artists express themselves and create beautiful work more efficiently.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Code size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Systems</h3>
              <p className="text-gray-600">
                Tools that bridge the gap between designers and developers for seamless collaboration.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500">
              <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Zap size={32} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Side Hustles</h3>
              <p className="text-gray-600">
                Small, focused apps that solve specific problems for creative professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Cards - Friendly design */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">Let's Connect!</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* GitHub Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <img src='/github.svg' alt='github logo' />
              </div>
              <h3 className="text-2xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 mb-6 text-center">Check out my code and projects</p>
              <a
                href="https://github.com/raibove"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300 flex items-center"
              >
                Visit Profile
              </a>
            </div>

            {/* Twitter Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <img src='/twitter.svg' alt='twitter logo' />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Twitter</h3>
              <p className="text-gray-600 mb-6 text-center">Follow me for updates and insights</p>
              <a
                href="https://twitter.com/shweta_kale1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300 flex items-center"
              >
                Follow Me
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-200 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <img src='/linkedin.svg' />
              </div>
              <h3 className="text-2xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 mb-6 text-center">Connect with me professionally</p>
              <a
                href="https://linkedin.com/in/shweta-kale/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300 flex items-center"
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
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-100 transition-colors duration-300 shadow-lg">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Shweta Kale. All rights reserved.</p>
            {/* <div className="flex space-x-4">
              <a href="/privacy-policy" className="hover:text-indigo-300 transition-colors duration-300">Privacy Policy</a>
              <a href="/terms-of-use" className="hover:text-indigo-300 transition-colors duration-300">Terms of Use</a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;