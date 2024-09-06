import React from 'react';
import { cn } from '@/lib/utils.ts';
import { NavbarHamburger } from '@/components/navbar/components/navbar-hamburger.tsx';

export type NavbarRootProps = React.ComponentPropsWithoutRef<'div'>;

export const NavbarRoot = React.forwardRef<HTMLDivElement, NavbarRootProps>(
    ({ children, className, ...props }: NavbarRootProps, ref) => {
        return (
            <header className="flex items-center px-4 lg:hidden">
                <div className="py-2.5">
                    <NavbarHamburger />
                </div>
                <div className="min-w-0 flex-1">
                    <nav
                        className={cn(
                            [
                                'flex',
                                'flex-1',
                                'items-center',
                                'gap-4',
                                'py-2.5',
                            ],
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        {children}
                    </nav>
                </div>
            </header>
        );
    }
);
NavbarRoot.displayName = 'Navbar.Root';
