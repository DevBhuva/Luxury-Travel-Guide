import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[linear-gradient(135deg,var(--champagne),var(--gold-primary),var(--gold-dark))] text-[#0B0B0D] shadow-[0_20px_50px_var(--shadow-gold)] hover:scale-[1.02] hover:bg-[linear-gradient(135deg,var(--gold-primary),var(--gold-dark),var(--gold-dark))]',
        destructive:
          'bg-danger text-white shadow-sm border-danger',
        outline:
          'border border-white/20 bg-transparent text-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:border-white/50 hover:bg-white/5',
        secondary:
          'border bg-surface text-foreground border border-border hover:border-[var(--border-gold)]',
        ghost: 'border border-transparent hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-[38px] py-[18px] text-[15px]',
        sm: 'min-h-8 px-4 text-xs',
        lg: 'min-h-12 px-10 text-base',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };