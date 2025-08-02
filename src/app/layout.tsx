import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from '@/data/portfolio';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - Senior Frontend Developer | React & Next.js Expert`,
  description: `${personalInfo.description}`,
  keywords: [
    "Senior Frontend Developer",
    "React Developer", 
    "Next.js Expert",
    "Full Stack Developer",
    "UI/UX Specialist",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
    "Rohit Kashyap"
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rohit-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohit-portfolio.vercel.app',
    title: `${personalInfo.name} - Senior Frontend Developer`,
    description: personalInfo.description,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Senior Frontend Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - Senior Frontend Developer`,
    description: personalInfo.description,
    creator: '@Rohit7376',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.title,
              description: personalInfo.description,
              url: "https://rohit-portfolio.vercel.app",
              sameAs: [
                personalInfo.socialLinks.linkedin,
                personalInfo.socialLinks.twitter,
                personalInfo.socialLinks.github,
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Khatiauli, Muzaffarnagar",
                addressCountry: "India"
              },
              email: personalInfo.email,
              telephone: personalInfo.phone,
              knowsAbout: [
                "React.js",
                "Next.js", 
                "JavaScript",
                "TypeScript",
                "Frontend Development",
                "Full Stack Development",
                "UI/UX Design",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
