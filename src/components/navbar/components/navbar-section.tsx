import React from 'react';
import { cn } from '@/lib/utils.ts';

export type NavbarSectionProps = React.ComponentPropsWithoutRef<'div'>;

export const NavbarSection = React.forwardRef<
    HTMLDivElement,
    NavbarSectionProps
>(({ children, className, ...props }, ref) => {
    return (
        <div
            className={cn('flex items-center gap-3', className)}
            {...props}
            ref={ref}
        >
            {children}
        </div>
    );
});
NavbarSection.displayName = 'Navbar.Section';
