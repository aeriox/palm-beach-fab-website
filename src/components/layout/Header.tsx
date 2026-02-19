import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-transparent.png";

const navigation = [
  { name: "Residential", href: "/residential" },
  { name: "Commercial", href: "/commercial" },
  { name: "Process", href: "/process" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHome
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Palm Beach Fabricators" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-xs font-medium tracking-widest uppercase transition-colors duration-300",
                  isHome
                    ? "text-white/70 hover:text-champagne"
                    : "text-muted-foreground hover:text-foreground",
                  location.pathname === item.href &&
                    (isHome ? "text-champagne" : "text-foreground")
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center">
            <Button variant={isHome ? "hero" : "accent"} size="sm" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isHome ? "text-white hover:text-champagne" : "text-foreground"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 right-0 bg-midnight border-b border-white/10 shadow-medium animate-fade-in">
            <div className="px-6 py-8 space-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm font-medium text-white/80 hover:text-champagne transition-colors tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}