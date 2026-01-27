import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-body transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-secondary hover:text-secondary-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-gradient-to-r from-champagne to-champagne-light text-midnight hover:shadow-champagne-intense shadow-champagne font-semibold rounded-md",
        // Glassmorphism Hero Button with Shimmer
        hero: [
          "relative overflow-hidden",
          "bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px]",
          "border border-[rgba(197,160,89,0.5)]",
          "text-white font-semibold tracking-wider uppercase text-xs",
          "shadow-[0_0_20px_rgba(197,160,89,0.15)]",
          "hover:bg-gradient-to-r hover:from-champagne hover:to-champagne-light",
          "hover:text-midnight hover:border-transparent",
          "hover:shadow-[0_0_40px_rgba(197,160,89,0.5)]",
          "hover:-translate-y-0.5",
          "rounded-md btn-shimmer",
        ].join(" "),
        // Commercial button with glow effect
        heroOutline: [
          "relative",
          "border border-white/20 bg-transparent",
          "text-white font-medium tracking-wide uppercase text-xs",
          "shadow-[0_0_15px_rgba(255,255,255,0.05)]",
          "hover:border-white/40 hover:bg-white/5",
          "hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]",
          "hover:-translate-y-0.5",
          "backdrop-blur-sm rounded-md",
          "animate-glow-pulse",
        ].join(" "),
        subtle: "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground rounded-md",
        // Gold button variant
        gold: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 font-semibold rounded-md transition-all duration-300",
        // Elegant outline button
        elegant: "border border-primary/50 bg-transparent text-primary hover:bg-primary/10 hover:border-primary rounded-md transition-all duration-300",
        // Navy solid button
        navy: "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-md",
        // Gold outline button
        "gold-outline": "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-all duration-300",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };