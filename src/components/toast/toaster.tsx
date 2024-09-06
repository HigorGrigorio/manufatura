'use client';

import {
    ToastActions,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastRoot,
    ToastTitle,
    ToastViewport,
} from './components';
import { useToast } from '@/hooks/useToast.ts';

export function Toaster() {
    const { toasts } = useToast();
    console.log(toasts);
    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                actions,
                ...props
            }) {
                return (
                    <ToastRoot key={id} {...props}>
                        <div className="flex flex-col justify-start align-start">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription>
                                    {description}
                                </ToastDescription>
                            )}
                            <ToastActions actions={actions} />
                        </div>
                        <ToastClose />
                    </ToastRoot>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
