'use client';

import React from "react";
import {Order} from "@/lib/db.ts";

type LayoutContextProps = {
    viewOrder: Order | null;
    setViewOrder: (data: Order | null) => void;
}

const OrdersContext = React.createContext<LayoutContextProps | null>(null);

const OrdersContextProvider = (
    {children}: React.PropsWithChildren<NonNullable<unknown>>
) => {
    const [viewOrder, setViewOrder] = React.useState<Order | null>(null);
    console.log(viewOrder);
    return (
        <OrdersContext.Provider value={{viewOrder, setViewOrder}}>
            {children}
        </OrdersContext.Provider>
    );
}

export {OrdersContext, OrdersContextProvider};

