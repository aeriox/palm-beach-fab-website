import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SearchFilters {
  county?: string;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
}

interface SearchFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onSearch: () => void;
  isLoading?: boolean;
}

const COUNTIES = ["Palm Beach", "Broward", "Miami-Dade"];

const CITIES_BY_COUNTY: Record<string, string[]> = {
  "Palm Beach": [
    "Atlantis",
    "Belle Glade",
    "Boca Raton",
    "Boynton Beach",
    "Briny Breezes",
    "Cloud Lake",
    "Delray Beach",
    "Glen Ridge",
    "Golf",
    "Greenacres",
    "Gulf Stream",
    "Haverhill",
    "Highland Beach",
    "Hypoluxo",
    "Juno Beach",
    "Jupiter",
    "Jupiter Inlet Colony",
    "Lake Clarke Shores",
    "Lake Park",
    "Lake Worth Beach",
    "Lantana",
    "Loxahatchee Groves",
    "Manalapan",
    "Mangonia Park",
    "North Palm Beach",
    "Ocean Ridge",
    "Pahokee",
    "Palm Beach",
    "Palm Beach Gardens",
    "Palm Beach Shores",
    "Palm Springs",
    "Riviera Beach",
    "Royal Palm Beach",
    "South Bay",
    "South Palm Beach",
    "Tequesta",
    "Wellington",
    "West Palm Beach",
    "Westlake",
  ],
  "Broward": [
    "Coconut Creek",
    "Cooper City",
    "Coral Springs",
    "Dania Beach",
    "Davie",
    "Deerfield Beach",
    "Fort Lauderdale",
    "Hallandale Beach",
    "Hillsboro Beach",
    "Hollywood",
    "Lauderdale Lakes",
    "Lauderdale-by-the-Sea",
    "Lauderhill",
    "Lazy Lake",
    "Lighthouse Point",
    "Margate",
    "Miramar",
    "North Lauderdale",
    "Oakland Park",
    "Parkland",
    "Pembroke Park",
    "Pembroke Pines",
    "Plantation",
    "Pompano Beach",
    "Sea Ranch Lakes",
    "Southwest Ranches",
    "Sunrise",
    "Tamarac",
    "West Park",
    "Weston",
    "Wilton Manors",
  ],
  "Miami-Dade": [
    "Aventura",
    "Bal Harbour",
    "Bay Harbor Islands",
    "Biscayne Park",
    "Coral Gables",
    "Cutler Bay",
    "Doral",
    "El Portal",
    "Florida City",
    "Golden Beach",
    "Hialeah",
    "Hialeah Gardens",
    "Homestead",
    "Indian Creek",
    "Key Biscayne",
    "Medley",
    "Miami",
    "Miami Beach",
    "Miami Gardens",
    "Miami Lakes",
    "Miami Shores",
    "Miami Springs",
    "North Bay Village",
    "North Miami",
    "North Miami Beach",
    "Opa-locka",
    "Palmetto Bay",
    "Pinecrest",
    "South Miami",
    "Sunny Isles Beach",
    "Surfside",
    "Sweetwater",
    "Virginia Gardens",
    "West Miami",
  ],
};

export function SearchFiltersBar({ filters, onFiltersChange, onSearch, isLoading }: SearchFiltersProps) {
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");

  // Get cities based on selected county
  const availableCities = useMemo(() => {
    if (filters.county) {
      return CITIES_BY_COUNTY[filters.county] || [];
    }
    // If no county selected, show all cities
    return Object.values(CITIES_BY_COUNTY).flat().sort();
  }, [filters.county]);

  const handleCountyChange = (value: string) => {
    const newCounty = value === "all" ? undefined : value;
    // Reset city if county changes
    onFiltersChange({ 
      ...filters, 
      county: newCounty,
      city: undefined 
    });
  };

  const handleCityChange = (value: string) => {
    onFiltersChange({ ...filters, city: value === "all" ? undefined : value });
  };

  const handleMinPriceChange = (value: string) => {
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, "");
    setMinPriceInput(numericValue);
    onFiltersChange({ 
      ...filters, 
      minPrice: numericValue ? Number(numericValue) : undefined 
    });
  };

  const handleMaxPriceChange = (value: string) => {
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, "");
    setMaxPriceInput(numericValue);
    onFiltersChange({ 
      ...filters, 
      maxPrice: numericValue ? Number(numericValue) : undefined 
    });
  };

  const formatPriceDisplay = (value: string) => {
    if (!value) return "";
    return Number(value).toLocaleString();
  };

  return (
    <div className="glass rounded-lg p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* County Dropdown */}
        <div>
          <label className="text-xs font-medium text-cream/80 uppercase tracking-wider mb-2 block">
            County
          </label>
          <Select onValueChange={handleCountyChange} value={filters.county || "all"}>
            <SelectTrigger className="bg-white/10 border-white/20 text-cream hover:bg-white/20 focus:ring-accent">
              <SelectValue placeholder="All Counties" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border z-50">
              <SelectItem value="all">All Counties</SelectItem>
              {COUNTIES.map((county) => (
                <SelectItem key={county} value={county}>
                  {county} County
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City Dropdown */}
        <div>
          <label className="text-xs font-medium text-cream/80 uppercase tracking-wider mb-2 block">
            City
          </label>
          <Select onValueChange={handleCityChange} value={filters.city || "all"}>
            <SelectTrigger className="bg-white/10 border-white/20 text-cream hover:bg-white/20 focus:ring-accent">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border z-50 max-h-[300px]">
              <SelectItem value="all">All Cities</SelectItem>
              {availableCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Min Price Input */}
        <div>
          <label className="text-xs font-medium text-cream/80 uppercase tracking-wider mb-2 block">
            Min Price
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/60">$</span>
            <Input
              type="text"
              placeholder="No Min"
              value={minPriceInput ? formatPriceDisplay(minPriceInput) : ""}
              onChange={(e) => handleMinPriceChange(e.target.value.replace(/,/g, ""))}
              className="bg-white/10 border-white/20 text-cream placeholder:text-cream/50 hover:bg-white/20 focus:ring-accent pl-7"
            />
          </div>
        </div>

        {/* Max Price Input */}
        <div>
          <label className="text-xs font-medium text-cream/80 uppercase tracking-wider mb-2 block">
            Max Price
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/60">$</span>
            <Input
              type="text"
              placeholder="No Max"
              value={maxPriceInput ? formatPriceDisplay(maxPriceInput) : ""}
              onChange={(e) => handleMaxPriceChange(e.target.value.replace(/,/g, ""))}
              className="bg-white/10 border-white/20 text-cream placeholder:text-cream/50 hover:bg-white/20 focus:ring-accent pl-7"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button 
            onClick={onSearch} 
            disabled={isLoading}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                Searching...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
