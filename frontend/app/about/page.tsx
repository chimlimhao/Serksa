'use client';

import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { SiteFooter } from "@/components/layout";

export default function AboutPage() {


    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="fixed top-6 right-6 z-50">
                <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
                    <ArrowLeft className="w-4 h-4 text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">Home</span>
                </Link>
            </div>

            {/* Main Content */}
            <div className="pt-32 pb-32 px-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">About Serksa</h1>

                <p className="text-2xl text-gray-700 mb-16 border-l-4 border-gray-300 pl-6 italic">
                    "A simple site that explains system design concepts the way you wish someone explained them to you."
                </p>

                {/* Why This Exists */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Exists</h2>
                    <div className="space-y-4 text-lg text-gray-700">
                        <p>
                            When I was learning system design, I struggled with overly academic explanations and scattered resources.
                            I'd read articles that assumed I already understood distributed systems, scalability, and architecture patterns.
                        </p>
                        <p>
                            I wished someone would just explain things simply, with real-world analogies and clear diagrams that showed how everything connects.
                        </p>
                        <p className="font-semibold">
                            So I built this. It's the resource I needed when preparing for system design interviews and building scalable applications. Now it's here for you.
                        </p>
                    </div>
                </div>

                {/* The Philosophy */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Philosophy</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-[#ff5941] pl-6 py-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Clarity Over Completeness</h3>
                            <p className="text-gray-700">
                                I'd rather you understand 80% really well than be confused by 100% of the details.
                            </p>
                        </div>
                        <div className="border-l-4 border-[#ff5941] pl-6 py-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mental Models Over Memorization</h3>
                            <p className="text-gray-700">
                                Good analogies stick. They help you reason about new problems, not just remember facts.
                            </p>
                        </div>
                        <div className="border-l-4 border-[#ff5941] pl-6 py-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Over Textual</h3>
                            <p className="text-gray-700">
                                A simple diagram can explain in seconds what paragraphs of text cannot.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What This Is NOT */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What This Is NOT</h2>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 text-gray-700">
                            <span className="text-2xl">✗</span>
                            <p>Not a comprehensive course (there are plenty of those)</p>
                        </div>
                        <div className="flex items-start gap-3 text-gray-700">
                            <span className="text-2xl">✗</span>
                            <p>Not interactive coding exercises (use LeetCode for that)</p>
                        </div>
                        <div className="flex items-start gap-3 text-gray-700">
                            <span className="text-2xl">✗</span>
                            <p>Not behind a paywall (and never will be)</p>
                        </div>
                    </div>
                </div>

                {/* Who Made This */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Made This?</h2>
                    <div className="space-y-4 text-lg text-gray-700">
                        <p>
                            Hi! I'm a developer who believes that system design should be accessible to everyone.
                            I've spent years building scalable systems and explaining these concepts to engineers, and this site is a collection of those explanations.
                        </p>
                        <p>
                            This is a side project built with love, maintained in my free time, and shared freely with the community.
                        </p>
                    </div>
                </div>

                {/* How You Can Help */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How You Can Help</h2>
                    <div className="space-y-4">
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span>📢</span> Share It
                            </h3>
                            <p className="text-gray-700">
                                If this helped you, share it with someone else who's learning. That's the best support.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <span>💡</span> Suggest Concepts
                            </h3>
                            <p className="text-gray-700 mb-3">
                                Have a concept you wish was explained simply? Let me know!
                            </p>
                            <Link href="/suggest" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                                Suggest a Concept
                            </Link>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-[#ff5941]" /> Support
                            </h3>
                            <p className="text-gray-700 mb-3">
                                If you found this valuable and want to support the project, you can buy me a coffee.
                            </p>
                            <Link href="/support" className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff5941] text-white rounded-full hover:bg-[#ff6951] transition-colors">
                                Support This Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Thank You */}
                <div className="text-center py-12">
                    <p className="text-2xl font-bold text-gray-900 mb-3">Thank you for being here.</p>
                    <p className="text-lg text-gray-700">
                        Every person who learns from this site makes the effort worthwhile.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <SiteFooter />
        </div>
    );
}
