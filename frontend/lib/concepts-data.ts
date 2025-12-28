// Web Development Concepts Data
// Focus: Real-world web development, backend, and architecture concepts

export interface Concept {
    title: string;
    description: string;
    category: 'API & Backend' | 'Frontend Architecture' | 'Security' | 'Performance & Scaling' | 'DevOps & Infrastructure';
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    readTime: string;
    slug: string;
}

export const webDevConcepts: Concept[] = [
    // API & Backend (12 concepts)
    {
        title: "What is an API?",
        description: "How different applications communicate with each other",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "4 min",
        slug: "what-is-api"
    },
    {
        title: "REST APIs Explained",
        description: "The most common API architecture pattern",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "6 min",
        slug: "rest-apis"
    },
    {
        title: "GraphQL vs REST",
        description: "Two different approaches to building APIs",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "graphql-vs-rest"
    },
    {
        title: "Rate Limiting",
        description: "Protect your API from abuse and overload",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "rate-limiting"
    },
    {
        title: "API Authentication",
        description: "JWT, OAuth, and API keys explained",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "8 min",
        slug: "api-authentication"
    },
    {
        title: "Webhooks Explained",
        description: "How apps notify each other in real-time",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "webhooks"
    },
    {
        title: "Microservices Architecture",
        description: "Breaking down monoliths into smaller services",
        category: "API & Backend",
        difficulty: "Advanced",
        readTime: "9 min",
        slug: "microservices"
    },
    {
        title: "Message Queues",
        description: "Async communication between services",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "message-queues"
    },
    {
        title: "Database Indexing",
        description: "Speed up your database queries dramatically",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "database-indexing"
    },
    {
        title: "SQL vs NoSQL",
        description: "Choosing the right database for your needs",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "6 min",
        slug: "sql-vs-nosql"
    },
    {
        title: "Caching Strategies",
        description: "Redis, CDN, and in-memory caching explained",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "8 min",
        slug: "caching-strategies"
    },
    {
        title: "Separation of Concerns",
        description: "Organizing code for maintainability",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "separation-of-concerns"
    },

    // Frontend Architecture (8 concepts)
    {
        title: "Client-Side Rendering",
        description: "How SPAs render content in the browser",
        category: "Frontend Architecture",
        difficulty: "Beginner",
        readTime: "6 min",
        slug: "client-side-rendering"
    },
    {
        title: "Server-Side Rendering",
        description: "Rendering HTML on the server for better performance",
        category: "Frontend Architecture",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "server-side-rendering"
    },
    {
        title: "Static Site Generation",
        description: "Pre-building pages at build time",
        category: "Frontend Architecture",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "static-site-generation"
    },
    {
        title: "State Management",
        description: "Managing data flow in complex applications",
        category: "Frontend Architecture",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "state-management"
    },
    {
        title: "Component Architecture",
        description: "Building reusable UI components",
        category: "Frontend Architecture",
        difficulty: "Beginner",
        readTime: "6 min",
        slug: "component-architecture"
    },
    {
        title: "Virtual DOM",
        description: "How React and Vue optimize rendering",
        category: "Frontend Architecture",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "virtual-dom"
    },
    {
        title: "Lazy Loading",
        description: "Load resources only when needed",
        category: "Frontend Architecture",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "lazy-loading"
    },
    {
        title: "Code Splitting",
        description: "Break your bundle into smaller chunks",
        category: "Frontend Architecture",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "code-splitting"
    },

    // Security (8 concepts)
    {
        title: "Authentication vs Authorization",
        description: "Who you are vs what you can do",
        category: "Security",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "authentication-vs-authorization"
    },
    {
        title: "HTTPS Explained",
        description: "How SSL/TLS keeps your data safe",
        category: "Security",
        difficulty: "Beginner",
        readTime: "6 min",
        slug: "https-explained"
    },
    {
        title: "XSS Attacks",
        description: "Cross-Site Scripting and how to prevent it",
        category: "Security",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "xss-attacks"
    },
    {
        title: "CSRF Protection",
        description: "Preventing Cross-Site Request Forgery",
        category: "Security",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "csrf-protection"
    },
    {
        title: "SQL Injection",
        description: "How attackers exploit databases",
        category: "Security",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "sql-injection"
    },
    {
        title: "CORS Explained",
        description: "Cross-Origin Resource Sharing demystified",
        category: "Security",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "cors-explained"
    },
    {
        title: "Password Hashing",
        description: "Storing passwords securely with bcrypt",
        category: "Security",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "password-hashing"
    },
    {
        title: "OAuth 2.0",
        description: "Third-party authentication explained",
        category: "Security",
        difficulty: "Advanced",
        readTime: "9 min",
        slug: "oauth-explained"
    },

    // Performance & Scaling (10 concepts)
    {
        title: "Load Balancing",
        description: "Distributing traffic across multiple servers",
        category: "Performance & Scaling",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "load-balancing"
    },
    {
        title: "Reverse Proxy",
        description: "Nginx and the gateway to your servers",
        category: "Performance & Scaling",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "reverse-proxy"
    },
    {
        title: "CDN Explained",
        description: "Content Delivery Networks for global speed",
        category: "Performance & Scaling",
        difficulty: "Beginner",
        readTime: "6 min",
        slug: "cdn-explained"
    },
    {
        title: "Horizontal vs Vertical Scaling",
        description: "Two ways to handle more traffic",
        category: "Performance & Scaling",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "horizontal-vs-vertical-scaling"
    },
    {
        title: "Database Replication",
        description: "Copying data across multiple databases",
        category: "Performance & Scaling",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "database-replication"
    },
    {
        title: "Connection Pooling",
        description: "Reusing database connections efficiently",
        category: "Performance & Scaling",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "connection-pooling"
    },
    {
        title: "Polling vs Webhooks vs WebSockets",
        description: "Real-time communication strategies",
        category: "Performance & Scaling",
        difficulty: "Intermediate",
        readTime: "8 min",
        slug: "polling-webhooks-websockets"
    },
    {
        title: "Server-Sent Events",
        description: "One-way real-time updates from server",
        category: "Performance & Scaling",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "server-sent-events"
    },
    {
        title: "Streaming Data",
        description: "Processing large data in chunks",
        category: "Performance & Scaling",
        difficulty: "Advanced",
        readTime: "8 min",
        slug: "streaming-data"
    },
    {
        title: "Debouncing vs Throttling",
        description: "Controlling function execution frequency",
        category: "Performance & Scaling",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "debouncing-throttling"
    },

    // DevOps & Infrastructure (7 concepts)
    {
        title: "Docker Containers",
        description: "Package your app with all its dependencies",
        category: "DevOps & Infrastructure",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "docker-containers"
    },
    {
        title: "CI/CD Pipelines",
        description: "Automate testing and deployment",
        category: "DevOps & Infrastructure",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "ci-cd-pipelines"
    },
    {
        title: "Environment Variables",
        description: "Managing configuration across environments",
        category: "DevOps & Infrastructure",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "environment-variables"
    },
    {
        title: "Logging & Monitoring",
        description: "Track errors and performance in production",
        category: "DevOps & Infrastructure",
        difficulty: "Intermediate",
        readTime: "7 min",
        slug: "logging-monitoring"
    },
    {
        title: "Blue-Green Deployment",
        description: "Zero-downtime deployment strategy",
        category: "DevOps & Infrastructure",
        difficulty: "Advanced",
        readTime: "7 min",
        slug: "blue-green-deployment"
    },
    {
        title: "API Gateway",
        description: "Single entry point for microservices",
        category: "DevOps & Infrastructure",
        difficulty: "Advanced",
        readTime: "8 min",
        slug: "api-gateway"
    },
    {
        title: "Service Mesh",
        description: "Managing service-to-service communication",
        category: "DevOps & Infrastructure",
        difficulty: "Advanced",
        readTime: "9 min",
        slug: "service-mesh"
    },

    // Learning Path - Level 1: How a System Works
    {
        title: "Client vs Server",
        description: "Understanding who asks and who answers in web applications",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "4 min",
        slug: "client-server"
    },
    {
        title: "Request & Response",
        description: "The fundamental conversation pattern of the web",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "request-response"
    },
    {
        title: "Backend Explained",
        description: "What happens behind the scenes on the server",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "5 min",
        slug: "backend-explained"
    },
    {
        title: "Database Basics",
        description: "Where applications store data permanently",
        category: "API & Backend",
        difficulty: "Beginner",
        readTime: "6 min",
        slug: "database-basics"
    },

    // Learning Path - Level 2: How Systems Talk
    {
        title: "Stateless vs Stateful",
        description: "Does the server remember you between requests?",
        category: "API & Backend",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "stateless-stateful"
    },

    // Learning Path - Level 4: Data Problems
    {
        title: "Database Sharding",
        description: "Splitting databases across multiple servers for scale",
        category: "Performance & Scaling",
        difficulty: "Advanced",
        readTime: "7 min",
        slug: "database-sharding"
    },

    // Learning Path - Level 5: Reliability & Failure
    {
        title: "Redundancy",
        description: "Having backup copies to prevent downtime",
        category: "Performance & Scaling",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "redundancy"
    },
    {
        title: "Health Checks",
        description: "Automated tests to verify servers are working",
        category: "DevOps & Infrastructure",
        difficulty: "Intermediate",
        readTime: "5 min",
        slug: "health-checks"
    },

    // Learning Path - Level 6: Security Basics
    {
        title: "Authorization Explained",
        description: "What authenticated users are allowed to do",
        category: "Security",
        difficulty: "Intermediate",
        readTime: "6 min",
        slug: "authorization-explained"
    },
];

// Helper functions
export function getConceptBySlug(slug: string): Concept | undefined {
    return webDevConcepts.find(concept => concept.slug === slug);
}

export function getConceptsByCategory(category: Concept['category']): Concept[] {
    return webDevConcepts.filter(concept => concept.category === category);
}

export function getFeaturedConcepts(count: number = 6): Concept[] {
    // Return beginner and intermediate concepts for featured section
    return webDevConcepts
        .filter(c => c.difficulty === 'Beginner' || c.difficulty === 'Intermediate')
        .slice(0, count);
}

export const categories = [
    'All',
    'API & Backend',
    'Frontend Architecture',
    'Security',
    'Performance & Scaling',
    'DevOps & Infrastructure'
] as const;

// Get concept count by category
export function getConceptCountByCategory() {
    return {
        'API & Backend': getConceptsByCategory('API & Backend').length,
        'Frontend Architecture': getConceptsByCategory('Frontend Architecture').length,
        'Security': getConceptsByCategory('Security').length,
        'Performance & Scaling': getConceptsByCategory('Performance & Scaling').length,
        'DevOps & Infrastructure': getConceptsByCategory('DevOps & Infrastructure').length,
    };
}
