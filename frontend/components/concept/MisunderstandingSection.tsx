'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface MisunderstandingSectionProps {
    wrong: string;
    correct: string;
}

export function MisunderstandingSection({ wrong, correct }: MisunderstandingSectionProps) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                    5
                </span>
                Common Misunderstanding
            </h2>
            <Card className="bg-destructive/5 border-destructive/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="w-5 h-5" />
                        What People Get Wrong
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="font-semibold mb-2">❌ Wrong:</div>
                        <p className="text-sm text-muted-foreground mb-4">{wrong}</p>

                        <div className="font-semibold mb-2">✅ Correct:</div>
                        <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: correct }} />
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
