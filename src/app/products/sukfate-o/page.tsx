import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "SUKFATE O - Gastric Protection with Sucralfate | Nurture Lifescience",
  description: "SUKFATE O provides superior gastric protection with Sucralfate and Oxetacane. Effective ulcer treatment and gastric healing formulation.",
  keywords: [
    "SUKFATE O",
    "Sucralfate",
    "gastric protection",
    "ulcer treatment",
    "gastric healing",
    "Oxetacane",
    "gastrointestinal medicine",
    "stomach protection",
    "Nurture Lifescience"
  ],
  openGraph: {
    title: "SUKFATE O - Gastric Protection | Nurture Lifescience",
    description: "Sucralfate with Oxetacane for superior gastric protection",
    images: ["/WhatsApp%20Image%202025-08-11%20at%2008.34.39.jpeg"],
  },
  alternates: {
    canonical: "/products/sukfate-o",
  },
};

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SUKFATE O",
  "description": "Sucralfate with Oxetacane for superior gastric protection",
  "image": "https://www.nurturelifescience.com/WhatsApp%20Image%202025-08-11%20at%2008.34.39.jpeg",
  "category": "Gastrointestinal Product",
  "sku": "sukfate-o",
  "gtin": "NL-SUKFATE-O",
  "brand": {
    "@type": "Brand",
    "name": "Nurture Lifescience"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Nurture Lifescience",
    "url": "https://www.nurturelifescience.com"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "category": "Gastrointestinal Product",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0",
      "priceCurrency": "INR",
      "priceValidUntil": "2025-12-31"
    },
    "seller": {
      "@type": "Organization",
      "name": "Nurture Lifescience"
    }
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Composition",
      "value": "Sucralfate with Oxetacane"
    },
    {
      "@type": "PropertyValue", 
      "name": "Packaging",
      "value": "10x10 Blister Pack"
    },
    {
      "@type": "PropertyValue",
      "name": "Dosage Form",
      "value": "Tablets"
    }
  ]
};

export default function SukfateOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />

      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Nurture Lifescience"
                width={200}
                height={80}
                className="h-12 w-auto"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-emerald-600">Home</Link>
              <Link href="/products" className="text-emerald-600 font-medium">Products</Link>
              <Link href="/#about-us" className="text-gray-600 hover:text-emerald-600">About</Link>
              <Link href="/#contact-us" className="text-gray-600 hover:text-emerald-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-emerald-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-emerald-600">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-emerald-600 font-medium">SUKFATE O</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative h-96 bg-gray-100 rounded-lg">
                <Image
                  src="/WhatsApp%20Image%202025-08-11%20at%2008.34.39.jpeg"
                  alt="SUKFATE O"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                    Gastrointestinal
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  SUKFATE O
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Superior gastric protection with Sucralfate and Oxetacane combination. 
                  Effective for ulcer treatment and gastric healing with enhanced therapeutic benefits.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Superior gastric protection",
                    "Enhanced healing properties",
                    "Effective ulcer treatment",
                    "Well-tolerated formulation",
                    "Dual action mechanism",
                    "WHO-GMP certified quality"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Composition:</span>
                    <span className="text-gray-600">Sucralfate with Oxetacane</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Dosage Form:</span>
                    <span className="text-gray-600">Tablets</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Packaging:</span>
                    <span className="text-gray-600">10x10 Blister Pack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Dosage:</span>
                    <span className="text-gray-600">As directed by physician</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-emerald-600" />
                    <span className="text-gray-700 font-medium">WHO-GMP Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-emerald-600" />
                    <span className="text-gray-700 font-medium">FDA Compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-emerald-600" />
                    <span className="text-gray-700 font-medium">FSSAI Approved</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/#contact-us"
                  className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-emerald-700 transition-colors"
                >
                  Contact for Information
                </Link>
                <Link
                  href="/products"
                  className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
