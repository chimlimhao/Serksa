'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, MenuIcon, SearchIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CommandItem, SearchModal } from '@/components/ui/search-modal';
import { webDevConcepts } from '@/lib/concepts-data';

export function SerksaHeader() {
    const [open, setOpen] = React.useState(false);

    const links = [
        {
            label: 'Learning Path',
            href: '/learn',
        },
        {
            label: 'All Concepts',
            href: '/concepts',
        },
        {
            label: 'About',
            href: '/about',
        },
    ];

    // Convert concepts to search data
    const searchData: CommandItem[] = webDevConcepts.map((concept) => ({
        id: concept.slug,
        title: concept.title,
        description: concept.description,
        category: concept.category,
    }));

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full border-b backdrop-blur-lg',
                'bg-white/80 supports-[backdrop-filter]:bg-white/60',
                'border-gray-200',
            )}
        >
            <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
                <Link href="/" className="hover:bg-gray-100 flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 duration-100">
                    <BookOpen className="size-5 text-gray-900" />
                    <p className="font-semibold text-lg text-gray-900">Serksa</p>
                </Link>
                <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-1 lg:flex">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                className={buttonVariants({ variant: 'ghost' })}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <SearchModal data={searchData}>
                        <Button
                            variant="outline"
                            className="relative size-9 cursor-pointer p-0 rounded-full md:border xl:h-10 xl:w-64 xl:justify-between xl:px-4 xl:py-2 xl:rounded-full border-gray-300 hover:bg-gray-100"
                        >
                            <span className="hidden xl:inline-flex text-gray-600">Search concepts...</span>
                            <span className="sr-only">Search</span>
                            <SearchIcon className="size-4 text-gray-600" />
                        </Button>
                    </SearchModal>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setOpen(!open)}
                            className="lg:hidden rounded-full border-gray-300 hover:bg-gray-100"
                        >
                            <MenuIcon className="size-4 text-gray-900" />
                        </Button>
                        <SheetContent
                            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                            showClose={false}
                            side="left"
                        >
                            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                                {links.map((link, i) => (
                                    <Link
                                        key={i}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start',
                                        })}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <SheetFooter>
                                <Link href="/support" className="w-full">
                                    <Button variant="outline" className="w-full">Support Us</Button>
                                </Link>
                                <Link href="/suggest" className="w-full">
                                    <Button className="w-full">Suggest Topic</Button>
                                </Link>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
