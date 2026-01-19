import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Sidebar Skeleton */}
            <aside className="hidden md:flex w-72 shrink-0 border-r border-gray-100 flex-col sticky top-0 h-screen p-8 space-y-8">
                <Skeleton className="h-8 w-32 rounded-lg" />
                <div className="space-y-4">
                    <Skeleton className="h-4 w-40 rounded-md" />
                    <div className="space-y-2">
                        <Skeleton className="h-10 w-full rounded-xl" />
                        <Skeleton className="h-10 w-full rounded-xl" />
                        <Skeleton className="h-10 w-full rounded-xl" />
                    </div>
                </div>
                <div className="space-y-4 pt-4">
                    <Skeleton className="h-4 w-32 rounded-md" />
                    <div className="space-y-2">
                        <Skeleton className="h-10 w-full rounded-xl" />
                        <Skeleton className="h-10 w-full rounded-xl" />
                    </div>
                </div>
            </aside>

            {/* Content Skeleton */}
            <div className="flex-1 h-screen overflow-y-auto">
                <div className="max-w-4xl mx-auto pt-16 pb-32 px-6 lg:px-12 space-y-12">
                    <div className="space-y-8">
                        <Skeleton className="h-4 w-24 rounded-full" />
                        <div className="space-y-4">
                            <Skeleton className="h-16 md:h-24 w-3/4 rounded-2xl" />
                            <Skeleton className="h-6 w-1/2 rounded-lg" />
                        </div>
                    </div>

                    <div className="space-y-12 pt-8">
                        <div className="space-y-4">
                            <Skeleton className="h-8 w-48 rounded-lg" />
                            <Skeleton className="h-40 w-full rounded-[2.5rem]" />
                        </div>
                        <div className="space-y-4">
                            <Skeleton className="h-8 w-64 rounded-lg" />
                            <Skeleton className="h-96 w-full rounded-[2.5rem]" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Skeleton className="h-32 w-full rounded-3xl" />
                            <Skeleton className="h-32 w-full rounded-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
