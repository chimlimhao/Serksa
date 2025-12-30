import Link from "next/link";
import { BookOpen } from "lucide-react";

export function SiteLogo() {
    return (
        <div className="fixed top-6 left-6 z-50">
            <Link href="/" className="flex items-center justify-center w-10 h-10 hover:opacity-80 transition-opacity">
                <BookOpen className="w-6 h-6 text-[#ff5941]" />
            </Link>
        </div>
    );
}
