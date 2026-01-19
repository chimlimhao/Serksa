'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Lightbulb, CheckCircle2, Loader2 } from "lucide-react";
import { SiteFooter } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPageBySlug } from "@/lib/sanity/api";
import { SanityPage } from "@/lib/sanity/types";
import { useEffect } from "react";
import VariableFontHoverByRandomLetter from "@/components/fancy/text/variable-font-hover-by-random-letter";
import { PortableText } from "@portabletext/react";

export default function SuggestPage() {
    const [page, setPage] = useState<SanityPage | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        conceptName: '',
        category: '',
        why: '',
        email: ''
    });

    useEffect(() => {
        (async () => {
            const data = await fetchPageBySlug('suggest');
            if (data) setPage(data);
            setLoading(false);
        })();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Suggestion submitted:', formData);
        setSubmitted(true);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <main className="pt-32 pb-32 px-6 max-w-2xl mx-auto space-y-12">
                    <div className="space-y-6 flex flex-col items-center">
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <Skeleton className="h-12 w-3/4 rounded-xl" />
                        <Skeleton className="h-6 w-1/2 rounded-md" />
                    </div>
                    <div className="space-y-8 pt-12">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="space-y-2">
                                <Skeleton className="h-4 w-24 rounded-md" />
                                <Skeleton className="h-12 w-full rounded-lg" />
                            </div>
                        ))}
                        <Skeleton className="h-14 w-full rounded-lg pt-4" />
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
            <div className="pt-32 pb-32 px-6 max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-8 h-8 text-orange-600" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Suggest a Concept</h1>
                    <p className="text-lg text-gray-700">
                        Have a system design concept you wish was explained simply? Let me know!
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 mb-12">
                    {/* Concept Name */}
                    <div className="space-y-2">
                        <label htmlFor="conceptName" className="block text-sm font-semibold text-gray-900">
                            Concept Name *
                        </label>
                        <input
                            id="conceptName"
                            type="text"
                            placeholder='e.g., "What is a Load Balancer?"'
                            value={formData.conceptName}
                            onChange={(e) => setFormData({ ...formData, conceptName: e.target.value })}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5941] focus:border-transparent"
                        />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <label htmlFor="category" className="block text-sm font-semibold text-gray-900">
                            Category *
                        </label>
                        <select
                            id="category"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5941] focus:border-transparent"
                        >
                            <option value="">Select a category</option>
                            <option value="api-backend">API & Backend</option>
                            <option value="databases">Databases</option>
                            <option value="system-design">System Design</option>
                            <option value="frontend">Frontend</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Why is it confusing */}
                    <div className="space-y-2">
                        <label htmlFor="why" className="block text-sm font-semibold text-gray-900">
                            Why is this concept confusing? *
                        </label>
                        <textarea
                            id="why"
                            placeholder="Tell me what makes this concept hard to understand..."
                            rows={5}
                            value={formData.why}
                            onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5941] focus:border-transparent resize-none"
                        />
                        <p className="text-xs text-gray-600">
                            This helps me understand what to focus on in the explanation.
                        </p>
                    </div>

                    {/* Email (Optional) */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                            Your Email (Optional)
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5941] focus:border-transparent"
                        />
                        <p className="text-xs text-gray-600">
                            I'll notify you when the concept is added (if you provide your email).
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-4 bg-[#ff5941] hover:bg-[#FF6951] text-white rounded-lg font-semibold text-lg transition-colors"
                    >
                        Submit Suggestion
                    </button>
                </form>

                {/* Info */}
                <div className="p-6 bg-gray-50 rounded-2xl">
                    <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-[#ff5941] font-bold">•</span>
                            <span>I'll review your suggestion and consider adding it to the site</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#ff5941] font-bold">•</span>
                            <span>Popular suggestions get priority</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#ff5941] font-bold">•</span>
                            <span>If you provided your email, I'll notify you when it's live</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#ff5941] font-bold">•</span>
                            <span>All concepts are added for free—no paywalls</span>
                        </li>
                    </ul>
                </div>
            </div>

            <SiteFooter />
        </div>
    );
}
