import React from 'react';
import {Navbar} from '@/components/navbar';
import {FileIcon, GearIcon, HomeIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import {Sidebar} from '@/components/sidebar';
import {Avatar} from '@/components/avatar';
import {RootLayout} from '@/layouts/root-layout.tsx';
import {DoorOpen, Inbox} from "lucide-react";
import {Button} from "@/components/button";

export type RootLayoutProps = React.PropsWithChildren<NonNullable<unknown>>;

export const MainLayout = ({children}: RootLayoutProps) => {
    const iconSize = 22;
    return (
        <RootLayout>
            <div
                className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-gray-100 dark:bg-gray-900 dark:lg:bg-gray-950">
                <Navbar.Root>
                    <Navbar.Spacer/>
                    <Navbar.Section>
                        <Navbar.Item href="/" aria-label="Search">
                            <MagnifyingGlassIcon/>
                        </Navbar.Item>
                        <Navbar.Item href="/" aria-label="Inbox">
                            <Inbox/>
                        </Navbar.Item>
                    </Navbar.Section>
                </Navbar.Root>
                <Sidebar.Root>
                    <Sidebar.Header>
                        <Sidebar.Section className="max-lg:hidden">
                            <Sidebar.Item href="/">
                                <MagnifyingGlassIcon
                                    width={iconSize}
                                    height={iconSize}
                                />
                                <Sidebar.Label>Busca</Sidebar.Label>
                            </Sidebar.Item>
                            <Sidebar.Item href="/">
                                <Inbox size={iconSize}/>
                                <Sidebar.Label>Caixa de entrada</Sidebar.Label>
                            </Sidebar.Item>
                        </Sidebar.Section>
                    </Sidebar.Header>
                    <Sidebar.Body>
                        <Sidebar.Section>
                            <Sidebar.Item href="/">
                                <HomeIcon width={iconSize} height={iconSize}/>
                                <Sidebar.Label>Home</Sidebar.Label>
                            </Sidebar.Item>
                            <Sidebar.Item href="/orders">
                                <FileIcon width={iconSize} height={iconSize}/>
                                <Sidebar.Label>Ordens</Sidebar.Label>
                            </Sidebar.Item>
                            {/* <Sidebar.Item to="/cashin">
                                <HiCog6Tooth
                                    width={iconSize}
                                    height={iconSize}/>
                                <Sidebar.Label>Cashin</Sidebar.Label>
                            </Sidebar.Item>
                            <Sidebar.Item to="/cashout">
                                <HiCog6Tooth
                                    width={iconSize}
                                    height={iconSize}/>
                                <Sidebar.Label>Cashout</Sidebar.Label>
                            </Sidebar.Item>
                            <Sidebar.Item to="/providers">
                                <HiCog6Tooth
                                    width={iconSize}
                                    height={iconSize}/>
                                <Sidebar.Label>Providers</Sidebar.Label>
                            </Sidebar.Item> */}
                        </Sidebar.Section>
                        <Sidebar.Spacer/>
                        <Sidebar.Section>
                            <Sidebar.Item href="/support">
                                <GearIcon width={iconSize} height={iconSize}/>
                                <Sidebar.Label>Configurações</Sidebar.Label>
                            </Sidebar.Item>
                        </Sidebar.Section>
                    </Sidebar.Body>
                    <Sidebar.Footer className="max-lg:hidden">
                        <span className="flex min-w-0 items-center gap-3">
                            <Avatar.Root rounded>
                                <Avatar.Image
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <Avatar.Fallback>GG</Avatar.Fallback>
                            </Avatar.Root>
                            <span className="min-w-0">
                                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                                    Higor Grigorio
                                </span>
                                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                                    higorgrigorio@dev.com
                                </span>
                            </span>
                            <span className="ml-auto flex-shrink-0">
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="!p-2 !rounded-full !hover:!bg-gray-100 !hover:!text-gray-900 dark:!hover:!bg-gray-800 dark:!hover:!text-gray-100"
                                >
                                    <DoorOpen size={iconSize}/>
                                </Button>
                            </span>
                        </span>
                    </Sidebar.Footer>
                </Sidebar.Root>
                <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
                    <div
                        className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-gray-950/5 dark:lg:bg-gray-900 dark:lg:ring-white/10">
                        {children}
                    </div>
                </main>
            </div>
        </RootLayout>
    );
};
