'use client';

import {Row} from "@tanstack/react-table";
import {Order} from "@/lib/db";
import {Badge} from "@/components/badge";

export type StatusBadgeProps = {
    row: Row<Order>;
};

const variantStatusMap = {
    producing: 'warning',
    finished: 'success',
    pending: 'destructive',
}

const statusMap = {
    pending: 'Em espera',
    producing: 'Em produção',
    finished: 'Concluída',
}

export const StatusBadge = ({row}: StatusBadgeProps) => {
    const order = row.original;
    const variant = variantStatusMap[order.status] as 'warning' | 'success' | 'destructive';

    return (
        <Badge variant={variant}>{statusMap[order.status]}</Badge>
    );
}
