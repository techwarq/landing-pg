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
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#065f46",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="icon" href="/logo.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/logo.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
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
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.nurturelifescience.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <Script id="ld-pharmaceutical" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Pharmacy",
              name: "Nurture Lifescience",
              description: "Innovative, ethical, and patient-centric pharmaceutical solutions in India. WHO-GMP, FSSAI and FDA compliant.",
              url: "https://www.nurturelifescience.com/",
              logo: "https://www.nurturelifescience.com/logo.png",
              image: "https://www.nurturelifescience.com/logo.png",
              telephone: "+916370730352",
              email: "info@nurturelifescience.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Panchkula",
                addressRegion: "Haryana",
                addressCountry: "IN"
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "WHO-GMP Certified"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  name: "FSSAI Approved"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "FDA Compliant"
                }
              ],
              areaServed: {
                "@type": "Country",
                name: "India"
              },
              foundingDate: "2024",
              slogan: "Nurturing Health With The Power Of Science",
              sameAs: [
                "https://www.nurturelifescience.com/products",
                "https://www.nurturelifescience.com/products/axident-capsules",
                "https://www.nurturelifescience.com/products/axident-drops",
                "https://www.nurturelifescience.com/products/eco-ad-oil",
                "https://www.nurturelifescience.com/products/musgo-gel",
                "https://www.nurturelifescience.com/products/sukfate-o",
                "https://www.nurturelifescience.com/products/panjol-dsr"
              ]
            }),
          }}
        />
        <Script id="ld-breadcrumb" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.nurturelifescience.com/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://www.nurturelifescience.com/products"
                }
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
