'use client';

import { use, useEffect, useMemo, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Loader2 } from 'lucide-react';
import { fetchConceptBySlugFromSanity, fetchConceptsFromSanity } from '@/lib/sanity/api';
import {
    WhatItIsSection,
    AnalogySection,
    DiagramSection,
    HowItWorksSection,
    MisunderstandingSection,
    RealWorldExampleSection
} from '@/components/concept';
import { SiteLogo, SiteFooter } from '@/components/layout';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ConceptPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ConceptPage({ params }: ConceptPageProps) {
    const { slug } = use(params);
    const [sanityConcept, setSanityConcept] = useState<any | null>(null);
    const [allConcepts, setAllConcepts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const [conceptRes, allRes] = await Promise.all([
                fetchConceptBySlugFromSanity(slug),
                fetchConceptsFromSanity()
            ]);
            if (cancelled) return;
            setSanityConcept(conceptRes);
            if (allRes) setAllConcepts(allRes);
            setLoading(false);
        })();
        return () => {
            cancelled = true;
        };
    }, [slug]);

    const concept = sanityConcept;

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex overflow-hidden">
                {/* Left Sidebar Skeleton */}
                <aside className="hidden md:flex w-72 shrink-0 border-r border-gray-100 flex-col sticky top-0 h-screen p-8 space-y-8">
                    <Skeleton className="h-8 w-32 rounded-lg" />
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-40 rounded-md" />
                        <div className="space-y-3">
                            {[...Array(8)].map((_, i) => (
                                <Skeleton key={i} className="h-10 w-full rounded-xl" />
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content Skeleton */}
                <div className="flex-1 h-screen overflow-y-auto">
                    <main className="max-w-4xl mx-auto pt-16 pb-32 px-6 lg:px-12 space-y-12">
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-24 rounded-full" />
                            <Skeleton className="h-20 md:h-24 w-3/4 rounded-2xl" />
                        </div>

                        <div className="space-y-8 pt-8">
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-48 rounded-lg" />
                                <Skeleton className="h-32 w-full rounded-2xl" />
                            </div>
                            <div className="space-y-4">
                                <Skeleton className="h-8 w-64 rounded-lg" />
                                <Skeleton className="h-64 w-full rounded-3xl" />
                            </div>
                        </div>
                    </main>
                </div>

                {/* Right Sidebar Skeleton */}
                <aside className="hidden lg:flex w-64 shrink-0 border-l border-gray-100 bg-white flex-col sticky top-0 h-screen p-8 space-y-8">
                    <div className="space-y-6">
                        <Skeleton className="h-4 w-32 rounded-md" />
                        <div className="space-y-4">
                            <Skeleton className="h-20 w-full rounded-2xl" />
                            <Skeleton className="h-20 w-full rounded-2xl" />
                        </div>
                    </div>
                </aside>
            </div>
        );
    }

    if (!concept) {
        notFound();
    }

    const content = concept;

    if (!content) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">{slug}</h1>
                    <p className="text-xl text-gray-600">Coming soon!</p>
                </div>
            </div>
        );
    }

    const currentIndex = allConcepts.findIndex(c => c.slug === slug);
    const previousConcept = currentIndex > 0 ? allConcepts[currentIndex - 1] : null;
    const nextConcept = currentIndex < allConcepts.length - 1 && currentIndex !== -1 ? allConcepts[currentIndex + 1] : null;

    // Extract app name from description if it mentions a specific app
    const extractAppName = (description: string): string | undefined => {
        const appNames = ['Instagram', 'WhatsApp', 'Netflix', 'Twitter', 'Facebook', 'YouTube'];
        for (const app of appNames) {
            if (description.toLowerCase().includes(app.toLowerCase())) {
                return app;
            }
        }
        return undefined;
    };

    const appName = extractAppName(content.realWorld.description);

    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Left Sidebar: Concept Navigation */}
            <aside className="hidden md:flex w-72 shrink-0 border-r border-gray-100 flex-col sticky top-0 h-screen overflow-y-auto">
                {/* Logo Section */}
                <div className="p-8">
                    <SiteLogo size="sm" />
                </div>

                {/* Concept Navigation */}
                <div className="p-4 flex-1">
                    <div className="px-4 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-4">
                        System Design Concepts
                    </div>

                    {/* Groups by category */}
                    {Object.entries(
                        allConcepts.reduce((acc: any, c: any) => {
                            if (!acc[c.category]) acc[c.category] = [];
                            acc[c.category].push(c);
                            return acc;
                        }, {})
                    ).map(([category, items]: [string, any]) => (
                        <div key={category} className="mb-6">
                            <div className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                {category}
                            </div>
                            <nav className="space-y-1">
                                {items.map((c: any) => (
                                    <Link key={c.slug} href={`/concepts/${c.slug}`}>
                                        <span className={cn(
                                            "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all group",
                                            c.slug === slug
                                                ? "bg-white border-2 border-[#ff5941] text-gray-900 shadow-sm"
                                                : "text-gray-600 hover:bg-gray-100 border-2 border-transparent"
                                        )}>
                                            <div className={cn(
                                                "w-1.5 h-1.5 rounded-full",
                                                c.slug === slug ? "bg-[#ff5941]" : "bg-gray-300 group-hover:bg-gray-400"
                                            )} />
                                            <span className="truncate">{c.title}</span>
                                        </span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Main Scroll Content */}
            <div className="flex-1 h-screen overflow-y-auto relative scroll-smooth bg-white">
                <main className="max-w-4xl mx-auto pt-16 pb-32 px-6 lg:px-12">
                    {/* Mobile Navigation Header */}
                    <div className="md:hidden flex justify-between items-center mb-8">
                        <SiteLogo size="sm" />
                        <Link href="/concepts" className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-gray-700" />
                            <span className="text-sm font-medium text-gray-700">All Concepts</span>
                        </Link>
                    </div>

                    {/* Category Badge */}
                    <div className="inline-block mb-4 px-3 py-1 bg-[#ff5941]/10 text-[#ff5941] text-[10px] font-black uppercase tracking-widest rounded-full">
                        {concept.category}
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-16 tracking-tight leading-none italic">{concept.title}</h1>

                    {/* 1. What is it? */}
                    <WhatItIsSection content={content.whatItIs} />

                    {/* 2. Simple Analogy */}
                    <div className="mb-16 pb-16 border-b border-gray-100">
                        <AnalogySection
                            title={content.analogy.title}
                            items={content.analogy.items}
                            description={content.analogy.description}
                        />
                    </div>

                    {/* 3. Visual Flow */}
                    <div className="mb-16 pb-16 border-b border-gray-100">
                        {content.diagramImage ? (
                            <section className="mb-16">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-[#ff5941]/10 flex items-center justify-center text-[#ff5941] text-sm font-bold">
                                        3
                                    </span>
                                    Visual Flow
                                </h2>
                                <div className="bg-gray-50 rounded-[2.5rem] border border-gray-100 p-8 md:p-12">
                                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-white shadow-sm bg-white">
                                        <Image
                                            src={content.diagramImage}
                                            alt={`${concept.title} diagram`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <div className="bg-gray-50 rounded-[2.5rem] border border-gray-100 p-8 md:p-12">
                                <DiagramSection nodes={content.diagram} />
                            </div>
                        )}
                    </div>

                    {/* 4. How It Works */}
                    <div className="mb-16 pb-16 border-b border-gray-100">
                        <HowItWorksSection steps={content.howItWorks} />
                    </div>

                    {/* 5. Common Misunderstanding */}
                    <div className="mb-16 pb-16 border-b border-gray-100">
                        <MisunderstandingSection
                            wrong={content.misunderstanding.wrong}
                            correct={content.misunderstanding.correct}
                        />
                    </div>

                    {/* Real World Example */}
                    <RealWorldExampleSection
                        title={content.realWorld.title}
                        description={content.realWorld.description}
                        points={content.realWorld.points}
                        appName={appName}
                    />

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-16 mt-16 border-t border-gray-100">
                        {previousConcept ? (
                            <Link href={`/concepts/${previousConcept.slug}`} className="group flex flex-col gap-2 w-full sm:w-auto">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Previous</span>
                                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-3xl transition-all border border-gray-100">
                                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-[#ff5941] transition-colors" />
                                    <span className="font-bold text-gray-900">{previousConcept.title}</span>
                                </div>
                            </Link>
                        ) : (
                            <div className="hidden sm:block" />
                        )}
                        {nextConcept ? (
                            <Link href={`/concepts/${nextConcept.slug}`} className="group flex flex-col items-end gap-2 w-full sm:w-auto">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pr-1">Next Concept</span>
                                <div className="flex items-center gap-3 px-6 py-4 bg-gray-900 hover:bg-black text-white rounded-3xl transition-all shadow-xl hover:-translate-y-1">
                                    <span className="font-bold">{nextConcept.title}</span>
                                    <ArrowLeft className="w-4 h-4 rotate-180" />
                                </div>
                            </Link>
                        ) : (
                            <div className="hidden sm:block" />
                        )}
                    </div>

                    <SiteFooter />
                </main>
            </div>

            {/* Right Sidebar: Quick Actions */}
            <aside className="hidden lg:flex w-64 shrink-0 border-l border-gray-100 bg-white flex-col sticky top-0 h-screen p-8">
                <div className="space-y-8">
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                            Concept Details
                        </div>
                        <nav className="space-y-4">
                            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Difficulty</div>
                                <div className={cn(
                                    "text-sm font-black italic",
                                    concept.difficulty === "Beginner" && "text-green-600",
                                    concept.difficulty === "Intermediate" && "text-orange-500",
                                    concept.difficulty === "Advanced" && "text-red-600"
                                )}>
                                    {concept.difficulty}
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Time to Read</div>
                                <div className="text-sm font-black italic text-gray-900">{concept.readTime}</div>
                            </div>
                        </nav>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <Link href="/concepts" className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#ff5941] transition-all group">
                            <span className="group-hover:-translate-x-1 transition-transform">←</span>
                            Back to All Concepts
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    );
}
