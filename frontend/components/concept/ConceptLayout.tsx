'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

interface ConceptLayoutProps {
    children: React.ReactNode;
}

export function ConceptLayout({ children }: ConceptLayoutProps) {
    return (
        <div className="min-h-screen">
            <Header activeTab="concepts" />

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Button */}
                    <Link href="/concepts">
                        <Button variant="ghost" size="sm" className="mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            All Concepts
                        </Button>
                    </Link>

                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
}
