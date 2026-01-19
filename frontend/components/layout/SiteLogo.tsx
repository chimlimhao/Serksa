import Link from "next/link";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteLogo({ size = "md", className }: { size?: "sm" | "md" | "lg", className?: string }) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-14 h-14"
    };

    const iconSize = {
        sm: "w-5 h-5",
        md: "w-6 h-6",
        lg: "w-8 h-8"
    };

    return (
        <div className={cn(className)}>
            <Link href="/" className={cn("flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all", sizeClasses[size])}>
                <BookOpen className={cn("text-[#ff5941]", iconSize[size])} />
            </Link>
        </div>
    );
}
