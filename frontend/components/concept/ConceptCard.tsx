import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ConceptCardProps {
    title: string;
    description: string;
    category: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    readTime: string;
    slug: string;
}

export function ConceptCard({ title, description, category, difficulty, readTime, slug }: ConceptCardProps) {
    return (
        <Link href={`/concepts/${slug}`}>
            <Card className="h-full hover:shadow-lg transition-all hover:border-[#001BB7]/50 cursor-pointer group">
                <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                            {category}
                        </Badge>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                                {difficulty}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{readTime}</span>
                        </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-[#001BB7] transition-colors">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
            </Card>
        </Link>
    );
}
