import { Skeleton } from '@/shared/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-8 w-24 mt-1 mb-2" />
      <Skeleton className="h-4 w-48" />

      <div className="flex flex-col gap-4 max-w-[42.75rem]">
        <div className="grid grid-cols-[8rem_1fr] items-center gap-y-12 gap-x-16">
          <Skeleton className="w-32 h-32 rounded-full" />

          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 w-48" />
            <div className="grid grid-cols-[repeat(3,9.5rem)] gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="h-[2.2rem] rounded-[50px]" />
              ))}
            </div>
          </div>

          <div aria-hidden />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-44" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-4 w-16 ml-auto" />
          </div>
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
