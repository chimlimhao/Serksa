'use client';

import { Card, CardContent } from "@/components/ui/card";

interface RealWorldExampleSectionProps {
    title: string;
    description: string;
    points: string[];
}

export function RealWorldExampleSection({ title, description, points }: RealWorldExampleSectionProps) {
    return (
        <section className="mb-12">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <Card>
                <CardContent className="pt-6">
                    <p className="mb-4">{description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </section>
    );
}
