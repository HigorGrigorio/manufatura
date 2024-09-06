import {Toaster} from '@/components/toast';
import React from 'react';
import {Navbar} from "@/context/navbar.tsx";

export type RootLayoutProps = React.PropsWithChildren<NonNullable<unknown>>;

export const RootLayout = ({children}: RootLayoutProps) => {
    return (
        <Navbar>
        <html lang="en">
        <body className="antialiased">
            {children}
        <Toaster/>
        </body>
        </html>
        </Navbar>
    );
};
