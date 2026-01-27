import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const ScrollLink = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(to);
  };
  
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
const footerLinks = {
  services: [
    { name: "Residential Millwork", href: "/residential" },
    { name: "Commercial Millwork", href: "/commercial" },
    { name: "Custom Kitchens", href: "/residential#kitchens" },
    { name: "Hospitality", href: "/commercial#hospitality" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/process" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  serviceAreas: [
    "Jupiter",
    "Palm Beach",
    "Wellington",
    "West Palm Beach",
    "Boca Raton",
  ],
};

export function Footer() {
  return (
    <footer className="bg-[hsl(48,33%,95%)] text-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="Palm Beach Fabricators" 
              className="h-32 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Luxury residential and high-precision commercial millwork. 
              Engineering-first craftsmanship for Palm Beach County's 
              most discerning clients.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-xs uppercase tracking-wider">A division of</span>
              <span className="text-sm font-medium">Xact Construction</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15616773847"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  (561) 677-3847
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@palmbeachfabricators.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  info@palmbeachfabricators.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  <p>860 Jupiter Park Dr, Suite 1A</p>
                  <p>Jupiter, FL 33458</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Palm Beach Fabricators. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <ScrollLink to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </ScrollLink>
              <ScrollLink to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
