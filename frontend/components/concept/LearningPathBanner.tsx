'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { LearningPathContext } from "@/lib/learning-path";

interface LearningPathBannerProps {
    context: LearningPathContext;
}

export function LearningPathBanner({ context }: LearningPathBannerProps) {
    if (!context.isInPath || !context.level) {
        return null;
    }

    const { level, conceptIndex, totalInLevel, previous, next } = context;

    return (
        <div className="mb-8 space-y-4">
            {/* Learning Path Context */}
            <Card className={`bg-gradient-to-r ${level.color} border-2 ${level.borderColor}`}>
                <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center border-2 ${level.borderColor} flex-shrink-0`}>
                                <span className="text-sm font-bold">{level.level}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <BookOpen className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-xs font-medium text-muted-foreground">
                                        Learning Path · Level {level.level}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-sm mb-1">{level.title}</h3>
                                <p className="text-xs text-muted-foreground">
                                    Concept {(conceptIndex ?? 0) + 1} of {totalInLevel} · {level.subtitle}
                                </p>
                            </div>
                        </div>
                        <Link href="/learn">
                            <Button variant="ghost" size="sm" className="text-xs">
                                View Path
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4">
                {previous ? (
                    <Link href={`/concepts/${previous.slug}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full justify-start text-xs sm:text-sm h-auto py-2">
                            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                            <span className="truncate">
                                <span className="hidden sm:inline">Previous: </span>
                                {previous.title}
                            </span>
                        </Button>
                    </Link>
                ) : (
                    <div className="flex-1"></div>
                )}

                {next ? (
                    <Link href={`/concepts/${next.slug}`} className="flex-1">
                        <Button size="sm" className="w-full justify-end text-xs sm:text-sm h-auto py-2">
                            <span className="truncate">
                                <span className="hidden sm:inline">Next: </span>
                                {next.title}
                            </span>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 flex-shrink-0" />
                        </Button>
                    </Link>
                ) : (
                    <div className="flex-1"></div>
                )}
            </div>
        </div>
    );
}
