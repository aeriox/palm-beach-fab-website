import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  ChefHat,
  Sofa,
  Bath,
  Tv,
  Layers,
  Grid3X3,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";

const services = [
  {
    icon: ChefHat,
    title: "Custom Kitchens",
    description: "Bespoke cabinetry designed to be the heart of your home, with premium materials and flawless finishes.",
  },
  {
    icon: Sofa,
    title: "Built-Ins",
    description: "Custom built-in solutions that maximize space and add architectural character to any room.",
  },
  {
    icon: Bath,
    title: "Vanities",
    description: "Elegant bathroom vanities crafted to complement your space with form and function.",
  },
  {
    icon: Tv,
    title: "Entertainment Walls",
    description: "Media centers and entertainment walls that seamlessly integrate technology with design.",
  },
  {
    icon: Layers,
    title: "Floating Shelves",
    description: "Clean, modern floating shelves with invisible mounting for a seamless aesthetic.",
  },
  {
    icon: Grid3X3,
    title: "Decorative Paneling",
    description: "Accent walls and decorative paneling that add texture and sophistication.",
  },
  {
    icon: Sparkles,
    title: "Trim & Finish Carpentry",
    description: "Crown molding, wainscoting, and architectural details that elevate every space.",
  },
];

const clientBenefits = [
  "Fully engineered drawings for every project",
  "Concierge-level communication throughout",
  "Premium craftsmanship and boutique-level finishing",
  "Seamless integration with Xact Construction & RENCO builds",
  "Personalized design consultation",
  "White-glove installation service",
];

const Residential = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroResidential})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up">
              Residential Division
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Luxury Residential Millwork
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 animate-fade-up animation-delay-200">
              Coastal-modern, high-end cabinetry and architectural details for 
              elite homes in Jupiter, Palm Beach, Wellington, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Consultation
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

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Residential Specializations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From custom kitchens to architectural details, we craft every element 
              with museum-quality precision and boutique-level attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Clients Get */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                The Residential Client Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Working with Palm Beach Fabricators means more than beautiful millwork. 
                It means a partnership focused on bringing your vision to life with 
                precision and care.
              </p>
              <ul className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 lg:p-12 rounded-lg shadow-medium">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Start Your Residential Project
              </h3>
              <p className="text-muted-foreground mb-8">
                Let's discuss your vision. Share some details about your project 
                and we'll schedule a consultation to explore possibilities.
              </p>
              <Button variant="accent" size="lg" className="w-full" asChild>
                <Link to="/contact?type=residential">
                  Request Residential Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8">
            Serving Palm Beach County's Finest Homes
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Jupiter", "Palm Beach", "Wellington", "West Palm Beach", "Boca Raton", "Jupiter Island"].map((area) => (
              <span
                key={area}
                className="px-6 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Part of the Xact Construction and RENCO family, we seamlessly 
            integrate with your construction team or work directly with homeowners.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Residential;
