import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  Hotel,
  Stethoscope,
  Building2,
  ShoppingBag,
  Home,
  CheckCircle2,
  Clock,
  FileCheck,
  Wrench,
} from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const sectors = [
  {
    icon: Hotel,
    title: "Hospitality",
    examples: "Hotel rooms, lobbies, bars, restaurants",
    description: "Durable, beautiful millwork that creates memorable guest experiences while withstanding high-traffic use.",
  },
  {
    icon: Stethoscope,
    title: "Medical Facilities",
    examples: "Reception desks, nurse stations, casework",
    description: "Precision-built casework that meets healthcare compliance standards with clean, professional aesthetics.",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    examples: "Conference rooms, reception walls, workstations",
    description: "Professional millwork that reflects your brand while creating productive, inspiring workspaces.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    examples: "Custom shelving, display fixtures, cash wraps",
    description: "Eye-catching displays and fixtures that enhance the shopping experience and showcase your products.",
  },
  {
    icon: Home,
    title: "Multifamily",
    examples: "Mailrooms, clubhouses, amenity spaces",
    description: "High-quality common area millwork that elevates residential communities and stands up to daily use.",
  },
];

const advantages = [
  {
    icon: Clock,
    title: "Fast Production Cycles",
    description: "High-capacity shop with disciplined scheduling means we hit deadlines without sacrificing quality.",
  },
  {
    icon: FileCheck,
    title: "First-Pass Approvals",
    description: "Shop drawings that match architect and GC requirements, passing architectural review the first time.",
  },
  {
    icon: Wrench,
    title: "Value Engineering",
    description: "Smart solutions that protect budgets without compromising design intent or durability.",
  },
];

const Commercial = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCommercial})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up">
              Commercial Division
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Commercial Millwork
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-up animation-delay-200">
              High-capacity production engineered for speed, durability, and 
              architectural precision. We're a millwork partner who hits deadlines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact?type=commercial">
                  Request Commercial Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/portfolio">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Commercial Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From hospitality to healthcare, we deliver millwork solutions 
              tailored to each industry's unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <sector.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {sector.title}
                </h3>
                <p className="text-accent text-sm mb-3">{sector.examples}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Why Commercial Clients Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                GCs, architects, and project managers choose Palm Beach Fabricators 
                because they need a millwork partner who actually delivers.
              </p>
              
              <div className="space-y-8">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <advantage.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 lg:p-12 rounded-lg shadow-medium">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Commercial Capabilities
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "ADA-compliant designs",
                  "Full submittal packages",
                  "Commercial-grade finishes",
                  "Installation teams trained in commercial sequencing",
                  "Coordination with GC schedules",
                  "Quick-turn prototyping",
                ].map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/contact?type=commercial">
                  Get Commercial Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Addressed */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">
              Tired of Millwork Contractors Who Can't Deliver?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { problem: "Missed Deadlines", solution: "Disciplined production scheduling" },
                { problem: "Costly Change Orders", solution: "Accuracy that minimizes surprises" },
                { problem: "Failed Submittals", solution: "First-time architectural approval" },
              ].map((item) => (
                <div key={item.problem} className="text-center">
                  <p className="text-primary-foreground/50 text-sm line-through mb-2">
                    {item.problem}
                  </p>
                  <p className="text-accent font-medium">{item.solution}</p>
                </div>
              ))}
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact?type=commercial">
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;
