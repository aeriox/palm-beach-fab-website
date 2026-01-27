import { Bed, Bath, Square, MapPin } from "lucide-react";

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

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const mainImage = property.media?.[0]?.url || '/placeholder.svg';
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border card-hover">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={mainImage}
          alt={property.address}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent text-accent-foreground rounded-sm">
            {property.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <p className="font-serif text-2xl font-semibold text-primary mb-2">
          {formatPrice(property.price)}
        </p>

        {/* Address */}
        <div className="flex items-start gap-2 mb-4">
          <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-foreground font-medium leading-tight">
              {property.address}
            </p>
            <p className="text-xs text-muted-foreground">
              {property.city}, {property.state} {property.zip}
            </p>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} Baths</span>
          </div>
          {property.sqft && (
            <div className="flex items-center gap-1.5">
              <Square className="w-4 h-4" />
              <span>{property.sqft.toLocaleString()} SqFt</span>
            </div>
          )}
        </div>

        {/* MLS Disclosure */}
        <p className="text-[10px] text-muted-foreground/60 mt-4 pt-3 border-t border-border/50">
          Courtesy of BeachesMLS
        </p>
      </div>
    </div>
  );
}
