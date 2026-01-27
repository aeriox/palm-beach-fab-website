import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroCraftsmanship from "@/assets/hero-craftsmanship.jpg";

const coreValues = [
  {
    title: "Luxury Craftsmanship",
    description: "Museum-quality attention to detail on every piece, whether residential or commercial.",
  },
  {
    title: "Commercial Discipline",
    description: "Production systems that ensure consistent quality and reliable delivery.",
  },
  {
    title: "Clear Communication",
    description: "Regular updates, responsive service, and no surprises.",
  },
  {
    title: "Engineering-First",
    description: "Every project begins with detailed engineering to ensure precision from start to finish.",
  },
  {
    title: "End-to-End Control",
    description: "In-house production and installation for complete quality assurance.",
  },
];

const ecosystemPartners = [
  {
    name: "Xact Construction",
    description: "Full-service general contractor for luxury residential and commercial projects.",
  },
  {
    name: "RENCO",
    description: "Renovation and construction specialists focused on quality and efficiency.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6">
                About Us
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                A Different Kind of Millwork Company
              </h1>
              <p className="text-lg text-muted-foreground">
                Palm Beach Fabricators is a hybrid millwork company built on 
                luxury craftsmanship and commercial discipline. Most shops 
                specialize in either residential or commercial—we've built 
                a brand that thrives in both.
              </p>
            </div>
            <div 
              className="aspect-[4/3] rounded-lg bg-cover bg-center shadow-medium"
              style={{ backgroundImage: `url(${heroCraftsmanship})` }}
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
              Why We're Different
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                Palm Beach Fabricators is the dedicated millwork division of a 
                larger construction ecosystem. We were engineered to serve both 
                luxury residential clients who demand museum-quality craftsmanship 
                and commercial projects where precision, timelines, and compliance 
                are critical.
              </p>
              <p className="mb-6">
                That dual capability is extremely rare in Palm Beach County. 
                Most shops are either boutique residential producers who can't 
                handle commercial volume, or high-volume commercial operations 
                that can't deliver the finesse required for luxury homes.
              </p>
              <p>
                We're structured like a hybrid design-build millwork house, 
                not a typical woodshop. Our engineering-first workflow, led by 
                experienced professionals, ensures every project—whether a 
                custom kitchen for a Palm Beach estate or a hotel lobby 
                build-out—receives the same attention to detail and 
                professional execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Core Identity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The values that define Palm Beach Fabricators and guide every 
              project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-lg shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Part of a Larger Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Palm Beach Fabricators operates as the millwork division within 
              a construction family that includes experienced contractors and 
              renovation specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ecosystemPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-secondary p-8 rounded-lg text-center"
              >
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              This integration allows seamless coordination between construction 
              and millwork—particularly valuable for residential clients who want 
              a unified team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Experience the Difference
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Whether you're a homeowner, architect, or general contractor, 
            we'd love to show you what sets Palm Beach Fabricators apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
