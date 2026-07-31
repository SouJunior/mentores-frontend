import { cn } from '@/shared/lib/utils';
import { CircleAlert, X } from 'lucide-react';

interface FormAlertProps {
  title: string;
  description?: string;
  onClose?: () => void;
  className?: string;
}

export function FormAlert({
  title,
  description,
  onClose,
  className,
}: FormAlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        'relative flex items-start gap-3 rounded-lg bg-[#e3687c] p-4 pr-10 text-white',
        className
      )}
    >
      <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
      <div className="flex flex-col gap-1">
        <strong className="font-semibold leading-[130%]">{title}</strong>
        {description && (
          <span className="text-sm leading-[140%] text-white/90">
            {description}
          </span>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          aria-label="Fechar aviso"
          onClick={onClose}
          className="absolute right-3 top-3 text-white transition-opacity hover:opacity-80"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
