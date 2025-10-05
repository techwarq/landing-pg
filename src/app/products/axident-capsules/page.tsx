import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AXIDENT Soft Gelatin Capsules - Antioxidant & Multivitamin | Nurture Lifescience",
  description: "AXIDENT Soft Gelatin Capsules provide comprehensive antioxidant and multivitamin support. WHO-GMP certified, FDA compliant formulation with Lycopene, Multivitamins, and Multiminerals for optimal health.",
  keywords: [
    "AXIDENT capsules",
    "antioxidant capsules",
    "multivitamin capsules",
    "lycopene capsules",
    "soft gelatin capsules",
    "WHO-GMP certified",
    "FDA compliant",
    "pharmaceutical products",
    "health supplements",
    "Nurture Lifescience"
  ],
  openGraph: {
    title: "AXIDENT Soft Gelatin Capsules - Nurture Lifescience",
    description: "Advanced antioxidant & multivitamin formulation for comprehensive health support",
    images: ["/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(4).jpeg"],
  },
  alternates: {
    canonical: "/products/axident-capsules",
  },
};

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AXIDENT Soft Gelatin Capsules",
  "description": "Advanced antioxidant & multivitamin formulation for comprehensive health support",
  "image": "https://www.nurturelifescience.com/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(4).jpeg",
  "category": "Pharmaceutical Product",
  "sku": "axident-capsules",
  "gtin": "NL-AXIDENT-CAPSULES",
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
    "category": "Pharmaceutical Product",
    "description": "WHO-GMP certified, FDA compliant antioxidant and multivitamin capsules",
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
      "value": "Lycopene, Multivitamins, Multiminerals & Antioxidants"
    },
    {
      "@type": "PropertyValue", 
      "name": "Packaging",
      "value": "10x10 Blister Pack"
    },
    {
      "@type": "PropertyValue",
      "name": "Dosage Form",
      "value": "Soft Gelatin Capsules"
    }
  ]
};

export default function AxidentCapsulesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />

      {/* Header */}
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-emerald-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-emerald-600">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-emerald-600 font-medium">AXIDENT Capsules</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative h-96 bg-gray-100 rounded-lg">
                <Image
                  src="/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(4).jpeg"
                  alt="AXIDENT Soft Gelatin Capsules"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                    Antioxidant & Multivitamin
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  AXIDENT Soft Gelatin Capsules
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced antioxidant & multivitamin formulation for comprehensive health support. 
                  WHO-GMP certified, FDA compliant soft gelatin capsules designed for optimal absorption and efficacy.
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Comprehensive antioxidant support",
                    "Essential multivitamins & minerals",
                    "Soft gelatin for easy consumption",
                    "WHO-GMP certified manufacturing",
                    "Enhanced bioavailability",
                    "Complete nutritional support"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Composition:</span>
                    <span className="text-gray-600">Lycopene, Multivitamins, Multiminerals & Antioxidants</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Dosage Form:</span>
                    <span className="text-gray-600">Soft Gelatin Capsules</span>
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

              {/* Certifications */}
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

              {/* CTA */}
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

      {/* Related Products */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "AXIDENT Drops",
                description: "Pediatric formulation for children",
                image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.37.jpeg",
                link: "/products/axident-drops"
              },
              {
                name: "Eco AD Oil",
                description: "Natural baby massage oil",
                image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38.jpeg",
                link: "/products/eco-ad-oil"
              },
              {
                name: "PANJOL DSR",
                description: "Digestive health solution",
                image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(3).jpeg",
                link: "/products/panjol-dsr"
              }
            ].map((product, index) => (
              <Link key={index} href={product.link} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
