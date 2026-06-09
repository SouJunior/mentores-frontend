import { Skeleton } from '@/shared/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-8 w-24 mt-1 mb-2" />

      <div className="flex flex-col gap-6 max-w-172">
        <Skeleton className="h-14 w-full rounded-lg" />

        <div className="flex justify-between max-w-md">
          <Skeleton className="h-10 w-40 rounded-lg" />
          <Skeleton className="h-10 w-44 rounded-lg" />
        </div>

        <Skeleton className="h-11 w-full rounded-lg" />

        <div className="h-px w-full bg-gray-700" />

        <div className="flex items-center justify-end gap-4">
          <Skeleton className="h-10 w-24 rounded-lg" />
          <Skeleton className="h-10 w-[5.9rem] rounded-lg" />
        </div>
      </div>
    </div>
  );
}
