import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Home, Building2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "residential";
  
  const [projectType, setProjectType] = useState<"residential" | "commercial">(
    initialType as "residential" | "commercial"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    timeline: "",
    budget: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted",
      description: "We'll be in touch within 24 hours to discuss your project.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectDescription: "",
      timeline: "",
      budget: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-16">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Contact Us
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Whether you're planning a luxury home renovation or a commercial 
              build-out, we're here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                <a
                  href="tel:+15616773847"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      (561) 677-3847
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@palmbeachfabricators.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      info@palmbeachfabricators.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="font-medium text-foreground">
                      860 Jupiter Park Dr, Suite 1A
                    </p>
                    <p className="font-medium text-foreground">
                      Jupiter, FL 33458
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 lg:p-12 rounded-lg shadow-soft">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {/* Project Type Toggle */}
                <div className="flex gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setProjectType("residential")}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-lg border-2 transition-all ${
                      projectType === "residential"
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-accent/50"
                    }`}
                  >
                    <Home className="h-5 w-5" />
                    <span className="font-medium">Residential</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectType("commercial")}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-lg border-2 transition-all ${
                      projectType === "commercial"
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-accent/50"
                    }`}
                  >
                    <Building2 className="h-5 w-5" />
                    <span className="font-medium">Commercial</span>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    {projectType === "commercial" && (
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Company / Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Project Description *
                    </label>
                    <Textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder={
                        projectType === "residential"
                          ? "Describe your project: what rooms, types of millwork, style preferences..."
                          : "Describe your project: facility type, scope of work, special requirements..."
                      }
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select timeline</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="12+ months">12+ months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $25,000">Under $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                        <option value="$250,000+">$250,000+</option>
                        <option value="TBD">To Be Determined</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
