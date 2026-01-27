import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'Residential', href: '#residential' },
  { name: 'Commercial', href: '#commercial' },
  { name: 'Our Process', href: '#process' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Custom Kitchens',
  'Built-In Cabinetry',
  'Vanities',
  'Entertainment Centers',
  'Commercial Millwork',
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
                <span className="font-display text-primary text-lg font-bold">PB</span>
              </div>
              <div>
                <span className="font-display text-foreground text-sm tracking-wider block">PALM BEACH</span>
                <span className="text-xs text-muted-foreground tracking-widest">FABRICATORS</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Premium millwork and custom fabrication for luxury residential and commercial projects 
              throughout Palm Beach County.
            </p>
            <p className="text-muted-foreground text-xs">
              A division of Xact Construction
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-foreground text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-foreground text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-foreground text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Palm Beach County, FL</p>
              <p>(561) 555-0123</p>
              <p>info@palmbeachfabricators.com</p>
            </div>
            <div className="mt-4">
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Service Areas</p>
              <p className="text-muted-foreground text-sm mt-1">
                Jupiter • Palm Beach • Wellington • West Palm Beach • Boca Raton • Delray Beach
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Palm Beach Fabricators. All rights reserved.
          </p>
          <div className="flex gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
