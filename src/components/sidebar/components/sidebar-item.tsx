'use client';

import React from 'react';
import { cn } from '@/lib/utils.ts';
import {usePathname} from "next/navigation";
import Link from "next/link";

export type SidebarItemProps = React.ComponentPropsWithoutRef<typeof Link>;

export const SidebarItem = React.forwardRef<
    HTMLAnchorElement,
    SidebarItemProps
>(({ children, href, className, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <span className="relative">
            {isActive && (
                <span className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-solutia-light transform-none transform translate-x-1/2 translate-y-1/2"></span>
            )}
            <Link
                className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-gray-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-gray-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 hover:bg-gray-950/5 hover:fill-gray-950 active:bg-gray-950/5 active:fill-gray-950 data-[current=true]:fill-gray-950 dark:text-white dark:data-[slot=icon]:*:fill-gray-400 dark:hover:bg-white/5 dark:hover:fill-white dark:active:bg-white/5 dark:active:fill-white dark:data-[current=true]:fill-white',
                    className
                )}
                type="button"
                ref={ref}
                href={href}
                data-current={isActive ? 'true' : 'false'}
                {...props}
            >
                {children}
            </Link>
        </span>
    );
});
SidebarItem.displayName = 'SidebarItem';
