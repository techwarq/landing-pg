import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Products - Pharmaceutical Solutions",
  description: "Discover our comprehensive range of pharmaceutical products including AXIDENT, Eco AD Oil, MUSGO GEL, SUKFATE O, PANJOL DSR, and more. WHO-GMP certified, FDA compliant formulations.",
  keywords: [
    "pharmaceutical products",
    "AXIDENT capsules",
    "Eco AD Oil",
    "MUSGO GEL",
    "SUKFATE O",
    "PANJOL DSR",
    "WHO-GMP certified",
    "FDA compliant",
    "pharmaceutical solutions",
    "healthcare products"
  ],
  openGraph: {
    title: "Products - Nurture Lifescience",
    description: "Comprehensive range of pharmaceutical solutions for healthcare professionals and patients",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/products",
  },
};

const products = [
  {
    id: "axident-capsules",
    name: "AXIDENT Soft Gelatin Capsules",
    description: "Advanced antioxidant & multivitamin formulation for comprehensive health support",
    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(4).jpeg",
    category: "Antioxidant & Multivitamin",
    benefits: [
      "Comprehensive antioxidant support",
      "Essential multivitamins",
      "Soft gelatin capsules for easy consumption",
      "WHO-GMP certified manufacturing"
    ],
    composition: "Lycopene, Multivitamins, Multiminerals & Antioxidants",
    dosage: "As directed by physician",
    packaging: "10x10 Blister Pack"
  },
  {
    id: "axident-drops",
    name: "AXIDENT Drops",
    description: "Lycopene, Multivitamin, Multimineral & Antioxidant Drops for pediatric care",
    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.37.jpeg",
    category: "Pediatric Care",
    benefits: [
      "Specially formulated for children",
      "Easy-to-administer drops",
      "Complete nutritional support",
      "Pediatric-friendly formulation"
    ],
    composition: "Lycopene, Multivitamins, Multiminerals & Antioxidants",
    dosage: "As directed by physician",
    packaging: "15ml Bottle"
  },
  {
    id: "eco-ad-oil",
    name: "Eco AD Oil",
    description: "Natural baby massage oil enriched with vitamins for gentle care",
    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38.jpeg",
    category: "Baby Care",
    benefits: [
      "Natural and gentle formula",
      "Enriched with essential vitamins",
      "Ideal for baby massage",
      "Dermatologically tested"
    ],
    composition: "Natural oils with Vitamin A & D",
    dosage: "For external use only",
    packaging: "100ml Bottle"
  },
  {
    id: "musgo-gel",
    name: "MUSGO GEL and Oil",
    description: "Diclofenac range for effective anti-inflammatory and analgesic relief",
    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.40.jpeg",
    category: "Pain Management",
    benefits: [
      "Effective anti-inflammatory action",
      "Fast-acting analgesic relief",
      "Topical application",
      "Reduces pain and swelling"
    ],
    composition: "Diclofenac Sodium",
    dosage: "Apply topically as directed",
    packaging: "30g Tube / 30ml Bottle"
  },
  {
    id: "sukfate-o",
    name: "SUKFATE O",
    description: "Sucralfate with Oxetacane for superior gastric protection",
    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.39.jpeg",
    category: "Gastrointestinal",
    benefits: [
      "Superior gastric protection",
      "Enhanced healing properties",
      "Effective ulcer treatment",
      "Well-tolerated formulation"
    ],
    composition: "Sucralfate with Oxetacane",
    dosage: "As directed by physician",
    packaging: "10x10 Blister Pack"
  },
  {
    id: "panjol-dsr",
    name: "PANJOL DSR",
    description: "Pantoprazole with Domperidone for comprehensive digestive care",
    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(3).jpeg",
    category: "Digestive Health",
    benefits: [
      "Dual action formulation",
      "Acid reduction therapy",
      "Improved gastric motility",
      "Comprehensive digestive care"
    ],
    composition: "Pantoprazole + Domperidone",
    dosage: "As directed by physician",
    packaging: "10x10 Blister Pack"
  }
];

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Nurture Lifescience Pharmaceutical Products",
  "description": "Comprehensive range of pharmaceutical products for healthcare professionals and patients",
  "url": "https://www.nurturelifescience.com/products",
  "itemListElement": products.map((product, index) => ({
    "@type": "Product",
    "position": index + 1,
    "name": product.name,
    "description": product.description,
    "category": product.category,
    "image": `https://www.nurturelifescience.com${product.image}`,
    "url": `https://www.nurturelifescience.com/products/${product.id}`,
    "sku": product.id,
    "gtin": `NL-${product.id.toUpperCase()}`,
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
        "value": product.composition
      },
      {
        "@type": "PropertyValue",
        "name": "Packaging",
        "value": product.packaging
      },
      {
        "@type": "PropertyValue",
        "name": "Dosage",
        "value": product.dosage
      }
    ]
  }))
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.nurturelifescience.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.nurturelifescience.com/products"
    }
  ]
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Pharmaceutical Products
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Discover our comprehensive range of WHO-GMP certified, FDA compliant pharmaceutical solutions designed to meet diverse healthcare needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Composition:</span>
                      <span className="text-gray-600 ml-2">{product.composition}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Packaging:</span>
                      <span className="text-gray-600 ml-2">{product.packaging}</span>
                    </div>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality Assurance & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to quality and safety is backed by industry-leading certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WHO-GMP Certified</h3>
              <p className="text-gray-600">World Health Organization Good Manufacturing Practices certified facilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FDA Compliant</h3>
              <p className="text-gray-600">Food and Drug Administration compliant manufacturing processes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FSSAI Approved</h3>
              <p className="text-gray-600">Food Safety and Standards Authority of India approved products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact us to learn more about our products and how we can support your healthcare needs.
          </p>
          <Link
            href="/#contact-us"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
