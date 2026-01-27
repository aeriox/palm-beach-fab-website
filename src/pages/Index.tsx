import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  Home,
  Building2,
  CheckCircle2,
  Ruler,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroCraftsmanship from "@/assets/hero-craftsmanship.jpg"; // Used in Process section

const residentialServices = [
  "Custom Kitchens",
  "Built-Ins",
  "Vanities",
  "Entertainment Walls",
  "Floating Shelves",
  "Decorative Paneling",
];

const commercialSectors = [
  "Hospitality",
  "Medical",
  "Corporate",
  "Retail",
  "Multifamily",
];

const differentiators = [
  {
    icon: Ruler,
    title: "Engineering-First",
    description: "Fully engineered drawings that pass architectural review the first time.",
  },
  {
    icon: Clock,
    title: "Predictable Timelines",
    description: "Production discipline that consistently hits deadlines.",
  },
  {
    icon: Shield,
    title: "End-to-End Control",
    description: "In-house production and installation for quality assurance.",
  },
  {
    icon: Users,
    title: "Dual Expertise",
    description: "Rare hybrid capabilities serving both residential and commercial.",
  },
];

const locationsList = "Jupiter • Palm Beach • Wellington • West Palm Beach • Boca Raton • Delray Beach • ";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Cinematic Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Deep Navy Blue Overlay - 45% opacity */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(12, 28, 46, 0.45)' }}
          />
          {/* Subtle gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1C2E]/30 via-transparent to-[#0C1C2E]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Sub-headline - Sans-Serif, Gold/Metallic */}
            <p className="font-body font-medium tracking-luxury uppercase text-sm mb-8 animate-fade-up text-gradient-champagne text-glow">
              Serving the Palm Beaches
            </p>
            
            {/* Main Headline - Serif, White */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-[1.1] mb-12 animate-fade-up animation-delay-100 drop-shadow-2xl">
              Precision Millwork
              <br />
              <span className="italic">&</span> Custom Fabrication
            </h1>

            {/* Dual Path CTAs - Glassmorphism */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/residential" className="flex items-center gap-3">
                  <Home className="h-5 w-5" />
                  Residential Millwork
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/commercial" className="flex items-center gap-3">
                  <Building2 className="h-5 w-5" />
                  Commercial Millwork
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="mt-20 animate-fade-up animation-delay-400">
              <div className="flex items-center justify-center gap-4">
                <span className="text-xs uppercase tracking-luxury text-white/40 font-medium">
                  A division of
                </span>
                <div className="px-6 py-3 glass rounded-full border border-white/10">
                  <span className="font-semibold text-white tracking-wide">Xact Construction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Marquee Ticker */}
        <div className="absolute bottom-0 left-0 right-0 py-4 bg-gradient-to-t from-[#0C1C2E] to-transparent">
          <div className="overflow-hidden">
            <div className="flex whitespace-nowrap marquee">
              <span className="text-white/30 text-sm tracking-widest font-light">
                {locationsList}{locationsList}{locationsList}{locationsList}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Services Section */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Two Divisions. <span className="italic text-gradient-champagne">One Standard.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're building a Palm Beach estate or a commercial space 
              with tight deadlines, we deliver premium-quality millwork.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Residential Card */}
            <div className="group relative overflow-hidden rounded-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${heroResidential})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-transparent" />
              <div className="relative z-10 p-10 lg:p-14 min-h-[550px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-5">
                  <Home className="h-5 w-5 text-champagne" />
                  <span className="text-champagne text-xs font-medium tracking-luxury uppercase">
                    Residential Division
                  </span>
                </div>
                <h3 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-5">
                  Luxury Residential <span className="italic">Millwork</span>
                </h3>
                <p className="text-white/70 mb-8 max-w-md font-light leading-relaxed">
                  Coastal-modern, high-end cabinetry and architectural details 
                  for elite homes in Palm Beach County.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {residentialServices.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-1.5 text-xs glass text-white/90 rounded-full border border-white/10"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <Button variant="hero" asChild className="self-start">
                  <Link to="/residential">
                    Explore Residential
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="group relative overflow-hidden rounded-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${heroCommercial})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-transparent" />
              <div className="relative z-10 p-10 lg:p-14 min-h-[550px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="h-5 w-5 text-champagne" />
                  <span className="text-champagne text-xs font-medium tracking-luxury uppercase">
                    Commercial Division
                  </span>
                </div>
                <h3 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-5">
                  Commercial <span className="italic">Millwork</span>
                </h3>
                <p className="text-white/70 mb-8 max-w-md font-light leading-relaxed">
                  High-capacity production engineered for speed, durability, 
                  and architectural precision.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {commercialSectors.map((sector) => (
                    <span
                      key={sector}
                      className="px-4 py-1.5 text-xs glass text-white/90 rounded-full border border-white/10"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
                <Button variant="hero" asChild className="self-start">
                  <Link to="/commercial">
                    Explore Commercial
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Why Palm Beach <span className="italic text-gradient-champagne">Fabricators?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              We're not a typical woodshop. We're an engineering-first millwork house 
              with the rare ability to serve both luxury residential and demanding commercial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="group bg-card p-10 rounded-xl shadow-soft hover:shadow-champagne transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-champagne/20 to-champagne/5 rounded-xl flex items-center justify-center mb-8 group-hover:shadow-champagne transition-shadow duration-500">
                  <item.icon className="h-7 w-7 text-champagne" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-28 lg:py-36 bg-midnight text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-5xl font-medium leading-relaxed mb-12">
              "Palm Beach Fabricators is a luxury and commercial millwork company 
              built on <span className="italic text-gradient-champagne">precision</span>, 
              <span className="italic text-gradient-champagne"> engineering</span>, and 
              <span className="italic text-gradient-champagne"> craftsmanship</span>."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-8">
                Engineering-First <span className="italic text-gradient-champagne">Workflow</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
                Every project begins with detailed engineering. Our process ensures 
                precision from concept to installation, minimizing change orders 
                and delivering results that exceed expectations.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Comprehensive consultation and scope definition",
                  "Fully engineered shop drawings",
                  "Precision production with quality checkpoints",
                  "Professional installation and final walkthrough",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-5 w-5 text-champagne mt-0.5 shrink-0" />
                    <span className="text-foreground font-light">{step}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" asChild>
                <Link to="/process">
                  Learn Our Process
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-xl bg-cover bg-center shadow-medium overflow-hidden"
                style={{ backgroundImage: `url(${heroCraftsmanship})` }}
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-champagne to-champagne-light text-midnight p-8 rounded-xl shadow-champagne-intense">
                <p className="font-heading text-4xl font-bold">20+</p>
                <p className="text-sm font-medium">Years Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-medium p-10 lg:p-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Ready to Discuss Your <span className="italic text-gradient-champagne">Project?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
                Whether you're planning a luxury residential renovation or a 
                commercial build-out, we'd love to learn about your project 
                and show you what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;