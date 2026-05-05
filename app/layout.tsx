import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import BackgroundCanvas from '@/components/layout/BackgroundCanvas';
import ScrollProgress from '@/components/layout/ScrollProgress';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { SITE } from '@/content/nav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const GA_MEASUREMENT_ID = 'G-KET5CM5RLL';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Sean Richard - Entrepreneur and Systems Architect',
    template: '%s | Sean Richard',
  },
  description: SITE.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_US',
    url: SITE.url,
    images: [{ url: '/opengraph.png', alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="preload"
          as="image"
          href="/assets/headshots/sean-richard.png"
          fetchPriority="high"
        />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        <SchemaMarkup path="/" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <div className="min-h-screen relative">
          <BackgroundCanvas />
          <ScrollProgress />
          <div className="relative z-10">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
