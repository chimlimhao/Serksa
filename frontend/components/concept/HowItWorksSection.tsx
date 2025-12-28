'use client';

import { Card, CardContent } from "@/components/ui/card";

interface Step {
    step: string;
    title: string;
    description: string;
}

interface HowItWorksSectionProps {
    steps: Step[];
}

export function HowItWorksSection({ steps }: HowItWorksSectionProps) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                    4
                </span>
                How It Works
            </h2>
            <div className="space-y-4">
                {steps.map((item, i) => (
                    <Card key={i}>
                        <CardContent className="">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">{item.title}</div>
                                    <div className="text-sm text-muted-foreground">{item.description}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
