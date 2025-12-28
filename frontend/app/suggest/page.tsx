'use client';

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function SuggestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        conceptName: '',
        category: '',
        why: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to an API
        console.log('Suggestion submitted:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen">
                <Header activeTab="suggest" />
                <div className="pt-24 pb-16">
                    <div className="container mx-auto px-4 max-w-2xl">
                        <Card className="text-center p-12">
                            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <CardTitle className="text-3xl mb-4">Thank You!</CardTitle>
                            <p className="text-muted-foreground mb-6">
                                Your suggestion has been received. I'll review it and consider adding it to the site.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Button onClick={() => setSubmitted(false)} variant="outline">
                                    Submit Another
                                </Button>
                                <Link href="/concepts">
                                    <Button>Browse Concepts</Button>
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Header activeTab="suggest" />

            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-2xl">
                    {/* Back Button */}
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-12 space-y-4">
                        <div className="w-16 h-16 mx-auto bg-[#FF8040]/10 rounded-full flex items-center justify-center">
                            <Lightbulb className="w-8 h-8 text-[#FF8040]" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">Suggest a Concept</h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Have a web development concept you wish was explained simply? Let me know!
                        </p>
                    </div>

                    {/* Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Share Your Idea</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Concept Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="conceptName">Concept Name *</Label>
                                    <Input
                                        id="conceptName"
                                        placeholder='e.g., "What is Flexbox?"'
                                        value={formData.conceptName}
                                        onChange={(e) => setFormData({ ...formData, conceptName: e.target.value })}
                                        required
                                    />
                                </div>

                                {/* Category */}
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category *</Label>
                                    <Select
                                        value={formData.category}
                                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="html-css">HTML & CSS</SelectItem>
                                            <SelectItem value="javascript">JavaScript</SelectItem>
                                            <SelectItem value="web-basics">Web Basics</SelectItem>
                                            <SelectItem value="tools">Tools & Workflow</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Why is it confusing */}
                                <div className="space-y-2">
                                    <Label htmlFor="why">Why is this concept confusing? *</Label>
                                    <Textarea
                                        id="why"
                                        placeholder="Tell me what makes this concept hard to understand..."
                                        rows={5}
                                        value={formData.why}
                                        onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                                        required
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        This helps me understand what to focus on in the explanation.
                                    </p>
                                </div>

                                {/* Email (Optional) */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Your Email (Optional)</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        I'll notify you when the concept is added (if you provide your email).
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <Button type="submit" className="w-full" size="lg">
                                    Submit Suggestion
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Info Card */}
                    <Card className="mt-8 bg-muted/30">
                        <CardContent className="pt-6">
                            <h3 className="font-semibold mb-3">What happens next?</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#001BB7]">•</span>
                                    <span>I'll review your suggestion and consider adding it to the site</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#001BB7]">•</span>
                                    <span>Popular suggestions get priority</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#001BB7]">•</span>
                                    <span>If you provided your email, I'll notify you when it's live</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#001BB7]">•</span>
                                    <span>All concepts are added for free—no paywalls</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
}
