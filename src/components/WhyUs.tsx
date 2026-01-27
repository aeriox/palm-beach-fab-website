import { motion } from 'framer-motion';
import { Ruler, Clock, Shield, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Ruler,
    title: 'Engineering-First',
    description: 'Fully engineered drawings that pass architectural review the first time.',
  },
  {
    icon: Clock,
    title: 'Predictable Timelines',
    description: 'Production discipline that consistently hits deadlines.',
  },
  {
    icon: Shield,
    title: 'End-to-End Control',
    description: 'In-house production and installation for quality assurance.',
  },
  {
    icon: Layers,
    title: 'Dual Expertise',
    description: 'Rare hybrid capabilities serving both residential and commercial.',
  },
];

export function WhyUs() {
  return (
    <section id="about" className="py-24 bg-background">
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
            Why Palm Beach Fabricators?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            We're not a typical woodshop. We're an engineering-first millwork house with the rare 
            ability to serve both luxury residential and demanding commercial clients.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-primary/30 rounded-lg p-8 lg:p-12 text-center max-w-4xl mx-auto"
        >
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic mb-8">
            "Palm Beach Fabricators is a luxury and commercial millwork company built on precision, 
            engineering, and craftsmanship."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Start Your Project
            </Button>
            <Button variant="elegant" size="lg">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
