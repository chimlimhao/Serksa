import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";

interface HeaderProps {
    activeTab?: 'home' | 'concepts' | 'learn' | 'about' | 'support' | 'suggest';
}

export function Header({ activeTab }: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-[#001BB7]" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#001BB7] to-[#0046FF] bg-clip-text text-transparent">
                            Serksa
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/learn"
                            className={`text-sm font-medium transition-colors ${activeTab === 'learn' ? 'text-[#001BB7]' : 'hover:text-[#001BB7]'
                                }`}
                        >
                            Learning Path
                        </Link>
                        <Link
                            href="/concepts"
                            className={`text-sm font-medium transition-colors ${activeTab === 'concepts' ? 'text-[#001BB7]' : 'hover:text-[#001BB7]'
                                }`}
                        >
                            All Concepts
                        </Link>
                        <Link
                            href="/about"
                            className={`text-sm font-medium transition-colors ${activeTab === 'about' ? 'text-[#001BB7]' : 'hover:text-[#001BB7]'
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            href="/support"
                            className={`text-sm font-medium transition-colors ${activeTab === 'support' ? 'text-[#001BB7]' : 'hover:text-[#001BB7]'
                                }`}
                        >
                            Support
                        </Link>
                        <Link
                            href="/suggest"
                            className={`text-sm font-medium transition-colors ${activeTab === 'suggest' ? 'text-[#001BB7]' : 'hover:text-[#001BB7]'
                                }`}
                        >
                            Suggest
                        </Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link href="/concepts">
                            <Button size="sm">
                                <Search className="w-4 h-4 mr-2" />
                                Explore 54 Concepts
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
