const Support = () => {
    return (
        <div>
            <section className="w-full bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">For any issue please connect with me on following socials</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* GitHub Card */}
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                                <img src='/email.svg' alt='email logo' />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">Email</h3>
                            <p className="text-gray-600 mb-6 text-center">Send me an email</p>
                            <a
                                href="mailto:shwetakale144@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300 flex items-center"
                            >
                                Send Mail
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
    )
}

export default Support;