import React from "react";
import {OrdersContextProvider} from "@/context/orders.tsx";

export default function Layout({children}: React.PropsWithChildren<NonNullable<unknown>>) {

    return (
        <OrdersContextProvider>
            {children}
        </OrdersContextProvider>
    );
}
