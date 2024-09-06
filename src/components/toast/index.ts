import * as React from 'react';
import {
    ToastAction,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastRoot,
    ToastRootProps,
    ToastTitle,
    ToastViewport,
} from './components';
import { Toaster } from './toaster.tsx';

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export { type ToastRootProps, type ToastActionElement };

export const Toast = {
    Provider: ToastProvider,
    Viewport: ToastViewport,
    Root: ToastRoot,
    Title: ToastTitle,
    Description: ToastDescription,
    Close: ToastClose,
    Action: ToastAction,
};

export { Toaster };
