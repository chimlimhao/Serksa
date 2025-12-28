// Learning Path Structure and Navigation
// This defines the official learning path and provides navigation helpers

export interface LearningPathConcept {
    slug: string;
    title: string;
    why: string;
}

export interface LearningPathLevel {
    level: number;
    title: string;
    subtitle: string;
    description: string;
    outcome: string;
    color: string;
    borderColor: string;
    concepts: LearningPathConcept[];
}

// The official learning path - 6 levels
export const learningPath: LearningPathLevel[] = [
    {
        level: 1,
        title: "How a System Works",
        subtitle: "The Mental Model",
        description: "Understand the basic flow of how any system works. This is your foundation.",
        outcome: "I understand how a simple app works",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/30",
        concepts: [
            { slug: "client-server", title: "Client vs Server", why: "Who asks, who answers" },
            { slug: "request-response", title: "Request & Response", why: "The conversation pattern" },
            { slug: "what-is-api", title: "What is an API?", why: "How software talks" },
            { slug: "backend-explained", title: "Backend", why: "Where the logic lives" },
            { slug: "database-basics", title: "Database", why: "Where data is stored" },
        ]
    },
    {
        level: 2,
        title: "How Systems Talk",
        subtitle: "Communication Clarity",
        description: "Learn how different parts of a system communicate with each other.",
        outcome: "I know how parts communicate",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/30",
        concepts: [
            { slug: "rest-apis", title: "REST Basics", why: "The standard way to build APIs" },
            { slug: "https-explained", title: "HTTPS", why: "Secure communication" },
            { slug: "stateless-stateful", title: "Stateless vs Stateful", why: "Does the server remember you?" },
        ]
    },
    {
        level: 3,
        title: "Handling More Users",
        subtitle: "Scaling Intuition",
        description: "What happens when your system grows from 10 to 10 million users?",
        outcome: "I know what breaks when users grow",
        color: "from-orange-500/20 to-amber-500/20",
        borderColor: "border-orange-500/30",
        concepts: [
            { slug: "load-balancing", title: "Load Balancer", why: "Spread work across servers" },
            { slug: "horizontal-vertical-scaling", title: "Horizontal vs Vertical Scaling", why: "How to grow your system" },
            { slug: "caching-strategies", title: "Cache", why: "Remember instead of recalculate" },
            { slug: "cdn-explained", title: "CDN", why: "Serve content from nearby" },
        ]
    },
    {
        level: 4,
        title: "Data Problems",
        subtitle: "Data Growth Understanding",
        description: "As data grows, new challenges appear. Learn how to handle them.",
        outcome: "I understand data trade-offs",
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-purple-500/30",
        concepts: [
            { slug: "sql-vs-nosql", title: "SQL vs NoSQL", why: "Choosing the right database" },
            { slug: "database-indexing", title: "Indexes", why: "Finding data super fast" },
            { slug: "database-replication", title: "Replication", why: "Copying data for safety" },
            { slug: "database-sharding", title: "Sharding", why: "Splitting data across servers" },
        ]
    },
    {
        level: 5,
        title: "Reliability & Failure",
        subtitle: "Failure Awareness",
        description: "Systems fail. Learn how to design for failure and recovery.",
        outcome: "I know systems fail and recover",
        color: "from-red-500/20 to-rose-500/20",
        borderColor: "border-red-500/30",
        concepts: [
            { slug: "redundancy", title: "Redundancy", why: "Having backups" },
            { slug: "health-checks", title: "Health Checks", why: "Is the server alive?" },
            { slug: "logging-monitoring", title: "Monitoring", why: "Watching your system" },
        ]
    },
    {
        level: 6,
        title: "Security Basics",
        subtitle: "Safe Access",
        description: "Protect your system from unauthorized access and attacks.",
        outcome: "I know how access is controlled",
        color: "from-indigo-500/20 to-violet-500/20",
        borderColor: "border-indigo-500/30",
        concepts: [
            { slug: "authentication-authorization", title: "Authentication", why: "Who are you?" },
            { slug: "authorization-explained", title: "Authorization", why: "What can you do?" },
            { slug: "api-authentication", title: "Tokens", why: "Proof of identity" },
            { slug: "rate-limiting", title: "Rate Limiting", why: "Preventing abuse" },
        ]
    },
];

// Helper: Get all concept slugs in the learning path
export function getAllLearningPathSlugs(): string[] {
    return learningPath.flatMap(level => level.concepts.map(c => c.slug));
}

// Helper: Check if a concept is in the learning path
export function isInLearningPath(slug: string): boolean {
    return getAllLearningPathSlugs().includes(slug);
}

// Helper: Get learning path context for a concept
export interface LearningPathContext {
    isInPath: boolean;
    level?: LearningPathLevel;
    conceptIndex?: number;
    totalInLevel?: number;
    previous?: { slug: string; title: string };
    next?: { slug: string; title: string };
}

export function getLearningPathContext(slug: string): LearningPathContext {
    // Find which level and position this concept is in
    for (const level of learningPath) {
        const conceptIndex = level.concepts.findIndex(c => c.slug === slug);

        if (conceptIndex !== -1) {
            // Found it! Now get previous and next
            const previous = conceptIndex > 0
                ? level.concepts[conceptIndex - 1]
                : null;

            let next = conceptIndex < level.concepts.length - 1
                ? level.concepts[conceptIndex + 1]
                : null;

            // If no next in this level, get first concept of next level
            if (!next) {
                const nextLevel = learningPath.find(l => l.level === level.level + 1);
                if (nextLevel && nextLevel.concepts.length > 0) {
                    next = nextLevel.concepts[0];
                }
            }

            return {
                isInPath: true,
                level,
                conceptIndex,
                totalInLevel: level.concepts.length,
                previous: previous ? { slug: previous.slug, title: previous.title } : undefined,
                next: next ? { slug: next.slug, title: next.title } : undefined,
            };
        }
    }

    return { isInPath: false };
}

// Helper: Get progress through the learning path
export function getLearningPathProgress(slug: string): { current: number; total: number } | null {
    const allSlugs = getAllLearningPathSlugs();
    const currentIndex = allSlugs.indexOf(slug);

    if (currentIndex === -1) return null;

    return {
        current: currentIndex + 1,
        total: allSlugs.length,
    };
}
