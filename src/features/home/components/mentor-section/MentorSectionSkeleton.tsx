import { Skeleton } from '@/shared/components/ui/skeleton';

function CardMentorSkeleton() {
  return (
    <div className="flex flex-col gap-4 items-stretch p-6 px-4 min-h-[23.5rem] bg-white">
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

export function MentorSectionSkeleton() {
  return (
    <section className="bg-blue-25">
      <div className="container relative py-16 pr-0 max-[1440px]:max-w-none max-[1440px]:py-16 max-[1440px]:px-0 max-[438px]:py-14">
        <Skeleton className="h-10 w-64 mx-8" />
        <div className="flex gap-4 mt-8 overflow-hidden px-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="min-w-[16rem]">
              <CardMentorSkeleton />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
      </div>
    </section>
  );
}
