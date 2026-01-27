import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Home, Search, MapPin, Heart, Users, 
  CheckCircle, ArrowRight, Building2 
} from "lucide-react";

const services = [
  "Personalized home search strategy",
  "Deep knowledge of Palm Beach & Orlando neighborhoods",
  "Strong negotiation advocacy",
  "New construction consulting",
  "Relocation support for families moving to Florida",
  "Faith-aligned culture—we pray over your home search",
];

const markets = [
  {
    region: "Palm Beach County",
    areas: ["Palm Beach", "West Palm Beach", "Jupiter", "Boca Raton", "Delray Beach", "Wellington"],
  },
  {
    region: "Orlando Metro",
    areas: ["Orlando", "Winter Park", "Lake Nona", "Dr. Phillips", "Windermere", "Kissimmee"],
  },
];

const ResidentialBuyers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Buyer Services</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Buyer Representation with Purpose
            </h1>
            <p className="text-xl text-cream/80">
              Your home search deserves expert guidance and a prayer covering.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Approach</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                How We Serve Buyers
              </h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20">
              <Heart className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-serif text-xl font-bold text-navy mb-3">The Chosen Difference</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every client receives a prayer covering over their transaction. We believe your home 
                is part of your legacy—we treat it that way.
              </p>
              <Button variant="gold-outline" asChild>
                <Link to="/faith-community">Learn About Our Culture</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Markets We Serve</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">
              Your Florida Home Awaits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {markets.map((market) => (
              <div
                key={market.region}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-gold" />
                  <h3 className="font-serif text-2xl font-bold text-navy">{market.region}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {market.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gold/70" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
              Ready to Start Your Home Search?
            </h2>
            <p className="text-cream/80 mb-8">
              Let us guide you to the perfect home with expert representation and faith-centered service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" asChild>
                <Link to="/properties">
                  <Search className="w-5 h-5" />
                  Search Properties
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResidentialBuyers;
