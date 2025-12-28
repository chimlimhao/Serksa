'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface AnalogyItem {
    emoji: string;
    title: string;
    subtitle: string;
    highlighted?: boolean;
}

interface AnalogySectionProps {
    title: string;
    items: AnalogyItem[];
    description?: string;
}

export function AnalogySection({ title, items, description }: AnalogySectionProps) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                    2
                </span>
                Simple Analogy
            </h2>
            <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-accent" />
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`text-center p-4 rounded-lg ${item.highlighted ? 'bg-primary/10' : 'bg-background'
                                    }`}
                            >
                                <div className="text-3xl mb-2">{item.emoji}</div>
                                <div className="font-semibold mb-1">{item.title}</div>
                                <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                            </div>
                        ))}
                    </div>
                    {description && (
                        <p className="text-sm text-muted-foreground">{description}</p>
                    )}
                </CardContent>
            </Card>
        </section>
    );
}
