import React from 'react';
import { cn } from '@/lib/utils.ts';

export type SidebarFooterProps = React.ComponentPropsWithoutRef<'div'>;

export const SidebarFooter = React.forwardRef<
    HTMLDivElement,
    SidebarFooterProps
>(({ children, className, ...props }, ref) => {
    return (
        <div
            className={cn(
                'max-lg:hidden flex flex-col border-t border-gray-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5',
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});
SidebarFooter.displayName = 'SidebarFooter';
