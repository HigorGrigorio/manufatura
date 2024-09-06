import React from 'react';
import {cn} from '@/lib/utils.ts';

export type SidebarBodyProps = React.ComponentPropsWithoutRef<'div'>;

export const SidebarBody = React.forwardRef<HTMLDivElement, SidebarBodyProps>(
    ({children, className, ...props}, ref) => {
        return (
            <div
                className={cn(
                    'flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8',
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    }
);
SidebarBody.displayName = 'SidebarBody';
