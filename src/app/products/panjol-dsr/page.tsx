import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "PANJOL DSR - Pantoprazole with Domperidone | Nurture Lifescience",
  description: "PANJOL DSR provides comprehensive digestive care with Pantoprazole and Domperidone. Dual action formulation for acid reduction and improved gastric motility.",
  keywords: [
    "PANJOL DSR",
    "Pantoprazole",
    "Domperidone",
    "digestive care",
    "acid reduction",
    "gastric motility",
    "dual action formulation",
    "gastrointestinal medicine",
    "Nurture Lifescience"
  ],
  openGraph: {
    title: "PANJOL DSR - Digestive Care | Nurture Lifescience",
    description: "Pantoprazole with Domperidone for comprehensive digestive care",
    images: ["/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(3).jpeg"],
  },
  alternates: {
    canonical: "/products/panjol-dsr",
  },
};

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "PANJOL DSR",
  "description": "Pantoprazole with Domperidone for comprehensive digestive care",
  "image": "https://www.nurturelifescience.com/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(3).jpeg",
  "category": "Digestive Health Product",
  "sku": "panjol-dsr",
  "gtin": "NL-PANJOL-DSR",
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
    "category": "Digestive Health Product",
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
      "value": "Pantoprazole + Domperidone"
    },
    {
      "@type": "PropertyValue", 
      "name": "Packaging",
      "value": "10x10 Blister Pack"
    },
    {
      "@type": "PropertyValue",
      "name": "Dosage Form",
      "value": "Sustained Release Tablets"
    }
  ]
};

export default function PanjolDsrPage() {
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
            <span className="text-emerald-600 font-medium">PANJOL DSR</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative h-96 bg-gray-100 rounded-lg">
                <Image
                  src="/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(3).jpeg"
                  alt="PANJOL DSR"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                    Digestive Health
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  PANJOL DSR
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive digestive care with Pantoprazole and Domperidone combination. 
                  Dual action formulation providing acid reduction therapy and improved gastric motility for complete digestive health.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Dual action formulation",
                    "Acid reduction therapy",
                    "Improved gastric motility",
                    "Comprehensive digestive care",
                    "Sustained release technology",
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
                    <span className="text-gray-600">Pantoprazole + Domperidone</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Dosage Form:</span>
                    <span className="text-gray-600">Sustained Release Tablets</span>
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
