'use client';

import React from 'react';
import {cn} from '@/lib/utils.ts';
import {useNavbar} from '@/hooks/useNavbar';
import {Portal, Root} from '@radix-ui/react-portal';
import {XIcon} from 'lucide-react';

export type SidebarRootProps = React.ComponentPropsWithoutRef<'div'>;

export const SidebarRoot = React.forwardRef<HTMLDivElement, SidebarRootProps>(
    ({children, className, ...props}, ref) => {
        const navbar = useNavbar();
        return (
            <>
                <div className="fixed inset-y-0 left-0 w-64 max-lg:hidden">
                    <nav
                        ref={ref}
                        className={cn(
                            'flex h-full min-h-0 flex-col',
                            className
                        )}
                        {...props}
                    >
                        {children}
                    </nav>
                </div>
                <Root>
                    {navbar.isOpen && (
                        <Portal className="lg:hidden">
                            <div
                                className="fixed inset-0 bg-black/30 transition data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                                {...(!navbar.isOpen
                                    ? {'data-closed': ''}
                                    : {})}
                                {...(!navbar.isOpen
                                    ? {'data-leave': ''}
                                    : {})}
                                {...(navbar.isOpen ? {'data-enter': ''} : {})}
                            ></div>
                            <div
                                className="fixed inset-y-0 w-full sm:max-w-80 p-2 transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                                {...(!navbar.isOpen
                                    ? {'data-closed': ''}
                                    : {})}
                            >
                                <div
                                    className="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
                                    <div className="-mb-3 px-4 pt-3">
                                        <span
                                            className="relative"
                                            onClick={() => navbar.close()}
                                        >
                                            <button aria-label="Fechar navegação">
                                                <XIcon className="w-[18px] h-[18px]"/>
                                            </button>
                                        </span>
                                    </div>
                                    <nav className="flex h-full min-h-0 flex-col">
                                        {children}
                                    </nav>
                                </div>
                            </div>
                        </Portal>
                    )}
                </Root>
            </>
        );
    }
);
SidebarRoot.displayName = 'SidebarRoot';
