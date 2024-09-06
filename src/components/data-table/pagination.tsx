import {ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon,} from "@radix-ui/react-icons"
import {Table} from "@tanstack/react-table"
import {Select} from "@/components/select";
import {Button} from "@/components/button";

interface DataTablePaginationProps<TData> {
    table: Table<TData>
}

export function DataTablePagination<TData>({
                                               table,
                                           }: DataTablePaginationProps<TData>) {
    return (
        <div className="flex items-center justify-end px-2 pt-5">
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <Select.Root
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value))
                        }}
                    >
                        <Select.Trigger className="h-8 w-[65px]">
                            <Select.Value placeholder={table.getState().pagination.pageSize}/>
                        </Select.Trigger>
                        <Select.Content side="top">
                            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                                <Select.Item key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Root>
                    <p className="text-sm font-medium">Linhas por página</p>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Pagina {table.getState().pagination.pageIndex + 1} de{" "}
                    {table.getPageCount()}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Ir para a primeira página</span>
                        <DoubleArrowLeftIcon className="h-4 w-4"/>
                    </Button>
                    <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Ir para a página anterior</span>
                        <ChevronLeftIcon className="h-4 w-4"/>
                    </Button>
                    <Button
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Ir para a próxima página</span>
                        <ChevronRightIcon className="h-4 w-4"/>
                    </Button>
                    <Button
                        variant="ghost"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Ir para a ultima página</span>
                        <DoubleArrowRightIcon className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
