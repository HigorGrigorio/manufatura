'use client'

import {DataTable} from "@/components/data-table";
import {columns} from "@/app/orders/columns";
import {ViewOrderDialog} from "@/app/orders/components/view-order-dialog.tsx";
import {useEffect, useState} from "react";
import {Spinner} from "@/components/spinner/spinner.tsx";
import {useSearchParams} from "next/navigation";

const Loading = () => <div className={"flex justify-center items-center w-full h-full flex-col gap-2"}>
    <span className={"text-gray-500"}>Loading Orders...</span>
    <Spinner size="lg"/>
</div>

export default function Page() {
    const [data, setData] = useState(null)
    const params = useSearchParams()
    const _refresh = params.get('_refresh')

    useEffect(() => {
        console.log(_refresh)

        async function fetchOrders() {
            const res = await fetch('/api/orders')
            const data = await res.json()
            setData(data)
        }

        fetchOrders()
    }, [_refresh])

    if (!data) return <Loading/>

    return <div className="p-2">
        <ViewOrderDialog/>
        <DataTable columns={columns} data={data}/>
    </div>
}
