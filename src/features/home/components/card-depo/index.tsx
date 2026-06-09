import { ITestimony } from '@/shared/types/IUseTestimonyService';
import Image from 'next/image';

interface CardDepoProps {
  testimony: ITestimony;
}

export function CardDepo({ testimony }: CardDepoProps) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[19.5rem] h-[18.5rem] p-6 px-4 rounded-lg shadow-search max-[348px]:max-w-[17.5rem]">
      <div className="flex items-end justify-self-start gap-4">
        <div className="bg-gray-250 rounded-full overflow-hidden w-16 h-16 shrink-0">
          {testimony.imageUrl && (
            <Image
              src={testimony.imageUrl}
              alt={testimony.userName}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex flex-col flex-1">
          <span className="text-gray-700 font-semibold leading-[1.4rem]">
            {testimony.userName}
          </span>
          <span
            className="text-gray-600 leading-[1.4rem] block max-w-40 whitespace-nowrap text-ellipsis overflow-hidden"
            title={testimony.role}
          >
            {testimony.role}
          </span>
        </div>
      </div>

      <p
        className="text-[0.875rem] leading-6 font-normal text-gray-750 overflow-hidden text-ellipsis"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 7,
          WebkitBoxOrient: 'vertical',
        }}
        title={testimony.description}
      >
        {testimony.description}
      </p>
    </div>
  );
}
