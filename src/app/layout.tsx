import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nurturelifescience.com"),
  applicationName: "Nurture Lifescience",
  title: {
    default: "Nurture Lifescience",
    template: "%s | Nurture Lifescience",
  },
  description:
    "Innovative, ethical, and patient-centric pharmaceutical solutions in India. WHO-GMP, FSSAI and FDA compliant.",
  keywords: [
    "Nurture Lifescience",
    "pharmaceutical",
    "healthcare",
    "WHO-GMP",
    "FSSAI",
    "FDA",
    "India",
    "pediatric care",
    "affordable medicines",
    "quality healthcare",
  ],
  authors: [{ name: "Nurture Lifescience" }],
  creator: "Nurture Lifescience",
  publisher: "Nurture Lifescience",
  category: "Healthcare",
  openGraph: {
    type: "website",
    url: "/",
    title: "Nurture Lifescience",
    description:
      "Innovative, ethical, and patient-centric pharmaceutical solutions in India.",
    siteName: "Nurture Lifescience",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nurture Lifescience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurture Lifescience",
    description:
      "Innovative, ethical, and patient-centric pharmaceutical solutions in India.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  themeColor: "#065f46",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/logo.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nurture Lifescience",
              url: "https://www.nurturelifescience.com/",
              logo: "https://www.nurturelifescience.com/logo.png",
              email: "info@nurturelifescience.com",
              telephone: "+916370730352",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Panchkula",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Nurture Lifescience",
              url: "https://www.nurturelifescience.com/",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
