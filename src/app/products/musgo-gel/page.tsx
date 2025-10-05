import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "MUSGO GEL and Oil - Diclofenac Pain Relief | Nurture Lifescience",
  description: "MUSGO GEL and Oil provide effective anti-inflammatory and analgesic relief with Diclofenac. Topical application for pain management and swelling reduction.",
  keywords: [
    "MUSGO GEL",
    "MUSGO Oil",
    "Diclofenac gel",
    "pain relief gel",
    "anti-inflammatory gel",
    "topical analgesic",
    "pain management",
    "swelling reduction",
    "Nurture Lifescience"
  ],
  openGraph: {
    title: "MUSGO GEL and Oil - Pain Relief | Nurture Lifescience",
    description: "Diclofenac range for effective anti-inflammatory and analgesic relief",
    images: ["/WhatsApp%20Image%202025-08-11%20at%2008.34.40.jpeg"],
  },
  alternates: {
    canonical: "/products/musgo-gel",
  },
};

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MUSGO GEL and Oil",
  "description": "Diclofenac range for effective anti-inflammatory and analgesic relief",
  "image": "https://www.nurturelifescience.com/WhatsApp%20Image%202025-08-11%20at%2008.34.40.jpeg",
  "category": "Pain Management Product",
  "sku": "musgo-gel",
  "gtin": "NL-MUSGO-GEL",
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
    "category": "Pain Management Product",
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
      "value": "Diclofenac Sodium"
    },
    {
      "@type": "PropertyValue", 
      "name": "Packaging",
      "value": "30g Tube / 30ml Bottle"
    },
    {
      "@type": "PropertyValue",
      "name": "Application",
      "value": "Topical application"
    }
  ]
};

export default function MusgoGelPage() {
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
            <span className="text-emerald-600 font-medium">MUSGO GEL and Oil</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative h-96 bg-gray-100 rounded-lg">
                <Image
                  src="/WhatsApp%20Image%202025-08-11%20at%2008.34.40.jpeg"
                  alt="MUSGO GEL and Oil"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Pain Management
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  MUSGO GEL and Oil
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Effective Diclofenac range for anti-inflammatory and analgesic relief. 
                  Available in both gel and oil formulations for topical application to reduce pain and swelling.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Effective anti-inflammatory action",
                    "Fast-acting analgesic relief",
                    "Topical application",
                    "Reduces pain and swelling",
                    "Easy to apply",
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
                    <span className="text-gray-600">Diclofenac Sodium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Dosage Form:</span>
                    <span className="text-gray-600">Topical Gel & Oil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Packaging:</span>
                    <span className="text-gray-600">30g Tube / 30ml Bottle</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Application:</span>
                    <span className="text-gray-600">Apply topically as directed</span>
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
