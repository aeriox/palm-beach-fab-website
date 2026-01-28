import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Home, Building2, ArrowRight } from "lucide-react";
import heroResidential from "@/assets/hero-residential.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroCraftsmanship from "@/assets/hero-craftsmanship.jpg";
import portfolioMedicalCasework from "@/assets/portfolio-medical-casework.jpg";
import portfolioEntertainmentWall from "@/assets/portfolio-entertainment-wall.jpg";
import portfolioConferenceRoom from "@/assets/portfolio-conference-room.jpg";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
];

const projects = [
  {
    id: 1,
    title: "Jupiter Estate Kitchen",
    category: "residential",
    description: "Custom white oak cabinetry with brass hardware and marble countertops",
    image: heroResidential,
    tags: ["Custom Kitchen", "White Oak", "Luxury"],
  },
  {
    id: 2,
    title: "Coastal Hotel Lobby",
    category: "commercial",
    description: "Reception desk and wall paneling for boutique hotel",
    image: heroCommercial,
    tags: ["Hospitality", "Reception", "Paneling"],
  },
  {
    id: 3,
    title: "Palm Beach Built-Ins",
    category: "residential",
    description: "Floor-to-ceiling built-in cabinetry for a luxury home library",
    image: heroCraftsmanship,
    tags: ["Built-Ins", "Library", "Custom"],
  },
  {
    id: 4,
    title: "Medical Office Casework",
    category: "commercial",
    description: "ADA-compliant nurse stations and reception casework",
    image: portfolioMedicalCasework,
    tags: ["Medical", "Casework", "ADA-Compliant"],
  },
  {
    id: 5,
    title: "Wellington Entertainment Wall",
    category: "residential",
    description: "Media center with integrated lighting and hidden components",
    image: portfolioEntertainmentWall,
    tags: ["Entertainment", "Media Center", "Lighting"],
  },
  {
    id: 6,
    title: "Corporate Conference Room",
    category: "commercial",
    description: "Executive conference table and wall paneling",
    image: portfolioConferenceRoom,
    tags: ["Corporate", "Conference", "Paneling"],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-16">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Our Work
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              From luxury residential kitchens to commercial lobbies, 
              explore the range and quality of our millwork.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full">
                      {project.category === "residential" ? (
                        <Home className="h-3 w-3" />
                      ) : (
                        <Building2 className="h-3 w-3" />
                      )}
                      {project.category === "residential"
                        ? "Residential"
                        : "Commercial"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Your Project Could Be Next
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Let's discuss how we can bring your vision to life with 
            precision craftsmanship and engineering excellence.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
