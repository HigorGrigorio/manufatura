import React from 'react';
import { cn } from '@/lib/utils.ts';

export type SidebarHeaderProps = React.ComponentPropsWithoutRef<'div'>;

export const SidebarHeader = React.forwardRef<
    HTMLDivElement,
    SidebarHeaderProps
>(({ children, className, ...props }, ref) => {
    return (
        <div
            className={cn(
                'flex flex-col border-b border-gray-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5',
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});
SidebarHeader.displayName = 'SidebarHeader';
