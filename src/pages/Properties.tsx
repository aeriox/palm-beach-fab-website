import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Building2, ArrowRight } from "lucide-react";
import { SearchFiltersBar, SearchFilters } from "@/components/properties/SearchFilters";
import { ListingsGrid } from "@/components/properties/ListingsGrid";
import { LeadCaptureModal } from "@/components/properties/LeadCaptureModal";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-home.jpg";

interface Property {
  id: string;
  listingId: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  propertyType: string;
  propertySubType: string;
  status: string;
  description: string;
  media: { url: string; type: string; order: number }[];
}

const Properties = () => {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [listings, setListings] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const extractFunctionErrorMessage = (err: unknown): string | null => {
    // supabase-js throws FunctionsHttpError for non-2xx responses
    const anyErr = err as any;

    // Try to parse the function response body (when available)
    const contextBody = anyErr?.context?.body;
    if (typeof contextBody === "string") {
      try {
        const parsed = JSON.parse(contextBody);
        if (typeof parsed?.error === "string" && parsed.error.trim()) return parsed.error;
      } catch {
        // ignore
      }
    }

    const msg = typeof anyErr?.message === "string" ? anyErr.message : null;
    if (msg && msg.trim()) return msg;

    return null;
  };

  const fetchListings = async () => {
    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const { data, error: fetchError } = await supabase.functions.invoke("fetch-listings", {
        body: {
          city: filters.city,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
          bedrooms: filters.bedrooms,
          bathrooms: filters.bathrooms,
          propertyType: filters.propertyType,
          limit: 24,
        },
      });

      if (fetchError) throw fetchError;

      if (data?.error) {
        setError(data.error);
        setListings([]);
      } else {
        setListings(data?.listings || []);
      }
    } catch (err) {
      console.error("Error fetching listings:", err);
      const specific = extractFunctionErrorMessage(err);
      setError(specific || "Unable to fetch listings. Please try again later.");
      setListings([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section with Search */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury Palm Beach home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom w-full py-32">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">
              Palm Beach County Real Estate
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
              Find Your Dream Home in Palm Beach County
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto">
              Explore luxury homes, waterfront properties, and exceptional real estate opportunities 
              across Palm Beach County.
            </p>
          </div>

          {/* Search Filter Bar */}
          <div className="max-w-4xl mx-auto">
            <SearchFiltersBar
              filters={filters}
              onFiltersChange={setFilters}
              onSearch={fetchListings}
              isLoading={isLoading}
            />

            {/* Save Search Button */}
            <div className="flex justify-center mt-6">
              <LeadCaptureModal searchCriteria={filters} />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          {hasSearched ? (
            <ListingsGrid
              listings={listings}
              isLoading={isLoading}
              error={error}
            />
          ) : (
            <div className="text-center py-16">
              <Home className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4">
                Start Your Property Search
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Use the search filters above to find properties that match your criteria. 
                We'll show you the latest listings from BeachesMLS.
              </p>
              <Button
                onClick={fetchListings}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View All Listings
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Services Callout */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border card-hover">
              <Home className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Buying a Home?</h3>
              <p className="text-muted-foreground mb-4">
                We guide buyers through every step—with expertise, care, and a prayer covering 
                over your search.
              </p>
              <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/residential-buyers">Learn About Buyer Services</Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border card-hover">
              <Building2 className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-bold text-primary mb-3">Selling Your Home?</h3>
              <p className="text-muted-foreground mb-4">
                Get a complimentary home valuation and learn how we can help you maximize 
                your property's potential.
              </p>
              <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/contact">Request Free Valuation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
