import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Home, Building2, Briefcase, Lock, 
  Users, FileText, RefreshCw, Heart, ArrowRight
} from "lucide-react";

const representationServices = [
  {
    icon: Home,
    title: "Residential Buyer Representation",
    description: "We guide home buyers through every step—from search to close—with expertise and a personal touch.",
    link: "/residential-buyers",
  },
  {
    icon: Building2,
    title: "Commercial Tenant & Buyer Representation",
    description: "Whether you're leasing space or acquiring property, we protect your interests and negotiate on your behalf.",
    link: "/commercial",
  },
  {
    icon: Briefcase,
    title: "Business Acquisition Advisory",
    description: "We help entrepreneurs and investors identify, structure, and close business acquisitions.",
    link: "/business-acquisitions",
  },
];

const investmentServices = [
  { icon: Lock, title: "Off-Market Deal Sourcing" },
  { icon: Users, title: "Private Capital Introductions" },
  { icon: FileText, title: "LOI & MOU Drafting Support" },
  { icon: Building2, title: "Site Feasibility & Entitlement Guidance" },
  { icon: Briefcase, title: "Development Presentation Preparation" },
  { icon: RefreshCw, title: "1031 Exchange Coordination" },
  { icon: Users, title: "Partnership Structuring" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Services</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Our Services
            </h1>
            <p className="text-xl text-cream/80">
              Representation. Investment. Kingdom Impact.
            </p>
          </div>
        </div>
      </section>

      {/* Representation Services */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Representation</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              Expert Representation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {representationServices.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 card-hover border border-border group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-4">Investment & Development</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Investment & Development Support
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Beyond representation, we support investors and developers with strategic services 
                designed to maximize returns and minimize risk.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {investmentServices.map((service) => (
                <div
                  key={service.title}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <service.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm text-foreground">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Chosen Difference */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Why Chosen?</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-8">
              Purpose-Driven Partnership
            </h2>
            
            <div className="space-y-6 text-cream/80 leading-relaxed text-lg">
              <p>
                At Chosen Real Estate Advisors, we believe every deal has a purpose beyond profit.
              </p>
              <p>
                We offer prayer covering over transactions, properties, and partnerships. Our culture 
                is built on integrity, stewardship, and marketplace ministry.
              </p>
              <p className="text-gold font-medium">
                When you work with us, you're not just getting an advisor—you're getting a partner 
                who cares about your legacy.
              </p>
            </div>
            
            <div className="mt-10">
              <Button variant="hero" asChild>
                <Link to="/faith-community">
                  <Heart className="w-5 h-5" />
                  Join Our Prayer Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-cream to-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Partner with Chosen?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Whatever your real estate need, we're here to serve with excellence and integrity.
            </p>
            <Button variant="navy" size="xl" asChild>
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
