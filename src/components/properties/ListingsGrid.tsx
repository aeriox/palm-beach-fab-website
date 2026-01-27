import { PropertyCard } from "./PropertyCard";
import { Loader2, Home, AlertCircle } from "lucide-react";

interface PropertyMedia {
  url: string;
  type: string;
  order: number;
}

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
  media: PropertyMedia[];
}

interface ListingsGridProps {
  listings: Property[];
  isLoading: boolean;
  error?: string | null;
}

export function ListingsGrid({ listings, isLoading, error }: ListingsGridProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-10 h-10 text-accent animate-spin mb-4" />
        <p className="text-muted-foreground">Loading properties...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h3 className="font-serif text-xl font-semibold text-primary mb-2">
          Unable to Load Listings
        </h3>
        <p className="text-muted-foreground max-w-md">
          {error}
        </p>
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Home className="w-12 h-12 text-muted-foreground/50 mb-4" />
        <h3 className="font-serif text-xl font-semibold text-primary mb-2">
          No Properties Found
        </h3>
        <p className="text-muted-foreground max-w-md">
          Try adjusting your search criteria to see more results.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-6">
        Showing {listings.length} properties
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      {/* MLS Disclosure Footer */}
      <div className="mt-12 p-4 bg-secondary/50 rounded-lg border border-border">
        <p className="text-xs text-muted-foreground leading-relaxed text-center">
          Based on information from BeachesMLS and Stellar MLS. This information may or may not include 
          all listed expired, withdrawn, pending, or sold properties. IDX information is provided exclusively 
          for consumers' personal, non-commercial use.
        </p>
      </div>
    </div>
  );
}
