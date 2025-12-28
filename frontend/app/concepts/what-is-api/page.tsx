'use client';

import { Separator } from "@/components/ui/separator";
import { ConceptLayout } from "@/components/concept/ConceptLayout";
import { ConceptHeader } from "@/components/concept/ConceptHeader";
import { WhatItIsSection } from "@/components/concept/WhatItIsSection";
import { AnalogySection } from "@/components/concept/AnalogySection";
import { DiagramSection } from "@/components/concept/DiagramSection";
import { HowItWorksSection } from "@/components/concept/HowItWorksSection";
import { MisunderstandingSection } from "@/components/concept/MisunderstandingSection";
import { RealWorldExampleSection } from "@/components/concept/RealWorldExampleSection";
import { ConceptNavigation } from "@/components/concept/ConceptNavigation";

export default function WhatIsAPIPage() {
    return (
        <ConceptLayout>
            <ConceptHeader
                title="What is an API?"
                category="API & Backend"
                difficulty="Beginner"
                readTime={4}
            />

            <WhatItIsSection
                content="An <strong>API (Application Programming Interface)</strong> is a set of rules that lets different software applications talk to each other. It's like a waiter in a restaurant who takes your order to the kitchen and brings back your food."
            />

            <AnalogySection
                title="The Restaurant Analogy"
                items={[
                    {
                        emoji: "👤",
                        title: "You (Client)",
                        subtitle: "Want to order food",
                    },
                    {
                        emoji: "🍽️",
                        title: "Waiter (API)",
                        subtitle: "Takes order & brings food",
                        highlighted: true,
                    },
                    {
                        emoji: "👨‍🍳",
                        title: "Kitchen (Server)",
                        subtitle: "Prepares the food",
                    },
                ]}
                description="You don't go into the kitchen yourself. The waiter (API) handles communication between you and the kitchen, making sure your order is understood and your food is delivered correctly."
            />

            <DiagramSection
                nodes={[
                    {
                        emoji: "📱",
                        title: "Your App",
                        subtitle: "Makes Request",
                        color: "primary",
                    },
                    {
                        emoji: "🔌",
                        title: "API",
                        subtitle: "Processes",
                        color: "secondary",
                    },
                    {
                        emoji: "🗄️",
                        title: "Database",
                        subtitle: "Returns Data",
                        color: "accent",
                    },
                ]}
            />

            <HowItWorksSection
                steps={[
                    {
                        step: "1",
                        title: "Your app makes a request",
                        description: "Example: 'Get me the weather for New York'",
                    },
                    {
                        step: "2",
                        title: "API receives and validates",
                        description: "Checks if the request is properly formatted",
                    },
                    {
                        step: "3",
                        title: "API fetches the data",
                        description: "Queries the database or external service",
                    },
                    {
                        step: "4",
                        title: "API formats the response",
                        description: "Packages the data in a readable format (usually JSON)",
                    },
                    {
                        step: "5",
                        title: "Your app receives the data",
                        description: "Displays 'Sunny, 75°F' to the user",
                    },
                ]}
            />

            <MisunderstandingSection
                wrong='"An API is a database" or "An API is a website"'
                correct="An API is the <strong>messenger</strong> between applications. It's not the data itself, nor the application—it's the communication layer that allows them to work together."
            />

            <Separator className="my-12" />

            <RealWorldExampleSection
                title="Real-World Example"
                description="When you use a weather app on your phone:"
                points={[
                    "Your app doesn't have all the weather data stored locally",
                    "It uses a weather API (like OpenWeatherMap) to request current conditions",
                    "The API fetches data from weather stations and satellites",
                    "Your app receives the data and displays it beautifully",
                ]}
            />

            <ConceptNavigation
                previous={{
                    href: "/concepts/rest-apis",
                    title: "REST APIs",
                }}
                next={{
                    href: "/concepts/graphql-vs-rest",
                    title: "GraphQL vs REST",
                }}
            />
        </ConceptLayout>
    );
}
