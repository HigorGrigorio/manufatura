'use client';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState
} from "@tanstack/react-table";
import {Table} from "@/components/table";
import React from "react";
import {DropdownMenu} from "@/components/dropdown";
import {Button} from "@/components/button";
import {DataTablePagination} from "@/components/data-table/pagination";
import {Spinner} from "@/components/spinner/spinner";
import {MixerHorizontalIcon} from "@radix-ui/react-icons";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>(
    {
        columns,
        data,
    }: DataTableProps<TData, TValue>
) {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})

    const table = useReactTable<TData>({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnVisibility,
        },
    });

    return (
        <div className="w-full">
            <div className="rounded-md border">
                <div
                    className="flex w-full items-center lg:justify-between p-2 gap-2 overflow-auto scroll-auto">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <Button variant='outline'>
                                <span className="text-xs">Mostrar</span>
                                <MixerHorizontalIcon className="w-4 h-4 ml-2"/>
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align="end">
                            {table
                                .getAllColumns()
                                .filter(
                                    (column) => column.getCanHide()
                                )
                                .map((column) => {
                                    return (
                                        <DropdownMenu.CheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(value)
                                            }
                                        >
                                            {typeof column.columnDef!.header === 'string' ? column.columnDef!.header : column.columnDef!.id}
                                        </DropdownMenu.CheckboxItem>
                                    )
                                })}
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                    <DataTablePagination table={table}/>
                </div>
                <Table.Root>
                    <Table.Header>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Table.Row key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <Table.Head key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </Table.Head>
                                    )
                                })}
                            </Table.Row>
                        ))}
                    </Table.Header>
                    <Table.Body>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <Table.Row
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <Table.Cell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </Table.Cell>
                                    ))}
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={columns.length} className="h-24 text-center">
                                    <Spinner/>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table.Root>
            </div>
        </div>
    )
}
