import { cva, VariantProps } from 'class-variance-authority';

export type ToastRootVariants = VariantProps<typeof toastRootVariants>;

export const toastRootVariants = cva(
    'group rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-50 border border-gray-100 pointer-events-auto relative w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    {
        variants: {
            variant: {
                default:
                    'border bg-white text-black dark:bg-gray-800 dark:text-white',
                destructive:
                    'danger-base group border-danger-base bg-danger-base text-destructive-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);
