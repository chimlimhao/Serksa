'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { User, Users, Zap, Shield, Smartphone, Server, Database as DatabaseIcon, Cloud, Lock, Gauge, Layout, Settings, BookOpen, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MediaBetweenText } from "@/components/fancy/blocks/media-between-text";
import { SiteLogo, SiteFooter } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

import { fetchLearningPathBySlug, fetchAppsFromSanity } from "@/lib/sanity/api";
import { SanityLearningPath, SanityApp } from "@/lib/sanity/types";

export default function LearningPathPage() {
    const [path, setPath] = useState<SanityLearningPath | null>(null);
    const [apps, setApps] = useState<SanityApp[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState<string>("overview");

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const [lpRes, appsRes] = await Promise.all([
                fetchLearningPathBySlug('build-instagram'),
                fetchAppsFromSanity()
            ]);

            if (cancelled) return;

            setPath(lpRes);
            if (appsRes) setApps(appsRes);
            setLoading(false);
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    const stageVisuals = [
        { icon: User, color: "from-blue-400 to-blue-600" },
        { icon: Users, color: "from-green-400 to-green-600" },
        { icon: Zap, color: "from-orange-400 to-orange-600" },
        { icon: DatabaseIcon, color: "from-purple-400 to-purple-600" },
        { icon: Shield, color: "from-red-400 to-red-600" },
        { icon: Lock, color: "from-indigo-400 to-indigo-600" },
    ];

    const stages = useMemo(() => {
        if (!path) return [];
        return path.stages.map((stage, idx) => ({
            ...stage,
            icon: stageVisuals[idx % stageVisuals.length].icon,
            color: stageVisuals[idx % stageVisuals.length].color,
        }));
    }, [path]);

    const sections = useMemo(() => {
        return [
            { id: "overview", label: "Overview" },
            ...stages.map((s) => ({ id: `stage-${s.number}`, label: `Stage ${s.number}: ${s.title}` })),
            { id: "cta", label: "Next Steps" },
        ];
    }, [stages]);

    useEffect(() => {
        const ids = sections.map((s) => s.id);
        const els = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (els.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

                if (visible[0]?.target?.id) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: "-120px 0px -65% 0px",
                threshold: [0.1, 0.2, 0.35, 0.5, 0.75],
            }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [sections]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex overflow-hidden">
                {/* Sidebar Navigation Skeleton */}
                <aside className="hidden md:flex w-72 shrink-0 border-r border-gray-100 flex-col sticky top-0 h-screen p-8 space-y-8">
                    <Skeleton className="h-8 w-32 rounded-lg" />
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-40 rounded-md" />
                        <div className="space-y-3">
                            {[...Array(6)].map((_, i) => (
                                <Skeleton key={i} className="h-12 w-full rounded-xl" />
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content Skeleton */}
                <div className="flex-1 h-screen overflow-y-auto">
                    <main className="max-w-4xl mx-auto pt-16 pb-32 px-6 lg:px-12 space-y-24">
                        {/* Hero Section Skeleton */}
                        <div className="text-center space-y-8">
                            <Skeleton className="h-6 w-48 rounded-full mx-auto" />
                            <div className="space-y-4 flex flex-col items-center">
                                <Skeleton className="h-20 md:h-24 w-4/5 rounded-2xl" />
                                <Skeleton className="h-10 w-1/2 rounded-lg" />
                            </div>
                            <Skeleton className="h-6 w-3/4 mx-auto rounded-md" />
                            <div className="flex justify-center gap-12 py-8 border-y border-gray-100">
                                <Skeleton className="h-10 w-16 rounded-md" />
                                <Skeleton className="h-10 w-16 rounded-md" />
                                <Skeleton className="h-10 w-16 rounded-md" />
                            </div>
                        </div>

                        {/* Roadmap Skeleton */}
                        <div className="space-y-12">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="space-y-6">
                                    <div className="flex items-start gap-8">
                                        <Skeleton className="w-20 h-20 rounded-[1.5rem]" />
                                        <div className="space-y-3 pt-2">
                                            <Skeleton className="h-4 w-32 rounded-md" />
                                            <Skeleton className="h-10 w-64 rounded-xl" />
                                        </div>
                                    </div>
                                    <Skeleton className="h-40 w-full rounded-[2.5rem]" />
                                </div>
                            ))}
                        </div>
                    </main>
                </div>

                {/* Right Sidebar Skeleton */}
                <aside className="hidden lg:flex w-64 shrink-0 border-l border-gray-100 bg-white flex-col sticky top-0 h-screen p-8 space-y-8">
                    <div className="space-y-6">
                        <Skeleton className="h-4 w-32 rounded-md" />
                        <div className="space-y-4">
                            {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="h-8 w-full rounded-lg" />
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        );
    }

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

        if (stage === 2 || stage === 3) {
            return (
                <div className="py-12 space-y-8">
                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Smartphone} label="Users" color="bg-purple-500" subtext="1000s" />
                        <div className="text-4xl text-gray-600 font-bold">→</div>
                        <div className="flex flex-col items-center">
                            <DiagramNode icon={Gauge} label="Load Balancer" color="bg-yellow-500" />
                            <div className="text-4xl text-gray-600 font-bold mt-2">↓</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-6">
                            <DiagramNode icon={Server} label="Server 1" color="bg-blue-500" size="sm" />
                            <DiagramNode icon={Server} label="Server 2" color="bg-blue-500" size="sm" />
                            <DiagramNode icon={Server} label="Server 3" color="bg-blue-500" size="sm" />
                        </div>
                        <div className="text-4xl text-gray-600 font-bold">↓</div>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Cloud} label="Cache" color="bg-orange-500" size="sm" />
                        <DiagramNode icon={DatabaseIcon} label="Database" color="bg-green-500" />
                    </div>
                </div>
            );
        }

        if (stage === 4) {
            return (
                <div className="py-12 space-y-6">
                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Smartphone} label="Users" color="bg-purple-500" subtext="Millions" />
                        <div className="text-4xl text-gray-600 font-bold">→</div>
                        <div className="flex flex-col items-center">
                            <DiagramNode icon={Cloud} label="CDN" color="bg-cyan-500" subtext="Images" />
                            <div className="text-4xl text-gray-600 font-bold mt-2">↓</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-4">
                            <DiagramNode icon={Gauge} label="Load Balancer" color="bg-yellow-500" size="sm" />
                            <div className="text-3xl text-gray-600 font-bold">→</div>
                            <DiagramNode icon={Server} label="Servers" color="bg-blue-500" />
                            <div className="text-3xl text-gray-600 font-bold">→</div>
                            <DiagramNode icon={Cloud} label="Cache" color="bg-orange-500" size="sm" />
                        </div>
                        <div className="text-4xl text-gray-600 font-bold">↓</div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <DiagramNode icon={DatabaseIcon} label="Primary DB" color="bg-green-500" size="sm" />
                        <div className="text-3xl text-gray-600 font-bold">→</div>
                        <DiagramNode icon={DatabaseIcon} label="Replica 1" color="bg-green-400" size="sm" />
                        <DiagramNode icon={DatabaseIcon} label="Replica 2" color="bg-green-400" size="sm" />
                    </div>
                </div>
            );
        }

        return (
            <div className="py-12 space-y-6">
                <div className="flex items-center justify-center gap-4">
                    <DiagramNode icon={Smartphone} label="Users" color="bg-purple-500" size="sm" />
                    <div className="text-3xl text-gray-600 font-bold">→</div>
                    <DiagramNode icon={Lock} label="Auth" color="bg-red-500" size="sm" />
                    <div className="text-3xl text-gray-600 font-bold">→</div>
                    <div className="flex flex-col items-center">
                        <DiagramNode icon={Shield} label="Rate Limiter" color="bg-pink-500" size="sm" />
                        <div className="text-4xl text-gray-600 font-bold mt-2">↓</div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-6">
                        <DiagramNode icon={Gauge} label="Load Balancer" color="bg-yellow-500" size="sm" />
                        <div className="text-3xl text-gray-600 font-bold">→</div>
                        <DiagramNode icon={Server} label="Servers" color="bg-blue-500" />
                    </div>
                    <div className="text-4xl text-gray-600 font-bold">↓</div>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <DiagramNode icon={DatabaseIcon} label="Database" color="bg-green-500" size="sm" />
                    <DiagramNode icon={Cloud} label="Message Queue" color="bg-indigo-500" size="sm" />
                </div>
            </div>
        );
    };

    if (!path) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Learning Path Not Found</h1>
                    <Link href="/" className="text-[#ff5941] hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Left Sidebar: App Navigation */}
            <aside className="hidden md:flex w-72 shrink-0 border-r border-gray-100 flex-col sticky top-0 h-screen overflow-y-auto">
                {/* Logo Section */}
                <div className="p-8 flex items-center justify-between">
                    <SiteLogo size="sm" />
                    {path?.app?.logo && (
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 p-1.5">
                            <img src={path.app.logo} alt={path.app.name} className="w-full h-full object-contain" />
                        </div>
                    )}
                </div>

                {/* Main Navigation */}
                <div className="p-4 space-y-6">

                    <div>
                        <div className="px-4 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-4">
                            All Applications
                        </div>
                        <nav className="space-y-1">
                            {apps.map((app) => (
                                <Link key={app._id} href={`/learn`}>
                                    <span className={cn(
                                        "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group",
                                        app.slug === path.app?.slug
                                            ? "bg-white border-2 border-[#ff5941] text-gray-900 shadow-sm"
                                            : "text-gray-600 hover:bg-gray-100 border-2 border-transparent"
                                    )}>
                                        <div className={cn(
                                            "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-sm",
                                            app.slug === path.app?.slug ? "bg-[#ff5941]/10" : "bg-gray-100 grayscale group-hover:grayscale-0 transition-all"
                                        )}>
                                            {app.logo ? (
                                                <img src={app.logo} alt={app.name} className="w-6 h-6 object-contain" />
                                            ) : (
                                                <div className="w-5 h-5 bg-gray-200 rounded-sm" />
                                            )}
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="truncate text-xs font-bold">{app.name}</span>
                                            {app.slug === path.app?.slug && (
                                                <span className="text-[10px] text-[#ff5941] font-bold">CURRENT</span>
                                            )}
                                        </div>
                                        {app.slug === path.app?.slug && (
                                            <ChevronRight className="w-4 h-4 ml-auto text-[#ff5941]" />
                                        )}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

            </aside>

            {/* Main Scroll Content */}
            <div className="flex-1 h-screen overflow-y-auto relative scroll-smooth bg-white">
                <main className="max-w-4xl mx-auto pt-16 pb-32 px-6 lg:px-12">
                    {/* Hero Section */}
                    <section id="overview" className="scroll-mt-32">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-24">
                            <div className="inline-block mb-6 px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-[12px] font-bold uppercase tracking-[0.1em]">
                                App Architecture Walkthrough
                            </div>

                            <div className="flex flex-col items-center justify-center gap-4 mb-2">
                                <MediaBetweenText
                                    firstText="Build ("
                                    secondText=")"
                                    mediaUrl={path.app?.logo || "/logo/ig.png"}
                                    mediaType="image"
                                    alt={path.app?.name || "App Logo"}
                                    as="h1"
                                    triggerType="hover"
                                    className="text-6xl md:text-[88px] font-black text-gray-900 mb-2 justify-center items-center cursor-pointer tracking-tight"
                                    leftTextClassName="font-black"
                                    rightTextClassName="font-black"
                                    mediaContainerClassName="mx-2 overflow-hidden shadow-2xl rounded-2xl"
                                    animationVariants={{
                                        initial: { width: 0, opacity: 0 },
                                        animate: {
                                            width: "100px",
                                            opacity: 1,
                                            transition: { duration: 0.5, type: "spring", bounce: 0.2 },
                                        },
                                    }}
                                />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-8">from scratch.</h2>

                            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
                                {path.summary}
                            </p>

                            <div className="flex items-center justify-center gap-8 py-6 border-y border-gray-100">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-gray-900">{stages.length}</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Stages</div>
                                </div>
                                <div className="w-px h-8 bg-gray-200" />
                                <div className="text-center">
                                    <div className="text-2xl font-black text-gray-900">{stages.reduce((acc, s) => acc + s.concepts.length, 0)}</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Concepts</div>
                                </div>
                                <div className="w-px h-8 bg-gray-200" />
                                <div className="text-center">
                                    <div className="text-2xl font-black text-green-600">Free</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Access</div>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* App Overview Card */}
                    <section className="mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-10 bg-linear-to-br from-gray-900 to-gray-800 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5941] opacity-10 blur-[80px] -mr-32 -mt-32 transition-all group-hover:opacity-20 translate-z-0" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                                <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                    {path.app?.logo ? (
                                        <img src={path.app.logo} alt={path.app.name} className="w-12 h-12" />
                                    ) : (
                                        <Smartphone className="w-10 h-10 text-white" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4">The App: {path.app?.name}</h3>
                                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                        {path.app?.shortDescription}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <div className="text-2xl mb-2">📱</div>
                                            <div className="text-sm font-bold text-gray-200">Open App</div>
                                            <div className="text-[10px] text-gray-500 mt-1 uppercase">Step 1</div>
                                        </div>
                                        <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <div className="text-2xl mb-2">📸</div>
                                            <div className="text-sm font-bold text-gray-200">See Feed</div>
                                            <div className="text-[10px] text-gray-500 mt-1 uppercase">Step 2</div>
                                        </div>
                                        <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <div className="text-2xl mb-2">❤️</div>
                                            <div className="text-sm font-bold text-gray-200">Engage</div>
                                            <div className="text-[10px] text-gray-500 mt-1 uppercase">Step 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Stages Timeline */}
                    <div className="space-y-32">
                        {stages.map((stage, index) => {
                            const Icon = stage.icon;
                            return (
                                <section key={stage.number} id={`stage-${stage.number}`} className="scroll-mt-32">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <div className="flex flex-col gap-8">
                                            <div className="flex items-start gap-8">
                                                <div className={cn(
                                                    "w-20 h-20 rounded-[1.5rem] bg-linear-to-br flex items-center justify-center shrink-0 shadow-2xl relative",
                                                    stage.color
                                                )}>
                                                    <Icon className="w-10 h-10 text-white" />
                                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-xs font-bold text-gray-900 shadow-md">
                                                        {stage.number}
                                                    </div>
                                                </div>
                                                <div className="pt-2">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="px-2 py-0.5 rounded bg-gray-100 text-[10px] font-black uppercase text-gray-500">Stage {stage.number}</div>
                                                        <div className="text-sm font-bold text-[#ff5941]">{path.app?.name} Journey</div>
                                                    </div>
                                                    <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-none mb-3">{stage.title}</h2>
                                                    <p className="text-lg text-gray-500 italic font-medium leading-relaxed">{stage.subtitle}</p>
                                                </div>
                                            </div>

                                            <div className="pl-0 md:pl-28">
                                                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                                                    {stage.description}
                                                </p>
                                            </div>

                                            <div className="bg-gray-50 rounded-[2.5rem] border border-gray-100 p-8 md:p-12">
                                                <h4 className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Architecture Visualization</h4>
                                                {stage.diagramImage ? (
                                                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-white shadow-sm bg-white">
                                                        <Image
                                                            src={stage.diagramImage}
                                                            alt={`${stage.title} architecture diagram`}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                ) : (
                                                    <ArchitectureDiagram stage={stage.number} />
                                                )}
                                            </div>

                                            <div className="grid md:grid-cols-[1fr_280px] gap-12">
                                                <div className="space-y-6">
                                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                                        <span className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-lg">💡</span>
                                                        Analysis
                                                    </h3>
                                                    <p className="text-lg text-gray-600 leading-relaxed">
                                                        {stage.flowExplanation}
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Key Concepts</h3>
                                                    <div className="flex flex-col gap-2">
                                                        {stage.concepts.map((concept, cIdx) => (
                                                            <Link key={concept.slug || cIdx} href={`/concepts/${concept.slug}`}>
                                                                <div className="group p-4 bg-white border border-gray-200 rounded-2xl hover:border-[#ff5941] hover:shadow-lg transition-all cursor-pointer flex items-center justify-between">
                                                                    <div className="min-w-0">
                                                                        <div className="text-sm font-bold text-gray-900 truncate group-hover:text-[#ff5941] transition-colors">{concept.title}</div>
                                                                        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{concept.difficulty}</div>
                                                                    </div>
                                                                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#ff5941] transition-colors shrink-0" />
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {index < stages.length - 1 && (
                                        <div className="h-32 flex items-center justify-center">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: 64 }}
                                                className="w-1 bg-linear-to-b from-gray-200 to-transparent rounded-full"
                                            />
                                        </div>
                                    )}
                                </section>
                            );
                        })}
                    </div>

                    <section id="cta" className="scroll-mt-32 mt-40">
                        <div className="relative p-1 bg-linear-to-br from-[#ff5941] to-[#ffcaca] rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="bg-white p-16 rounded-[2.8rem] text-center flex flex-col items-center">
                                <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center text-4xl mb-8 animate-bounce">🚀</div>
                                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">You've reached the end!</h2>
                                <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto">
                                    But system design never stops. Ready to dive deep into any of the concepts you've encountered?
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link href="/">
                                        <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl hover:-translate-y-1">
                                            Browse Concepts
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => scrollTo('overview')}
                                        className="px-10 py-5 border-2 border-gray-200 text-gray-600 rounded-2xl font-bold hover:border-[#ff5941] hover:text-[#ff5941] transition-all bg-white"
                                    >
                                        Review Roadmap
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <SiteFooter />
            </div>

            {/* Right Sidebar: Section Navigation */}
            <aside className="hidden lg:flex w-64 shrink-0 border-l border-gray-200 bg-white flex-col sticky top-0 h-screen p-8">
                <div className="space-y-8">
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                            App Journey
                        </div>
                        <div className="space-y-1 relative">
                            <div className="absolute left-[13px] top-4 bottom-4 w-px bg-gray-100" />

                            {sections.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => scrollTo(s.id)}
                                    className={cn(
                                        "w-full text-left px-4 py-2 relative flex items-start gap-4 transition-all group",
                                        activeSection === s.id
                                            ? "text-[#ff5941]"
                                            : "text-gray-400 hover:text-gray-900"
                                    )}
                                >
                                    <div className={cn(
                                        "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 z-10 transition-all",
                                        activeSection === s.id
                                            ? "bg-[#ff5941] text-white shadow-lg ring-4 ring-[#ff5941]/10"
                                            : "bg-white border border-gray-200 text-gray-300 group-hover:border-gray-900 group-hover:text-gray-900"
                                    )}>
                                        {s.id === 'overview' ? <Zap className="w-3.5 h-3.5" /> :
                                            s.id === 'cta' ? <ChevronRight className="w-3.5 h-3.5" /> :
                                                <div className="text-[10px] font-black">{s.id.split('-')[1]}</div>}
                                    </div>
                                    <span className={cn(
                                        "text-xs font-bold leading-5 pt-1",
                                        activeSection === s.id ? "" : "group-hover:translate-x-1 transition-transform"
                                    )}>
                                        {s.label.split(':')[1] || s.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <button
                            onClick={() => scrollTo("overview")}
                            className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#ff5941] transition-all group"
                        >
                            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
                            Back to Top
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}

function DiagramNode({ icon: Icon, label, color, subtext, size = "md" }: { icon: any, label: string, color: string, subtext?: string, size?: "sm" | "md" }) {
    const sizeClasses = size === "sm" ? "w-20 h-20" : "w-24 h-24";
    const iconSize = size === "sm" ? "w-8 h-8" : "w-10 h-10";

    return (
        <div className="flex flex-col items-center gap-3">
            <div className={cn("rounded-3xl flex flex-col items-center justify-center shadow-xl transition-transform hover:scale-105", color, sizeClasses)}>
                <Icon className={cn("text-white", iconSize)} />
            </div>
            <div className="text-center">
                <div className="text-xs font-black text-gray-900 uppercase tracking-tight">{label}</div>
                {subtext && <div className="text-[10px] font-bold text-gray-400 mt-0.5">{subtext}</div>}
            </div>
        </div>
    );
}
