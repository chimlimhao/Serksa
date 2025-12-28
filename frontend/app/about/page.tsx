import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Serksa
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <Link href="/concepts" className="text-sm font-medium hover:text-primary transition-colors">
                                All Concepts
                            </Link>
                            <Link href="/about" className="text-sm font-medium text-primary">
                                About
                            </Link>
                            <Link href="/support" className="text-sm font-medium hover:text-primary transition-colors">
                                Support
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    {/* Back Button */}
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Serksa</h1>

                        <Card className="my-8">
                            <CardContent className="">
                                <p className="text-lg italic text-muted-foreground">
                                    "A simple site that explains tech concepts the way you wish someone explained them to you."
                                </p>
                            </CardContent>
                        </Card>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Why This Exists</h2>
                        <p className="text-muted-foreground mb-4">
                            When I was learning to code, I struggled with technical jargon and overly complex explanations.
                            I'd read documentation that assumed I already knew what I was trying to learn.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            I wished someone would just explain things simply, with analogies I could relate to and diagrams that made sense.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            So I built this. It's the resource I needed as a beginner. Now it's here for you.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">The Philosophy</h2>
                        <div className="space-y-4">
                            <Card>
                                <CardContent className="">
                                    <h3 className="font-semibold mb-2">Clarity Over Completeness</h3>
                                    <p className="text-sm text-muted-foreground">
                                        I'd rather you understand 80% really well than be confused by 100% of the details.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="">
                                    <h3 className="font-semibold mb-2">Mental Models Over Memorization</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Good analogies stick. They help you reason about new problems, not just remember facts.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="">
                                    <h3 className="font-semibold mb-2">Visual Over Textual</h3>
                                    <p className="text-sm text-muted-foreground">
                                        A simple diagram can explain in seconds what paragraphs of text cannot.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <h2 className="text-2xl font-bold mt-12 mb-4">What This Is NOT</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-destructive">✗</span>
                                <span>Not a comprehensive course (there are plenty of those)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-destructive">✗</span>
                                <span>Not interactive coding exercises (use freeCodeCamp for that)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-destructive">✗</span>
                                <span>Not AI-generated content (every word is written by a human)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-destructive">✗</span>
                                <span>Not behind a paywall (and never will be)</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-4">Who Made This?</h2>
                        <p className="text-muted-foreground mb-4">
                            Hi! I'm a developer who believes that learning should be accessible and enjoyable.
                            I've spent years explaining tech concepts to beginners, and this site is a collection of those explanations.
                        </p>
                        <p className="text-muted-foreground mb-4">
                            This is a side project built with love, maintained in my free time, and shared freely with the community.
                        </p>

                        <h2 className="text-2xl font-bold mt-12 mb-4">How You Can Help</h2>
                        <div className="space-y-4">
                            <Card>
                                <CardContent className="">
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <span>📢</span> Share It
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        If this helped you, share it with someone else who's learning. That's the best support.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="">
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <span>💡</span> Suggest Concepts
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Have a concept you wish was explained simply? Let me know!
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="">
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                        <Heart className="w-4 h-4 text-accent" /> Support
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        If you found this valuable and want to support the project, you can buy me a coffee.
                                    </p>
                                    <Link href="/support">
                                        <Button size="sm" variant="outline">
                                            Support This Project
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
                            <p className="text-lg font-semibold mb-2">Thank you for being here.</p>
                            <p className="text-muted-foreground">
                                Every person who learns from this site makes the effort worthwhile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-card border-t py-12 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="text-sm text-muted-foreground">
                        © 2025 Serksa. Made with ❤️ for learners.
                    </div>
                </div>
            </footer>
        </div>
    );
}
