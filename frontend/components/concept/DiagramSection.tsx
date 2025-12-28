'use client';

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowDown } from "lucide-react";

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
                <CardContent className="">
                    <div className="bg-muted/30 p-4 md:p-8 rounded-lg">
                        {/* Mobile: Vertical Layout */}
                        <div className="flex md:hidden flex-col items-center gap-4 max-w-xs mx-auto">
                            {nodes.map((node, index) => (
                                <div key={index} className="flex flex-col items-center w-full">
                                    <div className="text-center">
                                        <div className={`w-16 h-16 ${colorClasses[node.color]} rounded-lg flex items-center justify-center mb-2 mx-auto`}>
                                            <span className="text-xl">{node.emoji}</span>
                                        </div>
                                        <div className="font-semibold text-sm">{node.title}</div>
                                        <div className="text-xs text-muted-foreground">{node.subtitle}</div>
                                    </div>

                                    {index < nodes.length - 1 && (
                                        <div className="flex items-center justify-center my-2">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className={`w-0.5 h-8 ${arrowColors[nodes[index + 1].color].split(' ')[0]}`}></div>
                                                <ArrowDown className={`w-4 h-4 ${arrowColors[nodes[index + 1].color].split(' ')[1]}`} />
                                                <div className={`w-0.5 h-8 ${arrowColors[nodes[index + 1].color].split(' ')[0]}`}></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Horizontal Layout */}
                        <div className="hidden md:flex items-start justify-between max-w-2xl mx-auto">
                            {nodes.map((node, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="text-center">
                                        <div className={`h-20 ${colorClasses[node.color]} rounded-lg flex items-center justify-center mb-2`}>
                                            <span className="text-2xl">{node.emoji}</span>
                                        </div>
                                        <div className="font-semibold">{node.title}</div>
                                        <div className="text-xs text-muted-foreground">{node.subtitle}</div>
                                    </div>

                                    {index < nodes.length - 1 && (
                                        <div className="flex items-center mx-4" style={{ marginTop: '40px' }}>
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
