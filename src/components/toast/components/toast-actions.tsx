import { ToasterAction } from '@/hooks/useToast.ts';
import { ToastAction } from '@/components/toast/components/toast-action.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { CaretDownIcon } from '@radix-ui/react-icons';
import {Button} from "@/components/button";

export type ActionsProps = {
    actions?: Array<ToasterAction>;
};

export const ToastActions = ({ actions }: ActionsProps) => {
    if (!actions || !Array.isArray(actions) || actions.length === 0) {
        return null;
    }

    return (
        <div
            className={
                'flex gap-2 justify-start items-end mt-4 w-full px-0 rounded-md'
            }
        >
            {actions.length <= 2 ? (
                actions.map((action) => (
                    <ToastAction
                        key={action.key}
                        variant={action.type}
                        altText={action.altText}
                        onClick={action.executor}
                    >
                        {action.renderer ? action.renderer() : action.label}
                    </ToastAction>
                ))
            ) : (
                <>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button size="xs">
                                Actions...
                                <CaretDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex items-start justify-start gap-1 flex-col p-2">
                                {actions
                                    .slice(0, actions.length - 1)
                                    .map((action) => (
                                        <ToastAction
                                            key={action.key}
                                            variant={action.type}
                                            altText={action.altText}
                                            onClick={action.executor}
                                        >
                                            {action.renderer
                                                ? action.renderer()
                                                : action.label}
                                        </ToastAction>
                                    ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    {actions.slice(-1).map((action) => (
                        <ToastAction
                            key={action.key}
                            variant={action.type}
                            altText={action.altText}
                            onClick={action.executor}
                        >
                            {action.renderer ? action.renderer() : action.label}
                        </ToastAction>
                    ))}
                </>
            )}
        </div>
    );
};
