'use client';

import { Badge } from "@/components/ui/badge";

interface ConceptHeaderProps {
    title: string;
    category: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    readTime: number;
}

export function ConceptHeader({ title, category, difficulty, readTime }: ConceptHeaderProps) {
    return (
        <div>
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge>{category}</Badge>
                <Badge variant="outline">{difficulty}</Badge>
                <span className="text-sm text-muted-foreground">{readTime} min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        </div>
    );
}
