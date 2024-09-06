import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
    'inline-flex shadow items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-solutia-light border text-white hover:bg-solutia-mid shadow-sm dark:bg-blend-darken',
                destructive:
                    'bg-danger-base text-white shadow-sm hover:bg-danger-light',
                success: 'bg-success-base text-white hover:bg-success-light',
                warning: 'bg-warning-base text-white hover:bg-warning-light',
                info: 'bg-info-base hover:bg-info-light text-white',
                outline:
                    'border border-input bg-background text-black shadow-sm hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary shadow-sm text-black hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground text-black',
                link: 'text-primary underline-offset-4 shadow-none hover:underline hover:text-solutia-light',
                disabled: 'bg-disabled text-disabled dark:text-disabled',
            },
            size: {
                default: 'h-9 px-4 py-2',
                xs: 'h-6 px-2 text-[11px]',
                sm: 'h-8 px-3 text-xs',
                lg: 'h-10 px-8',
                icon: 'h-8 w-8',
                'icon-xs': 'h-6 w-6',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
