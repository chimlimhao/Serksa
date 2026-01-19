'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { SiteFooter } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPageBySlug } from "@/lib/sanity/api";
import { SanityPage } from "@/lib/sanity/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AboutPage() {
    const [page, setPage] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await fetchPageBySlug('about');
            if (data) setPage(data);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <main className="pt-32 pb-32 px-6 max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <Skeleton className="h-6 w-24 rounded-full" />
                        <Skeleton className="h-20 md:h-24 w-1/2 rounded-2xl" />
                        <div className="pl-8 border-l-4 border-gray-100">
                            <Skeleton className="h-10 w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="space-y-8 pt-12">
                        <div className="space-y-4">
                            <Skeleton className="h-6 w-32 rounded-md" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full rounded-md" />
                                <Skeleton className="h-4 w-full rounded-md" />
                                <Skeleton className="h-4 w-2/3 rounded-md" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Skeleton className="h-40 w-full rounded-3xl" />
                            <Skeleton className="h-40 w-full rounded-3xl" />
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    if (!page) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
                <Link href="/" className="text-[#ff5941] hover:underline">Go back home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="fixed top-6 right-6 z-50">
                <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full hover:border-gray-300 transition-colors shadow-sm">
                    <ArrowLeft className="w-4 h-4 text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">Home</span>
                </Link>
            </div>

            <main className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
                {page.blocks?.map((block: any) => {
                    switch (block._type) {
                        case 'hero':
                            return (
                                <section key={block._key} className="mb-24">
                                    {block.badge && (
                                        <div className="inline-block px-3 py-1 bg-[#ff5941]/10 text-[#ff5941] text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                                            {block.badge}
                                        </div>
                                    )}
                                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight italic">
                                        {block.title}
                                    </h1>
                                    {block.subtitle && (
                                        <p className="text-2xl md:text-3xl text-gray-500 font-medium leading-relaxed border-l-4 border-gray-100 pl-8 italic">
                                            {block.subtitle}
                                        </p>
                                    )}
                                </section>
                            );

                        case 'contentSection':
                            return (
                                <section key={block._key} className="mb-20 pb-20 border-b border-gray-100 last:border-0">
                                    {block.heading && (
                                        <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight uppercase text-[12px] text-gray-400 tracking-[0.2em]">
                                            {block.heading}
                                        </h2>
                                    )}
                                    <div className="prose prose-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900 max-w-none">
                                        <PortableText value={block.body} />
                                    </div>
                                </section>
                            );

                        case 'gridSection':
                            return (
                                <section key={block._key} className="mb-20 pb-20 border-b border-gray-100 last:border-0">
                                    {block.heading && (
                                        <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight uppercase text-[12px] text-gray-400 tracking-[0.2em]">
                                            {block.heading}
                                        </h2>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {block.items?.map((item: any) => (
                                            <div key={item._key} className={cn(
                                                "p-8 rounded-[2rem] border transition-all hover:shadow-xl group",
                                                item.variant === 'highlight' ? "bg-gray-50 border-gray-100 hover:border-[#ff5941]" : "bg-white border-gray-100"
                                            )}>
                                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                                <p className="text-gray-500 leading-relaxed mb-6">{item.description}</p>
                                                {item.buttonText && (
                                                    <Link href={item.buttonLink || '#'}>
                                                        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#ff5941] hover:gap-3 transition-all">
                                                            {item.buttonText} <ChevronRight className="w-4 h-4" />
                                                        </span>
                                                    </Link>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );

                        case 'infoList':
                            return (
                                <section key={block._key} className="mb-20 pb-20 border-b border-gray-100 last:border-0">
                                    {block.heading && (
                                        <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight uppercase text-[12px] text-gray-400 tracking-[0.2em]">
                                            {block.heading}
                                        </h2>
                                    )}
                                    <div className="space-y-4">
                                        {block.items?.map((item: any) => (
                                            <div key={item._key} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                                {item.isPositive ? (
                                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                                ) : (
                                                    <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                                                )}
                                                <span className="text-lg font-bold text-gray-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            );

                        default:
                            return null;
                    }
                })}
            </main>
            <SiteFooter />
        </div>
    );
}
