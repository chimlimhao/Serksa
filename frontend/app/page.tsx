'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb, Zap, Heart, ArrowRight, Shield, Rocket } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConceptCard } from "@/components/concept/ConceptCard";
import { getFeaturedConcepts, webDevConcepts } from "@/lib/concepts-data";

export default function Home() {
    const featuredConcepts = getFeaturedConcepts(6);

    return (
        <div className="min-h-screen">
            <Header activeTab="home" />

            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            <Lightbulb className="w-3 h-3 mr-1" />
                            100% Free · No Signup Required
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            System Design Concepts <br />
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Explained Simply
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Master {webDevConcepts.length} professional system design concepts through simple analogies,
                            clear diagrams, and mental models that actually stick.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/learn">
                                <Button size="lg" className="gap-2">
                                    Start Learning Path
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href="/concepts">
                                <Button size="lg" variant="outline">
                                    Browse All Concepts
                                </Button>
                            </Link>
                        </div>

                        {/* Value Props */}
                        <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-3xl mx-auto">
                            <div className="flex items-center gap-3 justify-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-sm font-medium">Learn in 5-10 min</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-sm font-medium">Real-world examples</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Heart className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-sm font-medium">No jargon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            From APIs to security, performance to DevOps—everything you need to build modern web applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-background p-6 rounded-lg border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Rocket className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">API & Backend</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                REST APIs, GraphQL, rate limiting, caching, microservices, and more.
                            </p>
                            <Badge variant="secondary">12 concepts</Badge>
                        </div>

                        <div className="bg-background p-6 rounded-lg border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Frontend Architecture</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                CSR, SSR, SSG, state management, virtual DOM, and component patterns.
                            </p>
                            <Badge variant="secondary">8 concepts</Badge>
                        </div>

                        <div className="bg-background p-6 rounded-lg border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Security</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Authentication, HTTPS, XSS, CSRF, SQL injection, CORS, and OAuth.
                            </p>
                            <Badge variant="secondary">8 concepts</Badge>
                        </div>

                        <div className="bg-background p-6 rounded-lg border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Performance & Scaling</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Load balancing, CDN, caching, database optimization, and real-time data.
                            </p>
                            <Badge variant="secondary">10 concepts</Badge>
                        </div>

                        <div className="bg-background p-6 rounded-lg border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                                <Rocket className="w-6 h-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">DevOps & Infrastructure</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                Docker, CI/CD, logging, monitoring, deployment strategies, and more.
                            </p>
                            <Badge variant="secondary">7 concepts</Badge>
                        </div>

                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20 flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-bold mb-2">And More Coming!</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                New concepts added regularly
                            </p>
                            <Link href="/suggest">
                                <Button variant="outline" size="sm">
                                    Suggest a Topic
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Concepts */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Here</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Popular concepts to get you started. Each takes less than 10 minutes to understand.
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

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Level Up Your Skills?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join thousands of developers learning system design concepts the simple way.
                            No signup required · No credit card · No catch
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/concepts">
                                <Button size="lg">
                                    Browse All Concepts
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/support">
                                <Button size="lg" variant="outline">
                                    Support This Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}