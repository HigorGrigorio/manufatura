'use client';

import { DialogClose } from './dialog-close.tsx';
import { DialogContent } from './dialog-content.tsx';
import { DialogDescription } from './dialog-description.tsx';
import { DialogFooter } from './dialog-footer.tsx';
import { DialogHeader } from './dialog-header.tsx';
import { DialogOverlay } from './dialog-overlay.tsx';
import { DialogPortal } from './dialog-portal.tsx';
import { DialogRoot } from './dialog-root.tsx';
import { DialogTitle } from './dialog-title.tsx';
import { DialogTrigger } from './dialog-trigger.tsx';

export const Dialog = {
    Close: DialogClose,
    Content: DialogContent,
    Description: DialogDescription,
    Footer: DialogFooter,
    Header: DialogHeader,
    Overlay: DialogOverlay,
    Portal: DialogPortal,
    Root: DialogRoot,
    Title: DialogTitle,
    Trigger: DialogTrigger,
};
