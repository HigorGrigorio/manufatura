'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {cn} from '@/lib/utils.ts';
import {useRouter} from "next/navigation";

export const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    redirectTo?: string;
}
>(({className, inset, redirectTo, ...props}, ref) => {
    const router = useRouter();

    const onClick = async () => {
        if (redirectTo) {
            await router.push(redirectTo);
        }
    };

    return (
        <DropdownMenuPrimitive.Item
            ref={ref}
            className={cn(
                'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                inset && 'pl-8',
                className
            )}
            onClick={onClick}
            {...props}
        />
    );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
