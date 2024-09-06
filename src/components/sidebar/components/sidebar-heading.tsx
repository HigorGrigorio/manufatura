import React from 'react';
import { cn } from '@/lib/utils.ts';

export type SidebarHeadingProps =
    // React.ComponentPropsWithoutRef<HTMLHeadingElement>;
    React.ComponentPropsWithoutRef<'h3'> & {
        children: React.ReactNode;
        className?: string;
    };

export const SidebarHeading = React.forwardRef<
    HTMLHeadingElement,
    SidebarHeadingProps
>(({ children, className, ...props }, ref) => {
    return (
        <h3
            className={cn(
                'mb-1 px-2 text-xs/6 font-medium text-gray-500 dark:text-gray-400',
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </h3>
    );
});
SidebarHeading.displayName = 'SidebarHeading';
