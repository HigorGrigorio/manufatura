import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils.ts';
import React from 'react';

export const spinnerVariants = cva(
    cn(
        'block relative box-border animate-spin animate-spin-slow',
        'after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-t-[transparent] after:border-r-[transparent] after:border-b-[transparent] after:border-l-gray-200 after:rounded-full',
        'before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full'
    ),
    {
        variants: {
            size: {
                default:
                    'w-[16px] h-[16px] after:border-[2px] before:border-[2px]',
                sm: 'w-[12px] h-[12px] after:border-[2px] before:border-[2px]',
                lg: 'w-[24px] h-[24px] after:border-[3px] before:border-[3px]',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

export type SinnerVariant = VariantProps<typeof spinnerVariants>;

export interface SpinnerProps extends SinnerVariant {
    color?: string;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ color, ...props }, ref) => {
        return <span className={cn(spinnerVariants(props), color)} ref={ref} />;
    }
);
