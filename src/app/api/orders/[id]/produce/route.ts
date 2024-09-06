import {NextRequest} from "next/server";
import {updatePartialOrders} from "@/lib/db"
import {redirect} from "next/navigation";

type Params = {
    id: string;
};

export async function POST(request: NextRequest, {params}: { params: Params }) {
    const {id} = params;
    const updatedCount = await updatePartialOrders(id, {status: 'producing'});

    if (updatedCount === 0) {
        return {
            notFound: true
        }
    }

    redirect('/orders');
}
