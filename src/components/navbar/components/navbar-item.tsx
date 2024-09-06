import React from 'react';
import { cn } from '@/lib/utils.ts';
import Link from "next/link";

export type NavbarItem = React.ComponentProps<typeof Link>;

export const NavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItem>(
    ({ children, className, ...props }, ref) => {
        return (
            <span className="relative">
                <Link
                    ref={ref}
                    className={cn(
                        'relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-gray-950 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-gray-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:[&:not(:nth-child(2))]:*:ml-auto data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-5 sm:data-[slot=icon]:last:[&:not(:nth-child(2))]:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--avatar-radius:theme(borderRadius.DEFAULT)] data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-gray-950/5 data-[slot=icon]:*:data-[hover]:fill-gray-950 data-[active]:bg-gray-950/5 data-[slot=icon]:*:data-[active]:fill-gray-950 dark:text-white dark:data-[slot=icon]:*:fill-gray-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white',
                        className
                    )}
                    {...props}
                >
                    {children}
                </Link>
            </span>
        );
    }
);
NavbarItem.displayName = 'Navbar.Item';
