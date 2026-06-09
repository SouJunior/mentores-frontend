import { Info as InfoOutlinedIcon } from 'lucide-react';
import { useState } from 'react';

interface ToolTipProps {
  right?: number;
}

export function InfoTooltip({ right }: ToolTipProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <span
      className="flex justify-end h-6 absolute cursor-pointer z-40 [&_svg]:w-4 [&_svg]:h-4"
      style={right !== undefined ? { right: `${right}px` } : undefined}
    >
      <InfoOutlinedIcon
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTimeout(() => setTooltipVisible(false), 2000)}
      />
      <div
        className={`absolute bg-white rounded-lg z-9999 shadow-md p-4 flex justify-center flex-col w-[400px] transition-opacity duration-300 ease-in-out ${
          tooltipVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <h3 className="text-blue-400 text-base font-bold">
          Sua senha deve conter:
        </h3>
        <ul className="list-none mt-[0.8rem] relative px-4">
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[80%] rounded-full bg-gray-700"
            aria-hidden
          />
          <li className="text-gray-700 leading-[150%]">
            Mínimo 8 caracteres.
          </li>
          <li className="text-gray-700 leading-[150%]">
            Pelo menos uma letra maiúscula.
          </li>
          <li className="text-gray-700 leading-[150%]">
            Pelo menos um número.
          </li>
          <li className="text-gray-700 leading-[150%]">
            Pelo menos um caractere especial (ex: @#$)
          </li>
        </ul>
      </div>
    </span>
  );
}
