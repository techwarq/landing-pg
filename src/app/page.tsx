"use client";

import type React from "react";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Check, Menu, X, ArrowRight, Sparkles, Heart, Award, Users, Globe, Shield, Zap, Target } from "lucide-react";

// Enhanced animations and styles
const styles = `
  @keyframes gradient-x {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  @keyframes gradient-y {
    0%, 100% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in-left {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fade-in-right {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
  }
  
  .animate-gradient-y {
    animation: gradient-y 4s ease infinite;
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  
  .animate-fade-in-left {
    animation: fade-in-left 1s ease-out;
  }
  
  .animate-fade-in-right {
    animation: fade-in-right 1s ease-out;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 2s linear infinite;
  }
  
  .glass-effect {
    backdrop-filter: blur(16px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .card-hover:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  .parallax-bg {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// Custom Card Components (typed)
type DivProps = React.HTMLAttributes<HTMLDivElement> & { className?: string; children?: React.ReactNode };

const Card: React.FC<DivProps> = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-lg border border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<DivProps> = ({ children, className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader: React.FC<DivProps> = ({ children, className = "", ...props }) => (
  <div className={`p-6 pb-0 ${className}`} {...props}>
    {children}
  </div>
);

type H3Props = React.HTMLAttributes<HTMLHeadingElement> & { className?: string; children?: React.ReactNode };
const CardTitle: React.FC<H3Props> = ({ children, className = "", ...props }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

type PProps = React.HTMLAttributes<HTMLParagraphElement> & { className?: string; children?: React.ReactNode };
const CardDescription: React.FC<PProps> = ({ children, className = "", ...props }) => (
  <p className={`text-gray-600 ${className}`} {...props}>
    {children}
  </p>
);

type ButtonVariant = "default" | "ghost" | "outline";
type ButtonSize = "default" | "icon" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", variant = "default", size = "default", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants: Record<ButtonVariant, string> = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-900",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900"
  };
  
  const sizes: Record<ButtonSize, string> = {
    default: "px-4 py-2 rounded-md",
    icon: "p-2 rounded-md",
    lg: "px-6 py-3 rounded-lg text-lg"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Home() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Structured data for products
  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nurture Lifescience Pharmaceutical Products",
    "description": "High-quality pharmaceutical products for healthcare professionals and patients",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "AXIDENT Soft Gelatin Capsules & Drops",
        "description": "Advanced antioxidant & multivitamin formulation for comprehensive health support",
        "category": "Pharmaceutical",
        "brand": {
          "@type": "Brand",
          "name": "Nurture Lifescience"
        }
      },
      {
        "@type": "Product", 
        "name": "Eco AD Oil",
        "description": "Natural baby massage oil enriched with vitamins for gentle care",
        "category": "Pharmaceutical",
        "brand": {
          "@type": "Brand",
          "name": "Nurture Lifescience"
        }
      },
      {
        "@type": "Product",
        "name": "MUSGO GEL and Oil", 
        "description": "Diclofenac range for effective anti-inflammatory and analgesic relief",
        "category": "Pharmaceutical",
        "brand": {
          "@type": "Brand",
          "name": "Nurture Lifescience"
        }
      },
      {
        "@type": "Product",
        "name": "SUKFATE O",
        "description": "Sucralfate with Oxetacane for superior gastric protection", 
        "category": "Pharmaceutical",
        "brand": {
          "@type": "Brand",
          "name": "Nurture Lifescience"
        }
      },
      {
        "@type": "Product",
        "name": "PANJOL DSR",
        "description": "Pantoprazole with Domperidone for comprehensive digestive care",
        "category": "Pharmaceutical", 
        "brand": {
          "@type": "Brand",
          "name": "Nurture Lifescience"
        }
      },
      {
        "@type": "Product",
        "name": "AXIDENT Drops",
        "description": "Lycopene, Multivitamin, Multimineral & Antioxidant Drops for pediatric care",
        "category": "Pharmaceutical",
        "brand": {
          "@type": "Brand", 
          "name": "Nurture Lifescience"
        }
      }
    ]
  };

  const navItems = [
    { label: 'About Us', id: 'about-us' },
    { label: 'Vision & Mission', id: 'vision-mission' },
    { label: 'Team', id: 'team' },
    { label: 'Products', href: '/products' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Contact Us', id: 'contact-us' },
  ];

  // Stable seeded random generator to avoid hydration mismatches
  const createSeededRandom = (seed: number) => {
    let s = seed >>> 0;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  };

  const particles = useMemo(() => {
    const rand = createSeededRandom(424242);
    return Array.from({ length: 8 }).map((_, i) => {
      const left = `${(rand() * 100).toFixed(2)}%`;
      const top = `${(rand() * 100).toFixed(2)}%`;
      const animationDelay = `${(1 + rand() * 2).toFixed(2)}s`;
      const animationDuration = `${(3 + rand() * 2).toFixed(2)}s`;
      return { i, left, top, animationDelay, animationDuration };
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
    // Handle scroll if needed
  };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 antialiased overflow-x-hidden">
      {/* Structured Data for Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsStructuredData),
        }}
      />
      {/* Enhanced Header */}
      <header className="px-4 lg:px-8 h-20 bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-emerald-100">
        <div className="w-full max-w-7xl mx-auto h-full flex items-center gap-6">
          <Link href="/" className="flex items-center justify-center group">
            <Image
              src="/logo.png"
              alt="Nurture Lifescience - Trusted Healthcare Partner"
              width={250}
              height={206}
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              priority={true}
              sizes="(max-width: 768px) 200px, 250px"
            />
          </Link>
          <nav className="ml-auto hidden lg:flex gap-8">
            {navItems.map((item) => (
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-base font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative text-base font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            ))}
          </nav>
          <Button
            className="ml-auto lg:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </Button>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      {isMobileNavOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <aside className="fixed top-0 right-0 z-50 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl border-l border-emerald-100 transition-transform duration-300 lg:hidden">
            <div className="px-6 py-6 border-b border-emerald-100 flex items-center justify-between">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileNavOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </Button>
            </div>
            <nav className="px-6 py-8">
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  item.href ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg text-gray-800 hover:text-emerald-600 transition-colors duration-300 py-2 border-b border-gray-100 hover:border-emerald-200"
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="text-lg text-gray-800 hover:text-emerald-600 transition-colors duration-300 py-2 border-b border-gray-100 hover:border-emerald-200"
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </nav>
          </aside>
        </>
      )}

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900">
            {/* Animated gradient meshes */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-teal-300/20 to-emerald-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>
            
            {/* Floating particles (stable positions for SSR/CSR) */}
            <div className="absolute inset-0">
              {particles.map((p) => (
                <div
                  key={p.i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{ left: p.left, top: p.top, animationDelay: p.animationDelay, animationDuration: p.animationDuration }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 px-4 md:px-6 w-full max-w-7xl mx-auto text-center">
            <div className="space-y-12">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-3 px-8 py-4 mt-4 glass-effect rounded-full text-emerald-100 font-medium text-sm md:text-base shadow-2xl animate-fade-in border border-white/20">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>Trusted Healthcare Partner Since 2024</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Headlines */}
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.85]">
                  <span className="block bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] drop-shadow-2xl">
                    Nurturing Health
                  </span>
                  <span className="block text-white/95 mt-4 drop-shadow-2xl">
                    With The Power Of
                  </span>
                  <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] drop-shadow-2xl">
                    Science
                  </span>
                </h1>
              </div>
              
              {/* Enhanced Subtitle */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl lg:text-3xl text-emerald-50/90 font-light leading-relaxed drop-shadow-lg">
                  Innovative, ethical, and patient-centric pharmaceutical solutions that transform lives across India and beyond.
                </p>
                
                {/* Key Stats */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-emerald-100/80">
                  {[
                    { icon: Shield, text: "WHO-GMP Certified" },
                    { icon: Award, text: "FDA Compliant" }, 
                    { icon: Check, text: "FSSAI Approved" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm md:text-base font-medium glass-effect px-4 py-2 rounded-full">
                      <item.icon className="w-4 h-4 text-emerald-400" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Link
                  href="/products"
                  className="group relative inline-flex items-center justify-center text-emerald-900 bg-white/95 hover:bg-white transition-all duration-500 cursor-pointer text-lg font-semibold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-white/25 hover:scale-105 min-w-[240px] overflow-hidden border-2 border-white/20 animate-pulse-glow"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Discover Our Solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>

                <a
                  href="#contact-us"
                  className="group relative inline-flex items-center justify-center bg-transparent text-white border-2 border-white/40 hover:border-white hover:bg-white/10 glass-effect transition-all duration-500 cursor-pointer text-lg font-medium px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 min-w-[200px]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get In Touch
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </a>
              </div>
              
              {/* Scroll Indicator */}
              <div className="pt-16 animate-bounce">
                <div className="mx-auto w-6 h-10 border-2 border-white/30 rounded-full flex justify-center glass-effect">
                  <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
                <p className="text-white/60 text-sm mt-3 font-light">Scroll to explore</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced About Us */}
        <section id="about-us" className="w-full py-24 md:py-32 lg:py-40 bg-white relative scroll-mt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white"></div>
          <div className="px-4 md:px-6 relative z-10">
            <div className="w-full max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6">
                  About Us
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                <div className="space-y-8 animate-fade-in-left">
                  <div className="space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      Nurture Lifescience is a fast-growing pharmaceutical marketing company committed to improving lives
                      with high-quality, affordable, and scientifically backed healthcare products.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      Founded with a mission to nurture health naturally, we partner with WHO-GMP, FSSAI, and FDA-certified
                      manufacturers to deliver trustworthy formulations across general and specialty segments.
                    </p>
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      With a focus on ethics, efficacy, and empathy, we are building a strong presence in India and beyond,
                      delivering value to doctors, patients, and partners.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-8">
                    {[
                      { icon: Heart, label: "Patient-Centric", value: "100%" },
                      { icon: Globe, label: "Pan-India", value: "Reach" },
                      { icon: Award, label: "Quality", value: "Assured" },
                      { icon: Users, label: "Expert", value: "Team" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                        <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-emerald-700">{stat.value}</div>
                        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="animate-fade-in-right">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-emerald-200">
                      <Image
                        src="/window.svg"
                        alt="Pharmaceutical Research and Development at Nurture Lifescience"
                        width={800}
                        height={384}
                        className="w-full h-96 object-cover"
                        priority={false}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Vision & Mission */}
        <section id="vision-mission" className="w-full py-24 md:py-32 lg:py-40 relative scroll-mt-20 parallax-bg" style={{backgroundImage: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)'}}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-teal-900/90"></div>
          <div className="px-4 md:px-6 relative z-10">
            <div className="w-full max-w-7xl mx-auto text-center">
              <div className="mb-20">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                  Our Vision & Mission
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
                <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/95 backdrop-blur-sm border-t-8 border-emerald-500 rounded-2xl card-hover group">
                  <CardHeader className="pb-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-emerald-700 mb-4">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      To be a trusted healthcare partner known for quality, innovation, and integrity across global markets.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/95 backdrop-blur-sm border-t-8 border-teal-500 rounded-2xl card-hover group">
                  <CardHeader className="pb-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-4xl font-bold text-teal-700 mb-4">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5 text-left">
                      {[
                        "Deliver safe and effective pharmaceutical solutions at affordable prices",
                        "Maintain ethical marketing practices",
                        "Continuously innovate based on medical needs", 
                        "Build lasting relationships with healthcare professionals"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-lg text-gray-700 leading-relaxed font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Team Section */}
        <section id="team" className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-emerald-50 scroll-mt-20">
          <div className="px-4 md:px-6">
            <div className="w-full max-w-7xl mx-auto text-center">
              <div className="mb-20">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6">
                  Our Team
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Meet the dedicated professionals driving our mission forward with expertise, passion, and commitment to excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  {
                    name: "Mr. Prayas",
                    title: "HR Head", 
                    subtitle: "Founder of Nurture Lifescience",
                    image: "/WhatsApp%20Image%202025-08-05%20at%2010.04.03%20(1).jpeg"
                  },
                  {
                    name: "Gita Devi",
                    title: "Founder",
                    image: "/WhatsApp%20Image%202025-08-05%20at%2011.00.16%20(1).jpeg"
                  },
                  {
                    name: "Mr. Pratush", 
                    title: "Sales Head",
                    image: "/WhatsApp%20Image%202025-08-02%20at%2022.25.17%20(2).jpeg"
                  }
                ].map((member, index) => (
                  <div key={index} className="group">
                    <Card className="overflow-hidden rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover bg-white">
                      <div className="relative">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.title} at Nurture Lifescience`}
                          width={400}
                          height={320}
                          className="w-full h-80 object-cover"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardContent className="p-8 text-center">
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-emerald-600 font-semibold text-lg mb-1">
                          {member.title}
                        </CardDescription>
                        {member.subtitle && (
                          <p className="text-gray-600 text-sm font-medium">{member.subtitle}</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Products Section */}
        <section id="products" className="w-full py-24 md:py-32 lg:py-40 bg-white relative scroll-mt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-white"></div>
          <div className="px-4 md:px-6 relative z-10">
            <div className="w-full max-w-7xl mx-auto text-center">
              <div className="mb-20">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6">
                  Our Products
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Discover our comprehensive range of pharmaceutical solutions designed to meet diverse healthcare needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                {[
                  {
                    title: "AXIDENT Soft Gelatin Capsules & Drops",
                    description: "Advanced antioxidant & multivitamin formulation for comprehensive health support",
                    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(4).jpeg",
                    gradient: "from-blue-500 to-purple-600",
                    link: "/products/axident-capsules"
                  },
                  {
                    title: "Eco AD Oil",
                    description: "Natural baby massage oil enriched with vitamins for gentle care",
                    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38.jpeg",
                    gradient: "from-pink-500 to-rose-600",
                    link: "/products/eco-ad-oil"
                  },
                  {
                    title: "MUSGO GEL and Oil",
                    description: "Diclofenac range for effective anti-inflammatory and analgesic relief",
                    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.40.jpeg",
                    gradient: "from-green-500 to-emerald-600",
                    link: "/products/musgo-gel"
                  },
                  {
                    title: "SUKFATE O",
                    description: "Sucralfate with Oxetacane for superior gastric protection",
                    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.39.jpeg",
                    gradient: "from-orange-500 to-red-600",
                    link: "/products/sukfate-o"
                  },
                  {
                    title: "PANJOL DSR",
                    description: "Pantoprazole with Domperidone for comprehensive digestive care",
                    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.38%20(3).jpeg",
                    gradient: "from-indigo-500 to-blue-600",
                    link: "/products/panjol-dsr"
                  },
                  {
                    title: "AXIDENT Drops",
                    description: "Lycopene, Multivitamin, Multimineral & Antioxidant Drops for pediatric care",
                    image: "/WhatsApp%20Image%202025-08-11%20at%2008.34.37.jpeg",
                    gradient: "from-teal-500 to-cyan-600",
                    link: "/products/axident-drops"
                  }
                ].map((product, index) => (
                  <Card key={index} className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover bg-white">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${product.gradient}`}></div>
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={product.image}
                          alt={`${product.title} - Pharmaceutical Product by Nurture Lifescience`}
                          width={400}
                          height={192}
                          className="w-full h-48 object-contain rounded-lg shadow-lg"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed font-light">
                        {product.description}
                      </CardDescription>
                      <div className="mt-6 flex justify-center">
                        <Link
                          href={product.link}
                          className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200 hover:bg-emerald-100 transition-colors"
                        >
                          Learn More
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="relative">
                <Card className="p-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-2xl border-0 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
                  <div className="relative z-10 text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">New Products Coming Soon</h3>
                    <p className="text-xl text-emerald-100 font-light">
                      Expanding our portfolio with innovative solutions for general, pediatric, and specialty care
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us */}
        <section id="why-choose-us" className="w-full py-24 md:py-32 lg:py-40 relative scroll-mt-20 parallax-bg" style={{backgroundImage: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'}}>
          <div className="px-4 md:px-6">
            <div className="w-full max-w-7xl mx-auto text-center">
              <div className="mb-20">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-6">
                  Why Choose Nurture Lifescience?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Discover what sets us apart in the pharmaceutical industry and why healthcare professionals trust us.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "WHO-GMP Certified Manufacturing",
                    description: "Highest quality standards in pharmaceutical manufacturing",
                    color: "emerald"
                  },
                  {
                    icon: Award,
                    title: "FSSAI and FDA Compliance",
                    description: "Regulatory compliance ensuring safety and efficacy",
                    color: "blue"
                  },
                  {
                    icon: Users,
                    title: "Ethical and Experienced Leadership",
                    description: "Decades of combined experience in pharmaceutical industry",
                    color: "purple"
                  },
                  {
                    icon: Target,
                    title: "Focus on Underserved Areas",
                    description: "Addressing gaps in therapeutic care with innovative solutions",
                    color: "orange"
                  },
                  {
                    icon: Globe,
                    title: "Dedicated Field Force",
                    description: "Professional medical representatives and zonal leadership",
                    color: "teal"
                  },
                  {
                    icon: Heart,
                    title: "Patient-Centric Approach",
                    description: "Every decision made with patient welfare as top priority",
                    color: "rose"
                  }
                ].map((feature, index) => (
                  <Card key={index} className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover bg-white p-8">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact-us" className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative scroll-mt-20">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          
          <div className="px-4 md:px-6 relative z-10">
            <div className="w-full max-w-7xl mx-auto text-center">
              <div className="mb-20">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                  Get in Touch
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-light">
                  Ready to partner with us? Let&apos;s discuss how we can work together to improve healthcare outcomes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "6370730352",
                    link: "tel:6370730352"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@nurturelifescience.com",
                    link: "mailto:info@nurturelifescience.com"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "Panchkula, Haryana, India",
                    link: "#"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="group relative overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 card-hover glass-effect">
                    <CardContent className="p-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <contact.icon className="w-8 h-8 text-emerald-900" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {contact.title}
                      </h3>
                      <a 
                        href={contact.link}
                        className="text-emerald-200 hover:text-white transition-colors duration-300 font-medium"
                      >
                        {contact.content}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="py-16 w-full bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-teal-900/50"></div>
        <div className="px-4 md:px-6 relative z-10">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-16 bg-white from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  <Image
              src="/logo.png"
              alt="Nurture Lifescience - Trusted Healthcare Partner"
              width={250}
              height={206}
              className="h-12 w-auto object-contain"
              loading="lazy"
              sizes="(max-width: 768px) 150px, 200px"
            />
                  </div>
                  <span className="text-2xl font-bold">Nurture Lifescience</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Committed to improving lives with high-quality, affordable, and scientifically backed healthcare products.
                </p>
                <div className="flex gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300 cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-emerald-400">Quick Links</h3>
                <div className="space-y-3">
                  {[
                    { label: 'About Us', id: 'about-us' },
                    { label: 'Products', id: 'products' },
                    { label: 'Team', id: 'team' },
                    { label: 'Contact', id: 'contact-us' },
                  ].map(({ label, id }) => (
                    <a key={id} href={`#${id}`} className="block text-gray-300 hover:text-white transition-colors duration-300">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-emerald-400">Contact Info</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>6370730352</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Panchkula, Haryana</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Nurture Lifescience. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}