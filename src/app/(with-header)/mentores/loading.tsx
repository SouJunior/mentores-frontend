import { Skeleton } from '@/shared/components/ui/skeleton';

function CardMentorSkeleton() {
  return (
    <div className="flex flex-col gap-4 items-stretch p-6 px-4 min-h-[23.5rem] bg-white rounded-lg shadow-search">
      <Skeleton className="w-[7.5rem] h-[7.5rem] rounded-full self-center" />
      <div className="flex flex-col gap-1">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-5 w-16" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      <Skeleton className="h-10 w-full mt-auto rounded-md" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-blue-25 flex flex-col gap-2.5">
      <div className="flex h-[100px] flex-col py-6 px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-2 w-2 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Skeleton className="h-8 w-72" />
          <Skeleton className="h-4 w-80" />
        </div>
      </div>

      <div className="w-full bg-white py-8 mt-[50px]">
        <div className="flex justify-between px-8 max-w-7xl w-full mx-auto">
          <Skeleton className="h-10 w-72 rounded-lg" />
          <div className="flex gap-2.5">
            <Skeleton className="h-10 w-36 rounded-lg" />
            <Skeleton className="h-10 w-28 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] auto-rows-max gap-7.5 max-w-7xl w-full mx-auto p-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardMentorSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
