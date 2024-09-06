import React from 'react';
import { cn } from '@/lib/utils.ts';

export type SidebarSectionProps = React.ComponentPropsWithoutRef<'div'>;

export const SidebarSection = React.forwardRef<
    HTMLDivElement,
    SidebarSectionProps
>(({ children, className, ...props }, ref) => {
    return (
        <div
            className={cn('flex flex-col gap-0.5', className)}
            data-slot="section"
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
});
