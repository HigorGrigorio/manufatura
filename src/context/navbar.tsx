'use client';

import React, { useState } from 'react';

export type NavbarContextProps = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const NavbarContext = React.createContext<NavbarContextProps | null>(
    null,
);

export type NavbarProviderProps = React.PropsWithChildren<NonNullable<unknown>>;

export const Navbar = ({ children }: NavbarProviderProps) => {
    const [isOpen, change] = useState(false);

    const open = () => !isOpen && change(true);
    const close = () => isOpen && change(false);

    return (
        <NavbarContext.Provider
            value={{
                isOpen,
                open,
                close,
            }}
        >
            {children}
        </NavbarContext.Provider>
    );
};
