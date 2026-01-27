import { useState } from "react";
import { Bell, CheckCircle, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { SearchFilters } from "./SearchFilters";

interface LeadCaptureModalProps {
  searchCriteria: SearchFilters;
}

export function LeadCaptureModal({ searchCriteria }: LeadCaptureModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phoneNumber && !/^[\d\s\-\(\)\+]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("save-lead-search", {
        body: {
          fullName: formData.fullName.trim(),
          phoneNumber: formData.phoneNumber.trim() || null,
          email: formData.email.trim().toLowerCase(),
          searchCriteria,
        },
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "We'll notify you when new homes hit the market.",
      });

      // Reset form after delay
      setTimeout(() => {
        setOpen(false);
        setIsSuccess(false);
        setFormData({ fullName: "", phoneNumber: "", email: "" });
      }, 2000);
    } catch (error) {
      console.error("Error saving lead:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium gap-2 shadow-lg hover:shadow-xl transition-all">
          <Bell className="w-4 h-4" />
          Save Search & Get Alerts
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-primary mb-2">
              You're All Set!
            </h3>
            <p className="text-muted-foreground">
              We'll notify you when new homes matching your criteria hit the market.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-primary">
                Save Your Search
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Get notified instantly when new properties matching your criteria become available.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && (
                  <p className="text-xs text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-foreground">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="(561) 555-0123"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className={errors.phoneNumber ? "border-destructive" : ""}
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-destructive">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Current Search Summary */}
              {(searchCriteria.county || searchCriteria.city || searchCriteria.minPrice || searchCriteria.maxPrice) && (
                <div className="bg-secondary/50 rounded-lg p-3 text-sm">
                  <p className="font-medium text-foreground mb-1">Your Search Criteria:</p>
                  <ul className="text-muted-foreground space-y-0.5">
                    {searchCriteria.county && <li>• County: {searchCriteria.county}</li>}
                    {searchCriteria.city && <li>• City: {searchCriteria.city}</li>}
                    {searchCriteria.minPrice && (
                      <li>• Min Price: ${searchCriteria.minPrice.toLocaleString()}</li>
                    )}
                    {searchCriteria.maxPrice && (
                      <li>• Max Price: ${searchCriteria.maxPrice.toLocaleString()}</li>
                    )}
                    {searchCriteria.bedrooms && <li>• Bedrooms: {searchCriteria.bedrooms}+</li>}
                    {searchCriteria.bathrooms && <li>• Bathrooms: {searchCriteria.bathrooms}+</li>}
                  </ul>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Saving...
                  </span>
                ) : (
                  "Save Search & Get Alerts"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to receive property alerts. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
