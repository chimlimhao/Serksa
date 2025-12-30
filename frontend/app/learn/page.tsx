'use client';

import Link from "next/link";
import { User, Users, Zap, Shield, Smartphone, Server, Database as DatabaseIcon, Cloud, Lock, Gauge } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MediaBetweenText } from "@/components/fancy/blocks/media-between-text";
import { SiteLogo, DockNavigation, SiteFooter } from "@/components/layout";

export default function LearningPathPage() {


    const stages = [
        {
            number: 1,
            title: "Simple Version",
            subtitle: "Just You and Your Friends",
            description: "Start simple. One user posts a photo, their friends see it. Learn the basics of how data flows. This is how Instagram started in 2010 with Kevin Systrom and 100 beta users.",
            flowExplanation: "When a user opens Instagram, their phone sends a request to Instagram's server. The server fetches photos from the database and sends them back to display in the feed.",
            conceptLinks: [
                { text: "client", slug: "client-server" },
                { text: "request", slug: "request-response-cycle" },
                { text: "server", slug: "what-is-server" },
                { text: "database", slug: "what-is-database" },
            ],
            icon: User,
            color: "from-blue-400 to-blue-600",
            concepts: [
                { title: "Client vs Server", slug: "client-server" },
                { title: "Request & Response", slug: "request-response-cycle" },
                { title: "What is an API?", slug: "what-is-api" },
                { title: "What is a Database?", slug: "what-is-database" },
            ],
        },
        {
            number: 2,
            title: "More Users",
            subtitle: "Thousands of People Join",
            description: "Your app is getting popular! But it's getting slow. Learn how to handle more traffic without breaking. Instagram hit this at 100K users in 2010 and added caching and load balancing.",
            flowExplanation: "Thousands of users hit Instagram at once. The load balancer distributes requests across multiple servers to prevent any single server from being overwhelmed. Servers check the cache first (faster) before hitting the database.",
            conceptLinks: [
                { text: "load balancer", slug: "load-balancing" },
                { text: "cache", slug: "caching-explained" },
                { text: "servers", slug: "horizontal-scaling" },
            ],
            icon: Users,
            color: "from-green-400 to-green-600",
            concepts: [
                { title: "Caching Explained", slug: "caching-explained" },
                { title: "Load Balancing", slug: "load-balancing" },
                { title: "Horizontal Scaling", slug: "horizontal-scaling" },
            ],
        },
        {
            number: 3,
            title: "Scale Up",
            subtitle: "Millions of Photos Daily",
            description: "Now you're huge. People are posting and scrolling constantly. Time to optimize for speed and storage. Instagram reached 30M users in 2012, moved to AWS, and added a CDN for images.",
            flowExplanation: "Photos are served from a CDN for lightning-fast loading. The load balancer routes requests to servers, which use cache for speed. The primary database handles writes, while read replicas handle the massive read traffic from millions of users scrolling their feeds.",
            conceptLinks: [
                { text: "CDN", slug: "cdn-explained" },
                { text: "database replication", slug: "database-replication" },
                { text: "cache", slug: "caching-explained" },
            ],
            icon: Zap,
            color: "from-orange-400 to-orange-600",
            concepts: [
                { title: "Database Replication", slug: "database-replication" },
                { title: "CDN Explained", slug: "cdn-explained" },
                { title: "Database Indexing", slug: "database-indexing" },
                { title: "Database Sharding", slug: "database-sharding" },
            ],
        },
        {
            number: 4,
            title: "Reliability & Safety",
            subtitle: "Handle Failures and Abuse",
            description: "Servers crash. Users spam. Hackers attack. Learn how to keep your app running and secure. Instagram today serves 2B users with 99.99% uptime and advanced security systems.",
            flowExplanation: "Every request goes through authentication (are you logged in?) and rate limiting (are you spamming?). The load balancer distributes traffic to servers. Background tasks like sending notifications are handled by message queues to avoid slowing down the main app.",
            conceptLinks: [
                { text: "authentication", slug: "api-authentication" },
                { text: "rate limiting", slug: "rate-limiting" },
                { text: "message queues", slug: "message-queues" },
            ],
            icon: Shield,
            color: "from-red-400 to-red-600",
            concepts: [
                { title: "API Authentication", slug: "api-authentication" },
                { title: "Rate Limiting", slug: "rate-limiting" },
                { title: "Message Queues", slug: "message-queues" },
            ],
        },
    ];

    // Visual diagram component with SVG arrows
    const ArchitectureDiagram = ({ stage }: { stage: number }) => {
        if (stage === 1) {
            return (
                <div className="w-full overflow-x-auto">
                    <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 py-8 min-w-max px-4">
                        <DiagramNode icon={Smartphone} label="User" color="bg-purple-500" />
                        <span className="text-2xl sm:text-3xl text-gray-400">→</span>
                        <DiagramNode icon={Server} label="Server" color="bg-blue-500" />
                        <span className="text-2xl sm:text-3xl text-gray-400">→</span>
                        <DiagramNode icon={DatabaseIcon} label="Database" color="bg-green-500" />
                    </div>
                </div>
            );
        }

        if (stage === 2) {
            return (
                <div className="py-12 space-y-8">
                    {/* Row 1: Users → Load Balancer */}
                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Smartphone} label="Users" color="bg-purple-500" subtext="1000s" />
                        <div className="text-4xl text-gray-600 font-bold">→</div>
                        <div className="flex flex-col items-center">
                            <DiagramNode icon={Gauge} label="Load Balancer" color="bg-yellow-500" />
                            {/* Arrow coming OUT of Load Balancer */}
                            <div className="text-4xl text-gray-600 font-bold mt-2">↓</div>
                        </div>
                    </div>

                    {/* Row 2: Multiple Servers */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-6">
                            <DiagramNode icon={Server} label="Server 1" color="bg-blue-500" size="sm" />
                            <DiagramNode icon={Server} label="Server 2" color="bg-blue-500" size="sm" />
                            <DiagramNode icon={Server} label="Server 3" color="bg-blue-500" size="sm" />
                        </div>
                        {/* Arrow coming OUT of middle server */}
                        <div className="text-4xl text-gray-600 font-bold">↓</div>
                    </div>

                    {/* Row 3: Cache and Database */}
                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Cloud} label="Cache" color="bg-orange-500" size="sm" />
                        <DiagramNode icon={DatabaseIcon} label="Database" color="bg-green-500" />
                    </div>
                </div>
            );
        }

        if (stage === 3) {
            return (
                <div className="py-12 space-y-6">
                    {/* Row 1: Users → CDN */}
                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Smartphone} label="Users" color="bg-purple-500" subtext="Millions" />
                        <div className="text-4xl text-gray-600 font-bold">→</div>
                        <div className="flex flex-col items-center">
                            <DiagramNode icon={Cloud} label="CDN" color="bg-cyan-500" subtext="Images" />
                            {/* Arrow coming OUT of CDN */}
                            <div className="text-4xl text-gray-600 font-bold mt-2">↓</div>
                        </div>
                    </div>

                    {/* Row 2: Load Balancer → Servers → Cache */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <DiagramNode icon={Gauge} label="Load Balancer" color="bg-yellow-500" size="sm" />
                            <div className="text-3xl text-gray-600 font-bold">→</div>
                            <DiagramNode icon={Server} label="Servers" color="bg-blue-500" />
                            <div className="text-3xl text-gray-600 font-bold">→</div>
                            <DiagramNode icon={Cloud} label="Cache" color="bg-orange-500" size="sm" />
                        </div>
                        {/* Arrow coming OUT of Servers */}
                        <div className="text-4xl text-gray-600 font-bold">↓</div>
                    </div>

                    {/* Row 3: Database Replication */}
                    <div className="flex items-center justify-center gap-4">
                        <DiagramNode icon={DatabaseIcon} label="Primary DB" color="bg-green-500" size="sm" />
                        <div className="text-3xl text-gray-600 font-bold">→</div>
                        <DiagramNode icon={DatabaseIcon} label="Replica 1" color="bg-green-400" size="sm" />
                        <DiagramNode icon={DatabaseIcon} label="Replica 2" color="bg-green-400" size="sm" />
                    </div>
                </div>
            );
        }

        // Stage 4
        return (
            <div className="py-12 space-y-6">
                {/* Row 1: Users → Auth → Rate Limiter */}
                <div className="flex items-center justify-center gap-4">
                    <DiagramNode icon={Smartphone} label="Users" color="bg-purple-500" size="sm" />
                    <div className="text-3xl text-gray-600 font-bold">→</div>
                    <DiagramNode icon={Lock} label="Auth" color="bg-red-500" size="sm" />
                    <div className="text-3xl text-gray-600 font-bold">→</div>
                    <div className="flex flex-col items-center">
                        <DiagramNode icon={Shield} label="Rate Limiter" color="bg-pink-500" size="sm" />
                        {/* Arrow coming OUT of Rate Limiter */}
                        <div className="text-4xl text-gray-600 font-bold mt-2">↓</div>
                    </div>
                </div>

                {/* Row 2: Load Balancer → Servers */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Gauge} label="Load Balancer" color="bg-yellow-500" size="sm" />
                        <div className="text-3xl text-gray-600 font-bold">→</div>
                        <DiagramNode icon={Server} label="Servers" color="bg-blue-500" />
                    </div>
                    {/* Arrow coming OUT of Servers */}
                    <div className="text-4xl text-gray-600 font-bold">↓</div>
                </div>

                {/* Row 3: Database & Message Queue */}
                <div className="flex items-center justify-center gap-6">
                    <DiagramNode icon={DatabaseIcon} label="Database" color="bg-green-500" size="sm" />
                    <DiagramNode icon={Cloud} label="Message Queue" color="bg-indigo-500" size="sm" />
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white">

            <div className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
                {/* Hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-20">
                    <div className="inline-block mb-6 px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium uppercase tracking-wider">
                        App Walkthrough
                    </div>
                    <MediaBetweenText
                        firstText="Build ("
                        secondText=")"
                        mediaUrl="/logo/ig.png"
                        mediaType="image"
                        alt="Instagram Logo"
                        as="h1"
                        triggerType="hover"
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 justify-center items-center cursor-pointer"
                        leftTextClassName="text-5xl md:text-7xl font-bold text-gray-900"
                        rightTextClassName="text-5xl md:text-7xl font-bold text-gray-900"
                        mediaContainerClassName="mx-2 overflow-hidden"
                        animationVariants={{
                            initial: { width: 0 },
                            animate: {
                                width: "80px",
                                transition: { duration: 0.4, type: "spring", bounce: 0 },
                            },
                        }}
                    />
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
                        Learn system design by building Instagram from scratch. See how it grows from 1 user to millions.
                    </p>
                    <div className="text-sm text-gray-500">4 stages · Real Instagram examples · Visual diagrams</div>
                </motion.div>

                {/* App Overview */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-20 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">The App: Instagram</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Users can upload photos, follow friends, and scroll through a personalized feed.
                    </p>
                    <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-3">Main User Action:</h3>
                        <div className="flex items-center gap-3 text-gray-700 flex-wrap">
                            <span className="text-2xl">📱</span>
                            <span>User opens app</span>
                            <span className="text-gray-400">→</span>
                            <span className="text-2xl">📸</span>
                            <span>Sees feed of photos</span>
                            <span className="text-gray-400">→</span>
                            <span className="text-2xl">❤️</span>
                            <span>Likes and comments</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stages */}
                {stages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                        <motion.div
                            key={stage.number}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                            className="mb-16"
                        >
                            {/* Stage Header */}
                            <div className="flex items-start gap-6 mb-8">
                                <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-lg", stage.color)}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <img src="/logo/ig.png" alt="Instagram" className="w-6 h-6" />
                                        <div className="text-sm font-semibold text-gray-500">Instagram · Stage {stage.number}</div>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stage.title}</h2>
                                    <p className="text-lg text-gray-600 italic mb-3">{stage.subtitle}</p>
                                    <p className="text-gray-700">{stage.description}</p>
                                </div>
                            </div>

                            {/* Visual Diagram */}
                            <div className="mb-6 py-8">
                                <h3 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider text-center">Architecture</h3>
                                <ArchitectureDiagram stage={stage.number} />
                            </div>

                            {/* Flow Explanation */}
                            <div className="mb-8 py-6">
                                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span>💡</span>
                                    <span>How it works:</span>
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    {stage.flowExplanation}
                                </p>
                                <div className="pt-4">
                                    <p className="text-sm text-gray-600 mb-2">Click to learn more:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {stage.conceptLinks?.map((link, idx) => (
                                            <Link key={idx} href={`/concepts/${link.slug}`}>
                                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-[#ff5941] hover:text-white transition-colors cursor-pointer">
                                                    {link.text}
                                                    <span className="text-xs">→</span>
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Concepts */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {stage.concepts.map((concept, conceptIndex) => (
                                    <Link key={conceptIndex} href={`/concepts/${concept.slug}`}>
                                        <div className="group p-5 bg-white border-2 border-gray-200 rounded-2xl hover:border-[#ff5941] transition-all duration-300 hover:shadow-lg cursor-pointer">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-gray-900 group-hover:text-[#ff5941] transition-colors">{concept.title}</h3>
                                                <div className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#ff5941] flex items-center justify-center transition-colors">
                                                    <span className="text-xs text-gray-600 group-hover:text-white">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {index < stages.length - 1 && (
                                <div className="flex justify-center my-12">
                                    <div className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-200" />
                                </div>
                            )}
                        </motion.div>
                    );
                })}

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center p-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build?</h3>
                    <p className="text-gray-600 text-lg mb-6">Start with Stage 1 and learn how the basics work</p>
                    <Link href={`/concepts/${stages[0].concepts[0].slug}`}>
                        <button className="px-8 py-4 bg-[#ff5941] text-white rounded-full text-lg font-semibold hover:bg-[#ff6951] transition-colors cursor-pointer">
                            Start Stage 1
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Footer */}
            <SiteFooter />
        </div>
    );
}

// Diagram components
function DiagramNode({ icon: Icon, label, color, subtext, size = "md" }: { icon: any, label: string, color: string, subtext?: string, size?: "sm" | "md" }) {
    const sizeClasses = size === "sm" ? "w-20 h-20" : "w-24 h-24";
    const iconSize = size === "sm" ? "w-8 h-8" : "w-10 h-10";

    return (
        <div className="flex flex-col items-center gap-2">
            <div className={cn("rounded-2xl flex flex-col items-center justify-center shadow-lg", color, sizeClasses)}>
                <Icon className={cn("text-white", iconSize)} />
            </div>
            <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">{label}</div>
                {subtext && <div className="text-xs text-gray-500">{subtext}</div>}
            </div>
        </div>
    );
}
