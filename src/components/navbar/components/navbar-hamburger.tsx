'use client'
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useNavbar } from '@/hooks/useNavbar';
import {Button} from "@/components/button";

export const NavbarHamburger = () => {
    const navbar = useNavbar();

    const handleClick = () => navbar.open();

    return (
        <span className="relative" onClick={handleClick}>
            <Button variant="outline" size="icon-xs" className="p-1" asChild>
                <HamburgerMenuIcon className="h-[18px] w-[18px]" />
            </Button>
        </span>
    );
};
