'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

import {cn} from '@/lib/utils.ts';
import {ToastRootVariants, toastRootVariants,} from '@/components/toast/components/toast/toast-root.styles.tsx';

export type ToastRootProps = React.ComponentPropsWithRef<
    typeof ToastPrimitives.Root
> &
    ToastRootVariants;

// export type ToastRootProps =
// React.ComponentPropsWithoutRef<ToastPrimitives.ToastProps> &
//     ToastRootVariants;

export const ToastRoot = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Root>,
    ToastRootProps
>(({className, variant, children, ...props}, ref) => {
    return (
        <ToastPrimitives.Root
            ref={ref}
            className={cn(toastRootVariants({variant}), className)}
            {...props}
        >
            {children}
        </ToastPrimitives.Root>
    );
});
ToastRoot.displayName = ToastPrimitives.Root.displayName;
