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
          'bg-[linear-gradient(135deg,#D9C49A,#C8A96A,#B88A2F)] text-white shadow-[0_20px_50px_rgba(184,138,47,0.30)] hover:scale-[1.02] hover:bg-[linear-gradient(135deg,#C8A96A,#B88A2F,#9E7420)]',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm border-destructive-border',
        outline:
          'border border-[#E3D2A5] bg-transparent shadow-[0_10px_40px_rgba(0,0,0,0.05),_0_25px_80px_rgba(184,138,47,0.15)] hover:border-[#C8A96A] hover:text-[#C8A96A]',
        secondary:
          'border bg-[#F8F6F2] text-[#1A1A1A] border border-[#EAE6DF] hover:border-[#E3D2A5]',
        ghost: 'border border-transparent hover:text-[#C8A96A]',
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
