import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Heart, GraduationCap, Users, Handshake, 
  TrendingUp, Building2, Star, ArrowRight, Upload
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const culturePoints = [
  {
    icon: Heart,
    title: "Faith-Driven Culture",
    description: "We pray together, grow together, and win together. Faith isn't an add-on—it's who we are.",
  },
  {
    icon: Building2,
    title: "Commercial Training",
    description: "Most residential agents never get commercial training. At Chosen, you will.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Support",
    description: "Learn from experienced brokers and entrepreneurs who want to see you succeed.",
  },
  {
    icon: Users,
    title: "Network Access",
    description: "Tap into our network of attorneys, lenders, title companies, and private investors.",
  },
  {
    icon: Handshake,
    title: "Collaboration Over Competition",
    description: "We believe in abundance. Your success doesn't threaten anyone here—it's celebrated.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Partnership Models",
    description: "We offer creative compensation and partnership structures for entrepreneurial agents.",
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    licenseStatus: "",
    experience: "",
    interest: "",
    whyChosen: "",
    about: "",
    faithAligned: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xovgnnqo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: "Career Application",
        }),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest in joining Chosen. We'll review your application and be in touch soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          licenseStatus: "",
          experience: "",
          interest: "",
          whyChosen: "",
          about: "",
          faithAligned: false,
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Join Our Team</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Join the Chosen Team
            </h1>
            <p className="text-xl text-cream/80">
              Build a real estate career with purpose, mentorship, and kingdom impact.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Why Chosen?</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
              More Than a Brokerage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturePoints.map((point) => (
              <div
                key={point.title}
                className="bg-card rounded-xl p-8 border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mb-6">
                  <point.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="w-10 h-10 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
              Is Chosen Right for You?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're looking for agents who want more than a split—they want a mission.
              </p>
              <p>
                You might be a fit if you value faith, excellence, integrity, and growth.
              </p>
              <p className="text-navy font-medium">
                New agents welcome. Experienced agents welcome. Heart for service required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Manifesto */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Our Agent Manifesto</p>
            <blockquote className="font-serif text-2xl md:text-3xl text-cream leading-relaxed italic">
              "We are Chosen. Called to serve. Committed to excellence. Building legacy through real estate."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2">
                Apply to Join Chosen
              </h2>
              <p className="text-muted-foreground">
                Take the first step toward a purpose-driven career.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">License Status *</label>
                  <select
                    required
                    value={formData.licenseStatus}
                    onChange={(e) => setFormData({ ...formData, licenseStatus: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select status</option>
                    <option value="active">Active Florida License</option>
                    <option value="pending">License Pending</option>
                    <option value="none">Not Yet Licensed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select experience</option>
                    <option value="0">0 (New to Real Estate)</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Primary Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <option value="">Select focus area</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="both">Both</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What attracted you to Chosen?</label>
                <textarea
                  rows={3}
                  value={formData.whyChosen}
                  onChange={(e) => setFormData({ ...formData, whyChosen: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about yourself and your goals</label>
                <textarea
                  rows={4}
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary border border-border">
                <Upload className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Email your resume to <a href="mailto:realestate@chosenre.com?subject=Career%20Application%20-%20Resume" className="text-gold hover:underline">realestate@chosenre.com</a>
                </span>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.faithAligned}
                  onChange={(e) => setFormData({ ...formData, faithAligned: e.target.checked })}
                  className="rounded border-border mt-1"
                />
                <span className="text-sm text-muted-foreground">
                  I'm aligned with a faith-driven culture and values
                </span>
              </label>

              <Button type="submit" variant="navy" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
