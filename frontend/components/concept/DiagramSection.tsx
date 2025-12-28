'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface DiagramNode {
    emoji: string;
    title: string;
    subtitle: string;
    color: 'primary' | 'secondary' | 'accent';
}

interface DiagramSectionProps {
    nodes: DiagramNode[];
}

export function DiagramSection({ nodes }: DiagramSectionProps) {
    const colorClasses = {
        primary: 'bg-primary/20',
        secondary: 'bg-secondary/20',
        accent: 'bg-accent/20',
    };

    const arrowColors = {
        primary: 'bg-primary text-primary',
        secondary: 'bg-secondary text-secondary',
        accent: 'bg-accent text-accent',
    };

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                    3
                </span>
                Visual Diagram
            </h2>
            <Card>
                <CardContent className="pt-6">
                    <div className="bg-muted/30 p-8 rounded-lg">
                        <div className="flex items-center justify-between max-w-2xl mx-auto">
                            {nodes.map((node, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="text-center">
                                        <div className={`w-20 h-20 ${colorClasses[node.color]} rounded-lg flex items-center justify-center mb-2`}>
                                            <span className="text-2xl">{node.emoji}</span>
                                        </div>
                                        <div className="font-semibold">{node.title}</div>
                                        <div className="text-xs text-muted-foreground">{node.subtitle}</div>
                                    </div>

                                    {index < nodes.length - 1 && (
                                        <div className="flex-1 flex items-center justify-center mx-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`h-0.5 w-16 ${arrowColors[nodes[index + 1].color].split(' ')[0]}`}></div>
                                                <ArrowRight className={`w-5 h-5 ${arrowColors[nodes[index + 1].color].split(' ')[1]}`} />
                                                <div className={`h-0.5 w-16 ${arrowColors[nodes[index + 1].color].split(' ')[0]}`}></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
