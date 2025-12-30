'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Home, Map, User } from 'lucide-react';
import { SearchModal } from "@/components/ui/search-modal";
import { getConceptBySlug, webDevConcepts } from '@/lib/concepts-data';
import { conceptContent } from '@/lib/concept-content';

interface ConceptPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ConceptPage({ params }: ConceptPageProps) {
    const { slug } = use(params);
    const concept = getConceptBySlug(slug);

    if (!concept) {
        notFound();
    }

    const content = conceptContent[slug];

    if (!content) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">{concept.title}</h1>
                    <p className="text-xl text-gray-600">Coming soon!</p>
                </div>
            </div>
        );
    }

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

    const currentIndex = webDevConcepts.findIndex(c => c.slug === slug);
    const previousConcept = currentIndex > 0 ? webDevConcepts[currentIndex - 1] : null;
    const nextConcept = currentIndex < webDevConcepts.length - 1 ? webDevConcepts[currentIndex + 1] : null;

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
                <Link href="/concepts" className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-full hover:border-gray-300 transition-colors">
                    <ArrowLeft className="w-4 h-4 text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">All Concepts</span>
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
                {/* Category Badge */}
                <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    {concept.category}
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16">{concept.title}</h1>

                {/* 1. What is it? */}
                <div className="mb-16">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#ff5941] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">What is it?</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pl-12">{content.whatItIs}</p>
                </div>

                {/* 2. Simple Analogy */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#ff5941] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Think of it like...</h2>
                    </div>
                    <div className="pl-12">
                        <p className="text-xl font-semibold text-gray-900 mb-3">{content.analogy.title}</p>
                        {content.analogy.description && (
                            <p className="text-gray-700 mb-6 border-l-4 border-gray-300 pl-4 italic">{content.analogy.description}</p>
                        )}
                        <div className="space-y-4">
                            {content.analogy.items.map((item: any, idx: number) => (
                                <div key={idx} className="flex items-start gap-3 border-l-4 border-gray-200 pl-4 py-2">
                                    <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                                    <div>
                                        <p className="font-semibold text-gray-900">{item.title}</p>
                                        <p className="text-gray-600">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Visual Flow */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-[#ff5941] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Visual Flow</h2>
                    </div>
                    <div className="pl-12">
                        <div className="flex items-center justify-start gap-6 flex-wrap">
                            {content.diagram.map((node: any, idx: number) => (
                                <div key={idx} className="flex items-center gap-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center shadow-lg p-3">
                                            <span className="text-4xl mb-1">{node.emoji}</span>
                                            <span className="text-white font-bold text-xs text-center">{node.title}</span>
                                        </div>
                                        {node.subtitle && (
                                            <p className="text-xs text-gray-600 text-center font-medium">{node.subtitle}</p>
                                        )}
                                    </div>
                                    {idx < content.diagram.length - 1 && (
                                        <div className="text-3xl text-gray-400 font-bold">→</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Where you see it */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#ff5941] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Where you see it</h2>
                    </div>
                    <div className="pl-12 space-y-3">
                        {content.howItWorks.map((step: any, idx: number) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white font-bold text-xs">{step.step}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{step.title}</p>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Common Mistake */}
                <div className="mb-16 pb-16 border-b border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#ff5941] flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">5</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Common Mistake</h2>
                    </div>
                    <div className="pl-12 space-y-4">
                        <div className="flex items-start gap-3 border-l-4 border-red-300 pl-4 py-2">
                            <span className="text-2xl flex-shrink-0">❌</span>
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Wrong</p>
                                <p className="text-gray-700">{content.misunderstanding.wrong}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 border-l-4 border-green-300 pl-4 py-2">
                            <span className="text-2xl flex-shrink-0">✅</span>
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Correct</p>
                                <p className="text-gray-700">{content.misunderstanding.correct}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Real World Example */}
                <div className="mb-16 pl-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 {content.realWorld.title}</h2>
                    <p className="text-gray-700 mb-6">{content.realWorld.description}</p>
                    <div className="space-y-3">
                        {content.realWorld.points.map((point: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#ff5941] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white font-bold text-xs">{idx + 1}</span>
                                </div>
                                <p className="text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between gap-4 pt-8 border-t-2 border-gray-200">
                    {previousConcept ? (
                        <Link href={`/concepts/${previousConcept.slug}`} className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="font-medium">{previousConcept.title}</span>
                        </Link>
                    ) : (
                        <div />
                    )}
                    {nextConcept ? (
                        <Link href={`/concepts/${nextConcept.slug}`} className="flex items-center gap-2 px-6 py-3 bg-[#ff5941] hover:bg-[#ff6951] text-white rounded-full transition-colors ml-auto">
                            <span className="font-medium">{nextConcept.title}</span>
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="relative overflow-hidden w-full h-96 bg-white flex justify-end px-12 text-right items-start py-16 text-[#ff5941]">
                <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
                    <ul>
                        <li className="hover:underline cursor-pointer"><Link href="/learn">Learning Path</Link></li>
                        <li className="hover:underline cursor-pointer"><Link href="/concepts">All Concepts</Link></li>
                        <li className="hover:underline cursor-pointer"><Link href="/about">About</Link></li>
                    </ul>
                    <ul>
                        <li className="hover:underline cursor-pointer"><a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li className="hover:underline cursor-pointer"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li className="hover:underline cursor-pointer"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                    </ul>
                </div>
                <h2 className="absolute bottom-4 left-0 sm:text-[240px] text-[100px] text-[#ff5941] font-bold leading-none">Serksa</h2>
            </footer>
        </div>
    );
}
