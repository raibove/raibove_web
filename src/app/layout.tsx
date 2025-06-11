import Script from 'next/script';
import './globals.css'
import Link from 'next/link'

export const metadata = {
  metadataBase: new URL('https://raibove.com'), // Replace with your actual domain
  title: {
    default: 'Shweta Kale - Creative Developer & Designer',
    template: '%s | Shweta Kale'
  },
  description: 'Shweta Kale is a creative developer building delightful digital experiences, art tools, and design systems.',
  keywords: ['Shweta Kale', 'creative developer', 'art tools', 'design systems', 'UI/UX designer'],
  authors: [{ name: 'Shweta Kale', url: 'https://raibove.com' }],
  creator: 'Shweta Kale',
  publisher: 'Shweta Kale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raibove.com',
    siteName: 'Shweta Kale',
    title: 'Shweta Kale - Creative Developer & Designer',
    description: 'Building delightful digital experiences and creative tools',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://raibove.com" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="color-scheme" content="light" />

        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JMJGGQLJG1"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JMJGGQLJG1', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>

        <nav className="bg-white shadow-sm border-b sticky top-0 z-40" role="navigation" aria-label="Main navigation">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-xl font-bold hover:text-indigo-600 transition-colors">
                Shweta Kale
              </Link>
              <div className="space-x-6">
                <Link href="/" className="hover:text-indigo-600 transition-colors">
                  Home
                </Link>
                <Link href="/blog" className="hover:text-indigo-600 transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="hover:text-indigo-600 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="hover:text-indigo-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content">{children}</main>

        <footer className="bg-gray-900 text-white py-8 mt-16" role="contentinfo">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Shweta Kale. All rights reserved.</p>
              <nav className="flex space-x-4" aria-label="Footer navigation">
                <Link href="/privacy" className="hover:text-indigo-300 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/refund-policy" className="hover:text-indigo-300 transition-colors duration-300">
                  Refund Policy
                </Link>
                <Link href="/terms-of-use" className="hover:text-indigo-300 transition-colors duration-300">
                  Terms of Use
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}