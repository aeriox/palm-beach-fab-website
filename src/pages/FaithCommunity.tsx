import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Heart, Calendar, Users, MessageCircle, 
  Star, ArrowRight, CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Weekly prayer calls for marketplace believers",
  "Prayer covering over your transactions and properties",
  "Community of faith-driven entrepreneurs and investors",
  "Encouragement and testimonies of God's faithfulness",
];

const testimonies = [
  {
    quote: "God closed one door and opened a better one. The Chosen team prayed with us through it all, and we found a home beyond what we imagined.",
    name: "The Martinez Family",
  },
  {
    quote: "During a difficult negotiation, the prayer support from this community made all the difference. We felt covered.",
    name: "Robert & Lisa Chen",
  },
];

const FaithCommunity = () => {
  const { toast } = useToast();
  const [prayerForm, setPrayerForm] = useState({
    name: "",
    email: "",
    requestType: "",
    request: "",
    confidential: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePrayerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xovgnnqo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...prayerForm,
          subject: "Prayer Request",
        }),
      });

      if (response.ok) {
        toast({
          title: "Prayer Request Received",
          description: "Our team will be praying for you. God hears your prayers.",
        });
        setPrayerForm({ name: "", email: "", requestType: "", request: "", confidential: false });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit prayer request. Please try again.",
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
            <p className="text-gold font-medium tracking-widest uppercase mb-4">Heavenly Hands</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              Faith in the Marketplace
            </h1>
            <p className="text-xl text-cream/80">
              Join a community of believers who pray, partner, and prosper together.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
              Faith is Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Chosen Real Estate Advisors, faith isn't separate from business—it's the foundation. 
              We host regular prayer calls, cover our clients and deals in prayer, and believe that 
              God moves in the marketplace. You're invited to be part of this community.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 text-left">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Call Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Prayer Calls */}
            <div>
              <Calendar className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                Join Our Prayer Calls
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We gather weekly to pray for our community, our clients, and the marketplace. 
                All are welcome—whether you're a client, a fellow believer, or just curious.
              </p>
              
              <div className="bg-card rounded-xl p-6 border border-border mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-navy">Weekly Prayer Call</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Monday through Friday, 8:00 AM – 9:00 AM EST via Zoom
                </p>
                <Button variant="gold" asChild>
                  <a href="sms:8333744335?body=START" className="pointer-events-auto">
                    Get Call Details
                  </a>
                </Button>
              </div>
            </div>

            {/* Prayer Request Form */}
            <div>
              <MessageCircle className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                Request Prayer
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether it's a deal, a property, your family, or your business—we'd be honored to pray with you.
              </p>
              
              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={prayerForm.name}
                    onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                    className="px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={prayerForm.email}
                    onChange={(e) => setPrayerForm({ ...prayerForm, email: e.target.value })}
                    className="px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                
                <select
                  value={prayerForm.requestType}
                  onChange={(e) => setPrayerForm({ ...prayerForm, requestType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <option value="">Type of Request</option>
                  <option value="property">Property/Real Estate</option>
                  <option value="business">Business Deal</option>
                  <option value="personal">Personal</option>
                  <option value="family">Family</option>
                  <option value="career">Career</option>
                  <option value="other">Other</option>
                </select>
                
                <textarea
                  rows={4}
                  placeholder="Share your prayer request..."
                  required
                  value={prayerForm.request}
                  onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={prayerForm.confidential}
                    onChange={(e) => setPrayerForm({ ...prayerForm, confidential: e.target.checked })}
                    className="rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">
                    Keep my request confidential (shared only with prayer team)
                  </span>
                </label>
                
                <Button type="submit" variant="navy" disabled={isSubmitting}>
                  <Heart className="w-4 h-4" />
                  {isSubmitting ? "Submitting..." : "Submit Prayer Request"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Star className="w-10 h-10 text-gold mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
              God's Faithfulness in the Marketplace
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonies.map((testimony, index) => (
              <div
                key={index}
                className="bg-cream/5 rounded-xl p-8 border border-cream/10"
              >
                <p className="text-cream/90 italic mb-4 leading-relaxed">
                  "{testimony.quote}"
                </p>
                <p className="text-gold font-medium">— {testimony.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-cream to-secondary">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready to Work with a Faith-Driven Team?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience real estate with purpose, integrity, and prayer covering.
          </p>
          <Button variant="navy" size="xl" asChild>
            <Link to="/contact">
              Connect with Chosen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FaithCommunity;
