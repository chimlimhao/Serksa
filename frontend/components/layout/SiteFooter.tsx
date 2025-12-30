import Link from "next/link";
import VariableFontHoverByRandomLetter from "@/components/fancy/text/variable-font-hover-by-random-letter";

export function SiteFooter() {
    return (
        <footer className="relative overflow-hidden w-full h-96 bg-white flex justify-end px-12 text-right items-start py-16 text-[#ff5941]">
            <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
                <ul>
                    <li className="hover:underline cursor-pointer">
                        <Link href="/learn">Walkthrough</Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <Link href="/concepts">All Concepts</Link>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <Link href="/about">About</Link>
                    </li>
                </ul>
                <ul>
                    <li className="hover:underline cursor-pointer">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li className="hover:underline cursor-pointer">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                    </li>
                </ul>
            </div>
            <VariableFontHoverByRandomLetter
                label="Serksa"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                staggerDuration={0.03}
                className="absolute bottom-4 left-0 sm:text-[240px] text-[100px] text-[#ff5941] font-bold leading-none cursor-pointer"
            />
        </footer>
    );
}
