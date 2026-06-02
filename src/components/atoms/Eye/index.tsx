'use client';

import {
  Eye as VisibilityIcon,
  EyeOff as VisibilityOffIcon,
} from 'lucide-react';
import { ComponentProps } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { EyeContainer } from './style';

type EyeProps = ComponentProps<typeof Toggle>;

export function Eye({ pressed, ...props }: EyeProps) {
  return (
    <EyeContainer {...props} pressed={pressed}>
      {pressed ? <VisibilityOffIcon size={16} /> : <VisibilityIcon size={16} />}
    </EyeContainer>
  );
}
