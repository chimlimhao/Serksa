'use client';

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dock } from "@/components/ui/dock-two";
import { SearchModal } from "@/components/ui/search-modal";
import { TextRotate } from "@/components/ui/text-rotate";
import StackingCards, { StackingCardItem } from "@/components/fancy/blocks/stacking-cards";
import { BookOpen, Loader2 } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fetchConceptsFromSanity } from "@/lib/sanity/api";
import VariableFontHoverByRandomLetter from "@/components/fancy/text/variable-font-hover-by-random-letter";
import { Skeleton } from "@/components/ui/skeleton";
import { DockNavigation, SiteLogo, SiteFooter } from "@/components/layout";

const cards = [
    {
        bgColor: "bg-[#f97316]",
        title: "Simple Explanations",
        description:
            "No jargon, no assumptions. Every concept is explained like you're learning it for the first time. We use everyday analogies that actually make sense.",
        image:
            "https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
    },
    {
        bgColor: "bg-[#0015ff]",
        title: "Visual Learning",
        description:
            "See how everything connects with clear diagrams. Visual flows show you exactly how data moves through systems, making complex architectures easy to understand.",
        image:
            "https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
    },
    {
        bgColor: "bg-[#ff5941]",
        title: "Real Examples",
        description:
            "Learn from apps you use every day. We explain concepts using Instagram, WhatsApp, Netflix, and other real-world applications you already understand.",
        image:
            "https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
    },
    {
        bgColor: "bg-[#1f464d]",
        title: "No Fluff",
        description:
            "Get straight to the point. We focus on what you actually need to know, cutting through the noise to deliver clear, actionable knowledge.",
        image:
            "https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
    },
    {
        bgColor: "bg-[#0015ff]",
        title: "Always Free",
        description:
            "100% free, forever. No paywalls, no premium tiers, no hidden costs. Quality education should be accessible to everyone, everywhere.",
        image:
            "https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
    },
];

export default function HomePage() {
    const container = useRef<HTMLDivElement>(null);
    const [concepts, setConcepts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const res = await fetchConceptsFromSanity();
            if (cancelled) return;
            if (res) setConcepts(res);
            setLoading(false);
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    // Prepare search data from concepts
    const searchData = concepts.map(concept => ({
        id: concept.slug,
        title: concept.title,
        description: concept.description,
        category: concept.category,
    }));

    return (
        <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-white">
            <SiteLogo className="fixed top-6 left-6 z-50" />
            {/* Hero Section - Full Viewport */}
            <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden snap-start snap-always">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-gray-600 text-sm font-medium uppercase tracking-wider shadow-sm">
                        <BookOpen className="w-4 h-4 text-[#ff5941]" />
                        <span className="font-bold text-[#ff5941]">Serksa</span>
                        <span className="text-gray-400">·</span>
                        <span>Visual Learning</span>
                    </div>

                    <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight flex flex-col items-center justify-center">
                        <span>Learn it{" "}</span>
                        <TextRotate
                            texts={[
                                "fast ⚡",
                                "in minutes ⏱️",
                                "visually 👁️",
                                "fun 🎉",
                                "simple ✨",
                            ]}
                            mainClassName="text-white px-3 bg-[#ff5941] overflow-hidden py-2 justify-center rounded-lg shadow-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>

                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Understand system design concepts through visual diagrams and real-world examples from apps you use every day
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Stacking Cards Section - Full Viewport with its own scroll container */}
            <section className="relative h-screen snap-start snap-always">
                <div
                    className="h-full bg-white overflow-auto"
                    ref={container}
                >
                    {/* Scroll Down Header */}
                    <div className="relative h-screen w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center text-[#ff5941] whitespace-pre bg-white">
                        What Serksa Offers ↓
                    </div>

                    <StackingCards
                        totalCards={cards.length}
                        scrollOptions={{ container: container }}
                    >
                        {cards.map(({ bgColor, description, image, title }, index) => {
                            return (
                                <StackingCardItem key={index} index={index} className="h-screen">
                                    <div
                                        className={cn(
                                            bgColor,
                                            "h-[80%] sm:h-[70%] flex-col sm:flex-row aspect-video px-8 py-10 flex w-11/12 rounded-3xl mx-auto relative"
                                        )}
                                    >
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h3 className="font-bold text-2xl mb-5 text-white">{title}</h3>
                                            <p className="text-white">{description}</p>
                                        </div>

                                        <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                                            <Image
                                                src={image}
                                                alt={title}
                                                className="object-cover"
                                                fill
                                            />
                                        </div>
                                    </div>
                                </StackingCardItem>
                            );
                        })}
                    </StackingCards>
                </div>
            </section>

            {/* Popular Concepts Section */}
            <section className="relative min-h-screen bg-white snap-start snap-always flex items-center justify-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full max-w-7xl mx-auto px-6"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Popular Concepts
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            High-level concepts and terminology explained with real software examples
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading ? (
                            [...Array(6)].map((_, i) => (
                                <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] space-y-6">
                                    <div className="flex justify-between">
                                        <Skeleton className="h-4 w-20 rounded-full" />
                                        <Skeleton className="h-4 w-16 rounded-full" />
                                    </div>
                                    <div className="space-y-3">
                                        <Skeleton className="h-8 w-3/4 rounded-lg" />
                                        <Skeleton className="h-4 w-full rounded-md" />
                                        <Skeleton className="h-4 w-1/2 rounded-md" />
                                    </div>
                                    <div className="pt-6 border-t border-gray-50 flex justify-between">
                                        <Skeleton className="h-3 w-16 rounded-md" />
                                        <Skeleton className="h-5 w-5 rounded-full" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            concepts.slice(0, 6).map((concept, index) => (
                                <motion.div
                                    key={concept.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href={`/concepts/${concept.slug}`}>
                                        <div className="group relative h-full p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-[#ff5941] transition-all duration-300 hover:shadow-lg cursor-pointer">
                                            <div className="flex items-start justify-between mb-4">
                                                <span className="text-xs font-semibold text-[#ff5941] uppercase tracking-wider">
                                                    {concept.category}
                                                </span>
                                                <span className={cn(
                                                    "text-xs px-2 py-1 rounded-full",
                                                    concept.difficulty === "Beginner" && "bg-green-100 text-green-700",
                                                    concept.difficulty === "Intermediate" && "bg-yellow-100 text-yellow-700",
                                                    concept.difficulty === "Advanced" && "bg-red-100 text-red-700"
                                                )}>
                                                    {concept.difficulty}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#ff5941] transition-colors">
                                                {concept.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm line-clamp-3">
                                                {concept.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))
                        )}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/concepts">
                            <button className="px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer">
                                View All {concepts.length} Concepts
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* CTA + Footer Section */}
            <section className="relative h-screen bg-white flex flex-col justify-between snap-start snap-always">
                <div className="flex-1 flex items-center justify-center px-4 py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight italic">
                            System Design<br />Made Simple.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/learn">
                                <button className="px-10 py-5 bg-[#ff5941] text-white rounded-2xl text-lg font-bold hover:bg-[#FF6951] cursor-pointer transition-all shadow-xl shadow-[#ff5941]/20 hover:-translate-y-1">
                                    Browse Walkthroughs
                                </button>
                            </Link>
                            <Link href="/concepts">
                                <button className="px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl text-lg font-bold cursor-pointer hover:border-[#ff5941] transition-all">
                                    Explore Concepts
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <SiteFooter />
            </section>
        </div>
    );
}