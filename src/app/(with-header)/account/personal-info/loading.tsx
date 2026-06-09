import { Skeleton } from '@/shared/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-8 w-64 mt-1 mb-2" />
      <Skeleton className="h-4 w-48" />

      <div className="flex flex-col gap-4 max-w-[36.3rem]">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>

        <div className="h-px w-full bg-gray-700" />

        <div className="flex gap-4 ml-auto">
          <Skeleton className="h-10 w-24 rounded-lg" />
          <Skeleton className="h-10 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
