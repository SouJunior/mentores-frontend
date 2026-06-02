'use client';

import { AuthProvider } from '@/context/Auth/AuthContext';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import '@/lib/dayjs';
import { queryClient } from '@/lib/react-query';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </StyledComponentsRegistry>
  );
}
