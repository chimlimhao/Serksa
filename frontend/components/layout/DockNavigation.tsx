'use client';

import { BookOpen, Home, Map, Search, User, Lightbulb, Heart, LucideIcon } from "lucide-react";
import { SearchModal } from "@/components/ui/search-modal";
import { webDevConcepts } from "@/lib/concepts-data";

interface DockItem {
    icon: LucideIcon;
    label: string;
    onClick: () => void;
}

export function DockNavigation() {
    const searchData = webDevConcepts.map(concept => ({
        id: concept.slug,
        title: concept.title,
        description: concept.description,
        category: concept.category,
    }));

    const dockItems: DockItem[] = [
        { icon: Home, label: "Home", onClick: () => window.location.href = "/" },
        { icon: Map, label: "Walkthrough", onClick: () => window.location.href = "/learn" },
        { icon: BookOpen, label: "All Concepts", onClick: () => window.location.href = "/concepts" },
        { icon: User, label: "About", onClick: () => window.location.href = "/about" },
    ];

    return (
        <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto">
                <div className="flex items-center gap-1 p-2 rounded-2xl backdrop-blur-lg border bg-white/95 border-gray-200">
                    {dockItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.label}
                                onClick={item.onClick}
                                className="relative group p-3 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <Icon className="w-5 h-5 text-gray-700 group-hover:text-[#ff5941] transition-colors" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                    <SearchModal data={searchData}>
                        <button className="relative group p-3 rounded-lg hover:bg-gray-100 transition-colors">
                            <Search className="w-5 h-5 text-gray-700 group-hover:text-[#ff5941] transition-colors" />
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Search
                            </span>
                        </button>
                    </SearchModal>
                </div>
            </div>
        </div>
    );
}
