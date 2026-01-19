'use client';

import { BookOpen, Home, Map, Search, User, Layout, Zap, LucideIcon } from "lucide-react";
import { SearchModal } from "@/components/ui/search-modal";
import { useEffect, useState } from "react";
import { fetchConceptsFromSanity, fetchAppsFromSanity } from "@/lib/sanity/api";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface DockItem {
    icon: LucideIcon;
    label: string;
    path: string;
}

export function DockNavigation() {
    const [concepts, setConcepts] = useState<any[]>([]);
    const [apps, setApps] = useState<any[]>([]);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        (async () => {
            const [conceptsData, appsData] = await Promise.all([
                fetchConceptsFromSanity(),
                fetchAppsFromSanity()
            ]);
            if (conceptsData) setConcepts(conceptsData);
            if (appsData) setApps(appsData);
        })();
    }, []);

    const searchData = [
        ...concepts.map(concept => ({
            id: `/concepts/${concept.slug}`,
            title: concept.title,
            description: concept.description,
            category: concept.category || 'Concept',
            icon: BookOpen
        })),
        ...apps.map(app => ({
            id: `/learn`, // In the future this could be /learn/${app.slug}
            title: `Walkthrough: ${app.name}`,
            description: app.shortDescription,
            category: 'Walkthrough',
            icon: Zap
        }))
    ];

    const dockItems: DockItem[] = [
        { icon: Home, label: "Explore", path: "/" },
        { icon: Layout, label: "Concepts", path: "/concepts" },
        { icon: BookOpen, label: "Walkthroughs", path: "/learn" },
        { icon: User, label: "About", path: "/about" },
    ];

    return (
        <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto">
                <div className="flex items-center gap-1.5 p-1.5 rounded-[2rem] backdrop-blur-2xl border border-gray-200/50 bg-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    {dockItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;
                        return (
                            <button
                                key={item.label}
                                onClick={() => router.push(item.path)}
                                className={cn(
                                    "relative group p-3.5 rounded-3xl transition-all duration-500",
                                    isActive
                                        ? "bg-white shadow-lg shadow-[#ff5941]/5 transform scale-105"
                                        : "hover:bg-white/50"
                                )}
                            >
                                <Icon className={cn(
                                    "w-5 h-5 transition-all duration-300",
                                    isActive ? "text-[#ff5941] scale-110" : "text-gray-500 group-hover:text-gray-900"
                                )} />

                                {/* Tooltip */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 shadow-xl">
                                    {item.label}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                                </div>

                                {isActive && (
                                    <motion.div
                                        layoutId="dock-dot"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ff5941] rounded-full"
                                    />
                                )}
                            </button>
                        );
                    })}
                    <div className="w-px h-6 bg-gray-200/50 mx-1.5" />
                    <SearchModal data={searchData}>
                        <button className="relative group p-3.5 rounded-3xl hover:bg-white/50 transition-all duration-500">
                            <Search className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 shadow-xl">
                                Search
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                            </div>
                        </button>
                    </SearchModal>
                </div>
            </div>
        </div>
    );
}
