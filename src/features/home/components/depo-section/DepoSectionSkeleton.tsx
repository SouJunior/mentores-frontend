import { Skeleton } from '@/shared/components/ui/skeleton';

function CardDepoSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[19.5rem] h-[18.5rem] p-6 px-4 rounded-lg shadow-search shrink-0">
      <div className="flex items-end gap-4">
        <Skeleton className="w-16 h-16 rounded-full shrink-0" />
        <div className="flex flex-col gap-1 flex-1">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

export function DepoSectionSkeleton() {
  return (
    <div className="flex flex-col gap-8 p-16 px-8 max-w-7xl mx-auto w-full max-[1440px]:max-w-none max-[1440px]:px-0 max-[438px]:py-14">
      <Skeleton className="h-10 w-48 mx-8" />
      <div className="flex gap-4 overflow-hidden px-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardDepoSkeleton key={i} />
        ))}
      </div>
      <Skeleton className="h-10 w-36 rounded-md mx-auto" />
    </div>
  );
}
