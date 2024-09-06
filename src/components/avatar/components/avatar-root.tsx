import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils.ts';
import { cva, VariantProps } from 'class-variance-authority';

const avatarRootVariants = cva('relative flex  shrink-0 overflow-hidden', {
    variants: {
        rounded: {
            default: 'rounded-sm',
            true: 'rounded-full',
        },
        size: {
            default: 'h-10 w-10',
            sm: 'h-8 w-8',
            lg: 'h-12 w-12',
        },
        bordered: {
            true: 'border-2',
            false: 'border-0',
        },
        color: {
            default: 'border-solutia-light',
            destructive: 'border-danger-light',
            success: 'border-success-light',
            new: 'border-new-light',
        },
    },
    defaultVariants: {
        rounded: false,
        size: 'default',
        bordered: true,
        color: 'default',
    },
});

export const AvatarRoot = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
        VariantProps<typeof avatarRootVariants>
    // >(({ className, variant, size, rounded, bordered, color, ...props }, ref) => (
>(({ className, size, rounded, bordered, color, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            avatarRootVariants({
                className,
                // variant,
                size,
                rounded,
                bordered,
                color,
            }),
            className
        )}
        {...props}
    />
));

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;
