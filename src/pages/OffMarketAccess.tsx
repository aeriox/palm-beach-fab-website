import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Lock, Eye, Bell, Users, 
  CheckCircle, ArrowRight, Building2, Briefcase, Home, MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Eye, title: "Early Access", description: "See properties before they hit the market" },
  { icon: Lock, title: "Confidential Deals", description: "Private business acquisition opportunities" },
  { icon: Users, title: "Direct Introductions", description: "Connect directly with motivated sellers" },
  { icon: Bell, title: "Priority Alerts", description: "First notification of new opportunities" },
];

const interestOptions = [
  { id: "residential", label: "Residential Properties", icon: Home },
  { id: "commercial", label: "Commercial Properties", icon: Building2 },
  { id: "business", label: "Business Acquisitions", icon: Briefcase },
  { id: "land", label: "Land/Development", icon: MapPin },
];

const OffMarketAccess = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: [] as string[],
    locations: "",
    budget: "",
    description: "",
    source: "",
    ndaAcknowledged: false,
  });

  const handleInterestToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  };

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
          interests: formData.interests.join(", "),
          subject: "Off-Market Access Request",
        }),
      });

      if (response.ok) {
        toast({
          title: "Request Submitted",
          description: "A member of our team will review your profile and reach out within 48 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          interests: [],
          locations: "",
          budget: "",
          description: "",
          source: "",
          ndaAcknowledged: false,
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
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
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Exclusive Access</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Off-Market Access
            </h1>
            <p className="text-xl text-cream/80">
              The best deals often never hit the market. Get access to exclusive opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
              Why Off-Market?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Chosen Real Estate Advisors, we actively source off-market properties and businesses 
              through relationships, direct outreach, and our investor network. Many sellers prefer 
              discretion—and many buyers prefer less competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl p-6 text-center border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Lock className="w-10 h-10 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2">
                Request Off-Market Access
              </h2>
              <p className="text-muted-foreground">
                Complete the form below to be considered for off-market introductions.
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

              <div>
                <label className="block text-sm font-medium mb-3">I'm interested in:</label>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleInterestToggle(option.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                        formData.interests.includes(option.id)
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-border bg-background text-muted-foreground hover:border-gold/50"
                      }`}
                    >
                      <option.icon className="w-5 h-5" />
                      <span className="text-sm">{option.label}</span>
                      {formData.interests.includes(option.id) && (
                        <CheckCircle className="w-4 h-4 text-gold ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Location(s)</label>
                  <input
                    type="text"
                    placeholder="e.g., Palm Beach, Orlando"
                    value={formData.locations}
                    onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Investment/Budget Range</label>
                  <input
                    type="text"
                    placeholder="e.g., $500K - $2M"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                <textarea
                  rows={4}
                  placeholder="Describe your ideal property or business opportunity..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How did you hear about Chosen?</label>
                <select
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <option value="">Select one</option>
                  <option value="referral">Referral</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="event">Event/Networking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.ndaAcknowledged}
                  onChange={(e) => setFormData({ ...formData, ndaAcknowledged: e.target.checked })}
                  className="rounded border-border mt-1"
                />
                <span className="text-sm text-muted-foreground">
                  I understand off-market opportunities may require NDA execution before receiving confidential details.
                </span>
              </label>

              <Button type="submit" variant="navy" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Request Access"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OffMarketAccess;
