/**
 * @file useOrdersLayoutContext.ts
 *
 * @changelog
 *  - 2024-09-05
 *    - Create useOrdersLayoutContext.ts.
 */

import React from "react";
import {OrdersContext} from "@/context/orders.tsx";

export function useOrdersLayoutContext() {
    const context = React.useContext(OrdersContext);
    if (!context) {
        throw new Error('useOrdersLayoutContext must be used within a OrdersContextProvider');
    }
    return context;
}
