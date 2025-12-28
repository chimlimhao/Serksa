import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Coffee, Heart } from "lucide-react";

export default function SupportPage() {
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
                            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="/support" className="text-sm font-medium text-primary">
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
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                                <Heart className="w-8 h-8 text-accent" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold">Support This Project</h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Serksa is 100% free and always will be. If you found it helpful,
                                here's how you can support the project.
                            </p>
                        </div>

                        {/* Free Ways to Support */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span>🎉</span> Free Ways to Help
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">📢</span>
                                        <div>
                                            <div className="font-semibold">Share with Others</div>
                                            <p className="text-sm text-muted-foreground">
                                                Tell a friend, share on Twitter, or post in a learning community.
                                                Every share helps someone discover this resource.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Temporarily hidden - GitHub star section */}
                                    {/* <div className="flex items-start gap-3">
                                        <span className="text-2xl">⭐</span>
                                        <div>
                                            <div className="font-semibold">Star on GitHub</div>
                                            <p className="text-sm text-muted-foreground">
                                                If you're a developer, starring the repo helps others find it.
                                            </p>
                                            <Button variant="outline" size="sm" className="mt-2" asChild>
                                                <a href="https://github.com/yourusername/techsimple" target="_blank" rel="noopener noreferrer">
                                                    Star on GitHub
                                                </a>
                                            </Button>
                                        </div>
                                    </div> */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">💡</span>
                                        <div>
                                            <div className="font-semibold">Suggest Concepts</div>
                                            <p className="text-sm text-muted-foreground">
                                                Have an idea for a concept that should be explained? Let me know!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Financial Support - QR Code Payment */}
                        <Card className="border-accent/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-accent" />
                                    Support This Project
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Creating and maintaining this site takes time. If you'd like to support the project financially,
                                    you can send a donation via bank transfer. It's completely optional and doesn't unlock any features—everything stays free for everyone.
                                </p>
                                <div className="bg-muted/30 p-6 rounded-lg text-center space-y-4">
                                    <div className="text-sm font-medium">Scan to Support</div>
                                    {/* TODO: Replace with your actual QR code image */}
                                    <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                                        <div className="text-center text-muted-foreground text-sm">
                                            <div className="mb-2">📱</div>
                                            <div>Your Bank QR Code</div>
                                            <div className="text-xs mt-1">(Add image here)</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Scan with your banking app to send a donation
                                    </p>
                                </div>
                                <p className="text-sm text-muted-foreground italic">
                                    Your support helps cover hosting costs and motivates me to create more content. Thank you! 🙏
                                </p>
                            </CardContent>
                        </Card>

                        {/* Temporarily hidden - Buy Me a Coffee/Ko-fi section */}
                        {/* <Card className="border-accent/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Coffee className="w-5 h-5 text-accent" />
                                    Buy Me a Coffee
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Creating and maintaining this site takes time. If you'd like to support the project financially,
                                    you can buy me a coffee. It's completely optional and doesn't unlock any features—everything stays free for everyone.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button className="gap-2" asChild>
                                        <a href="https://buymeacoffee.com/yourusername" target="_blank" rel="noopener noreferrer">
                                            <Coffee className="w-4 h-4" />
                                            Buy Me a Coffee
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="gap-2" asChild>
                                        <a href="https://ko-fi.com/yourusername" target="_blank" rel="noopener noreferrer">
                                            <Heart className="w-4 h-4" />
                                            Support on Ko-fi
                                        </a>
                                    </Button>
                                </div>
                                <p className="text-sm text-muted-foreground italic">
                                    Your support helps cover hosting costs and motivates me to create more content.
                                </p>
                            </CardContent>
                        </Card> */}

                        {/* What Your Support Does */}
                        <Card>
                            <CardHeader>
                                <CardTitle>What Your Support Helps With</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Keeps the site running (hosting, domain, etc.)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Motivates me to create more concepts</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Allows me to spend more time improving explanations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Shows that this work is valued by the community</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Thank You */}
                        <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                            <h2 className="text-2xl font-bold mb-3">Thank You! 🙏</h2>
                            <p className="text-muted-foreground max-w-xl mx-auto">
                                Whether you share, star, suggest, or support financially—every bit of help makes a difference.
                                Thank you for being part of this journey to make tech education more accessible.
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
