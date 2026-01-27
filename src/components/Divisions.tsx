import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const residentialServices = [
  'Custom Kitchens',
  'Built-Ins',
  'Vanities',
  'Entertainment Walls',
  'Floating Shelves',
  'Decorative Paneling',
];

const commercialServices = [
  'Hospitality',
  'Medical',
  'Corporate',
  'Retail',
  'Multifamily',
];

export function Divisions() {
  return (
    <section id="residential" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Two Divisions. One Standard.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're building a Palm Beach estate or a commercial space with tight deadlines, 
            we deliver premium-quality millwork.
          </p>
        </motion.div>

        {/* Divisions Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Residential Division */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-lg p-8 lg:p-10 group hover:border-primary/50 transition-all duration-500"
          >
            <div className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
              Residential Division
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              Luxury Residential Millwork
            </h3>
            <p className="text-muted-foreground mb-8">
              Coastal-modern, high-end cabinetry and architectural details for elite homes in Palm Beach County.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {residentialServices.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            <Button variant="elegant" className="group/btn">
              Explore Residential
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>

          {/* Commercial Division */}
          <motion.div
            id="commercial"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-lg p-8 lg:p-10 group hover:border-primary/50 transition-all duration-500"
          >
            <div className="text-primary text-sm uppercase tracking-widest mb-4 font-medium">
              Commercial Division
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">
              Commercial Millwork
            </h3>
            <p className="text-muted-foreground mb-8">
              High-capacity production engineered for speed, durability, and architectural precision.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {commercialServices.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>

            <Button variant="elegant" className="group/btn">
              Explore Commercial
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
