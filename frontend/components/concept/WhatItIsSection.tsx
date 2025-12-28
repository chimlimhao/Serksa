'use client';

import { Card, CardContent } from "@/components/ui/card";

interface WhatItIsSectionProps {
    content: string | React.ReactNode;
}

export function WhatItIsSection({ content }: WhatItIsSectionProps) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                    1
                </span>
                What It Is
            </h2>
            <Card>
                <CardContent className="pt-6">
                    {typeof content === 'string' ? (
                        <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                        <div className="text-lg leading-relaxed">{content}</div>
                    )}
                </CardContent>
            </Card>
        </section>
    );
}
