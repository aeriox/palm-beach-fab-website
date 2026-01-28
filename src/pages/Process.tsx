import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  MessageSquare,
  PenTool,
  Factory,
  Truck,
  CheckCircle2,
} from "lucide-react";
import processConsultation from "@/assets/process-consultation.jpg";
import processEngineering from "@/assets/process-engineering.jpg";
import processProduction from "@/assets/process-production.jpg";
import processInstallation from "@/assets/process-installation.jpg";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Scope",
    description: "We begin with a thorough consultation to understand your vision, requirements, and timeline. For commercial projects, we review architectural plans and coordinate with GCs. For residential, we meet with homeowners to capture every detail.",
    details: [
      "Project scope definition",
      "Budget discussion and alignment",
      "Timeline establishment",
      "Material and finish selections",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Engineering & Shop Drawings",
    description: "Our engineering-first approach sets us apart. Lou and the team produce detailed shop drawings that capture every dimension, material, and finish—ensuring accuracy before a single cut is made.",
    details: [
      "Comprehensive shop drawings",
      "Material takeoffs and specifications",
      "Submittal packages for architect review",
      "Revision management until approval",
    ],
  },
  {
    number: "03",
    icon: Factory,
    title: "Precision Production",
    description: "Nick oversees all shop production, maintaining quality standards whether it's a boutique residential piece or a high-volume commercial order. Our shop is equipped for both precision craftsmanship and efficient production.",
    details: [
      "CNC precision cutting",
      "Hand-finished details",
      "Multi-stage quality checkpoints",
      "Progress updates and photos",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "Installation & Completion",
    description: "Our trained installation teams understand both residential care and commercial sequencing. We coordinate with your schedule, protect the job site, and ensure flawless execution.",
    details: [
      "Professional installation crews",
      "Site protection protocols",
      "Final walkthrough and punch list",
      "Client satisfaction confirmation",
    ],
  },
];

const teamMembers = [
  {
    name: "Nick",
    role: "Shop Manager",
    responsibilities: [
      "Oversees all shop output",
      "Manages scheduling for both divisions",
      "Ensures quality standards",
      "Coordinates with field teams",
    ],
  },
  {
    name: "Lou",
    role: "Estimating & Engineering",
    responsibilities: [
      "Provides residential + commercial estimates",
      "Breaks down architectural plans",
      "Produces submittals and shop drawings",
      "Handles GC/architect communication",
    ],
  },
];

const Process = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-16">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Our Process
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Engineering-First Workflow
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Every project—residential or commercial—follows our proven process. 
              It's how we deliver consistent quality, hit deadlines, and eliminate surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {processSteps.map((step, index) => {
              const stepImages = [processConsultation, processEngineering, processProduction, processInstallation];
              return (
                <div
                  key={step.number}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-heading text-5xl font-bold text-accent/20">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-accent" />
                      </div>
                    </div>
                    <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div 
                      className="aspect-[4/3] rounded-lg bg-cover bg-center shadow-medium"
                      style={{ backgroundImage: `url(${stepImages[index]})` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Team Behind the Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our shop is structured like a hybrid design-build millwork house, 
              not a typical woodshop. Here's who makes it happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card p-8 rounded-lg shadow-soft"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-heading text-2xl font-bold text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm mb-6">{member.role}</p>
                <ul className="space-y-3">
                  {member.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to Start the Process?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Whether you have detailed plans or just an initial concept, 
            we're ready to guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
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

export default Process;
