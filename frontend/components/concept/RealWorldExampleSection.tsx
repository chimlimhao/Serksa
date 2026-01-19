'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface RealWorldExampleSectionProps {
    title: string;
    description: string;
    points: string[];
    appName?: string; // e.g., "Instagram", "WhatsApp", "Netflix"
    appLogo?: string; // Path to app logo image
}

// Map common app names to their logo paths
const appLogoMap: Record<string, string> = {
    instagram: '/logo/ig.png',
    whatsapp: '/logo/whatsapp.png',
    netflix: '/logo/netflix.png',
    twitter: '/logo/twitter.png',
    facebook: '/logo/facebook.png',
};

export function RealWorldExampleSection({ 
    title, 
    description, 
    points,
    appName,
    appLogo 
}: RealWorldExampleSectionProps) {
    const logoPath = appLogo || (appName ? appLogoMap[appName.toLowerCase()] : null);
    
    return (
        <section className="mb-16">
            <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#ff5941]/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#ff5941]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>
            
            <Card className="bg-linear-to-br from-gray-50 to-white border-2 border-gray-200">
                <CardHeader>
                    {logoPath && (
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                                <Image 
                                    src={logoPath} 
                                    alt={appName || 'App'} 
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            {appName && (
                                <CardTitle className="text-xl text-gray-900">{appName}</CardTitle>
                            )}
                        </div>
                    )}
                    <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                                <div className="w-6 h-6 rounded-full bg-[#ff5941] flex items-center justify-center shrink-0 mt-0.5">
                                    <span className="text-white font-bold text-xs">{index + 1}</span>
                                </div>
                                <p className="text-gray-700 flex-1">{point}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
