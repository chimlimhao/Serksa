// Concept Content Data
// This file contains the detailed explanations for each concept

export interface AnalogyItem {
    emoji: string;
    title: string;
    subtitle: string;
    highlighted?: boolean;
}

export interface DiagramNode {
    emoji: string;
    title: string;
    subtitle: string;
    color: 'primary' | 'secondary' | 'accent';
}

export interface Step {
    step: string;
    title: string;
    description: string;
}

export interface ConceptContentData {
    whatItIs: string;
    analogy: {
        title: string;
        items: AnalogyItem[];
        description?: string;
    };
    diagram: DiagramNode[];
    howItWorks: Step[];
    misunderstanding: {
        wrong: string;
        correct: string;
    };
    realWorld: {
        title: string;
        description: string;
        points: string[];
    };
}


export const conceptContent: Record<string, ConceptContentData> = {
    // What is an API?
    'what-is-api': {
        whatItIs: "An <strong>API (Application Programming Interface)</strong> is a set of rules that lets different software applications talk to each other. It's like a waiter in a restaurant who takes your order to the kitchen and brings back your food.",
        analogy: {
            title: "The Restaurant Analogy",
            items: [
                { emoji: "👤", title: "You (Client)", subtitle: "Want to order food" },
                { emoji: "🍽️", title: "Waiter (API)", subtitle: "Takes order & brings food", highlighted: true },
                { emoji: "👨‍🍳", title: "Kitchen (Server)", subtitle: "Prepares the food" },
            ],
            description: "You don't go into the kitchen yourself. The waiter (API) handles communication between you and the kitchen, making sure your order is understood and your food is delivered correctly."
        },
        diagram: [
            { emoji: "📱", title: "Your App", subtitle: "Makes Request", color: "primary" },
            { emoji: "🔌", title: "API", subtitle: "Processes", color: "secondary" },
            { emoji: "🗄️", title: "Database", subtitle: "Returns Data", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Your app makes a request", description: "Example: 'Get me the weather for New York'" },
            { step: "2", title: "API receives and validates", description: "Checks if the request is properly formatted" },
            { step: "3", title: "API fetches the data", description: "Queries the database or external service" },
            { step: "4", title: "API formats the response", description: "Packages the data in a readable format (usually JSON)" },
            { step: "5", title: "Your app receives the data", description: "Displays 'Sunny, 75°F' to the user" },
        ],
        misunderstanding: {
            wrong: '"An API is a database" or "An API is a website"',
            correct: "An API is the <strong>messenger</strong> between applications. It's not the data itself, nor the application—it's the communication layer that allows them to work together."
        },
        realWorld: {
            title: "Real-World Example",
            description: "When you use a weather app on your phone:",
            points: [
                "Your app doesn't have all the weather data stored locally",
                "It uses a weather API (like OpenWeatherMap) to request current conditions",
                "The API fetches data from weather stations and satellites",
                "Your app receives the data and displays it beautifully",
            ]
        }
    },

    // REST APIs Explained
    'rest-apis': {
        whatItIs: "<strong>REST (Representational State Transfer)</strong> is an architectural style for building APIs. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, making APIs predictable and easy to use.",
        analogy: {
            title: "The Library Analogy",
            items: [
                { emoji: "📚", title: "Books (Resources)", subtitle: "Data you want to access" },
                { emoji: "📋", title: "Catalog System (REST)", subtitle: "Organized way to find books", highlighted: true },
                { emoji: "👨‍💼", title: "Librarian (Server)", subtitle: "Manages the books" },
            ],
            description: "REST is like a library's catalog system. You use standard methods (search, borrow, return) to interact with books. You don't need to know where books are stored—you just follow the system."
        },
        diagram: [
            { emoji: "🌐", title: "Client", subtitle: "HTTP Request", color: "primary" },
            { emoji: "🔄", title: "REST API", subtitle: "Routes to Resource", color: "secondary" },
            { emoji: "💾", title: "Resource", subtitle: "Returns Data", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Client sends HTTP request", description: "GET /users/123 - Request user data" },
            { step: "2", title: "API routes to resource", description: "Maps URL to the users resource" },
            { step: "3", title: "Server processes request", description: "Fetches user 123 from database" },
            { step: "4", title: "Returns JSON response", description: "Sends back user data in JSON format" },
        ],
        misunderstanding: {
            wrong: '"REST means using JSON" or "Any HTTP API is REST"',
            correct: "REST is an <strong>architectural style</strong> with specific constraints: stateless communication, resource-based URLs, standard HTTP methods, and uniform interfaces."
        },
        realWorld: {
            title: "Real-World Example",
            description: "A social media app using REST API:",
            points: [
                "GET /posts - Fetch all posts",
                "POST /posts - Create a new post",
                "PUT /posts/123 - Update post 123",
                "DELETE /posts/123 - Delete post 123",
            ]
        }
    },

    // Rate Limiting
    'rate-limiting': {
        whatItIs: "<strong>Rate limiting</strong> is a technique to control how many requests a user can make to your API in a given time period. It prevents abuse, protects your servers, and ensures fair usage for all users.",
        analogy: {
            title: "The Nightclub Bouncer Analogy",
            items: [
                { emoji: "🎉", title: "Nightclub (API)", subtitle: "Limited capacity" },
                { emoji: "💪", title: "Bouncer (Rate Limiter)", subtitle: "Controls entry", highlighted: true },
                { emoji: "👥", title: "People (Requests)", subtitle: "Want to get in" },
            ],
            description: "A nightclub bouncer only lets a certain number of people in at a time. If too many try to enter at once, they have to wait. Rate limiting works the same way for API requests."
        },
        diagram: [
            { emoji: "📱", title: "Client", subtitle: "Sends Requests", color: "primary" },
            { emoji: "🛡️", title: "Rate Limiter", subtitle: "Checks Limit", color: "secondary" },
            { emoji: "✅", title: "API", subtitle: "Processes or Rejects", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Request arrives", description: "Client sends a request to your API" },
            { step: "2", title: "Check counter", description: "Rate limiter checks how many requests from this client" },
            { step: "3", title: "Within limit?", description: "If under limit, allow. If over, reject with 429 error" },
            { step: "4", title: "Increment counter", description: "Add 1 to the client's request count" },
            { step: "5", title: "Reset after time window", description: "Counter resets after 1 minute/hour/day" },
        ],
        misunderstanding: {
            wrong: '"Rate limiting is only for preventing attacks"',
            correct: "Rate limiting serves multiple purposes: <strong>preventing abuse, ensuring fair usage, protecting infrastructure, and managing costs</strong>. It's essential for any production API."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Twitter API rate limiting:",
            points: [
                "Free tier: 100 requests per 15 minutes",
                "If you exceed this, you get a 429 'Too Many Requests' error",
                "You must wait until the 15-minute window resets",
                "This prevents bots from overwhelming their servers",
            ]
        }
    },

    // Authentication vs Authorization
    'authentication-vs-authorization': {
        whatItIs: "<strong>Authentication</strong> is proving who you are (like showing your ID), while <strong>Authorization</strong> is determining what you're allowed to do (like having a VIP pass). They work together but serve different purposes.",
        analogy: {
            title: "The Airport Security Analogy",
            items: [
                { emoji: "🎫", title: "Ticket (Authentication)", subtitle: "Proves you're a passenger" },
                { emoji: "🚪", title: "Security Check", subtitle: "Verifies identity", highlighted: true },
                { emoji: "✈️", title: "Boarding Pass (Authorization)", subtitle: "Determines your seat class" },
            ],
            description: "At the airport, you show your ID to prove who you are (authentication). Then your boarding pass determines if you can access first class or economy (authorization)."
        },
        diagram: [
            { emoji: "👤", title: "User", subtitle: "Provides Credentials", color: "primary" },
            { emoji: "🔐", title: "Authentication", subtitle: "Verifies Identity", color: "secondary" },
            { emoji: "🎯", title: "Authorization", subtitle: "Grants Permissions", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "User provides credentials", description: "Username and password submitted" },
            { step: "2", title: "Authentication verifies", description: "System checks if credentials are valid" },
            { step: "3", title: "User is authenticated", description: "System knows WHO you are" },
            { step: "4", title: "Authorization checks permissions", description: "System checks WHAT you can access" },
            { step: "5", title: "Access granted or denied", description: "Based on your role and permissions" },
        ],
        misunderstanding: {
            wrong: '"Authentication and authorization are the same thing"',
            correct: "<strong>Authentication</strong> answers 'Who are you?' while <strong>Authorization</strong> answers 'What can you do?'. You can be authenticated but not authorized for certain actions."
        },
        realWorld: {
            title: "Real-World Example",
            description: "In a company system:",
            points: [
                "Authentication: You log in with your employee ID and password",
                "Authorization: Your role (admin, manager, employee) determines access",
                "Admin can delete users, manager can approve requests, employee can only view",
                "You're authenticated as 'John', but authorized only for employee-level actions",
            ]
        }
    },

    // HTTPS Explained
    'https-explained': {
        whatItIs: "<strong>HTTPS (HTTP Secure)</strong> is the secure version of HTTP. It encrypts data between your browser and the website using SSL/TLS, preventing hackers from reading or modifying your information.",
        analogy: {
            title: "The Sealed Envelope Analogy",
            items: [
                { emoji: "📧", title: "Postcard (HTTP)", subtitle: "Anyone can read it" },
                { emoji: "🔒", title: "Sealed Envelope (HTTPS)", subtitle: "Only recipient can read", highlighted: true },
                { emoji: "📬", title: "Mailbox (Server)", subtitle: "Receives the message" },
            ],
            description: "HTTP is like sending a postcard—anyone handling it can read your message. HTTPS is like a sealed envelope—only the intended recipient can open and read it."
        },
        diagram: [
            { emoji: "🌐", title: "Browser", subtitle: "Encrypts Data", color: "primary" },
            { emoji: "🔐", title: "SSL/TLS", subtitle: "Secure Channel", color: "secondary" },
            { emoji: "🖥️", title: "Server", subtitle: "Decrypts Data", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Browser requests secure connection", description: "Connects to website with HTTPS" },
            { step: "2", title: "Server sends SSL certificate", description: "Proves the server's identity" },
            { step: "3", title: "Browser verifies certificate", description: "Checks if certificate is valid and trusted" },
            { step: "4", title: "Encryption keys exchanged", description: "Both sides agree on encryption method" },
            { step: "5", title: "Secure communication begins", description: "All data is encrypted end-to-end" },
        ],
        misunderstanding: {
            wrong: '"HTTPS makes my website slower" or "HTTPS is only for e-commerce"',
            correct: "HTTPS is <strong>essential for ALL websites</strong>. Modern browsers mark HTTP sites as 'Not Secure', and HTTPS has minimal performance impact while providing crucial security and SEO benefits."
        },
        realWorld: {
            title: "Real-World Example",
            description: "When you log into your bank:",
            points: [
                "HTTPS encrypts your username and password",
                "Hackers on public WiFi can't steal your credentials",
                "The padlock icon in your browser confirms the connection is secure",
                "Your bank's identity is verified by a trusted certificate authority",
            ]
        }
    },

    // Caching Strategies
    'caching-strategies': {
        whatItIs: "<strong>Caching</strong> is storing frequently accessed data in a fast-access location to avoid repeatedly fetching it from the original source. It dramatically improves performance and reduces server load.",
        analogy: {
            title: "The Grocery Shopping Analogy",
            items: [
                { emoji: "🏪", title: "Grocery Store (Database)", subtitle: "Original source" },
                { emoji: "🧊", title: "Fridge (Cache)", subtitle: "Quick access storage", highlighted: true },
                { emoji: "🍽️", title: "Kitchen (App)", subtitle: "Where you use it" },
            ],
            description: "You don't go to the grocery store every time you need milk. You store it in your fridge (cache) for quick access. Only when it runs out do you go back to the store (database)."
        },
        diagram: [
            { emoji: "📱", title: "Request", subtitle: "Needs Data", color: "primary" },
            { emoji: "⚡", title: "Cache", subtitle: "Check Cache First", color: "secondary" },
            { emoji: "🗄️", title: "Database", subtitle: "Fallback Source", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Request comes in", description: "App needs user profile data" },
            { step: "2", title: "Check cache first", description: "Look in Redis/memory cache" },
            { step: "3", title: "Cache hit or miss", description: "Found in cache? Return it. Not found? Continue" },
            { step: "4", title: "Fetch from database", description: "Query the original data source" },
            { step: "5", title: "Store in cache", description: "Save result in cache for next time" },
        ],
        misunderstanding: {
            wrong: '"Caching is just for big websites" or "Cache everything forever"',
            correct: "Caching benefits <strong>any application</strong>, but requires strategy: set appropriate expiration times, invalidate stale data, and cache the right things. Not all data should be cached."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Netflix using caching:",
            points: [
                "Popular shows are cached on CDN servers near you",
                "Instead of fetching from main servers, you get it from nearby cache",
                "Reduces latency from 500ms to 20ms",
                "Saves bandwidth and improves user experience dramatically",
            ]
        }
    },

    // Load Balancing
    'load-balancing': {
        whatItIs: "<strong>Load balancing</strong> is distributing incoming network traffic across multiple servers to ensure no single server gets overwhelmed. It improves reliability, performance, and scalability.",
        analogy: {
            title: "The Supermarket Checkout Analogy",
            items: [
                { emoji: "🛒", title: "Customers (Requests)", subtitle: "Need to check out" },
                { emoji: "👨‍💼", title: "Manager (Load Balancer)", subtitle: "Directs to shortest line", highlighted: true },
                { emoji: "💳", title: "Cashiers (Servers)", subtitle: "Process checkouts" },
            ],
            description: "A supermarket manager directs customers to the shortest checkout line. Load balancers do the same with web requests, sending each to the least busy server."
        },
        diagram: [
            { emoji: "🌐", title: "Users", subtitle: "Send Requests", color: "primary" },
            { emoji: "⚖️", title: "Load Balancer", subtitle: "Distributes Traffic", color: "secondary" },
            { emoji: "🖥️", title: "Servers", subtitle: "Handle Requests", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Request arrives", description: "User visits your website" },
            { step: "2", title: "Load balancer receives", description: "Acts as single entry point" },
            { step: "3", title: "Chooses a server", description: "Uses algorithm (round-robin, least connections, etc.)" },
            { step: "4", title: "Forwards request", description: "Sends request to selected server" },
            { step: "5", title: "Returns response", description: "Server processes and returns through load balancer" },
        ],
        misunderstanding: {
            wrong: '"Load balancing is only for huge websites"',
            correct: "Load balancing is valuable for <strong>any growing application</strong>. It provides redundancy (if one server fails, others continue), enables zero-downtime deployments, and allows horizontal scaling."
        },
        realWorld: {
            title: "Real-World Example",
            description: "E-commerce site during Black Friday:",
            points: [
                "Traffic spikes from 1,000 to 100,000 users per second",
                "Load balancer distributes across 50 servers instead of 5",
                "If one server crashes, others handle its traffic automatically",
                "Users experience no downtime or slowdowns",
            ]
        }
    },

    // Add more concepts here...
};
