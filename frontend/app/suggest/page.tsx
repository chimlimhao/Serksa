'use client';

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Home, Map, User, Lightbulb, CheckCircle2 } from "lucide-react";
import { SearchModal } from "@/components/ui/search-modal";
import { webDevConcepts } from '@/lib/concepts-data';
import VariableFontHoverByRandomLetter from "@/components/fancy/text/variable-font-hover-by-random-letter";

export default function SuggestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        conceptName: '',
        category: '',
        why: '',
        email: ''
    });

    const searchData = webDevConcepts.map(c => ({
        id: c.slug,
        title: c.title,
        description: c.description,
        category: c.category,
    }));

    const dockItems = [
        { icon: Home, label: "Home", onClick: () => window.location.href = "/" },
        { icon: Map, label: "Learning Path", onClick: () => window.location.href = "/learn" },
        { icon: BookOpen, label: "All Concepts", onClick: () => window.location.href = "/concepts" },
        { icon: User, label: "About", onClick: () => window.location.href = "/about" },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Suggestion submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white">
                <div className="fixed top-6 left-6 z-50">
                    <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
                        <BookOpen className="w-5 h-5 text-[#ff5941]" />
                        <span className="font-bold text-[#ff5941] leading-none">Serksa</span>
                    </Link>
                </div>

                <div className="pt-32 pb-32 px-6 max-w-2xl mx-auto text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Your suggestion has been received. I'll review it and consider adding it to the site.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button onClick={() => setSubmitted(false)} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors">
                            Submit Another
                        </button>
                        <Link href="/concepts" className="px-6 py-3 bg-[#ff5941] hover:bg-[#ff6951] text-white rounded-full font-medium transition-colors">
                            Browse Concepts
                        </Link>
                    </div>
                </div>
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

            {/* Dock */}
            <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <div className="pointer-events-auto">
                    <div className="flex items-center gap-1 p-2 rounded-2xl backdrop-blur-lg border bg-white/95 border-gray-200">
                        {dockItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button key={item.label} onClick={item.onClick} className="relative group p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                    <Icon className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                        <SearchModal data={searchData}>
                            <button className="relative group p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <BookOpen className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Search</span>
                            </button>
                        </SearchModal>
                    </div>
                </div>
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
                        className="w-full px-6 py-4 bg-[#ff5941] hover:bg-[#ff6951] text-white rounded-lg font-semibold text-lg transition-colors"
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

            {/* Footer */}
            <div className="relative overflow-hidden w-full h-96 flex justify-end px-12 text-right items-start py-16 text-[#ff5941]">
                <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
                    <ul>
                        <li className="hover:underline cursor-pointer">
                            <Link href="/learn">Walkthrough</Link>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link href="/concepts">All Concepts</Link>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="hover:underline cursor-pointer">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li className="hover:underline cursor-pointer">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                        </li>
                    </ul>
                </div>
                <VariableFontHoverByRandomLetter
                    label="Serksa"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 900"
                    staggerDuration={0.03}
                    className="absolute bottom-0 left-0 sm:text-[240px] text-[100px] text-[#ff5941] font-bold leading-none cursor-pointer"
                />
            </div>
        </div>
    );
}
