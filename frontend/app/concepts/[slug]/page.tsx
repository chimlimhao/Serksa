'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { Separator } from "@/components/ui/separator";
import {
    ConceptLayout,
    ConceptHeader,
    WhatItIsSection,
    AnalogySection,
    DiagramSection,
    HowItWorksSection,
    MisunderstandingSection,
    RealWorldExampleSection,
    ConceptNavigation,
} from '@/components/concept';
import { getConceptBySlug, webDevConcepts } from '@/lib/concepts-data';
import { conceptContent } from '@/lib/concept-content';

interface ConceptPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ConceptPage({ params }: ConceptPageProps) {
    // Unwrap the params Promise
    const { slug } = use(params);

    const concept = getConceptBySlug(slug);

    if (!concept) {
        notFound();
    }

    // Get the content for this concept
    const content = conceptContent[slug];

    if (!content) {
        // If content doesn't exist yet, show a coming soon page
        return (
            <ConceptLayout>
                <div className="text-center py-20">
                    <h1 className="text-4xl font-bold mb-4">{concept.title}</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        This concept is coming soon!
                    </p>
                    <p className="text-muted-foreground">
                        We're working on creating high-quality content for this concept.
                    </p>
                </div>
            </ConceptLayout>
        );
    }

    // Find previous and next concepts
    const currentIndex = webDevConcepts.findIndex(c => c.slug === slug);
    const previousConcept = currentIndex > 0 ? webDevConcepts[currentIndex - 1] : undefined;
    const nextConcept = currentIndex < webDevConcepts.length - 1 ? webDevConcepts[currentIndex + 1] : undefined;

    return (
        <ConceptLayout>
            <ConceptHeader
                title={concept.title}
                category={concept.category}
                difficulty={concept.difficulty}
                readTime={parseInt(concept.readTime)}
            />

            <WhatItIsSection content={content.whatItIs} />

            <AnalogySection
                title={content.analogy.title}
                items={content.analogy.items}
                description={content.analogy.description}
            />

            <DiagramSection nodes={content.diagram} />

            <HowItWorksSection steps={content.howItWorks} />

            <MisunderstandingSection
                wrong={content.misunderstanding.wrong}
                correct={content.misunderstanding.correct}
            />

            <Separator className="my-12" />

            <RealWorldExampleSection
                title={content.realWorld.title}
                description={content.realWorld.description}
                points={content.realWorld.points}
            />

            <ConceptNavigation
                previous={previousConcept ? {
                    href: `/concepts/${previousConcept.slug}`,
                    title: previousConcept.title,
                } : undefined}
                next={nextConcept ? {
                    href: `/concepts/${nextConcept.slug}`,
                    title: nextConcept.title,
                } : undefined}
            />
        </ConceptLayout>
    );
}
