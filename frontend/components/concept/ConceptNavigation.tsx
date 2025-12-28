'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationLink {
    href: string;
    title: string;
}

interface ConceptNavigationProps {
    previous?: NavigationLink;
    next?: NavigationLink;
}

export function ConceptNavigation({ previous, next }: ConceptNavigationProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-8 border-t">
            {previous ? (
                <Link href={previous.href} className="flex-1 sm:flex-initial">
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-4"
                    >
                        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                        <span className="truncate">
                            <span className="hidden sm:inline">Previous: </span>
                            {previous.title}
                        </span>
                    </Button>
                </Link>
            ) : (
                <div className="flex-1 sm:flex-initial"></div>
            )}

            {next ? (
                <Link href={next.href} className="flex-1 sm:flex-initial">
                    <Button
                        size="sm"
                        className="w-full sm:w-auto text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-4"
                    >
                        <span className="truncate">
                            <span className="hidden sm:inline">Next: </span>
                            {next.title}
                        </span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 flex-shrink-0" />
                    </Button>
                </Link>
            ) : (
                <div className="flex-1 sm:flex-initial"></div>
            )}
        </div>
    );
}
