import React from 'react';
export type SidebarSpacerProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarSpacer = React.forwardRef<
    HTMLDivElement,
    SidebarSpacerProps
>((props, ref) => {
    return (
        <div
            className="mt-8 flex-1"
            data-slot="section"
            ref={ref}
            {...props}
        ></div>
    );
});
