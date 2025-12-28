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
        <div className="flex justify-between items-center pt-8 border-t">
            {previous ? (
                <Link href={previous.href}>
                    <Button variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous: {previous.title}
                    </Button>
                </Link>
            ) : (
                <div></div>
            )}

            {next ? (
                <Link href={next.href}>
                    <Button>
                        Next: {next.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            ) : (
                <div></div>
            )}
        </div>
    );
}
