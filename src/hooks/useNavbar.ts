'use client';

import { useContext } from 'react';
import {
    NavbarContext,
    NavbarContextProps,
} from '@/context/navbar.tsx';

export const useNavbar = (): NavbarContextProps => {
    const context = useContext(NavbarContext);

    if (!context)
        throw new Error('useNavbar must be used within a NavbarProvider');

    return context;
};
