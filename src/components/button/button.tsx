import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { ButtonVariants, buttonVariants } from './button.styles.tsx';
import { cn } from '../../../../freelas/tom/adm.gateway/src/lib/utils.ts';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonVariants {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(
                    !asChild && buttonVariants({ variant, size, className })
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button };