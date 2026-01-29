import { cn } from '../lib/utils';

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                'animate-pulse rounded-lg bg-secondary-200/50',
                className
            )}
        />
    );
}

export function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            {/* Image Skeleton */}
            <Skeleton className="aspect-square rounded-t-3xl rounded-b-none" />

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <Skeleton className="h-6 w-3/4" />

                {/* Description */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                {/* Ingredients */}
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-14 rounded-full" />
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-6 w-12" />
                </div>

                {/* Button */}
                <Skeleton className="h-12 w-full rounded-2xl" />
            </div>
        </div>
    );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
}
