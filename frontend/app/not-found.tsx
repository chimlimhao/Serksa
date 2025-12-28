import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    {/* 404 Illustration */}
                    <div className="relative">
                        <div className="text-[200px] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-none">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">Page Not Found</h1>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">
                            Oops! The page you're looking for doesn't exist.
                            It might have been moved or deleted.
                        </p>
                    </div>

                    {/* Suggestions */}
                    <div className="space-y-4 pt-4">
                        <p className="text-sm text-muted-foreground">
                            Maybe you'd like to explore our system design concepts instead?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <Button size="lg" variant="outline" className="gap-2">
                                    <Home className="w-4 h-4" />
                                    Back to Home
                                </Button>
                            </Link>
                            <Link href="/concepts">
                                <Button size="lg" className="gap-2">
                                    <Search className="w-4 h-4" />
                                    Browse All Concepts
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Popular Links */}
                    <div className="pt-8 border-t">
                        <p className="text-sm text-muted-foreground mb-4">Or try these popular concepts:</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Link href="/concepts/what-is-api">
                                <Button variant="ghost" size="sm">What is an API?</Button>
                            </Link>
                            <Link href="/concepts/html-basics">
                                <Button variant="ghost" size="sm">HTML Basics</Button>
                            </Link>
                            <Link href="/concepts/css-fundamentals">
                                <Button variant="ghost" size="sm">CSS Fundamentals</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
