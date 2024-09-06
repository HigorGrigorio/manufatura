'use client';

import {Dialog} from "@/components/dialog";
import {Eye} from "lucide-react";
import {useOrdersLayoutContext} from "@/hooks/useOrdersLayoutContext.ts";

const statusMap = {
    pending: 'Em espera',
    producing: 'Em produção',
    finished: 'Concluída',
}

export const ViewOrderDialog = () => {
    const context = useOrdersLayoutContext();
    const isOpen = context.viewOrder !== null;

    const handleClose = () => {
        context.setViewOrder(null);
    }

    const onOpenChange = (open: boolean) => {
        if (!open) {
            handleClose();
        }
    }

    if (!context.viewOrder) {
        return null;
    }

    const formattedDate = (stringDate: string) => {
        const date = new Date(stringDate);
        const minutes = date.getUTCMinutes()

        if (minutes < 10) {
            return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:0${minutes}`;
        }

        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${minutes}`;
    }

    return <Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
        <Dialog.Content>
            <Dialog.Header>
                <Dialog.Title>
                    <span className="flex gap-2 pb-1 justify-start items-center">
                      <Eye/> Ver Ordem
                    </span>
                </Dialog.Title>
                <Dialog.Close/>
            </Dialog.Header>
            <div>
                <div>Nome do Produto: {context.viewOrder?.type.name}</div>
                <div>Quantidade: {context.viewOrder?.quantity}</div>
                <div>Status da Ordem: {statusMap[context.viewOrder!.status]}</div>
                <div>Criado em: {formattedDate(context.viewOrder?.createdAt)}</div>
                <div>Atualizado em: {formattedDate(context.viewOrder?.updatedAt)}</div>
            </div>
        </Dialog.Content>
    </Dialog.Root>
}
