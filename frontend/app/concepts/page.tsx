'use client';

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { SearchModal } from "@/components/ui/search-modal";
import { categories } from "@/lib/concepts-data";
import { fetchConceptsFromSanity } from "@/lib/sanity/api";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SiteLogo, DockNavigation, SiteFooter } from "@/components/layout";

export default function ConceptsPage() {
    const [concepts, setConcepts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const CONCEPTS_PER_PAGE = 15;

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const sanityConcepts = await fetchConceptsFromSanity();
            if (cancelled) return;
            if (sanityConcepts) {
                setConcepts(sanityConcepts);
            }
            setLoading(false);
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    const filteredConcepts = useMemo(() => {
        const filtered = concepts.filter((concept: any) => {
            const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;
            const matchesSearch =
                concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                concept.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Deduplicate by slug to prevent key errors and UI noise from duplicate Sanity docs
        return Array.from(new Map(filtered.map((c: any) => [c.slug, c])).values());
    }, [concepts, searchQuery, selectedCategory]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredConcepts.length / CONCEPTS_PER_PAGE);
    const startIndex = (currentPage - 1) * CONCEPTS_PER_PAGE;
    const endIndex = startIndex + CONCEPTS_PER_PAGE;
    const paginatedConcepts = filteredConcepts.slice(startIndex, endIndex);

    // Reset to page 1 when filters change
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

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
                        Quick Jump
                    </div>

                    {/* Groups by category */}
                    {Object.entries(
                        concepts.reduce((acc: any, c: any) => {
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
                                        <span className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 border border-transparent transition-all group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#ff5941]" />
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
                <div className="pt-16 pb-32 px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto">
                        {/* Page Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 text-center"
                        >
                            <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 tracking-tight italic leading-none">All Concepts</h1>
                            <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
                                Browse system design concepts. High-level explanations with real software examples.
                            </p>
                        </motion.div>

                        {/* Search */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-12 max-w-2xl mx-auto"
                        >
                            <div className="relative group">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#ff5941] transition-colors" />
                                <Input
                                    placeholder="Search concepts (e.g. Load Balancing, API Keys...)"
                                    className="pl-14 h-16 rounded-[2rem] border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#ff5941] shadow-sm transition-all text-lg font-medium"
                                    value={searchQuery}
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                />
                            </div>
                        </motion.div>

                        {/* Category Filter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-16 flex flex-wrap gap-2 justify-center"
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={cn(
                                        "px-6 py-3 text-sm font-bold rounded-full transition-all border-2",
                                        category === selectedCategory
                                            ? "bg-gray-900 border-gray-900 text-white shadow-lg"
                                            : "bg-white border-gray-100 text-gray-500 hover:border-[#ff5941] hover:text-[#ff5941]"
                                    )}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </motion.div>

                        {/* Concepts Grid */}
                        {loading ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] space-y-6">
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
                                ))}
                            </div>
                        ) : filteredConcepts.length > 0 ? (
                            <>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {paginatedConcepts.map((concept, index) => (
                                        <motion.div
                                            key={concept._id || concept.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                        >
                                            <Link href={`/concepts/${concept.slug}`}>
                                                <div className="group h-full p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-[#ff5941] transition-all duration-300 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5941]/5 rounded-full -mr-16 -mt-16 transition-all group-hover:bg-[#ff5941]/10" />

                                                    <div className="flex items-start justify-between mb-6 relative z-10">
                                                        <div className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-black uppercase text-gray-400 tracking-widest">
                                                            {concept.category}
                                                        </div>
                                                        <div className={cn(
                                                            "text-[10px] font-black uppercase tracking-widest",
                                                            concept.difficulty === "Beginner" && "text-green-600",
                                                            concept.difficulty === "Intermediate" && "text-orange-500",
                                                            concept.difficulty === "Advanced" && "text-red-600"
                                                        )}>
                                                            {concept.difficulty}
                                                        </div>
                                                    </div>

                                                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#ff5941] transition-colors tracking-tight italic">
                                                        {concept.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-base leading-relaxed line-clamp-2 mb-8 font-medium">
                                                        {concept.description}
                                                    </p>

                                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50 relative z-10">
                                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                            <div className="w-1 h-1 rounded-full bg-[#ff5941]" />
                                                            {concept.readTime}
                                                        </div>
                                                        <div className="text-[#ff5941] opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
                                                            <ChevronRight className="w-5 h-5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="mt-20 flex justify-center items-center gap-4">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-200 text-gray-600 hover:border-[#ff5941] hover:text-[#ff5941] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>

                                        <div className="flex gap-2">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                <button
                                                    key={page}
                                                    onClick={() => setCurrentPage(page)}
                                                    className={cn(
                                                        "w-12 h-12 rounded-2xl font-bold transition-all",
                                                        page === currentPage
                                                            ? "bg-gray-900 text-white shadow-lg shadow-gray-200"
                                                            : "border border-gray-100 text-gray-400 hover:border-[#ff5941] hover:text-[#ff5941]"
                                                    )}
                                                >
                                                    {page}
                                                </button>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-200 text-gray-600 hover:border-[#ff5941] hover:text-[#ff5941] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-24 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                                <div className="text-4xl mb-6">🔍</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No concepts found</h3>
                                <p className="text-gray-500 mb-10 font-medium">
                                    We couldn't find anything matching your search.
                                </p>
                                <button
                                    className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl"
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory('All');
                                        setCurrentPage(1);
                                    }}
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}

                        {/* Coming Soon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-32 p-16 bg-linear-to-br from-gray-900 to-gray-800 rounded-[3rem] text-center relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5941] opacity-10 blur-[80px] -mr-32 -mt-32" />
                            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight italic">More Coming Soon</h3>
                            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-medium">
                                We're constantly distilling complex systems into simple mental models.
                            </p>
                            <Link href="/suggest">
                                <button className="px-10 py-5 bg-[#ff5941] text-white rounded-2xl text-lg font-bold hover:bg-[#FF6951] transition-all shadow-xl shadow-[#ff5941]/20 hover:-translate-y-1">
                                    Suggest a Concept
                                </button>
                            </Link>
                        </motion.div>

                        <div className="mt-40">
                            <SiteFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
