import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Briefcase, Users, DollarSign, FileSignature, 
  Search, Shield, ArrowRight, CheckCircle, Lock
} from "lucide-react";
import businessImage from "@/assets/business-acquisitions.jpg";

const services = [
  {
    icon: Search,
    title: "Acquisition Advisory",
    description: "We guide buyers through the entire acquisition process—from target identification to due diligence to closing.",
  },
  {
    icon: Users,
    title: "Partnership & Equity Structuring",
    description: "Not every deal is a solo play. We help structure partnerships, joint ventures, and equity arrangements.",
  },
  {
    icon: DollarSign,
    title: "Access to Capital",
    description: "Our network includes SBA lenders, private lenders, and investors. We make introductions that get deals funded.",
  },
  {
    icon: FileSignature,
    title: "Creative Deal Architecture",
    description: "Seller financing, earnouts, equity rollovers—we help structure deals that work for both parties.",
  },
  {
    icon: Shield,
    title: "Due Diligence Coordination",
    description: "We coordinate with attorneys, CPAs, and industry experts to ensure thorough due diligence.",
  },
  {
    icon: Lock,
    title: "Confidential Introductions",
    description: "Many business sales are private. We facilitate NDA-protected introductions between qualified buyers and sellers.",
  },
];

const industries = [
  "Service Businesses",
  "Retail & Restaurant",
  "Healthcare & Medical",
  "E-Commerce",
  "Franchise Opportunities",
  "Manufacturing",
];

const investmentRanges = [
  "Under $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K - $1M",
  "$1M - $5M",
  "$5M+",
];

const BusinessAcquisitions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${businessImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container-custom pt-32 pb-20">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4 animate-fade-in">
              Business Acquisitions
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 slide-up">
              Business Acquisitions & Advisory
            </h1>
            <p className="text-xl text-cream/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Strategic acquisitions, creative structuring, and access to private deal flow.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" asChild>
                <Link to="/contact">Submit Acquisition Profile</Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/off-market-access">
                  <Lock className="w-4 h-4" />
                  View Opportunities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
              Build Legacy Through Ownership
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chosen Real Estate Advisors helps entrepreneurs and investors acquire businesses, 
              structure partnerships, and access capital. We believe business ownership is a powerful 
              vehicle for legacy and impact—and we're here to help you navigate the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Acquisition Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-8 card-hover border border-border group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Investment */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Industries */}
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-4">Industries</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-6">
                Sectors We Cover
              </h3>
              <div className="space-y-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-3 p-3 rounded-lg bg-cream/5">
                    <Briefcase className="w-5 h-5 text-gold" />
                    <span className="text-cream">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Investment Ranges */}
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-4">Investment Size</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-6">
                Deal Ranges
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {investmentRanges.map((range) => (
                  <div key={range} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-cream/90">{range}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20">
                <p className="text-cream/90 text-sm leading-relaxed">
                  <strong className="text-gold">Need Financing?</strong> Our network includes SBA lenders, 
                  private capital sources, and investors actively seeking partnership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              How We Work Together
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your goals, experience, and investment criteria." },
              { step: "02", title: "Sourcing", description: "We identify opportunities from our network and active outreach." },
              { step: "03", title: "Analysis", description: "We help evaluate deals, structure terms, and coordinate due diligence." },
              { step: "04", title: "Closing", description: "We guide you through negotiation and closing with integrity." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-navy text-cream font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl font-bold text-navy mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Explore Ownership?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Tell us what you're looking for. We'll match you with opportunities and guide you 
              through the acquisition process with expertise and integrity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="navy" size="xl" asChild>
                <Link to="/contact">
                  Submit Your Profile
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="gold-outline" size="lg" asChild>
                <Link to="/off-market-access">
                  Request Deal Access
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessAcquisitions;
