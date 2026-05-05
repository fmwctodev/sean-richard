import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AmbientMesh from '@/components/layout/AmbientMesh';
import ScrollProgress from '@/components/layout/ScrollProgress';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { SITE } from '@/content/nav';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

const geistSans = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-geist-mono',
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
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E0D0C',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="bg-bg-primary text-ink-primary font-sans antialiased">
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
          <AmbientMesh />
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
