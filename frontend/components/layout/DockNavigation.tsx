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
        { icon: Lightbulb, label: "Suggest", onClick: () => window.location.href = "/suggest" },
        { icon: Heart, label: "Support", onClick: () => window.location.href = "/support" },
        { icon: User, label: "About", onClick: () => window.location.href = "/about" },
    ];

    return (
        <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto">
                <div className="flex items-center gap-1 p-2 rounded-2xl backdrop-blur-lg border-2 bg-white border-gray-300 shadow-lg">
                    {dockItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.label}
                                onClick={item.onClick}
                                className="relative group p-3 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all"
                            >
                                <Icon className="w-5 h-5 text-gray-800 group-hover:text-[#ff5941] transition-colors" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                    <SearchModal data={searchData}>
                        <button className="relative group p-3 rounded-xl hover:bg-gray-200 active:bg-gray-300 transition-all">
                            <Search className="w-5 h-5 text-gray-800 group-hover:text-[#ff5941] transition-colors" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                                Search
                            </span>
                        </button>
                    </SearchModal>
                </div>
            </div>
        </div>
    );
}
