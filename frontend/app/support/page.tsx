'use client';

import Link from "next/link";
import { ArrowLeft, BookOpen, Home, Map, User, Heart, Coffee } from "lucide-react";
import { SearchModal } from "@/components/ui/search-modal";
import { webDevConcepts } from '@/lib/concepts-data';
import VariableFontHoverByRandomLetter from "@/components/fancy/text/variable-font-hover-by-random-letter";

export default function SupportPage() {
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
