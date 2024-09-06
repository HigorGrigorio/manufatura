'use client'

import {Row} from "@tanstack/react-table";
import {DropdownMenu} from "@/components/dropdown";
import {Button} from "@/components/button";
import {Copy, Eye, ListChecks, MoreHorizontal, X} from "lucide-react";
import {useToast} from "@/hooks/useToast.ts";
import {useOrdersLayoutContext} from "@/hooks/useOrdersLayoutContext.ts";
import {useRouter} from "next/navigation";
import {Order} from "@/lib/db.ts";

export type RenderActionsProps = {
    row: Row<Order>;
};

export const RenderCellActions = ({row}: RenderActionsProps) => {
    const order = row.original;
    const {toast} = useToast()
    const router = useRouter()
    const layoutContext = useOrdersLayoutContext();

    const canProduce = order.status === 'pending';
    const canFinish = order.status === 'producing';

    const handleProduceOrder = () => fetch(`/api/orders/${order.id}/produce`, {method: 'POST'})
        .then((res) => {
            if (res.ok) {
                toast({
                    title: 'Ordem aprovada',
                    description: 'A ordem está em produção',
                    actions: [
                        {
                            type: 'link',
                            altText: 'Atualizar',
                            label: 'Atualizar',
                            executor: () => router.push('/orders?_refresh=' + Date.now()),
                        },
                    ],
                })
            } else {
                toast({
                    title: 'Erro',
                    description: 'Falha ao aprovar a ordem',
                    variant: 'destructive',
                    actions: [
                        {
                            type: 'link',
                            altText: 'Tentar novamente',
                            label: 'Tentar novamente',
                            executor: handleProduceOrder,
                        },
                    ],
                });
            }
            router.push('/orders?_refresh=' + Date.now());
        })

    const handleFinishOrder = () => fetch(`/api/orders/${order.id}/finish`, {method: 'POST'})
        .then((res) => {
            if (res.ok) {
                toast({
                    title: 'Ordem finalizada',
                    description: 'A ordem produção da ordem foi finalizada.',
                    actions: [
                        {
                            type: 'link',
                            altText: 'Atualizar',
                            label: 'Atualizar',
                            executor: () => router.push('/orders?_refresh=' + Date.now()),
                        },
                    ],
                });
            } else {
                toast({
                    title: 'Erro',
                    description: 'Falha ao finalizar a ordem',
                    variant: 'destructive',
                    actions: [
                        {
                            type: 'link',
                            altText: 'Tentar novamente',
                            label: 'Tentar novamente',
                            executor: handleFinishOrder,
                        },
                    ],
                });
            }
            router.push('/orders?_refresh=' + Date.now());
        });

    const makeHandleView = (order: Order) => {
        return () =>
            layoutContext.setViewOrder(order);
    }

    return (
        <div className={'flex justify-end w-full'}>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <Button variant="ghost" size="icon-xs">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                    <DropdownMenu.Label>Ações</DropdownMenu.Label>
                    <DropdownMenu.Item
                        onClick={() =>
                            navigator.clipboard.writeText(order.id.toString()).then(
                                () => toast({
                                    title: 'Copiado',
                                    description: 'Numero da ordem copiado para a area de transferência.',
                                }),
                                () => toast({
                                    title: 'Erro',
                                    description: 'Falha ao copiar número da ordem',
                                    variant: 'destructive',
                                })
                            )
                        }
                    >
                        <Copy className={'pr-2'}/>
                        Copiar número da ordem
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator/>
                    <DropdownMenu.Item onClick={makeHandleView(order)}>
                        <Eye className={'pr-2'}/> Ver ordem
                    </DropdownMenu.Item>
                    {canProduce && <DropdownMenu.Item
                        onClick={handleProduceOrder}>
                        <ListChecks className={'pr-2'}/>
                        Produzir ordem
                    </DropdownMenu.Item>}
                    {canFinish && <DropdownMenu.Item
                        onClick={handleFinishOrder}>
                        <X className={'pr-2'}/>
                        Finalizar ordem
                    </DropdownMenu.Item>}
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    );
};
