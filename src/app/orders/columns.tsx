import {ColumnDef} from "@tanstack/react-table";
import {RenderCellActions} from "@/app/orders/components/render-cell-actions.tsx";
import {StatusBadge} from "@/app/orders/components/status-badge.tsx";
import {Order} from "@/lib/db";

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: 'id',
        header: 'Numero de Ordem',
    },
    {
        accessorKey: 'type.name',
        header: 'Produto',
    },
    {
        accessorKey: 'quantity',
        header: 'Quantidade',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: StatusBadge
    },
    {
        enableHiding: false,
        header: ' ',
        cell: RenderCellActions,
    },
]
