'use client';

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { SearchModal } from "@/components/ui/search-modal";
import { webDevConcepts, categories } from "@/lib/concepts-data";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SiteLogo, DockNavigation, SiteFooter } from "@/components/layout";

export default function ConceptsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const CONCEPTS_PER_PAGE = 15;



    // Filter concepts based on category and search
    const filteredConcepts = webDevConcepts.filter(concept => {
        const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;
        const matchesSearch = concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            concept.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
        <div className="min-h-screen bg-white">

            <div className="pt-24 pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">All Concepts</h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                            Browse {webDevConcepts.length} system design concepts. High-level explanations with real software examples.
                        </p>
                    </motion.div>

                    {/* Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-8 max-w-md mx-auto"
                    >
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                                placeholder="Search concepts..."
                                className="pl-12 h-12 rounded-full border-2 border-gray-200 focus:border-[#ff5941] transition-colors"
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
                        className="mb-12 flex flex-wrap gap-3 justify-center"
                    >
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={category === selectedCategory ? "default" : "outline"}
                                className={cn(
                                    "cursor-pointer px-4 py-2 text-sm font-semibold rounded-full transition-all",
                                    category === selectedCategory
                                        ? "bg-[#ff5941] text-white hover:bg-[#ff6951]"
                                        : "border-2 border-gray-300 text-gray-700 hover:border-[#ff5941] hover:text-[#ff5941]"
                                )}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </motion.div>

                    {/* Results Count */}
                    <div className="mb-6 text-center text-sm text-gray-600">
                        Showing {filteredConcepts.length} {filteredConcepts.length === 1 ? 'concept' : 'concepts'}
                        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </div>

                    {/* Concepts Grid */}
                    {filteredConcepts.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {paginatedConcepts.map((concept, index) => (
                                    <motion.div
                                        key={concept.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
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
                                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                                    {concept.description}
                                                </p>
                                                <div className="text-xs text-gray-500">
                                                    {concept.readTime} read
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-12 flex justify-center items-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#ff5941] hover:text-[#ff5941] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    <div className="flex gap-2">
                                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                            let page;
                                            if (totalPages <= 5) {
                                                page = i + 1;
                                            } else if (currentPage <= 3) {
                                                page = i + 1;
                                            } else if (currentPage >= totalPages - 2) {
                                                page = totalPages - 4 + i;
                                            } else {
                                                page = currentPage - 2 + i;
                                            }
                                            return (
                                                <button
                                                    key={page}
                                                    onClick={() => setCurrentPage(page)}
                                                    className={cn(
                                                        "w-10 h-10 rounded-full font-semibold transition-colors cursor-pointer",
                                                        page === currentPage
                                                            ? "bg-[#ff5941] text-white"
                                                            : "border-2 border-gray-300 text-gray-700 hover:border-[#ff5941] hover:text-[#ff5941]"
                                                    )}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#ff5941] hover:text-[#ff5941] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-gray-600 text-lg mb-6">
                                No concepts found matching your search.
                            </p>
                            <button
                                className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                    setCurrentPage(1);
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                    {/* Coming Soon */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center p-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">More Coming Soon</h3>
                        <p className="text-gray-600 text-lg mb-6">
                            New concepts are added regularly. Have a suggestion?
                        </p>
                        <Link href="/suggest">
                            <button className="px-8 py-4 bg-[#ff5941] text-white rounded-full text-lg font-semibold hover:bg-[#ff6951] transition-colors cursor-pointer">
                                Suggest a Concept
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <SiteFooter />
        </div>
    );
}
