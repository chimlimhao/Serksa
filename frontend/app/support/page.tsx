'use client';

import Link from "next/link";
import { ArrowLeft, BookOpen, Heart, Coffee, Loader2 } from "lucide-react";
import { SiteFooter } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPageBySlug } from "@/lib/sanity/api";
import { SanityPage } from "@/lib/sanity/types";
import { useEffect, useState } from "react";
import VariableFontHoverByRandomLetter from "@/components/fancy/text/variable-font-hover-by-random-letter";

export default function SupportPage() {
    const [page, setPage] = useState<SanityPage | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const data = await fetchPageBySlug('support');
            if (data) setPage(data);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <main className="pt-32 pb-32 px-6 max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6 flex flex-col items-center">
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <Skeleton className="h-16 w-3/4 rounded-2xl" />
                        <Skeleton className="h-6 w-1/2 rounded-md" />
                    </div>
                    <div className="space-y-12 pt-12">
                        {[1, 2].map(i => (
                            <div key={i} className="space-y-4">
                                <Skeleton className="h-8 w-48 rounded-lg" />
                                <div className="space-y-4">
                                    <Skeleton className="h-20 w-full rounded-2xl" />
                                    <Skeleton className="h-20 w-full rounded-2xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Logo */}
            <div className="fixed top-6 left-6 z-50">
                <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
                    <BookOpen className="w-5 h-5 text-[#ff5941]" />
                    <span className="font-bold text-[#ff5941] leading-none">Serksa</span>
                </Link>
            </div>

            {/* Back Button */}
            <div className="fixed top-6 right-6 z-50">
                <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
                    <ArrowLeft className="w-4 h-4 text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">Home</span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                        <Heart className="w-8 h-8 text-[#ff5941]" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Support This Project</h1>
                    <p className="text-lg text-gray-700">
                        Serksa is 100% free and always will be. If you found it helpful, here's how you can support the project.
                    </p>
                </div>

                {/* Free Ways to Support */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <span>🎉</span> Free Ways to Help
                    </h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 border-l-4 border-gray-200 pl-6 py-2">
                            <span className="text-3xl">📢</span>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Share with Others</h3>
                                <p className="text-gray-700">
                                    Tell a friend, share on Twitter, or post in a learning community. Every share helps someone discover this resource.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 border-l-4 border-gray-200 pl-6 py-2">
                            <span className="text-3xl">💡</span>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Suggest Concepts</h3>
                                <p className="text-gray-700 mb-3">
                                    Have an idea for a concept that should be explained? Let me know!
                                </p>
                                <Link href="/suggest" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
                                    Suggest a Concept
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Financial Support */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <Coffee className="w-8 h-8 text-[#ff5941]" /> Buy Me a Coffee
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Creating and maintaining this site takes time. If you'd like to support the project financially,
                        you can send a donation via bank transfer. It's completely optional and doesn't unlock any features—everything stays free for everyone.
                    </p>
                    <div className="bg-gray-50 p-8 rounded-2xl text-center">
                        <p className="text-sm font-semibold text-gray-900 mb-4">Scan to Support</p>
                        <div className="w-64 h-64 mx-auto bg-white rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                                src="/qr/qr.png"
                                alt="QR Code for donations"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="text-xs text-gray-600 mt-4">
                            Scan with your banking app to send a donation
                        </p>
                    </div>
                    <p className="text-sm text-gray-600 italic mt-6 text-center">
                        Your support helps cover hosting costs and motivates me to create more content. Thank you! 🙏
                    </p>
                </div>

                {/* What Your Support Does */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What Your Support Helps With</h2>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">✓</span>
                            <p>Keeps the site running (hosting, domain, etc.)</p>
                        </div>
                        <div className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">✓</span>
                            <p>Motivates me to create more concepts</p>
                        </div>
                        <div className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">✓</span>
                            <p>Allows me to spend more time improving explanations</p>
                        </div>
                        <div className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 text-xl">✓</span>
                            <p>Shows that this work is valued by the community</p>
                        </div>
                    </div>
                </div>

                {/* Thank You */}
                <div className="text-center py-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You! 🙏</h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Whether you share, suggest, or support financially—every bit of help makes a difference.
                        Thank you for being part of this journey to make tech education more accessible.
                    </p>
                </div>
            </div>

            <SiteFooter />
        </div>
    );
}
