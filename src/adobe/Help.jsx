import React from 'react';
import { LifeBuoy, Mail, Lightbulb, FileQuestion } from 'lucide-react';

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Header - Full width with centered content */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Help & Support</h1>
          <p className="text-xl mt-3 max-w-3xl mx-auto">Get assistance with my Adobe add-ons</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="h-20 w-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <LifeBuoy size={40} className="text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-indigo-700">How Can I Help You?</h2>
              <p className="text-gray-700 text-lg">
                I'm committed to making sure you have the best experience with my Adobe add-ons.
                If you need assistance or have ideas for new features, I'm here to help.
              </p>
            </div>

            {/* Support Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {/* Email Support Card */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-indigo-500">
                <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Mail size={32} className="text-indigo-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Support</h3>
                <p className="text-gray-600 mb-6">
                  Reach out directly for personalized support with any issues you're experiencing.
                </p>
                <a 
                  href="mailto:shwetakale144@gmail.com" 
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
                >
                  Email shwetakale144@gmail.com
                </a>
              </div>

              {/* Feature Request Card */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb size={32} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Feature Requests</h3>
                <p className="text-gray-600 mb-6">
                  Have an idea to make the add-on better? I'd love to hear your suggestions!
                </p>
                <a 
                  href="mailto:shwetakale144@gmail.com?subject=Feature%20Request%20for%20Adobe%20Add-on" 
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                >
                  Submit Feature Request
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            {/* <div className="mb-16">
              <div className="flex items-center mb-8">
                <FileQuestion size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-indigo-700">Frequently Asked Questions</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">How do I install the add-on?</h4>
                  <p className="text-gray-700">
                   
                    To install the add-on, follow these steps:
                    <ol className="list-decimal list-inside mt-2">
                      <li>Open https://new.express.adobe.com/add-ons</li>
                      <li>Search for add-on called Outline</li>
                      <li>Follow the installation instructions provided by the add-on.</li>
                    </ol>
               </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Is the add-on compatible with my version of Adobe software?</h4>
                  <p className="text-gray-700">
                    The add-on is compatible with the latest versions of Adobe Creative Cloud applications. For specific version compatibility, please check the requirements section or email me for confirmation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">How often is the add-on updated?</h4>
                  <p className="text-gray-700">
                    I typically release updates every 1-2 months to add new features and fix any bugs. Make sure to keep your add-on updated to the latest version for the best experience.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Response Time */}
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Response Time</h3>
              <p className="text-gray-700">
                I aim to respond to all support requests within 24-48 hours. For urgent matters, please indicate this in your email subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Shweta Kale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpPage;