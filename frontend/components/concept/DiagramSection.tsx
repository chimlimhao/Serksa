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
        primary: 'bg-gradient-to-br from-[#001BB7] to-[#0046FF]',
        secondary: 'bg-gradient-to-br from-[#0046FF] to-[#001BB7]',
        accent: 'bg-gradient-to-br from-[#ff5941] to-[#FF6951]',
    };

    const arrowColors = {
        primary: 'text-[#001BB7]',
        secondary: 'text-[#0046FF]',
        accent: 'text-[#ff5941]',
    };

    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#ff5941]/10 flex items-center justify-center text-[#ff5941] text-sm font-bold">
                    3
                </span>
                Visual Flow
            </h2>
            <Card className="border-2 border-gray-200">
                <CardContent className="p-6 md:p-8">
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl">
                        {/* Mobile: Vertical Layout */}
                        <div className="flex md:hidden flex-col items-center gap-6 max-w-xs mx-auto">
                            {nodes.map((node, index) => (
                                <div key={index} className="flex flex-col items-center w-full">
                                    <div className="text-center">
                                        <div className={`w-20 h-20 ${colorClasses[node.color]} rounded-2xl flex flex-col items-center justify-center mb-3 mx-auto shadow-lg p-3`}>
                                            <span className="text-3xl mb-1">{node.emoji}</span>
                                            <span className="text-white font-bold text-xs text-center leading-tight">{node.title}</span>
                                        </div>
                                        {node.subtitle && (
                                            <p className="text-xs text-gray-600 text-center font-medium mt-2">{node.subtitle}</p>
                                        )}
                                    </div>

                                    {index < nodes.length - 1 && (
                                        <div className="flex items-center justify-center my-2">
                                            <ArrowDown className={`w-6 h-6 ${arrowColors[nodes[index + 1].color]}`} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Horizontal Layout */}
                        <div className="hidden md:flex items-center justify-center gap-8 flex-wrap">
                            {nodes.map((node, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="text-center">
                                        <div className={`w-24 h-24 ${colorClasses[node.color]} rounded-2xl flex flex-col items-center justify-center mb-3 shadow-lg p-3`}>
                                            <span className="text-4xl mb-1">{node.emoji}</span>
                                            <span className="text-white font-bold text-xs text-center leading-tight">{node.title}</span>
                                        </div>
                                        {node.subtitle && (
                                            <p className="text-xs text-gray-600 text-center font-medium">{node.subtitle}</p>
                                        )}
                                    </div>

                                    {index < nodes.length - 1 && (
                                        <div className="flex items-center mx-6">
                                            <ArrowRight className={`w-8 h-8 ${arrowColors[nodes[index + 1].color]}`} />
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
