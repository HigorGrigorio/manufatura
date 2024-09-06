'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cn } from '@/lib/utils.ts';
import {buttonVariants, ButtonVariants} from "@/components/button/button.styles.tsx";

export interface ToastActionProps
    extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>,
        ButtonVariants {}

export const ToastAction = React.forwardRef<
    React.ElementRef<typeof ToastPrimitives.Action>,
    ToastActionProps
>(({ className, variant = 'default', ...props }, ref) => (
    <ToastPrimitives.Action
        ref={ref}
        className={cn(
            buttonVariants({
                size: 'xs',
                variant,
            } as ButtonVariants),
            className
        )}
        {...props}
    />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
