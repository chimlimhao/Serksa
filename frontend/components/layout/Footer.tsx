import Link from "next/link";
import { BookOpen, Github, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-card border-t py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-6 h-6 text-[#001BB7]" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#001BB7] to-[#0046FF] bg-clip-text text-transparent">
                                Serksa
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Master system design with 54 comprehensive concepts explained simply. From APIs to deployment, learn everything you need to build scalable applications.
                        </p>
                        <div className="text-xs text-muted-foreground">
                            ✨ All 54 concepts now available!
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Learn</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/learn" className="hover:text-foreground transition-colors">Learning Path</Link></li>
                            <li><Link href="/concepts" className="hover:text-foreground transition-colors">All Concepts (54)</Link></li>
                            <li><Link href="/concepts?category=api-backend" className="hover:text-foreground transition-colors">API & Backend</Link></li>
                            <li><Link href="/concepts?category=frontend" className="hover:text-foreground transition-colors">Frontend</Link></li>
                            <li><Link href="/concepts?category=security" className="hover:text-foreground transition-colors">Security</Link></li>
                            <li><Link href="/concepts?category=performance" className="hover:text-foreground transition-colors">Performance</Link></li>
                            <li><Link href="/concepts?category=devops" className="hover:text-foreground transition-colors">DevOps</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">About</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="/support" className="hover:text-foreground transition-colors">Support</Link></li>
                            <li><Link href="/suggest" className="hover:text-foreground transition-colors">Suggest a Concept</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <div>© 2025 Serksa. Made with ❤️ for learners.</div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                            <Twitter className="w-4 h-4" />
                            Twitter
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                            <Github className="w-4 h-4" />
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
