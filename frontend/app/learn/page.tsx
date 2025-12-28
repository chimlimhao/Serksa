import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Circle } from "lucide-react";
import { learningPath } from "@/lib/learning-path";

export default function LearningPathPage() {
    const totalConcepts = learningPath.reduce((acc, level) => acc + level.concepts.length, 0);

    return (
        <div className="min-h-screen">
            <Header activeTab="learn" />

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Simple Hero */}
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Your Learning Path
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Not sure where to start? Follow this path.
                            Each level builds on the last, so you're never lost.
                        </p>
                        <div className="text-sm text-muted-foreground">
                            {totalConcepts} concepts · 6 levels · Start to finish
                        </div>
                    </div>

                    {/* 6 Levels */}
                    <div className="space-y-12">
                        {learningPath.map((level, levelIndex) => (
                            <div key={levelIndex} className="relative">
                                {/* Level Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center border-2 ${level.borderColor} flex-shrink-0`}>
                                        <span className="text-lg font-bold">{level.level}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-muted-foreground mb-1">
                                            Level {level.level} · {level.concepts.length} concepts
                                        </div>
                                        <h2 className="text-2xl font-bold mb-1">{level.title}</h2>
                                        <p className="text-sm text-muted-foreground italic mb-2">
                                            {level.subtitle}
                                        </p>
                                        <p className="text-muted-foreground">
                                            {level.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Concepts */}
                                <div className="ml-16 space-y-3">
                                    {level.concepts.map((concept, conceptIndex) => (
                                        <Link
                                            key={conceptIndex}
                                            href={`/concepts/${concept.slug}`}
                                            className="group block"
                                        >
                                            <Card className="hover:shadow-md transition-all hover:border-primary/50">
                                                <CardContent className="p-4">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex items-center gap-3 flex-1">
                                                            <Circle className="w-2 h-2 fill-current text-muted-foreground" />
                                                            <div className="flex-1">
                                                                <h3 className="font-semibold group-hover:text-primary transition-colors">
                                                                    {concept.title}
                                                                </h3>
                                                                <p className="text-sm text-muted-foreground">
                                                                    {concept.why}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>

                                {/* Outcome Badge */}
                                <div className="ml-16 mt-4 p-3 bg-muted/30 rounded-lg border border-dashed">
                                    <div className="text-sm">
                                        <span className="font-medium">After this level:</span>{" "}
                                        <span className="text-muted-foreground">"{level.outcome}"</span>
                                    </div>
                                </div>

                                {/* Connector Line */}
                                {levelIndex < learningPath.length - 1 && (
                                    <div className="flex justify-start ml-6 my-8">
                                        <div className="w-0.5 h-12 bg-gradient-to-b from-muted to-transparent"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* What's Next */}
                    <Card className="mt-16 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold mb-3">What's Next?</h2>
                            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                                After completing these {totalConcepts} core concepts, you'll have a solid foundation.
                                You can then explore advanced topics like microservices, message queues, and more.
                            </p>
                            <Link href="/concepts">
                                <Button variant="outline" size="lg">
                                    Browse All Concepts
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Simple CTA */}
                    <div className="mt-12 text-center p-8 bg-muted/30 rounded-lg">
                        <p className="text-lg font-semibold mb-4">Ready to start?</p>
                        <Link href="/concepts/client-server">
                            <Button size="lg">
                                Begin Level 1: Client vs Server
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
