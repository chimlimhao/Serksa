'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight, Sparkles, Map, Eye } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConceptCard } from "@/components/concept/ConceptCard";
import { getFeaturedConcepts, webDevConcepts } from "@/lib/concepts-data";

export default function Home() {
    const featuredConcepts = getFeaturedConcepts(6);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <div className="min-h-screen">
            <Header activeTab="home" />

            {/* Hero Section - Interactive Diagram */}
            <section className="pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="container mx-auto px-4">
                    {/* Headline */}
                    <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Visual Learning · Real-World Analogies
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            System Design,
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Explained Visually
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Master how apps like Instagram, WhatsApp, and YouTube actually work—through interactive diagrams and real-world analogies.
                        </p>
                    </div>

                    {/* Interactive System Design Diagram */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-3xl p-8 md:p-16 border border-border/50">
                            {/* Diagram Title */}
                            <div className="text-center mb-12">
                                <p className="text-sm font-medium text-muted-foreground mb-2">
                                    {hoveredNode ? `Exploring: ${hoveredNode}` : "Hover to explore"}
                                </p>
                                <h3 className="text-2xl font-bold">How Instagram Works</h3>
                            </div>

                            {/* Flow Diagram */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                                {/* Node 1: Client */}
                                <div
                                    className="group cursor-pointer transition-all duration-300"
                                    onMouseEnter={() => setHoveredNode("Your Phone")}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    <div className={`relative transition-all duration-300 ${hoveredNode === "Your Phone" ? "scale-110" : "scale-100"}`}>
                                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center border-2 border-blue-500/30 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                                            <span className="text-5xl">📱</span>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="font-semibold text-sm">Your Phone</p>
                                            <p className="text-xs text-muted-foreground">Client</p>
                                        </div>
                                        {hoveredNode === "Your Phone" && (
                                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-popover border rounded-lg p-3 shadow-lg z-10">
                                                <p className="text-xs">Opens Instagram app & sends requests</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Arrow 1 */}
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                        <ArrowRight className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">Request</p>
                                </div>

                                {/* Node 2: Server */}
                                <div
                                    className="group cursor-pointer transition-all duration-300"
                                    onMouseEnter={() => setHoveredNode("Instagram Server")}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    <div className={`relative transition-all duration-300 ${hoveredNode === "Instagram Server" ? "scale-110" : "scale-100"}`}>
                                        <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border-2 border-purple-500/30 group-hover:border-purple-500 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                                            <span className="text-5xl">⚙️</span>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="font-semibold text-sm">Instagram Server</p>
                                            <p className="text-xs text-muted-foreground">Backend</p>
                                        </div>
                                        {hoveredNode === "Instagram Server" && (
                                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-popover border rounded-lg p-3 shadow-lg z-10">
                                                <p className="text-xs">Processes requests & runs business logic</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Arrow 2 */}
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                        <ArrowRight className="w-5 h-5 text-pink-500" />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">Query</p>
                                </div>

                                {/* Node 3: Database */}
                                <div
                                    className="group cursor-pointer transition-all duration-300"
                                    onMouseEnter={() => setHoveredNode("Database")}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    <div className={`relative transition-all duration-300 ${hoveredNode === "Database" ? "scale-110" : "scale-100"}`}>
                                        <div className="w-32 h-32 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center border-2 border-pink-500/30 group-hover:border-pink-500 group-hover:shadow-lg group-hover:shadow-pink-500/20">
                                            <span className="text-5xl">💾</span>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p className="font-semibold text-sm">Database</p>
                                            <p className="text-xs text-muted-foreground">Data Storage</p>
                                        </div>
                                        {hoveredNode === "Database" && (
                                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-popover border rounded-lg p-3 shadow-lg z-10">
                                                <p className="text-xs">Stores all posts, photos & user data</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Example Use Case */}
                            <div className="mt-16 text-center">
                                <div className="inline-block bg-background/80 backdrop-blur-sm border rounded-full px-6 py-3">
                                    <p className="text-sm">
                                        <span className="font-semibold">Example:</span> When you like a photo →
                                        <span className="text-blue-600"> Phone</span> sends request →
                                        <span className="text-purple-600"> Server</span> processes →
                                        <span className="text-pink-600"> Database</span> saves it
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Link href="/learn">
                            <Button size="lg" className="gap-2 h-12 px-8 text-base">
                                <Map className="w-5 h-5" />
                                Start Learning Path
                            </Button>
                        </Link>
                        <Link href="/concepts">
                            <Button size="lg" variant="outline" className="gap-2 h-12 px-8 text-base">
                                <BookOpen className="w-5 h-5" />
                                Browse All Concepts
                            </Button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div>
                            <p className="text-3xl font-bold">{webDevConcepts.length}</p>
                            <p className="text-sm text-muted-foreground">Concepts</p>
                        </div>
                        <div className="w-px bg-border"></div>
                        <div>
                            <p className="text-3xl font-bold">23</p>
                            <p className="text-sm text-muted-foreground">Learning Path</p>
                        </div>
                        <div className="w-px bg-border"></div>
                        <div>
                            <p className="text-3xl font-bold">100%</p>
                            <p className="text-sm text-muted-foreground">Free</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Core Features */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Two Ways to Learn</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose your path: Follow a structured roadmap or explore concepts freely
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Feature 1: Learning Path */}
                        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Map className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Guided Learning Path</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Follow a carefully designed 6-level roadmap from basics to advanced.
                                    Each level builds on the last—never feel lost.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        23 core concepts in logical order
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        Real-world progression (like building Instagram)
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        Clear outcomes for each level
                                    </li>
                                </ul>
                                <Link href="/learn">
                                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                                        Start the Path
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Feature 2: All Concepts */}
                        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple/50">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Eye className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Explore All Concepts</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Browse {webDevConcepts.length} system design concepts freely.
                                    Jump to what interests you—perfect for quick reference.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                                        Filter by category & difficulty
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                                        Each concept: 5-10 min read
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                                        Visual diagrams + real examples
                                    </li>
                                </ul>
                                <Link href="/concepts">
                                    <Button variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600">
                                        Browse Concepts
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Concepts */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Concepts</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Start with these beginner-friendly concepts
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {featuredConcepts.map((concept) => (
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

                    <div className="text-center mt-12">
                        <Link href="/concepts">
                            <Button size="lg" variant="outline">
                                View All {webDevConcepts.length} Concepts
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Ready to Master
                            <br />
                            System Design?
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Join thousands learning how real apps work—no jargon, just clear explanations
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/learn">
                                <Button size="lg" className="h-14 px-8 text-lg">
                                    Start Learning Now
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            100% Free · No Signup · No Ads
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}