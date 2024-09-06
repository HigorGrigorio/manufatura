import {NextResponse} from "next/server";
import {getOrders} from "@/lib/db";

export async function GET() {
    const data = await getOrders()
    return NextResponse.json(data)
}
