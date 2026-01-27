import { motion } from 'framer-motion';
import { Home, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wood-texture.jpg';

const locations = [
  'Jupiter', 'Palm Beach', 'Wellington', 'West Palm Beach', 'Boca Raton', 'Delray Beach'
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-6"
          >
            Serving the Palm Beaches
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-8"
          >
            Precision Millwork
            <br />
            <span className="text-gradient-gold">&amp; Custom Fabrication</span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="xl" className="group">
              <Home className="w-5 h-5" />
              Residential Millwork
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Building2 className="w-5 h-5" />
              Commercial Millwork
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Division Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-muted-foreground"
          >
            <span className="text-sm uppercase tracking-wider">A division of</span>
            <span className="px-4 py-2 border border-border rounded-full text-foreground font-medium">
              Xact Construction
            </span>
          </motion.div>
        </div>
      </div>

      {/* Location Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 bg-background/50 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...locations, ...locations, ...locations, ...locations].map((location, index) => (
            <span key={index} className="text-muted-foreground text-sm mx-6 flex items-center gap-2">
              {location}
              <span className="text-primary">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
