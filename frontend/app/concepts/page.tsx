'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConceptCard } from "@/components/concept/ConceptCard";
import { webDevConcepts, categories, type Concept } from "@/lib/concepts-data";

export default function ConceptsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Filter concepts based on category and search
    const filteredConcepts = webDevConcepts.filter(concept => {
        const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;
        const matchesSearch = concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            concept.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen">
            <Header activeTab="concepts" />

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>

                    {/* Page Header */}
                    <div className="mb-12 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold">All Concepts</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Browse {webDevConcepts.length} professional system design concepts.
                            Each one is designed to help things "click" in under 10 minutes.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mb-8 max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search concepts..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-8 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={category === selectedCategory ? "default" : "outline"}
                                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="mb-4 text-sm text-muted-foreground">
                        Showing {filteredConcepts.length} {filteredConcepts.length === 1 ? 'concept' : 'concepts'}
                        {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </div>

                    {/* Concepts Grid */}
                    {filteredConcepts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredConcepts.map((concept) => (
                                <ConceptCard
                                    key={concept.slug}
                                    title={concept.title}
                                    description={concept.description}
                                    category={concept.category}
                                    difficulty={concept.difficulty}
                                    readTime={concept.readTime}
                                    slug={concept.slug}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground mb-4">
                                No concepts found matching your search.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}

                    {/* Coming Soon */}
                    <div className="mt-16 text-center p-12 bg-muted/30 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">More Coming Soon</h3>
                        <p className="text-muted-foreground mb-6">
                            New concepts are added regularly. Have a suggestion?
                        </p>
                        <Link href="/suggest">
                            <Button variant="outline">
                                Suggest a Concept
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
