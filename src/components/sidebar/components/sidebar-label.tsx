import React from 'react';
import { cn } from '@/lib/utils.ts';

export type SidebarLabelProps = React.ComponentPropsWithoutRef<'div'>;

export const SidebarLabel = React.forwardRef<
    HTMLSpanElement,
    SidebarLabelProps
>(({ children, className, ...props }, ref) => {
    return (
        <span
            className={cn('truncate font-medium', className)}
            {...props}
            ref={ref}
        >
            {children}
        </span>
    );
});
SidebarLabel.displayName = 'SidebarLabel';
