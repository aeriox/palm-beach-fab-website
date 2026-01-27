import { motion } from 'framer-motion';
import { MessageSquare, FileText, Cog, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description: 'Comprehensive consultation and scope definition to understand your vision.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Engineering',
    description: 'Fully engineered shop drawings with precise specifications.',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Production',
    description: 'Precision production with quality checkpoints at every stage.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Installation',
    description: 'Professional installation and final walkthrough for perfection.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-navy">
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
            Engineering-First Workflow
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Every project begins with detailed engineering. Our process ensures precision from concept 
            to installation, minimizing change orders and delivering results that exceed expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-border" />
              )}
              
              <div className="bg-card border border-border rounded-lg p-6 relative hover:border-primary/50 transition-all duration-500">
                <span className="text-primary/30 font-display text-5xl font-bold absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <span className="text-gradient-gold font-display text-7xl md:text-8xl font-bold">
              20+
            </span>
            <p className="text-muted-foreground text-lg mt-2 uppercase tracking-wider">
              Years Combined Experience
            </p>
          </div>
          <Button variant="elegant" size="lg" className="mt-8">
            Learn Our Process
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
